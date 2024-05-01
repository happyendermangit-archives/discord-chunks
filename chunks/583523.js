function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("570140"),
        r = n("147913"),
        a = n("314897"),
        s = n("967368"),
        o = n("592125"),
        l = n("944486"),
        u = n("631768"),
        d = n("981631");

    function _() {
        ! function() {
            let e = l.default.getVoiceChannelId(),
                t = s.default.bitrate;
            if (null == e) return;
            let n = o.default.getChannel(e);
            if (null != n) t !== n.bitrate && i.default.dispatch({
                type: "SET_CHANNEL_BITRATE",
                bitrate: n.bitrate
            })
        }(), ! function() {
            var e;
            let t = l.default.getVoiceChannelId(),
                n = u.default.mode;
            if (null == t) return;
            let r = o.default.getChannel(t);
            if (null == r) return;
            let a = null !== (e = r.videoQualityMode) && void 0 !== e ? e : d.VideoQualityMode.AUTO;
            n !== a && i.default.dispatch({
                type: "SET_CHANNEL_VIDEO_QUALITY_MODE",
                mode: a
            })
        }()
    }

    function c(e) {
        let {
            channels: t
        } = e;
        for (let e of t) l.default.getVoiceChannelId() === e.id && _()
    }

    function E(e) {
        let {
            voiceStates: t
        } = e;
        t.forEach(e => {
            a.default.getSessionId() === e.sessionId && _()
        })
    }
    class I extends r.default {
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                CHANNEL_UPDATES: c,
                VOICE_STATE_UPDATES: E
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new I
}