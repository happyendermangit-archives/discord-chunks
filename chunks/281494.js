function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReferralOfferStatus: function() {
            return i
        },
        checkRecipientEligibility: function() {
            return T
        },
        createReferralTrial: function() {
            return S
        },
        createReferralTrials: function() {
            return f
        },
        fetchReferralEligibleUsers: function() {
            return E
        },
        fetchReferralsRemaining: function() {
            return I
        },
        resolveReferralTrialOffer: function() {
            return h
        }
    }), n("47120"), n("653041");
    var i, r, s = n("544891"),
        a = n("570140"),
        o = n("904245"),
        l = n("598077"),
        u = n("944486"),
        d = n("981631");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(r = i || (i = {}))[r.REDEEMED = 1] = "REDEEMED", r[r.PENDING = 2] = "PENDING";
    let c = new class e {
        set(e, t) {
            this.cache.set(e, t)
        }
        get(e) {
            return this._checkExpiration(), this.cache.get(e)
        }
        has(e) {
            return this._checkExpiration(), this.cache.has(e)
        }
        _checkExpiration() {
            this.expiration < Date.now() && this.cache.clear()
        }
        constructor() {
            _(this, "cache", void 0), _(this, "expiration", void 0), this.cache = new Map, this.expiration = Date.now() + 6e5
        }
    };
    async function E(e, t) {
        let n = JSON.stringify({
            index: e,
            searchQuery: t
        });
        if (c.has(n)) return c.get(n);
        let {
            users: i,
            next_index: r
        } = (await s.HTTP.post({
            url: d.Endpoints.GET_REFERRAL_ELIGIBLE_USERS,
            body: {
                index: e,
                limit: 30,
                search_query: t
            },
            oldFormErrors: !0
        })).body, a = {
            users: i.map(e => new l.default(e)),
            nextIndex: r
        };
        return c.set(n, a), a
    }
    let I = () => (a.default.dispatch({
            type: "BILLING_REFERRALS_REMAINING_FETCH_START"
        }), s.HTTP.get({
            url: d.Endpoints.GET_REFERRALS_REMAINING,
            oldFormErrors: !0
        }).then(e => {
            var t, n;
            let i = new Map;
            if (null != e.body && null != e.body.recipient_status)
                for (let t in e.body.recipient_status) {
                    let n = e.body.recipient_status[t];
                    i.set(t, n)
                }
            a.default.dispatch({
                type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : [],
                refresh_at: null !== (n = null === (t = e.body) || void 0 === t ? void 0 : t.refresh_at) && void 0 !== n ? n : null,
                recipient_status: i,
                has_eligible_friends: e.body.has_eligible_friends
            })
        }, () => {
            a.default.dispatch({
                type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
            })
        })),
        T = e => (a.default.dispatch({
            type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
            recipientId: e
        }), s.HTTP.post({
            url: d.Endpoints.CREATE_REFERRAL_PREVIEW(e),
            oldFormErrors: !0
        }).then(t => {
            a.default.dispatch({
                type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                recipientId: e,
                is_eligible: null != t.body && t.body.is_eligible
            })
        }, () => {
            a.default.dispatch({
                type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                recipientId: e
            })
        }));
    async function f(e) {
        let t = [];
        for (let i of e) {
            var n;
            let e = null !== (n = (await s.HTTP.post({
                url: d.Endpoints.CREATE_REFERRAL(i),
                oldFormErrors: !0
            })).body) && void 0 !== n ? n : null;
            null != e && t.push(e)
        }
        return a.default.dispatch({
            type: "CREATE_REFERRALS_SUCCESS",
            userTrialOffers: t
        }), t
    }
    async function S(e) {
        try {
            var t;
            let n = await s.HTTP.post({
                    url: d.Endpoints.CREATE_REFERRAL(e),
                    oldFormErrors: !0
                }),
                i = null !== (t = n.body) && void 0 !== t ? t : null;
            return a.default.dispatch({
                type: "BILLING_CREATE_REFERRAL_SUCCESS",
                userTrialOffer: i
            }), {
                userTrialOffer: i
            }
        } catch (e) {
            if (a.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_FAIL"
                }), e.body.code === d.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                let t = u.default.getCurrentlySelectedChannelId();
                null != t && o.default.sendClydeError(t, e.body.code)
            }
        }
    }
    async function h(e) {
        try {
            var t;
            let n = await s.HTTP.get({
                    url: d.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                    oldFormErrors: !0
                }),
                i = null !== (t = n.body) && void 0 !== t ? t : null;
            return a.default.dispatch({
                type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                userTrialOffer: i
            }), {
                userTrialOffer: i
            }
        } catch (t) {
            a.default.dispatch({
                type: "BILLING_REFERRAL_RESOLVE_FAIL",
                userTrialOfferId: e
            })
        }
    }
}