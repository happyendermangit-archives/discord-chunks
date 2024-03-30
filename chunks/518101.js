function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("629815"),
        o = n("439386");

    function i(e, t) {
        r.default.wait(function() {
            r.default.dispatch({
                type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                context: o.MediaEngineContextTypes.DEFAULT,
                userId: e,
                videoToggleState: t,
                persist: !1,
                isAutomatic: !0
            })
        })
    }
}