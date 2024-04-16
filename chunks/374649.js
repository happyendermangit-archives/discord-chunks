function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getItemUnitPriceWithDiscount: function() {
            return p
        },
        updateSubscriptionInvoicePreview: function() {
            return T
        },
        useGetSubscriptionInvoice: function() {
            return N
        },
        useOneTimePurchaseInvoicePreview: function() {
            return A
        },
        useSubscriptionInvoicePreview: function() {
            return m
        }
    }), n("47120");
    var i = n("470079"),
        r = n("512722"),
        s = n.n(r),
        a = n("442837"),
        o = n("544891"),
        l = n("881052"),
        u = n("146528"),
        d = n("78839"),
        _ = n("74538"),
        c = n("73346"),
        E = n("981631");
    async function I(e) {
        let {
            items: t,
            paymentSourceId: n,
            trialId: i,
            code: r,
            applyEntitlements: s = !1,
            currency: a,
            renewal: d,
            metadata: c
        } = e, I = {
            items: (t = (0, _.coerceExistingItemsToNewItemInterval)(t)).map(e => {
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
            trial_id: i,
            code: r,
            apply_entitlements: s,
            currency: a,
            renewal: d,
            metadata: c
        };
        try {
            let e = await o.HTTP.post({
                url: E.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                body: I,
                oldFormErrors: !0
            });
            return u.default.createInvoiceFromServer(e.body)
        } catch (e) {
            throw new l.BillingError(e)
        }
    }
    async function T(e) {
        let {
            subscriptionId: t,
            items: n,
            paymentSourceId: i,
            renewal: r,
            currency: s,
            applyEntitlements: a = !1,
            analyticsLocations: d,
            analyticsLocation: c,
            userDiscountOfferId: I
        } = e;
        null != n && (n = (0, _.coerceExistingItemsToNewItemInterval)(n));
        let T = {
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
            payment_source_id: i,
            renewal: r,
            apply_entitlements: a,
            currency: s,
            user_discount_offer_id: I
        };
        try {
            let e = await o.HTTP.patch({
                url: E.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                query: {
                    location: c,
                    location_stack: d
                },
                body: T,
                oldFormErrors: !0
            });
            return u.default.createInvoiceFromServer(e.body)
        } catch (e) {
            throw new l.BillingError(e)
        }
    }
    async function f(e) {
        let {
            paymentSourceId: t,
            skuId: n,
            subscriptionPlanId: i,
            currency: r,
            loadId: a
        } = e;
        s()(n, "SKU ID is missing for one time purchase gift invoice preview");
        try {
            let e = await (0, c.httpGetWithCountryCodeQuery)({
                url: E.Endpoints.STORE_SKU_PURCHASE(n),
                query: {
                    gift: !0,
                    payment_source_id: t,
                    sku_subscription_plan_id: i,
                    currency: r,
                    load_id: a
                },
                oldFormErrors: !0
            });
            return u.default.createInvoiceFromServer(e.body)
        } catch (e) {
            throw new l.BillingError(e)
        }
    }
    async function S(e) {
        let {
            subscriptionId: t,
            preventFetch: n
        } = e;
        if (n) return null;
        let i = await o.HTTP.get({
            url: E.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
            oldFormErrors: !0
        });
        return u.default.createInvoiceFromServer(i.body)
    }

    function h(e, t) {
        let {
            preventFetch: n = !1
        } = e, [r, s] = (0, i.useState)(null), [o, l] = (0, i.useState)(null), u = (0, a.useStateFromStores)([d.default], () => d.default.getSubscriptions());
        return (0, i.useEffect)(() => {
            let e = !1;
            async function i() {
                try {
                    l(null), s(null);
                    let n = await t();
                    !e && s(n)
                } catch (t) {
                    !e && l(t)
                }
            }
            return !n && i(), () => {
                e = !0
            }
        }, [n, t, u]), [r, o]
    }

    function A(e) {
        let t = (0, i.useCallback)(() => f(e), [JSON.stringify(e)]);
        return h(e, t)
    }

    function m(e) {
        if ("subscriptionId" in e && null == e.subscriptionId) {
            let {
                subscriptionId: t,
                ...n
            } = e;
            e = n
        }
        let t = (0, i.useCallback)(() => "subscriptionId" in e ? T(e) : "items" in e ? I(e) : null, [JSON.stringify(e)]);
        return h(e, t)
    }

    function N(e) {
        let t = (0, i.useCallback)(() => S(e), [JSON.stringify(e)]);
        return h(e, t)
    }

    function p(e) {
        let t = e.subscriptionPlanPrice;
        return e.discounts.forEach(n => {
            let i = n.amount / e.quantity;
            t -= i
        }), t
    }
}