function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007"), n("424973");
    var i = n("446674"),
        s = n("913144"),
        r = n("797647"),
        a = n("117362"),
        o = n("299039"),
        l = n("49111"),
        u = n("646718");
    let d = {},
        c = {},
        f = new Set,
        _ = new Set,
        E = {},
        h = {};

    function g(e) {
        let t = e.skuId;
        d[e.id] = e;
        let n = e.prices[l.PriceSetAssignmentPurchaseTypes.DEFAULT];
        if (null != n) {
            var i;
            let t = new Set(Object.keys(n.paymentSourcePrices));
            E[e.id] = t;
            let s = Array.from(null !== (i = h[e.skuId]) && void 0 !== i ? i : new Set);
            h[e.skuId] = new Set([...s, ...Array.from(t)])
        }
        let s = c[t];
        null != s ? s.add(e.id) : c[t] = new Set([e.id])
    }

    function m() {
        [(0, u.SubscriptionPlanInfo)[u.SubscriptionPlans.NONE_MONTH], (0, u.SubscriptionPlanInfo)[u.SubscriptionPlans.NONE_YEAR], (0, u.SubscriptionPlanInfo)[u.SubscriptionPlans.NONE_3_MONTH], (0, u.SubscriptionPlanInfo)[u.SubscriptionPlans.NONE_6_MONTH]].forEach(e => g(r.default.createFromServer({
            id: e.id,
            name: e.name,
            interval: e.interval,
            interval_count: e.intervalCount,
            tax_inclusive: !0,
            sku_id: e.skuId,
            currency: l.CurrencyCodes.USD,
            price: 0,
            price_tier: 0,
            discount_price: null
        })))
    }

    function p(e) {
        g(r.default.createFromServer(e))
    }
    m();

    function S() {
        (0, a.clearObject)(d), (0, a.clearObject)(c), f.clear(), _.clear(), (0, a.clearObject)(E), (0, a.clearObject)(h), m()
    }
    let v = [u.SubscriptionIntervalTypes.DAY, u.SubscriptionIntervalTypes.MONTH, u.SubscriptionIntervalTypes.YEAR];
    class T extends i.default.Store {
        getPlanIdsForSkus(e) {
            let t = [];
            for (let i of e) {
                var n;
                let e = Array.from(null !== (n = c[i]) && void 0 !== n ? n : new Set);
                e.sort((e, t) => {
                    let n = d[e],
                        i = d[t];
                    return v.indexOf(n.interval) - v.indexOf(i.interval) || n.intervalCount - i.intervalCount
                }), t.push(...e)
            }
            return t
        }
        getFetchedSKUIDs() {
            return o.default.keys(c)
        }
        getForSKU(e) {
            var t;
            return Array.from(null !== (t = c[e]) && void 0 !== t ? t : []).map(e => d[e])
        }
        getForSkuAndInterval(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            return this.getForSKU(e).find(e => e.interval === t && e.intervalCount === n)
        }
        get(e) {
            return d[e]
        }
        isFetchingForSKU(e) {
            return f.has(e)
        }
        isFetchingForSKUs(e) {
            return e.some(e => this.isFetchingForSKU(e))
        }
        isLoadedForSKU(e) {
            return !!_.has(e) || !f.has(e) && null != c[e]
        }
        isLoadedForSKUs(e) {
            return e.every(e => this.isLoadedForSKU(e))
        }
        isFetchingForPremiumSKUs() {
            return u.ACTIVE_PREMIUM_SKUS.map(e => this.isFetchingForSKU(e)).includes(!0)
        }
        isLoadedForPremiumSKUs() {
            return u.ACTIVE_PREMIUM_SKUS.every(e => this.isLoadedForSKU(e))
        }
        ignoreSKUFetch(e) {
            _.add(e)
        }
        getPaymentSourcesForPlanId(e) {
            return E.hasOwnProperty(e) ? E[e] : null
        }
        getPaymentSourceIds() {
            let e = new Set;
            return Object.values(E).forEach(t => t.forEach(t => e.add(t))), e
        }
        hasPaymentSourceForSKUId(e, t) {
            return u.PremiumSubscriptionSKUs.NONE === t || null != h[t] && h[t].has(e)
        }
        hasPaymentSourceForSKUIds(e, t) {
            let n = t.every(t => this.hasPaymentSourceForSKUId(e, t));
            return n
        }
    }
    T.displayName = "SubscriptionPlanStore";
    var I = new T(s.default, {
        SUBSCRIPTION_PLANS_FETCH: function(e) {
            let {
                skuId: t
            } = e;
            f.add(t)
        },
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: function(e) {
            let {
                skuId: t,
                subscriptionPlans: n
            } = e;
            c[t] = new Set, h[t] = new Set, n.forEach(p), f.delete(t), _.delete(t)
        },
        SUBSCRIPTION_PLANS_FETCH_FAILURE: function(e) {
            let {
                skuId: t
            } = e;
            f.delete(t), _.delete(t)
        },
        SUBSCRIPTION_PLANS_RESET: S,
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            null != t.subscription_plan && p(t.subscription_plan)
        },
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function(e) {
            let {
                entitlements: t
            } = e;
            for (let e of t) null != e.subscription_plan && p(e.subscription_plan)
        },
        LOGOUT: S
    })
}