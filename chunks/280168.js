function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    }), n("222007"), n("702976"), n("808653");
    var r = n("446674"),
        i = n("913144"),
        l = n("991170"),
        u = n("42203"),
        a = n("42887"),
        o = n("945956"),
        s = n("18494"),
        d = n("49111"),
        E = n("353927");
    let _ = new Map,
        c = null,
        I = null,
        S = null;

    function T(e, t) {
        let n = _.get(e);
        if (null == n) return !1;
        let r = n.delete(t);
        return 0 === n.size && _.delete(e), r
    }

    function f(e, t, n) {
        var r, i, l;
        let u = null !== (l = null === (i = _.get(e)) || void 0 === i ? void 0 : null === (r = i.get(t)) || void 0 === r ? void 0 : r.flags) && void 0 !== l ? l : E.SpeakingFlags.NONE;
        return (u & n) === n
    }

    function p(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = _.get(e);
        if (null == r) return !1;
        for (let [e, {
                flags: i
            }] of r)
            if ((!n || e !== c) && (i & t) === t) return !0;
        return !1
    }

    function N(e) {
        let {
            user: t,
            sessionId: n
        } = e;
        c = t.id, I = n, S = null
    }
    class A extends r.default.Store {
        initialize() {
            this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(o.default)
        }
        getSpeakingDuration(e, t) {
            var n, r;
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.MediaEngineContextTypes.DEFAULT,
                l = null === (r = _.get(i)) || void 0 === r ? void 0 : null === (n = r.get(e)) || void 0 === n ? void 0 : n.since;
            return null != l ? t - l : 0
        }
        getSpeakers() {
            var e, t;
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT;
            return Array.from(null !== (t = null === (e = _.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter(e => f(n, e, E.SpeakingFlags.VOICE))
        }
        isSpeaking(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.MediaEngineContextTypes.DEFAULT;
            return f(t, e, E.SpeakingFlags.VOICE)
        }
        isPrioritySpeaker(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.MediaEngineContextTypes.DEFAULT;
            return f(t, e, E.SpeakingFlags.PRIORITY)
        }
        isSoundSharing(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.MediaEngineContextTypes.DEFAULT;
            return f(t, e, E.SpeakingFlags.SOUNDSHARE)
        }
        isAnyoneElseSpeaking() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT;
            return p(e, E.SpeakingFlags.VOICE, !0)
        }
        isCurrentUserSpeaking() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT;
            return null != c && this.isSpeaking(c, e)
        }
        isAnyonePrioritySpeaking() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT;
            return p(e, E.SpeakingFlags.VOICE | E.SpeakingFlags.PRIORITY)
        }
        isCurrentUserPrioritySpeaking() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT;
            return null != c && this.isPrioritySpeaker(c, e) && this.isSpeaking(c, e)
        }
    }
    A.displayName = "SpeakingStore";
    var R = new A(i.default, {
        CONNECTION_OPEN: N,
        OVERLAY_INITIALIZE: N,
        SPEAKING: function(e) {
            let {
                context: t,
                userId: n,
                speakingFlags: r
            } = e;
            if ((r & E.SpeakingFlags.PRIORITY) === E.SpeakingFlags.PRIORITY) {
                let e = u.default.getChannel(s.default.getVoiceChannelId());
                null != e && l.default.can({
                    permission: d.Permissions.PRIORITY_SPEAKER,
                    user: n,
                    context: e
                }) ? a.default.setCanHavePriority(n, !0) : (a.default.setCanHavePriority(n, !1), r &= ~E.SpeakingFlags.PRIORITY)
            }
            return function(e, t, n) {
                var r, i;
                let l = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E.MediaEngineContextTypes.DEFAULT,
                            t = _.get(e);
                        return null == t && (t = new Map, _.set(e, t)), t
                    }(e),
                    u = l.get(t),
                    a = null !== (r = null == u ? void 0 : u.flags) && void 0 !== r ? r : 0;
                if (0 === a && 0 === n) return !1;
                if (0 === n) l.delete(t), 0 === l.size && _.delete(e);
                else {
                    let e = null !== (i = null == u ? void 0 : u.since) && void 0 !== i ? i : null,
                        r = (a & E.SpeakingFlags.VOICE) === E.SpeakingFlags.VOICE,
                        o = (n & E.SpeakingFlags.VOICE) === E.SpeakingFlags.VOICE;
                    r !== o && (e = o ? Date.now() : null), l.set(t, {
                        flags: n,
                        since: e
                    })
                }
                return !0
            }(t, n, r)
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let {
                    userId: n,
                    channelId: r,
                    sessionId: i
                } = t, l = !1, u = S;
                return n === c && i === I && (S = null != r ? r : null), u !== S && (l = _.delete(E.MediaEngineContextTypes.DEFAULT) || l), null == r ? l = n === c && i === I ? _.delete(E.MediaEngineContextTypes.DEFAULT) || l : T(E.MediaEngineContextTypes.DEFAULT, n) || l : n === c && i !== I ? l = _.delete(E.MediaEngineContextTypes.DEFAULT) || l : n !== c && r !== o.default.getChannelId() && (l = T(E.MediaEngineContextTypes.DEFAULT, n) || l), l || e
            }, !1)
        },
        LOBBY_VOICE_STATE_UPDATE: function(e) {}
    })
}