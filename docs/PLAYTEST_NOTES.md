# Proper Infinite Horizons — Playtest Notes

## Fresh-world playtest 1

Tester: BillyMixNix  
Date: 2026-07-18

### What felt good

- Villages and points of interest created a strong scavenger opening.
- Finding three iron ingots and immediately crafting an iron pickaxe made the flat world feel opportunistic and distinct from ordinary Minecraft.
- Skipping wooden and stone tools through exploration was exciting rather than sequence-breaking.
- Existing water and lava pools made the world feel inhabited by resources instead of artificially empty.

### What failed

- Oil generation was common enough that it did not read as a regional resource.
- Act 0 prescribed a wooden/stone/sifting route even when the world offered a better scavenging route.
- Mandatory water and lava quests duplicated resources already visible in the world and therefore had no progression value.
- The test profile loaded inherited quest files alongside the new campaign, producing a mixed and unreadable questbook.
- New campaign rewards were too sparse to create momentum or make completion feel acknowledged.

### Decisions

- Scavenging three iron ingots is now the preferred Act 0 route.
- Wooden tools, stone tools, and sifting remain dead-seed fallbacks rather than mandatory tiers.
- The main path now requires an iron pickaxe, a working mine, and a working homestead.
- Water and lava acquisition moved to optional utility quests.
- Renewable lava is only requested when industrial consumption makes it useful.
- Main-path quests should provide practical rewards that reduce friction without completing the next technology tier.
- The test-profile updater must delete stale FTB Quest definitions and KubeJS scripts before copying new ones.
- Thermal oil-sand generation is disabled pending an authored regional oil system.

### Still unresolved

- Confirm whether the observed oil was Thermal oil sand or a liquid-oil feature from another mod. If oil remains common in newly generated chunks, identify the source mod using Jade/WTHIT and rebalance that generator too.
- Verify the rebuilt Act 0 and reward display in a cleanly mirrored profile.
- Continue the reward pass through Acts I–V based on actual pacing and material cost.
