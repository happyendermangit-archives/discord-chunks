function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var a = n("427459"),
        r = n("719923"),
        s = n("646718");

    function i(e, t, n) {
        if (null == e || null == e.quality && null == e.guildPremiumTier) return !0;
        let i = !1;
        return null != e.quality && (e.quality === s.StreamQualities.HIGH_STREAMING_QUALITY ? i = i || r.default.canStreamQuality(r.default.StreamQuality.HIGH, t) : e.quality === s.StreamQualities.MID_STREAMING_QUALITY && (i = i || r.default.canStreamQuality(r.default.StreamQuality.MID, t))), null != e.guildPremiumTier && (i = i || (0, a.isGuildBoostedAtLeast)(n, e.guildPremiumTier)), i
    }
}