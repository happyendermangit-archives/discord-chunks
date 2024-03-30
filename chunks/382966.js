function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearPurchaseError: function() {
            return w
        },
        fetchPurchasePreview: function() {
            return b
        },
        fetchSKU: function() {
            return S
        },
        fetchTestSKUsForApplication: function() {
            return g
        },
        grantChannelBranchEntitlement: function() {
            return R
        },
        purchaseSKU: function() {
            return D
        },
        resendPaymentVerificationEmail: function() {
            return M
        },
        showPurchaseConfirmationStep: function() {
            return k
        },
        updateSKUPaymentIsGift: function() {
            return G
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("146591"),
        a = n("402223"),
        u = n("445515"),
        s = n("361729"),
        l = n("332716"),
        c = n("472015"),
        f = n("146703"),
        d = n("162677"),
        _ = n("715526"),
        E = n("329903"),
        p = n("950175"),
        m = n("281767");

    function y(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function I(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    y(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    y(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function h(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function O(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function T(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }

    function S(e, t) {
        return v.apply(this, arguments)
    }

    function v() {
        return (v = I(function(e, t) {
            var n, r, i;
            return T(this, function(i) {
                switch (i.label) {
                    case 0:
                        if (null != l.default.get(t)) return [2];
                        o.default.dispatch({
                            type: "SKU_FETCH_START",
                            skuId: t
                        }), i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]), n = c.default.inTestModeForApplication(e) || s.default.inDevModeForApplication(e), [4, (0, E.httpGetWithCountryCodeQuery)(n ? m.Endpoints.STORE_SKU(t) : m.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(t))];
                    case 2:
                        return r = i.sent(), o.default.dispatch({
                            type: "SKU_FETCH_SUCCESS",
                            sku: n ? r.body : r.body.sku
                        }), !n && o.default.dispatch({
                            type: "STORE_LISTING_FETCH_SUCCESS",
                            storeListing: r.body
                        }), [3, 4];
                    case 3:
                        throw i.sent(), o.default.dispatch({
                            type: "SKU_FETCH_FAIL",
                            skuId: t
                        }), new u.default("Failed to fetch SKU ".concat(t));
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function g(e) {
        return A.apply(this, arguments)
    }

    function A() {
        return (A = I(function(e) {
            var t, n, r = arguments;
            return T(this, function(i) {
                switch (i.label) {
                    case 0:
                        if (t = !(r.length > 1) || void 0 === r[1] || r[1], !(c.default.inTestModeForApplication(e) || s.default.inDevModeForApplication(e)) && t) throw Error("this should only be used in test mode");
                        return [4, (0, E.httpGetWithCountryCodeQuery)(m.Endpoints.APPLICATION_SKUS(e))];
                    case 1:
                        return n = i.sent().body, o.default.dispatch({
                            type: "SKUS_FETCH_SUCCESS",
                            skus: n
                        }), [2, n]
                }
            })
        })).apply(this, arguments)
    }

    function b(e, t, n, r) {
        return N.apply(this, arguments)
    }

    function N() {
        return (N = I(function(e, t, n, r) {
            var i, a, u;
            return T(this, function(u) {
                switch (u.label) {
                    case 0:
                        i = {
                            payment_source_id: n,
                            gift: null == r ? void 0 : r.isGift
                        }, (c.default.inTestModeForApplication(e) || s.default.inDevModeForApplication(e)) && (i.test_mode = !0), o.default.dispatch({
                            type: "SKU_PURCHASE_PREVIEW_FETCH",
                            skuId: t
                        }), u.label = 1;
                    case 1:
                        return u.trys.push([1, 3, , 4]), [4, (0, E.httpGetWithCountryCodeQuery)({
                            url: m.Endpoints.STORE_SKU_PURCHASE(t),
                            query: i,
                            oldFormErrors: !0
                        })];
                    case 2:
                        return a = u.sent(), o.default.dispatch({
                            type: "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
                            skuId: t,
                            paymentSourceId: n,
                            price: a.body
                        }), [3, 4];
                    case 3:
                        return u.sent(), o.default.dispatch({
                            type: "SKU_PURCHASE_PREVIEW_FETCH_FAILURE",
                            skuId: t
                        }), [3, 4];
                    case 4:
                        return [2, a]
                }
            })
        })).apply(this, arguments)
    }

    function R(e, t, n) {
        return C.apply(this, arguments)
    }

    function C() {
        return (C = I(function(e, t, n) {
            var a, u, s;
            return T(this, function(l) {
                switch (l.label) {
                    case 0:
                        o.default.dispatch({
                            type: "SKU_PURCHASE_START",
                            applicationId: e,
                            skuId: n
                        }), l.label = 1;
                    case 1:
                        return l.trys.push([1, 3, , 4]), [4, r.HTTP.post({
                            url: m.Endpoints.CHANNEL_ENTITLEMENT_GRANT(t),
                            oldFormErrors: !0
                        })];
                    case 2:
                        return a = l.sent(), o.default.dispatch({
                            type: "SKU_PURCHASE_SUCCESS",
                            skuId: n,
                            entitlements: a.body,
                            libraryApplications: []
                        }), [2, a.body];
                    case 3:
                        throw u = l.sent(), s = new i.BillingError(u), o.default.dispatch({
                            type: "SKU_PURCHASE_FAIL",
                            applicationId: e,
                            skuId: n,
                            error: s
                        }), s;
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
    var P = {
        isGift: !1
    };

    function D(e, t, n) {
        return L.apply(this, arguments)
    }

    function L() {
        return (L = I(function(e, t, n) {
            var u, l, E, y, I, S, v, g, A, b, N, R, C, D, L, M, U;
            return T(this, function(T) {
                switch (T.label) {
                    case 0:
                        l = (u = O({}, P, n)).paymentSource, E = u.expectedAmount, y = u.expectedCurrency, I = u.analyticsLoadId, S = u.isGift, v = u.giftInfoOptions, g = u.subscriptionPlanId, A = u.loadId, b = u.countryCode, o.default.wait(function() {
                            o.default.dispatch({
                                type: "SKU_PURCHASE_START",
                                applicationId: e,
                                skuId: t
                            })
                        }), N = c.default.inTestModeForApplication(e) || s.default.inDevModeForApplication(e), T.label = 1;
                    case 1:
                        return T.trys.push([1, 9, , 10]), C = {
                            gift: S,
                            sku_subscription_plan_id: g
                        }, [4, (0, f.createGatewayCheckoutContext)(l)];
                    case 2:
                        if (C.gateway_checkout_context = T.sent(), C.load_id = A, R = C, !N) return [3, 3];
                        return R.test_mode = !0, [3, 7];
                    case 3:
                        if (!(null != l)) return [3, 6];
                        return R.payment_source_id = l.id, [4, (0, p.createPaymentSourceToken)(l)];
                    case 4:
                        if (R.payment_source_token = T.sent(), !m.ADYEN_PAYMENT_SOURCES.has(l.type)) return [3, 6];
                        return [4, (0, p.popupBridgeState)(l.type)];
                    case 5:
                        D = T.sent(), R.return_url = (0, r.getAPIBaseURL)() + m.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(l.type, null != D ? D : "", "success"), T.label = 6;
                    case 6:
                        null != E && (R.expected_amount = E), null != y && (R.expected_currency = y), R.gift_info_options = v, null != b && (R.country_code = b), R.purchase_token = (0, _.getPurchaseToken)(), T.label = 7;
                    case 7:
                        return [4, r.HTTP.post({
                            url: m.Endpoints.STORE_SKU_PURCHASE(t),
                            body: R,
                            context: {
                                load_id: I
                            },
                            oldFormErrors: !0
                        })];
                    case 8:
                        var w, k;
                        return L = T.sent(), o.default.dispatch({
                            type: "SKU_PURCHASE_SUCCESS",
                            skuId: t,
                            libraryApplications: null != L.body.library_applications ? L.body.library_applications.filter(d.isNotNullish) : [],
                            entitlements: L.body.entitlements,
                            giftCode: L.body.gift_code
                        }), [2, (w = O({}, L.body), k = (k = {
                            redirectConfirmation: !1
                        }, k), Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(k)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(k)).forEach(function(e) {
                            Object.defineProperty(w, e, Object.getOwnPropertyDescriptor(k, e))
                        }), w)];
                    case 9:
                        if (((U = h(M = T.sent(), i.BillingError) ? M : new i.BillingError(M)).code === a.ErrorCodes.CONFIRMATION_REQUIRED || U.code === a.ErrorCodes.AUTHENTICATION_REQUIRED) && o.default.dispatch({
                                type: "SKU_PURCHASE_AWAIT_CONFIRMATION",
                                skuId: t,
                                isGift: S
                            }), U.code !== a.ErrorCodes.CONFIRMATION_REQUIRED) throw o.default.dispatch({
                            type: "SKU_PURCHASE_FAIL",
                            applicationId: e,
                            skuId: t,
                            error: U
                        }), U;
                        if (!M.body.payment_id) throw (0, p.dispatchConfirmationError)("payment id cannot be null on redirected confirmations.");
                        return [2, (0, p.handleConfirmation)(M.body, l)];
                    case 10:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function M() {
        return U.apply(this, arguments)
    }

    function U() {
        return (U = I(function() {
            var e, t;
            return T(this, function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 2, , 3]), e = {
                            purchase_token: (0, _.getPurchaseToken)()
                        }, [4, r.HTTP.post({
                            url: m.Endpoints.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION,
                            body: e,
                            oldFormErrors: !0
                        })];
                    case 1:
                        return [2, O({}, n.sent().body)];
                    case 2:
                        throw h(t = n.sent(), i.BillingError) ? t : new i.BillingError(t);
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function w() {
        o.default.dispatch({
            type: "SKU_PURCHASE_CLEAR_ERROR"
        })
    }

    function k() {
        o.default.wait(function() {
            return o.default.dispatch({
                type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP"
            })
        })
    }

    function G(e) {
        o.default.dispatch({
            type: "SKU_PURCHASE_UPDATE_IS_GIFT",
            isGift: e
        })
    }
}