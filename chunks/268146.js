function(e, t, n) {
    "use strict";
    var i, r, a, s, o, l;
    n.r(t), n.d(t, {
        DesktopSources: function() {
            return a
        },
        JSExceptionLocation: function() {
            return r
        },
        StoredCrashInformation: function() {
            return i
        }
    }), (s = i || (i = {}))[s.HasRTCConnection = 0] = "HasRTCConnection", s[s.IsSendingVideo = 1] = "IsSendingVideo", s[s.IsSendingStream = 2] = "IsSendingStream", s[s.IsReceivingVideo = 3] = "IsReceivingVideo", s[s.IsReceivingStream = 4] = "IsReceivingStream", s[s.VideoMediaSessionId = 5] = "VideoMediaSessionId", s[s.StreamMediaSessionId = 6] = "StreamMediaSessionId", (o = r || (r = {}))[o.RendererProcessDelayed = 0] = "RendererProcessDelayed", o[o.RendererProcess = 1] = "RendererProcess", o[o.MainProcess = 2] = "MainProcess", (l = a || (a = {})).WINDOW = "window", l.SCREEN = "screen", l.CAMERA = "camera"
}