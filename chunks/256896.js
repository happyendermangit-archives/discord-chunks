function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isEligibleForMidjourneyOnboarding: function() {
            return s
        }
    });
    var i = n("924593");

    function s(e) {
        let {
            enabled: t
        } = i.MidjourneyOnboardingExperiment.getCurrentConfig({
            location: e
        });
        return t
    }
}