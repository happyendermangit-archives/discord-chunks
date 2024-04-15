function(e, t, n) {
    "use strict";
    n.r(t), n("411104");
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("366939"),
        d = n("16084"),
        _ = n("128069"),
        c = n("122289"),
        E = n("622999"),
        I = n("981631"),
        T = n("689938");
    let f = !1,
        S = null,
        h = null;

    function A() {
        f = !1, h = null
    }

    function m(e) {
        let {
            error: t
        } = e, {
            code: n,
            paymentId: i
        } = t;
        if (n !== _.default.ErrorCodes.AUTHENTICATION_REQUIRED) return f = !1, !1;
        !f && (f = !0, S = i, N(i))
    }
    async function N(e) {
        if (null == e) return;
        let {
            error: t
        } = await (0, E.authenticatePaymentIntentForPaymentId)(e);
        if (null != t) {
            l.default.dispatch({
                type: "PAYMENT_AUTHENTICATION_ERROR",
                error: new _.default(T.default.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR)
            });
            let e = Error(t);
            (0, c.captureBillingException)(e, {
                extra: {
                    authenticationError: t
                }
            })
        }
    }

    function p(e) {
        let {
            payment: t
        } = e;
        if (!f || t.id !== S || ![I.PaymentStatusTypes.COMPLETED, I.PaymentStatusTypes.CANCELED].includes(t.status)) return !1;
        f = !1, h = null, S = null, l.default.wait(u.clearError), l.default.wait(d.clearPurchaseError)
    }
    class O extends(i = o.default.Store) {
        get isAwaitingAuthentication() {
            return f
        }
        get error() {
            return h
        }
        get awaitingPaymentId() {
            return S
        }
    }
    a = "PaymentAuthenticationStore", (s = "displayName") in(r = O) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new O(l.default, {
        BILLING_SUBSCRIPTION_UPDATE_START: A,
        PAYMENT_AUTHENTICATION_CLEAR_ERROR: A,
        PREMIUM_PAYMENT_ERROR_CLEAR: A,
        PREMIUM_PAYMENT_MODAL_CLOSE: A,
        PREMIUM_PAYMENT_MODAL_OPEN: A,
        PREMIUM_PAYMENT_SUBSCRIBE_START: A,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: A,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: A,
        SKU_PURCHASE_MODAL_CLOSE: A,
        SKU_PURCHASE_MODAL_OPEN: A,
        SKU_PURCHASE_START: A,
        SKU_PURCHASE_SUCCESS: A,
        BILLING_SUBSCRIPTION_UPDATE_FAIL: m,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: m,
        PREMIUM_PAYMENT_UPDATE_FAIL: m,
        SKU_PURCHASE_FAIL: m,
        GIFT_CODE_REDEEM_FAILURE: m,
        PAYMENT_AUTHENTICATION_ERROR: function(e) {
            let {
                error: t
            } = e;
            h = t, f = !1
        },
        PAYMENT_UPDATE: p,
        BILLING_PAYMENT_FETCH_SUCCESS: p
    })
}