function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return C
        }
    }), n("70102");
    var i = n("446674"),
        r = n("913144"),
        u = n("596523"),
        l = n("465527"),
        a = n("736978"),
        o = n("745279"),
        s = n("520713"),
        c = n("49111"),
        d = n("782340");
    let S = !1,
        E = null,
        f = null;

    function _() {
        S = !1, f = null
    }

    function T(t) {
        let {
            error: e
        } = t, {
            code: n,
            paymentId: i
        } = e;
        if (n !== a.default.ErrorCodes.AUTHENTICATION_REQUIRED) return S = !1, !1;
        !S && (S = !0, E = i, I(i))
    }
    async function I(t) {
        if (null == t) return;
        let {
            error: e
        } = await (0, s.authenticatePaymentIntentForPaymentId)(t);
        if (null != e) {
            r.default.dispatch({
                type: "PAYMENT_AUTHENTICATION_ERROR",
                error: new a.default(d.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR)
            });
            let t = Error(e);
            (0, o.captureBillingException)(t, {
                extra: {
                    authenticationError: e
                }
            })
        }
    }

    function A(t) {
        let {
            payment: e
        } = t;
        if (!S || e.id !== E || ![c.PaymentStatusTypes.COMPLETED, c.PaymentStatusTypes.CANCELED].includes(e.status)) return !1;
        S = !1, f = null, E = null, r.default.wait(u.clearError), r.default.wait(l.clearPurchaseError)
    }
    class p extends i.default.Store {
        get isAwaitingAuthentication() {
            return S
        }
        get error() {
            return f
        }
        get awaitingPaymentId() {
            return E
        }
    }
    p.displayName = "PaymentAuthenticationStore";
    var C = new p(r.default, {
        BILLING_SUBSCRIPTION_UPDATE_START: _,
        PAYMENT_AUTHENTICATION_CLEAR_ERROR: _,
        PREMIUM_PAYMENT_ERROR_CLEAR: _,
        PREMIUM_PAYMENT_MODAL_CLOSE: _,
        PREMIUM_PAYMENT_MODAL_OPEN: _,
        PREMIUM_PAYMENT_SUBSCRIBE_START: _,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: _,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: _,
        SKU_PURCHASE_MODAL_CLOSE: _,
        SKU_PURCHASE_MODAL_OPEN: _,
        SKU_PURCHASE_START: _,
        SKU_PURCHASE_SUCCESS: _,
        BILLING_SUBSCRIPTION_UPDATE_FAIL: T,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: T,
        PREMIUM_PAYMENT_UPDATE_FAIL: T,
        SKU_PURCHASE_FAIL: T,
        GIFT_CODE_REDEEM_FAILURE: T,
        PAYMENT_AUTHENTICATION_ERROR: function(t) {
            let {
                error: e
            } = t;
            f = e, S = !1
        },
        PAYMENT_UPDATE: A,
        BILLING_PAYMENT_FETCH_SUCCESS: A
    })
}