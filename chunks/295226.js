function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("906280"),
        s = n.n(r),
        a = n("442837"),
        o = n("570140"),
        l = n("594174"),
        u = n("74538"),
        d = n("78839"),
        _ = n("474936");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let E = {
            userOffersLastFetchedAtDate: void 0,
            userAnnualOfferLastFetchedAtDate: void 0,
            userTrialOffers: {},
            userDiscountOffers: {},
            userDiscounts: void 0
        },
        I = E;

    function T() {
        I.userTrialOffers = {}, I.userDiscountOffers = {}, I.userOffersLastFetchedAtDate = void 0, I.userAnnualOfferLastFetchedAtDate = void 0
    }
    let f = () => !0;

    function S() {
        if (null != d.default.getPremiumTypeSubscription()) {
            let e = s()(I.userDiscountOffers[_.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID]),
                t = s()(I.userDiscountOffers[_.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID]);
            return I.userDiscountOffers = {}, null != e ? I.userDiscountOffers[_.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID] = e : null != t && (I.userDiscountOffers[_.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID] = t), I.userTrialOffers = {}, !0
        }
        return !1
    }
    class h extends(i = a.default.PersistedStore) {
        initialize(e) {
            I = null != e ? e : E, this.waitFor(l.default), this.syncWith([l.default], f), this.syncWith([d.default], S)
        }
        getUserTrialOffer(e) {
            if (null !== e) return I.userTrialOffers[e]
        }
        getUserDiscountOffer(e) {
            if (null !== e) return I.userDiscountOffers[e]
        }
        getAnyOfUserTrialOfferId(e) {
            for (let t of e)
                if (null != I.userTrialOffers[t]) return t;
            return null
        }
        hasFetchedOffer() {
            return null != I.userOffersLastFetchedAtDate
        }
        shouldFetchOffer() {
            let e = I.userOffersLastFetchedAtDate;
            return null == e || Date.now() - 1728e5 > e
        }
        shouldFetchAnnualOffer() {
            let e = I.userAnnualOfferLastFetchedAtDate;
            return null == e || Date.now() - 1728e5 > e
        }
        getAlmostExpiringTrialOffers(e) {
            let t = Object.values(_.SubscriptionTrials).map(e => e.id),
                n = l.default.getCurrentUser();
            return (0, u.isPremium)(n) ? [] : Object.values(I.userTrialOffers).filter(n => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + _.USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD)
        }
        getAcknowledgedOffers(e) {
            let t = l.default.getCurrentUser();
            return (0, u.isPremium)(t) ? [] : Object.values(I.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
        }
        getUnacknowledgedDiscountOffers() {
            var e;
            let t = l.default.getCurrentUser();
            return (0, u.isPremium)(t) ? [] : Object.values(null !== (e = I.userDiscountOffers) && void 0 !== e ? e : {}).filter(e => null == e.expires_at && !_.ANNUAL_DISCOUNT_IDS.includes(e.discount_id))
        }
        getUnacknowledgedOffers(e) {
            let t = l.default.getCurrentUser();
            return (0, u.isPremium)(t) ? [] : Object.values(I.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
        }
        hasAnyUnexpiredOffer() {
            return Object.values(I.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
        }
        getReferrer(e) {
            var t;
            return null == e ? null : null === (t = I.userTrialOffers[e]) || void 0 === t ? void 0 : t.referrer
        }
        getState() {
            return I
        }
        forceReset() {
            T()
        }
    }
    c(h, "displayName", "UserOfferStore"), c(h, "persistKey", "UserOfferStore"), c(h, "migrations", [e => {
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
    }]), t.default = new h(o.default, {
        BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            null != t ? I.userTrialOffers[t.trial_id] = t : T(), I.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            null != t ? I.userTrialOffers[t.trial_id] = t : I.userTrialOffers = {}, I.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
            let {
                userTrialOffer: t,
                userDiscount: n,
                userDiscountOffer: i
            } = e;
            null == t && null == n && null == i && T(), null != t ? (I.userTrialOffers[t.trial_id] = t, I.userDiscountOffers = {}) : null != n ? (I.userDiscountOffers[n.discount_id] = n, I.userTrialOffers = {}) : null != i && (I.userDiscountOffers[i.discount_id] = i, I.userTrialOffers = {}), I.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_ANNUAL_USER_OFFER_FETCH_SUCCESS: function(e) {
            let {
                userDiscountOffer: t
            } = e;
            delete I.userDiscountOffers[_.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID], delete I.userDiscountOffers[_.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID], null != t && (I.userDiscountOffers[t.discount_id] = t), I.userAnnualOfferLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
            let {
                userTrialOffer: t,
                userDiscount: n,
                userDiscountOffer: i
            } = e;
            null != t ? I.userTrialOffers[t.trial_id] = t : I.userTrialOffers = {}, null != n ? I.userDiscountOffers[n.discount_id] = n : null != i ? I.userDiscountOffers[i.discount_id] = i : I.userDiscountOffers = {}, I.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_FETCH_FAIL: function() {
            T(), I.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_ANNUAL_USER_OFFER_FETCH_FAIL: function() {
            delete I.userDiscountOffers[_.PREMIUM_TIER_2_ANNUAL_20_PERCENT_DISCOUNT_ID], delete I.userDiscountOffers[_.PREMIUM_TIER_2_ANNUAL_25_PERCENT_DISCOUNT_ID], I.userAnnualOfferLastFetchedAtDate = Date.now()
        },
        LOGOUT: T
    })
}