function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BACKGROUND_GRADIENT_PRESETS: function() {
            return f
        },
        BACKGROUND_GRADIENT_PRESETS_MAP: function() {
            return _
        }
    }), n("222007");
    var i, s, r = n("917351"),
        a = n("151426"),
        o = n("843455"),
        l = n("782340");
    let u = [{
            id: a.BackgroundGradientPresetId.MINT_APPLE,
            theme: o.ThemeTypes.LIGHT,
            colors: [{
                token: o.Color.BG_GRADIENT_MINT_APPLE_1,
                stop: 6.15
            }, {
                token: o.Color.BG_GRADIENT_MINT_APPLE_2,
                stop: 48.7
            }, {
                token: o.Color.BG_GRADIENT_MINT_APPLE_3,
                stop: 93.07
            }],
            angle: 180,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_MINT_APPLE,
            midpointPercentage: 27
        }, {
            id: a.BackgroundGradientPresetId.CITRUS_SHERBERT,
            theme: o.ThemeTypes.LIGHT,
            colors: [{
                token: o.Color.BG_GRADIENT_CITRUS_SHERBERT_1,
                stop: 31.1
            }, {
                token: o.Color.BG_GRADIENT_CITRUS_SHERBERT_2,
                stop: 67.09
            }],
            angle: 180,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_CITRUS_SHERBERT,
            midpointPercentage: 27
        }, {
            id: a.BackgroundGradientPresetId.RETRO_RAINCLOUD,
            theme: o.ThemeTypes.LIGHT,
            colors: [{
                token: o.Color.BG_GRADIENT_RETRO_RAINCLOUD_1,
                stop: 5.64
            }, {
                token: o.Color.BG_GRADIENT_RETRO_RAINCLOUD_2,
                stop: 26.38
            }, {
                token: o.Color.BG_GRADIENT_RETRO_RAINCLOUD_2,
                stop: 49.92
            }, {
                token: o.Color.BG_GRADIENT_RETRO_RAINCLOUD_1,
                stop: 73.12
            }],
            angle: 148.71,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_RETRO_RAINCLOUD,
            midpointPercentage: 50
        }, {
            id: a.BackgroundGradientPresetId.HANAMI,
            theme: o.ThemeTypes.LIGHT,
            colors: [{
                token: o.Color.BG_GRADIENT_HANAMI_1,
                stop: 3.56
            }, {
                token: o.Color.BG_GRADIENT_HANAMI_2,
                stop: 35.49
            }, {
                token: o.Color.BG_GRADIENT_HANAMI_3,
                stop: 68.78
            }],
            angle: 38.08,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_HANAMI,
            midpointPercentage: 50
        }, {
            id: a.BackgroundGradientPresetId.SUNRISE,
            theme: o.ThemeTypes.LIGHT,
            colors: [{
                token: o.Color.BG_GRADIENT_SUNRISE_1,
                stop: 8.62
            }, {
                token: o.Color.BG_GRADIENT_SUNRISE_2,
                stop: 48.07
            }, {
                token: o.Color.BG_GRADIENT_SUNRISE_3,
                stop: 76.04
            }],
            angle: 154.19,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_SUNRISE,
            midpointPercentage: 50
        }, {
            id: a.BackgroundGradientPresetId.COTTON_CANDY,
            theme: o.ThemeTypes.LIGHT,
            colors: [{
                token: o.Color.BG_GRADIENT_COTTON_CANDY_1,
                stop: 8.5
            }, {
                token: o.Color.BG_GRADIENT_COTTON_CANDY_2,
                stop: 94.28
            }],
            angle: 180.14,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_COTTON_CANDY,
            midpointPercentage: 50
        }, {
            id: a.BackgroundGradientPresetId.LOFI_VIBES,
            theme: o.ThemeTypes.LIGHT,
            colors: [{
                token: o.Color.BG_GRADIENT_LOFI_VIBES_1,
                stop: 7.08
            }, {
                token: o.Color.BG_GRADIENT_LOFI_VIBES_2,
                stop: 34.94
            }, {
                token: o.Color.BG_GRADIENT_LOFI_VIBES_3,
                stop: 65.12
            }, {
                token: o.Color.BG_GRADIENT_LOFI_VIBES_4,
                stop: 96.23
            }],
            angle: 179.52,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_LOFI_VIBES,
            midpointPercentage: 27
        }, {
            id: a.BackgroundGradientPresetId.DESERT_KHAKI,
            theme: o.ThemeTypes.LIGHT,
            colors: [{
                token: o.Color.BG_GRADIENT_DESERT_KHAKI_1,
                stop: 12.92
            }, {
                token: o.Color.BG_GRADIENT_DESERT_KHAKI_2,
                stop: 32.92
            }, {
                token: o.Color.BG_GRADIENT_DESERT_KHAKI_3,
                stop: 52.11
            }],
            angle: 38.99,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_DESERT_KHAKI,
            midpointPercentage: 50
        }],
        d = [{
            id: a.BackgroundGradientPresetId.SUNSET,
            theme: o.ThemeTypes.DARK,
            colors: [{
                token: o.Color.BG_GRADIENT_SUNSET_1,
                stop: 27.57
            }, {
                token: o.Color.BG_GRADIENT_SUNSET_2,
                stop: 71.25
            }],
            angle: 141.68,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_SUNSET,
            midpointPercentage: 35
        }, {
            id: a.BackgroundGradientPresetId.CHROMA_GLOW,
            theme: o.ThemeTypes.DARK,
            colors: [{
                token: o.Color.BG_GRADIENT_CHROMA_GLOW_1,
                stop: 3.94
            }, {
                token: o.Color.BG_GRADIENT_CHROMA_GLOW_2,
                stop: 26.1
            }, {
                token: o.Color.BG_GRADIENT_CHROMA_GLOW_3,
                stop: 39.82
            }, {
                token: o.Color.BG_GRADIENT_CHROMA_GLOW_4,
                stop: 56.89
            }, {
                token: o.Color.BG_GRADIENT_CHROMA_GLOW_5,
                stop: 76.45
            }],
            angle: 128.92,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_CHROMA_GLOW,
            midpointPercentage: 15
        }, {
            id: a.BackgroundGradientPresetId.FOREST,
            theme: o.ThemeTypes.DARK,
            colors: [{
                token: o.Color.BG_GRADIENT_FOREST_1,
                stop: 11.2
            }, {
                token: o.Color.BG_GRADIENT_FOREST_2,
                stop: 29.93
            }, {
                token: o.Color.BG_GRADIENT_FOREST_3,
                stop: 48.64
            }, {
                token: o.Color.BG_GRADIENT_FOREST_4,
                stop: 67.85
            }, {
                token: o.Color.BG_GRADIENT_FOREST_5,
                stop: 83.54
            }],
            angle: 162.27,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_FOREST,
            midpointPercentage: 50
        }, {
            id: a.BackgroundGradientPresetId.CRIMSON_MOON,
            theme: o.ThemeTypes.DARK,
            colors: [{
                token: o.Color.BG_GRADIENT_CRIMSON_MOON_1,
                stop: 16.17
            }, {
                token: o.Color.BG_GRADIENT_CRIMSON_MOON_2,
                stop: 72
            }],
            angle: 64.92,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_CRIMSON_MOON,
            midpointPercentage: 30
        }, {
            id: a.BackgroundGradientPresetId.MIDNIGHT_BLURPLE,
            theme: o.ThemeTypes.DARK,
            colors: [{
                token: o.Color.BG_GRADIENT_MIDNIGHT_BLURPLE_1,
                stop: 11.21
            }, {
                token: o.Color.BG_GRADIENT_MIDNIGHT_BLURPLE_2,
                stop: 61.92
            }],
            angle: 48.17,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_MIDNIGHT_BLURPLE,
            midpointPercentage: 24
        }, {
            id: a.BackgroundGradientPresetId.MARS,
            theme: o.ThemeTypes.DARK,
            colors: [{
                token: o.Color.BG_GRADIENT_MARS_1,
                stop: 14.61
            }, {
                token: o.Color.BG_GRADIENT_MARS_2,
                stop: 74.62
            }],
            angle: 170.82,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_MARS,
            midpointPercentage: 50
        }, {
            id: a.BackgroundGradientPresetId.DUSK,
            theme: o.ThemeTypes.DARK,
            colors: [{
                token: o.Color.BG_GRADIENT_DUSK_1,
                stop: 12.84
            }, {
                token: o.Color.BG_GRADIENT_DUSK_2,
                stop: 85.99
            }],
            angle: 180,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_DUSK,
            midpointPercentage: 50
        }, {
            id: a.BackgroundGradientPresetId.UNDER_THE_SEA,
            theme: o.ThemeTypes.DARK,
            colors: [{
                token: o.Color.BG_GRADIENT_UNDER_THE_SEA_1,
                stop: 1.91
            }, {
                token: o.Color.BG_GRADIENT_UNDER_THE_SEA_2,
                stop: 48.99
            }, {
                token: o.Color.BG_GRADIENT_UNDER_THE_SEA_3,
                stop: 96.35
            }],
            angle: 179.14,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_UNDER_THE_SEA,
            midpointPercentage: 50
        }, {
            id: a.BackgroundGradientPresetId.RETRO_STORM,
            theme: o.ThemeTypes.DARK,
            colors: [{
                token: o.Color.BG_GRADIENT_RETRO_STORM_1,
                stop: 5.64
            }, {
                token: o.Color.BG_GRADIENT_RETRO_STORM_2,
                stop: 26.38
            }, {
                token: o.Color.BG_GRADIENT_RETRO_STORM_2,
                stop: 49.92
            }, {
                token: o.Color.BG_GRADIENT_RETRO_STORM_1,
                stop: 73.12
            }],
            angle: 148.71,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_RETRO_STORM,
            midpointPercentage: 61
        }, {
            id: a.BackgroundGradientPresetId.NEON_NIGHTS,
            theme: o.ThemeTypes.DARK,
            colors: [{
                token: o.Color.BG_GRADIENT_NEON_NIGHTS_1,
                stop: 0
            }, {
                token: o.Color.BG_GRADIENT_NEON_NIGHTS_2,
                stop: 50
            }, {
                token: o.Color.BG_GRADIENT_NEON_NIGHTS_3,
                stop: 100
            }],
            angle: 180,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_NEON_NIGHTS,
            midpointPercentage: 50
        }, {
            id: a.BackgroundGradientPresetId.STRAWBERRY_LEMONADE,
            theme: o.ThemeTypes.DARK,
            colors: [{
                token: o.Color.BG_GRADIENT_STRAWBERRY_LEMONADE_1,
                stop: 18.79
            }, {
                token: o.Color.BG_GRADIENT_STRAWBERRY_LEMONADE_2,
                stop: 49.76
            }, {
                token: o.Color.BG_GRADIENT_STRAWBERRY_LEMONADE_3,
                stop: 80.72
            }],
            angle: 161.03,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_STRAWBERRY_LEMONADE,
            midpointPercentage: 32
        }, {
            id: a.BackgroundGradientPresetId.AURORA,
            theme: o.ThemeTypes.DARK,
            colors: [{
                token: o.Color.BG_GRADIENT_AURORA_1,
                stop: 10.39
            }, {
                token: o.Color.BG_GRADIENT_AURORA_2,
                stop: 26.87
            }, {
                token: o.Color.BG_GRADIENT_AURORA_3,
                stop: 48.31
            }, {
                token: o.Color.BG_GRADIENT_AURORA_4,
                stop: 64.98
            }, {
                token: o.Color.BG_GRADIENT_AURORA_5,
                stop: 92.5
            }],
            angle: 239.16,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_AURORA,
            midpointPercentage: 34
        }, {
            id: a.BackgroundGradientPresetId.SEPIA,
            theme: o.ThemeTypes.DARK,
            colors: [{
                token: o.Color.BG_GRADIENT_SEPIA_1,
                stop: 14.14
            }, {
                token: o.Color.BG_GRADIENT_SEPIA_2,
                stop: 60.35
            }],
            angle: 69.98,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_SEPIA,
            midpointPercentage: 50
        }],
        c = {
            id: a.BackgroundGradientPresetId.EASTER_EGG,
            theme: o.ThemeTypes.LIGHT,
            colors: [{
                token: o.Color.BG_GRADIENT_EASTER_EGG_1,
                stop: 4
            }, {
                token: o.Color.BG_GRADIENT_EASTER_EGG_2,
                stop: 96
            }],
            angle: 180,
            getName: () => l.default.Messages.CLIENT_THEMES_GRADIENT_EASTER_EGG,
            midpointPercentage: 50
        },
        f = [...u, ...d, c];
    [...d, ...u], (s = i || (i = {}))[s.DARK = 0] = "DARK", s[s.LIGHT = 1] = "LIGHT", s[s.SYSTEM = 2] = "SYSTEM", o.ThemeTypes.DARK, o.ThemeTypes.LIGHT, o.ThemeTypes.DARKER, o.ThemeTypes.LIGHT, o.ThemeTypes.MIDNIGHT, () => l.default.Messages.THEME_MIDNIGHT;
    let _ = (0, r.keyBy)(f, "id")
}