// Proper Infinite Horizons: renewable resource systems unlock after the player
// has built a real industrial territory and defeated the Wither.
ServerEvents.recipes(event => {
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
});