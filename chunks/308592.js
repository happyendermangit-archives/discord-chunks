function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        useSubscriptionPlansLoaded: function() {
            return c
        },
        getSubscriptionPlansLoaded: function() {
            return S
        }
    }), n("222007");
    var i = n("446674"),
        u = n("605250"),
        r = n("357957"),
        l = n("10514"),
        a = n("521012"),
        o = n("646718");
    new u.default("useSubscriptionPlansLoaded");
    let s = t => {};

    function c() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS];
        return (0, i.useStateFromStores)([r.default, l.default, a.default], () => S(t, [r.default, l.default, a.default]), [t])
    }

    function S() {
        var t;
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.ACTIVE_PREMIUM_SKUS],
            [n, i, u] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default, l.default, a.default],
            c = n.paymentSourceIds,
            S = n.defaultPaymentSourceId,
            d = i.isLoadedForSKUs(e),
            E = null === (t = u.getPremiumTypeSubscription()) || void 0 === t ? void 0 : t.paymentSourceId;
        if (null != E && !i.hasPaymentSourceForSKUIds(E, e)) return s("subscription payment source ".concat(E, " not loaded for ").concat(e)), !1;
        if (null != S && !i.hasPaymentSourceForSKUIds(S, e)) return s("default payment source ".concat(S, " not loaded for ").concat(e)), !1;
        for (let t of c)
            if (!i.hasPaymentSourceForSKUIds(t, e)) return s("payment source ".concat(t, " not loaded for ").concat(e)), !1;
        return s("isLoadedForSKUs ".concat(d)), d
    }
}