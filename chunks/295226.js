function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("906280"),
        a = n.n(r),
        s = n("442837"),
        o = n("570140"),
        l = n("276444"),
        u = n("594174"),
        d = n("74538"),
        _ = n("78839"),
        c = n("474936");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let I = {
            userOffersLastFetchedAtDate: void 0,
            userAnnualOfferLastFetchedAtDate: void 0,
            userTrialOffers: {},
            userDiscountOffers: {},
            userDiscounts: void 0
        },
        T = I;

    function f() {
        T.userTrialOffers = {}, T.userDiscountOffers = {}, T.userOffersLastFetchedAtDate = void 0, T.userAnnualOfferLastFetchedAtDate = void 0
    }
    let S = () => !0;

    function h() {
        if (null != _.default.getPremiumTypeSubscription()) {
            let e = a()(T.userDiscountOffers[c.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID]),
                t = a()(T.userDiscountOffers[c.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID]);
            return T.userDiscountOffers = {}, null != e ? T.userDiscountOffers[c.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID] = e : null != t && (T.userDiscountOffers[c.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID] = t), T.userTrialOffers = {}, !0
        }
        return !1
    }

    function A() {
        var e;
        let t = null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
        if (null == t) return !1;
        let n = Object.entries(l.default.getRelevantReferralTrialOffers()).map(e => {
            let [t, n] = e;
            return n
        }).filter(e => e.user_id === t);
        if (n.length > 0) {
            let e = n[0];
            return T.userTrialOffers[e.trial_id] = e, !0
        }
        return !1
    }
    class m extends(i = s.default.PersistedStore) {
        initialize(e) {
            T = null != e ? e : I, this.waitFor(u.default), this.syncWith([u.default], S), this.syncWith([_.default], h), this.syncWith([l.default], A)
        }
        getUserTrialOffer(e) {
            if (null !== e) return T.userTrialOffers[e]
        }
        getUserDiscountOffer(e) {
            if (null !== e) return T.userDiscountOffers[e]
        }
        getAnyOfUserTrialOfferId(e) {
            for (let t of e)
                if (null != T.userTrialOffers[t]) return t;
            return null
        }
        hasFetchedOffer() {
            return null != T.userOffersLastFetchedAtDate
        }
        shouldFetchOffer() {
            let e = T.userOffersLastFetchedAtDate;
            return null == e || Date.now() - 1728e5 > e
        }
        shouldFetchAnnualOffer() {
            let e = T.userAnnualOfferLastFetchedAtDate;
            return null == e || Date.now() - 1728e5 > e
        }
        getAlmostExpiringTrialOffers(e) {
            let t = Object.values(c.SubscriptionTrials).map(e => e.id),
                n = u.default.getCurrentUser();
            return (0, d.isPremium)(n) ? [] : Object.values(T.userTrialOffers).filter(n => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + c.USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD)
        }
        getAcknowledgedOffers(e) {
            let t = u.default.getCurrentUser();
            return (0, d.isPremium)(t) ? [] : Object.values(T.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
        }
        getUnacknowledgedDiscountOffers() {
            var e;
            let t = u.default.getCurrentUser();
            return (0, d.isPremium)(t) ? [] : Object.values(null !== (e = T.userDiscountOffers) && void 0 !== e ? e : {}).filter(e => null == e.expires_at && !c.ANNUAL_DISCOUNT_IDS.includes(e.discount_id))
        }
        getUnacknowledgedOffers(e) {
            let t = u.default.getCurrentUser();
            return (0, d.isPremium)(t) ? [] : Object.values(T.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
        }
        hasAnyUnexpiredOffer() {
            return Object.values(T.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
        }
        getReferrer(e) {
            var t;
            return null == e ? null : null === (t = T.userTrialOffers[e]) || void 0 === t ? void 0 : t.referrer
        }
        getState() {
            return T
        }
        forceReset() {
            f()
        }
    }
    E(m, "displayName", "UserOfferStore"), E(m, "persistKey", "UserOfferStore"), E(m, "migrations", [e => {
        let t = null == e ? void 0 : e.userDiscounts;
        if (null != t) return {
            ...e,
            userDiscountOffers: t
        }
    }, e => {
        if (null != e) return (null == e ? void 0 : e.userAnnualOfferLastFetchedAtDate) == null ? {
            ...e,
            userAnnualOfferLastFetchedAtDate: void 0
        } : e
    }]), t.default = new m(o.default, {
        BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            null != t ? T.userTrialOffers[t.trial_id] = t : f(), T.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            null != t ? T.userTrialOffers[t.trial_id] = t : T.userTrialOffers = {}, T.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
            let {
                userTrialOffer: t,
                userDiscount: n,
                userDiscountOffer: i
            } = e;
            null == t && null == n && null == i && f(), null != t ? (T.userTrialOffers[t.trial_id] = t, T.userDiscountOffers = {}) : null != n ? (T.userDiscountOffers[n.discount_id] = n, T.userTrialOffers = {}) : null != i && (T.userDiscountOffers[i.discount_id] = i, T.userTrialOffers = {}), T.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_ANNUAL_USER_OFFER_FETCH_SUCCESS: function(e) {
            let {
                userDiscountOffer: t
            } = e;
            delete T.userDiscountOffers[c.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID], delete T.userDiscountOffers[c.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID], null != t && (T.userDiscountOffers[t.discount_id] = t), T.userAnnualOfferLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
            let {
                userTrialOffer: t,
                userDiscount: n,
                userDiscountOffer: i
            } = e;
            null != t ? T.userTrialOffers[t.trial_id] = t : T.userTrialOffers = {}, null != n ? T.userDiscountOffers[n.discount_id] = n : null != i ? T.userDiscountOffers[i.discount_id] = i : T.userDiscountOffers = {}, T.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_FETCH_FAIL: function() {
            f(), T.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_ANNUAL_USER_OFFER_FETCH_FAIL: function() {
            delete T.userDiscountOffers[c.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID], delete T.userDiscountOffers[c.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID], T.userAnnualOfferLastFetchedAtDate = Date.now()
        },
        LOGOUT: f
    })
}