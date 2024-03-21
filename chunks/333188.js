function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VoiceCallBackgroundTypes: function() {
            return o
        }
    }), n("222007");
    var i, s, r, a, o, l, u, d, c, _, f = n("773336");
    (l = i || (i = {})).DISMISSED = "dismissed", l.PIP = "pip", l.PANEL = "panel";
    let E = {
        mass: .5,
        damping: 80,
        stiffness: 320
    };
    ({
        ...E
    }), ({
        ...E
    }), ({
        ...E
    }), (u = s || (s = {})).USER = "USER", u.STREAM = "STREAM", u.ACTIVITY = "ACTIVIY", (d = r || (r = {})).NO_VIDEO_PARTICIPANTS = "no_video_participants", d.CALLER_DISCONNECTED = "caller_disconnected";
    (c = a || (a = {})).PARTICIPANT = "participant", c.CTA = "cta", (0, f.isAndroid)(), (0, f.isIOS)(), (_ = o || (o = {}))[_.EMPTY = 0] = "EMPTY", _[_.GRADIENT = 1] = "GRADIENT"
}