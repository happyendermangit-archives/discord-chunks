function(e, t, n) {
    "use strict";
    var i, s, r, a, o, l;
    n.r(t), n.d(t, {
        StoredCrashInformation: function() {
            return i
        },
        JSExceptionLocation: function() {
            return s
        },
        DesktopSources: function() {
            return r
        }
    }), (a = i || (i = {}))[a.HasRTCConnection = 0] = "HasRTCConnection", a[a.IsSendingVideo = 1] = "IsSendingVideo", a[a.IsSendingStream = 2] = "IsSendingStream", a[a.IsReceivingVideo = 3] = "IsReceivingVideo", a[a.IsReceivingStream = 4] = "IsReceivingStream", a[a.VideoMediaSessionId = 5] = "VideoMediaSessionId", a[a.StreamMediaSessionId = 6] = "StreamMediaSessionId", (o = s || (s = {}))[o.RendererProcessDelayed = 0] = "RendererProcessDelayed", o[o.RendererProcess = 1] = "RendererProcess", o[o.MainProcess = 2] = "MainProcess", (l = r || (r = {})).WINDOW = "window", l.SCREEN = "screen", l.CAMERA = "camera"
}