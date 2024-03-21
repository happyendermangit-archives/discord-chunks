function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        fetchReferralsRemaining: function() {
            return f
        },
        checkRecipientEligibility: function() {
            return a
        },
        createReferralTrial: function() {
            return _
        },
        resolveReferralTrialOffer: function() {
            return E
        }
    });
    var l = r("872717"),
        i = r("913144"),
        n = r("819689"),
        s = r("18494"),
        u = r("49111");
    let f = () => (i.default.dispatch({
            type: "BILLING_REFERRALS_REMAINING_FETCH_START"
        }), l.HTTP.get({
            url: u.Endpoints.GET_REFERRALS_REMAINING,
            oldFormErrors: !0
        }).then(e => {
            i.default.dispatch({
                type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
            })
        }, () => {
            i.default.dispatch({
                type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
            })
        })),
        a = e => (i.default.dispatch({
            type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
            recipientId: e
        }), l.HTTP.post({
            url: u.Endpoints.CREATE_REFERRAL_PREVIEW(e),
            oldFormErrors: !0
        }).then(t => {
            i.default.dispatch({
                type: "BILLING_CREATE_REFERRAL_PREVIEW_SUCCESS",
                recipientId: e,
                is_eligible: null != t.body && t.body.is_eligible
            })
        }, () => {
            i.default.dispatch({
                type: "BILLING_CREATE_REFERRAL_PREVIEW_FAIL",
                recipientId: e
            })
        }));
    async function _(e) {
        try {
            var t;
            let r = await l.HTTP.post({
                    url: u.Endpoints.CREATE_REFERRAL(e),
                    oldFormErrors: !0
                }),
                n = null !== (t = r.body) && void 0 !== t ? t : null;
            return i.default.dispatch({
                type: "BILLING_CREATE_REFERRAL_SUCCESS",
                userTrialOffer: n
            }), {
                userTrialOffer: n
            }
        } catch (e) {
            if (i.default.dispatch({
                    type: "BILLING_CREATE_REFERRAL_FAIL"
                }), e.body.code === u.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                let t = s.default.getCurrentlySelectedChannelId();
                null != t && n.default.sendClydeError(t, e.body.code)
            }
        }
    }
    async function E(e) {
        try {
            var t;
            let r = await l.HTTP.get({
                    url: u.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
                    oldFormErrors: !0
                }),
                n = null !== (t = r.body) && void 0 !== t ? t : null;
            return i.default.dispatch({
                type: "BILLING_REFERRAL_RESOLVE_SUCCESS",
                userTrialOffer: n
            }), {
                userTrialOffer: n
            }
        } catch (t) {
            i.default.dispatch({
                type: "BILLING_REFERRAL_RESOLVE_FAIL",
                userTrialOfferId: e
            })
        }
    }
}