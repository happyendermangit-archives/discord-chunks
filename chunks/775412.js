function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCurrentPremiumTrialTier: function() {
            return o
        },
        useHasActiveTrial: function() {
            return a
        }
    });
    var i = n("442837"),
        r = n("594174"),
        s = n("78839");
    n("474936");
    let a = () => {
        let e = (0, i.useStateFromStores)([s.default], () => s.default.getPremiumTypeSubscription());
        return (null == e ? void 0 : e.trialId) != null
    };

    function o() {
        let e = (0, i.useStateFromStores)([s.default], () => s.default.getPremiumTypeSubscription()),
            t = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser());
        return (null == e ? void 0 : e.trialId) != null ? null == t ? void 0 : t.premiumType : null
    }
}