function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        usePremiumTrialOffer: function() {
            return s
        }
    });
    var r = n("37295"),
        o = n("432683"),
        i = n("567495"),
        a = n("198883"),
        u = n("868615");

    function s(e) {
        var t, n, s, l = (0, a.useTrialOffer)(u.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
            c = (0, a.useTrialOffer)(u.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
            f = (0, a.useTrialOffer)(o.default.getAnyOfUserTrialOfferId([u.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, u.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, u.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, u.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
            d = (0, a.useTrialOffer)(u.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
            _ = (0, r.useStateFromStores)([i.default], function() {
                return void 0 === e ? null : i.default.getRelevantUserTrialOffer(e)
            });
        return null !== (s = null !== (n = null !== (t = null != _ ? _ : l) && void 0 !== t ? t : c) && void 0 !== n ? n : f) && void 0 !== s ? s : d
    }
}