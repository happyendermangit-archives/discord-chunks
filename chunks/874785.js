function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "user",
        id: "2024-04_video_decoder_reset_fallback",
        label: "Video decoder reset/fallback on errors",
        defaultConfig: {
            resetOnErrors: !1,
            fallbackOnErrors: !1,
            fallbackOnConsecutiveErrors: !1
        },
        treatments: [{
            id: 1,
            label: "Reset only",
            config: {
                resetOnErrors: !0,
                fallbackOnErrors: !1,
                fallbackOnConsecutiveErrors: !1
            }
        }, {
            id: 2,
            label: "Fallback only",
            config: {
                resetOnErrors: !1,
                fallbackOnErrors: !0,
                fallbackOnConsecutiveErrors: !1
            }
        }, {
            id: 3,
            label: "Reset and fallback",
            config: {
                resetOnErrors: !0,
                fallbackOnErrors: !0,
                fallbackOnConsecutiveErrors: !1
            }
        }, {
            id: 4,
            label: "Reset and fallback, consecutive",
            config: {
                resetOnErrors: !0,
                fallbackOnErrors: !1,
                fallbackOnConsecutiveErrors: !0
            }
        }]
    })
}