function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getBraintreeSDK: function() {
            return a
        },
        collectDeviceData: function() {
            return o
        }
    });
    var i = n("269936"),
        s = n("40597"),
        r = n("49111");

    function a() {
        return (0, i.importWithRetry)({
            createPromise: () => n.el("725271").then(n.t.bind(n, "725271", 23)),
            webpackId: "725271"
        }).then(e => {
            let {
                default: t
            } = e;
            return t
        })
    }

    function o() {
        let e = s.default.getClient();
        return null == e ? a().then(e => e.client.create({
            authorization: r.PaymentSettings.BRAINTREE.KEY
        }).then(e => l(e)).catch(() => null)) : l(e)
    }

    function l(e) {
        return a().then(t => t.dataCollector.create({
            client: e
        }).then(e => e.deviceData).catch(() => null))
    }
}