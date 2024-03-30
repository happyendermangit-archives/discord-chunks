function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("929048"),
        o = n("629815"),
        i = n("35523"),
        a = n("483893");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
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
    var _ = new i.default("BasicChannelCacheStore"),
        E = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
            }(p, e);
            var t, n, r, i, _, E = (t = p, n = function() {
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
                }(r) || "function" == typeof r) ? r : s(e)
            });

            function p() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, p), c(s(e = E.call(this, o.default, {
                    CACHE_LOADED_LAZY_NO_CACHE: function(t) {
                        return e.handleCacheLoadedLazyNoCache(t)
                    },
                    CACHE_LOADED_LAZY: function(t) {
                        return e.handleCacheLoadedLazy(t)
                    },
                    CONNECTION_OPEN: function(t) {
                        return e.handleConnectionOpen(t)
                    },
                    LOGOUT: function(t) {
                        return e.handleLogout(t)
                    }
                })), "channels", new Map), c(s(e), "guilds", new Map), e
            }
            return r = p, i = [{
                key: "hasChannel",
                value: function(e) {
                    return this.channels.has(e)
                }
            }, {
                key: "hasGuild",
                value: function(e) {
                    return this.guilds.has(e)
                }
            }, {
                key: "getBasicChannel",
                value: function(e) {
                    var t;
                    return null !== (t = this.channels.get(e)) && void 0 !== t ? t : null
                }
            }, {
                key: "getGuildBasicChannels",
                value: function(e) {
                    var t;
                    return null !== (t = this.guilds.get(e)) && void 0 !== t ? t : null
                }
            }, {
                key: "invalidate",
                value: function(e) {
                    this.delete(e)
                }
            }, {
                key: "restored",
                value: function(e) {
                    this.delete(e)
                }
            }, {
                key: "initialize",
                value: function() {
                    this.waitFor(a.default)
                }
            }, {
                key: "handleCacheLoadedLazy",
                value: function(e) {
                    this.guilds = new Map, this.channels = new Map;
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = e.basicGuildChannels[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var a = (_ = o.value, E = 2, function(e) {
                                    if (Array.isArray(e)) return e
                                }(_) || function(e, t) {
                                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != o) {
                                        var i = [],
                                            a = !0,
                                            u = !1;
                                        try {
                                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                        } catch (e) {
                                            u = !0, r = e
                                        } finally {
                                            try {
                                                !a && null != o.return && o.return()
                                            } finally {
                                                if (u) throw r
                                            }
                                        }
                                        return i
                                    }
                                }(_, E) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return u(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                                    }
                                }(_, E) || function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()),
                                s = a[0],
                                l = a[1];
                            this.guilds.set(s, Object.fromEntries(l.map(function(e) {
                                return [e.id, e]
                            })));
                            var c = !0,
                                f = !1,
                                d = void 0;
                            try {
                                for (var _, E, p, m = l[Symbol.iterator](); !(c = (p = m.next()).done); c = !0) {
                                    var y = p.value;
                                    this.channels.set(y.id, y)
                                }
                            } catch (e) {
                                f = !0, d = e
                            } finally {
                                try {
                                    !c && null != m.return && m.return()
                                } finally {
                                    if (f) throw d
                                }
                            }
                        }
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            !t && null != i.return && i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                }
            }, {
                key: "handleCacheLoadedLazyNoCache",
                value: function(e) {
                    this.guilds.clear(), this.channels.clear()
                }
            }, {
                key: "handleConnectionOpen",
                value: function(e) {
                    var t = a.default.allGuildIds(),
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, u = this.guilds.keys()[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                            var s = i.value;
                            !t.has(s) && this.delete(s)
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
                }
            }, {
                key: "handleLogout",
                value: function(e) {
                    this.guilds.clear(), this.channels.clear()
                }
            }, {
                key: "delete",
                value: function(e) {
                    var t;
                    for (var n in null !== (t = this.guilds.get(e)) && void 0 !== t ? t : {}) this.channels.delete(n);
                    this.guilds.delete(e)
                }
            }], l(r.prototype, i), _ && l(r, _), p
        }(r.Store);
    t.default = new E
}