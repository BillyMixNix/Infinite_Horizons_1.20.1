#!/usr/bin/env python3
"""Static checks for Proper Infinite Horizons pack data.

This is intentionally dependency-free so it can run in GitHub Actions and from a
fresh Python installation. It does not replace an in-game Forge launch test.
"""

from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
QUEST_ROOT = ROOT / "config" / "ftbquests" / "quests"
CAMPAIGN_GROUP = "511DB7CE6F25D05C"

HEX_ID_RE = re.compile(r'\bid\s*:\s*"([0-9A-F]{16})"')
DEPENDENCY_BLOCK_RE = re.compile(r'\bdependencies\s*:\s*\[(.*?)\]', re.DOTALL)
HEX_STRING_RE = re.compile(r'"([0-9A-F]{16})"')
RECIPE_ID_RE = re.compile(r"""\.id\(\s*['\"]([^'\"]+)['\"]\s*\)""")
GROUP_RE = re.compile(r'\bgroup\s*:\s*"([0-9A-F]{16})"')
WORLD_PRESET_RE = re.compile(r'^\s*world-preset\s*=\s*"([^"]+)"', re.MULTILINE)


def iter_files(base: Path, suffix: str):
    if base.exists():
        yield from sorted(base.rglob(f"*{suffix}"))


def relative(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()


def check_balanced_snbt(path: Path, text: str) -> list[str]:
    errors: list[str] = []
    pairs = {"}": "{", "]": "["}
    stack: list[tuple[str, int]] = []
    in_string = False
    escaped = False
    line = 1
    i = 0

    while i < len(text):
        char = text[i]
        if char == "\n":
            line += 1

        if in_string:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == '"':
                in_string = False
            i += 1
            continue

        if char == '"':
            in_string = True
            i += 1
            continue

        if char == "/" and i + 1 < len(text) and text[i + 1] == "/":
            newline = text.find("\n", i + 2)
            if newline == -1:
                break
            i = newline
            continue

        if char in "{[":
            stack.append((char, line))
        elif char in "}]":
            if not stack or stack[-1][0] != pairs[char]:
                errors.append(f"{relative(path)}:{line}: unmatched closing bracket {char!r}")
            else:
                stack.pop()
        i += 1

    if in_string:
        errors.append(f"{relative(path)}: unterminated quoted string")
    for opener, opener_line in reversed(stack):
        errors.append(f"{relative(path)}:{opener_line}: unclosed bracket {opener!r}")
    return errors


def validate_json(errors: list[str]) -> None:
    for path in iter_files(ROOT / "kubejs" / "data", ".json"):
        try:
            json.loads(path.read_text(encoding="utf-8"))
        except (UnicodeDecodeError, json.JSONDecodeError) as exc:
            errors.append(f"{relative(path)}: invalid JSON: {exc}")


def validate_quests(errors: list[str]) -> None:
    chapter_files = list(iter_files(QUEST_ROOT / "chapters", ".snbt"))
    support_files = [
        path
        for path in (QUEST_ROOT / "chapter_groups.snbt", QUEST_ROOT / "data.snbt")
        if path.exists()
    ]
    all_snbt = support_files + chapter_files
    all_ids: list[tuple[str, Path]] = []
    dependencies: list[tuple[str, Path]] = []

    for path in all_snbt:
        text = path.read_text(encoding="utf-8")
        errors.extend(check_balanced_snbt(path, text))
        all_ids.extend((match, path) for match in HEX_ID_RE.findall(text))
        for block in DEPENDENCY_BLOCK_RE.findall(text):
            dependencies.extend((match, path) for match in HEX_STRING_RE.findall(block))

    id_counts = Counter(value for value, _ in all_ids)
    for value, count in sorted(id_counts.items()):
        if count > 1:
            locations = sorted({relative(path) for found, path in all_ids if found == value})
            errors.append(
                f"Duplicate FTB Quest id {value} appears {count} times: "
                + ", ".join(locations)
            )

    known_ids = set(id_counts)
    for dependency, path in dependencies:
        if dependency not in known_ids:
            errors.append(f"{relative(path)}: unresolved quest dependency {dependency}")

    groups_path = QUEST_ROOT / "chapter_groups.snbt"
    group_ids: set[str] = set()
    if groups_path.exists():
        group_ids.update(HEX_ID_RE.findall(groups_path.read_text(encoding="utf-8")))

    for path in chapter_files:
        text = path.read_text(encoding="utf-8")
        group_match = GROUP_RE.search(text)
        if not group_match:
            errors.append(f"{relative(path)}: chapter has no group id")
            continue
        group_id = group_match.group(1)
        if group_id not in group_ids:
            errors.append(f"{relative(path)}: references missing chapter group {group_id}")
        if path.name.startswith("proper_horizon_") and group_id != CAMPAIGN_GROUP:
            errors.append(f"{relative(path)}: Proper Horizon chapter is outside campaign group")


def validate_recipe_ids(errors: list[str]) -> None:
    ids: list[tuple[str, Path]] = []
    for path in iter_files(ROOT / "kubejs" / "server_scripts", ".js"):
        text = path.read_text(encoding="utf-8")
        ids.extend(
            (recipe_id, path)
            for recipe_id in RECIPE_ID_RE.findall(text)
            if recipe_id.startswith("proper_horizon:")
        )

    counts = Counter(recipe_id for recipe_id, _ in ids)
    for recipe_id, count in sorted(counts.items()):
        if count > 1:
            locations = sorted({relative(path) for found, path in ids if found == recipe_id})
            errors.append(
                f"Duplicate Proper Horizon recipe id {recipe_id}: "
                + ", ".join(locations)
            )


def validate_world_preset(errors: list[str]) -> None:
    config_path = ROOT / "config" / "defaultworldtype" / "client-config.toml"
    if not config_path.exists():
        errors.append(f"Missing {relative(config_path)}")
        return

    match = WORLD_PRESET_RE.search(config_path.read_text(encoding="utf-8"))
    if not match:
        errors.append(f"{relative(config_path)}: no world-preset setting found")
        return

    preset = match.group(1)
    if ":" not in preset:
        errors.append(f"{relative(config_path)}: world preset {preset!r} is not namespaced")
        return

    namespace, identifier = preset.split(":", 1)
    preset_path = (
        ROOT
        / "kubejs"
        / "data"
        / namespace
        / "worldgen"
        / "world_preset"
        / f"{identifier}.json"
    )
    if not preset_path.exists():
        errors.append(
            f"{relative(config_path)} selects {preset}, but {relative(preset_path)} does not exist"
        )
        return

    try:
        payload = json.loads(preset_path.read_text(encoding="utf-8"))
        generator = payload["dimensions"]["minecraft:overworld"]["generator"]
        settings = generator["settings"]
    except (KeyError, TypeError, json.JSONDecodeError) as exc:
        errors.append(f"{relative(preset_path)}: malformed world preset: {exc}")
        return

    if generator.get("type") != "minecraft:flat":
        errors.append(f"{relative(preset_path)}: overworld generator is not flat")
    if settings.get("features") is not True:
        errors.append(f"{relative(preset_path)}: biome features are not enabled")

    layers = settings.get("layers")
    if not isinstance(layers, list):
        errors.append(f"{relative(preset_path)}: settings.layers is not a list")
        return

    heights: dict[str, int] = {}
    for layer in layers:
        if not isinstance(layer, dict):
            continue
        block = layer.get("block")
        height = layer.get("height")
        if isinstance(block, str) and isinstance(height, int):
            heights[block] = heights.get(block, 0) + height

    if heights.get("minecraft:deepslate", 0) < 32:
        errors.append(f"{relative(preset_path)}: insufficient deepslate depth")
    if heights.get("minecraft:stone", 0) < 32:
        errors.append(f"{relative(preset_path)}: insufficient stone depth")


def main() -> int:
    errors: list[str] = []
    validate_json(errors)
    validate_quests(errors)
    validate_recipe_ids(errors)
    validate_world_preset(errors)

    if errors:
        print("Proper Infinite Horizons static validation FAILED:")
        for error in errors:
            print(f"  - {error}")
        return 1

    print("Proper Infinite Horizons static validation passed.")
    print("Reminder: this does not replace a fresh-world Forge launch and playtest.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
