function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("945816"),
        o = n("629815"),
        i = n("224359"),
        a = n("73013"),
        u = n("217014"),
        s = n("935741"),
        l = n("97478"),
        c = n("894288"),
        f = n("140591"),
        d = n("388990"),
        _ = n("736381"),
        E = n("281767"),
        p = new r.Timeout,
        m = new r.Timeout,
        y = 5 * d.default.Millis.SECOND,
        I = 12 * d.default.Millis.SECOND,
        h = null;

    function O(e, t) {
        if (c.default.getVoiceChannelId() !== e) return !1;
        var n = s.default.getChannel(e);
        if (null == n || !n.isDM() && !n.isGuildStageVoice() || null != a.default.getActiveStreamForUser(t, n.getGuildId())) return !1;
        var r = a.default.getStreamForUser(t, n.getGuildId());
        if (null == r) return !1;
        var o = (0, _.encodeStreamKey)(r);
        return o !== h && (h = o, (0, i.watchStream)(r, {
            noFocus: !0
        }), !0)
    }

    function T(e, t) {
        var n = null != t ? t : l.default.getPreferredRegion();
        null != n && n !== l.default.getRegion(f.default.getHostname(f.default.getActiveStreamKey())) && (0, i.changeStreamRegion)(e, n)
    }
    t.default = {
        init: function() {
            var e = function(e, t) {
                !f.default.getAllActiveStreamKeys().includes(e) && m.start(t ? I : y, function() {
                    o.default.dispatch({
                        type: "STREAM_TIMED_OUT",
                        streamKey: e
                    })
                })
            };
            o.default.subscribe("STREAM_WATCH", function(t) {
                var n = t.streamKey,
                    r = (0, _.decodeStreamKey)(n).channelId,
                    o = s.default.getChannel(r);
                e(n, null == o ? void 0 : o.isGuildStageVoice())
            }), o.default.subscribe("STREAM_START", function(t) {
                var n = t.streamType,
                    r = t.guildId,
                    o = t.channelId,
                    i = s.default.getChannel(o);
                e((0, _.encodeStreamKey)({
                    streamType: n,
                    guildId: r,
                    channelId: o,
                    ownerId: u.default.getId()
                }), null == i ? void 0 : i.isGuildStageVoice())
            }), o.default.subscribe("STREAM_CREATE", function() {
                m.stop()
            }), o.default.subscribe("STREAM_UPDATE", function() {
                m.stop()
            }), o.default.subscribe("STREAM_DELETE", function() {
                m.stop()
            }), o.default.subscribe("STREAM_CLOSE", function() {
                p.stop(), m.stop()
            }), o.default.subscribe("VOICE_CHANNEL_SELECT", function(e) {
                var t = e.channelId;
                if (null != t) {
                    h = null;
                    var n = a.default.getAllApplicationStreamsForChannel(t).filter(function(e) {
                        return e.ownerId !== u.default.getId()
                    })[0];
                    null != n && O(t, n.ownerId)
                }
            }), o.default.subscribe("VOICE_STATE_UPDATES", function(e) {
                e.voiceStates.forEach(function(e) {
                    var t = e.userId,
                        n = e.channelId,
                        r = e.guildId,
                        o = e.selfStream;
                    if (t !== u.default.getId() && null != n) {
                        if (o && O(n, t)) return;
                        var s = a.default.getActiveStreamForUser(t, r);
                        if (null != s && s.channelId === n && (!o && s.state !== E.ApplicationStreamStates.ENDED && p.start(18e4, function() {
                                return (0, i.closeStream)((0, _.encodeStreamKey)(s), !1)
                            }), o && s.state === E.ApplicationStreamStates.ENDED)) {
                            p.stop();
                            var l = a.default.getStreamForUser(t, r);
                            if (null == l) return;
                            (0, i.watchStream)(l)
                        }
                    }
                })
            }), o.default.subscribe("CALL_UPDATE", function(e) {
                var t = e.channelId,
                    n = e.region,
                    r = a.default.getCurrentUserActiveStream();
                (null == r ? void 0 : r.channelId) === t && T((0, _.encodeStreamKey)(r), n)
            }), o.default.subscribe("CHANNEL_UPDATES", function(e) {
                var t = e.channels,
                    n = a.default.getCurrentUserActiveStream();
                if (null != n) {
                    var r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var u, s = t[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                            var l = u.value;
                            n.channelId === l.id && T((0, _.encodeStreamKey)(n), l.rtcRegion)
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != s.return && s.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
            })
        }
    }
}