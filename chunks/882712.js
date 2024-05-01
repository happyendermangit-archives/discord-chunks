function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PurchaseTokenAuthState: function() {
            return o
        }
    });
    var i, r, a, s, o, l, u = n("442837"),
        d = n("570140"),
        _ = n("128069"),
        c = n("38618");
    (i = o || (o = {}))[i.UNKNOWN = 0] = "UNKNOWN", i[i.PENDING = 1] = "PENDING", i[i.SUCCESS = 2] = "SUCCESS", i[i.ERROR = 3] = "ERROR";
    let E = 0,
        I = null,
        T = null;

    function f(e) {
        let {
            error: t
        } = e, n = t instanceof _.default ? t : new _.default(t);
        c.default.isConnected() && n.code === _.default.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (E = 1)
    }

    function S() {
        E = 0, I = null, T = null
    }
    class h extends(l = u.default.Store) {
        get purchaseTokenAuthState() {
            return E
        }
        get purchaseTokenHash() {
            return I
        }
        get expiresAt() {
            return T
        }
    }
    s = "PurchaseTokenAuthStore", (a = "displayName") in(r = h) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new h(d.default, {
        SKU_PURCHASE_FAIL: f,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: f,
        USER_PAYMENT_CLIENT_ADD: function(e) {
            E = 2, I = e.purchaseTokenHash, T = e.expiresAt
        },
        BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: S,
        BILLING_SUBSCRIPTION_UPDATE_START: S,
        PAYMENT_AUTHENTICATION_CLEAR_ERROR: S,
        PREMIUM_PAYMENT_ERROR_CLEAR: S,
        PREMIUM_PAYMENT_MODAL_CLOSE: S,
        PREMIUM_PAYMENT_MODAL_OPEN: S,
        PREMIUM_PAYMENT_SUBSCRIBE_START: S,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: S,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: S,
        SKU_PURCHASE_MODAL_CLOSE: S,
        SKU_PURCHASE_MODAL_OPEN: S,
        SKU_PURCHASE_START: S,
        SKU_PURCHASE_SUCCESS: S,
        LIGHTNING_CHECKOUT_OPEN: S,
        LIGHTNING_CHECKOUT_CLOSE: S
    })
}