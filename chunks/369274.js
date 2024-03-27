function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForMidjourneyOnboarding: function() {
            return r
        }
    });
    var i = n("395322");

    function r(e) {
        let {
            enabled: t
        } = i.MidjourneyOnboardingExperiment.getCurrentConfig({
            location: e
        });
        return t
    }
}