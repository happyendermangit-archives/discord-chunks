function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseConnectionEvent: function() {
            return l.BaseConnectionEvent
        },
        BaseSpeedTesterEvent: function() {
            return c.BaseSpeedTesterEvent
        },
        FilterSettingsGraph: function() {
            return u
        },
        FilterSettingsKey: function() {
            return s
        },
        FilterTargetType: function() {
            return a
        },
        MediaEngineContextTypes: function() {
            return d.MediaEngineContextTypes
        },
        MediaEngineEvent: function() {
            return f.MediaEngineEvent
        },
        determineMediaEngine: function() {
            return E
        },
        initializeMediaEngine: function() {
            return p
        }
    });
    var r, o, i, a, u, s, l = n("409752"),
        c = n("418603"),
        f = n("860525"),
        d = n("439386");

    function _(e) {
        switch (e) {
            case d.MediaEngineImplementations.NATIVE:
                return n("103514").default;
            case d.MediaEngineImplementations.WEBRTC:
                return n("531509").default;
            case d.MediaEngineImplementations.DUMMY:
            default:
                return n("601033").default
        }
    }

    function E() {
        var e;
        return null !== (e = [d.MediaEngineImplementations.NATIVE, d.MediaEngineImplementations.WEBRTC].find(function(e) {
            return _(e).supported()
        })) && void 0 !== e ? e : d.MediaEngineImplementations.DUMMY
    }

    function p(e) {
        return new(_(e))
    }(r = a || (a = {})).INPUT_DEVICE = "input_device", r.STREAM = "stream", (o = u || (u = {})).NONE = "", o.BACKGROUND_BLUR = "background_blur", o.BACKGROUND_REPLACEMENT = "background_replacement", (i = s || (s = {})).CAMERA_BACKGROUND_PREVIEW = "cameraBackgroundPreview", i.CAMERA_BACKGROUND_LIVE = "cameraBackgroundLive"
}