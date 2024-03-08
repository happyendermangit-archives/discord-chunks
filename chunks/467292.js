function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        PurchaseTokenAuthState: function() {
            return u
        },
        default: function() {
            return _
        }
    });
    var i, u, r = n("446674"),
        l = n("913144"),
        a = n("736978"),
        o = n("619443");
    (i = u || (u = {}))[i.UNKNOWN = 0] = "UNKNOWN", i[i.PENDING = 1] = "PENDING", i[i.SUCCESS = 2] = "SUCCESS", i[i.ERROR = 3] = "ERROR";
    let s = 0,
        c = null,
        S = null;

    function E(t) {
        let {
            error: e
        } = t, n = e instanceof a.default ? e : new a.default(e);
        o.default.isConnected() && n.code === a.default.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (s = 1)
    }

    function d() {
        s = 0, c = null, S = null
    }
    class f extends r.default.Store {
        get purchaseTokenAuthState() {
            return s
        }
        get purchaseTokenHash() {
            return c
        }
        get expiresAt() {
            return S
        }
    }
    f.displayName = "PurchaseTokenAuthStore";
    var _ = new f(l.default, {
        SKU_PURCHASE_FAIL: E,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: E,
        USER_PAYMENT_CLIENT_ADD: function(t) {
            s = 2, c = t.purchaseTokenHash, S = t.expiresAt
        },
        BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: d,
        BILLING_SUBSCRIPTION_UPDATE_START: d,
        PAYMENT_AUTHENTICATION_CLEAR_ERROR: d,
        PREMIUM_PAYMENT_ERROR_CLEAR: d,
        PREMIUM_PAYMENT_MODAL_CLOSE: d,
        PREMIUM_PAYMENT_MODAL_OPEN: d,
        PREMIUM_PAYMENT_SUBSCRIBE_START: d,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: d,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: d,
        SKU_PURCHASE_MODAL_CLOSE: d,
        SKU_PURCHASE_MODAL_OPEN: d,
        SKU_PURCHASE_START: d,
        SKU_PURCHASE_SUCCESS: d
    })
}