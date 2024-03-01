function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("862205");
    let r = (0, i.createExperiment)({
        kind: "user",
        id: "2023-10_dcf_holdout",
        label: "DCF Holdout",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Users will only see DCs that bypass the holdout",
            config: {
                enabled: !0
            }
        }]
    });
    var s = r
}