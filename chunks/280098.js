function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("267642"),
        r = n("74538"),
        s = n("474936");

    function a(e, t, n) {
        if (null == e || null == e.quality && null == e.guildPremiumTier) return !0;
        let a = !1;
        return null != e.quality && (e.quality === s.StreamQualities.HIGH_STREAMING_QUALITY ? a = a || r.default.canStreamQuality(r.default.StreamQuality.HIGH, t) : e.quality === s.StreamQualities.MID_STREAMING_QUALITY && (a = a || r.default.canStreamQuality(r.default.StreamQuality.MID, t))), null != e.guildPremiumTier && (a = a || (0, i.isGuildBoostedAtLeast)(n, e.guildPremiumTier)), a
    }
}