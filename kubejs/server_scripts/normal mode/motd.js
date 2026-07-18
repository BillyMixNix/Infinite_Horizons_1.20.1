PlayerEvents.loggedIn(event => {
    event.player.tell(Text.of('§6§lWelcome to §aProper Infinite Horizons§6!'));
    event.player.tell(Text.gray('Follow the §fProper Horizon Campaign§7. The inherited questbooks are archived in Git history and are no longer loaded.'));
    event.player.tell(Text.gold('New worlds should use the §eProper Horizon: Deep Flat§6 preset. This development branch is not yet validated for existing saves.'));
});