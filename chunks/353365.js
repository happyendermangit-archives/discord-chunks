function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("448993");
    let a = null,
        o = null,
        l = null;

    function u(e) {
        let {
            error: t
        } = e;
        a = t
    }

    function d() {
        a = null
    }
    class c extends i.default.Store {
        get paymentError() {
            return a
        }
        getGiftCode(e) {
            return e === l ? o : null
        }
    }
    c.displayName = "PremiumPaymentModalStore";
    var f = new c(s.default, {
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: u,
        PREMIUM_PAYMENT_UPDATE_FAIL: u,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function() {
            d()
        },
        PREMIUM_PAYMENT_UPDATE_SUCCESS: d,
        PREMIUM_PAYMENT_ERROR_CLEAR: d,
        BRAINTREE_TOKENIZE_PAYPAL_FAIL: function(e) {
            let {
                message: t,
                code: n
            } = e;
            a = new r.BillingError(t, n)
        },
        BRAINTREE_TOKENIZE_VENMO_FAIL: function(e) {
            let {
                message: t,
                code: n
            } = e;
            a = new r.BillingError(t, n)
        },
        SKU_PURCHASE_SUCCESS: function(e) {
            o = e.giftCode, l = e.skuId
        },
        SKU_PURCHASE_FAIL: function(e) {
            a = e.error
        },
        SKU_PURCHASE_AWAIT_CONFIRMATION: function(e) {
            e.isGift && (l = e.skuId)
        },
        GIFT_CODE_CREATE: function(e) {
            let {
                giftCode: t
            } = e;
            if (0 !== t.uses || t.sku_id !== l) return !1;
            o = t.code
        }
    })
}