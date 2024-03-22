function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return c
        }
    }), r("222007");
    var l = r("446674"),
        i = r("913144"),
        n = r("697218"),
        s = r("719923"),
        u = r("521012"),
        f = r("646718");
    let a = {
            userOffersLastFetchedAtDate: void 0,
            userTrialOffers: {},
            userDiscountOffers: {},
            userDiscounts: void 0
        },
        _ = a;

    function E() {
        _.userTrialOffers = {}, _.userDiscountOffers = {}, _.userOffersLastFetchedAtDate = void 0
    }
    let R = () => !0;

    function d() {
        let e = u.default.getPremiumTypeSubscription();
        return null != e && (_.userTrialOffers = {}, _.userDiscountOffers = {}, !0)
    }
    class o extends l.default.PersistedStore {
        initialize(e) {
            _ = null != e ? e : a, this.waitFor(n.default), this.syncWith([n.default], R), this.syncWith([u.default], d)
        }
        getUserTrialOffer(e) {
            if (null !== e) return _.userTrialOffers[e]
        }
        getUserDiscountOffer(e) {
            if (null !== e) return _.userDiscountOffers[e]
        }
        getAnyOfUserTrialOfferId(e) {
            for (let t of e)
                if (null != _.userTrialOffers[t]) return t;
            return null
        }
        hasFetchedOffer() {
            return null != _.userOffersLastFetchedAtDate
        }
        shouldFetchOffer() {
            let e = _.userOffersLastFetchedAtDate;
            return null == e || Date.now() - 1728e5 > e
        }
        getAlmostExpiringTrialOffers(e) {
            let t = Object.values(f.SubscriptionTrials).map(e => e.id),
                r = n.default.getCurrentUser();
            return (0, s.isPremium)(r) ? [] : Object.values(_.userTrialOffers).filter(r => t.includes(r.trial_id) && null != r.expires_at && null != r.subscription_trial && e.includes(r.subscription_trial.sku_id) && Date.parse(r.expires_at) < Date.now() + f.USER_PREMIUM_SUBSCRIPTION_TRIAL_EXPIRES_APPROACHING_5_DAY_THRESHOLD)
        }
        getAcknowledgedOffers(e) {
            let t = n.default.getCurrentUser();
            return (0, s.isPremium)(t) ? [] : Object.values(_.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
        }
        getUnacknowledgedDiscountOffers() {
            var e;
            let t = n.default.getCurrentUser();
            return (0, s.isPremium)(t) ? [] : Object.values(null !== (e = _.userDiscountOffers) && void 0 !== e ? e : {}).filter(e => null == e.expires_at)
        }
        getUnacknowledgedOffers(e) {
            let t = n.default.getCurrentUser();
            return (0, s.isPremium)(t) ? [] : Object.values(_.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
        }
        hasAnyUnexpiredOffer() {
            return Object.values(_.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
        }
        getState() {
            return _
        }
        forceReset() {
            E()
        }
    }
    o.displayName = "UserOfferStore", o.persistKey = "UserOfferStore", o.migrations = [e => {
        let t = null == e ? void 0 : e.userDiscounts;
        if (null != t) return {
            ...e,
            userDiscountOffers: t
        }
    }];
    var c = new o(i.default, {
        BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            null != t ? _.userTrialOffers[t.trial_id] = t : E(), _.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            null != t ? _.userTrialOffers[t.trial_id] = t : _.userTrialOffers = {}, _.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
            let {
                userTrialOffer: t,
                userDiscount: r,
                userDiscountOffer: l
            } = e;
            null == t && null == r && null == l && E(), null != t ? (_.userTrialOffers[t.trial_id] = t, _.userDiscountOffers = {}) : null != r ? (_.userDiscountOffers[r.discount_id] = r, _.userTrialOffers = {}) : null != l && (_.userDiscountOffers[l.discount_id] = l, _.userTrialOffers = {}), _.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
            let {
                userTrialOffer: t,
                userDiscount: r,
                userDiscountOffer: l
            } = e;
            null != t ? _.userTrialOffers[t.trial_id] = t : _.userTrialOffers = {}, null != r ? _.userDiscountOffers[r.discount_id] = r : null != l ? _.userDiscountOffers[l.discount_id] = l : _.userDiscountOffers = {}, _.userOffersLastFetchedAtDate = Date.now()
        },
        BILLING_USER_OFFER_FETCH_FAIL: function() {
            E(), _.userOffersLastFetchedAtDate = Date.now()
        },
        LOGOUT: E
    })
}