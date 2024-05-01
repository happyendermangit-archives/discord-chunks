function(e, t, n) {
    "use strict";
    var i, r, a, s;
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
    }), (a = i || (i = {})).ANIMATED = "ANIMATED", a.INSTANT = "INSTANT", (s = r || (r = {}))[s.UNKNOWN = 0] = "UNKNOWN", s[s.WINDOWED = 1] = "WINDOWED", s[s.MAXIMIZED = 2] = "MAXIMIZED", s[s.BORDERLESS_FULLSCREEN = 3] = "BORDERLESS_FULLSCREEN", s[s.FULLSCREEN = 4] = "FULLSCREEN", s[s.MINIMIZED = 5] = "MINIMIZED";
    let o = {
        compatibilityHook: !1,
        warn: !1,
        enabled: !1,
        allowHook: !0,
        supportsOutOfProcessOverlay: !1
    }
}