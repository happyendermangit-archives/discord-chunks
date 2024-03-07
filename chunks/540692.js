function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return h
        }
    }), r("222007");
    var n = r("637612"),
        i = r("446674"),
        l = r("913144"),
        u = r("697218"),
        s = r("179935"),
        a = r("49111");
    let f = null,
        o = {},
        c = [],
        _ = new Set,
        E = !1,
        d = new Set,
        R = new Set,
        I = {},
        L = 0,
        S = null,
        O = () => !0;

    function T(e) {
        d.add(e)
    }

    function p(e) {
        let {
            messages: t
        } = e;
        t.forEach(e => A(e))
    }

    function A(e) {
        let t = e.type === n.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
        if (null == t) return !1;
        if (!R.has(t) && !d.has(t)) {
            var r;
            r = t, d.add(r), l.default.wait(() => (0, s.resolveReferralTrialOffer)(t).catch(a.NOOP_NULL))
        }
    }
    class F extends i.default.Store {
        initialize() {
            this.waitFor(u.default), this.syncWith([u.default], O)
        }
        checkAndFetchReferralsRemaining() {
            null == f && !E && L < 5 && (null == S || S < Date.now()) && (0, s.fetchReferralsRemaining)()
        }
        getReferralsRemaining() {
            return this.checkAndFetchReferralsRemaining(), f
        }
        getSentUserIds() {
            return this.checkAndFetchReferralsRemaining(), null == c ? [] : c
        }
        isFetchingReferralsRemaining() {
            return E
        }
        isFetchingRecipientEligibility(e) {
            return _.has(e)
        }
        getRecipientEligibility(e) {
            return void 0 === o[e] && !_.has(e) && (0, s.checkRecipientEligibility)(e), o[e]
        }
        getRelevantUserTrialOffer(e) {
            return I[e]
        }
        isResolving(e) {
            return d.has(e)
        }
    }
    F.displayName = "ReferralTrialStore";
    var h = new F(l.default, {
        BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
            let {
                userTrialOfferId: t,
                recipientId: r
            } = e;
            if (!E && (0, s.fetchReferralsRemaining)(), !_.has(r) && (0, s.checkRecipientEligibility)(r), !d.has(t)) {
                var n;
                n = t, d.add(n), l.default.wait(() => (0, s.resolveReferralTrialOffer)(t).catch(a.NOOP_NULL))
            }
        },
        BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
            let {} = e;
            E = !0
        },
        BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
            let {
                referrals_remaining: t,
                sent_user_ids: r
            } = e;
            E = !1, f = t, c = r
        },
        BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
            let {} = e;
            E = !1, L += 1, S = Date.now() + 1e3 * Math.pow(2, L)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
            let {
                recipientId: t
            } = e;
            _.add(t)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
            let {
                recipientId: t,
                is_eligible: r
            } = e;
            o[t] = r, _.delete(t)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
            let {
                recipientId: t
            } = e;
            o[t] = !1, _.delete(t)
        },
        BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            (0, s.fetchReferralsRemaining)(), I[t.id] = t, c = [...c, t.user_id]
        },
        BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            null != t && (d.delete(t.id), R.add(t.id), I[t.id] = t)
        },
        BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
            let {
                userTrialOfferId: t
            } = e;
            d.delete(t), R.add(t)
        },
        LOAD_MESSAGES_SUCCESS: p,
        MESSAGE_CREATE: function(e) {
            let {
                message: t
            } = e;
            A(t)
        },
        LOAD_MESSAGES_AROUND_SUCCESS: p,
        LOGOUT: function() {
            f = null, o = {}, c = [], _ = new Set, E = !1, d = new Set, R = new Set, I = {}, L = 0, S = null
        }
    })
}