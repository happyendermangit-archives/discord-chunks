function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i = (0, n("862205").createExperiment)({
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