function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PurchaseTokenAuthState: function() {
            return u
        }
    });
    var r, o, i, a, u, s, l = n("898511"),
        c = n("629815"),
        f = n("402223"),
        d = n("950879");

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = u || (u = {}))[r.UNKNOWN = 0] = "UNKNOWN", r[r.PENDING = 1] = "PENDING", r[r.SUCCESS = 2] = "SUCCESS", r[r.ERROR = 3] = "ERROR";
    var m = 0,
        y = null,
        I = null;

    function h(e) {
        var t, n, r = e.error;
        var o = (t = r, null != (n = f.default) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](t) : t instanceof n) ? r : new f.default(r);
        d.default.isConnected() && o.code === f.default.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (m = 1)
    }

    function O() {
        m = 0, y = null, I = null
    }
    var T = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
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
            var e, r, o, i = E(t);
            if (n) {
                var a = E(this).constructor;
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
            key: "purchaseTokenAuthState",
            get: function() {
                return m
            }
        }, {
            key: "purchaseTokenHash",
            get: function() {
                return y
            }
        }, {
            key: "expiresAt",
            get: function() {
                return I
            }
        }], _(r.prototype, o), i && _(r, i), u
    }(l.default.Store);
    a = "PurchaseTokenAuthStore", (i = "displayName") in(o = T) ? Object.defineProperty(o, i, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[i] = a, t.default = new T(c.default, {
        SKU_PURCHASE_FAIL: h,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: h,
        USER_PAYMENT_CLIENT_ADD: function(e) {
            m = 2, y = e.purchaseTokenHash, I = e.expiresAt
        },
        BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: O,
        BILLING_SUBSCRIPTION_UPDATE_START: O,
        PAYMENT_AUTHENTICATION_CLEAR_ERROR: O,
        PREMIUM_PAYMENT_ERROR_CLEAR: O,
        PREMIUM_PAYMENT_MODAL_CLOSE: O,
        PREMIUM_PAYMENT_MODAL_OPEN: O,
        PREMIUM_PAYMENT_SUBSCRIBE_START: O,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: O,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: O,
        SKU_PURCHASE_MODAL_CLOSE: O,
        SKU_PURCHASE_MODAL_OPEN: O,
        SKU_PURCHASE_START: O,
        SKU_PURCHASE_SUCCESS: O
    })
}