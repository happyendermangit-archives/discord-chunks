function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchSubscriptionPlansOnNewPaymentSource: function() {
            return E
        },
        getCurrencies: function() {
            return I
        },
        planHasCurrency: function() {
            return T
        },
        useCurrencyWithPaymentSourceChange: function() {
            return f
        }
    }), n("47120");
    var i = n("470079"),
        r = n("512722"),
        a = n.n(r),
        s = n("570140"),
        o = n("821849"),
        l = n("15640"),
        u = n("509545"),
        d = n("74538"),
        _ = n("981631"),
        c = n("474936");

    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...c.ACTIVE_PREMIUM_SKUS];
        return null == e || u.default.hasPaymentSourceForSKUIds(e, t) ? Promise.resolve() : new Promise(e => {
            s.default.wait(async () => {
                await (0, o.fetchSubscriptionPlansBySKUs)(t), e()
            })
        })
    }

    function I(e, t, n) {
        let i, r = [],
            s = [],
            o = {
                purchaseType: n ? _.PriceSetAssignmentPurchaseTypes.GIFT : _.PriceSetAssignmentPurchaseTypes.DEFAULT
            };
        return i = "string" == typeof e ? u.default.get(e) : e, a()(i, "subscription plan not loaded"), null != t && u.default.hasPaymentSourceForSKUId(t, i.skuId) && (o.paymentSourceId = t), (r = (s = (0, d.experimentalGetPrices)(i.id, o)).map(e => e.currency)).length < 1 && (r = [_.CurrencyCodes.USD]), r
    }

    function T(e, t, n) {
        let i = u.default.get(e);
        return a()(null != i, "plan is undefined"), I(i, n, !1).includes(t)
    }

    function f(e, t, n, r, a) {
        let [s, o] = i.useReducer((e, t) => ({
            ...e,
            ...t
        }), null != n ? {
            paymentSourceId: n,
            currency: e,
            loaded: !1
        } : {
            currency: e,
            loaded: !1
        }), d = (0, l.useSubscriptionPlansLoaded)(a);
        i.useEffect(() => {
            (async () => {
                await E(n, a);
                let e = [];
                null != t && null != u.default.get(t) && (e = I(t, n, r)), e.length > 0 ? o({
                    paymentSourceId: n,
                    currency: e[0],
                    loaded: !0
                }) : o({
                    paymentSourceId: n,
                    loaded: !1
                })
            })()
        }, [n, JSON.stringify(a), t, r, d]);
        let _ = s.paymentSourceId !== n || null == t || !d || !0 !== s.loaded;
        return {
            hasFetchedSubscriptionPlans: d,
            priceOptions: s,
            setCurrency: e => {
                o({
                    currency: e
                })
            },
            currencyLoading: _
        }
    }
}