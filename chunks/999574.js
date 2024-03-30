function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForMidjourneyOnboarding: function() {
            return o
        }
    });
    var r = n("843646");

    function o(e) {
        return r.MidjourneyOnboardingExperiment.getCurrentConfig({
            location: e
        }).enabled
    }
}