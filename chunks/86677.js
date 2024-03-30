function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("94498");
    t.default = (0, r.createExperiment)({
        kind: "user",
        id: "2023-08_full_band_krisp_android_",
        label: "Let us control if full band is enabled on Android",
        defaultConfig: {
            allowSettingFullbandAndroid: !1
        },
        treatments: [{
            id: 1,
            label: "Load full band krisp model",
            config: {
                allowSettingFullbandAndroid: !0
            }
        }]
    })
}