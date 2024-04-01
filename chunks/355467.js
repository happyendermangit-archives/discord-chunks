function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        cancelSubscription: function() {
            return eo
        },
        changePaymentSource: function() {
            return eE
        },
        changeSubscriptionCurrency: function() {
            return ec
        },
        clearPaymentAuthenticationError: function() {
            return eS
        },
        clearRemovePaymentSourceError: function() {
            return ef
        },
        clearUpdatePaymentSourceError: function() {
            return eT
        },
        confirmCardPaymentSource: function() {
            return w
        },
        confirmEPS: function() {
            return P
        },
        confirmIdeal: function() {
            return U
        },
        confirmPrzelewy24: function() {
            return b
        },
        confirmSofort: function() {
            return G
        },
        createAdyenPaymentSourceToken: function() {
            return D
        },
        createAdyenPrepaidPaymentSource: function() {
            return F
        },
        createAdyenVaultablePaymentSource: function() {
            return x
        },
        createBraintreePaymentSource: function() {
            return k
        },
        createCardToken: function() {
            return y
        },
        createPaymentRequestPaymentSource: function() {
            return B
        },
        createPaymentSource: function() {
            return v
        },
        createPaymentSourceToken: function() {
            return Y
        },
        createStripePaymentSource: function() {
            return V
        },
        createStripePaymentSourceToken: function() {
            return H
        },
        createSubscription: function() {
            return J
        },
        deletePaymentSource: function() {
            return O
        },
        deleteRenewalMutation: function() {
            return el
        },
        dispatchConfirmationError: function() {
            return M
        },
        fetchIpCountryCode: function() {
            return eO
        },
        fetchLocalizedPromo: function() {
            return ep
        },
        fetchMostRecentSubscription: function() {
            return q
        },
        fetchPayment: function() {
            return W
        },
        fetchPaymentSources: function() {
            return j
        },
        fetchPayments: function() {
            return K
        },
        fetchSubscriptions: function() {
            return z
        },
        getNitroAffinity: function() {
            return Q
        },
        getPerksRelevance: function() {
            return X
        },
        handleConfirmation: function() {
            return $
        },
        pausePendingSubscription: function() {
            return eI
        },
        payInvoiceManually: function() {
            return Z
        },
        paymentIntentSucceeded: function() {
            return ei
        },
        popupBridgeCallback: function() {
            return eN
        },
        popupBridgeState: function() {
            return em
        },
        redirectedPaymentSucceeded: function() {
            return en
        },
        refundPayment: function() {
            return eA
        },
        resetPaymentIntentId: function() {
            return eR
        },
        resetSubscriptionStore: function() {
            return eC
        },
        resubscribeToSubscription: function() {
            return ed
        },
        startBrowserCheckout: function() {
            return eg
        },
        updatePaymentSource: function() {
            return p
        },
        updateSubscription: function() {
            return eu
        },
        upgradeSubscription: function() {
            return e_
        },
        validatePaymentSourceBillingAddress: function() {
            return L
        },
        voidPendingPayment: function() {
            return eh
        }
    }), n("411104");
    var i = n("452079"),
        r = n("512722"),
        s = n.n(r),
        a = n("544891"),
        o = n("570140"),
        l = n("881052"),
        u = n("128069"),
        d = n("46141"),
        _ = n("598077"),
        c = n("351402"),
        E = n("626135"),
        I = n("122289"),
        T = n("74538"),
        f = n("936101"),
        S = n("622999"),
        h = n("981631"),
        A = n("763596"),
        m = n("231338"),
        N = n("689938");
    async function O(e) {
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_REMOVE_START"
        });
        try {
            await a.HTTP.del({
                url: h.Endpoints.BILLING_PAYMENT_SOURCE(e),
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
    async function p(e, t) {
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_UPDATE_START"
        });
        try {
            let {
                billingAddress: {
                    line1: n,
                    line2: i,
                    postalCode: r,
                    ...s
                }
            } = t, l = await a.HTTP.patch({
                url: h.Endpoints.BILLING_PAYMENT_SOURCE(e),
                body: {
                    billing_address: {
                        ...s,
                        line_1: n,
                        line_2: i,
                        postal_code: r
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
    async function R(e) {
        let {
            stripe_payment_intent_client_secret: t
        } = (await a.HTTP.get({
            url: h.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
            oldFormErrors: !0
        })).body;
        return t
    }
    async function C(e) {
        let {
            stripe_payment_intent_client_secret: t,
            stripe_payment_intent_payment_method_id: n
        } = (await a.HTTP.get({
            url: h.Endpoints.BILLING_STRIPE_PAYMENT_INTENTS(e),
            oldFormErrors: !0
        })).body;
        return {
            clientSecret: t,
            paymentMethodId: n
        }
    }
    async function g() {
        return (await a.HTTP.post({
            url: h.Endpoints.BILLING_STRIPE_SETUP_INTENT_SECRET,
            oldFormErrors: !0
        })).body.client_secret
    }
    async function L(e) {
        try {
            return (await a.HTTP.post({
                url: h.Endpoints.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS,
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
            })).body.token
        } catch (t) {
            let e = (0, u.parseV8BillingAddressSkemaErrorToBillingError)(t);
            throw o.default.dispatch({
                type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                error: e
            }), e
        }
    }

    function D(e) {
        var t;
        return h.VAULTABLE_PAYMENT_SOURCES.has(e.type) ? null : JSON.stringify({
            type: null !== (t = m.ADYEN_PAYMENT_SOURCES.get(e.type)) && void 0 !== t ? t : null
        })
    }
    async function v(e, t, n, i) {
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_CREATE_START"
        });
        try {
            let r = await a.HTTP.post({
                    url: h.Endpoints.BILLING_PAYMENT_SOURCES,
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
                s = d.default.createFromServer(r.body);
            return o.default.dispatch({
                type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS",
                paymentSource: s
            }), s
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

    function M(e) {
        var t, n;
        let i, r, s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            a = N.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR;
        if (t = e, A.StripeErrorTypes.includes(t.type)) {
            ;
            let t = null != e.message ? "".concat(a, ": ").concat(e.message) : a,
                o = {
                    failure_message: t,
                    error_type: e.type,
                    failure_code: e.code,
                    failure_sub_code: e.decline_code,
                    payment_source_type: null === (n = e.payment_method) || void 0 === n ? void 0 : n.type
                };
            if (r = o, "card_error" === e.type) E.default.track(h.AnalyticEvents.PAYMENT_SOURCE_CREATION_FAILED, {
                ...o,
                stacktrace: Error().stack
            }), s = !1;
            i = new l.BillingError(t)
        } else r = {
            failure_message: (i = new l.BillingError("string" == typeof e ? a : e)).message,
            status_code: i.code
        }, 429 === i.code && (s = !1);
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
            error: i
        });
        let u = Error("string" == typeof e ? e : i.message);
        return s && (0, I.captureBillingException)(u, {
            extra: r
        }), u
    }
    async function y(e, t) {
        if (null == e || null == t) throw M("Stripe or elements not loaded");
        let n = t.getElement(i.CardNumberElement);
        if (null == n) throw M("Unable to load card elements from Stripe");
        let {
            token: r,
            error: s
        } = await e.createToken(n);
        if (null != s) throw M(s);
        if (null == r) throw M("token not available with successful stripe call");
        return r.id
    }
    async function P(e, t, n, i) {
        if (null == e) throw M("Stripe not loaded");
        if (null == t) throw M("Bank required for EPS");
        let {
            email: r,
            name: s,
            line1: a,
            line2: l,
            city: u,
            state: d,
            postalCode: _,
            country: c
        } = n;
        if (null == s) throw M("Name required for EPS");
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_CREATE_START"
        });
        let E = await L(n),
            {
                paymentMethod: I,
                error: T
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
                        postal_code: _,
                        country: c
                    },
                    name: s,
                    email: r
                }
            });
        if (null != T) throw M(T);
        if (null == I) throw M("paymentMethod not available with successful stripe call");
        return v(h.PaymentGateways.STRIPE, I.id, n, {
            billingAddressToken: E,
            analyticsLocation: i,
            bank: t
        })
    }
    async function U(e, t, n, i) {
        if (null == e) throw M("Stripe not loaded");
        if (null == t) throw M("Bank required for iDEAL");
        let {
            email: r,
            name: s,
            line1: a,
            line2: l,
            city: u,
            state: d,
            postalCode: _,
            country: c
        } = n;
        if (null == s) throw M("Name required for iDEAL");
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_CREATE_START"
        });
        let E = await L(n),
            {
                paymentMethod: I,
                error: T
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
                        postal_code: _,
                        country: c
                    },
                    name: s,
                    email: r
                }
            });
        if (null != T) throw M(T);
        if (null == I) throw M("paymentMethod not available with successful stripe call");
        return v(h.PaymentGateways.STRIPE, I.id, n, {
            billingAddressToken: E,
            analyticsLocation: i,
            bank: t
        })
    }
    async function b(e, t, n, i) {
        if (null == e) throw M("Stripe not loaded");
        let {
            email: r,
            name: s,
            line1: a,
            line2: l,
            city: u,
            state: d,
            postalCode: _,
            country: c
        } = n;
        if (null == r) throw M("Email required for Przelewy24");
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_CREATE_START"
        });
        let E = await L(n),
            I = t.p24Bank,
            {
                paymentMethod: T,
                error: f
            } = await e.createPaymentMethod({
                type: "p24",
                p24: {
                    bank: I
                },
                billing_details: {
                    address: {
                        line1: a,
                        line2: l,
                        city: u,
                        state: d,
                        postal_code: _,
                        country: c
                    },
                    name: s,
                    email: r
                }
            });
        if (null != f) throw M(f);
        if (null == T) throw M("paymentMethod not available with successful stripe call");
        return v(h.PaymentGateways.STRIPE, T.id, n, {
            billingAddressToken: E,
            analyticsLocation: i,
            bank: I
        })
    }
    async function G(e, t, n) {
        if (null == e) throw M("Stripe not loaded");
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_CREATE_START"
        });
        let i = await L(t),
            {
                email: r,
                name: s,
                line1: a,
                line2: l,
                city: u,
                state: d,
                postalCode: _,
                country: c
            } = t,
            {
                paymentMethod: E,
                error: I
            } = await e.createPaymentMethod({
                type: "sofort",
                sofort: {
                    country: c
                },
                billing_details: {
                    address: {
                        line1: a,
                        line2: l,
                        city: u,
                        state: d,
                        postal_code: _,
                        country: c
                    },
                    name: s,
                    email: r
                }
            });
        if (null != I) throw M(I);
        if (null == E) throw M("paymentMethod not available with successful stripe call");
        return v(h.PaymentGateways.STRIPE, E.id, t, {
            billingAddressToken: i,
            analyticsLocation: n
        })
    }
    async function w(e, t, n, i) {
        if (null == e || null == t) throw M("Stripe or token not loaded");
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_CREATE_START"
        });
        let r = null;
        try {
            r = await g()
        } catch (e) {
            throw M(e)
        }
        let {
            name: a,
            line1: l,
            line2: u,
            city: d,
            state: _,
            postalCode: c,
            country: E
        } = n, I = await L(n), {
            setupIntent: T,
            error: f
        } = await e.confirmCardSetup(r, {
            payment_method: {
                card: {
                    token: t
                },
                billing_details: {
                    address: {
                        line1: l,
                        line2: u,
                        city: d,
                        state: _,
                        postal_code: c,
                        country: E
                    },
                    name: a
                }
            }
        });
        if (null != f) throw M(f);
        if ((null == T ? void 0 : T.payment_method) == null) throw M("setupIntent.payment_method not available with successful stripe call");
        return s()("string" == typeof T.payment_method, "setupIntent.payment_method expanded not supported"), v(h.PaymentGateways.STRIPE, T.payment_method, n, {
            billingAddressToken: I,
            analyticsLocation: i
        })
    }

    function B(e, t, n) {
        let {
            token: i,
            billingAddressInfo: r
        } = S.parseStripePaymentMethod(e);
        return v(h.PaymentGateways.STRIPE, i, null != t ? t : r, {
            analyticsLocation: n
        })
    }

    function k(e, t, n) {
        return v(h.PaymentGateways.BRAINTREE, e, t, {
            analyticsLocation: n
        })
    }
    async function V(e, t, n, i) {
        if (null == e) throw M("Stripe not loaded");
        let r = await L(t),
            {
                name: a,
                line1: o,
                line2: l,
                city: u,
                state: d,
                postalCode: _,
                country: c
            } = t,
            E = m.STRIPE_PAYMENT_SOURCES.get(n);
        s()(null != E, "unsupported payment method type");
        let {
            paymentMethod: I,
            error: T
        } = await e.createPaymentMethod({
            type: E,
            billing_details: {
                address: {
                    line1: o,
                    line2: l,
                    city: u,
                    state: d,
                    postal_code: _,
                    country: c
                },
                name: a
            }
        });
        if (null != T) throw M(T);
        if (null == I) throw M("stripePaymentMethod not available with successful stripe call");
        return v(h.PaymentGateways.STRIPE, I.id, t, {
            billingAddressToken: r,
            analyticsLocation: i
        })
    }
    async function F(e, t, n) {
        let i = await L(e),
            r = {
                type: m.ADYEN_PAYMENT_SOURCES.get(t)
            };
        return v(h.PaymentGateways.ADYEN, JSON.stringify(r), e, {
            billingAddressToken: i,
            analyticsLocation: n
        })
    }
    async function x(e, t, n, i) {
        var r;
        let s = await L(e),
            d = {
                type: m.ADYEN_PAYMENT_SOURCES.get(t),
                ...null !== (r = null == i ? void 0 : i.paymentMethod) && void 0 !== r ? r : {}
            },
            _ = await em(t),
            c = (0, a.getAPIBaseURL)() + h.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t, null != _ ? _ : "", "success");
        try {
            return {
                paymentSource: await v(h.PaymentGateways.ADYEN, JSON.stringify(d), e, {
                    billingAddressToken: s,
                    analyticsLocation: n,
                    returnUrl: c
                }),
                redirectConfirmation: !1
            }
        } catch (t) {
            if (t.code !== u.ErrorCodes.CONFIRMATION_REQUIRED) throw o.default.dispatch({
                type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL",
                error: new l.BillingError("Unable to create payment source token: code: ".concat(null == t ? void 0 : t.code, " message: ").concat(null == t ? void 0 : t.message), l.BillingError.ErrorCodes.UNKNOWN)
            }), t;
            let e = t.fields.adyen_redirect_url;
            if (null == e) throw M("redirect url cannot be null on a redirect for adyen.");
            return er(e), {
                redirectConfirmation: !0
            }
        }
    }
    async function H(e) {
        if (h.VAULTABLE_PAYMENT_SOURCES.has(e.type)) return null;
        let t = await S.getStripe();
        if (null == t) throw new l.BillingError("Stripe not loaded", l.BillingError.ErrorCodes.UNKNOWN);
        let {
            email: n,
            name: i,
            line1: r,
            line2: a,
            city: o,
            state: u,
            postalCode: d,
            country: _
        } = e.billingAddress, c = {
            billing_details: {
                address: {
                    line1: r,
                    line2: a,
                    city: o,
                    state: u,
                    postal_code: d,
                    country: _
                },
                name: i
            }
        };
        switch (e.type) {
            case m.PaymentSourceTypes.GIROPAY:
                c.type = "giropay";
                break;
            case m.PaymentSourceTypes.SOFORT:
                c.type = "sofort", c.sofort = {
                    country: null != _ ? _ : ""
                }, c.billing_details.email = n;
                break;
            case m.PaymentSourceTypes.BANCONTACT:
                c.type = "bancontact";
                break;
            case m.PaymentSourceTypes.IDEAL:
                if (null == e.bank) throw new l.BillingError("iDEAL missing bank information", l.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                c.type = "ideal", c.ideal = {
                    bank: e.bank
                };
                break;
            case m.PaymentSourceTypes.PRZELEWY24:
                if (null == e.bank) throw new l.BillingError("p24 missing bank information", l.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                c.type = "p24", c.p24 = {
                    bank: e.bank
                }, c.billing_details.email = e.email;
                break;
            case m.PaymentSourceTypes.EPS:
                if (null == e.bank) throw new l.BillingError("EPS missing bank information", l.BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                c.type = "eps", c.eps = {
                    bank: e.bank
                }
        }
        s()(null != c.type, "unsupported payment method type");
        let {
            paymentMethod: E,
            error: I
        } = await t.createPaymentMethod(c);
        if (null != I || null == E) throw new l.BillingError("Unable to create payment source token: code: ".concat(null == I ? void 0 : I.code, " message: ").concat(null == I ? void 0 : I.message), l.BillingError.ErrorCodes.UNKNOWN);
        return E.id
    }

    function Y(e) {
        return h.VAULTABLE_PAYMENT_SOURCES.has(e.type) ? null : m.ADYEN_PAYMENT_SOURCES.has(e.type) ? D(e) : H(e)
    }
    async function j() {
        try {
            let e = a.HTTP.get({
                url: h.Endpoints.BILLING_PAYMENT_SOURCES,
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
        let t = await a.HTTP.get({
            url: h.Endpoints.BILLING_PAYMENT(e)
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
            let n = await a.HTTP.get({
                url: h.Endpoints.BILLING_PAYMENTS,
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
            let e = await a.HTTP.get({
                url: h.Endpoints.BILLING_SUBSCRIPTIONS,
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
    async function X() {
        o.default.wait(() => {
            o.default.dispatch({
                type: "BILLING_PERKS_RELEVANCE_FETCH_START"
            })
        });
        try {
            let e = await a.HTTP.get(h.Endpoints.BILLING_PERKS_RELEVANCE);
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
    async function Q() {
        try {
            let e = await a.HTTP.get(h.Endpoints.BILLING_NITRO_AFFINITY);
            o.default.dispatch({
                type: "BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED",
                res: e.body.map(e => new _.default(e))
            })
        } finally {
            o.default.dispatch({
                type: "BILLING_NITRO_AFFINITY_FETCHED"
            })
        }
    }
    async function q() {
        o.default.wait(() => {
            o.default.dispatch({
                type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START"
            })
        });
        try {
            let e = await a.HTTP.get({
                url: h.Endpoints.BILLING_SUBSCRIPTIONS,
                query: {
                    include_inactive: !0,
                    limit: 2,
                    exclude_unpaid_statuses: !0,
                    subscription_type: m.SubscriptionTypes.PREMIUM
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
    async function J(e) {
        let {
            items: t,
            paymentSource: n,
            trialId: i,
            code: r,
            currency: s,
            metadata: d,
            referralCode: _,
            loadId: c
        } = e;
        o.default.dispatch({
            type: "BILLING_SUBSCRIPTION_UPDATE_START"
        }), t = (0, T.coerceExistingItemsToNewItemInterval)(t);
        let E = null;
        if (null != n && m.ADYEN_PAYMENT_SOURCES.has(n.type)) {
            let e = await em(n.type);
            E = (0, a.getAPIBaseURL)() + h.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success")
        }
        try {
            let e = await a.HTTP.post({
                url: h.Endpoints.BILLING_SUBSCRIPTIONS,
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
                    return_url: E,
                    code: r,
                    currency: null != n ? s : m.CurrencyCodes.USD,
                    metadata: d,
                    gateway_checkout_context: await (0, I.createGatewayCheckoutContext)(n),
                    purchase_token: (0, f.getPurchaseToken)(),
                    referral_code: _,
                    load_id: c
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
            if (!t.body.payment_id) throw M("payment id cannot be null on redirected confirmations.");
            return $(t.body, n)
        }
    }
    async function Z(e, t, n, i) {
        let r = null;
        if (null != n && m.PREPAID_PAYMENT_SOURCES.has(n.type)) {
            let e = await em(n.type);
            r = (0, a.getAPIBaseURL)() + h.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(n.type, null != e ? e : "", "success")
        }
        try {
            let s = await a.HTTP.post({
                url: h.Endpoints.BILLING_INVOICE_MANUAL_PAYMENT(e.id, t),
                body: {
                    payment_source_id: null != n ? n.id : null,
                    payment_source_token: null != n ? await Y(n) : null,
                    return_url: r,
                    currency: i
                },
                oldFormErrors: !0
            });
            return o.default.dispatch({
                type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
                subscription: s.body
            }), {
                subscription: s.body,
                redirectConfirmation: h.REDIRECTED_PAYMENT_SOURCES.has(n.type)
            }
        } catch (t) {
            let e = t instanceof l.BillingError ? t : new l.BillingError(t);
            if (e.code !== u.ErrorCodes.CONFIRMATION_REQUIRED) throw o.default.dispatch({
                type: "BILLING_SUBSCRIPTION_UPDATE_FAIL",
                error: e
            }), e;
            if (!t.body.payment_id) throw M("payment id cannot be null on redirected confirmations.");
            return $(t.body, n)
        }
    }

    function $(e, t) {
        return null != t && m.ADYEN_PAYMENT_SOURCES.has(t.type) ? ee(e.adyen_redirect_url, t) : et(e.payment_id, t)
    }
    async function ee(e, t) {
        if (null == e) throw M("redirect url cannot be null on a redirect for adyen.");
        if (null == t) throw M("Payment source cannot be null on a redirect.");
        return h.REDIRECTED_PAYMENT_SOURCES.has(t.type) ? (er(e), {
            redirectConfirmation: !0,
            redirectURL: e
        }) : {
            redirectConfirmation: !1,
            redirectURL: e
        }
    }
    async function et(e, t) {
        let n = await S.getStripe();
        if (null == t) throw M("Payment source cannot be null on a redirect.");
        let {
            clientSecret: i,
            paymentMethodId: r
        } = await C(e);
        if (null == n) throw M("Stripe cannot be null on a redirect.");
        if (h.REDIRECTED_PAYMENT_SOURCES.has(t.type)) {
            let e = await em(t.type);
            return er(await ea({
                stripe: n,
                paymentSource: t,
                clientSecret: i,
                state: e
            })), {
                redirectConfirmation: !0
            }
        }
        return await es({
            stripe: n,
            clientSecret: i,
            paymentMethodId: r,
            paymentSource: t
        }), {
            redirectConfirmation: !1
        }
    }
    async function en(e) {
        var t;
        let n = await W(e);
        if ((null == n ? void 0 : n.body) == null) throw M("could not fetch payment");
        let i = d.default.createFromServer(n.body.payment_source);
        if (!h.REDIRECTED_PAYMENT_SOURCES.has(i.type)) throw M("unsupported redirect payment source");
        if ((null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.status) === m.PaymentStatusTypes.FAILED) throw M("payment failed");
        return i.paymentGateway !== h.PaymentGateways.STRIPE || ei(e)
    }
    async function ei(e) {
        let t = await S.getStripe();
        if (null == t) throw M("Stripe has not loaded.");
        if (null == e) throw M("payment intent id cannot be null.");
        let n = await R(e),
            {
                paymentIntent: i,
                error: r
            } = await t.retrievePaymentIntent(n);
        if (null != r) throw M(r);
        if (null == i) throw M("paymentIntent not available with successful stripe call");
        if (null != i.last_payment_error) throw M("unable to retrieve payment intent ".concat(i.last_payment_error));
        return !0
    }

    function er(e) {
        window.open(e)
    }
    async function es(e) {
        let t, {
                stripe: n,
                paymentSource: i,
                paymentMethodId: r,
                clientSecret: s
            } = e,
            a = {};
        if (i.type === m.PaymentSourceTypes.SEPA_DEBIT) {
            if (null == r) throw M("On a sepa payment payment method id cannot be null");
            a.payment_method = r, t = n.confirmSepaDebitPayment
        } else throw M("Unsupported redirected payment source type.");
        let {
            paymentIntent: o,
            error: l
        } = await t(s, a);
        if (null != l) throw M(l);
        if (null == o) throw M("paymentIntent not available with successful stripe call")
    }
    async function ea(e) {
        var t, n;
        let i, {
                stripe: r,
                paymentSource: s,
                clientSecret: o,
                state: l
            } = e,
            u = {};
        switch (s.type) {
            case m.PaymentSourceTypes.GIROPAY:
                u = {
                    billing_details: {
                        name: s.billingAddress.name
                    }
                }, i = r.confirmGiropayPayment;
                break;
            case m.PaymentSourceTypes.BANCONTACT:
                u = {
                    billing_details: {
                        name: s.billingAddress.name,
                        email: s.email
                    }
                }, i = r.confirmBancontactPayment;
                break;
            case m.PaymentSourceTypes.SOFORT:
                u = {
                    sofort: {
                        country: s.billingAddress.country
                    },
                    billing_details: {
                        name: s.billingAddress.name,
                        email: s.email
                    }
                }, i = r.confirmSofortPayment;
                break;
            case m.PaymentSourceTypes.PRZELEWY24:
                if (null == s.bank) throw M("PaymentSource (".concat(s.id, ") missing bank info for p24."));
                u = {
                    p24: {
                        bank: s.bank
                    },
                    billing_details: {
                        name: s.billingAddress.name,
                        email: s.email
                    }
                }, i = r.confirmP24Payment;
                break;
            case m.PaymentSourceTypes.EPS:
                if (null == s.bank) throw M("PaymentSource (".concat(s.id, ") missing bank info for EPS."));
                u = {
                    eps: {
                        bank: s.bank
                    },
                    billing_details: {
                        name: s.billingAddress.name
                    }
                }, i = r.confirmEpsPayment;
                break;
            case m.PaymentSourceTypes.IDEAL:
                if (null == s.bank) throw M("PaymentSource (".concat(s.id, ") missing bank info for iDEAL."));
                u = {
                    ideal: {
                        bank: s.bank
                    },
                    billing_details: {
                        name: s.billingAddress.name
                    }
                }, i = r.confirmIdealPayment;
                break;
            default:
                throw M("Unsupported redirected payment source type.")
        }
        let {
            paymentIntent: d,
            error: _
        } = await i(o, {
            payment_method: u,
            return_url: (0, a.getAPIBaseURL)() + h.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(s.type, null != l ? l : "", "success")
        }, {
            handleActions: !1
        });
        if (null != _) throw M(_);
        if (null == d) throw M("paymentIntent not available with successful api call");
        if ((null === (n = d.next_action) || void 0 === n ? void 0 : null === (t = n.redirect_to_url) || void 0 === t ? void 0 : t.url) == null) throw M("confirm payment did not return a redirect url");
        return d.next_action.redirect_to_url.url
    }
    async function eo(e, t, n) {
        o.default.dispatch({
            type: "BILLING_SUBSCRIPTION_CANCEL_START"
        });
        try {
            let i = await a.HTTP.del({
                url: h.Endpoints.BILLING_SUBSCRIPTION(e),
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
    async function eu(e, t, n, i, r) {
        if (null != t.paymentSource && null == t.currency) throw Error("Currency must be specified with payment source");
        o.default.dispatch({
            type: "BILLING_SUBSCRIPTION_UPDATE_START"
        });
        try {
            var s;
            let l = {
                status: t.status,
                payment_source_id: null === (s = t.paymentSource) || void 0 === s ? void 0 : s.id,
                payment_source_token: null != t.paymentSource ? await Y(t.paymentSource) : null,
                currency: t.currency,
                gateway_checkout_context: await (0, I.createGatewayCheckoutContext)(t.paymentSource),
                load_id: r,
                pause_duration: t.pauseDuration
            };
            if (null != t.paymentSource && m.ADYEN_PAYMENT_SOURCES.has(t.paymentSource.type)) {
                let e = await em(t.paymentSource.type);
                l.return_url = (0, a.getAPIBaseURL)() + h.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(t.paymentSource.type, null != e ? e : "", "success")
            }
            null != t.items && (l.items = (0, T.coerceExistingItemsToNewItemInterval)(t.items).map(e => {
                let {
                    planId: t,
                    ...n
                } = e;
                return {
                    ...n,
                    plan_id: t
                }
            }));
            let u = await a.HTTP.patch({
                url: h.Endpoints.BILLING_SUBSCRIPTION(e.id),
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
            if (!n.body.payment_id) throw M("payment id cannot be null on redirected confirmations.");
            return $(n.body, t.paymentSource)
        }
    }

    function ed(e, t, n, i, r) {
        return eu(e, {
            status: h.SubscriptionStatusTypes.ACTIVE,
            paymentSource: n,
            currency: i
        }, t, r)
    }

    function e_(e, t, n, i) {
        let r = (0, T.getItemsWithUpsertedPremiumPlanId)(e, t);
        return eu(e, {
            status: h.SubscriptionStatusTypes.ACTIVE,
            items: r
        }, n, i)
    }

    function ec(e, t, n, i) {
        return eu(e, {
            currency: t
        }, n, i)
    }

    function eE(e, t, n, i, r) {
        return eu(e, {
            paymentSource: t,
            currency: n
        }, i, r)
    }

    function eI(e, t, n, i) {
        return eu(e, {
            pauseDuration: t
        }, n, i)
    }

    function eT() {
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR"
        })
    }

    function ef() {
        o.default.dispatch({
            type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR"
        })
    }

    function eS() {
        o.default.dispatch({
            type: "PAYMENT_AUTHENTICATION_CLEAR_ERROR"
        })
    }
    async function eh(e) {
        await a.HTTP.post({
            url: h.Endpoints.BILLING_PAYMENTS_VOID(e),
            oldFormErrors: !0
        })
    }
    async function eA(e, t) {
        await a.HTTP.post({
            url: h.Endpoints.BILLING_PAYMENTS_REFUND(e),
            body: {
                reason: t
            }
        })
    }
    async function em(e) {
        let {
            body: {
                state: t
            }
        } = await a.HTTP.post({
            url: h.Endpoints.BILLING_POPUP_BRIDGE(e),
            oldFormErrors: !0
        });
        return o.default.dispatch({
            type: "BILLING_POPUP_BRIDGE_STATE_UPDATE",
            state: t,
            paymentSourceType: e
        }), t
    }

    function eN(e) {
        let {
            paymentSourceType: t,
            state: n,
            path: i,
            query: r,
            insecure: s
        } = e;
        return o.default.dispatch({
            type: "BILLING_POPUP_BRIDGE_CALLBACK_START",
            paymentSourceType: t
        }), a.HTTP.post({
            url: h.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK(t),
            body: {
                state: n,
                path: i,
                query: r,
                insecure: s
            },
            oldFormErrors: !0
        }).then(e => (o.default.dispatch({
            type: "BILLING_POPUP_BRIDGE_CALLBACK_END",
            paymentSourceType: t
        }), e))
    }
    async function eO() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!e && null != c.default.ipCountryCodeRequest) return c.default.ipCountryCodeRequest;
        try {
            let e = a.HTTP.get({
                url: h.Endpoints.BILLING_COUNTRY_CODE
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
    async function ep() {
        try {
            let e = await a.HTTP.get({
                url: h.Endpoints.BILLING_LOCALIZED_PROMO
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

    function eR() {
        o.default.dispatch({
            type: "RESET_PAYMENT_ID"
        })
    }

    function eC() {
        o.default.dispatch({
            type: "BILLING_SUBSCRIPTION_RESET"
        })
    }

    function eg(e) {
        o.default.dispatch({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED",
            loadId: e
        })
    }
}