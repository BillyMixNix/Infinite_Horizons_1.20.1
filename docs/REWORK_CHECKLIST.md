# Proper Infinite Horizons — Rework Checklist

Status keys: `[ ]` not started, `[~]` implemented but unvalidated, `[x]` validated in game.

Nothing moves from `[~]` to `[x]` without an actual fresh-world playtest.

## Foundation

- [x] Fork upstream repository and preserve history.
- [x] Create `agent/proper-infinite-horizon` redesign branch.
- [x] Open and maintain a draft pull request.
- [x] Add an authoritative design specification.
- [x] Replace the generic README with the fork identity and design pillars.
- [x] Add an exact full-pack playtest protocol.
- [~] Add static JSON, SNBT, quest-ID, dependency, recipe-ID, and world-preset validation.
- [ ] Obtain a successful GitHub Actions or local validator run.
- [ ] Launch the client and inspect Forge, KubeJS, and FTB Quests logs.

## World generation

- [x] Identify the legacy superflat selector and its twelve-dirt-layer preset.
- [~] Define and select `proper_horizon:deep_flat`.
- [~] Provide one bedrock, 64 deepslate, 60 stone, four soil, and one grass layer.
- [~] Enable biome features so ordinary and modded ore placement can participate.
- [~] Leave structure overrides absent so all compatible registered structure sets are considered.
- [~] Preserve normal Nether and End generation.
- [~] Add rare shallow surface ponds.
- [~] Add rare regional iron motherlodes.
- [~] Add rare regional copper motherlodes.
- [ ] Validate vanilla and every required modded ore family in generated chunks.
- [ ] Validate villages, strongholds, mineshafts, ruins, dungeons, and modded landmarks.
- [ ] Tune pond and motherlode frequency from observed generation.
- [ ] Add further regional deposits only after iron and copper prove the model.
- [ ] Add an actual early prospecting tool or tested surveying system.
- [ ] Add improved mid-game prospecting.
- [ ] Decide whether additional horizontal biome-like regions are achievable without abandoning the flat generator.
- [~] Treat the geology overhaul as new-save content until migration is proven.

## Quest campaign

- [x] Create the Proper Horizon Campaign group.
- [x] Create the Optional Systems and Projects group.
- [x] Remove all inherited Alpha/Beta, mod-catalogue, and old GregTech chapters from the loaded pack.
- [x] Preserve removed quest source in Git history.
- [~] Add Read This First orientation.
- [~] Act 0: The First Horizon.
- [~] Act I: The Mechanical Age.
- [~] Act II: Lines Across the Plain.
- [~] Act III: The Industrial Age.
- [~] Act IV: A Connected Territory.
- [~] Act V: The Engineered Horizon.
- [~] Add authored optional projects for food, settlements, magic, mobs, greenhouses, renewables, and night expeditions.
- [~] Give each new mandatory quest a purpose, route, and capability explanation.
- [~] Keep item-catalogue checklists out of the loaded campaign.
- [ ] Confirm every item ID, task type, dependency, and reward in game.
- [ ] Test FTB Teams progression and reward behavior.

## Early survival

- [~] Provide a one-time homestead kit with a Mega Torch, bed, torches, and limited food.
- [~] Explain local safety versus frontier danger.
- [~] Provide deterministic stone and first-iron bootstrap routes.
- [~] Reward exactly two water buckets after the player crafts a bucket.
- [~] Require building and testing a permanent 2×2 water source.
- [~] Add deterministic first lava and pointed-dripstone recipes.
- [~] Require renewable dripstone lava before Act I.
- [ ] Confirm the Mega Torch radius and interaction with modded mobs.
- [ ] Confirm the starter kit cannot be duplicated through teams or resets.
- [ ] Record time to shelter, first iron, water, lava, and renewable lava.
- [ ] Test three nights at increasing distance from the safe zone.

## Resource economy

- [~] Restore mining as the intended source of ordinary ores.
- [~] Convert gravel sifting into first-iron bootstrap and trace recovery.
- [~] Convert deepslate sifting into low-yield excavation-waste recovery.
- [~] Keep the Mekanism Digital Miner unavailable.
- [~] Remove Industrial Foregoing laser machines and custom universal extraction tables.
- [~] Gate Mystical Agriculture's seed base behind ultimate control and a Nether Star.
- [~] Gate Productive Bees advanced hives and expansion boxes behind late industrial materials.
- [~] Keep ProjectE, CobbleForDays, and ore-tree opening bypasses disabled.
- [~] Restore finite villager trade stock.
- [ ] Build a complete required-material dependency graph from actual recipes.
- [ ] Classify required materials as common, regional, exceptional, or synthetic.
- [ ] Ensure every required modded metal appears naturally or has a documented deterministic route.
- [ ] Audit all remaining resource crops, bees, botany, mob simulation, and void-style generation.
- [ ] Audit ore multiplication across Create, Thermal, Mekanism, GregTech, and other mods.
- [ ] Audit loot tables and structures for sequence-breaking machines.

## Technology roles

### Create

- [~] Make Create the authored mechanical and freight tier.
- [~] Require power, stress understanding, processing, material flow, brass, sequenced assembly, and a real automated component.
- [~] Require track, stations, freight interfaces, schedules, a delivery, and signals.
- [~] Rebalance sifting away from universal ore manufacture.
- [ ] Validate andesite, blaze burner, brass, precision mechanism, train, and signal routes.
- [ ] Confirm mechanical extruders renew construction geology without bypassing the material economy.

### Immersive Engineering

- [~] Make IE the first visible electrical grid and canonical coke/steel infrastructure.
- [~] Place the grid before compact Mekanism integration.
- [ ] Validate Coke Oven, crude blast furnace, dynamo, wires, treated wood, and steel.
- [ ] Add or tune transformers and grid-scale distribution when tested.

### Thermal, Mekanism, Ender IO, Powah, and Advanced Generators

- [~] Assign Thermal general processing and fluids.
- [~] Assign Mekanism advanced ore processing, gases, chemistry, and high-energy systems.
- [~] Assign Ender IO compact integration after conventional infrastructure.
- [~] Assign Powah and Advanced Generators scalable/specialized later power.
- [ ] Remove or gate recipes that leapfrog the first grid or authored fuel loops.
- [ ] Balance throughput, augmentation, cables, conduits, generators, and energy storage.
- [ ] Design an eventual tested Digital Miner research gate or keep it permanently unavailable.

### Storage and control

- [~] Make local drawers and barrels production buffers rather than obsolete clutter.
- [~] Make AE2 the primary authored network and autocrafting path.
- [~] Keep Refined Storage optional.
- [~] Require a real multi-step processing craft before network completion.
- [~] Gate wireless access until after the physical freight territory exists.
- [ ] Audit long-range wireless item, fluid, and power transfer from every installed mod.
- [ ] Validate channels, cells, terminals, processors, and remote-site integration.

### GregTech and endgame

- [~] Move GregTech to advanced engineering after the connected territory.
- [~] Integrate bronze, steam compression, fireclay, and the primitive blast furnace without a second opening game.
- [~] Define endgame through continental projects rather than one singularity craft.
- [ ] Audit the full GregTech recipe ladder against existing steel, power, chemistry, and logistics.
- [ ] Validate the authored entry and first useful GregTech production line.

## Logistics, travel, and settlements

- [~] Require a surveyed distant site and functioning outpost.
- [~] Require a freight railway and successful shipment.
- [~] Disable generated waystones and village waystones.
- [~] Disable cross-dimensional waystone travel.
- [~] Add finite distance-based XP costs and longer cooldowns.
- [~] Require a train station and precision mechanism to craft a waystone.
- [~] Restore normal finite villager restocking.
- [~] Add an optional settlement-supply project.
- [ ] Test train behavior across chunk unloading and server restarts.
- [ ] Test waystone recipes, costs, cooldowns, ownership, and multiplayer behavior.
- [ ] Audit other teleportation, wireless transport, and home-command systems.
- [ ] Add frontier events or valuable night activity beyond the optional expedition milestone.

## Interface and onboarding

- [~] Rename the KubeJS display and login message to Proper Infinite Horizons.
- [~] Put the new campaign first and make it the only loaded progression book.
- [~] Add Read This First and explicit development-build warnings.
- [~] Document single-player and dedicated-server preset setup.
- [ ] Rework inherited FancyMenu branding and upstream links after a client launch test.
- [ ] Remove or replace obsolete upstream wiki links outside the deleted questbook.
- [ ] Audit JEI categories, hidden items, redundant books, popups, and keybind conflicts.

## Validation and release engineering

- [~] Add `tools/validate_pack.py`.
- [~] Add GitHub Actions static-validation workflow.
- [~] Add `docs/PLAYTEST_PLAN.md`.
- [~] Add dedicated-server instructions and example properties.
- [ ] Run and fix static validation.
- [ ] Add a reproducible CurseForge/launcher export process.
- [ ] Add explicit versioning and changelog policy.
- [ ] Audit duplicate and overlapping mods after progression is proven.
- [ ] Audit client-only versus server-required mods.
- [ ] Review memory recommendations and performance.
- [ ] Test dedicated-server startup, multiplayer teams, restarts, and long-running worlds.

## Release gate

- [ ] Static validator passes on the release commit.
- [ ] Client and dedicated server start without KubeJS or quest errors.
- [ ] Deep Flat is selected reliably and creates the intended geology.
- [ ] Common ores, required modded ores, ponds, motherlodes, structures, Nether, and End generate correctly.
- [ ] Act 0 completes from a fresh world without commands or RNG-only blockers.
- [ ] Acts I–V each complete at least once without hidden mandatory routes.
- [ ] No universal early resource generator remains.
- [ ] No major technology tier can be trivially bypassed.
- [ ] Train, waystone, network, and team behavior pass multiplayer testing.
- [ ] License and third-party attribution review is complete.
- [ ] Exported build installs and launches cleanly in the chosen launcher.