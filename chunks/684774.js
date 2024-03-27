function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
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
    t.default = i
}