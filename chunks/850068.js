function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        deletePaymentSource: function() {
            return I
        },
        updatePaymentSource: function() {
            return C
        },
        validatePaymentSourceBillingAddress: function() {
            return R
        },
        createAdyenPaymentSourceToken: function() {
            return O
        },
        createPaymentSource: function() {
            return D
        },
        dispatchConfirmationError: function() {
            return P
        },
        createCardToken: function() {
            return L
        },
        confirmEPS: function() {
            return M
        },
        confirmIdeal: function() {
            return b
        },
        confirmPrzelewy24: function() {
            return U
        },
        confirmSofort: function() {
            return w
        },
        confirmCardPaymentSource: function() {
            return k
        },
        createPaymentRequestPaymentSource: function() {
            return V
        },
        createBraintreePaymentSource: function() {
            return G
        },
        createStripePaymentSource: function() {
            return F
        },
        createAdyenPrepaidPaymentSource: function() {
            return x
        },
        createAdyenVaultablePaymentSource: function() {
            return B
        },
        createStripePaymentSourceToken: function() {
            return H
        },
        createPaymentSourceToken: function() {
            return Y
        },
        fetchPaymentSources: function() {
            return j
        },
        fetchPayment: function() {
            return W
        },
        fetchPayments: function() {
            return K
        },
        fetchSubscriptions: function() {
            return z
        },
        getPerksRelevance: function() {
            return q
        },
        getNitroAffinity: function() {
            return X
        },
        fetchMostRecentSubscription: function() {
            return Q
        },
        createSubscription: function() {
            return Z
        },
        payInvoiceManually: function() {
            return J
        },
        handleConfirmation: function() {
            return $
        },
        redirectedPaymentSucceeded: function() {
            return en
        },
        paymentIntentSucceeded: function() {
            return ei
        },
        cancelSubscription: function() {
            return eo
        },
        deleteRenewalMutation: function() {
            return el
        },
        updateSubscription: function() {
            return eu
        },
        resubscribeToSubscription: function() {
            return ed
        },
        upgradeSubscription: function() {
            return ec
        },
        changeSubscriptionCurrency: function() {
            return ef
        },
        changePaymentSource: function() {
            return e_
        },
        clearUpdatePaymentSourceError: function() {
            return eh
        },
        clearRemovePaymentSourceError: function() {
            return eE
        },
        clearPaymentAuthenticationError: function() {
            return eg
        },
        voidPendingPayment: function() {
            return em
        },
        refundPayment: function() {
            return ep
        },
        popupBridgeState: function() {
            return eS
        },
        popupBridgeCallback: function() {
            return ev
        },
        fetchIpCountryCode: function() {
            return eT
        },
        fetchLocalizedPromo: function() {
            return eI
        },
        resetPaymentIntentId: function() {
            return eC
        },
        resetSubscriptionStore: function() {
            return eA
        },
        startBrowserCheckout: function() {
            return ey
        }
    }), n("70102");
    var i = n("41092"),
        s = n("627445"),
        r = n.n(s),
        a = n("872717"),
        o = n("913144"),
        l = n("448993"),
        u = n("736978"),
        d = n("865146"),
        c = n("766274"),
        f = n("160299"),
        _ = n("599110"),
        h = n("745279"),
        E = n("719923"),
        g = n("224400"),
        m = n("520713"),
        p = n("49111"),
        S = n("422487"),
        v = n("843455"),
        T = n("782340");
    async function I(e) {
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_REMOVE_START"
        });
        try {
            await a.default.delete({
                url: p.Endpoints.BILLING_PAYMENT_SOURCE(e),
                oldFormErrors: !0
            }), o.default.dispatch({
                type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS",
                id: e
            })
        } catch (t) {
            let e = new l.BillingError(t);
            throw o.default.dispatch({
                type: "BILLING_PAYMENT_SOURCE_REMOVE_FAIL",
                error: e
            }), e
        }
    }
    async function C(e, t) {
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_UPDATE_START"
        });
        try {
            let {
                billingAddress: {
                    line1: n,
                    line2: i,
                    postalCode: s,
                    ...r
                }
            } = t, l = await a.default.patch({
                url: p.Endpoints.BILLING_PAYMENT_SOURCE(e),
                body: {
                    billing_address: {
                        ...r,
                        line_1: n,
                        line_2: i,
                        postal_code: s
                    },
                    expires_month: t.expiresMonth,
                    expires_year: t.expiresYear,
                    default: t.isDefault
                }
            }), u = d.default.createFromServer(l.body);
            o.default.dispatch({
                type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS",
                paymentSource: u
            })
        } catch (t) {
            let e = (0, u.parseV8BillingAddressSkemaErrorToBillingError)(t);
            throw o.default.dispatch({
                type: "BILLING_PAYMENT_SOURCE_UPDATE_FAIL",
                error: e
            }), e
        }
    }
    async function A(e) {
        let t = await a.default.get({
                url: p.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
                oldFormErrors: !0
            }),
            {
                stripe_payment_intent_client_secret: n
            } = t.body;
        return n
    }
    async function y(e) {
        let t = await a.default.get({
                url: p.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
                oldFormErrors: !0
            }),
            {
                stripe_payment_intent_client_secret: n,
                stripe_payment_intent_payment_method_id: i
            } = t.body;
        return {
            clientSecret: n,
            paymentMethodId: i
        }
    }
    async function N() {
        let e = await a.default.post({
            url: p.Endpoints.BILLING_STRIPE_SETUP_INTENT_SECRET,
            oldFormErrors: !0
        });
        return e.body.client_secret
    }
    async function R(e) {
        try {
            let t = await a.default.post({
                url: p.Endpoints.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS,
                body: {
                    billing_address: {
                        name: e.name,
                        line_1: e.line1,
                        line_2: e.line2,
                        city: e.city,
                        state: e.state,
                        postal_code: e.postalCode,
                        country: e.country,
                        email: e.email
                    }
                }
            });
            return t.body.token
        } catch (t) {
            let e = (0, u.parseV8BillingAddressSkemaErrorToBillingError)(t);
            throw o.default.dispatch({
                type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                error: e
            }), e
        }
    }

    function O(e) {
        var t;
        return p.VAULTABLE_PAYMENT_SOURCES.has(e.type) ? null : JSON.stringify({
            type: null !== (t = v.ADYEN_PAYMENT_SOURCES.get(e.type)) && void 0 !== t ? t : null
        })
    }
    async function D(e, t, n, i) {
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_CREATE_START"
        });
        try {
            let s = await a.default.post({
                    url: p.Endpoints.BILLING_PAYMENT_SOURCES,
                    query: {
                        location: i.analyticsLocation
                    },
                    body: {
                        payment_gateway: e,
                        token: t,
                        billing_address: {
                            name: n.name,
                            line_1: n.line1,
                            line_2: n.line2,
                            city: n.city,
                            state: n.state,
                            postal_code: n.postalCode,
                            country: n.country,
                            email: n.email
                        },
                        billing_address_token: i.billingAddressToken,
                        bank: i.bank,
                        return_url: i.returnUrl
                    }
                }),
                r = d.default.createFromServer(s.body);
            return o.default.dispatch({
                type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS",
                paymentSource: r
            }), r
        } catch (t) {
            let e = (0, u.parseV8BillingAddressSkemaErrorToBillingError)(t);
            throw function(e, t) {
                var n, i;
                (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.adyen_redirect_url) && (e.fields.adyen_redirect_url = null == t ? void 0 : null === (i = t.body) || void 0 === i ? void 0 : i.adyen_redirect_url)
            }(e, t), e.code !== u.ErrorCodes.CONFIRMATION_REQUIRED && o.default.dispatch({
                type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                error: e
            }), e
        }
    }

    function P(e) {
        var t, n;
        let i, s, r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            a = T.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR;
        if (t = e, S.StripeErrorTypes.includes(t.type)) {
            ;
            let t = null != e.message ? "".concat(a, ": ").concat(e.message) : a,
                o = {
                    failure_message: t,
                    error_type: e.type,
                    failure_code: e.code,
                    failure_sub_code: e.decline_code,
                    payment_source_type: null === (n = e.payment_method) || void 0 === n ? void 0 : n.type
                };
            if (s = o, "card_error" === e.type) _.default.track(p.AnalyticEvents.PAYMENT_SOURCE_CREATION_FAILED, {
                ...o,
                stacktrace: Error().stack
            }), r = !1;
            i = new l.BillingError(t)
        } else s = {
            failure_message: (i = new l.BillingError("string" == typeof e ? a : e)).message,
            status_code: i.code
        }, 429 === i.code && (r = !1);
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
            error: i
        });
        let u = Error("string" == typeof e ? e : i.message);
        return r && (0, h.captureBillingException)(u, {
            extra: s
        }), u
    }
    async function L(e, t) {
        if (null == e || null == t) throw P("Stripe or elements not loaded");
        let n = t.getElement(i.CardNumberElement);
        if (null == n) throw P("Unable to load card elements from Stripe");
        let {
            token: s,
            error: r
        } = await e.createToken(n);
        if (null != r) throw P(r);
        if (null == s) throw P("token not available with successful stripe call");
        return s.id
    }
    async function M(e, t, n, i) {
        if (null == e) throw P("Stripe not loaded");
        if (null == t) throw P("Bank required for EPS");
        let {
            email: s,
            name: r,
            line1: a,
            line2: l,
            city: u,
            state: d,
            postalCode: c,
            country: f
        } = n;
        if (null == r) throw P("Name required for EPS");
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_CREATE_START"
        });
        let _ = await R(n),
            {
                paymentMethod: h,
                error: E
            } = await e.createPaymentMethod({
                type: "eps",
                eps: {
                    bank: t
                },
                billing_details: {
                    address: {
                        line1: a,
                        line2: l,
                        city: u,
                        state: d,
                        postal_code: c,
                        country: f
                    },
                    name: r,
                    email: s
                }
            });
        if (null != E) throw P(E);
        if (null == h) throw P("paymentMethod not available with successful stripe call");
        return D(p.PaymentGateways.STRIPE, h.id, n, {
            billingAddressToken: _,
            analyticsLocation: i,
            bank: t
        })
    }
    async function b(e, t, n, i) {
        if (null == e) throw P("Stripe not loaded");
        if (null == t) throw P("Bank required for iDEAL");
        let {
            email: s,
            name: r,
            line1: a,
            line2: l,
            city: u,
            state: d,
            postalCode: c,
            country: f
        } = n;
        if (null == r) throw P("Name required for iDEAL");
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_CREATE_START"
        });
        let _ = await R(n),
            {
                paymentMethod: h,
                error: E
            } = await e.createPaymentMethod({
                type: "ideal",
                ideal: {
                    bank: t
                },
                billing_details: {
                    address: {
                        line1: a,
                        line2: l,
                        city: u,
                        state: d,
                        postal_code: c,
                        country: f
                    },
                    name: r,
                    email: s
                }
            });
        if (null != E) throw P(E);
        if (null == h) throw P("paymentMethod not available with successful stripe call");
        return D(p.PaymentGateways.STRIPE, h.id, n, {
            billingAddressToken: _,
            analyticsLocation: i,
            bank: t
        })
    }
    async function U(e, t, n, i) {
        if (null == e) throw P("Stripe not loaded");
        let {
            email: s,
            name: r,
            line1: a,
            line2: l,
            city: u,
            state: d,
            postalCode: c,
            country: f
        } = n;
        if (null == s) throw P("Email required for Przelewy24");
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_CREATE_START"
        });
        let _ = await R(n),
            h = t.p24Bank,
            {
                paymentMethod: E,
                error: g
            } = await e.createPaymentMethod({
                type: "p24",
                p24: {
                    bank: h
                },
                billing_details: {
                    address: {
                        line1: a,
                        line2: l,
                        city: u,
                        state: d,
                        postal_code: c,
                        country: f
                    },
                    name: r,
                    email: s
                }
            });
        if (null != g) throw P(g);
        if (null == E) throw P("paymentMethod not available with successful stripe call");
        return D(p.PaymentGateways.STRIPE, E.id, n, {
            billingAddressToken: _,
            analyticsLocation: i,
            bank: h
        })
    }
    async function w(e, t, n) {
        if (null == e) throw P("Stripe not loaded");
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_CREATE_START"
        });
        let i = await R(t),
            {
                email: s,
                name: r,
                line1: a,
                line2: l,
                city: u,
                state: d,
                postalCode: c,
                country: f
            } = t,
            {
                paymentMethod: _,
                error: h
            } = await e.createPaymentMethod({
                type: "sofort",
                sofort: {
                    country: f
                },
                billing_details: {
                    address: {
                        line1: a,
                        line2: l,
                        city: u,
                        state: d,
                        postal_code: c,
                        country: f
                    },
                    name: r,
                    email: s
                }
            });
        if (null != h) throw P(h);
        if (null == _) throw P("paymentMethod not available with successful stripe call");
        return D(p.PaymentGateways.STRIPE, _.id, t, {
            billingAddressToken: i,
            analyticsLocation: n
        })
    }
    async function k(e, t, n, i) {
        if (null == e || null == t) throw P("Stripe or token not loaded");
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_CREATE_START"
        });
        let s = null;
        try {
            s = await N()
        } catch (e) {
            throw P(e)
        }
        let {
            name: a,
            line1: l,
            line2: u,
            city: d,
            state: c,
            postalCode: f,
            country: _
        } = n, h = await R(n), {
            setupIntent: E,
            error: g
        } = await e.confirmCardSetup(s, {
            payment_method: {
                card: {
                    token: t
                },
                billing_details: {
                    address: {
                        line1: l,
                        line2: u,
                        city: d,
                        state: c,
                        postal_code: f,
                        country: _
                    },
                    name: a
                }
            }
        });
        if (null != g) throw P(g);
        if ((null == E ? void 0 : E.payment_method) == null) throw P("setupIntent.payment_method not available with successful stripe call");
        return r("string" == typeof E.payment_method, "setupIntent.payment_method expanded not supported"), D(p.PaymentGateways.STRIPE, E.payment_method, n, {
            billingAddressToken: h,
            analyticsLocation: i
        })
    }

    function V(e, t, n) {
        let {
            token: i,
            billingAddressInfo: s
        } = m.parseStripePaymentMethod(e);
        return D(p.PaymentGateways.STRIPE, i, null != t ? t : s, {
            analyticsLocation: n
        })
    }

    function G(e, t, n) {
        return D(p.PaymentGateways.BRAINTREE, e, t, {
            analyticsLocation: n
        })
    }
    async function F(e, t, n, i) {
        if (null == e) throw P("Stripe not loaded");
        let s = await R(t),
            {
                name: a,
                line1: o,
                line2: l,
                city: u,
                state: d,
                postalCode: c,
                country: f
            } = t,
            _ = v.STRIPE_PAYMENT_SOURCES.get(n);
        r(null != _, "unsupported payment method type");
        let {
            paymentMethod: h,
            error: E
        } = await e.createPaymentMethod({
            type: _,
            billing_details: {
                address: {
                    line1: o,
                    line2: l,
                    city: u,
                    state: d,
                    postal_code: c,
                    country: f
                },
                name: a
            }
        });
        if (null != E) throw P(E);
        if (null == h) throw P("stripePaymentMethod not available with successful stripe call");
        return D(p.PaymentGateways.STRIPE, h.id, t, {
            billingAddressToken: s,
            analyticsLocation: i
        })
    }
    async function x(e, t, n) {
        let i = await R(e),
            s = {
                type: v.ADYEN_PAYMENT_SOURCES.get(t)
            };
        return D(p.PaymentGateways.ADYEN, JSON.stringify(s), e, {
            billingAddressToken: i,
            analyticsLocation: n
        })
    }
    async function B(e, t, n, i) {
        var s;
        let r = await R(e),
            d = {
                type: v.ADYEN_PAYMENT_SOURCES.get(t),
                ...null !== (s = null == i ? void 0 : i.paymentMethod) && void 0 !== s ? s : {}
            },
            c = await eS(t),
            f = a.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, null != c ? c : "", "success");
        try {
            let t = await D(p.PaymentGateways.ADYEN, JSON.stringify(d), e, {
                billingAddressToken: r,
                analyticsLocation: n,
                returnUrl: f
            });
            return {
                paymentSource: t,
                redirectConfirmation: !1
            }
        } catch (t) {
            if (t.code !== u.ErrorCodes.CONFIRMATION_REQUIRED) throw o.default.dispatch({
                type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                error: new l.BillingError("Unable to create payment source token: code: ".concat(null == t ? void 0 : t.code, " message: ").concat(null == t ? void 0 : t.message), l.BillingError.ErrorCodes.UNKNOWN)
            }), t;
            let e = t.fields.adyen_redirect_url;
            if (null == e) throw P("redirect url cannot be null on a redirect for adyen.");
            return es(e), {
                redirectConfirmation: !0
            }
        }
    }
    async function H(e) {
        if (p.VAULTABLE_PAYMENT_SOURCES.has(e.type)) return null;
        let t = await m.getStripe();
        if (null == t) throw new l.BillingError("Stripe not loaded", l.BillingError.ErrorCodes.UNKNOWN);
        let {
            email: n,
            name: i,
            line1: s,
            line2: a,
            city: o,
            state: u,
            postalCode: d,
            country: c
        } = e.billingAddress, f = {
            billing_details: {
                address: {
                    line1: s,
                    line2: a,
                    city: o,
                    state: u,
                    postal_code: d,
                    country: c
                },
                name: i
            }
        };
        switch (e.type) {
            case v.PaymentSourceTypes.GIROPAY:
                f.type = "giropay";
                break;
            case v.PaymentSourceTypes.SOFORT:
                f.type = "sofort", f.sofort = {
                    country: null != c ? c : ""
                }, f.billing_details.email = n;
                break;
            case v.PaymentSourceTypes.BANCONTACT:
                f.type = "bancontact";
                break;
            case v.PaymentSourceTypes.IDEAL:
                if (null == e.bank) throw new l.BillingError("iDEAL missing bank information", l.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                f.type = "ideal", f.ideal = {
                    bank: e.bank
                };
                break;
            case v.PaymentSourceTypes.PRZELEWY24:
                if (null == e.bank) throw new l.BillingError("p24 missing bank information", l.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                f.type = "p24", f.p24 = {
                    bank: e.bank
                }, f.billing_details.email = e.email;
                break;
            case v.PaymentSourceTypes.EPS:
                if (null == e.bank) throw new l.BillingError("EPS missing bank information", l.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                f.type = "eps", f.eps = {
                    bank: e.bank
                }
        }
        r(null != f.type, "unsupported payment method type");
        let {
            paymentMethod: _,
            error: h
        } = await t.createPaymentMethod(f);
        if (null != h || null == _) throw new l.BillingError("Unable to create payment source token: code: ".concat(null == h ? void 0 : h.code, " message: ").concat(null == h ? void 0 : h.message), l.BillingError.ErrorCodes.UNKNOWN);
        return _.id
    }

    function Y(e) {
        return p.VAULTABLE_PAYMENT_SOURCES.has(e.type) ? null : v.ADYEN_PAYMENT_SOURCES.has(e.type) ? O(e) : H(e)
    }
    async function j() {
        try {
            let e = a.default.get({
                url: p.Endpoints.BILLING_PAYMENT_SOURCES,
                oldFormErrors: !0
            });
            o.default.wait(() => o.default.dispatch({
                type: "BILLING_PAYMENT_SOURCES_FETCH_START",
                request: e
            }));
            let t = await e;
            return o.default.dispatch({
                type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS",
                paymentSources: t.body
            }), t
        } catch (e) {
            throw o.default.dispatch({
                type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL"
            }), e
        }
    }
    async function W(e) {
        let t = await a.default.get({
            url: p.Endpoints.BILLING_PAYMENT(e)
        });
        return o.default.dispatch({
            type: "BILLING_PAYMENT_FETCH_SUCCESS",
            payment: t.body
        }), t
    }
    async function K() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
            t = arguments.length > 1 ? arguments[1] : void 0;
        o.default.dispatch({
            type: "BILLING_PAYMENTS_FETCH_START"
        });
        try {
            let n = await a.default.get({
                url: p.Endpoints.BILLING_PAYMENTS,
                query: {
                    limit: e,
                    before: t
                },
                oldFormErrors: !0
            });
            return o.default.dispatch({
                type: "BILLING_PAYMENTS_FETCH_SUCCESS",
                payments: n.body
            }), n
        } catch (e) {
            throw o.default.dispatch({
                type: "BILLING_PAYMENTS_FETCH_FAIL"
            }), e
        }
    }
    async function z() {
        o.default.wait(() => {
            o.default.dispatch({
                type: "BILLING_SUBSCRIPTION_FETCH_START"
            })
        });
        try {
            let e = await a.default.get({
                url: p.Endpoints.BILLING_SUBSCRIPTIONS,
                oldFormErrors: !0
            });
            if (null == e.body) throw new l.BillingError("response body is null, response: ".concat(JSON.stringify(e)), e.status);
            return o.default.dispatch({
                type: "BILLING_SUBSCRIPTION_FETCH_SUCCESS",
                subscriptions: e.body
            }), e
        } catch (e) {
            throw o.default.dispatch({
                type: "BILLING_SUBSCRIPTION_FETCH_FAIL"
            }), e
        }
    }
    async function q() {
        o.default.wait(() => {
            o.default.dispatch({
                type: "BILLING_PERKS_RELEVANCE_FETCH_START"
            })
        });
        try {
            let e = await a.default.get(p.Endpoints.BILLING_PERKS_RELEVANCE);
            o.default.dispatch({
                type: "BILLING_PERKS_RELEVANCE_FETCH_SUCCESS",
                res: e.body
            })
        } catch (e) {
            o.default.dispatch({
                type: "BILLING_PERKS_RELEVANCE_FETCH_FAIL"
            })
        }
    }
    async function X() {
        try {
            let e = await a.default.get(p.Endpoints.BILLING_NITRO_AFFINITY);
            o.default.dispatch({
                type: "BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED",
                res: e.body.map(e => new c.default(e))
            })
        } finally {
            o.default.dispatch({
                type: "BILLING_NITRO_AFFINITY_FETCHED"
            })
        }
    }
    async function Q() {
        o.default.wait(() => {
            o.default.dispatch({
                type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START"
            })
        });
        try {
            let e = await a.default.get({
                url: p.Endpoints.BILLING_SUBSCRIPTIONS,
                query: {
                    include_inactive: !0,
                    limit: 2,
                    exclude_unpaid_statuses: !0,
                    subscription_type: v.SubscriptionTypes.PREMIUM
                },
                oldFormErrors: !0
            });
            return e.ok ? (o.default.dispatch({
                type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS",
                subscription: e.body.length > 0 ? e.body[0] : null
            }), o.default.dispatch({
                type: "BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS",
                subscription: e.body.length > 1 ? e.body[1] : null
            })) : o.default.dispatch({
                type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL"
            }), e
        } catch (e) {
            o.default.dispatch({
                type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL"
            })
        }
    }
    async function Z(e) {
        let {
            items: t,
            paymentSource: n,
            trialId: i,
            code: s,
            currency: r,
            metadata: d,
            referralCode: c,
            loadId: f
        } = e;
        o.default.dispatch({
            type: "BILLING_SUBSCRIPTION_UPDATE_START"
        }), t = (0, E.coerceExistingItemsToNewItemInterval)(t);
        let _ = null;
        if (null != n && v.ADYEN_PAYMENT_SOURCES.has(n.type)) {
            let e = await eS(n.type);
            _ = a.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success")
        }
        try {
            let e = await a.default.post({
                url: p.Endpoints.BILLING_SUBSCRIPTIONS,
                body: {
                    items: t.map(e => {
                        let {
                            planId: t,
                            quantity: n
                        } = e;
                        return {
                            plan_id: t,
                            quantity: n
                        }
                    }),
                    payment_source_id: null != n ? n.id : null,
                    payment_source_token: null != n ? await Y(n) : null,
                    trial_id: i,
                    return_url: _,
                    code: s,
                    currency: null != n ? r : v.CurrencyCodes.USD,
                    metadata: d,
                    gateway_checkout_context: await (0, h.createGatewayCheckoutContext)(n),
                    purchase_token: (0, g.getPurchaseToken)(),
                    referral_code: c,
                    load_id: f
                },
                oldFormErrors: !0
            });
            return o.default.dispatch({
                type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                subscription: e.body
            }), {
                subscription: e.body,
                redirectConfirmation: !1
            }
        } catch (t) {
            let e = t instanceof l.BillingError ? t : new l.BillingError(t);
            if (e.code !== u.ErrorCodes.CONFIRMATION_REQUIRED) throw o.default.dispatch({
                type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                error: e
            }), e;
            if (!t.body.payment_id) throw P("payment id cannot be null on redirected confirmations.");
            return $(t.body, n)
        }
    }
    async function J(e, t, n, i) {
        let s = null;
        if (null != n && v.PREPAID_PAYMENT_SOURCES.has(n.type)) {
            let e = await eS(n.type);
            s = a.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success")
        }
        try {
            let r = await a.default.post({
                url: p.Endpoints.BILLING_INVOICE_MANUAL_PAYMENT(e.id, t),
                body: {
                    payment_source_id: null != n ? n.id : null,
                    payment_source_token: null != n ? await Y(n) : null,
                    return_url: s,
                    currency: i
                },
                oldFormErrors: !0
            });
            return o.default.dispatch({
                type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                subscription: r.body
            }), {
                subscription: r.body,
                redirectConfirmation: p.REDIRECTED_PAYMENT_SOURCES.has(n.type)
            }
        } catch (t) {
            let e = t instanceof l.BillingError ? t : new l.BillingError(t);
            if (e.code !== u.ErrorCodes.CONFIRMATION_REQUIRED) throw o.default.dispatch({
                type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                error: e
            }), e;
            if (!t.body.payment_id) throw P("payment id cannot be null on redirected confirmations.");
            return $(t.body, n)
        }
    }

    function $(e, t) {
        return null != t && v.ADYEN_PAYMENT_SOURCES.has(t.type) ? ee(e.adyen_redirect_url, t) : et(e.payment_id, t)
    }
    async function ee(e, t) {
        if (null == e) throw P("redirect url cannot be null on a redirect for adyen.");
        if (null == t) throw P("Payment source cannot be null on a redirect.");
        return p.REDIRECTED_PAYMENT_SOURCES.has(t.type) ? (es(e), {
            redirectConfirmation: !0,
            redirectURL: e
        }) : {
            redirectConfirmation: !1,
            redirectURL: e
        }
    }
    async function et(e, t) {
        let n = await m.getStripe();
        if (null == t) throw P("Payment source cannot be null on a redirect.");
        let {
            clientSecret: i,
            paymentMethodId: s
        } = await y(e);
        if (null == n) throw P("Stripe cannot be null on a redirect.");
        if (p.REDIRECTED_PAYMENT_SOURCES.has(t.type)) {
            let e = await eS(t.type);
            return es(await ea({
                stripe: n,
                paymentSource: t,
                clientSecret: i,
                state: e
            })), {
                redirectConfirmation: !0
            }
        }
        return await er({
            stripe: n,
            clientSecret: i,
            paymentMethodId: s,
            paymentSource: t
        }), {
            redirectConfirmation: !1
        }
    }
    async function en(e) {
        var t;
        let n = await W(e);
        if ((null == n ? void 0 : n.body) == null) throw P("could not fetch payment");
        let i = d.default.createFromServer(n.body.payment_source);
        if (!p.REDIRECTED_PAYMENT_SOURCES.has(i.type)) throw P("unsupported redirect payment source");
        if ((null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.status) === v.PaymentStatusTypes.FAILED) throw P("payment failed");
        return i.paymentGateway !== p.PaymentGateways.STRIPE || ei(e)
    }
    async function ei(e) {
        let t = await m.getStripe();
        if (null == t) throw P("Stripe has not loaded.");
        if (null == e) throw P("payment intent id cannot be null.");
        let n = await A(e),
            {
                paymentIntent: i,
                error: s
            } = await t.retrievePaymentIntent(n);
        if (null != s) throw P(s);
        if (null == i) throw P("paymentIntent not available with successful stripe call");
        if (null != i.last_payment_error) throw P("unable to retrieve payment intent ".concat(i.last_payment_error));
        return !0
    }

    function es(e) {
        window.open(e)
    }
    async function er(e) {
        let t, {
                stripe: n,
                paymentSource: i,
                paymentMethodId: s,
                clientSecret: r
            } = e,
            a = {};
        if (i.type === v.PaymentSourceTypes.SEPA_DEBIT) {
            if (null == s) throw P("On a sepa payment payment method id cannot be null");
            a.payment_method = s, t = n.confirmSepaDebitPayment
        } else throw P("Unsupported redirected payment source type.");
        let {
            paymentIntent: o,
            error: l
        } = await t(r, a);
        if (null != l) throw P(l);
        if (null == o) throw P("paymentIntent not available with successful stripe call")
    }
    async function ea(e) {
        var t, n;
        let i, {
                stripe: s,
                paymentSource: r,
                clientSecret: o,
                state: l
            } = e,
            u = {};
        switch (r.type) {
            case v.PaymentSourceTypes.GIROPAY:
                u = {
                    billing_details: {
                        name: r.billingAddress.name
                    }
                }, i = s.confirmGiropayPayment;
                break;
            case v.PaymentSourceTypes.BANCONTACT:
                u = {
                    billing_details: {
                        name: r.billingAddress.name,
                        email: r.email
                    }
                }, i = s.confirmBancontactPayment;
                break;
            case v.PaymentSourceTypes.SOFORT:
                u = {
                    sofort: {
                        country: r.billingAddress.country
                    },
                    billing_details: {
                        name: r.billingAddress.name,
                        email: r.email
                    }
                }, i = s.confirmSofortPayment;
                break;
            case v.PaymentSourceTypes.PRZELEWY24:
                if (null == r.bank) throw P("PaymentSource (".concat(r.id, ") missing bank info for p24."));
                u = {
                    p24: {
                        bank: r.bank
                    },
                    billing_details: {
                        name: r.billingAddress.name,
                        email: r.email
                    }
                }, i = s.confirmP24Payment;
                break;
            case v.PaymentSourceTypes.EPS:
                if (null == r.bank) throw P("PaymentSource (".concat(r.id, ") missing bank info for EPS."));
                u = {
                    eps: {
                        bank: r.bank
                    },
                    billing_details: {
                        name: r.billingAddress.name
                    }
                }, i = s.confirmEpsPayment;
                break;
            case v.PaymentSourceTypes.IDEAL:
                if (null == r.bank) throw P("PaymentSource (".concat(r.id, ") missing bank info for iDEAL."));
                u = {
                    ideal: {
                        bank: r.bank
                    },
                    billing_details: {
                        name: r.billingAddress.name
                    }
                }, i = s.confirmIdealPayment;
                break;
            default:
                throw P("Unsupported redirected payment source type.")
        }
        let {
            paymentIntent: d,
            error: c
        } = await i(o, {
            payment_method: u,
            return_url: a.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(r.type, null != l ? l : "", "success")
        }, {
            handleActions: !1
        });
        if (null != c) throw P(c);
        if (null == d) throw P("paymentIntent not available with successful api call");
        if ((null === (n = d.next_action) || void 0 === n ? void 0 : null === (t = n.redirect_to_url) || void 0 === t ? void 0 : t.url) == null) throw P("confirm payment did not return a redirect url");
        return d.next_action.redirect_to_url.url
    }
    async function eo(e, t, n) {
        o.default.dispatch({
            type: "BILLING_SUBSCRIPTION_CANCEL_START"
        });
        try {
            let i = await a.default.delete({
                url: p.Endpoints.BILLING_SUBSCRIPTION(e),
                query: {
                    location: n,
                    location_stack: t
                },
                oldFormErrors: !0
            });
            return o.default.dispatch({
                type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS"
            }), i
        } catch (t) {
            let e = new l.BillingError(t);
            throw o.default.dispatch({
                type: "BILLING_SUBSCRIPTION_CANCEL_FAIL",
                error: e
            }), e
        }
    }

    function el(e, t) {
        return eu(e, {
            items: e.items
        }, t)
    }
    async function eu(e, t, n, i, s) {
        if (null != t.paymentSource && null == t.currency) throw Error("Currency must be specified with payment source");
        o.default.dispatch({
            type: "BILLING_SUBSCRIPTION_UPDATE_START"
        });
        try {
            var r;
            let l = {
                status: t.status,
                payment_source_id: null === (r = t.paymentSource) || void 0 === r ? void 0 : r.id,
                payment_source_token: null != t.paymentSource ? await Y(t.paymentSource) : null,
                currency: t.currency,
                gateway_checkout_context: await (0, h.createGatewayCheckoutContext)(t.paymentSource),
                load_id: s
            };
            if (null != t.paymentSource && v.ADYEN_PAYMENT_SOURCES.has(t.paymentSource.type)) {
                let e = await eS(t.paymentSource.type);
                l.return_url = a.default.getAPIBaseURL() + p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t.paymentSource.type, null != e ? e : "", "success")
            }
            null != t.items && (l.items = (0, E.coerceExistingItemsToNewItemInterval)(t.items).map(e => {
                let {
                    planId: t,
                    ...n
                } = e;
                return {
                    ...n,
                    plan_id: t
                }
            }));
            let u = await a.default.patch({
                url: p.Endpoints.BILLING_SUBSCRIPTION(e.id),
                query: {
                    location: i,
                    location_stack: n
                },
                body: l,
                oldFormErrors: !0
            });
            return o.default.dispatch({
                type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                subscription: u.body
            }), {
                subscription: u.body,
                redirectConfirmation: !1
            }
        } catch (n) {
            let e = n instanceof l.BillingError ? n : new l.BillingError(n);
            if (e.code !== u.ErrorCodes.CONFIRMATION_REQUIRED) throw o.default.dispatch({
                type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                error: e
            }), e;
            if (!n.body.payment_id) throw P("payment id cannot be null on redirected confirmations.");
            return $(n.body, t.paymentSource)
        }
    }

    function ed(e, t, n, i, s) {
        return eu(e, {
            status: p.SubscriptionStatusTypes.ACTIVE,
            paymentSource: n,
            currency: i
        }, t, s)
    }

    function ec(e, t, n, i) {
        let s = (0, E.getItemsWithUpsertedPremiumPlanId)(e, t);
        return eu(e, {
            status: p.SubscriptionStatusTypes.ACTIVE,
            items: s
        }, n, i)
    }

    function ef(e, t, n, i) {
        return eu(e, {
            currency: t
        }, n, i)
    }

    function e_(e, t, n, i, s) {
        return eu(e, {
            paymentSource: t,
            currency: n
        }, i, s)
    }

    function eh() {
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR"
        })
    }

    function eE() {
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR"
        })
    }

    function eg() {
        o.default.dispatch({
            type: "PAYMENT_AUTHENTICATION_CLEAR_ERROR"
        })
    }
    async function em(e) {
        await a.default.post({
            url: p.Endpoints.BILLING_PAYMENTS_VOID(e),
            oldFormErrors: !0
        })
    }
    async function ep(e, t) {
        await a.default.post({
            url: p.Endpoints.BILLING_PAYMENTS_REFUND(e),
            body: {
                reason: t
            }
        })
    }
    async function eS(e) {
        let {
            body: {
                state: t
            }
        } = await a.default.post({
            url: p.Endpoints.BILLING_POPUP_BRIDGE(e),
            oldFormErrors: !0
        });
        return o.default.dispatch({
            type: "BILLING_POPUP_BRIDGE_STATE_UPDATE",
            state: t,
            paymentSourceType: e
        }), t
    }

    function ev(e) {
        let {
            paymentSourceType: t,
            state: n,
            path: i,
            query: s,
            insecure: r
        } = e;
        return o.default.dispatch({
            type: "BILLING_POPUP_BRIDGE_CALLBACK_START",
            paymentSourceType: t
        }), a.default.post({
            url: p.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK(t),
            body: {
                state: n,
                path: i,
                query: s,
                insecure: r
            },
            oldFormErrors: !0
        }).then(e => (o.default.dispatch({
            type: "BILLING_POPUP_BRIDGE_CALLBACK_END",
            paymentSourceType: t
        }), e))
    }
    async function eT() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!e && null != f.default.ipCountryCodeRequest) return f.default.ipCountryCodeRequest;
        try {
            let e = a.default.get({
                url: p.Endpoints.BILLING_COUNTRY_CODE
            });
            o.default.wait(() => o.default.dispatch({
                type: "BILLING_IP_COUNTRY_CODE_FETCH_START",
                request: e
            }));
            let t = await e,
                n = t.body.country_code;
            return o.default.dispatch({
                type: "BILLING_SET_IP_COUNTRY_CODE",
                countryCode: n
            }), t
        } catch (e) {
            return o.default.dispatch({
                type: "BILLING_IP_COUNTRY_CODE_FAILURE"
            }), e
        }
    }
    async function eI() {
        try {
            let e = await a.default.get({
                url: p.Endpoints.BILLING_LOCALIZED_PROMO
            });
            if (null != e.body.localized_pricing_promo) {
                let t = e.body.localized_pricing_promo;
                o.default.dispatch({
                    type: "BILLING_SET_LOCALIZED_PRICING_PROMO",
                    localizedPricingPromo: t
                })
            }
            return e
        } catch (e) {
            return o.default.dispatch({
                type: "BILLING_LOCALIZED_PRICING_PROMO_FAILURE"
            }), e
        }
    }

    function eC() {
        o.default.dispatch({
            type: "RESET_PAYMENT_ID"
        })
    }

    function eA() {
        o.default.dispatch({
            type: "BILLING_SUBSCRIPTION_RESET"
        })
    }

    function ey(e) {
        o.default.dispatch({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED",
            loadId: e
        })
    }
}