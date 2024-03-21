function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    }), n("222007"), n("702976"), n("808653");
    var i = n("446674"),
        s = n("913144"),
        r = n("991170"),
        a = n("42203"),
        o = n("42887"),
        l = n("945956"),
        u = n("18494"),
        d = n("49111"),
        c = n("353927");
    let _ = new Map,
        f = null,
        E = null,
        h = null;

    function g(e, t) {
        let n = _.get(e);
        if (null == n) return !1;
        let i = n.delete(t);
        return 0 === n.size && _.delete(e), i
    }

    function m(e, t, n) {
        var i, s, r;
        let a = null !== (r = null === (s = _.get(e)) || void 0 === s ? void 0 : null === (i = s.get(t)) || void 0 === i ? void 0 : i.flags) && void 0 !== r ? r : c.SpeakingFlags.NONE;
        return (a & n) === n
    }

    function p(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = _.get(e);
        if (null == i) return !1;
        for (let [e, {
                flags: s
            }] of i)
            if ((!n || e !== f) && (s & t) === t) return !0;
        return !1
    }

    function S(e) {
        let {
            user: t,
            sessionId: n
        } = e;
        f = t.id, E = n, h = null
    }
    class T extends i.default.Store {
        initialize() {
            this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(l.default)
        }
        getSpeakingDuration(e, t) {
            var n, i;
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.MediaEngineContextTypes.DEFAULT,
                r = null === (i = _.get(s)) || void 0 === i ? void 0 : null === (n = i.get(e)) || void 0 === n ? void 0 : n.since;
            return null != r ? t - r : 0
        }
        getSpeakers() {
            var e, t;
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.MediaEngineContextTypes.DEFAULT;
            return Array.from(null !== (t = null === (e = _.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter(e => m(n, e, c.SpeakingFlags.VOICE))
        }
        isSpeaking(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT;
            return m(t, e, c.SpeakingFlags.VOICE)
        }
        isPrioritySpeaker(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT;
            return m(t, e, c.SpeakingFlags.PRIORITY)
        }
        isSoundSharing(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT;
            return m(t, e, c.SpeakingFlags.SOUNDSHARE)
        }
        isAnyoneElseSpeaking() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.MediaEngineContextTypes.DEFAULT;
            return p(e, c.SpeakingFlags.VOICE, !0)
        }
        isCurrentUserSpeaking() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.MediaEngineContextTypes.DEFAULT;
            return null != f && this.isSpeaking(f, e)
        }
        isAnyonePrioritySpeaking() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.MediaEngineContextTypes.DEFAULT;
            return p(e, c.SpeakingFlags.VOICE | c.SpeakingFlags.PRIORITY)
        }
        isCurrentUserPrioritySpeaking() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.MediaEngineContextTypes.DEFAULT;
            return null != f && this.isPrioritySpeaker(f, e) && this.isSpeaking(f, e)
        }
    }
    T.displayName = "SpeakingStore";
    var v = new T(s.default, {
        CONNECTION_OPEN: S,
        OVERLAY_INITIALIZE: S,
        SPEAKING: function(e) {
            let {
                context: t,
                userId: n,
                speakingFlags: i
            } = e;
            if ((i & c.SpeakingFlags.PRIORITY) === c.SpeakingFlags.PRIORITY) {
                let e = a.default.getChannel(u.default.getVoiceChannelId());
                null != e && r.can({
                    permission: d.Permissions.PRIORITY_SPEAKER,
                    user: n,
                    context: e
                }) ? o.default.setCanHavePriority(n, !0) : (o.default.setCanHavePriority(n, !1), i &= ~c.SpeakingFlags.PRIORITY)
            }
            return function(e, t, n) {
                var i, s;
                let r = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.MediaEngineContextTypes.DEFAULT,
                            t = _.get(e);
                        return null == t && (t = new Map, _.set(e, t)), t
                    }(e),
                    a = r.get(t),
                    o = null !== (i = null == a ? void 0 : a.flags) && void 0 !== i ? i : 0;
                if (0 === o && 0 === n) return !1;
                if (0 === n) r.delete(t), 0 === r.size && _.delete(e);
                else {
                    let e = null !== (s = null == a ? void 0 : a.since) && void 0 !== s ? s : null,
                        i = (o & c.SpeakingFlags.VOICE) === c.SpeakingFlags.VOICE,
                        l = (n & c.SpeakingFlags.VOICE) === c.SpeakingFlags.VOICE;
                    i !== l && (e = l ? Date.now() : null), r.set(t, {
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
                    sessionId: s
                } = t, r = !1, a = h;
                return n === f && s === E && (h = null != i ? i : null), a !== h && (r = _.delete(c.MediaEngineContextTypes.DEFAULT) || r), null == i ? r = n === f && s === E ? _.delete(c.MediaEngineContextTypes.DEFAULT) || r : g(c.MediaEngineContextTypes.DEFAULT, n) || r : n === f && s !== E ? r = _.delete(c.MediaEngineContextTypes.DEFAULT) || r : n !== f && i !== l.default.getChannelId() && (r = g(c.MediaEngineContextTypes.DEFAULT, n) || r), r || e
            }, !1)
        },
        LOBBY_VOICE_STATE_UPDATE: function(e) {}
    })
}