function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r, o = n("656462"),
        i = n("439386");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var u = Object.freeze((a(r = {}, o.ParticipantTypes.STREAM, i.MediaEngineContextTypes.STREAM), a(r, o.ParticipantTypes.HIDDEN_STREAM, i.MediaEngineContextTypes.STREAM), a(r, o.ParticipantTypes.USER, i.MediaEngineContextTypes.DEFAULT), a(r, o.ParticipantTypes.ACTIVITY, i.MediaEngineContextTypes.DEFAULT), r));

    function s(e) {
        return u[e]
    }
}