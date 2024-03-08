function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("862205");
    let l = (0, i.createExperiment)({
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
    var a = l
}