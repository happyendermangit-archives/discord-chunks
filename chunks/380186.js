function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSubscriptionSKUs: function() {
            return d
        },
        subscriptionCanSwitchImmediately: function() {
            return c
        },
        subscriptionCanDowngrade: function() {
            return f
        },
        getOrFetchSubscriptionPlan: function() {
            return E
        }
    }), n("222007"), n("884691");
    var s = n("627445"),
        a = n.n(s);
    n("446674");
    var l = n("775433"),
        i = n("10514"),
        r = n("719923"),
        u = n("49111"),
        o = n("646718");

    function d(e) {
        return e.items.map(e => {
            let t = i.default.get(e.planId);
            return a(null != t, "Unable to fetch plan"), t
        }).map(e => e.skuId)
    }

    function c(e, t, n) {
        let s = e.getCurrentSubscriptionPlanIdForGroup(n);
        return e.type === u.SubscriptionTypes.PREMIUM && null == s || (a(null != s, "Current subscription has no plan in group"), a(!(s === o.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === o.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(s) < n.indexOf(t))
    }

    function f(e, t, n) {
        return !c(e, t, n)
    }

    function E(e, t) {
        let n = i.default.get(e);
        if (null == n) {
            let n = o.SubscriptionPlanInfo[e];
            a(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
            let s = (0, r.castPremiumSubscriptionAsSkuId)(n.skuId);
            !i.default.isFetchingForSKU(s) && (0, l.fetchSubscriptionPlansForSKU)(s, t)
        }
        return n
    }
}