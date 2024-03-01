function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("446674"),
        r = n("913144");
    let s = n("49111").VideoQualityMode.AUTO;
    class a extends i.default.Store {
        get mode() {
            return s
        }
    }
    a.displayName = "VideoQualityModeStore";
    var o = new a(r.default, {
        SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
            s = e.mode
        }
    })
}