// Proper Infinite Horizons: sifting is a bootstrap and trace-recovery system.
// Natural deposits and regional extraction should outperform endlessly manufacturing ore from gravel.
ServerEvents.recipes(event => {
    event.recipes.createsifterSifting([
        Item.of('minecraft:flint').withChance(0.5),
        Item.of('minecraft:iron_nugget').withChance(0.25),
        Item.of('minecraft:coal').withChance(0.1),
        Item.of('kubejs:stone_pebble').withChance(0.75),
        Item.of('kubejs:andesite_pebble').withChance(0.25),
        Item.of('kubejs:diorite_pebble').withChance(0.25),
        Item.of('kubejs:granite_pebble').withChance(0.25)
    ], ['minecraft:gravel', 'createsifter:string_mesh'])
        .id('kubejs:recipes/createsiftersifting/string/gravel');

    event.recipes.createsifterSifting([
        Item.of('minecraft:flint').withChance(0.25),
        Item.of('minecraft:raw_copper').withChance(0.1),
        Item.of('minecraft:raw_iron').withChance(0.1),
        Item.of('minecraft:coal').withChance(0.2)
    ], ['minecraft:gravel', 'kubejs:copper_mesh'])
        .id('kubejs:recipes/createsiftersifting/copper/gravel');

    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_copper').withChance(0.15),
        Item.of('minecraft:raw_iron').withChance(0.15),
        Item.of('minecraft:coal').withChance(0.25),
        Item.of('infinite_resources:raw_aluminum').withChance(0.02),
        Item.of('infinite_resources:raw_zinc').withChance(0.03),
        Item.of('infinite_resources:raw_tin').withChance(0.03)
    ], ['minecraft:gravel', 'kubejs:iron_mesh'])
        .id('kubejs:recipes/createsiftersifting/iron/gravel');

    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_copper').withChance(0.12),
        Item.of('minecraft:raw_iron').withChance(0.12),
        Item.of('minecraft:coal').withChance(0.2),
        Item.of('minecraft:raw_gold').withChance(0.04),
        Item.of('minecraft:redstone').withChance(0.08),
        Item.of('minecraft:lapis_lazuli').withChance(0.04),
        Item.of('infinite_resources:raw_aluminum').withChance(0.03),
        Item.of('infinite_resources:raw_tin').withChance(0.03),
        Item.of('infinite_resources:raw_zinc').withChance(0.03),
        Item.of('kubejs:raw_osmium').withChance(0.01)
    ], ['minecraft:gravel', 'createsifter:brass_mesh'])
        .id('kubejs:recipes/createsiftersifting/brass/gravel');

    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_gold').withChance(0.06),
        Item.of('minecraft:redstone').withChance(0.1),
        Item.of('minecraft:lapis_lazuli').withChance(0.06),
        Item.of('minecraft:emerald').withChance(0.01),
        Item.of('minecraft:diamond').withChance(0.005),
        Item.of('infinite_resources:raw_zinc').withChance(0.04),
        Item.of('infinite_resources:raw_aluminum').withChance(0.04),
        Item.of('infinite_resources:raw_tin').withChance(0.04),
        Item.of('kubejs:raw_osmium').withChance(0.02),
        Item.of('irons_spellbooks:raw_mithril').withChance(0.005)
    ], ['minecraft:gravel', 'kubejs:netherite_mesh'])
        .id('kubejs:recipes/createsiftersifting/netherite/gravel');
});