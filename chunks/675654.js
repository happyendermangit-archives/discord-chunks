function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        COMMON_CONFETTI_BASE_CONFIG: function() {
            return l
        },
        COMMON_CONFETTI_COLORS: function() {
            return s
        },
        COMMON_CONFETTI_ENVIRONMENT: function() {
            return u
        },
        COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
            return o
        },
        COMMON_CONFETTI_SPRITES: function() {
            return a
        },
        DUCK_CONFETTI_SPRITE: function() {
            return r
        }
    });
    var i = n("236471");
    let r = n("177351"),
        s = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
        a = [n("294521"), r, n("817812"), n("602002"), n("673910"), n("337242"), n("678282"), {
            src: n("688815"),
            colorize: !1
        }],
        o = 28,
        l = {
            velocity: {
                type: "static-random",
                minValue: {
                    x: 30,
                    y: -80
                },
                maxValue: {
                    x: -30,
                    y: -180
                }
            },
            rotation: {
                type: "linear-random",
                minValue: 0,
                maxValue: 360,
                minAddValue: -25,
                maxAddValue: 25
            },
            size: {
                type: "static-random",
                minValue: 14,
                maxValue: 28
            }
        },
        u = new i.Environment
}