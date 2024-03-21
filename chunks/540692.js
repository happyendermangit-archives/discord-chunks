function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return p
        }
    }), r("222007");
    var l = r("637612"),
        i = r("446674"),
        n = r("913144"),
        s = r("697218"),
        u = r("179935"),
        f = r("49111");
    let a = null,
        _ = {},
        E = [],
        R = new Set,
        d = !1,
        c = new Set,
        o = new Set,
        I = {},
        L = 0,
        O = null,
        T = () => !0;

    function A(e) {
        c.add(e)
    }

    function S(e) {
        let {
            messages: t
        } = e;
        t.forEach(e => F(e))
    }

    function F(e) {
        let t = e.type === l.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
        if (null == t) return !1;
        if (!o.has(t) && !c.has(t)) {
            var r;
            r = t, c.add(r), n.default.wait(() => (0, u.resolveReferralTrialOffer)(t).catch(f.NOOP_NULL))
        }
    }
    class h extends i.default.Store {
        initialize() {
            this.waitFor(s.default), this.syncWith([s.default], T)
        }
        checkAndFetchReferralsRemaining() {
            null == a && !d && L < 5 && (null == O || O < Date.now()) && (0, u.fetchReferralsRemaining)()
        }
        getReferralsRemaining() {
            return this.checkAndFetchReferralsRemaining(), a
        }
        getSentUserIds() {
            return this.checkAndFetchReferralsRemaining(), null == E ? [] : E
        }
        isFetchingReferralsRemaining() {
            return d
        }
        isFetchingRecipientEligibility(e) {
            return R.has(e)
        }
        getRecipientEligibility(e) {
            return void 0 === _[e] && !R.has(e) && (0, u.checkRecipientEligibility)(e), _[e]
        }
        getRelevantUserTrialOffer(e) {
            return I[e]
        }
        isResolving(e) {
            return c.has(e)
        }
    }
    h.displayName = "ReferralTrialStore";
    var p = new h(n.default, {
        BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
            let {
                userTrialOfferId: t,
                recipientId: r
            } = e;
            if (!d && (0, u.fetchReferralsRemaining)(), !R.has(r) && (0, u.checkRecipientEligibility)(r), !c.has(t)) {
                var l;
                l = t, c.add(l), n.default.wait(() => (0, u.resolveReferralTrialOffer)(t).catch(f.NOOP_NULL))
            }
        },
        BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
            let {} = e;
            d = !0
        },
        BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
            let {
                referrals_remaining: t,
                sent_user_ids: r
            } = e;
            d = !1, a = t, E = r
        },
        BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
            let {} = e;
            d = !1, L += 1, O = Date.now() + 1e3 * Math.pow(2, L)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
            let {
                recipientId: t
            } = e;
            R.add(t)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
            let {
                recipientId: t,
                is_eligible: r
            } = e;
            _[t] = r, R.delete(t)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
            let {
                recipientId: t
            } = e;
            _[t] = !1, R.delete(t)
        },
        BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            (0, u.fetchReferralsRemaining)(), I[t.id] = t, E = [...E, t.user_id]
        },
        BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            null != t && (c.delete(t.id), o.add(t.id), I[t.id] = t)
        },
        BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
            let {
                userTrialOfferId: t
            } = e;
            c.delete(t), o.add(t)
        },
        LOAD_MESSAGES_SUCCESS: S,
        MESSAGE_CREATE: function(e) {
            let {
                message: t
            } = e;
            F(t)
        },
        LOAD_MESSAGES_AROUND_SUCCESS: S,
        LOGOUT: function() {
            a = null, _ = {}, E = [], R = new Set, d = !1, c = new Set, o = new Set, I = {}, L = 0, O = null
        }
    })
}