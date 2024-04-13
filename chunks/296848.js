function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getOrFetchSubscriptionPlan: function() {
            return _
        },
        getSubscriptionPauseDurations: function() {
            return p
        },
        getSubscriptionSKUs: function() {
            return E
        },
        subscriptionCanDowngrade: function() {
            return h
        },
        subscriptionCanSwitchImmediately: function() {
            return I
        }
    }), n("47120"), n("653041"), n("470079");
    var s = n("512722"),
        a = n.n(s),
        i = n("913527"),
        l = n.n(i),
        r = n("99945");
    n("442837");
    var u = n("821849"),
        o = n("509545"),
        d = n("74538"),
        c = n("981631"),
        f = n("474936");

    function E(e) {
        return e.items.map(e => {
            let t = o.default.get(e.planId);
            return a()(null != t, "Unable to fetch plan"), t
        }).map(e => e.skuId)
    }

    function I(e, t, n) {
        let s = e.getCurrentSubscriptionPlanIdForGroup(n);
        return e.type === c.SubscriptionTypes.PREMIUM && null == s || (a()(null != s, "Current subscription has no plan in group"), a()(!(s === f.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && t === f.SubscriptionPlans.PREMIUM_MONTH_TIER_2), "Unexpected plan switch"), n.indexOf(s) < n.indexOf(t))
    }

    function h(e, t, n) {
        return !I(e, t, n)
    }

    function _(e, t) {
        let n = o.default.get(e);
        if (null == n) {
            let n = f.SubscriptionPlanInfo[e];
            a()(null != n, "Missing hardcoded subscriptionPlan: ".concat(e));
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
            let n = l()(e.currentPeriodStart),
                s = Math.round(l()(e.pauseEndsAt).diff(n, "days", !0)),
                a = [];
            for (let e of t) r.PauseDuration[e] > s && a.push(e);
            return {
                durations: a,
                currentDaysPaused: s
            }
        }
    }
}