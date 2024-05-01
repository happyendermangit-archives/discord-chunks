function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a, s, o = n("275726"),
        l = n("442837"),
        u = n("570140"),
        d = n("594174"),
        _ = n("281494"),
        c = n("981631");
    let E = null,
        I = {},
        T = [],
        f = new Map,
        S = new Set,
        h = !1,
        A = new Set,
        m = new Set,
        N = {},
        p = 0,
        O = null,
        R = [],
        C = !1,
        g = 0,
        L = !1,
        v = null,
        D = () => !0;

    function M(e) {
        A.add(e)
    }

    function y(e) {
        let {
            messages: t
        } = e;
        t.forEach(e => P(e))
    }

    function P(e) {
        let t = e.type === o.MessageTypes.PREMIUM_REFERRAL ? e.content : null;
        if (null == t) return !1;
        if (!m.has(t) && !A.has(t)) {
            var n;
            n = t, A.add(n), u.default.wait(() => (0, _.resolveReferralTrialOffer)(t).catch(c.NOOP_NULL))
        }
    }
    class U extends(i = l.default.Store) {
        initialize() {
            this.waitFor(d.default), this.syncWith([d.default], D)
        }
        checkAndFetchReferralsRemaining() {
            null == E && !h && p < 5 && (null == O || O < Date.now()) && (0, _.fetchReferralsRemaining)()
        }
        getReferralsRemaining() {
            return this.checkAndFetchReferralsRemaining(), E
        }
        getSentUserIds() {
            return this.checkAndFetchReferralsRemaining(), null == T ? [] : T
        }
        isFetchingReferralsRemaining() {
            return h
        }
        isFetchingRecipientEligibility(e) {
            return S.has(e)
        }
        getRecipientEligibility(e) {
            return void 0 === I[e] && !S.has(e) && (0, _.checkRecipientEligibility)(e), I[e]
        }
        getRelevantUserTrialOffer(e) {
            return N[e]
        }
        isResolving(e) {
            return A.has(e)
        }
        getEligibleUsers() {
            return R
        }
        getFetchingEligibleUsers() {
            return C
        }
        getNextIndexOfEligibleUsers() {
            return g
        }
        getIsEligibleToSendReferrals() {
            return L
        }
        getRefreshAt() {
            return v
        }
        getRelevantReferralTrialOffers() {
            return N
        }
        getRecipientStatus() {
            return f
        }
    }
    s = "ReferralTrialStore", (a = "displayName") in(r = U) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new U(u.default, {
        BILLING_REFERRAL_TRIAL_OFFER_UPDATE: function(e) {
            let {
                userTrialOfferId: t,
                recipientId: n
            } = e;
            if (!h && (0, _.fetchReferralsRemaining)(), !S.has(n) && (0, _.checkRecipientEligibility)(n), !A.has(t)) {
                var i;
                i = t, A.add(i), u.default.wait(() => (0, _.resolveReferralTrialOffer)(t).catch(c.NOOP_NULL))
            }
        },
        BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
            let {} = e;
            L = !1, v = null, h = !0
        },
        BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
            let {
                referrals_remaining: t,
                sent_user_ids: n,
                refresh_at: i,
                recipient_status: r,
                has_eligible_friends: a
            } = e;
            L = null == i && a, h = !1, E = t, T = n, v = i, f = r
        },
        BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
            let {} = e;
            L = !1, v = null, h = !1, p += 1, O = Date.now() + 1e3 * Math.pow(2, p)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
            let {
                recipientId: t
            } = e;
            S.add(t)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
            let {
                recipientId: t,
                is_eligible: n
            } = e;
            I[t] = n, S.delete(t)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
            let {
                recipientId: t
            } = e;
            I[t] = !1, S.delete(t)
        },
        BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            (0, _.fetchReferralsRemaining)(), N[t.id] = t, T = [...T, t.user_id]
        },
        CREATE_REFERRALS_SUCCESS: function(e) {
            let {
                userTrialOffers: t
            } = e;
            for (let e of ((0, _.fetchReferralsRemaining)(), t)) N[e.id] = e, T = [...T, e.user_id]
        },
        BILLING_REFERRAL_RESOLVE_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            null != t && (A.delete(t.id), m.add(t.id), N[t.id] = t)
        },
        BILLING_REFERRAL_RESOLVE_FAIL: function(e) {
            let {
                userTrialOfferId: t
            } = e;
            A.delete(t), m.add(t)
        },
        REFERRALS_FETCH_ELIGIBLE_USER_START: function() {
            C = !0
        },
        REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: function(e) {
            let {
                users: t,
                nextIndex: n
            } = e;
            C = !1, R = t, g = n
        },
        REFERRALS_FETCH_ELIGIBLE_USER_FAIL: function() {
            C = !1
        },
        LOAD_MESSAGES_SUCCESS: y,
        MESSAGE_CREATE: function(e) {
            let {
                message: t
            } = e;
            P(t)
        },
        LOAD_MESSAGES_AROUND_SUCCESS: y,
        LOGOUT: function() {
            E = null, I = {}, T = [], S = new Set, h = !1, A = new Set, m = new Set, N = {}, p = 0, O = null, R = [], C = !1, g = 0, L = !1, v = null, f = new Map
        }
    })
}