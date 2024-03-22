function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        fetchSubscriptionPlansOnNewPaymentSource: function() {
            return E
        },
        getCurrencies: function() {
            return f
        },
        planHasCurrency: function() {
            return _
        },
        useCurrencyWithPaymentSourceChange: function() {
            return T
        }
    }), n("222007");
    var i = n("884691"),
        r = n("627445"),
        u = n.n(r),
        l = n("913144"),
        a = n("775433"),
        o = n("308592"),
        s = n("10514"),
        c = n("719923"),
        S = n("49111"),
        d = n("646718");

    function E(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...d.ACTIVE_PREMIUM_SKUS];
        return null == t || s.default.hasPaymentSourceForSKUIds(t, e) ? Promise.resolve() : new Promise(t => {
            l.default.wait(async () => {
                await (0, a.fetchSubscriptionPlansBySKUs)(e), t()
            })
        })
    }

    function f(t, e, n) {
        let i, r = [],
            l = [],
            a = {
                purchaseType: n ? S.PriceSetAssignmentPurchaseTypes.GIFT : S.PriceSetAssignmentPurchaseTypes.DEFAULT
            };
        return u(i = "string" == typeof t ? s.default.get(t) : t, "subscription plan not loaded"), null != e && s.default.hasPaymentSourceForSKUId(e, i.skuId) && (a.paymentSourceId = e), (r = (l = (0, c.experimentalGetPrices)(i.id, a)).map(t => t.currency)).length < 1 && (r = [S.CurrencyCodes.USD]), r
    }

    function _(t, e, n) {
        let i = s.default.get(t);
        u(null != i, "plan is undefined");
        let r = f(i, n, !1);
        return r.includes(e)
    }

    function T(t, e, n, r, u) {
        let [l, a] = i.useReducer((t, e) => ({
            ...t,
            ...e
        }), null != n ? {
            paymentSourceId: n,
            currency: t,
            loaded: !1
        } : {
            currency: t,
            loaded: !1
        }), c = (0, o.useSubscriptionPlansLoaded)(u);
        i.useEffect(() => {
            let t = async () => {
                await E(n, u);
                let t = [];
                null != e && null != s.default.get(e) && (t = f(e, n, r)), t.length > 0 ? a({
                    paymentSourceId: n,
                    currency: t[0],
                    loaded: !0
                }) : a({
                    paymentSourceId: n,
                    loaded: !1
                })
            };
            t()
        }, [n, JSON.stringify(u), e, r, c]);
        let S = l.paymentSourceId !== n || null == e || !c || !0 !== l.loaded;
        return {
            hasFetchedSubscriptionPlans: c,
            priceOptions: l,
            setCurrency: t => {
                a({
                    currency: t
                })
            },
            currencyLoading: S
        }
    }
}