function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isUserEligibleForNitroTenureRewardCard: function() {
            return a
        },
        useUserEligibleForNitroTenureRewardCard: function() {
            return r
        }
    });
    var i = n("290031");

    function r(e) {
        let {
            location: t
        } = e, {
            enableNitroTenureRewardCard: n
        } = i.NitroTenureRewardCardExperiment.useExperiment({
            location: t
        }, {
            autoTrackExposure: !1
        });
        return n
    }

    function a(e) {
        let {
            location: t
        } = e, {
            enableNitroTenureRewardCard: n
        } = i.NitroTenureRewardCardExperiment.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: !1
        });
        return n
    }
}