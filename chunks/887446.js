function(e, t, n) {
    "use strict";
    let i, s, r, l;
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var o = n("748820"),
        a = n("446674"),
        u = n("913144"),
        c = n("724210"),
        d = n("515631");
    let f = {};

    function h(e) {
        return {
            guildId: e,
            sessionId: (0, o.v4)()
        }
    }

    function v(e) {
        null != r && r.guildId === e ? (s = r, r = void 0) : s = h(e)
    }
    class C extends a.default.Store {
        getSavedScrollPosition(e) {
            return f[e]
        }
        getHomeSessionId(e) {
            return null != s && s.guildId === e ? s.sessionId : null != r && r.guildId === e ? r.sessionId : void 0
        }
        getHomeSessionSource(e) {
            return null != l && l.guildId === e ? l.source : d.GuildHomeLandingSource.ORGANIC
        }
    }
    C.displayName = "GuildHomeStore";
    var E = new C(u.default, {
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
            if (null == t || null == n || !(0, c.isStaticChannelRoute)(n) || !(0, c.isGuildHomeChannel)(n)) {
                i = void 0, s = void 0, r = void 0, l = void 0;
                return
            }
            let o = (0, c.buildGuildStaticChannelId)(n, t);
            if (i === o || null != s && s.guildId === t) return !1;
            v(t), i = o, null != l && l.guildId !== t && (l = void 0)
        },
        CHANNEL_PRELOAD: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            if (null == t || null == n || !(0, c.isStaticChannelRoute)(n) || !(0, c.isGuildHomeChannel)(n)) {
                r = void 0;
                return
            }
            if (null != r && r.guildId === t) return !1;
            r = h(t)
        },
        GUILD_HOME_SET_SOURCE: function(e) {
            let {
                source: t,
                guildId: n
            } = e;
            l = {
                guildId: n,
                source: t
            }
        },
        GUILD_HOME_ENSURE_HOME_SESSION: function(e) {
            let {
                guildId: t
            } = e;
            if (null != s && s.guildId === t) return !1;
            v(t)
        },
        LOGOUT: function() {
            s = void 0, r = void 0, l = void 0
        }
    })
}