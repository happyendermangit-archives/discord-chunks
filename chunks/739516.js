function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isUserEligibleForNitroTenureRewardCard: function() {
            return i
        },
        useUserEligibleForNitroTenureRewardCard: function() {
            return o
        }
    });
    var r = n("146401");

    function o(e) {
        var t = e.location;
        return r.NitroTenureRewardCardExperiment.useExperiment({
            location: t
        }, {
            autoTrackExposure: !1
        }).enableNitroTenureRewardCard
    }

    function i(e) {
        var t = e.location;
        return r.NitroTenureRewardCardExperiment.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: !1
        }).enableNitroTenureRewardCard
    }
}