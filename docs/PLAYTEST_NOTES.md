# Proper Infinite Horizons — Playtest Notes

## Fresh-world playtest 1

Tester: BillyMixNix  
Date: 2026-07-18

### What felt good

- Villages and points of interest created a strong scavenger opening.
- Finding three iron ingots and immediately crafting an iron pickaxe made the flat world feel opportunistic and distinct from ordinary Minecraft.
- Skipping wooden and stone tools through exploration was exciting rather than sequence-breaking.
- Existing water and lava pools made the world feel inhabited by resources instead of artificially empty.
- Powerful affixed equipment made an early pillager-outpost assault technically survivable and created a memorable combat test.

### What failed

- Oil generation was common enough that it did not read as a regional resource.
- Act 0 prescribed a wooden/stone/sifting route even when the world offered a better scavenging route.
- Mandatory water and lava quests duplicated resources already visible in the world and therefore had no progression value.
- The test profile loaded inherited quest files alongside the new campaign, producing a mixed and unreadable questbook.
- New campaign rewards were too sparse to create momentum or make completion feel acknowledged.
- Pillager outposts continuously replaced casualties fast enough to consume an entire set of high-tier armor durability. The encounter behaved like an endless grinder rather than a clearable landmark.
- Structure chests contained too little technological variety. Exploration produced generic supplies but rarely supplied memorable machine salvage.

### Decisions

- Scavenging three iron ingots is now the preferred Act 0 route.
- Wooden tools, stone tools, and sifting remain dead-seed fallbacks rather than mandatory tiers.
- The main path now requires an iron pickaxe, a working mine, and a working homestead.
- Water and lava acquisition moved to optional utility quests.
- Renewable lava is only requested when industrial consumption makes it useful.
- Main-path quests should provide practical rewards that reduce friction without completing the next technology tier.
- The test-profile updater must delete stale FTB Quest definitions and KubeJS scripts before copying new ones.
- Thermal oil sand and Ad Astra oil-well structures are disabled pending an authored regional oil system.
- Pillager outposts retain their generated defenders but no longer maintain an unlimited structure-spawn population after being cleared.
- Structure chests now have tiered salvage chances. Ordinary sites provide mostly Create-era components; industrial ruins can provide coils, circuits, and processors; major treasure sites may provide rare advanced components.
- Chest salvage should consist of parts rather than completed machines, allowing exploration to accelerate construction without replacing progression knowledge.

### Still unresolved

- Verify that newly generated terrain contains no common black oil spires.
- Verify the rebuilt Act 0 and reward display in a cleanly mirrored profile.
- Confirm the salvage frequency feels exciting rather than mandatory or economically dominant.
- Continue the reward pass through Acts I–V based on actual pacing and material cost.
