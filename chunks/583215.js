function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("818083");
    t.default = (0, i.createExperiment)({
        kind: "user",
        id: "2024-02_nvenc_new_presets",
        label: "nvenc new presets",
        defaultConfig: {
            nvEnableNewPresets: !1
        },
        treatments: [{
            id: 1,
            label: "enable adaptive key frame for nvenc",
            config: {
                nvEnableNewPresets: !0
            }
        }]
    })
}