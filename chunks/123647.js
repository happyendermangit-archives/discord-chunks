function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("446674"),
        s = n("913144");
    let r = n("49111").VideoQualityMode.AUTO;
    class a extends i.default.Store {
        get mode() {
            return r
        }
    }
    a.displayName = "VideoQualityModeStore";
    var o = new a(s.default, {
        SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
            r = e.mode
        }
    })
}