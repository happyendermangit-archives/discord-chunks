function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSubscriptionPlansLoaded: function() {
            return _
        },
        useSubscriptionPlansLoaded: function() {
            return d
        }
    }), n("47120");
    var i = n("442837"),
        r = n("710845"),
        a = n("853872"),
        s = n("509545"),
        o = n("78839"),
        l = n("474936");
    new r.default("useSubscriptionPlansLoaded");
    let u = e => {};

    function d() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.ACTIVE_PREMIUM_SKUS];
        return (0, i.useStateFromStores)([a.default, s.default, o.default], () => _(e, [a.default, s.default, o.default]), [e])
    }

    function _() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.ACTIVE_PREMIUM_SKUS],
            [n, i, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default, s.default, o.default],
            d = n.paymentSourceIds,
            _ = n.defaultPaymentSourceId,
            c = i.isLoadedForSKUs(t),
            E = null === (e = r.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
        if (null != E && !i.hasPaymentSourceForSKUIds(E, t)) return u("subscription payment source ".concat(E, " not loaded for ").concat(t)), !1;
        if (null != _ && !i.hasPaymentSourceForSKUIds(_, t)) return u("default payment source ".concat(_, " not loaded for ").concat(t)), !1;
        for (let e of d)
            if (!i.hasPaymentSourceForSKUIds(e, t)) return u("payment source ".concat(e, " not loaded for ").concat(t)), !1;
        return u("isLoadedForSKUs ".concat(c)), c
    }
}