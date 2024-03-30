function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l = n("898511"),
        c = n("967888"),
        f = n("629815"),
        d = n("374550"),
        _ = n("281767");

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = null,
        I = null,
        h = null;
    (0, d.isDesktop)() && (window.popupBridge = {
        getReturnUrlPrefix: function() {
            if (null == a) throw Error("popupBridgeState is unset");
            return (0, c.getAPIBaseURL)() + _.Endpoints.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(_.PaymentGateways.BRAINTREE, a)
        },
        open: function(e) {
            u = e, window.open(e), T.emitChange()
        }
    });
    var O = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
        }(s, e);
        var t, n, r, o, i, a = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = p(t);
            if (n) {
                var a = p(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function s() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), a.apply(this, arguments)
        }
        return r = s, o = [{
            key: "getClient",
            value: function() {
                return y
            }
        }, {
            key: "getPayPalClient",
            value: function() {
                return I
            }
        }, {
            key: "getVenmoClient",
            value: function() {
                return h
            }
        }, {
            key: "getLastURL",
            value: function() {
                return u
            }
        }], E(r.prototype, o), i && E(r, i), s
    }(l.default.Store);
    i = "BraintreeStore", (o = "displayName") in(r = O) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i;
    var T = new O(f.default, {
        BRAINTREE_CREATE_CLIENT_SUCCESS: function(e) {
            y = e.client
        },
        BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function(e) {
            I = e.paypalClient
        },
        BILLING_POPUP_BRIDGE_CALLBACK: function(e) {
            var t = e.paymentSourceType,
                n = e.state,
                r = e.path,
                o = e.query;
            if (t === _.PaymentSourceTypes.PAYPAL && n === a) {
                var i = window.popupBridge.onComplete;
                "function" == typeof i && i(null, {
                    path: r,
                    queryItems: o
                })
            }
        },
        BILLING_POPUP_BRIDGE_STATE_UPDATE: function(e) {
            var t = e.paymentSourceType,
                n = e.state;
            t === _.PaymentSourceTypes.PAYPAL && (a = n)
        },
        BRAINTREE_TEARDOWN_PAYPAL_CLIENT: function() {
            I = null
        },
        BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function(e) {
            h = e.venmoClient
        },
        BRAINTREE_TEARDOWN_VENMO_CLIENT: function() {
            h = null
        }
    });
    t.default = T
}