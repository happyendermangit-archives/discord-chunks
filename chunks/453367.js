function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useBlockedPaymentsConfig: function() {
            return u
        }
    });
    var r = n("94498"),
        o = n("591065"),
        i = (0, r.createExperiment)({
            kind: "user",
            id: "2022-03_block_russian_purchases",
            label: "Block purchases based on country",
            defaultConfig: {
                paymentsBlocked: !1
            },
            treatments: [{
                id: 1,
                label: "Payments Blocked",
                config: {
                    paymentsBlocked: !0
                }
            }]
        }),
        a = (0, r.createExperiment)({
            kind: "user",
            id: "2022-03_block_russian_purchases_desktop",
            label: "Block purchases based on country (desktop specific flags)",
            defaultConfig: {
                checkPaymentSource: !1
            },
            treatments: [{
                id: 1,
                label: "Check Payment Source",
                config: {
                    checkPaymentSource: !0
                }
            }]
        });

    function u() {
        var e = i.useExperiment({
                location: "c519a9_1"
            }, {
                autoTrackExposure: !1
            }).paymentsBlocked,
            t = a.useExperiment({
                location: "c519a9_2"
            }, {
                autoTrackExposure: !1
            }).checkPaymentSource,
            n = (0, o.default)().defaultBillingCountryCode;
        return e || t && "RU" === n
    }
    t.default = i
}