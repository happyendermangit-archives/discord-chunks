function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearPurchaseError: function() {
            return R
        },
        fetchPurchasePreview: function() {
            return h
        },
        fetchSKU: function() {
            return S
        },
        fetchTestSKUsForApplication: function() {
            return A
        },
        grantChannelBranchEntitlement: function() {
            return m
        },
        purchaseSKU: function() {
            return O
        },
        resendPaymentVerificationEmail: function() {
            return p
        },
        showPurchaseConfirmationStep: function() {
            return C
        },
        updateSKUPaymentIsGift: function() {
            return g
        }
    }), n("411104");
    var i = n("544891"),
        r = n("570140"),
        s = n("881052"),
        a = n("128069"),
        o = n("34756"),
        l = n("115130"),
        u = n("55563"),
        d = n("695103"),
        _ = n("122289"),
        c = n("823379"),
        E = n("936101"),
        I = n("73346"),
        T = n("355467"),
        f = n("981631");
    async function S(e, t) {
        if (null == u.default.get(t)) {
            r.default.dispatch({
                type: "SKU_FETCH_START",
                skuId: t
            });
            try {
                let n = d.default.inTestModeForApplication(e) || l.default.inDevModeForApplication(e),
                    i = await (0, I.httpGetWithCountryCodeQuery)(n ? f.Endpoints.STORE_SKU(t) : f.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(t));
                r.default.dispatch({
                    type: "SKU_FETCH_SUCCESS",
                    sku: n ? i.body : i.body.sku
                }), !n && r.default.dispatch({
                    type: "STORE_LISTING_FETCH_SUCCESS",
                    storeListing: i.body
                })
            } catch (e) {
                throw r.default.dispatch({
                    type: "SKU_FETCH_FAIL",
                    skuId: t
                }), new o.default("Failed to fetch SKU ".concat(t))
            }
        }
    }
    async function A(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (!(d.default.inTestModeForApplication(e) || l.default.inDevModeForApplication(e)) && t) throw Error("this should only be used in test mode");
        let n = (await (0, I.httpGetWithCountryCodeQuery)(f.Endpoints.APPLICATION_SKUS(e))).body;
        return r.default.dispatch({
            type: "SKUS_FETCH_SUCCESS",
            skus: n
        }), n
    }
    async function h(e, t, n, i) {
        let s;
        let a = {
            payment_source_id: n,
            gift: null == i ? void 0 : i.isGift
        };
        (d.default.inTestModeForApplication(e) || l.default.inDevModeForApplication(e)) && (a.test_mode = !0), r.default.dispatch({
            type: "SKU_PURCHASE_PREVIEW_FETCH",
            skuId: t
        });
        try {
            s = await (0, I.httpGetWithCountryCodeQuery)({
                url: f.Endpoints.STORE_SKU_PURCHASE(t),
                query: a,
                oldFormErrors: !0
            }), r.default.dispatch({
                type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
                skuId: t,
                paymentSourceId: n,
                price: s.body
            })
        } catch (e) {
            r.default.dispatch({
                type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
                skuId: t
            })
        }
        return s
    }
    async function m(e, t, n) {
        r.default.dispatch({
            type: "SKU_PURCHASE_START",
            applicationId: e,
            skuId: n
        });
        try {
            let e = await i.HTTP.post({
                url: f.Endpoints.CHANNEL_ENTITLEMENT_GRANT(t),
                oldFormErrors: !0
            });
            return r.default.dispatch({
                type: "SKU_PURCHASE_SUCCESS",
                skuId: n,
                entitlements: e.body,
                libraryApplications: []
            }), e.body
        } catch (i) {
            let t = new s.BillingError(i);
            throw r.default.dispatch({
                type: "SKU_PURCHASE_FAIL",
                applicationId: e,
                skuId: n,
                error: t
            }), t
        }
    }
    let N = {
        isGift: !1
    };
    async function O(e, t, n) {
        let {
            paymentSource: o,
            expectedAmount: u,
            expectedCurrency: I,
            analyticsLoadId: S,
            isGift: A,
            giftInfoOptions: h,
            subscriptionPlanId: m,
            loadId: O,
            countryCode: p
        } = {
            ...N,
            ...n
        };
        r.default.wait(() => {
            r.default.dispatch({
                type: "SKU_PURCHASE_START",
                applicationId: e,
                skuId: t
            })
        });
        let R = d.default.inTestModeForApplication(e) || l.default.inDevModeForApplication(e);
        try {
            let e = {
                gift: A,
                sku_subscription_plan_id: m,
                gateway_checkout_context: await (0, _.createGatewayCheckoutContext)(o),
                load_id: O
            };
            if (R) e.test_mode = !0;
            else {
                if (null != o && (e.payment_source_id = o.id, e.payment_source_token = await (0, T.createPaymentSourceToken)(o), f.ADYEN_PAYMENT_SOURCES.has(o.type))) {
                    let t = await (0, T.popupBridgeState)(o.type);
                    e.return_url = (0, i.getAPIBaseURL)() + f.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(o.type, null != t ? t : "", "success")
                }
                null != u && (e.expected_amount = u), null != I && (e.expected_currency = I), e.gift_info_options = h, null != p && (e.country_code = p), e.purchase_token = (0, E.getPurchaseToken)()
            }
            let n = await i.HTTP.post({
                url: f.Endpoints.STORE_SKU_PURCHASE(t),
                body: e,
                context: {
                    load_id: S
                },
                oldFormErrors: !0
            });
            return r.default.dispatch({
                type: "SKU_PURCHASE_SUCCESS",
                skuId: t,
                libraryApplications: null != n.body.library_applications ? n.body.library_applications.filter(c.isNotNullish) : [],
                entitlements: n.body.entitlements,
                giftCode: n.body.gift_code
            }), {
                ...n.body,
                redirectConfirmation: !1
            }
        } catch (i) {
            let n = i instanceof s.BillingError ? i : new s.BillingError(i);
            if ((n.code === a.ErrorCodes.CONFIRMATION_REQUIRED || n.code === a.ErrorCodes.AUTHENTICATION_REQUIRED) && r.default.dispatch({
                    type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                    skuId: t,
                    isGift: A
                }), n.code !== a.ErrorCodes.CONFIRMATION_REQUIRED) throw r.default.dispatch({
                type: "SKU_PURCHASE_FAIL",
                applicationId: e,
                skuId: t,
                error: n
            }), n;
            if (!i.body.payment_id) throw (0, T.dispatchConfirmationError)("payment id cannot be null on redirected confirmations.");
            return (0, T.handleConfirmation)(i.body, o)
        }
    }
    async function p() {
        try {
            let e = {
                purchase_token: (0, E.getPurchaseToken)()
            };
            return {
                ...(await i.HTTP.post({
                    url: f.Endpoints.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                    body: e,
                    oldFormErrors: !0
                })).body
            }
        } catch (e) {
            throw e instanceof s.BillingError ? e : new s.BillingError(e)
        }
    }

    function R() {
        r.default.dispatch({
            type: "SKU_PURCHASE_CLEAR_ERROR"
        })
    }

    function C() {
        r.default.wait(() => r.default.dispatch({
            type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP"
        }))
    }

    function g(e) {
        r.default.dispatch({
            type: "SKU_PURCHASE_UPDATE_IS_GIFT",
            isGift: e
        })
    }
}