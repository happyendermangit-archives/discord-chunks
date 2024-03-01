function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        DUCK_CONFETTI_SPRITE: function() {
            return o
        },
        COMMON_CONFETTI_COLORS: function() {
            return l
        },
        COMMON_CONFETTI_SPRITES: function() {
            return i
        },
        COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
            return a
        },
        COMMON_CONFETTI_BASE_CONFIG: function() {
            return s
        },
        COMMON_CONFETTI_ENVIRONMENT: function() {
            return c
        }
    });
    var n = r("516555"),
        u = r("839491");
    let o = u,
        l = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
        i = [r("606863"), o, r("164654"), r("540346"), r("526094"), r("367469"), r("23933"), {
            src: r("283397"),
            colorize: !1
        }],
        a = 28,
        s = {
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
                maxValue: a
            }
        },
        c = new n.Environment
}