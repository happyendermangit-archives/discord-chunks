function(e, t, n) {
    "use strict";
    let i, r, a, s;
    n.r(t);
    var o, l, u, d, _ = n("153832"),
        c = n("442837"),
        E = n("570140"),
        I = n("176505"),
        T = n("369701");
    let f = {};

    function S(e) {
        return {
            guildId: e,
            sessionId: (0, _.v4)()
        }
    }

    function h(e) {
        null != a && a.guildId === e ? (r = a, a = void 0) : r = S(e)
    }
    class A extends(d = c.default.Store) {
        getSavedScrollPosition(e) {
            return f[e]
        }
        getHomeSessionId(e) {
            return null != r && r.guildId === e ? r.sessionId : null != a && a.guildId === e ? a.sessionId : void 0
        }
        getHomeSessionSource(e) {
            return null != s && s.guildId === e ? s.source : T.GuildHomeLandingSource.ORGANIC
        }
    }
    u = "GuildHomeStore", (l = "displayName") in(o = A) ? Object.defineProperty(o, l, {
        value: u,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[l] = u, t.default = new A(E.default, {
        CONNECTION_OPEN: function() {
            f = {}
        },
        GUILD_FEED_FETCH_FRESH_START: function(e) {
            let {
                guildId: t
            } = e;
            delete f[t]
        },
        GUILD_HOME_SET_SCROLL_POSITION: function(e) {
            let {
                guildId: t,
                scrollPosition: n
            } = e;
            f[t] = n
        },
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            if (null == t || null == n || !(0, I.isStaticChannelRoute)(n) || !(0, I.isGuildHomeChannel)(n)) {
                i = void 0, r = void 0, a = void 0, s = void 0;
                return
            }
            let o = (0, I.buildGuildStaticChannelId)(n, t);
            if (i === o || null != r && r.guildId === t) return !1;
            h(t), i = o, null != s && s.guildId !== t && (s = void 0)
        },
        CHANNEL_PRELOAD: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            if (null == t || null == n || !(0, I.isStaticChannelRoute)(n) || !(0, I.isGuildHomeChannel)(n)) {
                a = void 0;
                return
            }
            if (null != a && a.guildId === t) return !1;
            a = S(t)
        },
        GUILD_HOME_SET_SOURCE: function(e) {
            let {
                source: t,
                guildId: n
            } = e;
            s = {
                guildId: n,
                source: t
            }
        },
        GUILD_HOME_ENSURE_HOME_SESSION: function(e) {
            let {
                guildId: t
            } = e;
            if (null != r && r.guildId === t) return !1;
            h(t)
        },
        LOGOUT: function() {
            r = void 0, a = void 0, s = void 0
        }
    })
}