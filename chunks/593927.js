function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("665199"),
        o = n("830721"),
        i = n("868615");

    function a(e, t, n) {
        if (null == e || null == e.quality && null == e.guildPremiumTier) return !0;
        var a = !1;
        return null != e.quality && (e.quality === i.StreamQualities.HIGH_STREAMING_QUALITY ? a = a || o.default.canStreamQuality(o.default.StreamQuality.HIGH, t) : e.quality === i.StreamQualities.MID_STREAMING_QUALITY && (a = a || o.default.canStreamQuality(o.default.StreamQuality.MID, t))), null != e.guildPremiumTier && (a = a || (0, r.isGuildBoostedAtLeast)(n, e.guildPremiumTier)), a
    }
}