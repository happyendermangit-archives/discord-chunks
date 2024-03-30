function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("264375");

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                s(e, t, n[t])
            })
        }
        return e
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = {},
        _ = null,
        E = !1;

    function p(e) {
        var t, n, r = e.paymentSource;
        t = c({}, d), n = null != (n = s({}, r.id, r)) ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), d = t, (r.isDefault || 1 === Object.keys(d).length) && (_ = r.id)
    }
    var m = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
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
            var e, r, o, i = l(t);
            if (n) {
                var a = l(this).constructor;
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
            key: "paymentSources",
            get: function() {
                return d
            }
        }, {
            key: "paymentSourceIds",
            get: function() {
                return Object.keys(d)
            }
        }, {
            key: "defaultPaymentSourceId",
            get: function() {
                return _
            }
        }, {
            key: "defaultPaymentSource",
            get: function() {
                return null != _ ? d[_] : null
            }
        }, {
            key: "hasFetchedPaymentSources",
            get: function() {
                return E
            }
        }, {
            key: "getDefaultBillingCountryCode",
            value: function() {
                var e = this.defaultPaymentSource;
                return null == e ? null : e.paymentMethodCountry
            }
        }, {
            key: "getPaymentSource",
            value: function(e) {
                return d[e]
            }
        }], u(r.prototype, o), i && u(r, i), s
    }(o.default.Store);
    s(m, "displayName", "PaymentSourceStore"), t.default = new m(i.default, {
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: p,
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: p,
        BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: function(e) {
            var t = e.paymentSources;
            d = {}, _ = null;
            var n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, u = t[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                    var s = i.value;
                    d[s.id] = a.default.createFromServer(s), s.default && (_ = s.id)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != u.return && u.return()
                } finally {
                    if (r) throw o
                }
            }
            null == _ && t.length > 0 && (_ = t[0].id), E = !0
        },
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function(e) {
            var t = e.id;
            if (d = c({}, d), delete d[t], _ === t) {
                var n = Object.keys(d);
                _ = 0 === n.length ? null : n[0]
            }
        },
        LOGOUT: function() {
            d = {}, _ = null, E = !1
        }
    })
}