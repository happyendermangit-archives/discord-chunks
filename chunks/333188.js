function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VoiceCallBackgroundTypes: function() {
            return o
        }
    }), n("222007");
    var i, s, r, a, o, l, u, d, c, f, _ = n("773336");
    (l = i || (i = {})).DISMISSED = "dismissed", l.PIP = "pip", l.PIP_EXTERNAL = "pip_external", l.PANEL = "panel";
    let h = {
        mass: .5,
        damping: 80,
        stiffness: 320
    };
    ({
        ...h
    }), ({
        ...h
    }), ({
        ...h
    }), (u = s || (s = {})).USER = "USER", u.STREAM = "STREAM", u.ACTIVITY = "ACTIVIY", (d = r || (r = {})).NO_VIDEO_PARTICIPANTS = "no_video_participants", d.CALLER_DISCONNECTED = "caller_disconnected";
    (c = a || (a = {})).PARTICIPANT = "participant", c.CTA = "cta", (0, _.isAndroid)(), (0, _.isIOS)(), (f = o || (o = {}))[f.EMPTY = 0] = "EMPTY", f[f.GRADIENT = 1] = "GRADIENT"
}