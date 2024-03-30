function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("162677"),
        u = n("935741"),
        s = n("489763"),
        l = n("29604"),
        c = n("281767");

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = {},
        m = 0;

    function y() {
        m += 1
    }

    function I(e) {
        if (null == p[e]) return !1;
        delete p[e]
    }
    var h = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(l, e);
        var t, n, r, o, i, a = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
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
            }(this, l), a.apply(this, arguments)
        }
        return r = l, o = [{
            key: "initialize",
            value: function(e) {
                this.waitFor(u.default, s.default), this.removeChangeListener(y), this.addChangeListener(y), p = null != e ? e : {}
            }
        }, {
            key: "getState",
            value: function() {
                return p
            }
        }, {
            key: "isCollapsed",
            value: function(e) {
                return null != e && "null" !== e && !!p[e] && p[e]
            }
        }, {
            key: "getCollapsedCategories",
            value: function() {
                return p
            }
        }, {
            key: "version",
            get: function() {
                return m
            }
        }], f(r.prototype, o), i && f(r, i), l
    }(o.default.PersistedStore);
    d(h, "displayName", "CategoryCollapseStore"), d(h, "persistKey", "collapsedCategories"), t.default = new h(i.default, {
        CONNECTION_OPEN: function(e) {
            !e.userGuildSettings.partial && (p = {});
            var t = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, i = e.userGuildSettings.entries[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                    var a = o.value;
                    if (null != a.channel_overrides) {
                        var u = !0,
                            s = !1,
                            l = void 0;
                        try {
                            for (var c, f = a.channel_overrides[Symbol.iterator](); !(u = (c = f.next()).done); u = !0) {
                                var d = c.value;
                                d.collapsed ? p[d.channel_id] = !0 : delete p[d.channel_id]
                            }
                        } catch (e) {
                            s = !0, l = e
                        } finally {
                            try {
                                !u && null != f.return && f.return()
                            } finally {
                                if (s) throw l
                            }
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
        },
        USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
            var t = e.userGuildSettings,
                n = new Set(t.map(function(e) {
                    return e.guild_id
                }).filter(a.isNotNullish));
            for (var r in p) {
                var o = u.default.getChannel(r);
                null != o && null != o.guild_id && n.has(o.guild_id) && delete p[o.id]
            }
            var i = !0,
                s = !1,
                l = void 0;
            try {
                for (var c, f = t[Symbol.iterator](); !(i = (c = f.next()).done); i = !0) {
                    var d = c.value,
                        _ = !0,
                        E = !1,
                        m = void 0;
                    try {
                        for (var y, I = d.channel_overrides[Symbol.iterator](); !(_ = (y = I.next()).done); _ = !0) {
                            var h = y.value;
                            h.collapsed && (p[h.channel_id] = !0)
                        }
                    } catch (e) {
                        E = !0, m = e
                    } finally {
                        try {
                            !_ && null != I.return && I.return()
                        } finally {
                            if (E) throw m
                        }
                    }
                }
            } catch (e) {
                s = !0, l = e
            } finally {
                try {
                    !i && null != f.return && f.return()
                } finally {
                    if (s) throw l
                }
            }
        },
        CATEGORY_COLLAPSE: function(e) {
            var t = e.id;
            if (p[t]) return !1;
            p[t] = !0
        },
        CATEGORY_EXPAND: function(e) {
            return I(e.id)
        },
        CATEGORY_COLLAPSE_ALL: function(e) {
            var t = e.guildId;
            l.default.getChannels(t)[c.ChannelTypes.GUILD_CATEGORY].forEach(function(e) {
                var t = e.channel;
                "null" !== t.id && (p[t.id] = !0)
            })
        },
        CATEGORY_EXPAND_ALL: function(e) {
            var t = e.guildId;
            l.default.getChannels(t)[c.ChannelTypes.GUILD_CATEGORY].forEach(function(e) {
                var t = e.channel;
                delete p[t.id]
            })
        },
        CHANNEL_DELETE: function(e) {
            return I(e.channel.id)
        }
    })
}