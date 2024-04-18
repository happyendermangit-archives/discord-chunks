function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("275726"),
        l = n("442837"),
        u = n("570140"),
        d = n("594174"),
        _ = n("281494"),
        c = n("981631");
    let E = null,
        I = {},
        T = [],
        f = new Set,
        S = !1,
        h = new Set,
        A = new Set,
        m = {},
        N = 0,
        p = null,
        O = [],
        R = !1,
        C = 0,
        g = !1,
        L = null,
        D = () => !0;

    function v(e) {
        h.add(e)
    }

    function M(e) {
        let {
            messages: t
        } = e;
        t.forEach(e => y(e))
    }

    function y(e) {
        let t = e.type === o.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
        if (null == t) return !1;
        if (!A.has(t) && !h.has(t)) {
            var n;
            n = t, h.add(n), u.default.wait(() => (0, _.resolveReferralTrialOffer)(t).catch(c.NOOP_NULL))
        }
    }
    class P extends(i = l.default.Store) {
        initialize() {
            this.waitFor(d.default), this.syncWith([d.default], D)
        }
        checkAndFetchReferralsRemaining() {
            null == E && !S && N < 5 && (null == p || p < Date.now()) && (0, _.fetchReferralsRemaining)()
        }
        getReferralsRemaining() {
            return this.checkAndFetchReferralsRemaining(), E
        }
        getSentUserIds() {
            return this.checkAndFetchReferralsRemaining(), null == T ? [] : T
        }
        isFetchingReferralsRemaining() {
            return S
        }
        isFetchingRecipientEligibility(e) {
            return f.has(e)
        }
        getRecipientEligibility(e) {
            return void 0 === I[e] && !f.has(e) && (0, _.checkRecipientEligibility)(e), I[e]
        }
        getRelevantUserTrialOffer(e) {
            return m[e]
        }
        isResolving(e) {
            return h.has(e)
        }
        getEligibleUsers() {
            return O
        }
        getFetchingEligibleUsers() {
            return R
        }
        getNextIndexOfEligibleUsers() {
            return C
        }
        getIsEligibleToSendReferrals() {
            return g
        }
        getRefreshAt() {
            return L
        }
    }
    a = "ReferralTrialStore", (s = "displayName") in(r = P) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new P(u.default, {
        BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
            let {
                userTrialOfferId: t,
                recipientId: n
            } = e;
            if (!S && (0, _.fetchReferralsRemaining)(), !f.has(n) && (0, _.checkRecipientEligibility)(n), !h.has(t)) {
                var i;
                i = t, h.add(i), u.default.wait(() => (0, _.resolveReferralTrialOffer)(t).catch(c.NOOP_NULL))
            }
        },
        BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
            let {} = e;
            g = !1, L = null, S = !0
        },
        BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
            let {
                referrals_remaining: t,
                sent_user_ids: n,
                refresh_at: i
            } = e;
            g = null == i, S = !1, E = t, T = n, L = i
        },
        BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
            let {} = e;
            g = !1, L = null, S = !1, N += 1, p = Date.now() + 1e3 * Math.pow(2, N)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
            let {
                recipientId: t
            } = e;
            f.add(t)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
            let {
                recipientId: t,
                is_eligible: n
            } = e;
            I[t] = n, f.delete(t)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
            let {
                recipientId: t
            } = e;
            I[t] = !1, f.delete(t)
        },
        BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            (0, _.fetchReferralsRemaining)(), m[t.id] = t, T = [...T, t.user_id]
        },
        CREATE_REFERRALS_SUCCESS: function(e) {
            let {
                userTrialOffers: t
            } = e;
            for (let e of ((0, _.fetchReferralsRemaining)(), t)) m[e.id] = e, T = [...T, e.user_id]
        },
        BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            null != t && (h.delete(t.id), A.add(t.id), m[t.id] = t)
        },
        BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
            let {
                userTrialOfferId: t
            } = e;
            h.delete(t), A.add(t)
        },
        REFERRALS_FETCH_ELIGIBLE_USER_START: function() {
            R = !0
        },
        REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: function(e) {
            let {
                users: t,
                nextIndex: n
            } = e;
            R = !1, O = t, C = n
        },
        REFERRALS_FETCH_ELIGIBLE_USER_FAIL: function() {
            R = !1
        },
        LOAD_MESSAGES_SUCCESS: M,
        MESSAGE_CREATE: function(e) {
            let {
                message: t
            } = e;
            y(t)
        },
        LOAD_MESSAGES_AROUND_SUCCESS: M,
        LOGOUT: function() {
            E = null, I = {}, T = [], f = new Set, S = !1, h = new Set, A = new Set, m = {}, N = 0, p = null, O = [], R = !1, C = 0, g = !1, L = null
        }
    })
}