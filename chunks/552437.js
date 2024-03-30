function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCurrentPremiumTrialTier: function() {
            return u
        },
        useHasActiveTrial: function() {
            return a
        }
    });
    var r = n("898511"),
        o = n("208454"),
        i = n("428920");
    n("868615");
    var a = function() {
        var e = (0, r.useStateFromStores)([i.default], function() {
            return i.default.getPremiumTypeSubscription()
        });
        return (null == e ? void 0 : e.trialId) != null
    };

    function u() {
        var e = (0, r.useStateFromStores)([i.default], function() {
                return i.default.getPremiumTypeSubscription()
            }),
            t = (0, r.useStateFromStores)([o.default], function() {
                return o.default.getCurrentUser()
            });
        return (null == e ? void 0 : e.trialId) != null ? null == t ? void 0 : t.premiumType : null
    }
}