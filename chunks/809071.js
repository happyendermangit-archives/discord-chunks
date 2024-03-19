function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        updateSubscriptionInvoicePreview: function() {
            return R
        },
        useOneTimePurchaseInvoicePreview: function() {
            return O
        },
        useSubscriptionInvoicePreview: function() {
            return T
        },
        useGetSubscriptionInvoice: function() {
            return A
        },
        getItemUnitPriceWithDiscount: function() {
            return p
        }
    }), r("222007");
    var n = r("884691"),
        i = r("627445"),
        l = r.n(i),
        u = r("446674"),
        s = r("872717"),
        a = r("448993"),
        f = r("195358"),
        o = r("521012"),
        c = r("719923"),
        _ = r("271560"),
        E = r("49111");
    async function d(e) {
        let {
            items: t,
            paymentSourceId: r,
            trialId: n,
            code: i,
            applyEntitlements: l = !1,
            currency: u,
            renewal: o,
            metadata: _
        } = e;
        t = (0, c.coerceExistingItemsToNewItemInterval)(t);
        let d = {
            items: t.map(e => {
                let {
                    planId: t,
                    ...r
                } = e;
                return {
                    ...r,
                    plan_id: t
                }
            }),
            payment_source_id: r,
            trial_id: n,
            code: i,
            apply_entitlements: l,
            currency: u,
            renewal: o,
            metadata: _
        };
        try {
            let e = await s.default.post({
                url: E.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                body: d,
                oldFormErrors: !0
            });
            return f.default.createInvoiceFromServer(e.body)
        } catch (e) {
            throw new a.BillingError(e)
        }
    }
    async function R(e) {
        let {
            subscriptionId: t,
            items: r,
            paymentSourceId: n,
            renewal: i,
            currency: l,
            applyEntitlements: u = !1,
            analyticsLocations: o,
            analyticsLocation: _,
            userDiscountOfferId: d
        } = e;
        null != r && (r = (0, c.coerceExistingItemsToNewItemInterval)(r));
        let R = {
            items: null == r ? void 0 : r.map(e => {
                let {
                    planId: t,
                    ...r
                } = e;
                return {
                    ...r,
                    plan_id: t
                }
            }),
            payment_source_id: n,
            renewal: i,
            apply_entitlements: u,
            currency: l,
            user_discount_offer_id: d
        };
        try {
            let e = await s.default.patch({
                url: E.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                query: {
                    location: _,
                    location_stack: o
                },
                body: R,
                oldFormErrors: !0
            });
            return f.default.createInvoiceFromServer(e.body)
        } catch (e) {
            throw new a.BillingError(e)
        }
    }
    async function I(e) {
        let {
            paymentSourceId: t,
            skuId: r,
            subscriptionPlanId: n
        } = e;
        l(r, "SKU ID is missing for one time purchase gift invoice preview");
        try {
            let e = await (0, _.httpGetWithCountryCodeQuery)({
                url: E.Endpoints.STORE_SKU_PURCHASE(r),
                query: {
                    gift: !0,
                    payment_source_id: t,
                    sku_subscription_plan_id: n
                },
                oldFormErrors: !0
            });
            return e.body
        } catch (e) {
            throw new a.BillingError(e)
        }
    }
    async function L(e) {
        let {
            subscriptionId: t,
            preventFetch: r
        } = e;
        if (r) return null;
        let n = await s.default.get({
            url: E.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
            oldFormErrors: !0
        });
        return f.default.createInvoiceFromServer(n.body)
    }

    function S(e, t) {
        let {
            preventFetch: r = !1
        } = e, [i, l] = (0, n.useState)(null), [s, a] = (0, n.useState)(null), f = (0, u.useStateFromStores)([o.default], () => o.default.getSubscriptions());
        return (0, n.useEffect)(() => {
            let e = !1;
            async function n() {
                try {
                    a(null), l(null);
                    let r = await t();
                    !e && l(r)
                } catch (t) {
                    !e && a(t)
                }
            }
            return !r && n(), () => {
                e = !0
            }
        }, [r, t, f]), [i, s]
    }

    function O(e) {
        let t = (0, n.useCallback)(() => I(e), [JSON.stringify(e)]);
        return S(e, t)
    }

    function T(e) {
        if ("subscriptionId" in e && null == e.subscriptionId) {
            let {
                subscriptionId: t,
                ...r
            } = e;
            e = r
        }
        let t = (0, n.useCallback)(() => "subscriptionId" in e ? R(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
        return S(e, t)
    }

    function A(e) {
        let t = (0, n.useCallback)(() => L(e), [JSON.stringify(e)]);
        return S(e, t)
    }

    function p(e) {
        let t = e.subscriptionPlanPrice;
        return e.discounts.forEach(r => {
            let n = r.amount / e.quantity;
            t -= n
        }), t
    }
}