# Proper Infinite Horizons — Authoritative Design Specification

This document is the source of truth for the redesign. Existing mods, recipes, configs, and upstream history are implementation material, not design authority. When an inherited system conflicts with this document, the inherited system changes or is removed from the loaded pack.

## 1. Product statement

Proper Infinite Horizons is an industrial exploration modpack set on an immense, predominantly flat overworld. It preserves superflat's readability, construction freedom, and monumental sightlines while restoring geology, mining, structures, regional resources, risk, discovery, and long-distance infrastructure.

The fantasy is not escaping an empty world. The fantasy is transforming a vast undeveloped continent into a connected civilization.

## 2. Non-negotiable rules

### Flat does not mean resource-less

The overworld provides deep geology, ordinary ores, rare regional deposits, structures, water features, and distant sites. Resource creation from nothing is late infrastructure, not the answer to missing world generation.

### No mandatory mystery routes

Every required item has at least one deterministic route described by the campaign. JEI may provide recipe detail, but the player must not need a wiki, a lucky wandering trader, an undisclosed structure, or an inferred interaction to continue.

### No circular bootstraps

A resource may not require itself, its downstream product, or an inaccessible dimension to produce its first unit. Bootstrap recipes may be inefficient, but they must be reliable.

### No universal early resource machine

Sifting, crops, bees, laser drills, digital miners, resource trees, void miners, and similar systems may not replace the opening material economy. Renewable production follows discovery and industrialization.

### Logistics must matter

Regional deposits and distant points of interest create reasons to build roads, railways, freight depots, power transmission, pipelines, and outposts. Teleportation connects established routes; it does not replace developing them.

### One authored campaign

The loaded questbook contains one six-act campaign and one concise optional-project chapter. The inherited Alpha/Beta trees and reward-heavy mod catalogues are preserved in Git history but removed from the live pack because they contradicted progression and enabled bypasses.

### Rewards solve friction, not progression

Rewards may provide food, light, measurement tools, or a small deterministic bootstrap. They must not hand the player the completed machine tier or resource stockpile the quest is intended to teach.

## 3. World design

### Surface

The surface remains level. Horizontal variety comes from structures, ponds, settlements, ruins, resource sites, infrastructure, and rare purposeful interruptions rather than ordinary mountain noise.

The current technical baseline uses a fixed plains biome because Minecraft 1.20.1's vanilla flat generator has a fixed biome source and the inherited pack has no tested multi-biome flat generator. Biome-like regional identity should therefore be added through features, structures, deposits, vegetation, weather-capable systems, and authored sites unless a replacement generator is proven safe.

Implemented baseline:

- rare shallow ponds;
- all compatible registered structure sets considered;
- villages, ruins, dungeons, and landmarks subject to actual generation testing;
- no free world-generated waystone network.

Desired additions:

- industrial ruins and rail remnants;
- craters, trenches, marsh patches, and sinkholes that preserve the horizon;
- visible landmarks and settlement districts;
- frontier events and valuable night activity.

### Underground

The Deep Flat preset currently specifies:

- one bedrock layer;
- 64 deepslate layers;
- 60 stone layers;
- four dirt layers;
- one grass surface layer.

Biome features are enabled so ordinary and modded ore-placement systems can participate. Nether and End use their normal noise generators.

### Resource classes

**Common geology:** coal, iron, copper, redstone, lapis, basic stone, and common modded metals. These should exist in ordinary deposits and support the opening near the homestead.

**Regional geology:** large iron/copper motherlodes and future oil, uranium, nickel, lead, silver, aluminum, salt, sulfur, or crystal districts. These should justify outposts and freight.

**Exceptional resources:** dimensional materials, magical substances, meteor materials, and synthetic elements. These come from dangerous structures, dimensions, advanced processing, or expensive renewable infrastructure.

### Prospecting

Blind strip-mining is not exploration. The intended ladder is:

1. visible landmarks, maps, manual surveys, exposed samples, and village knowledge;
2. a tested handheld prospecting tool;
3. limited chunk or region scanning;
4. automated extraction only after a site has been discovered and developed.

The Digital Miner remains unavailable until that ladder exists and is validated.

## 4. Campaign

### Act 0 — The First Horizon

Goal: establish a survivable, deterministic opening.

Milestones:

- protected homestead and playable first night;
- wood, crafting, and dependable stone;
- furnace, charcoal, food, and lighting;
- first iron and bucket;
- two deterministic bootstrap water buckets and a permanent 2×2 source;
- clear bootstrap lava recipe;
- renewable dripstone lava;
- obsidian and permission to enter the mechanical age.

### Act I — The Mechanical Age

Primary system: Create.

Goal: turn manual labor into a visible mechanical workshop.

Milestones include rotational power and stress, reusable processing stations, material flow, brass, sequenced assembly, deployers, drills, mechanical crafting, and one genuinely automated repeated component.

Create supplies construction and mechanical processing. Sifting is bootstrap/trace recovery, not universal ore generation.

### Act II — Lines Across the Plain

Primary systems: Create trains and physical freight.

Goal: make horizontal distance into gameplay.

Milestones include surveying, a permanent remote outpost, freight storage, track, stations, a scheduled train, a real delivery, and signals. A waystone is optional and crafted only after the railway using a station and precision mechanism.

### Act III — The Industrial Age

Primary systems: Immersive Engineering first, followed by Mekanism and other industrial mods.

Goal: move from workshop production to a coordinated electrical factory.

Roles:

- Immersive Engineering: coke, treated wood, canonical early steel, visible wires, and the first grid;
- Thermal: dependable general processing and fluids;
- Mekanism: advanced ore processing, gases, chemistry, and later high-energy systems;
- Ender IO: compact integration after conventional infrastructure;
- Powah and Advanced Generators: scalable or specialized later power.

The act ends with multiple automated lines operating as one factory.

### Act IV — A Connected Territory

Primary system: Applied Energistics 2.

Goal: organize multiple developed sites without making physical logistics obsolete.

Local drawers and barrels remain production buffers. AE2 is the primary authored network and autocrafting path. Refined Storage is optional. Wireless access arrives after freight and a wired operations core. Completion requires genuine multi-step processing and a remote production facility that still retains local storage and freight function.

### Act V — The Engineered Horizon

Primary system: GregTech integrated with the existing territory.

Goal: make late game about constructing systems and transforming the world.

GregTech begins as advanced engineering built upon existing steel, power, chemistry, freight, and automation. It does not demand replaying the opening in an isolated ladder.

Completion requires several functional continental projects, such as:

- a multi-stop scheduled railway;
- a regional refinery and chemical complex;
- a grid-scale power plant and backbone;
- an automated agricultural district;
- a centrally supplied settlement;
- dimensional research and material integration.

The final reward is the engineered horizon itself, not one compressed trophy item.

## 5. Optional systems

Optional systems are evaluated as projects, not catalogues.

- food mods provision workers, travelers, and settlements;
- MineColonies or equivalent settlement building creates inhabited infrastructure;
- magic provides specialized transport, processing, defense, construction, or exploration;
- mob automation follows actual encounter and containment;
- greenhouses automate already discovered plants;
- resource crops and advanced resource bees unlock only after ultimate industrial control and a Nether Star;
- night expeditions turn the frontier into a prepared risk rather than compulsory sleep.

## 6. Economy policy

A material normally follows this sequence:

1. discover or acquire a finite/manual sample;
2. process it with the current tier;
3. use it to unlock a capability;
4. automate extraction or production;
5. improve yield and throughput later.

Duplicate machines need a meaningful difference in unlock tier, efficiency, byproduct, footprint, recipe family, or play style. They do not each receive mandatory checklist quests.

Villagers use finite stock. Waystones cost experience, do not generate freely, and cannot cross dimensions. Universal laser extraction is removed. Resource crops and advanced hives are late renewable infrastructure.

## 7. Quest standard

Every mandatory quest must answer:

1. What capability does this unlock?
2. Why is it needed now?
3. Exactly how is it obtained?
4. What should be built or understood before continuing?

A task with no explanation is incomplete design. Chapters should contain meaningful milestones rather than clouds of individual item checks.

## 8. Validation gates

### Static gate

- JSON and SNBT parse;
- quest IDs are unique;
- dependencies resolve;
- only authored chapters are loaded;
- recipe IDs are unique;
- the Deep Flat preset exists and does not restrict structure sets;
- KubeJS reports no missing items, tags, or script errors.

### Fresh-world gate

- Deep Flat is selected reliably;
- geology, ponds, ordinary ores, required modded ores, motherlodes, and structures generate;
- spawn and the first night are survivable;
- no old save or claimed quest is required;
- Nether and End function.

### Progression gate

- a tester completes the act without commands;
- every mandatory route is understandable from quests and JEI;
- no RNG-only blocker occurs;
- expected time and resource costs are recorded;
- no unrelated mod bypasses the act.

### Automation and regression gates

- required production can be automated at the intended tier;
- throughput does not trivialize the next act;
- trains, chunk loading, teams, ownership, restarts, and server performance are tested;
- existing worlds are either migrated safely or explicitly declared incompatible;
- every known crash, duplication, and bypass is recorded.

## 9. Implementation policy

Work remains on `agent/proper-infinite-horizon` behind a draft pull request. Systems may be implemented before testing, but they remain marked `[~]` until the relevant section of `docs/PLAYTEST_PLAN.md` passes.

The inherited mod platform and compatibility work remain. The inherited live questbooks and economy-breaking systems do not remain merely for sentiment: they are archived, removed, gated, or replaced when they conflict with the authored game.