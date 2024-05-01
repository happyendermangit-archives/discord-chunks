function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("355467"),
        r = n("496929"),
        s = n("147913"),
        a = n("594174"),
        o = n("351402"),
        l = n("78839"),
        u = n("580130"),
        d = n("630388"),
        _ = n("74538"),
        c = n("474936");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class I extends s.default {
        constructor(...e) {
            super(...e), E(this, "actions", {
                POST_CONNECTION_OPEN: () => {
                    this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription()
                }
            }), E(this, "maybeFetchSubscriptions", async () => {
                let e = a.default.getCurrentUser();
                if (_.default.isPremium(e)) {
                    !l.default.hasFetchedSubscriptions() && await (0, i.fetchSubscriptions)();
                    let e = l.default.getPremiumSubscription();
                    (null == e ? void 0 : e.paymentSourceId) == null && !u.default.applicationIdsFetched.has(c.PREMIUM_SUBSCRIPTION_APPLICATION) && await (0, r.fetchUserEntitlementsForApplication)(c.PREMIUM_SUBSCRIPTION_APPLICATION)
                }
            }), E(this, "maybeFetchMostRecentSubscription", () => {
                let e = a.default.getCurrentUser();
                null != e && !_.default.isPremium(e) && null != e.purchasedFlags && ((0, d.hasFlag)(e.purchasedFlags, c.PurchasedFlags.PREMIUM_TIER_1) || (0, d.hasFlag)(e.purchasedFlags, c.PurchasedFlags.PREMIUM_TIER_2)) && (0, i.fetchMostRecentSubscription)()
            }), E(this, "maybeFetchCountryCode", async () => {
                let e = a.default.getCurrentUser();
                _.default.isPremium(e) && !o.default.ipCountryCodeLoaded && await this.fetchCountryCode()
            }), E(this, "fetchCountryCode", async () => {
                await (0, i.fetchIpCountryCode)(), null != o.default.ipCountryCode && await (0, i.fetchPaymentSources)()
            })
        }
    }
    t.default = new I
}