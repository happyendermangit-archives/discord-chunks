function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VoiceCallBackgroundTypes: function() {
            return d
        }
    });
    var r, o, i, a, u, s, l, c, f, d, _ = n("374550");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                E(e, t, n[t])
            })
        }
        return e
    }

    function m(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }(r = s || (s = {})).DISMISSED = "dismissed", r.PIP = "pip", r.PANEL = "panel";
    var y = {
        mass: .5,
        damping: 80,
        stiffness: 320
    };
    m(p({}, y), {
        overshootClamping: !0
    }), m(p({}, y), {
        overshootClamping: !0
    }), m(p({}, y), {
        mass: .3
    }), (o = l || (l = {})).USER = "USER", o.STREAM = "STREAM", o.ACTIVITY = "ACTIVIY", (i = c || (c = {})).NO_VIDEO_PARTICIPANTS = "no_video_participants", i.CALLER_DISCONNECTED = "caller_disconnected", Object.keys(E({}, "no_video_participants", {
        width: 2,
        height: 1
    })), (a = f || (f = {})).PARTICIPANT = "participant", a.CTA = "cta", (0, _.isAndroid)(), (0, _.isIOS)(), (u = d || (d = {}))[u.EMPTY = 0] = "EMPTY", u[u.GRADIENT = 1] = "GRADIENT"
}