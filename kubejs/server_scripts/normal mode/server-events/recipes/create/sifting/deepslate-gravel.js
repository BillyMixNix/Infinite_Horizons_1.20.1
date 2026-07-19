// Proper Infinite Horizons: deepslate sifting recovers traces from excavation waste.
// It is intentionally inferior to locating, mining, transporting, and processing a real deposit.
ServerEvents.recipes(event => {
    event.recipes.createsifterSifting([
        Item.of('kubejs:deepslate_pebble').withChance(0.75),
        Item.of('kubejs:tuff_pebble').withChance(0.35),
        Item.of('minecraft:gold_nugget').withChance(0.05),
        Item.of('minecraft:glow_lichen').withChance(0.125),
        Item.of('quark:glow_lichen_growth').withChance(0.0625),
        Item.of('twigs:petrified_lichen').withChance(0.125)
    ], ['kubejs:deepslate_gravel', 'createsifter:string_mesh'])
        .id('kubejs:recipes/createsiftersifting/string/deepslate');

    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_gold').withChance(0.025),
        Item.of('infinite_resources:raw_aluminum').withChance(0.005),
        Item.of('infinite_resources:raw_lead').withChance(0.01),
        Item.of('infinite_resources:raw_nickel').withChance(0.01),
        Item.of('infinite_resources:raw_silver').withChance(0.01),
        Item.of('kubejs:raw_osmium').withChance(0.005),
        Item.of('minecraft:redstone').withChance(0.05),
        Item.of('minecraft:diamond').withChance(0.0025),
        Item.of('powah:uraninite_raw').withChance(0.0025)
    ], ['kubejs:deepslate_gravel', 'kubejs:iron_mesh'])
        .id('kubejs:recipes/createsiftersifting/iron/deepslate');

    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_gold').withChance(0.04),
        Item.of('infinite_resources:raw_aluminum').withChance(0.01),
        Item.of('infinite_resources:raw_lead').withChance(0.02),
        Item.of('infinite_resources:raw_nickel').withChance(0.02),
        Item.of('infinite_resources:raw_silver').withChance(0.02),
        Item.of('kubejs:raw_osmium').withChance(0.01),
        Item.of('kubejs:raw_uranium').withChance(0.005),
        Item.of('minecraft:redstone').withChance(0.08),
        Item.of('minecraft:diamond').withChance(0.005),
        Item.of('powah:uraninite_raw').withChance(0.005),
        Item.of('irons_spellbooks:raw_mithril').withChance(0.0025)
    ], ['kubejs:deepslate_gravel', 'createsifter:brass_mesh'])
        .id('kubejs:recipes/createsiftersifting/brass/deepslate');

    event.recipes.createsifterSifting([
        Item.of('minecraft:raw_gold').withChance(0.06),
        Item.of('infinite_resources:raw_aluminum').withChance(0.02),
        Item.of('infinite_resources:raw_lead').withChance(0.03),
        Item.of('infinite_resources:raw_nickel').withChance(0.03),
        Item.of('infinite_resources:raw_silver').withChance(0.03),
        Item.of('kubejs:raw_osmium').withChance(0.02),
        Item.of('kubejs:raw_uranium').withChance(0.01),
        Item.of('minecraft:diamond').withChance(0.01),
        Item.of('powah:uraninite_raw').withChance(0.01),
        Item.of('irons_spellbooks:raw_mithril').withChance(0.005)
    ], ['kubejs:deepslate_gravel', 'kubejs:netherite_mesh'])
        .id('kubejs:recipes/createsiftersifting/netherite/deepslate');
});