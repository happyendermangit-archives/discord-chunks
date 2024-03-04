function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        fetchSKU: function() {
            return I
        },
        fetchTestSKUsForApplication: function() {
            return A
        },
        fetchPurchasePreview: function() {
            return p
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
            return U
        },
        showPurchaseConfirmationStep: function() {
            return L
        },
        updateSKUPaymentIsGift: function() {
            return M
        }
    }), n("70102");
    var u = n("872717"),
        i = n("913144"),
        r = n("448993"),
        l = n("736978"),
        a = n("333805"),
        o = n("84460"),
        s = n("552712"),
        c = n("167726"),
        S = n("745279"),
        E = n("449008"),
        d = n("224400"),
        f = n("271560"),
        _ = n("850068"),
        T = n("49111");
    async function I(t, e) {
        if (null == s.default.get(e)) {
            i.default.dispatch({
                type: "SKU_FETCH_START",
                skuId: e
            });
            try {
                let n = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t),
                    u = await (0, f.httpGetWithCountryCodeQuery)(n ? T.Endpoints.STORE_SKU(e) : T.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e));
                i.default.dispatch({
                    type: "SKU_FETCH_SUCCESS",
                    sku: n ? u.body : u.body.sku
                })
            } catch (t) {
                throw i.default.dispatch({
                    type: "SKU_FETCH_FAIL",
                    skuId: e
                }), new a.default("Failed to fetch SKU ".concat(e))
            }
        }
    }
    async function A(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t);
        if (!n && e) throw Error("this should only be used in test mode");
        let u = await (0, f.httpGetWithCountryCodeQuery)(T.Endpoints.APPLICATION_SKUS(t)),
            r = u.body;
        return i.default.dispatch({
            type: "SKUS_FETCH_SUCCESS",
            skus: r
        }), r
    }
    async function p(t, e, n, u) {
        let r;
        let l = {
                payment_source_id: n,
                gift: null == u ? void 0 : u.isGift
            },
            a = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t);
        a && (l.test_mode = !0), i.default.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH",
            skuId: e
        });
        try {
            r = await (0, f.httpGetWithCountryCodeQuery)({
                url: T.Endpoints.STORE_SKU_PURCHASE(e),
                query: l,
                oldFormErrors: !0
            }), i.default.dispatch({
                type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
                skuId: e,
                paymentSourceId: n,
                price: r.body
            })
        } catch (t) {
            i.default.dispatch({
                type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
                skuId: e
            })
        }
        return r
    }
    async function C(t, e, n) {
        i.default.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: t,
            skuId: n
        });
        try {
            let t = await u.default.post({
                url: T.Endpoints.CHANNEL_ENTITLEMENT_GRANT(e),
                oldFormErrors: !0
            });
            return i.default.dispatch({
                type: "SKU_PURCHASE_SUCCESS",
                skuId: n,
                entitlements: t.body,
                libraryApplications: []
            }), t.body
        } catch (u) {
            let e = new r.BillingError(u);
            throw i.default.dispatch({
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
            isGift: A,
            giftInfoOptions: p,
            subscriptionPlanId: C,
            loadId: N,
            countryCode: R
        } = {
            ...P,
            ...n
        };
        i.default.wait(() => {
            i.default.dispatch({
                type: "SKU_PURCHASE_START",
                applicationId: t,
                skuId: e
            })
        });
        let U = c.default.inTestModeForApplication(t) || o.default.inDevModeForApplication(t);
        try {
            let t = {
                gift: A,
                sku_subscription_plan_id: C,
                gateway_checkout_context: await (0, S.createGatewayCheckoutContext)(a),
                load_id: N
            };
            if (U) t.test_mode = !0;
            else {
                if (null != a && (t.payment_source_id = a.id, t.payment_source_token = await (0, _.createPaymentSourceToken)(a), T.ADYEN_PAYMENT_SOURCES.has(a.type))) {
                    let e = await (0, _.popupBridgeState)(a.type);
                    t.return_url = u.default.getAPIBaseURL() + T.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(a.type, null != e ? e : "", "success")
                }
                null != s && (t.expected_amount = s), null != f && (t.expected_currency = f), t.gift_info_options = p, null != R && (t.country_code = R), t.purchase_token = (0, d.getPurchaseToken)()
            }
            let n = await u.default.post({
                url: T.Endpoints.STORE_SKU_PURCHASE(e),
                body: t,
                context: {
                    load_id: I
                },
                oldFormErrors: !0
            });
            return i.default.dispatch({
                type: "SKU_PURCHASE_SUCCESS",
                skuId: e,
                libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(E.isNotNullish) : [],
                entitlements: n.body.entitlements,
                giftCode: n.body.gift_code
            }), {
                ...n.body,
                redirectConfirmation: !1
            }
        } catch (u) {
            let n = u instanceof r.BillingError ? u : new r.BillingError(u);
            if ((n.code === l.ErrorCodes.CONFIRMATION_REQUIRED || n.code === l.ErrorCodes.AUTHENTICATION_REQUIRED) && i.default.dispatch({
                    type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                    skuId: e,
                    isGift: A
                }), n.code !== l.ErrorCodes.CONFIRMATION_REQUIRED) throw i.default.dispatch({
                type: "SKU_PURCHASE_FAIL",
                applicationId: t,
                skuId: e,
                error: n
            }), n;
            if (!u.body.payment_id) throw (0, _.dispatchConfirmationError)("payment id cannot be null on redirected confirmations.");
            return (0, _.handleConfirmation)(u.body, a)
        }
    }
    async function R() {
        try {
            let t = {
                    purchase_token: (0, d.getPurchaseToken)()
                },
                e = await u.default.post({
                    url: T.Endpoints.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: t,
                    oldFormErrors: !0
                });
            return {
                ...e.body
            }
        } catch (t) {
            throw t instanceof r.BillingError ? t : new r.BillingError(t)
        }
    }

    function U() {
        i.default.dispatch({
            type: "SKU_PURCHASE_CLEAR_ERROR"
        })
    }

    function L() {
        i.default.wait(() => i.default.dispatch({
            type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP"
        }))
    }

    function M(t) {
        i.default.dispatch({
            type: "SKU_PURCHASE_UPDATE_IS_GIFT",
            isGift: t
        })
    }
}