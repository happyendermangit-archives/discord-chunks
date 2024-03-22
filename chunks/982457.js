function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("872717"),
        i = n("151426"),
        a = n("913144"),
        l = n("10641"),
        s = n("872173"),
        o = n("49111"),
        u = {
            async fetchUserTrialOffer() {
                try {
                    let {
                        body: e
                    } = await r.HTTP.get({
                        url: o.Endpoints.USER_TRIAL_OFFER,
                        oldFormErrors: !0
                    });
                    null == e && (0, l.isDismissibleContentDismissed)(i.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, s.removeDismissedContent)(i.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING), a.default.dispatch({
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
                    } = await r.HTTP.post({
                        url: o.Endpoints.USER_TRIAL_OFFER_ACKNOWLEDGED(e.id)
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