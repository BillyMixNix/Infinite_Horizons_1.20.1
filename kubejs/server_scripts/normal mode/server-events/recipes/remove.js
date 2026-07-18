// https://kubejs.com/wiki/tutorials/recipes#removing-recipes
ServerEvents.recipes(event => {
    // removing by id
    const identifications = [
        'functionalstorage:oak_drawer_alternate_x1', 'functionalstorage:oak_drawer_alternate_x2', 'functionalstorage:oak_drawer_alternate_x4',
        'create:crushing/netherrack', 'projecte:low_covalence_dust', 'projecte:medium_covalence_dust', 'projecte:high_covalence_dust',
        'extendedcrafting:ender_crafter', 'extendedcrafting:ender_alternator', 'extendedcrafting:flux_alternator', 'extendedcrafting:flux_crafter',
        'extendedcrafting:black_iron_ingot_uncraft', 'extendedcrafting:black_iron_ingot_uncraft', 'extendedcrafting:the_ultimate_catalyst',
        'extendedcrafting:the_ultimate_component', 'extendedcrafting:black_iron_slate', 'bountiful:crafting/bountyboard', 'cobblefordays:tier_1',
        'cobblefordays:tier_2', 'cobblefordays:tier_3', 'cobblefordays:tier_4', 'cobblefordays:tier_5', 'torchmaster:megatorch', 'projecte:dark_matter',
        'projecte:red_matter', 'ore_tree:coal_tree_sapling', 'ore_tree:copper_tree_sapling', 'ore_tree:diamond_tree_sapling',
        'ore_tree:emerald_tree_sapling', 'ore_tree:gold_tree_sapling', 'ore_tree:iron_tree_sapling', 'ore_tree:lapis_tree_sapling', 'ore_tree:quartz_tree_sapling',
        'ore_tree:redstone_tree_sapling', 'farmersdelight:cutting/gravel', 'create:crushing/scrap_cobblestone_small',
        'extendedcrafting:ender_ingot', 'extendedcrafting:redstone_ingot', 'extendedcrafting:luminessence', 'extendedcrafting:black_iron_block',
        'create:crushing/gravel', 'botania:livingwood_twig', 'botania:dreamwood_twig', 'create:crushing/tuff', 'create:crushing/tuff_recycling',
        'create:crushing/crimsite_recycling', 'create:crushing/asurine_recycling', 'create:crushing/ochrum_recycling',
        'create:crushing/veridium_recycling',
        'delightful:integration/twigs/cutting/cobblestone', 'create:crafting/appliances/dough',
        'enderio:iron_gear'
    ];
    identifications.forEach(identification => {
        event.remove({ id: identification });
    });

    // removing by output
    const outputs = [
        'mekanism:digital_miner',
        'industrialforegoing:laser_drill',
        'industrialforegoing:ore_laser_base',
        'industrialforegoing:fluid_laser_base',
        'mysticalagriculture:prosperity_seed_base',
        'waystones:warp_stone',
        'waystones:warp_plate',
        'waystones:portstone',
        'extendedcrafting:the_ultimate_block',
        'extendedcrafting:the_ultimate_ingot',
        'extendedcrafting:the_ultimate_nugget',
        'cookingforblockheads:crafting_book'
    ];
    outputs.forEach(output => {
        event.remove({ output: output });
    });

    // These systems remain in the pack, but their ordinary recipes bypass the authored economy.
    event.remove({ output: /productivebees:advanced_.*_beehive/ });
    event.remove({ output: /productivebees:expansion_box_.*/ });
    event.remove({ output: /waystones:.*waystone/ });
    event.remove({ output: /waystones:.*sharestone/ });

    // removing by mod
    const mods = ['dimpaintings'];
    mods.forEach(mod => {
        event.remove({ mod: mod });
    });

    // remove gregtech-powah mismatched uraninite recipes.
    event.remove({ input: 'powah:uraninite_raw', output: 'gtceu:uraninite_dust' });
    event.remove({ id: 'twigs:cobblestone_from_pebble' });

    event.remove({ id: 'create:milling/granite' });
    event.remove({ input: 'mysticalagriculture:rubber_essence' });

    event.remove({ id: /createsifter:sifting\/.*mesh/ });

    event.remove({ id: /thermal:parts\/.*gear/ });

    event.remove({ id: 'projecte:philosophers_stone' });
    event.remove({ id: 'projecte:philosophers_stone_alt' });

    // Late renewable resources: discovery and industrialization come first.
    event.shaped(
        Item.of('mysticalagriculture:prosperity_seed_base', 4),
        [
            ' P ',
            'UNU',
            ' P '
        ],
        {
            P: 'mysticalagriculture:prosperity_shard',
            U: 'mekanism:ultimate_control_circuit',
            N: 'minecraft:nether_star'
        }
    ).id('proper_horizon:late_prosperity_seed_base');

    event.shaped(
        Item.of('productivebees:advanced_oak_beehive'),
        [
            'THT',
            'HNH',
            'TUT'
        ],
        {
            T: 'immersiveengineering:treated_wood_horizontal',
            H: 'minecraft:honeycomb',
            N: 'minecraft:nether_star',
            U: 'mekanism:ultimate_control_circuit'
        }
    ).id('proper_horizon:late_advanced_oak_beehive');

    event.shaped(
        Item.of('productivebees:expansion_box_oak'),
        [
            'TTT',
            'HUH',
            'TTT'
        ],
        {
            T: 'immersiveengineering:treated_wood_horizontal',
            H: 'minecraft:honeycomb',
            U: 'mekanism:ultimate_control_circuit'
        }
    ).id('proper_horizon:late_expansion_box_oak');

    // Teleportation connects developed routes after the first railway.
    event.shaped(
        Item.of('waystones:waystone'),
        [
            'SPS',
            'OTO',
            'SES'
        ],
        {
            S: 'minecraft:stone_bricks',
            P: 'create:precision_mechanism',
            O: 'minecraft:obsidian',
            T: 'create:track_station',
            E: 'minecraft:ender_pearl'
        }
    ).id('proper_horizon:post_rail_waystone');

    event.shaped(
        Item.of('waystones:warp_stone'),
        [
            ' E ',
            'EWE',
            ' E '
        ],
        {
            E: 'minecraft:ender_pearl',
            W: 'waystones:waystone'
        }
    ).id('proper_horizon:post_rail_warp_stone');
});