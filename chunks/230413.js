function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getHigherExpectedValue: function() {
            return i
        },
        getHighestLikelihood: function() {
            return a
        }
    });
    var r = n("461621"),
        o = n("868615");

    function i(e, t, n) {
        return null == e ? o.PremiumTypes.TIER_2 : e[o.PremiumSubscriptionSKUs.TIER_0] * t > e[o.PremiumSubscriptionSKUs.TIER_2] * n ? o.PremiumTypes.TIER_0 : o.PremiumTypes.TIER_2
    }

    function a(e) {
        if (null == e) return o.PremiumTypes.TIER_0;
        var t = e[r.NON_SUBSCRIBER_SENTINEL],
            n = e[o.PremiumSubscriptionSKUs.TIER_0],
            i = e[o.PremiumSubscriptionSKUs.TIER_2];
        return i > n && i > t ? o.PremiumTypes.TIER_2 : o.PremiumTypes.TIER_0
    }
}