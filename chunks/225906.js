function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        reducedPaymentInfoExperiment: function() {
            return o
        }
    });
    var r = (0, n("94498").createExperiment)({
        id: "2023-06_reduced_payment_method_address_info",
        label: "Reduced Payment Method Address Info",
        kind: "user",
        defaultConfig: {
            bucket: 0,
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Simplify address form",
            config: {
                bucket: 1,
                enabled: !0
            }
        }, {
            id: 2,
            label: "Partial address in card form",
            config: {
                bucket: 2,
                enabled: !0
            }
        }]
    });

    function o() {
        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            autoTrackExposure: !0
        }).autoTrackExposure;
        return r.getCurrentConfig({
            location: "2b69fe_1"
        }, {
            autoTrackExposure: e
        })
    }
}