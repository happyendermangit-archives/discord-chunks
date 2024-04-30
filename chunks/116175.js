function(e, t, n) {
    "use strict";
    var i, r;
    n.r(t), n.d(t, {
        CLAN_BADGE_NUM_CUSTOMIZABLE_COLORS: function() {
            return o
        },
        CLAN_BADGE_PALETTE_PRESETS: function() {
            return s
        },
        ClanBadgeKind: function() {
            return i
        },
        getRandomClanBadgePreset: function() {
            return a
        }
    }), (r = i || (i = {}))[r.SWORD = 0] = "SWORD", r[r.WATER_DROP = 1] = "WATER_DROP", r[r.SKULL = 2] = "SKULL", r[r.TOADSTOOL = 3] = "TOADSTOOL", r[r.MOON = 4] = "MOON", r[r.LIGHTNING = 5] = "LIGHTNING", r[r.LEAF = 6] = "LEAF", r[r.HEART = 7] = "HEART", r[r.FIRE = 8] = "FIRE", r[r.COMPASS = 9] = "COMPASS", r[r.CROSSHAIRS = 10] = "CROSSHAIRS", r[r.FLOWER = 11] = "FLOWER", r[r.FORCE = 12] = "FORCE", r[r.GEM = 13] = "GEM", r[r.LAVA = 14] = "LAVA", r[r.PSYCHIC = 15] = "PSYCHIC", r[r.SMOKE = 16] = "SMOKE", r[r.SNOW = 17] = "SNOW", r[r.SOUND = 18] = "SOUND", r[r.SUN = 19] = "SUN", r[r.WIND = 20] = "WIND";
    let s = [{
        primary: "#ff1c90",
        secondary: "#ff7fc0"
    }, {
        primary: "#32839a",
        secondary: "#71c2d9"
    }, {
        primary: "#568d00",
        secondary: "#94cf38"
    }, {
        primary: "#8a43ff",
        secondary: "#bd95ff"
    }, {
        primary: "#9b3fe5",
        secondary: "#cc8dff"
    }, {
        primary: "#c03f7d",
        secondary: "#ff80bd"
    }, {
        primary: "#d14242",
        secondary: "#ff8989"
    }, {
        primary: "#ff8f1c",
        secondary: "#ffae77"
    }, {
        primary: "#eebe1a",
        secondary: "#fffc7f"
    }, {
        primary: "#92ff7f",
        secondary: "#27e772"
    }, {
        primary: "#32a070",
        secondary: "#57b59e"
    }, {
        primary: "#6d6d6d",
        secondary: "#737373"
    }, {
        primary: "#3f3f3f",
        secondary: "#555555"
    }];

    function a() {
        return s[Math.floor(Math.random() * s.length)]
    }
    let o = {
        0: 2,
        1: 1,
        2: 1,
        3: 2,
        4: 1,
        5: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 2,
        10: 2,
        11: 2,
        12: 2,
        13: 2,
        14: 2,
        15: 2,
        16: 2,
        17: 2,
        18: 2,
        19: 2,
        20: 2
    }
}