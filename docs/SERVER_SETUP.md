# Dedicated Server Setup

The `Default World Type` mod selects the Proper Horizon preset in the single-player Create World screen. It is a client-side selector and does not configure a dedicated server.

Before creating a server world, set the following in `server.properties`:

```properties
level-type=proper_horizon:deep_flat
generate-structures=true
```

The custom preset is supplied by the pack at:

```text
kubejs/data/proper_horizon/worldgen/world_preset/deep_flat.json
```

## Important

- Configure `level-type` **before the first world generation**.
- Delete or move an accidentally generated world before correcting the preset. Changing `level-type` does not rebuild existing chunks.
- Do not paste the legacy flat-layer string into `generator-settings`; the redesign uses a data-driven world preset with `features: true`.
- Keep the pack's KubeJS data files on both the client and server.
- Treat existing Infinite Horizons worlds as incompatible with the new geology until a migration path has been tested and documented.

## First server validation

After the server starts, create a fresh world and confirm:

1. the surface remains level;
2. the underground contains substantial stone and deepslate layers;
3. villages and selected structures can generate;
4. vanilla and modded ores appear in new chunks;
5. Nether and End portals create their normal dimensions;
6. the Proper Horizon Campaign appears for a new player;
7. no KubeJS or FTB Quests errors appear in `latest.log`.

A server is not release-ready merely because it reaches the title screen. Complete Act 0 without commands before marking the server smoke test as passed.