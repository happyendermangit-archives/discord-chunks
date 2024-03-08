function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        useBlockedPaymentsConfig: function() {
            return a
        },
        default: function() {
            return o
        }
    });
    var i = n("862205"),
        u = n("15733");
    let r = (0, i.createExperiment)({
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
        l = (0, i.createExperiment)({
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

    function a() {
        let {
            paymentsBlocked: t
        } = r.useExperiment({
            location: "c519a9_1"
        }, {
            autoTrackExposure: !1
        }), {
            checkPaymentSource: e
        } = l.useExperiment({
            location: "c519a9_2"
        }, {
            autoTrackExposure: !1
        }), {
            defaultBillingCountryCode: n
        } = (0, u.default)();
        return t || e && "RU" === n
    }
    var o = r
}