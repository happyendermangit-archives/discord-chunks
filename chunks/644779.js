function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                u(e, t, n[t])
            })
        }
        return e
    }

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var f = !1,
        d = !1,
        _ = {},
        E = null,
        p = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
            }(l, e);
            var t, n, r, o, i, u = (t = l, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = s(t);
                if (n) {
                    var a = s(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function l() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, l), u.apply(this, arguments)
            }
            return r = l, o = [{
                key: "hasConsented",
                value: function(e) {
                    return null != _[e] && _[e].consented
                }
            }, {
                key: "fetchedConsents",
                get: function() {
                    return f
                }
            }, {
                key: "receivedConsentsInConnectionOpen",
                get: function() {
                    return d
                }
            }, {
                key: "getAuthenticationConsentRequired",
                value: function() {
                    return E
                }
            }], a(r.prototype, o), i && a(r, i), l
        }(o.default.Store);
    u(p, "displayName", "ConsentStore"), t.default = new p(i.default, {
        CONNECTION_OPEN: function(e) {
            var t = e.consents;
            null != t && (_ = l({}, _, t), d = !0)
        },
        UPDATE_CONSENTS: function(e) {
            _ = l({}, e.consents), f = !0
        },
        SET_CONSENT_REQUIRED: function(e) {
            E = e.consentRequired
        },
        LOGOUT: function() {
            E = null
        }
    })
}