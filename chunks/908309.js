function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        useUserEligibleForNitroTenureRewardCard: function() {
            return o
        },
        isUserEligibleForNitroTenureRewardCard: function() {
            return n
        }
    });
    var t = E("719962");

    function o(e) {
        let {
            location: _
        } = e, {
            enableNitroTenureRewardCard: E
        } = t.NitroTenureRewardCardExperiment.useExperiment({
            location: _
        }, {
            autoTrackExposure: !1
        });
        return E
    }

    function n(e) {
        let {
            location: _
        } = e, {
            enableNitroTenureRewardCard: E
        } = t.NitroTenureRewardCardExperiment.getCurrentConfig({
            location: _
        }, {
            autoTrackExposure: !1
        });
        return E
    }
}