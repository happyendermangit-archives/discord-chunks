function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("913144"),
        s = n("353927");

    function r(e, t) {
        i.default.wait(() => {
            i.default.dispatch({
                type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                context: s.MediaEngineContextTypes.DEFAULT,
                userId: e,
                videoToggleState: t,
                persist: !1,
                isAutomatic: !0
            })
        })
    }
}