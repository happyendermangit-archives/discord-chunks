function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("724458");
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("981631"),
        d = n("65154");
    let _ = null,
        c = null,
        E = {};

    function I(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = E[e];
        if (null == i) return;
        let r = i[null != t ? t : u.NULL_STRING_GUILD_ID];
        if (null != r) {
            for (let e of Object.values(d.MediaEngineContextTypes))(n === e || null == n) && delete r[e];
            E[e][null != t ? t : u.NULL_STRING_GUILD_ID] = r
        }
    }
    class T extends(i = o.default.Store) {
        getStreamId(e, t) {
            var n, i, r;
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.MediaEngineContextTypes.DEFAULT;
            return null === (r = E[e]) || void 0 === r ? void 0 : null === (i = r[null != t ? t : u.NULL_STRING_GUILD_ID]) || void 0 === i ? void 0 : null === (n = i[s]) || void 0 === n ? void 0 : n.streamId
        }
        getUserStreamData(e, t) {
            var n, i;
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.MediaEngineContextTypes.DEFAULT;
            return null === (i = E[e]) || void 0 === i ? void 0 : null === (n = i[null != t ? t : u.NULL_STRING_GUILD_ID]) || void 0 === n ? void 0 : n[r]
        }
    }
    a = "VideoStreamStore", (s = "displayName") in(r = T) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new T(l.default, {
        CONNECTION_OPEN: function(e) {
            let {
                user: t,
                sessionId: n
            } = e;
            _ = t.id, c = n
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                user: t,
                sessionId: n
            } = e;
            _ = t.id, c = n
        },
        RTC_CONNECTION_VIDEO: function(e) {
            let {
                userId: t,
                guildId: n,
                streamId: i,
                context: r
            } = e;
            null != i ? ! function(e, t, n, i) {
                var r;
                !(e in E) && (E[e] = {});
                let s = null !== (r = E[e][null != t ? t : u.NULL_STRING_GUILD_ID]) && void 0 !== r ? r : {};
                E[e][null != t ? t : u.NULL_STRING_GUILD_ID] = {
                    ...s,
                    [i]: {
                        streamId: n
                    }
                }
            }(t, n, i, r) : I(t, n, r)
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                var n;
                let {
                    userId: i,
                    sessionId: r,
                    channelId: s,
                    guildId: a
                } = t;
                if (null == s && i === _) {
                    if (r !== c) return e;
                    E = {}
                } else {
                    if (null != s || (null === (n = E[i]) || void 0 === n ? void 0 : n[null != a ? a : u.NULL_STRING_GUILD_ID]) == null) return e;
                    I(i, a)
                }
                return !0
            }, !1)
        }
    })
}