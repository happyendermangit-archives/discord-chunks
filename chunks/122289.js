function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        captureBillingException: function() {
            return l
        },
        captureBillingMessage: function() {
            return u
        },
        createGatewayCheckoutContext: function() {
            return o
        },
        getLocalizedDisplayMonth: function() {
            return a
        }
    });
    var i = n("751767"),
        r = n("960048"),
        s = n("231338");

    function a(e, t) {
        let n = new Date;
        return n.setMonth(e - 1), n.toLocaleString(t, {
            month: "short"
        })
    }
    async function o(e) {
        let t = null;
        if (null != e && e.paymentGateway === s.PaymentGateways.BRAINTREE) {
            let e = await (0, i.collectDeviceData)();
            null != e && (t = {
                braintree_device_data: e
            })
        }
        return t
    }

    function l(e, t) {
        r.default.captureException(e, {
            ...t,
            tags: {
                ...null == t ? void 0 : t.tags,
                app_context: "billing"
            }
        })
    }

    function u(e, t) {
        r.default.captureMessage(e, {
            ...t,
            tags: {
                ...null == t ? void 0 : t.tags,
                app_context: "billing"
            }
        })
    }
}