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

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var c = {},
        f = {};

    function d(e) {
        var t = e.invite,
            n = t.guild,
            r = t.approximate_presence_count;
        if ((null == n ? void 0 : n.id) == null || null == r) return !1;
        f[n.id] = r
    }
    var _ = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t)
        }(d, e);
        var t, n, r, o, i, u = (t = d, n = function() {
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

        function d() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, d), u.apply(this, arguments)
        }
        return r = d, o = [{
            key: "getMemberCounts",
            value: function() {
                return c
            }
        }, {
            key: "getMemberCount",
            value: function(e) {
                return null != e ? c[e] : null
            }
        }, {
            key: "getOnlineCount",
            value: function(e) {
                return null != e ? f[e] : null
            }
        }], a(r.prototype, o), i && a(r, i), d
    }(o.default.Store);
    u(_, "displayName", "GuildMemberCountStore"), t.default = new _(i.default, {
        CONNECTION_OPEN: function(e) {
            var t = e.guilds;
            c = {}, t.forEach(function(e) {
                c[e.id] = e.member_count
            })
        },
        OVERLAY_INITIALIZE: function(e) {
            c = function(e) {
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
            }({}, e.guildMemberCounts)
        },
        GUILD_CREATE: function(e) {
            var t = e.guild;
            c[t.id] = t.member_count
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            if (null == c[t.id] && null == f[t.id]) return !1;
            delete c[t.id], delete f[t.id]
        },
        GUILD_MEMBER_LIST_UPDATE: function(e) {
            var t = e.guildId,
                n = e.memberCount,
                r = e.onlineCount,
                o = !1;
            return c[t] !== n && (c[t] = n, o = !0), f[t] !== r && (f[t] = r, o = !0), o
        },
        INVITE_ACCEPT_SUCCESS: d,
        INVITE_RESOLVE_SUCCESS: d,
        ONLINE_GUILD_MEMBER_COUNT_UPDATE: function(e) {
            var t = e.guildId,
                n = e.count;
            if (null == t || null == n) return !1;
            f[t] = n
        }
    })
}