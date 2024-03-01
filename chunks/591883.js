function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("913144"),
        r = n("353927");

    function s(e, t) {
        i.default.wait(() => {
            i.default.dispatch({
                type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                context: r.MediaEngineContextTypes.DEFAULT,
                userId: e,
                videoToggleState: t,
                persist: !1,
                isAutomatic: !0
            })
        })
    }
}