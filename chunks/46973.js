function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseConnectionEvent: function() {
            return u.BaseConnectionEvent
        },
        BaseSpeedTesterEvent: function() {
            return d.BaseSpeedTesterEvent
        },
        FilterSettingsGraph: function() {
            return o
        },
        FilterSettingsKey: function() {
            return l
        },
        FilterTargetType: function() {
            return a
        },
        MediaEngineContextTypes: function() {
            return c.MediaEngineContextTypes
        },
        MediaEngineEvent: function() {
            return _.MediaEngineEvent
        },
        determineMediaEngine: function() {
            return I
        },
        initializeMediaEngine: function() {
            return T
        }
    });
    var i, r, s, a, o, l, u = n("839548"),
        d = n("60541"),
        _ = n("946695"),
        c = n("65154");

    function E(e) {
        switch (e) {
            case c.MediaEngineImplementations.NATIVE:
                return n("743426").default;
            case c.MediaEngineImplementations.WEBRTC:
                return n("959856").default;
            case c.MediaEngineImplementations.DUMMY:
            default:
                return n("135670").default
        }
    }

    function I() {
        var e;
        return null !== (e = [c.MediaEngineImplementations.NATIVE, c.MediaEngineImplementations.WEBRTC].find(e => E(e).supported())) && void 0 !== e ? e : c.MediaEngineImplementations.DUMMY
    }

    function T(e) {
        return new(E(e))
    }(i = a || (a = {})).INPUT_DEVICE = "input_device", i.STREAM = "stream", (r = o || (o = {})).NONE = "", r.BACKGROUND_BLUR = "background_blur", r.BACKGROUND_REPLACEMENT = "background_replacement", (s = l || (l = {})).CAMERA_BACKGROUND_PREVIEW = "cameraBackgroundPreview", s.CAMERA_BACKGROUND_LIVE = "cameraBackgroundLive"
}