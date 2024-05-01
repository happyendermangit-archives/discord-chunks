function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("881052");
    let d = null,
        _ = null,
        c = null;

    function E(e) {
        let {
            error: t
        } = e;
        d = t
    }

    function I() {
        d = null
    }
    class T extends(s = o.default.Store) {
        get paymentError() {
            return d
        }
        getGiftCode(e) {
            return e === c ? _ : null
        }
    }
    a = "PremiumPaymentModalStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new T(l.default, {
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: E,
        PREMIUM_PAYMENT_UPDATE_FAIL: E,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function() {
            I()
        },
        PREMIUM_PAYMENT_UPDATE_SUCCESS: I,
        PREMIUM_PAYMENT_ERROR_CLEAR: I,
        BRAINTREE_TOKENIZE_PAYPAL_FAIL: function(e) {
            let {
                message: t,
                code: n
            } = e;
            d = new u.BillingError(t, n)
        },
        BRAINTREE_TOKENIZE_VENMO_FAIL: function(e) {
            let {
                message: t,
                code: n
            } = e;
            d = new u.BillingError(t, n)
        },
        SKU_PURCHASE_SUCCESS: function(e) {
            _ = e.giftCode, c = e.skuId
        },
        SKU_PURCHASE_FAIL: function(e) {
            d = e.error
        },
        SKU_PURCHASE_AWAIT_CONFIRMATION: function(e) {
            e.isGift && (c = e.skuId)
        },
        GIFT_CODE_CREATE: function(e) {
            let {
                giftCode: t
            } = e;
            if (0 !== t.uses || t.sku_id !== c) return !1;
            _ = t.code
        }
    })
}