# Proper Infinite Horizons — Repairable Structure Authoring

## Purpose

Custom structures are not merely loot containers. They are readable, damaged production sites that show how a machine line is meant to work while leaving one or more important links missing.

The player should be able to walk through a ruin and answer three questions:

1. What process did this site perform?
2. What is missing or broken?
3. Is repairing this faster than dismantling it or rebuilding elsewhere?

The structures must remain useful during ordinary play. Rare favorable combinations may create dramatic progression shortcuts, but the pack is not balanced around finding them.

## Authoring method

Use curated template variants rather than random block deletion. Random deletion can make a lesson unreadable or destroy block entities unpredictably. Every variant should be deliberately damaged so the original process remains inferable.

For each structure family, build one complete reference line first. Duplicate it into damaged variants and remove or disconnect specific components.

Example family: `collapsed_workshop`

- `collapsed_workshop_belt_gap`: one conveyor span is missing.
- `collapsed_workshop_drive_gap`: one shaft or cogwheel breaks power transmission.
- `collapsed_workshop_basin_gap`: the mixer remains, but its basin is absent.
- `collapsed_workshop_output_gap`: processing works, but output handling is broken.
- `collapsed_workshop_salvaged`: most valuable parts have already been stripped.
- `collapsed_workshop_lucky`: rare variant with an intact machine and only a small repair needed.

The weighted template pool should favor incomplete common variants and give the lucky variant a very small weight.

## Building in the test profile

1. Create a dedicated creative world named something obvious, such as `Structure Lab`.
2. Build the complete machine line and confirm that it genuinely works.
3. Add walls, collapse damage, storage, access routes, hazards, and visual clues without obscuring the process.
4. Duplicate the build for each curated damaged variant.
5. Place a structure block at the same logical origin in every variant.
6. Save each variant under the `proper_horizon` namespace, for example:

   `proper_horizon:collapsed_workshop/belt_gap`

Minecraft writes the resulting file to:

`<profile>/saves/<world>/generated/proper_horizon/structures/collapsed_workshop/belt_gap.nbt`

Run `IMPORT_STRUCTURE.ps1` from the repository to copy the saved template into the pack.

## Data-pack registration

A complete structure family requires:

- one or more `.nbt` templates in `kubejs/data/proper_horizon/structures/`;
- a template pool in `kubejs/data/proper_horizon/worldgen/template_pool/`;
- a structure definition in `kubejs/data/proper_horizon/worldgen/structure/`;
- a structure set controlling spacing in `kubejs/data/proper_horizon/worldgen/structure_set/`;
- a biome tag or direct biome list controlling where it may appear;
- dedicated loot tables or LootJS modifiers for its containers.

Do not register the family until every referenced `.nbt` file exists. A template pool pointing at a missing template creates noisy world-generation errors and may prevent the structure from appearing.

## Loot and machine rules

- Most structures should contain parts, stored materials, and broken infrastructure.
- Intact machines may appear, but should be structure-specific and uncommon.
- A single ruin must not contain an entire advanced progression chain.
- Loot should explain the former purpose of the site.
- Containers should use loot tables rather than fixed hand-placed inventories.
- Structure variants should provide complementary possibilities rather than identical rewards.

## Teaching rules

Each structure family should teach one primary concept clearly:

- workshop: rotational power and item movement;
- wash plant: fan processing and bulk handling;
- pump station: tanks, pumps, and pipe routing;
- substation: generation, storage, and electrical distribution;
- rail depot: loading, unloading, tracks, and scheduling;
- machine hall: multiblock layout and industrial processing;
- data center: AE2 components and network topology.

A structure may hint at later systems, but it should not become an unreadable museum of every mod.

## First prototype acceptance test

The collapsed workshop is ready only when a fresh player can:

- identify the intended input and output;
- trace the power path visually;
- identify the missing link without opening the quest book;
- repair at least one common variant using nearby or scavenged materials;
- choose to dismantle the site instead without losing all progression value;
- occasionally find a rare variant that meaningfully compresses one crafting bottleneck.
