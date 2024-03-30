function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("242880"),
        a = n("629815"),
        u = n("281767");

    function l(e, t) {
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

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = {
            lastViewedPath: null,
            lastViewedNonVoicePath: null
        },
        p = d,
        E = "LAST_VIEWED_PATH",
        _ = function(e) {
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
                var e, r, o, i = c(t);
                if (n) {
                    var a = c(this).constructor;
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
                key: "initialize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d;
                    p = null != e ? e : d
                }
            }, {
                key: "defaultRoute",
                get: function() {
                    return u.Routes.ME
                }
            }, {
                key: "lastNonVoiceRoute",
                get: function() {
                    var e;
                    return null !== (e = p.lastViewedNonVoicePath) && void 0 !== e ? e : u.Routes.ME
                }
            }, {
                key: "fallbackRoute",
                get: function() {
                    return u.Routes.ME
                }
            }, {
                key: "getState",
                value: function() {
                    return p
                }
            }], l(r.prototype, o), i && l(r, i), s
        }(o.default.PersistedStore);
    s(_, "displayName", "DefaultRouteStore"), s(_, "persistKey", "DefaultRouteStore"), s(_, "migrations", [function() {
        var e = i.Storage.get(E, null);
        return i.Storage.remove(E), {
            lastViewedPath: e
        }
    }]), t.default = new _(a.default, {
        SAVE_LAST_ROUTE: function(e) {
            var t = e.path;
            return p.lastViewedPath = t, !0
        },
        SAVE_LAST_NON_VOICE_ROUTE: function(e) {
            var t = e.path;
            return p.lastViewedNonVoicePath = t, !0
        }
    })
}