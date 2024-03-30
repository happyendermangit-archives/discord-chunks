function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
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
    var d = {},
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
            }(l, e);
            var t, n, r, o, a, u = (t = l, n = function() {
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

            function l() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, l), u.apply(this, arguments)
            }
            return r = l, o = [{
                key: "isConnected",
                value: function(e) {
                    return null != d[e]
                }
            }, {
                key: "connections",
                get: function() {
                    return i().values(d)
                }
            }, {
                key: "getApplication",
                value: function(e) {
                    return d[e]
                }
            }, {
                key: "getAllConnections",
                value: function() {
                    return d
                }
            }], s(r.prototype, o), a && s(r, a), l
        }(a.default.Store);
    l(_, "displayName", "ConnectedAppsStore"), t.default = new _(u.default, {
        OVERLAY_INITIALIZE: function(e) {
            d = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        l(e, t, n[t])
                    })
                }
                return e
            }({}, e.connectedApps)
        },
        RPC_APP_CONNECTED: function(e) {
            var t = e.application;
            if (null == t.id) return !1;
            var n = t.id;
            null == d[n] && (d[n] = {
                count: 0,
                id: t.id,
                name: t.name,
                icon: t.icon,
                coverImage: t.coverImage,
                authenticated: !1
            }), d[n].count++
        },
        RPC_APP_AUTHENTICATED: function(e) {
            var t = e.application;
            null != t.id && null != d[t.id] && (d[t.id].authenticated = !0)
        },
        RPC_APP_DISCONNECTED: function(e) {
            var t = e.application;
            null != t.id && null != d[t.id] && (d[t.id].count--, 0 === d[t.id].count && delete d[t.id])
        }
    })
}