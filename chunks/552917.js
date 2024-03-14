function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return n
        }
    });
    var r = i("862205");
    let u = (0, r.createExperiment)({
        kind: "user",
        id: "2022-12_premium_targeted_upsells",
        label: "Premium Targeted Upsells",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Use highest expected value to determine Nitro upsells",
            config: {
                enabled: !0,
                useExpectedValue: !0,
                useLikelihood: !1
            }
        }, {
            id: 2,
            label: "Use highest likelihood to determine Nitro upsells",
            config: {
                enabled: !0,
                useExpectedValue: !1,
                useLikelihood: !0
            }
        }]
    });
    var n = u
}