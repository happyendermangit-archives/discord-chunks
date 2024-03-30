function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        collectDeviceData: function() {
            return u
        },
        getBraintreeSDK: function() {
            return a
        }
    });
    var r = n("586159"),
        o = n("191548"),
        i = n("281767");

    function a() {
        return (0, r.importWithRetry)({
            createPromise: function() {
                return n.e("661").then(n.t.bind(n, "491668", 23))
            },
            webpackId: "491668"
        }).then(function(e) {
            return e.default
        })
    }

    function u() {
        var e = o.default.getClient();
        return null == e ? a().then(function(e) {
            return e.client.create({
                authorization: i.PaymentSettings.BRAINTREE.KEY
            }).then(function(e) {
                return s(e)
            }).catch(function() {
                return null
            })
        }) : s(e)
    }

    function s(e) {
        return a().then(function(t) {
            return t.dataCollector.create({
                client: e
            }).then(function(e) {
                return e.deviceData
            }).catch(function() {
                return null
            })
        })
    }
}