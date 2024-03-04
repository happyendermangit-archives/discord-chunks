function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007"), n("808653");
    var i = n("446674"),
        s = n("913144"),
        r = n("49111"),
        a = n("353927");
    let o = null,
        l = null,
        u = {};

    function d(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = u[e];
        if (null == i) return;
        let s = i[null != t ? t : r.NULL_STRING_GUILD_ID];
        if (null != s) {
            for (let e of Object.values(a.MediaEngineContextTypes))(n === e || null == n) && delete s[e];
            u[e][null != t ? t : r.NULL_STRING_GUILD_ID] = s
        }
    }
    class c extends i.default.Store {
        getStreamId(e, t) {
            var n, i, s;
            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.MediaEngineContextTypes.DEFAULT;
            return null === (s = u[e]) || void 0 === s ? void 0 : null === (i = s[null != t ? t : r.NULL_STRING_GUILD_ID]) || void 0 === i ? void 0 : null === (n = i[o]) || void 0 === n ? void 0 : n.streamId
        }
        getUserStreamData(e, t) {
            var n, i;
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.MediaEngineContextTypes.DEFAULT;
            return null === (i = u[e]) || void 0 === i ? void 0 : null === (n = i[null != t ? t : r.NULL_STRING_GUILD_ID]) || void 0 === n ? void 0 : n[s]
        }
    }
    c.displayName = "VideoStreamStore";
    var f = new c(s.default, {
        CONNECTION_OPEN: function(e) {
            let {
                user: t,
                sessionId: n
            } = e;
            o = t.id, l = n
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                user: t,
                sessionId: n
            } = e;
            o = t.id, l = n
        },
        RTC_CONNECTION_VIDEO: function(e) {
            let {
                userId: t,
                guildId: n,
                streamId: i,
                context: s
            } = e;
            null != i ? ! function(e, t, n, i) {
                var s;
                !(e in u) && (u[e] = {});
                let a = null !== (s = u[e][null != t ? t : r.NULL_STRING_GUILD_ID]) && void 0 !== s ? s : {};
                u[e][null != t ? t : r.NULL_STRING_GUILD_ID] = {
                    ...a,
                    [i]: {
                        streamId: n
                    }
                }
            }(t, n, i, s) : d(t, n, s)
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                var n;
                let {
                    userId: i,
                    sessionId: s,
                    channelId: a,
                    guildId: c
                } = t;
                if (null == a && i === o) {
                    if (s !== l) return e;
                    u = {}
                } else {
                    if (null != a || (null === (n = u[i]) || void 0 === n ? void 0 : n[null != c ? c : r.NULL_STRING_GUILD_ID]) == null) return e;
                    d(i, c)
                }
                return !0
            }, !1)
        }
    })
}