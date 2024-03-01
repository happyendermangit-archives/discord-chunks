function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    }), n("808653"), n("222007");
    var s = n("917351"),
        a = n.n(s),
        o = n("446674"),
        l = n("913144"),
        u = n("628454"),
        c = n("299039"),
        d = n("49111"),
        f = n("99795");
    let E = 0,
        p = 0,
        h = {},
        _ = {},
        S = {},
        m = {},
        T = {};

    function g(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function I(e, t) {
        let n = e[t];
        return null == n && (n = {}, e[t] = n), n
    }

    function C(e) {
        var t;
        let n = null !== (t = h[d.ME]) && void 0 !== t ? t : {},
            i = {};
        a.each(n, (t, n) => {
            t.channelId !== e && (i[n] = t)
        }), h[d.ME] = i
    }

    function v(e, t, n) {
        let i = I(h, null != e ? e : d.ME),
            r = i[t],
            s = n(r);
        return r === s ? [!1, s, r] : (null != r && (delete i[t], null != r.channelId && (delete I(_, r.channelId)[t], delete I(S, r.channelId)[t]), null != r.sessionId && delete I(m, t)[r.sessionId]), null != s && (i[t] = s, null != s.channelId && (I(_, s.channelId)[t] = s, s.selfVideo && (I(S, s.channelId)[t] = s)), null != s.sessionId && (I(m, t)[s.sessionId] = s)), [!0, s, r])
    }

    function A(e, t) {
        return v(e, t.userId, e => {
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

    function R(e) {
        let {
            guild: t
        } = e;
        a.forEach(h[t.id], e => {
            v(t.id, e.userId, () => null)
        }), delete h[t.id]
    }
    class N extends o.default.Store {
        getAllVoiceStates() {
            return h
        }
        getVoiceStateVersion() {
            return p
        }
        getVoiceStates(e) {
            return I(h, null != e ? e : d.ME)
        }
        getVoiceStatesForChannel(e) {
            return I(_, e)
        }
        getVideoVoiceStatesForChannel(e) {
            return I(S, e)
        }
        getVoiceState(e, t) {
            return this.getVoiceStates(e)[t]
        }
        getVoiceStateForChannel(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
            return null === (t = I(_, e)) || void 0 === t ? void 0 : t[n]
        }
        getVoiceStateForUser(e) {
            return Object.values(I(m, e))[0]
        }
        getVoiceStateForSession(e, t) {
            var n;
            return null != t ? null === (n = I(m, e)) || void 0 === n ? void 0 : n[t] : null
        }
        getUserVoiceChannelId(e, t) {
            var n;
            return null === (n = this.getVoiceState(e, t)) || void 0 === n ? void 0 : n.channelId
        }
        getCurrentClientVoiceChannelId(e) {
            let t = this.getVoiceState(e, i);
            return null != t && null != r && t.sessionId === r ? t.channelId : null
        }
        isCurrentClientInVoiceChannel() {
            var e;
            return null != r && (null === (e = m[i]) || void 0 === e ? void 0 : e[r]) != null
        }
        isInChannel(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
            if (null == e) return !1;
            let n = this.getVoiceStateForChannel(e, t);
            return null != n && (t !== i || null != r && n.sessionId === r)
        }
        hasVideo(e) {
            return Object.values(I(S, e)).length > 0
        }
        getVoicePlatformForChannel(e, t) {
            var n, s;
            let a = null != r && (null === (s = m[i]) || void 0 === s ? void 0 : null === (n = s[r]) || void 0 === n ? void 0 : n.channelId);
            return t === i && e === a ? f.VoicePlatforms.DESKTOP : T[g(t, e)]
        }
        get userHasBeenMovedVersion() {
            return E
        }
    }
    N.displayName = "VoiceStateStore";
    var O = new N(l.default, {
        CONNECTION_OPEN: function(e) {
            let {
                user: t,
                sessionId: n
            } = e;
            h = {}, _ = {}, m = {}, S = {}, i = t.id, r = n
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                voiceStates: t,
                user: n,
                sessionId: s
            } = e;
            for (let [e, n] of(h = {}, _ = {}, m = {}, S = {}, Object.entries(t)))
                for (let [t, i] of Object.entries(n)) v(e, t, () => new u.default(i));
            i = n.id, r = s
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e, [r] = v(t, i, e => null == e ? void 0 : e.set("channelId", n));
            return r
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let [n, i, s] = A(t.guildId, t);
                return n ? (t.sessionId === r && null != i && null != s && s.channelId !== i.channelId && (E += 1), p++, !0) : e
            }, !1)
        },
        GUILD_DELETE: R,
        GUILD_CREATE: R,
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            C(t.id)
        },
        CALL_DELETE: function(e) {
            let {
                channelId: t
            } = e;
            C(t)
        },
        PASSIVE_UPDATE_V1: function(e) {
            var t, n;
            let i = !1,
                r = c.default.keys(null !== (t = h[e.guildId]) && void 0 !== t ? t : {}),
                s = new Set(r);
            for (let t of null !== (n = e.voiceStates) && void 0 !== n ? n : []) {
                let [n] = A(e.guildId, t);
                i = i || n, s.delete(t.userId)
            }
            for (let t of s) v(e.guildId, t, () => null), i = !0;
            return i && p++, i
        },
        RTC_CONNECTION_PLATFORM: function(e) {
            let {
                userId: t,
                channelId: n,
                platform: i
            } = e;
            T[g(t, n)] = i
        }
    })
}