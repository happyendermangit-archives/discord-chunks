function(e, t, n) {
    "use strict";
    n.r(t);
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2024-02_nitro_emoji_autocomplete_upsell",
        label: "Emoji Autocomplete Upsells",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Show upsells in Emoji Autocomplete",
            config: {
                enabled: !0
            }
        }]
    });
    t.default = r
}