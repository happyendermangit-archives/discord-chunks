function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        checkRecipientEligibility: function() {
            return u
        },
        createReferralTrial: function() {
            return d
        },
        fetchReferralsRemaining: function() {
            return l
        },
        resolveReferralTrialOffer: function() {
            return _
        }
    });
    var i = n("544891"),
        r = n("570140"),
        s = n("904245");
    n("598077");
    var a = n("944486"),
        o = n("981631");
    let l = () => (r.default.dispatch({
            type: "BILLING_REFERRALS_REMAINING_FETCH_START"
        }), i.HTTP.get({
            url: o.Endpoints.GET_REFERRALS_REMAINING,
            oldFormErrors: !0
        }).then(e => {
            r.default.dispatch({
                type: "BILLING_REFERRALS_REMAINING_FETCH_SUCCESS",
                referrals_remaining: null != e.body && null != e.body.referrals_remaining ? e.body.referrals_remaining : 0,
                sent_user_ids: null != e.body && null != e.body.sent_user_ids ? e.body.sent_user_ids : []
            })
        }, () => {
            r.default.dispatch({
                type: "BILLING_REFERRALS_REMAINING_FETCH_FAIL"
            })
        })),
        u = e => (r.default.dispatch({
            type: "BILLING_CREATE_REFERRAL_PREVIEW_START",
            recipientId: e
        }), i.HTTP.post({
            url: o.Endpoints.CREATE_REFERRAL_PREVIEW(e),
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
    async function d(e) {
        try {
            var t;
            let n = await i.HTTP.post({
                    url: o.Endpoints.CREATE_REFERRAL(e),
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
                }), e.body.code === o.AbortCodes.INVALID_MESSAGE_SEND_USER) {
                let t = a.default.getCurrentlySelectedChannelId();
                null != t && s.default.sendClydeError(t, e.body.code)
            }
        }
    }
    async function _(e) {
        try {
            var t;
            let n = await i.HTTP.get({
                    url: o.Endpoints.REFERRAL_OFFER_ID_RESOLVE(e),
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