function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForMidjourneyOnboarding: function() {
            return i
        }
    });
    var s = n("924593");

    function i(e) {
        let {
            enabled: t
        } = s.MidjourneyOnboardingExperiment.getCurrentConfig({
            location: e
        });
        return t
    }
}