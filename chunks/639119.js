function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        usePremiumTrialOffer: function() {
            return l
        }
    });
    var i = n("399606"),
        r = n("295226"),
        a = n("276444"),
        s = n("786397"),
        o = n("474936");

    function l(e) {
        var t, n, l, u, d;
        let _ = (0, s.useTrialOffer)(o.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
            c = (0, s.useTrialOffer)(o.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
            E = (0, s.useTrialOffer)(r.default.getAnyOfUserTrialOfferId([o.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, o.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, o.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, o.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
            I = (0, s.useTrialOffer)(o.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
            T = (0, s.useTrialOffer)(o.PREMIUM_TIER_2_NEW_USER_CPV_TRIAL_ID),
            f = (0, s.useTrialOffer)(o.PREMIUM_TIER_2_REFERRAL_TRIAL_ID),
            S = (0, i.useStateFromStores)([a.default], () => void 0 === e ? null : a.default.getRelevantUserTrialOffer(e));
        return null !== (d = null !== (u = null !== (l = null !== (n = null !== (t = null != f ? f : S) && void 0 !== t ? t : _) && void 0 !== n ? n : c) && void 0 !== l ? l : E) && void 0 !== u ? u : I) && void 0 !== d ? d : T
    }
}