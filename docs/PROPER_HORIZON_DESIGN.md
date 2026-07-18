# Proper Infinite Horizons — Authoritative Design Specification

This document is the source of truth for the redesign. Existing quests, recipes, and configs are implementation material, not design authority. When an old system conflicts with this document, the old system changes.

## 1. Product statement

Proper Infinite Horizons is an industrial exploration modpack set on an immense, predominantly flat overworld. It retains the readability, build freedom, and monumental sightlines of superflat while restoring the things that make survival Minecraft compelling: geology, mining, structures, settlements, regional resources, risk, discovery, and long-distance infrastructure.

The fantasy is not escaping an empty world. The fantasy is transforming a vast undeveloped continent into a connected civilization.

## 2. Non-negotiable rules

### 2.1 Flat does not mean resource-less

The overworld must provide meaningful underground layers, ore generation, structures, water, and regional variation. Resource creation from nothing is a supplement or late-game technology, not the default answer to missing world generation.

### 2.2 No mandatory mystery routes

Every required item must have at least one deterministic route described in the main quest campaign. JEI may provide recipe detail, but the player must not need to search every mod, rely on a wiki, wait for a wandering trader, or infer an undocumented interaction to continue.

### 2.3 No circular bootstraps

A resource may not require itself, its downstream product, or an inaccessible dimension to produce its first unit. Bootstrap recipes may be intentionally inefficient, but they must be reliable.

### 2.4 No universal early resource machine

Sifting, chickens, bees, crops, void miners, laser drills, digital miners, and similar systems may not provide the entire material economy in the opening game. Each receives a defined role and unlock tier.

### 2.5 Logistics must matter

Regional deposits and distant points of interest should create practical reasons to build roads, railways, freight depots, power transmission, pipelines, and outposts. Teleportation is convenience for established routes, not a substitute for discovering and developing them.

### 2.6 Quests are a campaign, not a catalogue

The main campaign contains only decisions and milestones that define the pack. Mod-specific chapters are reference manuals. Quests such as “craft every tool,” “obtain every decorative block,” and isolated item checkboxes do not belong in the main path.

### 2.7 Rewards solve friction, not progression

Rewards may provide food, building material, measurement tools, or a small sample that enables experimentation. They must not hand the player the machine, resource stockpile, or completed tier that the quest is meant to teach.

## 3. World design

### 3.1 Surface

The surface remains broadly level, with variation expressed horizontally rather than through conventional mountains and valleys.

Desired features:

- large biome regions with distinct vegetation, weather, soil, mobs, and resource associations;
- shallow lakes, marshes, rivers, drainage channels, craters, trenches, and sinkholes;
- villages, farms, towers, industrial ruins, laboratories, rail remnants, dungeons, and abandoned settlements;
- highly visible landmarks that can be seen from long range;
- rare terrain interruptions with gameplay purpose rather than ordinary noise terrain.

### 3.2 Underground

Target starting profile, subject to generator testing:

- 1 bedrock layer;
- approximately 48–64 deepslate layers;
- approximately 48–64 stone layers;
- 3–5 soil layers;
- grass or biome-appropriate surface block.

The exact depth is less important than supporting real mining, ore distribution, underground structures, fluids, and later excavation projects.

### 3.3 Resources

Resources are divided into three classes.

**Common geology:** coal, iron, copper, redstone, lapis, basic stone types, and common modded metals. These should be mineable in ordinary deposits and sufficiently available near the opening region.

**Regional geology:** oil, uranium, nickel, lead, silver, bauxite/aluminum, salt, sulfur, rare crystals, and other industrial materials. These should favor particular regions or larger deposits and encourage outposts.

**Exceptional resources:** endgame materials, magical substances, meteor materials, dimensional resources, and synthetic elements. These come from dangerous structures, dimensions, advanced processing, or expensive artificial production.

### 3.4 Prospecting

Blindly strip-mining an endless uniform plane is not exploration. The pack must provide progressively better prospecting:

1. visual clues, exposed deposits, village knowledge, and simple samples;
2. handheld prospecting or survey tools;
3. chunk or region scanning with meaningful limitations;
4. late automated extraction after a deposit has been located and developed.

The digital miner and comparable machines must not erase the surveying and logistics game immediately after power is obtained.

## 4. Progression campaign

## Act 0 — The First Horizon

**Goal:** establish a survivable, deterministic opening and renewable lava.

Milestones:

- protected homestead and first-night survival;
- wood, crafting, dependable stone route;
- furnace, charcoal, food, and lighting;
- first iron and bucket;
- clear bootstrap lava recipe;
- renewable lava through dripstone;
- first obsidian and permission to branch outward.

The opening should be completable without sleeping through every night and without a lucky structure or trader.

## Act I — The Mechanical Age

**Primary mod:** Create.

**Goal:** build a legible workshop that turns player labor into mechanical production.

Milestones:

- andesite alloy and casing;
- water-wheel power and stress understanding;
- press, millstone, mixer, fan, and belts;
- automation of bulk stone, gravel, sand, and basic construction materials;
- first controlled ore processing line;
- brass as the transition to precision machinery;
- mechanical crafting and deployer-based assembly.

Create does not become a universal ore generator. Sifting remains trace recovery and bootstrap support unless a later regional processing chain explicitly calls for it.

## Act II — Lines Across the Plain

**Primary systems:** Create trains, Immersive Engineering transport where appropriate, waypoints as secondary convenience.

**Goal:** make horizontal distance into gameplay.

Milestones:

- map and surveying kit;
- first remote resource site;
- road or marked route;
- freight storage and loading;
- train track, station, and assembled train;
- delivery of a regional resource to the homestead;
- permanent outpost with local power, storage, and defense.

The campaign should require one authentic logistics journey before teleportation or fully wireless transfer becomes routine.

## Act III — The Industrial Age

**Primary systems:** Immersive Engineering for visible infrastructure; Thermal, Mekanism, and Ender IO for processing, chemistry, and compact machinery.

**Goal:** move from workshop-scale production to an electrical factory.

Assigned roles:

- **Immersive Engineering:** first grid, wires, transformers, heavy multiblocks, excavator-style regional industry, and visual infrastructure.
- **Thermal:** dependable general processing, fluids, and machine augmentation.
- **Mekanism:** advanced ore processing, gases, chemistry, steel, and later high-energy systems.
- **Ender IO:** compact conduits and specialized machine integration after the player has built a conventional grid.
- **Powah:** modular scalable generation and storage, unlocked after the first industrial power network rather than replacing it immediately.
- **Advanced Generators:** specialized mid/late power plants using established fuel chains.

Milestones:

- first generated electrical power;
- wired distribution and energy storage;
- steel production;
- doubled ore processing, then advanced processing;
- chemical and fluid handling;
- stable fuel production;
- factory floor with multiple coordinated processing lines.

## Act IV — A Connected Territory

**Primary systems:** Applied Energistics 2, Refined Storage, Integrated Dynamics, Modular Routers, Functional Storage, Sophisticated Storage.

**Goal:** connect multiple developed sites without making physical logistics irrelevant.

Assigned roles:

- drawers, barrels, and local storage remain useful at production sites;
- AE2 is the primary advanced network and autocrafting path;
- Refined Storage may remain as an accessible alternative, but recipes and quests must prevent both networks from being trivial duplicate openings;
- Integrated Dynamics handles logic, sensing, and unusual automation;
- Modular Routers handles local programmable transfer;
- long-range item transfer is gated until the player has completed a physical freight network.

Milestones:

- organized local bulk storage;
- first digital terminal;
- storage cells and channels or equivalent network constraint;
- autocrafting of a real production chain;
- remote facility monitoring;
- power and inventory links between developed settlements;
- a central operations hub.

## Act V — The Engineered Horizon

**Primary systems:** GregTech and other advanced engineering mods.

**Goal:** make late game about constructing systems and transforming the world rather than merely crafting more powerful blocks.

GregTech begins here as a culmination of established mining, power, chemistry, logistics, and automation. It must not demand replaying the entire opening game in a parallel isolated ladder.

Candidate continental projects:

- electrified transcontinental railway;
- regional ore-processing complex;
- synthetic fuel refinery;
- artificial biome or agricultural district;
- grid-scale reactor and power backbone;
- automated city supply network;
- dimensional research facility;
- world-scale material or energy objective.

Final completion should require several integrated projects, not one singularity-style item craft.

## 5. Optional systems

Magic, farming, combat, mob automation, and decorative systems remain valuable, but they are integrated by function rather than placed in mandatory parallel trees.

- **Farmer’s Delight / Cooking for Blockheads / Pam’s:** food security, settlement provisioning, and buff preparation.
- **Botania / Nature’s Aura / Ars Nouveau / Occultism / Blood Magic / Forbidden & Arcanus / Iron’s Spells:** alternative tools, specialized production, exploration rewards, and combat capability. No required industrial material may exist only behind an unexplained magic branch.
- **Industrial Foregoing / Productive Bees / Botany Pots / crop-resource systems:** renewable production after the natural resource has been found and processed conventionally.
- **Hostile Neural Networks / Mob Grinding Utilities:** controlled mob resources after the player has survived and studied the relevant mob.
- **Apotheosis:** equipment and encounter escalation, not an opening-game loot lottery that invalidates crafting.
- **RFTools / Compact Machines:** advanced infrastructure and spatial engineering, not a way to hide every factory before the world has visibly developed.

## 6. Economy and balance policy

### 6.1 Material unlock rule

A material follows this sequence unless explicitly exempted:

1. discover or acquire a finite/manual sample;
2. process it with the current tier;
3. use it to unlock the next capability;
4. automate extraction or production;
5. improve yield and throughput in later tiers.

### 6.2 Duplicate machine rule

When several mods perform the same operation, each machine needs one of:

- an earlier or later unlock tier;
- a throughput, efficiency, byproduct, energy, or footprint advantage;
- a specific recipe family;
- a role as an optional alternative rather than another mandatory checkbox.

### 6.3 Resource-generator rule

Bees, crops, sieves, laser drills, void miners, and synthetic recipes must be gated behind prior discovery of the resource or an equivalent research milestone. The world remains relevant after automation begins.

### 6.4 Teleportation rule

Waystones and teleporters may connect already visited developed sites. They should not remove the requirement to survey, travel to, and establish those sites first.

## 7. Quest-writing standard

Every main-path quest must answer four questions:

1. What capability does this unlock?
2. Why does the player need it now?
3. Exactly how can it be obtained?
4. What should the player build or understand before moving on?

Main quests use explicit titles and descriptions. A task without explanation is considered incomplete design.

A chapter should generally contain 6–15 meaningful milestones. Optional side quests may branch from those milestones, but giant clouds of individual item tasks are prohibited in the campaign group.

## 8. Validation gates

A progression act is not complete because its files parse. It is complete only after all applicable gates pass.

### Static gate

- SNBT and JSON structures load;
- KubeJS reports no script errors;
- every referenced item and tag exists;
- recipe IDs are unique;
- quest dependencies resolve;
- removed recipes have replacements where required.

### Fresh-world gate

- intended world preset is selected by default or clearly required;
- spawn is survivable;
- first required resources exist;
- structures and ores generate as designed;
- no old save or claimed quest is required.

### Progression gate

- tester completes the act without commands;
- every mandatory route is understandable from quests and JEI;
- no mandatory RNG-only blocker occurs;
- expected time and resource costs are recorded;
- no unrelated mod bypasses the act.

### Automation gate

- required production can be automated with the unlocked tier;
- throughput is adequate but does not trivialize the next act;
- chunk loading, multiplayer ownership, and server performance are considered.

### Regression gate

- existing worlds either migrate safely or are explicitly declared incompatible;
- client and dedicated-server launches pass;
- major dimensions and structures still function;
- no known duplication, crash, or progression bypass remains unrecorded.

## 9. Implementation policy

The redesign is delivered in reviewable phases on the `agent/proper-infinite-horizon` branch. Each phase updates the draft pull request and records untested assumptions. Changes are not merged merely because they are large or ambitious.

The initial implementation keeps the original mod files and compatibility work, adds the new campaign, relabels old quests as references, and progressively replaces resource and world-generation assumptions. Old systems are removed only when their replacement has passed the relevant validation gate.