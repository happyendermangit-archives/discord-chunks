function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseConnectionEvent: function() {
            return u.BaseConnectionEvent
        },
        BaseSpeedTesterEvent: function() {
            return c.BaseSpeedTesterEvent
        },
        MediaEngineEvent: function() {
            return d.MediaEngineEvent
        },
        MediaEngineContextTypes: function() {
            return f.MediaEngineContextTypes
        },
        FilterTargetType: function() {
            return a
        },
        FilterSettingsGraph: function() {
            return o
        },
        FilterSettingsKey: function() {
            return l
        },
        determineMediaEngine: function() {
            return p
        },
        initializeMediaEngine: function() {
            return h
        }
    });
    var i, r, s, a, o, l, u = n("947279"),
        c = n("571877"),
        d = n("775766"),
        f = n("353927");

    function E(e) {
        switch (e) {
            case f.MediaEngineImplementations.NATIVE:
                return n("741397").default;
            case f.MediaEngineImplementations.WEBRTC:
                return n("551079").default;
            case f.MediaEngineImplementations.DUMMY:
            default:
                return n("870630").default
        }
    }

    function p() {
        var e;
        return null !== (e = [f.MediaEngineImplementations.NATIVE, f.MediaEngineImplementations.WEBRTC].find(e => E(e).supported())) && void 0 !== e ? e : f.MediaEngineImplementations.DUMMY
    }

    function h(e) {
        let t = E(e);
        return new t
    }(i = a || (a = {})).INPUT_DEVICE = "input_device", i.STREAM = "stream", (r = o || (o = {})).NONE = "", r.BACKGROUND_BLUR = "background_blur", r.BACKGROUND_REPLACEMENT = "background_replacement", (s = l || (l = {})).CAMERA_BACKGROUND_PREVIEW = "cameraBackgroundPreview", s.CAMERA_BACKGROUND_LIVE = "cameraBackgroundLive"
}