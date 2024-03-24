function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSubscriptionSKUs: function() {
            return E
        },
        subscriptionCanSwitchImmediately: function() {
            return _
        },
        subscriptionCanDowngrade: function() {
            return I
        },
        getOrFetchSubscriptionPlan: function() {
            return h
        },
        getSubscriptionPauseDurations: function() {
            return p
        }
    }), n("222007"), n("424973"), n("884691");
    var s = n("627445"),
        a = n.n(s),
        l = n("866227"),
        i = n.n(l),
        r = n("216721");
    n("446674");
    var u = n("775433"),
        o = n("10514"),
        d = n("719923"),
        c = n("49111"),
        f = n("646718");

    function E(e) {
        return e.items.map(e => {
            let t = o.default.get(e.planId);
            return a(null != t, "Unable to fetch plan"), t
        }).map(e => e.skuId)
    }

    function _(e, t, n) {
        let s = e.getCurrentSubscriptionPlanIdForGroup(n);
        return e.type === c.SubscriptionTypes.PREMIUM && null == s || (a(null != s, "Current subscription has no plan in group"), a(!(s === f.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === f.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(s) < n.indexOf(t))
    }

    function I(e, t, n) {
        return !_(e, t, n)
    }

    function h(e, t) {
        let n = o.default.get(e);
        if (null == n) {
            let n = f.SubscriptionPlanInfo[e];
            a(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
            let s = (0, d.castPremiumSubscriptionAsSkuId)(n.skuId);
            !o.default.isFetchingForSKU(s) && (0, u.fetchSubscriptionPlansForSKU)(s, t)
        }
        return n
    }

    function p(e) {
        let t = Object.keys(r.PauseDuration).filter(e => isNaN(Number(e)));
        if (e.status !== c.SubscriptionStatusTypes.PAUSED) return {
            durations: t,
            currentDaysPaused: 0
        };
        if (null == e.pauseEndsAt) return {
            durations: [],
            currentDaysPaused: 0
        };
        {
            let n = i(e.currentPeriodStart),
                s = i(e.pauseEndsAt),
                a = Math.round(s.diff(n, "days", !0)),
                l = [];
            for (let e of t) {
                let t = r.PauseDuration[e];
                t > a && l.push(e)
            }
            return {
                durations: l,
                currentDaysPaused: a
            }
        }
    }
}