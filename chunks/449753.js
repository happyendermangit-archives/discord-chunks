function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("846519"),
        r = n("570140"),
        a = n("872810"),
        s = n("199902"),
        o = n("314897"),
        l = n("592125"),
        u = n("936349"),
        d = n("944486"),
        _ = n("959457"),
        c = n("70956"),
        E = n("569545"),
        I = n("981631");
    let T = new i.Timeout,
        f = new i.Timeout,
        S = 5 * c.default.Millis.SECOND,
        h = 12 * c.default.Millis.SECOND,
        A = null;

    function m(e, t) {
        if (d.default.getVoiceChannelId() !== e) return !1;
        let n = l.default.getChannel(e);
        if (null == n || !n.isDM() && !n.isGuildStageVoice() || null != s.default.getActiveStreamForUser(t, n.getGuildId())) return !1;
        let i = s.default.getStreamForUser(t, n.getGuildId());
        if (null == i) return !1;
        let r = (0, E.encodeStreamKey)(i);
        return r !== A && (A = r, (0, a.watchStream)(i, {
            noFocus: !0
        }), !0)
    }

    function N(e, t) {
        let n = null != t ? t : u.default.getPreferredRegion();
        null != n && n !== u.default.getRegion(_.default.getHostname(_.default.getActiveStreamKey())) && (0, a.changeStreamRegion)(e, n)
    }
    t.default = {
        init() {
            let e = (e, t) => {
                !_.default.getAllActiveStreamKeys().includes(e) && f.start(t ? h : S, () => {
                    r.default.dispatch({
                        type: "STREAM_TIMED_OUT",
                        streamKey: e
                    })
                })
            };
            r.default.subscribe("STREAM_WATCH", t => {
                let {
                    streamKey: n
                } = t, {
                    channelId: i
                } = (0, E.decodeStreamKey)(n), r = l.default.getChannel(i);
                e(n, null == r ? void 0 : r.isGuildStageVoice())
            }), r.default.subscribe("STREAM_START", t => {
                let {
                    streamType: n,
                    guildId: i,
                    channelId: r
                } = t, a = l.default.getChannel(r);
                e((0, E.encodeStreamKey)({
                    streamType: n,
                    guildId: i,
                    channelId: r,
                    ownerId: o.default.getId()
                }), null == a ? void 0 : a.isGuildStageVoice())
            }), r.default.subscribe("STREAM_CREATE", () => {
                f.stop()
            }), r.default.subscribe("STREAM_UPDATE", () => {
                f.stop()
            }), r.default.subscribe("STREAM_DELETE", () => {
                f.stop()
            }), r.default.subscribe("STREAM_CLOSE", () => {
                T.stop(), f.stop()
            }), r.default.subscribe("VOICE_CHANNEL_SELECT", e => {
                let {
                    channelId: t
                } = e;
                if (null == t) return;
                A = null;
                let n = s.default.getAllApplicationStreamsForChannel(t).filter(e => {
                    let {
                        ownerId: t
                    } = e;
                    return t !== o.default.getId()
                })[0];
                null != n && m(t, n.ownerId)
            }), r.default.subscribe("VOICE_STATE_UPDATES", e => {
                let {
                    voiceStates: t
                } = e;
                t.forEach(e => {
                    let {
                        userId: t,
                        channelId: n,
                        guildId: i,
                        selfStream: r
                    } = e;
                    if (t !== o.default.getId() && null != n) {
                        if (r && m(n, t)) return;
                        let e = s.default.getActiveStreamForUser(t, i);
                        if (null != e && e.channelId === n && (!r && e.state !== I.ApplicationStreamStates.ENDED && T.start(18e4, () => (0, a.closeStream)((0, E.encodeStreamKey)(e), !1)), r && e.state === I.ApplicationStreamStates.ENDED)) {
                            T.stop();
                            let e = s.default.getStreamForUser(t, i);
                            if (null == e) return;
                            (0, a.watchStream)(e)
                        }
                    }
                })
            }), r.default.subscribe("CALL_UPDATE", e => {
                let {
                    channelId: t,
                    region: n
                } = e, i = s.default.getCurrentUserActiveStream();
                (null == i ? void 0 : i.channelId) === t && N((0, E.encodeStreamKey)(i), n)
            }), r.default.subscribe("CHANNEL_UPDATES", e => {
                let {
                    channels: t
                } = e, n = s.default.getCurrentUserActiveStream();
                if (null != n)
                    for (let e of t) n.channelId === e.id && N((0, E.encodeStreamKey)(n), e.rtcRegion)
            })
        }
    }
}