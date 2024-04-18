function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        checkRecipientEligibility: function() {
            return _
        },
        createReferralTrial: function() {
            return E
        },
        createReferralTrials: function() {
            return c
        },
        fetchReferralEligibleUsers: function() {
            return u
        },
        fetchReferralsRemaining: function() {
            return d
        },
        resolveReferralTrialOffer: function() {
            return I
        }
    }), n("653041"), n("47120");
    var i = n("544891"),
        r = n("570140"),
        s = n("904245"),
        a = n("598077"),
        o = n("944486"),
        l = n("981631");
    async function u(e, t) {
        let {
            users: n,
            next_index: r
        } = (await i.HTTP.post({
            url: l.Endpoints.GET_REFERRAL_ELIGIBLE_USERS,
            body: {
                index: e,
                limit: 30,
                search_query: t
            },
            oldFormErrors: !0
        })).body;
        return {
            users: n.map(e => new a.default(e)),
            nextIndex: r
        }
    }
    let d = () => (r.default.dispatch({
            type: "BILLING_REFERRALS_REMAINING_FETCH_START"
        }), i.HTTP.get({
            url: l.Endpoints.GET_REFERRALS_REMAINING,
            oldFormErrors: !0
        }).then(e => {
            var t, n;
            r.default.dispatch({
                type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : [],
                refresh_at: null !== (n = null === (t = e.body) || void 0 === t ? void 0 : t.refresh_at) && void 0 !== n ? n : null
            })
        }, () => {
            r.default.dispatch({
                type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
            })
        })),
        _ = e => (r.default.dispatch({
            type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
            recipientId: e
        }), i.HTTP.post({
            url: l.Endpoints.CREATE_REFERRAL_PREVIEW(e),
            oldFormErrors: !0
        }).then(t => {
            r.default.dispatch({
                type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                recipientId: e,
                is_eligible: null != t.body && t.body.is_eligible
            })
        }, () => {
            r.default.dispatch({
                type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                recipientId: e
            })
        }));
    async function c(e) {
        let t = [];
        for (let r of e) {
            var n;
            let e = null !== (n = (await i.HTTP.post({
                url: l.Endpoints.CREATE_REFERRAL(r),
                oldFormErrors: !0
            })).body) && void 0 !== n ? n : null;
            null != e && t.push(e)
        }
        return r.default.dispatch({
            type: "CREATE_REFERRALS_SUCCESS",
            userTrialOffers: t
        }), t
    }
    async function E(e) {
        try {
            var t;
            let n = await i.HTTP.post({
                    url: l.Endpoints.CREATE_REFERRAL(e),
                    oldFormErrors: !0
                }),
                s = null !== (t = n.body) && void 0 !== t ? t : null;
            return r.default.dispatch({
                type: "BILLING_CREATE_REFERRAL_SUCCESS",
                userTrialOffer: s
            }), {
                userTrialOffer: s
            }
        } catch (e) {
            if (r.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_FAIL"
                }), e.body.code === l.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                let t = o.default.getCurrentlySelectedChannelId();
                null != t && s.default.sendClydeError(t, e.body.code)
            }
        }
    }
    async function I(e) {
        try {
            var t;
            let n = await i.HTTP.get({
                    url: l.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                    oldFormErrors: !0
                }),
                s = null !== (t = n.body) && void 0 !== t ? t : null;
            return r.default.dispatch({
                type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                userTrialOffer: s
            }), {
                userTrialOffer: s
            }
        } catch (t) {
            r.default.dispatch({
                type: "BILLING_REFERRAL_RESOLVE_FAIL",
                userTrialOfferId: e
            })
        }
    }
}