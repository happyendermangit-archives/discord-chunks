function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getOrFetchSubscriptionPlan: function() {
            return m
        },
        getSubscriptionPauseDurations: function() {
            return S
        },
        getSubscriptionSKUs: function() {
            return f
        },
        subscriptionCanDowngrade: function() {
            return p
        },
        subscriptionCanSwitchImmediately: function() {
            return b
        }
    }), n("47120"), n("653041"), n("470079");
    var i = n("512722"),
        r = n.n(i),
        s = n("913527"),
        u = n.n(s),
        a = n("99945");
    n("442837");
    var l = n("821849"),
        o = n("509545"),
        d = n("74538"),
        c = n("981631"),
        h = n("474936");

    function f(t) {
        return t.items.map(t => {
            let e = o.default.get(t.planId);
            return r()(null != e, "Unable to fetch plan"), e
        }).map(t => t.skuId)
    }

    function b(t, e, n) {
        let i = t.getCurrentSubscriptionPlanIdForGroup(n);
        return t.type === c.SubscriptionTypes.PREMIUM && null == i || (r()(null != i, "Current subscription has no plan in group"), r()(!(i === h.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && e === h.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(i) < n.indexOf(e))
    }

    function p(t, e, n) {
        return !b(t, e, n)
    }

    function m(t, e) {
        let n = o.default.get(t);
        if (null == n) {
            let n = h.SubscriptionPlanInfo[t];
            r()(null != n, "Missing hardcoded subscriptionPlan: ".concat(t));
            let i = (0, d.castPremiumSubscriptionAsSkuId)(n.skuId);
            !o.default.isFetchingForSKU(i) && (0, l.fetchSubscriptionPlansForSKU)(i, e)
        }
        return n
    }

    function S(t) {
        let e = Object.keys(a.PauseDuration).filter(t => isNaN(Number(t)));
        if (t.status !== c.SubscriptionStatusTypes.PAUSED) return {
            durations: e,
            currentDaysPaused: 0
        };
        if (null == t.pauseEndsAt) return {
            durations: [],
            currentDaysPaused: 0
        };
        {
            let n = u()(t.currentPeriodStart),
                i = Math.round(u()(t.pauseEndsAt).diff(n, "days", !0)),
                r = [];
            for (let t of e) a.PauseDuration[t] > i && r.push(t);
            return {
                durations: r,
                currentDaysPaused: i
            }
        }
    }
}