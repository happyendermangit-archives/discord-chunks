function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getHigherExpectedValue: function() {
            return s
        },
        getHighestLikelihood: function() {
            return a
        }
    });
    var i = n("857185"),
        r = n("474936");

    function s(e, t, n) {
        return null == e ? r.PremiumTypes.TIER_2 : e[r.PremiumSubscriptionSKUs.TIER_0] * t > e[r.PremiumSubscriptionSKUs.TIER_2] * n ? r.PremiumTypes.TIER_0 : r.PremiumTypes.TIER_2
    }

    function a(e) {
        if (null == e) return r.PremiumTypes.TIER_0;
        let t = e[i.NON_SUBSCRIBER_SENTINEL],
            n = e[r.PremiumSubscriptionSKUs.TIER_0],
            s = e[r.PremiumSubscriptionSKUs.TIER_2];
        return s > n && s > t ? r.PremiumTypes.TIER_2 : r.PremiumTypes.TIER_0
    }
}