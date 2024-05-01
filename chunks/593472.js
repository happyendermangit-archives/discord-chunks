function(e, t, n) {
    "use strict";
    var i, r, s, a;
    n.r(t), n.d(t, {
        DEFAULT_OVERLAY_OPTIONS: function() {
            return o
        },
        JumpTypes: function() {
            return i
        },
        RunningProcessFullscreenType: function() {
            return r
        }
    }), (s = i || (i = {})).ANIMATED = "ANIMATED", s.INSTANT = "INSTANT", (a = r || (r = {}))[a.UNKNOWN = 0] = "UNKNOWN", a[a.WINDOWED = 1] = "WINDOWED", a[a.MAXIMIZED = 2] = "MAXIMIZED", a[a.BORDERLESS_FULLSCREEN = 3] = "BORDERLESS_FULLSCREEN", a[a.FULLSCREEN = 4] = "FULLSCREEN", a[a.MINIMIZED = 5] = "MINIMIZED";
    let o = {
        compatibilityHook: !1,
        warn: !1,
        enabled: !1,
        allowHook: !0,
        supportsOutOfProcessOverlay: !1
    }
}