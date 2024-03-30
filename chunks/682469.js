function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getBasePlanIdForSubscriptionItems: function() {
            return o
        }
    });
    var r = n("868615");

    function o(e, t, n) {
        var o = e.find(function(e) {
            var t = r.SubscriptionPlanInfo[e.planId];
            return null != t && null != t.premiumType
        });
        if (null == o) {
            if (e.length > 0) {
                var i = r.SubscriptionPlanInfo[e[0].planId];
                t = i.interval, n = i.intervalCount
            }
            return function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = Object.keys(r.SubscriptionPlanInfo).find(function(n) {
                        var o = r.SubscriptionPlanInfo[n];
                        return null != o && o.skuId === r.PremiumSubscriptionSKUs.NONE && o.interval === e && o.intervalCount === t
                    });
                return null != n ? n : r.SubscriptionPlans.NONE_MONTH
            }(t, n)
        }
        return o.planId
    }
}