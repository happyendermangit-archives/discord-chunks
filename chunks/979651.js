function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("47120"), n("724458");
    var s, a, o, l, u = n("392711"),
        d = n.n(u),
        _ = n("442837"),
        c = n("570140"),
        E = n("189786"),
        I = n("709054"),
        T = n("981631"),
        f = n("354459");
    let S = 0,
        h = 0,
        A = {},
        m = new Set,
        N = new Map,
        p = {},
        O = {},
        R = {},
        C = {};

    function g(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function L(e, t) {
        let n = e[t];
        return null == n && (n = {}, e[t] = n), n
    }

    function v(e) {
        var t;
        let n = null !== (t = A[T.ME]) && void 0 !== t ? t : {},
            i = {};
        d().each(n, (t, n) => {
            t.channelId !== e && (i[n] = t)
        }), A[T.ME] = i
    }

    function D(e) {
        var t;
        return null !== (t = N.get(e)) && void 0 !== t ? t : new Set
    }

    function M(e, t, n) {
        var i, r, s, a;
        let o = L(A, null != e ? e : T.ME),
            l = o[t],
            u = n(l);
        if (l === u) return [!1, u, l];
        if (null != l) {
            ;
            let n;
            delete o[t], null != l.channelId && (delete L(p, l.channelId)[t], delete L(O, l.channelId)[t]), null != l.sessionId && delete L(R, t)[l.sessionId];
            i = null != e ? e : T.ME, r = t, !(n = D(i)).has(r) || ((n = new Set(n)).delete(r), 0 === n.size ? N.delete(i) : N.set(i, n))
        }
        if (null != u) {
            if (o[t] = u, null != u.channelId && (L(p, u.channelId)[t] = u, u.selfVideo)) {
                ;
                let n;
                L(O, u.channelId)[t] = u;
                s = null != e ? e : T.ME, a = t, (n = D(s)).has(a) || ((n = new Set(n)).add(a), N.set(s, n))
            }
            null != u.sessionId && (L(R, t)[u.sessionId] = u)
        }
        return [!0, u, l]
    }

    function y(e, t) {
        return M(e, t.userId, e => {
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
                return null != e ? e.merge(n) : new E.default(n)
            }
        })
    }

    function P(e) {
        let {
            guild: t
        } = e;
        d().forEach(A[t.id], e => {
            M(t.id, e.userId, () => null)
        }), delete A[t.id]
    }
    class U extends(s = _.default.Store) {
        getAllVoiceStates() {
            return A
        }
        getVoiceStateVersion() {
            return h
        }
        getVoiceStates(e) {
            return L(A, null != e ? e : T.ME)
        }
        getVoiceStatesForChannel(e) {
            return L(p, e)
        }
        getVideoVoiceStatesForChannel(e) {
            return L(O, e)
        }
        getVoiceState(e, t) {
            return this.getVoiceStates(e)[t]
        }
        getVoiceStateForChannel(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
            return null === (t = L(p, e)) || void 0 === t ? void 0 : t[n]
        }
        getVoiceStateForUser(e) {
            return Object.values(L(R, e))[0]
        }
        getVoiceStateForSession(e, t) {
            var n;
            return null != t ? null === (n = L(R, e)) || void 0 === n ? void 0 : n[t] : null
        }
        getUserVoiceChannelId(e, t) {
            var n;
            return null === (n = this.getVoiceState(e, t)) || void 0 === n ? void 0 : n.channelId
        }
        getCurrentClientVoiceChannelId(e) {
            let t = this.getVoiceState(e, i);
            return null != t && null != r && t.sessionId === r ? t.channelId : null
        }
        getUsersWithVideo(e) {
            var t;
            return null !== (t = N.get(e)) && void 0 !== t ? t : m
        }
        isCurrentClientInVoiceChannel() {
            var e;
            return null != r && (null === (e = R[i]) || void 0 === e ? void 0 : e[r]) != null
        }
        isInChannel(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
            if (null == e) return !1;
            let n = this.getVoiceStateForChannel(e, t);
            return null != n && (t !== i || null != r && n.sessionId === r)
        }
        hasVideo(e) {
            return Object.values(L(O, e)).length > 0
        }
        getVoicePlatformForChannel(e, t) {
            var n, s;
            let a = null != r && (null === (s = R[i]) || void 0 === s ? void 0 : null === (n = s[r]) || void 0 === n ? void 0 : n.channelId);
            return t === i && e === a ? f.VoicePlatforms.DESKTOP : C[g(t, e)]
        }
        get userHasBeenMovedVersion() {
            return S
        }
    }
    l = "VoiceStateStore", (o = "displayName") in(a = U) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new U(c.default, {
        CONNECTION_OPEN: function(e) {
            let {
                user: t,
                sessionId: n
            } = e, s = null != i && i !== t.id;
            return s && (A = {}, p = {}, R = {}, O = {}, N.clear()), i = t.id, r = n, s
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function() {
            A = {}, p = {}, R = {}, O = {}, N.clear()
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                voiceStates: t,
                user: n,
                sessionId: s
            } = e;
            for (let [e, n] of(A = {}, p = {}, R = {}, O = {}, Object.entries(t)))
                for (let [t, i] of Object.entries(n)) M(e, t, () => new E.default(i));
            i = n.id, r = s
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e, [r] = M(t, i, e => null == e ? void 0 : e.set("channelId", n));
            return r
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let [n, i, s] = y(t.guildId, t);
                return n ? (t.sessionId === r && null != i && null != s && s.channelId !== i.channelId && (S += 1), h++, !0) : e
            }, !1)
        },
        GUILD_DELETE: P,
        GUILD_CREATE: P,
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            v(t.id)
        },
        CALL_DELETE: function(e) {
            let {
                channelId: t
            } = e;
            v(t)
        },
        PASSIVE_UPDATE_V1: function(e) {
            var t, n;
            let i = !1,
                r = I.default.keys(null !== (t = A[e.guildId]) && void 0 !== t ? t : {}),
                s = new Set(r);
            for (let t of null !== (n = e.voiceStates) && void 0 !== n ? n : []) {
                let [n] = y(e.guildId, t);
                i = i || n, s.delete(t.userId)
            }
            for (let t of s) M(e.guildId, t, () => null), i = !0;
            return i && h++, i
        },
        RTC_CONNECTION_PLATFORM: function(e) {
            let {
                userId: t,
                channelId: n,
                platform: i
            } = e;
            C[g(t, n)] = i
        }
    })
}