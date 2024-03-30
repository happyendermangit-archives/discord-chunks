function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_OVERLAY_OPTIONS: function() {
            return u
        },
        JumpTypes: function() {
            return i
        },
        RunningProcessFullscreenType: function() {
            return a
        }
    }), (r = i || (i = {})).ANIMATED = "ANIMATED", r.INSTANT = "INSTANT", (o = a || (a = {}))[o.UNKNOWN = 0] = "UNKNOWN", o[o.WINDOWED = 1] = "WINDOWED", o[o.MAXIMIZED = 2] = "MAXIMIZED", o[o.BORDERLESS_FULLSCREEN = 3] = "BORDERLESS_FULLSCREEN", o[o.FULLSCREEN = 4] = "FULLSCREEN", o[o.MINIMIZED = 5] = "MINIMIZED";
    var r, o, i, a, u = {
        compatibilityHook: !1,
        warn: !1,
        enabled: !1,
        allowHook: !0,
        supportsOutOfProcessOverlay: !1
    }
}