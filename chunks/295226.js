function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("442837"),
        s = n("570140"),
        a = n("594174"),
        o = n("74538"),
        l = n("78839"),
        u = n("474936");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let _ = {
            userOffersLastFetchedAtDate: void 0,
            userTrialOffers: {},
            userDiscountOffers: {},
            userDiscounts: void 0
        },
        c = _;

    function E() {
        c.userTrialOffers = {}, c.userDiscountOffers = {}, c.userOffersLastFetchedAtDate = void 0
    }
    let I = () => !0;

    function T() {
        return null != l.default.getPremiumTypeSubscription() && (c.userTrialOffers = {}, c.userDiscountOffers = {}, !0)
    }
    class f extends(i = r.default.PersistedStore) {
        initialize(e) {
            c = null != e ? e : _, this.waitFor(a.default), this.syncWith([a.default], I), this.syncWith([l.default], T)
        }
        getUserTrialOffer(e) {
            if (null !== e) return c.userTrialOffers[e]
        }
        getUserDiscountOffer(e) {
            if (null !== e) return c.userDiscountOffers[e]
        }
        getAnyOfUserTrialOfferId(e) {
            for (let t of e)
                if (null != c.userTrialOffers[t]) return t;
            return null
        }
        hasFetchedOffer() {
            return null != c.userOffersLastFetchedAtDate
        }
        shouldFetchOffer() {
            let e = c.userOffersLastFetchedAtDate;
            return null == e || Date.now() - 1728e5 > e
        }
        getAlmostExpiringTrialOffers(e) {
            let t = Object.values(u.SubscriptionTrials).map(e => e.id),
                n = a.default.getCurrentUser();
            return (0, o.isPremium)(n) ? [] : Object.values(c.userTrialOffers).filter(n => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + u.USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD)
        }
        getAcknowledgedOffers(e) {
            let t = a.default.getCurrentUser();
            return (0, o.isPremium)(t) ? [] : Object.values(c.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
        }
        getUnacknowledgedDiscountOffers() {
            var e;
            let t = a.default.getCurrentUser();
            return (0, o.isPremium)(t) ? [] : Object.values(null !== (e = c.userDiscountOffers) && void 0 !== e ? e : {}).filter(e => null == e.expires_at)
        }
        getUnacknowledgedOffers(e) {
            let t = a.default.getCurrentUser();
            return (0, o.isPremium)(t) ? [] : Object.values(c.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
        }
        hasAnyUnexpiredOffer() {
            return Object.values(c.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
        }
        getReferrer(e) {
            var t;
            return null == e ? null : null === (t = c.userTrialOffers[e]) || void 0 === t ? void 0 : t.referrer
        }
        getState() {
            return c
        }
        forceReset() {
            E()
        }
    }
    d(f, "displayName", "UserOfferStore"), d(f, "persistKey", "UserOfferStore"), d(f, "migrations", [e => {
        let t = null == e ? void 0 : e.userDiscounts;
        if (null != t) return {
            ...e,
            userDiscountOffers: t
        }
    }]), t.default = new f(s.default, {
        BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            null != t ? c.userTrialOffers[t.trial_id] = t : E(), c.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            null != t ? c.userTrialOffers[t.trial_id] = t : c.userTrialOffers = {}, c.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
            let {
                userTrialOffer: t,
                userDiscount: n,
                userDiscountOffer: i
            } = e;
            null == t && null == n && null == i && E(), null != t ? (c.userTrialOffers[t.trial_id] = t, c.userDiscountOffers = {}) : null != n ? (c.userDiscountOffers[n.discount_id] = n, c.userTrialOffers = {}) : null != i && (c.userDiscountOffers[i.discount_id] = i, c.userTrialOffers = {}), c.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
            let {
                userTrialOffer: t,
                userDiscount: n,
                userDiscountOffer: i
            } = e;
            null != t ? c.userTrialOffers[t.trial_id] = t : c.userTrialOffers = {}, null != n ? c.userDiscountOffers[n.discount_id] = n : null != i ? c.userDiscountOffers[i.discount_id] = i : c.userDiscountOffers = {}, c.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_FETCH_FAIL: function() {
            E(), c.userOffersLastFetchedAtDate = Date.now()
        },
        LOGOUT: E
    })
}