function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        collectDeviceData: function() {
            return o
        },
        getBraintreeSDK: function() {
            return s
        }
    });
    var i = n("663993"),
        r = n("618541"),
        a = n("981631");

    function s() {
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
        return null == e ? s().then(e => e.client.create({
            authorization: a.PaymentSettings.BRAINTREE.KEY
        }).then(e => l(e)).catch(() => null)) : l(e)
    }

    function l(e) {
        return s().then(t => t.dataCollector.create({
            client: e
        }).then(e => e.deviceData).catch(() => null))
    }
}