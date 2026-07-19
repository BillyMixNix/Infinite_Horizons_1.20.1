// Proper Infinite Horizon: guarantee a readable, non-circular route to the first lava source.
// Once the player has one source, vanilla pointed-dripstone cauldrons provide renewable lava.

ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:lava_bucket'),
        [
            'CCC',
            'CBC',
            'CFC'
        ],
        {
            C: 'minecraft:cobblestone',
            B: 'minecraft:bucket',
            F: '#minecraft:coals'
        }
    ).id('proper_horizon:early_lava_bucket');

    // Dripstone must never be a wandering-trader or structure lottery in a progression pack.
    event.shaped(
        Item.of('minecraft:pointed_dripstone', 4),
        [
            ' C ',
            'CFC',
            ' C '
        ],
        {
            C: 'minecraft:clay_ball',
            F: 'minecraft:flint'
        }
    ).id('proper_horizon:pointed_dripstone');
});
