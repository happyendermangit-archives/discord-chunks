function(e, t, n) {
    "use strict";
    let i, s;
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    }), n("808653"), n("222007");
    var r = n("917351"),
        a = n.n(r),
        o = n("446674"),
        l = n("913144"),
        u = n("628454"),
        d = n("299039"),
        c = n("49111"),
        _ = n("99795");
    let f = 0,
        E = 0,
        h = {},
        g = {},
        m = {},
        p = {},
        S = {};

    function v(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function T(e, t) {
        let n = e[t];
        return null == n && (n = {}, e[t] = n), n
    }

    function I(e) {
        var t;
        let n = null !== (t = h[c.ME]) && void 0 !== t ? t : {},
            i = {};
        a.each(n, (t, n) => {
            t.channelId !== e && (i[n] = t)
        }), h[c.ME] = i
    }

    function A(e, t, n) {
        let i = T(h, null != e ? e : c.ME),
            s = i[t],
            r = n(s);
        return s === r ? [!1, r, s] : (null != s && (delete i[t], null != s.channelId && (delete T(g, s.channelId)[t], delete T(m, s.channelId)[t]), null != s.sessionId && delete T(p, t)[s.sessionId]), null != r && (i[t] = r, null != r.channelId && (T(g, r.channelId)[t] = r, r.selfVideo && (T(m, r.channelId)[t] = r)), null != r.sessionId && (T(p, t)[r.sessionId] = r)), [!0, r, s])
    }

    function C(e, t) {
        return A(e, t.userId, e => {
            if (null == t.channelId) return null;
            {
                let n = {
                    channelId: t.channelId,
                    deaf: t.deaf,
                    mute: t.mute,
                    requestToSpeakTimestamp: t.requestToSpeakTimestamp,
                    selfDeaf: t.selfDeaf,
                    selfMute: t.selfMute,
                    selfStream: t.selfStream,
                    selfVideo: t.selfVideo,
                    sessionId: t.sessionId,
                    suppress: t.suppress,
                    userId: t.userId
                };
                return null != e ? e.merge(n) : new u.default(n)
            }
        })
    }

    function y(e) {
        let {
            guild: t
        } = e;
        a.forEach(h[t.id], e => {
            A(t.id, e.userId, () => null)
        }), delete h[t.id]
    }
    class N extends o.default.Store {
        getAllVoiceStates() {
            return h
        }
        getVoiceStateVersion() {
            return E
        }
        getVoiceStates(e) {
            return T(h, null != e ? e : c.ME)
        }
        getVoiceStatesForChannel(e) {
            return T(g, e)
        }
        getVideoVoiceStatesForChannel(e) {
            return T(m, e)
        }
        getVoiceState(e, t) {
            return this.getVoiceStates(e)[t]
        }
        getVoiceStateForChannel(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
            return null === (t = T(g, e)) || void 0 === t ? void 0 : t[n]
        }
        getVoiceStateForUser(e) {
            return Object.values(T(p, e))[0]
        }
        getVoiceStateForSession(e, t) {
            var n;
            return null != t ? null === (n = T(p, e)) || void 0 === n ? void 0 : n[t] : null
        }
        getUserVoiceChannelId(e, t) {
            var n;
            return null === (n = this.getVoiceState(e, t)) || void 0 === n ? void 0 : n.channelId
        }
        getCurrentClientVoiceChannelId(e) {
            let t = this.getVoiceState(e, i);
            return null != t && null != s && t.sessionId === s ? t.channelId : null
        }
        isCurrentClientInVoiceChannel() {
            var e;
            return null != s && (null === (e = p[i]) || void 0 === e ? void 0 : e[s]) != null
        }
        isInChannel(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
            if (null == e) return !1;
            let n = this.getVoiceStateForChannel(e, t);
            return null != n && (t !== i || null != s && n.sessionId === s)
        }
        hasVideo(e) {
            return Object.values(T(m, e)).length > 0
        }
        getVoicePlatformForChannel(e, t) {
            var n, r;
            let a = null != s && (null === (r = p[i]) || void 0 === r ? void 0 : null === (n = r[s]) || void 0 === n ? void 0 : n.channelId);
            return t === i && e === a ? _.VoicePlatforms.DESKTOP : S[v(t, e)]
        }
        get userHasBeenMovedVersion() {
            return f
        }
    }
    N.displayName = "VoiceStateStore";
    var R = new N(l.default, {
        CONNECTION_OPEN: function(e) {
            let {
                user: t,
                sessionId: n
            } = e, r = null != i && i !== t.id;
            return r && (h = {}, g = {}, p = {}, m = {}), i = t.id, s = n, r
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function() {
            h = {}, g = {}, p = {}, m = {}
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                voiceStates: t,
                user: n,
                sessionId: r
            } = e;
            for (let [e, n] of(h = {}, g = {}, p = {}, m = {}, Object.entries(t)))
                for (let [t, i] of Object.entries(n)) A(e, t, () => new u.default(i));
            i = n.id, s = r
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e, [s] = A(t, i, e => null == e ? void 0 : e.set("channelId", n));
            return s
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let [n, i, r] = C(t.guildId, t);
                return n ? (t.sessionId === s && null != i && null != r && r.channelId !== i.channelId && (f += 1), E++, !0) : e
            }, !1)
        },
        GUILD_DELETE: y,
        GUILD_CREATE: y,
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            I(t.id)
        },
        CALL_DELETE: function(e) {
            let {
                channelId: t
            } = e;
            I(t)
        },
        PASSIVE_UPDATE_V1: function(e) {
            var t, n;
            let i = !1,
                s = d.default.keys(null !== (t = h[e.guildId]) && void 0 !== t ? t : {}),
                r = new Set(s);
            for (let t of null !== (n = e.voiceStates) && void 0 !== n ? n : []) {
                let [n] = C(e.guildId, t);
                i = i || n, r.delete(t.userId)
            }
            for (let t of r) A(e.guildId, t, () => null), i = !0;
            return i && E++, i
        },
        RTC_CONNECTION_PLATFORM: function(e) {
            let {
                userId: t,
                channelId: n,
                platform: i
            } = e;
            S[v(t, n)] = i
        }
    })
}