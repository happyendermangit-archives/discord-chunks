function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l, c, f = n("153832"),
        d = n("898511"),
        _ = n("629815"),
        E = n("928204"),
        p = n("539835");

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var h = {};

    function O(e) {
        return {
            guildId: e,
            sessionId: (0, f.v4)()
        }
    }

    function T(e) {
        null != s && s.guildId === e ? (u = s, s = void 0) : u = O(e)
    }
    var S = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && I(e, t)
        }(c, e);
        var t, n, r, o, i, a = (t = c, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = y(t);
            if (n) {
                var a = y(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function c() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), a.apply(this, arguments)
        }
        return r = c, o = [{
            key: "getSavedScrollPosition",
            value: function(e) {
                return h[e]
            }
        }, {
            key: "getHomeSessionId",
            value: function(e) {
                return null != u && u.guildId === e ? u.sessionId : null != s && s.guildId === e ? s.sessionId : void 0
            }
        }, {
            key: "getHomeSessionSource",
            value: function(e) {
                return null != l && l.guildId === e ? l.source : p.GuildHomeLandingSource.ORGANIC
            }
        }], m(r.prototype, o), i && m(r, i), c
    }(d.default.Store);
    i = "GuildHomeStore", (o = "displayName") in(r = S) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new S(_.default, {
        CONNECTION_OPEN: function() {
            h = {}
        },
        GUILD_FEED_FETCH_FRESH_START: function(e) {
            var t = e.guildId;
            delete h[t]
        },
        GUILD_HOME_SET_SCROLL_POSITION: function(e) {
            var t = e.guildId,
                n = e.scrollPosition;
            h[t] = n
        },
        CHANNEL_SELECT: function(e) {
            var t = e.guildId,
                n = e.channelId;
            if (null == t || null == n || !(0, E.isStaticChannelRoute)(n) || !(0, E.isGuildHomeChannel)(n)) {
                a = void 0, u = void 0, s = void 0, l = void 0;
                return
            }
            var r = (0, E.buildGuildStaticChannelId)(n, t);
            if (a === r || null != u && u.guildId === t) return !1;
            T(t), a = r, null != l && l.guildId !== t && (l = void 0)
        },
        CHANNEL_PRELOAD: function(e) {
            var t = e.guildId,
                n = e.channelId;
            if (null == t || null == n || !(0, E.isStaticChannelRoute)(n) || !(0, E.isGuildHomeChannel)(n)) {
                s = void 0;
                return
            }
            if (null != s && s.guildId === t) return !1;
            s = O(t)
        },
        GUILD_HOME_SET_SOURCE: function(e) {
            var t = e.source;
            l = {
                guildId: e.guildId,
                source: t
            }
        },
        GUILD_HOME_ENSURE_HOME_SESSION: function(e) {
            var t = e.guildId;
            if (null != u && u.guildId === t) return !1;
            T(t)
        },
        LOGOUT: function() {
            u = void 0, s = void 0, l = void 0
        }
    })
}