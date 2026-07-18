# Proper Infinite Horizons — Rework Checklist

Status keys: `[ ]` not started, `[~]` implemented but unvalidated, `[x]` validated in game.

Nothing moves from `[~]` to `[x]` without an actual fresh-world playtest.

## Foundation

- [x] Fork upstream repository and preserve history.
- [x] Create `agent/proper-infinite-horizon` redesign branch.
- [x] Open draft pull request.
- [x] Add authoritative design specification.
- [x] Replace generic README with fork identity and design pillars.
- [~] Add a deterministic first-hour quest spine.
- [~] Add guaranteed bootstrap lava and pointed-dripstone recipes.
- [ ] Launch client and confirm KubeJS/FTB Quests parse the first patch.
- [ ] Complete the first-hour route in a fresh world without commands.

## World generation

- [~] Identify the current mechanism that selects superflat generation.
- [~] Define and select the new data-driven deep-flat overworld preset.
- [~] Provide 64 deepslate layers, 60 stone layers, soil, and a level surface.
- [~] Enable biome features so vanilla and modded ore placement can participate in flat chunks.
- [~] Preserve villages, mineshafts, pillager outposts, ruined portals, and strongholds.
- [ ] Add visible long-range landmarks beyond the selected vanilla structures.
- [ ] Add or preserve shallow water, marsh, crater, trench, and sinkhole features.
- [ ] Establish common and regional deposit rules.
- [ ] Add an early prospecting route.
- [ ] Add improved mid-game surveying.
- [ ] Test Nether and End access and generation.
- [~] Warn that the worldgen overhaul is new-save content until migration is validated.

## Quest campaign

- [~] Create the Proper Horizon campaign group.
- [~] Relabel original overview chapters as legacy progression.
- [~] Relabel mod-by-mod chapters as reference manuals.
- [~] Add the Read This First orientation chapter.
- [~] Act 0: The First Horizon.
- [~] Act I: The Mechanical Age.
- [~] Act II: Lines Across the Plain.
- [~] Act III: The Industrial Age.
- [~] Act IV: A Connected Territory.
- [~] Act V: The Engineered Horizon.
- [ ] Validate every cross-chapter dependency.
- [ ] Remove or redirect contradictory legacy quests.
- [~] Give every new mandatory quest an explicit purpose and acquisition explanation.
- [~] Keep individual item catalogues out of the Proper Horizon campaign.
- [ ] Audit rewards for sequence-breaking items.

## Early survival

- [~] Provide a claimable homestead safety kit.
- [~] Give the player a bed without making sleep the only night strategy.
- [~] Give the player limited food and lighting.
- [ ] Confirm Mega Torch radius and recipe/config behavior.
- [ ] Confirm the starter kit cannot be reclaimed infinitely.
- [~] Explain local safety versus frontier danger.
- [ ] Test multiplayer/team reward behavior.

## Resource economy

- [ ] Build a complete required-material dependency graph.
- [ ] Classify each material as common, regional, exceptional, or synthetic.
- [~] Establish non-circular bootstrap routes for stone, first iron, water, and lava.
- [~] Restore mining as the intended primary early source of common ores through Deep Flat worldgen.
- [~] Convert gravel and deepslate sifting from universal ore generation to trace recovery/bootstrap support.
- [ ] Gate bees, crops, void miners, and laser drills behind prior resource discovery.
- [ ] Prevent wandering traders from being the only mandatory source.
- [ ] Prevent village trades from bypassing major technology tiers.
- [ ] Audit quest rewards that duplicate machines or large resource quantities.
- [ ] Audit ore multiplication across Create, Thermal, Mekanism, GregTech, and other mods.

## Mod roles and progression

### Create

- [~] Assign as the primary early mechanical and logistics system.
- [~] Rebalance sifting away from universal ore generation.
- [ ] Rebalance mechanical extruder output.
- [ ] Validate andesite, brass, blaze burner, and precision mechanism routes.
- [~] Make trains, stations, schedules, freight, and signals part of required progression.

### Immersive Engineering

- [~] Assign first electrical grid and visible heavy infrastructure.
- [ ] Validate generator, wire, transformer, steel, and multiblock routes.
- [~] Put the first visible electrical grid before compact Mekanism integration.

### Thermal

- [~] Assign general processing, fluid handling, and machine augmentation.
- [ ] Remove duplicate mandatory quests where another mod owns the capability.
- [ ] Balance augments and throughput against Mekanism and Ender IO.

### Mekanism

- [~] Assign advanced ore processing, gases, chemistry, and high-energy systems.
- [~] Keep the Digital Miner recipe disabled until surveying and regional development are validated.
- [ ] Design the eventual Digital Miner research and recipe gate.
- [ ] Validate steel, alloys, gases, and ore-processing tiers.
- [~] Place Mekanism after the first Immersive Engineering grid in the campaign.

### Ender IO

- [~] Assign compact integration and conduits after conventional infrastructure.
- [ ] Gate conduits and teleport-style conveniences appropriately.

### Powah and Advanced Generators

- [~] Assign scalable modular and specialized power after first-grid progression.
- [ ] Balance generation tiers and fuel loops.
- [ ] Remove recipes that leapfrog the industrial act.

### Storage and control

- [~] Assign AE2 as the primary advanced network and autocrafting path.
- [~] Keep Refined Storage as an optional alternative rather than a duplicate required tree.
- [~] Assign Integrated Dynamics and Modular Routers to logic/local automation.
- [~] Gate campaign wireless access until after physical freight progression.
- [ ] Audit Functional and Sophisticated Storage rewards and recipes.

### GregTech

- [~] Move conceptual role to late advanced engineering.
- [~] Identify the existing GregTech getting-started chain and its legacy dependencies.
- [~] Replace the campaign entry with a continuation of existing steel, power, logistics, and automation.
- [~] Integrate bronze, steam compression, refractory materials, and the primitive blast furnace without demanding a second opening game.
- [~] Define continental endgame projects.
- [ ] Rebalance the full GregTech reference tree around that entry point.

### Optional systems

- [ ] Integrate food mods around settlement provisioning and buffs.
- [ ] Integrate magic mods as alternate tools and specialized production.
- [ ] Gate renewable resource mods behind natural discovery.
- [ ] Gate mob automation behind encounter/study milestones.
- [ ] Prevent Apotheosis loot from invalidating crafted equipment progression.
- [ ] Keep Compact Machines and RFTools as advanced spatial tools.

## Logistics and exploration

- [~] Add campaign requirement for a remote outpost.
- [~] Add campaign requirement for a freight railway.
- [ ] Define regional deposits and structure rewards.
- [~] Add compass, map, spyglass, and a manual survey milestone.
- [~] Require discovery, development, and a freight run before optional teleport linking.
- [ ] Add night or frontier events worth confronting.
- [~] Add minimum shelter, storage, food, processing, and lighting expectations for the first outpost.
- [ ] Test train chunk-loading and multiplayer behavior.

## Interface and onboarding

- [~] Rename the KubeJS display and login message to Proper Infinite Horizons.
- [ ] Replace or safely rework the inherited FancyMenu title screen after client launch testing.
- [ ] Replace upstream wiki links that no longer describe progression.
- [~] Put the Proper Horizon Campaign first in chapter-group order.
- [~] Add a concise Read This First guide.
- [~] Label the original progression and mod guides as legacy/reference material.
- [ ] Audit JEI categories and hidden items.
- [ ] Audit default keybind conflicts.
- [~] Remove the obsolete login warning about upstream version 13.1 mod removals.
- [ ] Reduce redundant books and onboarding popups.

## Performance and maintenance

- [ ] Audit duplicate mods and overlapping systems.
- [ ] Audit client-only versus server-required mods.
- [ ] Review memory recommendation after changes.
- [ ] Add automated static checks where practical.
- [ ] Add a reproducible pack export process.
- [ ] Add versioning and changelog policy.
- [ ] Test dedicated-server startup.
- [ ] Test multiplayer quest/team behavior.
- [ ] Test a long-running world for chunk and entity performance.

## Release gate

- [ ] All six acts pass fresh-world progression tests.
- [ ] Deep-flat worldgen is selected reliably.
- [ ] Common ores, regional resources, structures, Nether, and End generate correctly.
- [ ] No known mandatory dead ends.
- [ ] No known circular recipes.
- [ ] No universal early resource generator.
- [ ] No major technology tier can be trivially bypassed.
- [ ] Dedicated-server and single-player smoke tests pass.
- [ ] License and third-party attribution review complete.
- [ ] Exported build installs cleanly through the chosen launcher.