function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("981631");
    let d = u.VideoQualityMode.AUTO;
    class _ extends(a = o.default.Store) {
        get mode() {
            return d
        }
    }
    s = "VideoQualityModeStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new _(l.default, {
        SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
            d = e.mode
        }
    })
}