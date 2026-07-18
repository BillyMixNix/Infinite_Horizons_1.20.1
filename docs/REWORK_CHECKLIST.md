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

- [ ] Identify the current mechanism that selects superflat generation.
- [ ] Define the new deep-flat overworld preset.
- [ ] Confirm stone and deepslate depth supports mining and structures.
- [ ] Enable vanilla and modded ore placement in flat chunks.
- [ ] Preserve villages and selected surface structures.
- [ ] Add visible long-range landmarks.
- [ ] Add or preserve shallow water, marsh, crater, trench, and sinkhole features.
- [ ] Establish common and regional deposit rules.
- [ ] Add an early prospecting route.
- [ ] Add improved mid-game surveying.
- [ ] Test Nether and End access and generation.
- [ ] Document whether the worldgen overhaul requires a new save.

## Quest campaign

- [~] Create the Proper Horizon campaign group.
- [~] Relabel original overview chapters as legacy progression.
- [~] Relabel mod-by-mod chapters as reference manuals.
- [~] Act 0: The First Horizon.
- [~] Act I: The Mechanical Age.
- [~] Act II: Lines Across the Plain.
- [~] Act III: The Industrial Age.
- [~] Act IV: A Connected Territory.
- [~] Act V: The Engineered Horizon.
- [ ] Validate every cross-chapter dependency.
- [ ] Remove or redirect contradictory legacy quests.
- [ ] Ensure every mandatory quest explains its acquisition route.
- [ ] Remove mandatory item-catalogue quests from the campaign.
- [ ] Audit rewards for sequence-breaking items.

## Early survival

- [~] Provide a claimable homestead safety kit.
- [~] Give the player a bed without making sleep the only night strategy.
- [~] Give the player limited food and lighting.
- [ ] Confirm Mega Torch radius and recipe/config behavior.
- [ ] Confirm the starter kit cannot be reclaimed infinitely.
- [ ] Add a short explanation of local safety versus frontier danger.
- [ ] Test multiplayer/team reward behavior.

## Resource economy

- [ ] Build a complete required-material dependency graph.
- [ ] Classify each material as common, regional, exceptional, or synthetic.
- [ ] Ensure every material has a non-circular bootstrap route.
- [ ] Restore mining as the primary early source of common ores.
- [ ] Convert sifting from universal ore generation to trace recovery/bootstrap support.
- [ ] Gate bees, crops, void miners, and laser drills behind prior resource discovery.
- [ ] Prevent wandering traders from being the only mandatory source.
- [ ] Prevent village trades from bypassing major technology tiers.
- [ ] Audit quest rewards that duplicate machines or large resource quantities.
- [ ] Audit ore multiplication across Create, Thermal, Mekanism, GregTech, and other mods.

## Mod roles and progression

### Create

- [~] Assign as the primary early mechanical and logistics system.
- [ ] Rebalance sifting and mechanical extruder output.
- [ ] Validate andesite, brass, blaze burner, and precision mechanism routes.
- [ ] Make trains part of required progression.

### Immersive Engineering

- [~] Assign first electrical grid and visible heavy infrastructure.
- [ ] Validate generator, wire, transformer, steel, and multiblock routes.
- [ ] Prevent trivial replacement by immediate compact wireless systems.

### Thermal

- [~] Assign general processing, fluid handling, and machine augmentation.
- [ ] Remove duplicate mandatory quests where another mod owns the capability.
- [ ] Balance augments and throughput against Mekanism and Ender IO.

### Mekanism

- [~] Assign advanced ore processing, gases, chemistry, and high-energy systems.
- [ ] Gate the Digital Miner behind surveying and regional development.
- [ ] Validate steel, alloys, gases, and ore-processing tiers.
- [ ] Prevent early power blocks from erasing the first grid.

### Ender IO

- [~] Assign compact integration and conduits after conventional infrastructure.
- [ ] Gate conduits and teleport-style conveniences appropriately.

### Powah and Advanced Generators

- [~] Assign scalable modular and specialized power after first-grid progression.
- [ ] Balance generation tiers and fuel loops.
- [ ] Remove recipes that leapfrog the industrial act.

### Storage and control

- [~] Assign AE2 as the primary advanced network and autocrafting path.
- [~] Keep Refined Storage as an alternative rather than a duplicate required tree.
- [~] Assign Integrated Dynamics and Modular Routers to logic/local automation.
- [ ] Gate long-range wireless transfer until after physical freight progression.
- [ ] Audit Functional and Sophisticated Storage rewards and recipes.

### GregTech

- [~] Move conceptual role to late advanced engineering.
- [ ] Identify all GregTech chapter prerequisites.
- [ ] Remove any requirement to replay the opening resource ladder in isolation.
- [ ] Integrate existing mining, power, chemistry, logistics, and storage into its entry tier.
- [ ] Define continental endgame projects.

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
- [ ] Add surveying and map tools to progression.
- [ ] Require first discovery and development before teleport linking.
- [ ] Add night or frontier events worth confronting.
- [ ] Add settlement/outpost supply expectations.
- [ ] Test train chunk-loading and multiplayer behavior.

## Interface and onboarding

- [ ] Update title screen and pack branding.
- [ ] Replace upstream wiki links that no longer describe progression.
- [ ] Ensure the new campaign opens first.
- [ ] Add a concise “How this world works” guide.
- [ ] Add warnings for legacy chapters.
- [ ] Audit JEI categories and hidden items.
- [ ] Audit default keybind conflicts.
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