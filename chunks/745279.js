function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getLocalizedDisplayMonth: function() {
            return a
        },
        createGatewayCheckoutContext: function() {
            return o
        },
        captureBillingException: function() {
            return l
        },
        captureBillingMessage: function() {
            return u
        }
    });
    var i = n("967117"),
        s = n("286235"),
        r = n("843455");

    function a(e, t) {
        let n = new Date;
        return n.setMonth(e - 1), n.toLocaleString(t, {
            month: "short"
        })
    }
    async function o(e) {
        let t = null;
        if (null != e && e.paymentGateway === r.PaymentGateways.BRAINTREE) {
            let e = await (0, i.collectDeviceData)();
            null != e && (t = {
                braintree_device_data: e
            })
        }
        return t
    }

    function l(e, t) {
        s.default.captureException(e, {
            ...t,
            tags: {
                ...null == t ? void 0 : t.tags,
                app_context: "billing"
            }
        })
    }

    function u(e, t) {
        s.default.captureMessage(e, {
            ...t,
            tags: {
                ...null == t ? void 0 : t.tags,
                app_context: "billing"
            }
        })
    }
}