function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("146591");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = null,
        E = null,
        p = null;

    function m(e) {
        _ = e.error
    }

    function y() {
        _ = null
    }
    var I = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "paymentError",
            get: function() {
                return _
            }
        }, {
            key: "getGiftCode",
            value: function(e) {
                return e === p ? E : null
            }
        }], c(r.prototype, o), i && c(r, i), u
    }(u.default.Store);
    i = "PremiumPaymentModalStore", (o = "displayName") in(r = I) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new I(s.default, {
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: m,
        PREMIUM_PAYMENT_UPDATE_FAIL: m,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function() {
            y()
        },
        PREMIUM_PAYMENT_UPDATE_SUCCESS: y,
        PREMIUM_PAYMENT_ERROR_CLEAR: y,
        BRAINTREE_TOKENIZE_PAYPAL_FAIL: function(e) {
            var t = e.message,
                n = e.code;
            _ = new l.BillingError(t, n)
        },
        BRAINTREE_TOKENIZE_VENMO_FAIL: function(e) {
            var t = e.message,
                n = e.code;
            _ = new l.BillingError(t, n)
        },
        SKU_PURCHASE_SUCCESS: function(e) {
            E = e.giftCode, p = e.skuId
        },
        SKU_PURCHASE_FAIL: function(e) {
            _ = e.error
        },
        SKU_PURCHASE_AWAIT_CONFIRMATION: function(e) {
            e.isGift && (p = e.skuId)
        },
        GIFT_CODE_CREATE: function(e) {
            var t = e.giftCode;
            if (0 !== t.uses || t.sku_id !== p) return !1;
            E = t.code
        }
    })
}