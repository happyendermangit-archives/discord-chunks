function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("301766"),
        d = n("251625"),
        _ = n("709054"),
        c = n("981631"),
        E = n("474936");
    let I = {},
        T = {},
        f = new Set,
        S = new Set,
        A = {},
        h = {};

    function m(e) {
        let t = e.skuId;
        I[e.id] = e;
        let n = e.prices[c.PriceSetAssignmentPurchaseTypes.DEFAULT];
        if (null != n) {
            var i;
            let t = new Set(Object.keys(n.paymentSourcePrices));
            A[e.id] = t;
            let r = Array.from(null !== (i = h[e.skuId]) && void 0 !== i ? i : new Set);
            h[e.skuId] = new Set([...r, ...Array.from(t)])
        }
        let r = T[t];
        null != r ? r.add(e.id) : T[t] = new Set([e.id])
    }

    function N() {
        [(0, E.SubscriptionPlanInfo)[E.SubscriptionPlans.NONE_MONTH], (0, E.SubscriptionPlanInfo)[E.SubscriptionPlans.NONE_YEAR], (0, E.SubscriptionPlanInfo)[E.SubscriptionPlans.NONE_3_MONTH], (0, E.SubscriptionPlanInfo)[E.SubscriptionPlans.NONE_6_MONTH]].forEach(e => m(u.default.createFromServer({
            id: e.id,
            name: e.name,
            interval: e.interval,
            interval_count: e.intervalCount,
            tax_inclusive: !0,
            sku_id: e.skuId,
            currency: c.CurrencyCodes.USD,
            price: 0,
            price_tier: 0,
            discount_price: null
        })))
    }

    function O(e) {
        m(u.default.createFromServer(e))
    }
    N();

    function p() {
        (0, d.clearObject)(I), (0, d.clearObject)(T), f.clear(), S.clear(), (0, d.clearObject)(A), (0, d.clearObject)(h), N()
    }
    let R = [E.SubscriptionIntervalTypes.DAY, E.SubscriptionIntervalTypes.MONTH, E.SubscriptionIntervalTypes.YEAR];
    class C extends(i = o.default.Store) {
        getPlanIdsForSkus(e) {
            let t = [];
            for (let i of e) {
                var n;
                let e = Array.from(null !== (n = T[i]) && void 0 !== n ? n : new Set);
                e.sort((e, t) => {
                    let n = I[e],
                        i = I[t];
                    return R.indexOf(n.interval) - R.indexOf(i.interval) || n.intervalCount - i.intervalCount
                }), t.push(...e)
            }
            return t
        }
        getFetchedSKUIDs() {
            return _.default.keys(T)
        }
        getForSKU(e) {
            var t;
            return Array.from(null !== (t = T[e]) && void 0 !== t ? t : []).map(e => I[e])
        }
        getForSkuAndInterval(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            return this.getForSKU(e).find(e => e.interval === t && e.intervalCount === n)
        }
        get(e) {
            return I[e]
        }
        isFetchingForSKU(e) {
            return f.has(e)
        }
        isFetchingForSKUs(e) {
            return e.some(e => this.isFetchingForSKU(e))
        }
        isLoadedForSKU(e) {
            return !!S.has(e) || !f.has(e) && null != T[e]
        }
        isLoadedForSKUs(e) {
            return e.every(e => this.isLoadedForSKU(e))
        }
        isFetchingForPremiumSKUs() {
            return E.ACTIVE_PREMIUM_SKUS.map(e => this.isFetchingForSKU(e)).includes(!0)
        }
        isLoadedForPremiumSKUs() {
            return E.ACTIVE_PREMIUM_SKUS.every(e => this.isLoadedForSKU(e))
        }
        ignoreSKUFetch(e) {
            S.add(e)
        }
        getPaymentSourcesForPlanId(e) {
            return A.hasOwnProperty(e) ? A[e] : null
        }
        getPaymentSourceIds() {
            let e = new Set;
            return Object.values(A).forEach(t => t.forEach(t => e.add(t))), e
        }
        hasPaymentSourceForSKUId(e, t) {
            return E.PremiumSubscriptionSKUs.NONE === t || null != h[t] && h[t].has(e)
        }
        hasPaymentSourceForSKUIds(e, t) {
            return t.every(t => this.hasPaymentSourceForSKUId(e, t))
        }
    }
    a = "SubscriptionPlanStore", (s = "displayName") in(r = C) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new C(l.default, {
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
            T[t] = new Set, h[t] = new Set, n.forEach(O), f.delete(t), S.delete(t)
        },
        SUBSCRIPTION_PLANS_FETCH_FAILURE: function(e) {
            let {
                skuId: t
            } = e;
            f.delete(t), S.delete(t)
        },
        SUBSCRIPTION_PLANS_RESET: p,
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            null != t.subscription_plan && O(t.subscription_plan)
        },
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function(e) {
            let {
                entitlements: t
            } = e;
            for (let e of t) null != e.subscription_plan && O(e.subscription_plan)
        },
        LOGOUT: p
    })
}