function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        usePremiumTrialOffer: function() {
            return l
        }
    });
    var i = n("399606"),
        r = n("295226"),
        s = n("276444"),
        a = n("786397"),
        o = n("474936");

    function l(e) {
        var t, n, l, u;
        let d = (0, a.useTrialOffer)(o.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
            _ = (0, a.useTrialOffer)(o.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
            c = (0, a.useTrialOffer)(r.default.getAnyOfUserTrialOfferId([o.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, o.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, o.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, o.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
            E = (0, a.useTrialOffer)(o.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
            I = (0, a.useTrialOffer)(o.PREMIUM_TIER_2_NEW_USER_CPV_TRIAL_ID),
            T = (0, i.useStateFromStores)([s.default], () => void 0 === e ? null : s.default.getRelevantUserTrialOffer(e));
        return null !== (u = null !== (l = null !== (n = null !== (t = null != T ? T : d) && void 0 !== t ? t : _) && void 0 !== n ? n : c) && void 0 !== l ? l : E) && void 0 !== u ? u : I
    }
}