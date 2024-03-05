function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSubscriptionSKUs: function() {
            return o
        },
        subscriptionCanSwitchImmediately: function() {
            return d
        },
        subscriptionCanDowngrade: function() {
            return c
        },
        getOrFetchSubscriptionPlan: function() {
            return f
        }
    }), n("222007"), n("884691");
    var s = n("627445"),
        a = n.n(s);
    n("446674");
    var l = n("775433"),
        i = n("10514"),
        r = n("49111"),
        u = n("646718");

    function o(e) {
        return e.items.map(e => {
            let t = i.default.get(e.planId);
            return a(null != t, "Unable to fetch plan"), t
        }).map(e => e.skuId)
    }

    function d(e, t, n) {
        let s = e.getCurrentSubscriptionPlanIdForGroup(n);
        return e.type === r.SubscriptionTypes.PREMIUM && null == s || (a(null != s, "Current subscription has no plan in group"), a(!(s === u.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === u.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(s) < n.indexOf(t))
    }

    function c(e, t, n) {
        return !d(e, t, n)
    }

    function f(e, t) {
        let n = i.default.get(e);
        if (null == n) {
            let n = u.SubscriptionPlanInfo[e];
            a(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
            let s = n.skuId;
            !i.default.isFetchingForSKU(s) && (0, l.fetchSubscriptionPlansForSKU)(s, t)
        }
        return n
    }
}