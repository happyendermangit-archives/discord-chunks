function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return O
        }
    });
    var i = n("446674"),
        r = n("913144"),
        u = n("520713");
    let l = "",
        a = null,
        o = "",
        s = null,
        c = !1,
        S = null,
        d = "",
        E = "",
        f = "",
        _ = "",
        T = "",
        I = "",
        A = "",
        p = "",
        C = !1,
        P = null,
        N = null,
        R = null,
        h = null;

    function U() {
        s = null, l = "", a = null, o = "", c = !1, S = null, d = "US", E = "", f = "", _ = "", T = "", I = "", A = "", p = "", C = !1, P = null, N = null, R = null, h = null
    }

    function L(t) {
        E = t.name, d = t.country, _ = t.line1, T = t.line2, I = t.city, A = t.postalCode, p = t.state, f = t.email
    }

    function m() {
        P = null
    }

    function M(t) {
        let {
            error: e
        } = t;
        P = e
    }
    class F extends i.default.Store {
        get stripePaymentMethod() {
            return s
        }
        get popupCallbackCalled() {
            return R
        }
        get braintreeEmail() {
            return l
        }
        get braintreeNonce() {
            return a
        }
        get venmoUsername() {
            return o
        }
        get redirectedPaymentId() {
            return N
        }
        get adyenPaymentData() {
            return S
        }
        get redirectedPaymentSourceId() {
            return h
        }
        getCreditCardInfo() {
            return {
                name: E
            }
        }
        get isCardInfoValid() {
            return c
        }
        getBillingAddressInfo() {
            return {
                name: E,
                email: f,
                country: d,
                line1: _,
                line2: T,
                city: I,
                postalCode: A,
                state: p
            }
        }
        get isBillingAddressInfoValid() {
            return C
        }
        get error() {
            return P
        }
    }
    F.displayName = "NewPaymentSourceStore";
    var O = new F(r.default, {
        NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function(t) {
            let {
                stripePaymentMethod: e
            } = t;
            if (null == e) {
                U();
                return
            }
            s = e;
            let {
                billingAddressInfo: n
            } = u.parseStripePaymentMethod(s);
            L(n)
        },
        NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function(t) {
            let {
                info: e,
                isValid: n
            } = t;
            E = e.name, c = n
        },
        NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function(t) {
            let {
                info: e,
                isValid: n
            } = t;
            null != e.name && "" !== e.name && (E = e.name), d = e.country, E = e.name, _ = e.line1, T = e.line2, I = e.city, A = e.postalCode, p = e.state, f = e.email, C = n
        },
        BRAINTREE_TOKENIZE_PAYPAL_START: function() {
            l = "", a = null
        },
        BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function(t) {
            let {
                email: e,
                nonce: n,
                billingAddress: i
            } = t;
            l = e, a = n, L(i), C = d.length > 0
        },
        BRAINTREE_TOKENIZE_VENMO_START: function() {
            o = "", a = null
        },
        BRAINTREE_TOKENIZE_VENMO_SUCCESS: function(t) {
            let {
                username: e,
                nonce: n
            } = t;
            o = e, a = n
        },
        ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function(t) {
            let {
                data: e
            } = t;
            S = e
        },
        BILLING_PAYMENT_SOURCE_CREATE_START: m,
        MODAL_POP: m,
        NEW_PAYMENT_SOURCE_CLEAR_ERROR: m,
        BILLING_PAYMENT_SOURCE_CREATE_FAIL: M,
        STRIPE_TOKEN_FAILURE: M,
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: U,
        LOGOUT: U,
        BILLING_POPUP_BRIDGE_CALLBACK: function(t) {
            let {
                query: e
            } = t;
            (null == e ? void 0 : e.payment_id) != null ? (R = !0, N = e.payment_id) : (null == e ? void 0 : e.payment_source_id) != null && (R = !0, h = e.payment_source_id)
        },
        RESET_PAYMENT_ID: function() {
            R = !1, N = null
        }
    })
}