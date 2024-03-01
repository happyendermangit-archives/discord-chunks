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
        _ = [],
        E = new Set,
        c = !1,
        d = new Set,
        R = new Set,
        I = {},
        L = 0,
        S = null,
        O = () => !0;

    function T(e) {
        d.add(e)
    }

    function A(e) {
        let {
            messages: t
        } = e;
        t.forEach(e => p(e))
    }

    function p(e) {
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
            null == f && !c && L < 5 && (null == S || S < Date.now()) && (0, s.fetchReferralsRemaining)()
        }
        getReferralsRemaining() {
            return this.checkAndFetchReferralsRemaining(), f
        }
        getSentUserIds() {
            return this.checkAndFetchReferralsRemaining(), null == _ ? [] : _
        }
        isFetchingReferralsRemaining() {
            return c
        }
        isFetchingRecipientEligibility(e) {
            return E.has(e)
        }
        getRecipientEligibility(e) {
            return void 0 === o[e] && !E.has(e) && (0, s.checkRecipientEligibility)(e), o[e]
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
            if (!c && (0, s.fetchReferralsRemaining)(), !E.has(r) && (0, s.checkRecipientEligibility)(r), !d.has(t)) {
                var n;
                n = t, d.add(n), l.default.wait(() => (0, s.resolveReferralTrialOffer)(t).catch(a.NOOP_NULL))
            }
        },
        BILLING_REFERRALS_REMAINING_FETCH_START: function(e) {
            let {} = e;
            c = !0
        },
        BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: function(e) {
            let {
                referrals_remaining: t,
                sent_user_ids: r
            } = e;
            c = !1, f = t, _ = r
        },
        BILLING_REFERRALS_REMAINING_FETCH_FAIL: function(e) {
            let {} = e;
            c = !1, L += 1, S = Date.now() + 1e3 * Math.pow(2, L)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_START: function(e) {
            let {
                recipientId: t
            } = e;
            E.add(t)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS: function(e) {
            let {
                recipientId: t,
                is_eligible: r
            } = e;
            o[t] = r, E.delete(t)
        },
        BILLING_CREATE_REFERRAL_PREVIEW_FAIL: function(e) {
            let {
                recipientId: t
            } = e;
            o[t] = !1, E.delete(t)
        },
        BILLING_CREATE_REFERRAL_SUCCESS: function(e) {
            let {
                userTrialOffer: t
            } = e;
            (0, s.fetchReferralsRemaining)(), I[t.id] = t, _ = [..._, t.user_id]
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
        LOAD_MESSAGES_SUCCESS: A,
        MESSAGE_CREATE: function(e) {
            let {
                message: t
            } = e;
            p(t)
        },
        LOAD_MESSAGES_AROUND_SUCCESS: A,
        LOGOUT: function() {
            f = null, o = {}, _ = [], E = new Set, c = !1, d = new Set, R = new Set, I = {}, L = 0, S = null
        }
    })
}