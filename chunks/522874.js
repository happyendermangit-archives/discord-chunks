function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowFraudMenuVariant: function() {
            return r
        }
    });
    var a = n("862205");
    let l = (0, a.createExperiment)({
        kind: "user",
        id: "2023-08_iar_fraud_impersonation",
        label: "In App Reports Fruad & Impersonation",
        defaultConfig: {
            showFraudMenuVariant: !1
        },
        treatments: [{
            id: 1,
            label: "Enabled",
            config: {
                showFraudMenuVariant: !0
            }
        }]
    });

    function r() {
        let {
            showFraudMenuVariant: e
        } = l.getCurrentConfig({
            location: "159afe_2"
        }, {
            autoTrackExposure: !0
        });
        return e
    }
}