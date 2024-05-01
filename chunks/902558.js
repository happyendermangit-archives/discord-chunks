function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("268146"),
        r = n("46973"),
        s = n("147913"),
        a = n("314897"),
        o = n("998502"),
        l = n("981631");
    let u = new Set;

    function d(e) {
        switch (e) {
            case r.MediaEngineContextTypes.DEFAULT:
                return i.StoredCrashInformation.VideoMediaSessionId;
            case r.MediaEngineContextTypes.STREAM:
                return i.StoredCrashInformation.StreamMediaSessionId
        }
    }

    function _(e) {
        var t;
        o.default.setCrashInformation(d(e.context), null !== (t = e.mediaSessionId) && void 0 !== t ? t : null)
    }

    function c(e) {
        var t;
        let n = (null !== (t = e.channelId) && void 0 !== t ? t : "unknown") + e.context;
        switch (e.state) {
            case l.RTCConnectionStates.RTC_CONNECTED:
                u.add(n), o.default.setCrashInformation(i.StoredCrashInformation.HasRTCConnection, 1);
                break;
            case l.RTCConnectionStates.DISCONNECTED:
                o.default.setCrashInformation(d(e.context), null), u.delete(n), 0 === u.size && ! function() {
                    for (let e of [i.StoredCrashInformation.HasRTCConnection, i.StoredCrashInformation.IsSendingVideo, i.StoredCrashInformation.IsSendingStream, i.StoredCrashInformation.IsReceivingVideo, i.StoredCrashInformation.IsReceivingStream]) o.default.setCrashInformation(e, 0)
                }()
        }
    }

    function E(e) {
        let t = e.userId === a.default.getId(),
            n = null != e.streamId,
            s = null;
        switch (e.context) {
            case r.MediaEngineContextTypes.DEFAULT:
                s = t ? i.StoredCrashInformation.IsSendingVideo : i.StoredCrashInformation.IsReceivingVideo;
                break;
            case r.MediaEngineContextTypes.STREAM:
                s = t ? i.StoredCrashInformation.IsSendingStream : i.StoredCrashInformation.IsReceivingStream
        }
        o.default.setCrashInformation(s, n ? 1 : 0)
    }
    class I extends s.default {
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                RTC_CONNECTION_STATE: c,
                RTC_CONNECTION_VIDEO: E,
                MEDIA_SESSION_JOINED: _
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