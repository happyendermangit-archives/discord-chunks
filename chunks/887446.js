function(e, _, E) {
    "use strict";
    let t, o, n, r;
    E.r(_), E.d(_, {
        default: function() {
            return R
        }
    });
    var a = E("748820"),
        i = E("446674"),
        I = E("913144"),
        s = E("724210"),
        T = E("515631");
    let S = {};

    function N(e) {
        return {
            guildId: e,
            sessionId: (0, a.v4)()
        }
    }

    function O(e) {
        null != n && n.guildId === e ? (o = n, n = void 0) : o = N(e)
    }
    class A extends i.default.Store {
        getSavedScrollPosition(e) {
            return S[e]
        }
        getHomeSessionId(e) {
            return null != o && o.guildId === e ? o.sessionId : null != n && n.guildId === e ? n.sessionId : void 0
        }
        getHomeSessionSource(e) {
            return null != r && r.guildId === e ? r.source : T.GuildHomeLandingSource.ORGANIC
        }
    }
    A.displayName = "GuildHomeStore";
    var R = new A(I.default, {
        CONNECTION_OPEN: function() {
            S = {}
        },
        GUILD_FEED_FETCH_FRESH_START: function(e) {
            let {
                guildId: _
            } = e;
            delete S[_]
        },
        GUILD_HOME_SET_SCROLL_POSITION: function(e) {
            let {
                guildId: _,
                scrollPosition: E
            } = e;
            S[_] = E
        },
        CHANNEL_SELECT: function(e) {
            let {
                guildId: _,
                channelId: E
            } = e;
            if (null == _ || null == E || !(0, s.isStaticChannelRoute)(E) || !(0, s.isGuildHomeChannel)(E)) {
                t = void 0, o = void 0, n = void 0, r = void 0;
                return
            }
            let a = (0, s.buildGuildStaticChannelId)(E, _);
            if (t === a || null != o && o.guildId === _) return !1;
            O(_), t = a, null != r && r.guildId !== _ && (r = void 0)
        },
        CHANNEL_PRELOAD: function(e) {
            let {
                guildId: _,
                channelId: E
            } = e;
            if (null == _ || null == E || !(0, s.isStaticChannelRoute)(E) || !(0, s.isGuildHomeChannel)(E)) {
                n = void 0;
                return
            }
            if (null != n && n.guildId === _) return !1;
            n = N(_)
        },
        GUILD_HOME_SET_SOURCE: function(e) {
            let {
                source: _,
                guildId: E
            } = e;
            r = {
                guildId: E,
                source: _
            }
        },
        GUILD_HOME_ENSURE_HOME_SESSION: function(e) {
            let {
                guildId: _
            } = e;
            if (null != o && o.guildId === _) return !1;
            O(_)
        },
        LOGOUT: function() {
            o = void 0, n = void 0, r = void 0
        }
    })
}