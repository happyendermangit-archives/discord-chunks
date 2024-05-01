function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("267642"),
        r = n("74538"),
        a = n("474936");

    function s(e, t, n) {
        if (null == e || null == e.quality && null == e.guildPremiumTier) return !0;
        let s = !1;
        return null != e.quality && (e.quality === a.StreamQualities.HIGH_STREAMING_QUALITY ? s = s || r.default.canStreamQuality(r.default.StreamQuality.HIGH, t) : e.quality === a.StreamQualities.MID_STREAMING_QUALITY && (s = s || r.default.canStreamQuality(r.default.StreamQuality.MID, t))), null != e.guildPremiumTier && (s = s || (0, i.isGuildBoostedAtLeast)(n, e.guildPremiumTier)), s
    }
}