function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("524437"),
        a = n("570140"),
        s = n("605236"),
        o = n("675478"),
        l = n("981631");
    t.default = {
        async fetchUserTrialOffer() {
            try {
                let {
                    body: e
                } = await i.HTTP.get({
                    url: l.Endpoints.USER_TRIAL_OFFER,
                    oldFormErrors: !0
                });
                null == e && (0, s.isDismissibleContentDismissed)(r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, o.removeDismissedContent)(r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), a.default.dispatch({
                    type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS",
                    userTrialOffer: e
                })
            } catch (e) {
                a.default.dispatch({
                    type: "BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS"
                })
            }
        },
        async acknowledgeUserTrialOffer(e) {
            if (null == e.expires_at) try {
                let {
                    body: t
                } = await i.HTTP.post({
                    url: l.Endpoints.USER_TRIAL_OFFER_ACKNOWLEDGED(e.id)
                });
                a.default.dispatch({
                    type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
                    userTrialOffer: t
                })
            } catch (e) {
                404 === e.status && a.default.dispatch({
                    type: "BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS",
                    userTrialOffer: null
                })
            }
        }
    }
}