function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        updateSubscriptionInvoicePreview: function() {
            return E
        },
        useOneTimePurchaseInvoicePreview: function() {
            return S
        },
        useSubscriptionInvoicePreview: function() {
            return P
        },
        useGetSubscriptionInvoice: function() {
            return R
        },
        getItemUnitPriceWithDiscount: function() {
            return C
        }
    }), n("222007");
    var r = n("884691"),
        i = n("627445"),
        l = n.n(i),
        a = n("446674"),
        s = n("872717"),
        o = n("448993"),
        u = n("195358"),
        c = n("521012"),
        d = n("719923"),
        f = n("271560"),
        m = n("49111");
    async function _(e) {
        let {
            items: t,
            paymentSourceId: n,
            trialId: r,
            code: i,
            applyEntitlements: l = !1,
            currency: a,
            renewal: c,
            metadata: f
        } = e;
        t = (0, d.coerceExistingItemsToNewItemInterval)(t);
        let _ = {
            items: t.map(e => {
                let {
                    planId: t,
                    ...n
                } = e;
                return {
                    ...n,
                    plan_id: t
                }
            }),
            payment_source_id: n,
            trial_id: r,
            code: i,
            apply_entitlements: l,
            currency: a,
            renewal: c,
            metadata: f
        };
        try {
            let e = await s.HTTP.post({
                url: m.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                body: _,
                oldFormErrors: !0
            });
            return u.default.createInvoiceFromServer(e.body)
        } catch (e) {
            throw new o.BillingError(e)
        }
    }
    async function E(e) {
        let {
            subscriptionId: t,
            items: n,
            paymentSourceId: r,
            renewal: i,
            currency: l,
            applyEntitlements: a = !1,
            analyticsLocations: c,
            analyticsLocation: f,
            userDiscountOfferId: _
        } = e;
        null != n && (n = (0, d.coerceExistingItemsToNewItemInterval)(n));
        let E = {
            items: null == n ? void 0 : n.map(e => {
                let {
                    planId: t,
                    ...n
                } = e;
                return {
                    ...n,
                    plan_id: t
                }
            }),
            payment_source_id: r,
            renewal: i,
            apply_entitlements: a,
            currency: l,
            user_discount_offer_id: _
        };
        try {
            let e = await s.HTTP.patch({
                url: m.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                query: {
                    location: f,
                    location_stack: c
                },
                body: E,
                oldFormErrors: !0
            });
            return u.default.createInvoiceFromServer(e.body)
        } catch (e) {
            throw new o.BillingError(e)
        }
    }
    async function I(e) {
        let {
            paymentSourceId: t,
            skuId: n,
            subscriptionPlanId: r
        } = e;
        l(n, "SKU ID is missing for one time purchase gift invoice preview");
        try {
            let e = await (0, f.httpGetWithCountryCodeQuery)({
                url: m.Endpoints.STORE_SKU_PURCHASE(n),
                query: {
                    gift: !0,
                    payment_source_id: t,
                    sku_subscription_plan_id: r
                },
                oldFormErrors: !0
            });
            return u.default.createInvoiceFromServer(e.body)
        } catch (e) {
            throw new o.BillingError(e)
        }
    }
    async function T(e) {
        let {
            subscriptionId: t,
            preventFetch: n
        } = e;
        if (n) return null;
        let r = await s.HTTP.get({
            url: m.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
            oldFormErrors: !0
        });
        return u.default.createInvoiceFromServer(r.body)
    }

    function p(e, t) {
        let {
            preventFetch: n = !1
        } = e, [i, l] = (0, r.useState)(null), [s, o] = (0, r.useState)(null), u = (0, a.useStateFromStores)([c.default], () => c.default.getSubscriptions());
        return (0, r.useEffect)(() => {
            let e = !1;
            async function r() {
                try {
                    o(null), l(null);
                    let n = await t();
                    !e && l(n)
                } catch (t) {
                    !e && o(t)
                }
            }
            return !n && r(), () => {
                e = !0
            }
        }, [n, t, u]), [i, s]
    }

    function S(e) {
        let t = (0, r.useCallback)(() => I(e), [JSON.stringify(e)]);
        return p(e, t)
    }

    function P(e) {
        if ("subscriptionId" in e && null == e.subscriptionId) {
            let {
                subscriptionId: t,
                ...n
            } = e;
            e = n
        }
        let t = (0, r.useCallback)(() => "subscriptionId" in e ? E(e) : "items" in e ? _(e) : null, [JSON.stringify(e)]);
        return p(e, t)
    }

    function R(e) {
        let t = (0, r.useCallback)(() => T(e), [JSON.stringify(e)]);
        return p(e, t)
    }

    function C(e) {
        let t = e.subscriptionPlanPrice;
        return e.discounts.forEach(n => {
            let r = n.amount / e.quantity;
            t -= r
        }), t
    }
}