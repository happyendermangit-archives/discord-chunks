function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("222007"), n("424973");
    var i = n("446674"),
        s = n("913144"),
        r = n("797647"),
        a = n("117362"),
        o = n("49111"),
        l = n("646718");
    let u = {},
        d = {},
        c = new Set,
        f = new Set,
        _ = {},
        h = {};

    function E(e) {
        let t = e.skuId;
        u[e.id] = e;
        let n = e.prices[o.PriceSetAssignmentPurchaseTypes.DEFAULT];
        if (null != n) {
            var i;
            let t = new Set(Object.keys(n.paymentSourcePrices));
            _[e.id] = t;
            let s = Array.from(null !== (i = h[e.skuId]) && void 0 !== i ? i : new Set);
            h[e.skuId] = new Set([...s, ...Array.from(t)])
        }
        let s = d[t];
        null != s ? s.add(e.id) : d[t] = new Set([e.id])
    }

    function g() {
        [(0, l.SubscriptionPlanInfo)[l.SubscriptionPlans.NONE_MONTH], (0, l.SubscriptionPlanInfo)[l.SubscriptionPlans.NONE_YEAR], (0, l.SubscriptionPlanInfo)[l.SubscriptionPlans.NONE_3_MONTH], (0, l.SubscriptionPlanInfo)[l.SubscriptionPlans.NONE_6_MONTH]].forEach(e => E(r.default.createFromServer({
            id: e.id,
            name: e.name,
            interval: e.interval,
            interval_count: e.intervalCount,
            tax_inclusive: !0,
            sku_id: e.skuId,
            currency: o.CurrencyCodes.USD,
            price: 0,
            price_tier: 0,
            discount_price: null
        })))
    }

    function m(e) {
        E(r.default.createFromServer(e))
    }
    g();

    function p() {
        (0, a.clearObject)(u), (0, a.clearObject)(d), c.clear(), f.clear(), (0, a.clearObject)(_), (0, a.clearObject)(h), g()
    }
    let S = [l.SubscriptionIntervalTypes.DAY, l.SubscriptionIntervalTypes.MONTH, l.SubscriptionIntervalTypes.YEAR];
    class v extends i.default.Store {
        getPlanIdsForSkus(e) {
            let t = [];
            for (let i of e) {
                var n;
                let e = Array.from(null !== (n = d[i]) && void 0 !== n ? n : new Set);
                e.sort((e, t) => {
                    let n = u[e],
                        i = u[t];
                    return S.indexOf(n.interval) - S.indexOf(i.interval) || n.intervalCount - i.intervalCount
                }), t.push(...e)
            }
            return t
        }
        getFetchedSKUIDs() {
            return Object.keys(d)
        }
        getForSKU(e) {
            var t;
            return Array.from(null !== (t = d[e]) && void 0 !== t ? t : []).map(e => u[e])
        }
        getForSkuAndInterval(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            return this.getForSKU(e).find(e => e.interval === t && e.intervalCount === n)
        }
        get(e) {
            return u[e]
        }
        isFetchingForSKU(e) {
            return c.has(e)
        }
        isFetchingForSKUs(e) {
            return e.some(e => this.isFetchingForSKU(e))
        }
        isLoadedForSKU(e) {
            return !!f.has(e) || !c.has(e) && null != d[e]
        }
        isLoadedForSKUs(e) {
            return e.every(e => this.isLoadedForSKU(e))
        }
        isFetchingForPremiumSKUs() {
            return l.ACTIVE_PREMIUM_SKUS.map(e => this.isFetchingForSKU(e)).includes(!0)
        }
        isLoadedForPremiumSKUs() {
            return l.ACTIVE_PREMIUM_SKUS.every(e => this.isLoadedForSKU(e))
        }
        ignoreSKUFetch(e) {
            f.add(e)
        }
        getPaymentSourcesForPlanId(e) {
            return _.hasOwnProperty(e) ? _[e] : null
        }
        getPaymentSourceIds() {
            let e = new Set;
            return Object.values(_).forEach(t => t.forEach(t => e.add(t))), e
        }
        hasPaymentSourceForSKUId(e, t) {
            return l.PremiumSubscriptionSKUs.NONE === t || null != h[t] && h[t].has(e)
        }
        hasPaymentSourceForSKUIds(e, t) {
            let n = t.every(t => this.hasPaymentSourceForSKUId(e, t));
            return n
        }
    }
    v.displayName = "SubscriptionPlanStore";
    var T = new v(s.default, {
        SUBSCRIPTION_PLANS_FETCH: function(e) {
            let {
                skuId: t
            } = e;
            c.add(t)
        },
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: function(e) {
            let {
                skuId: t,
                subscriptionPlans: n
            } = e;
            d[t] = new Set, h[t] = new Set, n.forEach(m), c.delete(t), f.delete(t)
        },
        SUBSCRIPTION_PLANS_FETCH_FAILURE: function(e) {
            let {
                skuId: t
            } = e;
            c.delete(t), f.delete(t)
        },
        SUBSCRIPTION_PLANS_RESET: p,
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            null != t.subscription_plan && m(t.subscription_plan)
        },
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function(e) {
            let {
                entitlements: t
            } = e;
            for (let e of t) null != e.subscription_plan && m(e.subscription_plan)
        },
        LOGOUT: p
    })
}