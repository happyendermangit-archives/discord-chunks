function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        collectDeviceData: function() {
            return o
        },
        getBraintreeSDK: function() {
            return a
        }
    });
    var i = n("663993"),
        r = n("618541"),
        s = n("981631");

    function a() {
        return (0, i.importWithRetry)({
            createPromise: () => n.e("661").then(n.t.bind(n, "491668", 23)),
            webpackId: "491668"
        }).then(e => {
            let {
                default: t
            } = e;
            return t
        })
    }

    function o() {
        let e = r.default.getClient();
        return null == e ? a().then(e => e.client.create({
            authorization: s.PaymentSettings.BRAINTREE.KEY
        }).then(e => l(e)).catch(() => null)) : l(e)
    }

    function l(e) {
        return a().then(t => t.dataCollector.create({
            client: e
        }).then(e => e.deviceData).catch(() => null))
    }
}