function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        usePremiumTrialOffer: function() {
            return f
        }
    });
    var l = r("65597"),
        i = r("340412"),
        n = r("540692"),
        s = r("833516"),
        u = r("646718");

    function f(e) {
        var t, r, f;
        let a = (0, s.useTrialOffer)(u.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
            _ = (0, s.useTrialOffer)(u.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
            E = (0, s.useTrialOffer)(i.default.getAnyOfUserTrialOfferId([u.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, u.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, u.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, u.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
            R = (0, s.useTrialOffer)(u.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
            d = (0, l.default)([n.default], () => void 0 === e ? null : n.default.getRelevantUserTrialOffer(e));
        return null !== (f = null !== (r = null !== (t = null != d ? d : a) && void 0 !== t ? t : _) && void 0 !== r ? r : E) && void 0 !== f ? f : R
    }
}