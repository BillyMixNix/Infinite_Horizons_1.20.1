// Proper Infinite Horizons — structure salvage
//
// Chests should feel like places where previous machinery was built, repaired,
// abandoned, or stripped for parts. These pools add components rather than
// finished machines so exploration can accelerate a project without replacing
// the need to understand and build the production chain.

const COMMON_SALVAGE = [
  Item.of('create:shaft', 4).withChance(24),
  Item.of('create:cogwheel', 4).withChance(22),
  Item.of('create:large_cogwheel', 2).withChance(12),
  Item.of('create:andesite_alloy', 2).withChance(20),
  Item.of('minecraft:copper_ingot', 3).withChance(14),
  Item.of('minecraft:iron_nugget', 8).withChance(12),
  Item.of('immersiveengineering:wirecoil_copper', 1).withChance(7),
  Item.of('thermal:redstone_servo', 1).withChance(6),
  Item.of('create:electron_tube', 1).withChance(4)
]

const INDUSTRIAL_SALVAGE = [
  Item.of('create:andesite_alloy', 4).withChance(18),
  Item.of('create:electron_tube', 2).withChance(14),
  Item.of('immersiveengineering:wirecoil_copper', 2).withChance(15),
  Item.of('thermal:redstone_servo', 2).withChance(12),
  Item.of('thermal:rf_coil', 1).withChance(10),
  Item.of('mekanism:alloy_infused', 1).withChance(9),
  Item.of('mekanism:basic_control_circuit', 1).withChance(7),
  Item.of('ae2:printed_silicon', 1).withChance(6),
  Item.of('create:precision_mechanism', 1).withChance(2)
]

const ADVANCED_SALVAGE = [
  Item.of('create:precision_mechanism', 1).withChance(12),
  Item.of('mekanism:basic_control_circuit', 2).withChance(14),
  Item.of('mekanism:advanced_control_circuit', 1).withChance(5),
  Item.of('thermal:rf_coil', 2).withChance(10),
  Item.of('ae2:logic_processor', 1).withChance(10),
  Item.of('ae2:calculation_processor', 1).withChance(8),
  Item.of('ae2:engineering_processor', 1).withChance(4),
  Item.of('immersiveengineering:wirecoil_electrum', 1).withChance(5)
]

LootJS.modifiers(event => {
  // Every structure mod gets a small chance to contribute useful salvage.
  // This is intentionally one roll so ordinary exploration does not flood the
  // early economy with components.
  event
    .addLootTableModifier(/^.*:chests\/.*$/)
    .randomChance(0.28)
    .addWeightedLoot(1, COMMON_SALVAGE)

  // Villages and outposts are the primary early scavenging targets.
  event
    .addLootTableModifier(/^minecraft:chests\/village\/.*$/)
    .randomChance(0.55)
    .addWeightedLoot([1, 2], COMMON_SALVAGE)

  event
    .addLootTableModifier('minecraft:chests/pillager_outpost')
    .randomChance(0.75)
    .addWeightedLoot([1, 2], COMMON_SALVAGE)

  // Mines, dungeons, portals, and strongholds can contain components from
  // machinery that was actually operating before the site was abandoned.
  event
    .addLootTableModifier([
      'minecraft:chests/abandoned_mineshaft',
      'minecraft:chests/simple_dungeon',
      'minecraft:chests/ruined_portal',
      'minecraft:chests/stronghold_corridor',
      'minecraft:chests/stronghold_crossing',
      'minecraft:chests/stronghold_library'
    ])
    .randomChance(0.58)
    .addWeightedLoot([1, 2], INDUSTRIAL_SALVAGE)

  // Large treasure sites may yield a genuinely exciting component, but still
  // never hand out an assembled machine.
  event
    .addLootTableModifier([
      'minecraft:chests/desert_pyramid',
      'minecraft:chests/jungle_temple',
      'minecraft:chests/woodland_mansion',
      'minecraft:chests/bastion_bridge',
      'minecraft:chests/bastion_hoglin_stable',
      'minecraft:chests/bastion_other',
      'minecraft:chests/bastion_treasure',
      'minecraft:chests/end_city_treasure'
    ])
    .randomChance(0.68)
    .addWeightedLoot([1, 2], ADVANCED_SALVAGE)
})
