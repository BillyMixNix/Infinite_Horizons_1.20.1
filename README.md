# Proper Infinite Horizons

**Proper Infinite Horizons** is a ground-up progression redesign of the MIT-licensed *Infinite Horizons 1.20.1* modpack.

The mod platform is the starting point. The game layered on top of it is being rebuilt around one promise:

> Normal modded Minecraft exploration, mining, structures, industry, and logistics on an immense flat world where the horizon matters.

This fork is not intended to be skyblock with grass, a collection of disconnected mod tutorials, or a checklist that asks players to craft everything. The player should begin with a vulnerable homestead and eventually build a connected industrial territory of mines, farms, railways, power lines, towns, and factories.

## Design pillars

- **The world stays flat, not empty.** Geology, ores, structures, settlements, fluids, and regional resources must still exist.
- **Required progression is never a guessing game.** Every mandatory resource has a documented, non-circular route.
- **Exploration is horizontal.** Distant deposits, structures, villages, and regions create reasons to travel and build infrastructure.
- **Mods have jobs.** Create handles early mechanics and transport; industrial mods handle power, chemistry, and processing; storage networks arrive after real logistics; GregTech is advanced engineering rather than a parallel opening game.
- **Automation follows understanding.** The player obtains and processes a resource manually before unlocking scalable production.
- **Nights are playable.** The starting homestead is defensible, while the wider plain remains dangerous and eventually rewarding.
- **Quests explain decisions.** The loaded questbook contains one concise authored campaign. The inherited Alpha/Beta and mod-catalogue chapters are archived in Git history because their rewards and dependencies contradicted the redesign.

## Campaign structure

1. **The First Horizon** — shelter, stone, first metal, lava, and a dependable homestead.
2. **The Mechanical Age** — Create power, processing, and the first automated workshop.
3. **Lines Across the Plain** — surveying, remote outposts, freight, and rail logistics.
4. **The Industrial Age** — electrical power, ore processing, steel, chemistry, and factory-scale production.
5. **A Connected Territory** — storage networks, distributed power, automation control, and specialized settlements.
6. **The Engineered Horizon** — advanced materials, continental projects, and late-game engineering.

## Development status

The redesign is under active development on `agent/proper-infinite-horizon`. It is **not yet release-ready**. Every progression act must pass an in-game validation gate before merge:

- fresh-world launch succeeds;
- required recipes load without KubeJS errors;
- every mandatory quest can be completed in order;
- no required item depends entirely on random trades or structures;
- no earlier mod invalidates a later progression tier;
- dedicated-server and single-player smoke tests both pass.

The authoritative design and implementation checklist live in [`docs/PROPER_HORIZON_DESIGN.md`](docs/PROPER_HORIZON_DESIGN.md) and [`docs/REWORK_CHECKLIST.md`](docs/REWORK_CHECKLIST.md).

## Attribution

This project is forked from `KCtops6/Infinite_Horizons_1.20.1` under the MIT License. Third-party mods remain the property of their respective authors and retain their own licenses.