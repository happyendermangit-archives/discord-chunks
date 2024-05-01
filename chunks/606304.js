function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("789020"), n("724458");
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("700785"),
        d = n("592125"),
        _ = n("131951"),
        c = n("19780"),
        E = n("944486"),
        I = n("981631"),
        T = n("65154");
    let f = new Map,
        S = null,
        h = null,
        A = null;

    function m(e, t) {
        let n = f.get(e);
        if (null == n) return !1;
        let i = n.delete(t);
        return 0 === n.size && f.delete(e), i
    }

    function N(e, t, n) {
        var i, r, a;
        return ((null !== (a = null === (r = f.get(e)) || void 0 === r ? void 0 : null === (i = r.get(t)) || void 0 === i ? void 0 : i.flags) && void 0 !== a ? a : T.SpeakingFlags.NONE) & n) === n
    }

    function p(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = f.get(e);
        if (null == i) return !1;
        for (let [e, {
                flags: r
            }] of i)
            if ((!n || e !== S) && (r & t) === t) return !0;
        return !1
    }

    function O(e) {
        let {
            user: t,
            sessionId: n
        } = e;
        S = t.id, h = n, A = null
    }
    class R extends(i = o.default.Store) {
        initialize() {
            this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(c.default)
        }
        getSpeakingDuration(e, t) {
            var n, i;
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.MediaEngineContextTypes.DEFAULT,
                a = null === (i = f.get(r)) || void 0 === i ? void 0 : null === (n = i.get(e)) || void 0 === n ? void 0 : n.since;
            return null != a ? t - a : 0
        }
        getSpeakers() {
            var e, t;
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.MediaEngineContextTypes.DEFAULT;
            return Array.from(null !== (t = null === (e = f.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter(e => N(n, e, T.SpeakingFlags.VOICE))
        }
        isSpeaking(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.MediaEngineContextTypes.DEFAULT;
            return N(t, e, T.SpeakingFlags.VOICE)
        }
        isPrioritySpeaker(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.MediaEngineContextTypes.DEFAULT;
            return N(t, e, T.SpeakingFlags.PRIORITY)
        }
        isSoundSharing(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.MediaEngineContextTypes.DEFAULT;
            return N(t, e, T.SpeakingFlags.SOUNDSHARE)
        }
        isAnyoneElseSpeaking() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.MediaEngineContextTypes.DEFAULT;
            return p(e, T.SpeakingFlags.VOICE, !0)
        }
        isCurrentUserSpeaking() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.MediaEngineContextTypes.DEFAULT;
            return null != S && this.isSpeaking(S, e)
        }
        isAnyonePrioritySpeaking() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.MediaEngineContextTypes.DEFAULT;
            return p(e, T.SpeakingFlags.VOICE | T.SpeakingFlags.PRIORITY)
        }
        isCurrentUserPrioritySpeaking() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.MediaEngineContextTypes.DEFAULT;
            return null != S && this.isPrioritySpeaker(S, e) && this.isSpeaking(S, e)
        }
    }
    s = "SpeakingStore", (a = "displayName") in(r = R) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new R(l.default, {
        CONNECTION_OPEN: O,
        OVERLAY_INITIALIZE: O,
        SPEAKING: function(e) {
            let {
                context: t,
                userId: n,
                speakingFlags: i
            } = e;
            if ((i & T.SpeakingFlags.PRIORITY) === T.SpeakingFlags.PRIORITY) {
                let e = d.default.getChannel(E.default.getVoiceChannelId());
                null != e && u.can({
                    permission: I.Permissions.PRIORITY_SPEAKER,
                    user: n,
                    context: e
                }) ? _.default.setCanHavePriority(n, !0) : (_.default.setCanHavePriority(n, !1), i &= ~T.SpeakingFlags.PRIORITY)
            }
            return function(e, t, n) {
                var i, r;
                let a = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.MediaEngineContextTypes.DEFAULT,
                            t = f.get(e);
                        return null == t && (t = new Map, f.set(e, t)), t
                    }(e),
                    s = a.get(t),
                    o = null !== (i = null == s ? void 0 : s.flags) && void 0 !== i ? i : 0;
                if (0 === o && 0 === n) return !1;
                if (0 === n) a.delete(t), 0 === a.size && f.delete(e);
                else {
                    let e = null !== (r = null == s ? void 0 : s.since) && void 0 !== r ? r : null,
                        i = (o & T.SpeakingFlags.VOICE) === T.SpeakingFlags.VOICE,
                        l = (n & T.SpeakingFlags.VOICE) === T.SpeakingFlags.VOICE;
                    i !== l && (e = l ? Date.now() : null), a.set(t, {
                        flags: n,
                        since: e
                    })
                }
                return !0
            }(t, n, i)
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let {
                    userId: n,
                    channelId: i,
                    sessionId: r
                } = t, a = !1, s = A;
                return n === S && r === h && (A = null != i ? i : null), s !== A && (a = f.delete(T.MediaEngineContextTypes.DEFAULT) || a), null == i ? a = n === S && r === h ? f.delete(T.MediaEngineContextTypes.DEFAULT) || a : m(T.MediaEngineContextTypes.DEFAULT, n) || a : n === S && r !== h ? a = f.delete(T.MediaEngineContextTypes.DEFAULT) || a : n !== S && i !== c.default.getChannelId() && (a = m(T.MediaEngineContextTypes.DEFAULT, n) || a), a || e
            }, !1)
        }
    })
}