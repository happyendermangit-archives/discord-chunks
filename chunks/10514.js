function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007"), n("424973");
    var i = n("446674"),
        r = n("913144"),
        s = n("797647"),
        a = n("117362"),
        o = n("49111"),
        l = n("646718");
    let u = {},
        c = {},
        d = new Set,
        f = new Set,
        E = {},
        p = {};

    function h(e) {
        let t = e.skuId;
        u[e.id] = e;
        let n = e.prices[o.PriceSetAssignmentPurchaseTypes.DEFAULT];
        if (null != n) {
            var i;
            let t = new Set(Object.keys(n.paymentSourcePrices));
            E[e.id] = t;
            let r = Array.from(null !== (i = p[e.skuId]) && void 0 !== i ? i : new Set);
            p[e.skuId] = new Set([...r, ...Array.from(t)])
        }
        let r = c[t];
        null != r ? r.add(e.id) : c[t] = new Set([e.id])
    }

    function _() {
        [(0, l.SubscriptionPlanInfo)[l.SubscriptionPlans.NONE_MONTH], (0, l.SubscriptionPlanInfo)[l.SubscriptionPlans.NONE_YEAR], (0, l.SubscriptionPlanInfo)[l.SubscriptionPlans.NONE_3_MONTH], (0, l.SubscriptionPlanInfo)[l.SubscriptionPlans.NONE_6_MONTH]].forEach(e => h(s.default.createFromServer({
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

    function S(e) {
        h(s.default.createFromServer(e))
    }
    _();

    function m() {
        (0, a.clearObject)(u), (0, a.clearObject)(c), d.clear(), f.clear(), (0, a.clearObject)(E), (0, a.clearObject)(p), _()
    }
    let T = [l.SubscriptionIntervalTypes.DAY, l.SubscriptionIntervalTypes.MONTH, l.SubscriptionIntervalTypes.YEAR];
    class g extends i.default.Store {
        getPlanIdsForSkus(e) {
            let t = [];
            for (let i of e) {
                var n;
                let e = Array.from(null !== (n = c[i]) && void 0 !== n ? n : new Set);
                e.sort((e, t) => {
                    let n = u[e],
                        i = u[t];
                    return T.indexOf(n.interval) - T.indexOf(i.interval) || n.intervalCount - i.intervalCount
                }), t.push(...e)
            }
            return t
        }
        getFetchedSKUIDs() {
            return Object.keys(c)
        }
        getForSKU(e) {
            var t;
            return Array.from(null !== (t = c[e]) && void 0 !== t ? t : []).map(e => u[e])
        }
        getForSkuAndInterval(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            return this.getForSKU(e).find(e => e.interval === t && e.intervalCount === n)
        }
        get(e) {
            return u[e]
        }
        isFetchingForSKU(e) {
            return d.has(e)
        }
        isFetchingForSKUs(e) {
            return e.some(e => this.isFetchingForSKU(e))
        }
        isLoadedForSKU(e) {
            return !!f.has(e) || !d.has(e) && null != c[e]
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
            return E.hasOwnProperty(e) ? E[e] : null
        }
        getPaymentSourceIds() {
            let e = new Set;
            return Object.values(E).forEach(t => t.forEach(t => e.add(t))), e
        }
        hasPaymentSourceForSKUId(e, t) {
            return l.PremiumSubscriptionSKUs.NONE === t || null != p[t] && p[t].has(e)
        }
        hasPaymentSourceForSKUIds(e, t) {
            let n = t.every(t => this.hasPaymentSourceForSKUId(e, t));
            return n
        }
    }
    g.displayName = "SubscriptionPlanStore";
    var I = new g(r.default, {
        SUBSCRIPTION_PLANS_FETCH: function(e) {
            let {
                skuId: t
            } = e;
            d.add(t)
        },
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: function(e) {
            let {
                skuId: t,
                subscriptionPlans: n
            } = e;
            c[t] = new Set, p[t] = new Set, n.forEach(S), d.delete(t), f.delete(t)
        },
        SUBSCRIPTION_PLANS_FETCH_FAILURE: function(e) {
            let {
                skuId: t
            } = e;
            d.delete(t), f.delete(t)
        },
        SUBSCRIPTION_PLANS_RESET: m,
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            null != t.subscription_plan && S(t.subscription_plan)
        },
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function(e) {
            let {
                entitlements: t
            } = e;
            for (let e of t) null != e.subscription_plan && S(e.subscription_plan)
        },
        LOGOUT: m
    })
}