# Proper Infinite Horizons — Playtest Protocol

A build passes only when a tester records the result of each applicable check. “The game launched” is a smoke test, not a progression test.

## 1. Clean-instance preparation

1. Export or install the branch into a fresh Minecraft 1.20.1 Forge 47.4.1 instance.
2. Allocate the pack's recommended memory without copying an old `saves`, `serverconfig`, or FTB Quests data directory.
3. Keep the first `latest.log` and KubeJS logs.
4. Confirm the title/loading environment identifies the fork as **Proper Infinite Horizons**.
5. Confirm the login message points to the Proper Horizon Campaign.

Record:

- launcher and launcher version;
- Java version;
- allocated memory;
- single-player or dedicated server;
- branch commit SHA;
- any errors before world creation.

## 2. Static and loading gate

Run:

```bash
python tools/validate_pack.py
```

Then launch the game and verify:

- no KubeJS startup or server-script errors;
- no unknown item IDs in custom recipes;
- no FTB Quests parse errors;
- exactly two quest groups appear: Proper Horizon Campaign and Optional Systems and Projects;
- only `proper_horizon_*.snbt` chapters are loaded;
- JEI shows the authored lava, dripstone, waystone, late seed, and advanced hive recipes;
- removed laser drill, Digital Miner, and early renewable-resource recipes do not reappear through duplicate recipe sources.

Failure in this section blocks all further sign-off.

## 3. Fresh-world generation gate

Create a world with `proper_horizon:deep_flat`.

Verify near spawn and in several distant chunks:

- the visible surface is level;
- the surface is grass over four soil layers;
- the underground contains approximately 60 stone layers and 64 deepslate layers;
- bedrock exists at the bottom of the generated geology;
- ordinary vanilla ores generate;
- required modded ores generate;
- rare surface ponds appear without turning the world into conventional terrain;
- villages can generate;
- mineshafts, ruins, dungeons, and other compatible registered structures can generate;
- a stronghold can be located;
- the Nether and End generate normally.

Diagnostic commands may be used to inspect generation, but a diagnostic command never counts as acquiring a progression item.

### Ore-generation matrix

Record whether each required family appears naturally and at what approximate Y level:

- coal;
- iron;
- copper;
- gold;
- redstone;
- lapis;
- diamond;
- zinc;
- tin;
- lead;
- nickel;
- silver;
- aluminum;
- osmium;
- uranium/uraninite;
- sulfur and other required industrial minerals;
- Certus Quartz or its intended replacement route;
- GregTech ores required by the authored late entry.

Any absent required material needs either a worldgen fix or an explicit deterministic alternate route.

### Regional-deposit checks

Search a sufficiently large new area and confirm:

- iron motherlodes generate as rare, substantially larger deposits;
- copper motherlodes generate as rare, substantially larger deposits;
- normal ore remains available so a motherlode is valuable rather than mandatory for the opening;
- spacing is large enough to justify an outpost but not so large that discovery becomes unreasonable;
- deposits do not replace bedrock, dirt, structures, or inappropriate blocks.

## 4. Act 0 — The First Horizon

Start from an empty inventory and do not use commands.

Verify:

1. The starter quest is immediately visible and claimable once.
2. The Mega Torch creates a meaningful local safe zone but does not disable the wider frontier.
3. The bed, food, and torches prevent the first night from being an unavoidable death spiral.
4. Wood and the crafting table route are obvious.
5. The trowel/pebble route produces cobblestone.
6. A furnace and charcoal are obtainable.
7. String-mesh gravel sifting produces iron nuggets at the documented rate.
8. The time to the first iron ingot is tolerable and recorded.
9. Crafting one bucket unlocks exactly two bootstrap water buckets through the quest reward.
10. A 2×2 infinite water pool works.
11. The authored lava recipe appears in JEI and crafts successfully.
12. The pointed-dripstone recipe appears and crafts successfully.
13. The cauldron dripstone setup produces renewable lava.
14. Obsidian is obtainable.
15. No wandering trader, random structure, rainstorm, or old claimed quest is required.

Record elapsed times for shelter, first iron, permanent water, first lava, and renewable lava.

## 5. Night and frontier gate

Test at least three nights:

- one inside the Mega Torch safe zone;
- one immediately outside it with basic equipment;
- one expedition after Act I equipment.

Record hostile density, visibility, pathing, deaths, and whether combat feels dangerous rather than impossible. Confirm sleeping is useful but not the only sane option.

## 6. Act I — The Mechanical Age

Complete without claiming items from creative mode.

Verify:

- andesite alloy and casing routes exist;
- water-wheel power works;
- stressometer and goggles communicate capacity clearly;
- millstone, press, mixer, fan, belts, chutes, and vaults are craftable in sequence;
- blaze burner and brass are obtainable without undocumented circularity;
- precision mechanism sequenced assembly works;
- deployer, drill, and mechanical crafter routes work;
- at least one repeated component is genuinely automated;
- sifting remains trace recovery and is visibly inferior to mining a good deposit;
- Create does not provide an unintended universal ore-generation bypass.

## 7. Act II — Lines Across the Plain

Verify:

- a distant site worth developing can be found;
- the outpost requirements are achievable with Act I capability;
- freight interfaces load and unload reliably;
- track, stations, controls, schedules, and signals are craftable;
- a train can make a scheduled two-station trip;
- one meaningful shipment can be moved without player inventory transport;
- signal behavior is understandable;
- chunk boundaries do not strand the train under the tested loading conditions;
- waystones do not generate freely or in villages;
- crafted waystones require the post-rail recipe;
- teleportation charges the configured XP cost;
- cross-dimensional waystone travel is denied;
- freight remains more practical than teleporting stacks manually.

## 8. Act III — The Industrial Age

Verify:

- Coke Oven construction and formation;
- coal coke and creosote outputs;
- treated wood route;
- crude blast furnace construction and steel output;
- IE dynamo and copper-wire network;
- 10,000 FE quest task acceptance;
- Mekanism Metallurgic Infuser and control circuits;
- Enrichment Chamber and Crusher integration;
- Purification Chamber and Electrolytic Separator gas handling;
- biofuel, Pressurized Reaction Chamber, and gas-burning generator loop;
- cables and pipes connect the factory without hidden incompatibilities;
- two automated industrial lines can run concurrently;
- Digital Miner and Industrial Foregoing laser extractors remain unavailable.

Measure FE generation, consumption, processing throughput, and whether another mod trivially leapfrogs the intended first grid.

## 9. Act IV — A Connected Territory

Verify:

- local drawers/barrels remain useful as buffers;
- Charger, Inscriber, processors, Controller, Drive, cells, and terminals are craftable;
- channels and power constraints behave as expected;
- Pattern Provider integration completes a genuine multi-step processing craft;
- wireless access only arrives after the wired network and freight territory;
- Refined Storage remains optional and does not create an easier unplanned mandatory route;
- a remote production facility can feed the operations core while retaining local storage and freight function.

## 10. Act V — The Engineered Horizon

Verify:

- bronze and LP steam compressor entry is attainable from the existing territory;
- fireclay, compressed fireclay, and firebrick routes work;
- primitive blast furnace construction succeeds;
- GregTech-specific processing builds on existing steel and logistics rather than requiring an isolated restart;
- one million FE task acceptance;
- ultimate control circuit route;
- late Prosperity Seed Base recipe;
- late advanced oak beehive and expansion-box recipes;
- ordinary advanced hive/seed-base recipes remain removed;
- three continental project checkmarks can be completed meaningfully;
- Wither and Ender Dragon objectives remain compatible with the pack;
- campaign completion does not depend on a single arbitrary singularity item.

## 11. Economy bypass audit

At the end of each act, search JEI for ways to obtain every material required by the next act. Record any route that:

- bypasses mining before regional development;
- creates all ores from one infinite input;
- grants a machine through an old reward table;
- uses villagers as an unlimited material source;
- provides early wireless item or power transfer;
- grants teleportation before the freight milestone;
- turns ProjectE, crops, bees, laser drills, trees, or mob simulation into an earlier universal economy;
- obtains dimensional resources without the intended encounter or engineering step.

Every bypass must be explicitly accepted as an alternative or removed/gated.

## 12. Dedicated-server gate

Use `docs/SERVER_SETUP.md` and generate a new server world.

Verify:

- `level-type=proper_horizon:deep_flat` is honored;
- server and client datapacks agree;
- all players see the same quest chapters;
- FTB Teams quest progress behaves correctly;
- starter rewards cannot be multiplied unintentionally through team manipulation;
- trains and remote facilities behave across chunk unloading;
- no client-only mod is required by the server;
- restart persistence works for quests, networks, waystones, trains, and multiblocks.

## 13. Performance gate

Record client and server performance at:

- fresh spawn;
- one mechanical workshop;
- one scheduled train route;
- one industrial district;
- one AE2 autocrafting operation;
- one developed settlement;
- one advanced engineering district.

Inspect for excessive entities, permanently loaded chunks, runaway particles, repeated recipe errors, and automation loops.

## 14. Sign-off record

For every tested commit, record:

- commit SHA;
- tester;
- date;
- fresh world seed;
- passed sections;
- failed sections;
- known workarounds;
- logs or screenshots;
- whether the result blocks merge.

The PR remains draft until the full clean-instance, Act 0, worldgen, and dedicated-server gates pass. Later acts may be merged only when their recipes and core milestones are at least completed once without commands.