function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        fetchSKU: function() {
            return I
        },
        fetchTestSKUsForApplication: function() {
            return p
        },
        fetchPurchasePreview: function() {
            return A
        },
        grantChannelBranchEntitlement: function() {
            return C
        },
        purchaseSKU: function() {
            return N
        },
        resendPaymentVerificationEmail: function() {
            return R
        },
        clearPurchaseError: function() {
            return h
        },
        showPurchaseConfirmationStep: function() {
            return U
        },
        updateSKUPaymentIsGift: function() {
            return L
        }
    }), n("70102");
    var i = n("872717"),
        r = n("913144"),
        u = n("448993"),
        l = n("736978"),
        a = n("333805"),
        o = n("84460"),
        s = n("552712"),
        c = n("167726"),
        S = n("745279"),
        d = n("449008"),
        E = n("224400"),
        f = n("271560"),
        _ = n("850068"),
        T = n("49111");
    async function I(t, e) {
        if (null == s.default.get(e)) {
            r.default.dispatch({
                type: "SKU_FETCH_START",
                skuId: e
            });
            try {
                let n = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t),
                    i = await (0, f.httpGetWithCountryCodeQuery)(n ? T.Endpoints.STORE_SKU(e) : T.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e));
                r.default.dispatch({
                    type: "SKU_FETCH_SUCCESS",
                    sku: n ? i.body : i.body.sku
                }), !n && r.default.dispatch({
                    type: "STORE_LISTING_FETCH_SUCCESS",
                    storeListing: i.body
                })
            } catch (t) {
                throw r.default.dispatch({
                    type: "SKU_FETCH_FAIL",
                    skuId: e
                }), new a.default("Failed to fetch SKU ".concat(e))
            }
        }
    }
    async function p(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t);
        if (!n && e) throw Error("this should only be used in test mode");
        let i = await (0, f.httpGetWithCountryCodeQuery)(T.Endpoints.APPLICATION_SKUS(t)),
            u = i.body;
        return r.default.dispatch({
            type: "SKUS_FETCH_SUCCESS",
            skus: u
        }), u
    }
    async function A(t, e, n, i) {
        let u;
        let l = {
                payment_source_id: n,
                gift: null == i ? void 0 : i.isGift
            },
            a = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t);
        a && (l.test_mode = !0), r.default.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH",
            skuId: e
        });
        try {
            u = await (0, f.httpGetWithCountryCodeQuery)({
                url: T.Endpoints.STORE_SKU_PURCHASE(e),
                query: l,
                oldFormErrors: !0
            }), r.default.dispatch({
                type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
                skuId: e,
                paymentSourceId: n,
                price: u.body
            })
        } catch (t) {
            r.default.dispatch({
                type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
                skuId: e
            })
        }
        return u
    }
    async function C(t, e, n) {
        r.default.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: t,
            skuId: n
        });
        try {
            let t = await i.HTTP.post({
                url: T.Endpoints.CHANNEL_ENTITLEMENT_GRANT(e),
                oldFormErrors: !0
            });
            return r.default.dispatch({
                type: "SKU_PURCHASE_SUCCESS",
                skuId: n,
                entitlements: t.body,
                libraryApplications: []
            }), t.body
        } catch (i) {
            let e = new u.BillingError(i);
            throw r.default.dispatch({
                type: "SKU_PURCHASE_FAIL",
                applicationId: t,
                skuId: n,
                error: e
            }), e
        }
    }
    let P = {
        isGift: !1
    };
    async function N(t, e, n) {
        let {
            paymentSource: a,
            expectedAmount: s,
            expectedCurrency: f,
            analyticsLoadId: I,
            isGift: p,
            giftInfoOptions: A,
            subscriptionPlanId: C,
            loadId: N,
            countryCode: R
        } = {
            ...P,
            ...n
        };
        r.default.wait(() => {
            r.default.dispatch({
                type: "SKU_PURCHASE_START",
                applicationId: t,
                skuId: e
            })
        });
        let h = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t);
        try {
            let t = {
                gift: p,
                sku_subscription_plan_id: C,
                gateway_checkout_context: await (0, S.createGatewayCheckoutContext)(a),
                load_id: N
            };
            if (h) t.test_mode = !0;
            else {
                if (null != a && (t.payment_source_id = a.id, t.payment_source_token = await (0, _.createPaymentSourceToken)(a), T.ADYEN_PAYMENT_SOURCES.has(a.type))) {
                    let e = await (0, _.popupBridgeState)(a.type);
                    t.return_url = (0, i.getAPIBaseURL)() + T.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(a.type, null != e ? e : "", "success")
                }
                null != s && (t.expected_amount = s), null != f && (t.expected_currency = f), t.gift_info_options = A, null != R && (t.country_code = R), t.purchase_token = (0, E.getPurchaseToken)()
            }
            let n = await i.HTTP.post({
                url: T.Endpoints.STORE_SKU_PURCHASE(e),
                body: t,
                context: {
                    load_id: I
                },
                oldFormErrors: !0
            });
            return r.default.dispatch({
                type: "SKU_PURCHASE_SUCCESS",
                skuId: e,
                libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(d.isNotNullish) : [],
                entitlements: n.body.entitlements,
                giftCode: n.body.gift_code
            }), {
                ...n.body,
                redirectConfirmation: !1
            }
        } catch (i) {
            let n = i instanceof u.BillingError ? i : new u.BillingError(i);
            if ((n.code === l.ErrorCodes.CONFIRMATION_REQUIRED || n.code === l.ErrorCodes.AUTHENTICATION_REQUIRED) && r.default.dispatch({
                    type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                    skuId: e,
                    isGift: p
                }), n.code !== l.ErrorCodes.CONFIRMATION_REQUIRED) throw r.default.dispatch({
                type: "SKU_PURCHASE_FAIL",
                applicationId: t,
                skuId: e,
                error: n
            }), n;
            if (!i.body.payment_id) throw (0, _.dispatchConfirmationError)("payment id cannot be null on redirected confirmations.");
            return (0, _.handleConfirmation)(i.body, a)
        }
    }
    async function R() {
        try {
            let t = {
                    purchase_token: (0, E.getPurchaseToken)()
                },
                e = await i.HTTP.post({
                    url: T.Endpoints.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: t,
                    oldFormErrors: !0
                });
            return {
                ...e.body
            }
        } catch (t) {
            throw t instanceof u.BillingError ? t : new u.BillingError(t)
        }
    }

    function h() {
        r.default.dispatch({
            type: "SKU_PURCHASE_CLEAR_ERROR"
        })
    }

    function U() {
        r.default.wait(() => r.default.dispatch({
            type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP"
        }))
    }

    function L(t) {
        r.default.dispatch({
            type: "SKU_PURCHASE_UPDATE_IS_GIFT",
            isGift: t
        })
    }
}