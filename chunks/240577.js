function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getBasePlanIdForSubscriptionItems: function() {
            return s
        }
    });
    var i = n("646718");

    function s(e, t, n) {
        let s = e.find(e => {
            let t = i.SubscriptionPlanInfo[e.planId];
            return null != t && null != t.premiumType
        });
        if (null == s) {
            if (e.length > 0) {
                let s = i.SubscriptionPlanInfo[e[0].planId];
                t = s.interval, n = s.intervalCount
            }
            return function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = Object.keys(i.SubscriptionPlanInfo).find(n => {
                        let s = i.SubscriptionPlanInfo[n];
                        return null != s && s.skuId === i.PremiumSubscriptionSKUs.NONE && s.interval === e && s.intervalCount === t
                    });
                return null != n ? n : i.SubscriptionPlans.NONE_MONTH
            }(t, n)
        }
        return s.planId
    }
}