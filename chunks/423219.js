function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VoiceCallBackgroundTypes: function() {
            return o
        }
    }), n("47120");
    var i, r, s, a, o, l, u, d, _, c, E = n("358085");
    (l = i || (i = {})).DISMISSED = "dismissed", l.PIP = "pip", l.PANEL = "panel";
    let I = {
        mass: .5,
        damping: 80,
        stiffness: 320
    };
    ({
        ...I
    }), ({
        ...I
    }), ({
        ...I
    }), (u = r || (r = {})).USER = "USER", u.STREAM = "STREAM", u.ACTIVITY = "ACTIVIY", (d = s || (s = {})).NO_VIDEO_PARTICIPANTS = "no_video_participants", d.CALLER_DISCONNECTED = "caller_disconnected";
    (_ = a || (a = {})).PARTICIPANT = "participant", _.CTA = "cta", (0, E.isAndroid)(), (0, E.isIOS)(), (c = o || (o = {}))[c.EMPTY = 0] = "EMPTY", c[c.GRADIENT = 1] = "GRADIENT"
}