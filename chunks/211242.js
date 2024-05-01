function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useBlockedPaymentsConfig: function() {
            return o
        }
    });
    var i = n("818083"),
        r = n("847903");
    let s = (0, i.createExperiment)({
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
        a = (0, i.createExperiment)({
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

    function o() {
        let {
            paymentsBlocked: e
        } = s.useExperiment({
            location: "c519a9_1"
        }, {
            autoTrackExposure: !1
        }), {
            checkPaymentSource: t
        } = a.useExperiment({
            location: "c519a9_2"
        }, {
            autoTrackExposure: !1
        }), {
            defaultBillingCountryCode: n
        } = (0, r.default)();
        return e || t && "RU" === n
    }
    t.default = s
}