function(e, t, n) {
    "use strict";
    var i, r;
    n.r(t), n.d(t, {
        CLAN_BADGE_PALETTE_PRESETS: function() {
            return s
        },
        ClanBadgeKind: function() {
            return i
        },
        getRandomClanBadgePreset: function() {
            return a
        }
    }), (r = i || (i = {}))[r.SWORD = 0] = "SWORD", r[r.SWORD_1 = 1] = "SWORD_1", r[r.SWORD_2 = 2] = "SWORD_2", r[r.SWORD_3 = 3] = "SWORD_3", r[r.SWORD_4 = 4] = "SWORD_4", r[r.SWORD_5 = 5] = "SWORD_5", r[r.SWORD_6 = 6] = "SWORD_6", r[r.SWORD_7 = 7] = "SWORD_7", r[r.SWORD_8 = 8] = "SWORD_8", r[r.SWORD_9 = 9] = "SWORD_9", r[r.SWORD_10 = 10] = "SWORD_10", r[r.SWORD_11 = 11] = "SWORD_11", r[r.SWORD_12 = 12] = "SWORD_12", r[r.SWORD_13 = 13] = "SWORD_13", r[r.SWORD_14 = 14] = "SWORD_14", r[r.SWORD_15 = 15] = "SWORD_15", r[r.SWORD_16 = 16] = "SWORD_16", r[r.SWORD_17 = 17] = "SWORD_17", r[r.SWORD_18 = 18] = "SWORD_18", r[r.SWORD_19 = 19] = "SWORD_19", r[r.SWORD_20 = 20] = "SWORD_20";
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
}