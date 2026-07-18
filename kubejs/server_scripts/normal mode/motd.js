PlayerEvents.loggedIn(event => {
    event.player.tell(Text.of('§6§lWelcome to §aProper Infinite Horizons§6!'));
    event.player.tell(Text.gray('Follow the §fProper Horizon Campaign§7 quest group. The original progression is retained under §8Legacy§7 and mod chapters are reference material during the redesign.'));
    event.player.tell(Text.gold('New worlds should use the §eProper Horizon: Deep Flat§6 preset. This development branch is not yet validated for existing saves.'));
});