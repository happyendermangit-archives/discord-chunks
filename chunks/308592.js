function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        useSubscriptionPlansLoaded: function() {
            return c
        },
        getSubscriptionPlansLoaded: function() {
            return d
        }
    }), n("222007");
    var i = n("446674"),
        r = n("605250"),
        u = n("357957"),
        l = n("10514"),
        a = n("521012"),
        o = n("646718");
    new r.default("useSubscriptionPlansLoaded");
    let s = t => {};

    function c() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS];
        return (0, i.useStateFromStores)([u.default, l.default, a.default], () => d(t, [u.default, l.default, a.default]), [t])
    }

    function d() {
        var t;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS],
            [n, i, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.default, l.default, a.default],
            c = n.paymentSourceIds,
            d = n.defaultPaymentSourceId,
            S = i.isLoadedForSKUs(e),
            E = null === (t = r.getPremiumTypeSubscription()) || void 0 === t ? void 0 : t.paymentSourceId;
        if (null != E && !i.hasPaymentSourceForSKUIds(E, e)) return s("subscription payment source ".concat(E, " not loaded for ").concat(e)), !1;
        if (null != d && !i.hasPaymentSourceForSKUIds(d, e)) return s("default payment source ".concat(d, " not loaded for ").concat(e)), !1;
        for (let t of c)
            if (!i.hasPaymentSourceForSKUIds(t, e)) return s("payment source ".concat(t, " not loaded for ").concat(e)), !1;
        return s("isLoadedForSKUs ".concat(S)), S
    }
}