function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldMountActivityIFrameFromGatewayUpdateWithoutSessionIdCheck: function() {
            return r
        }
    });
    var i = n("862205");
    let s = (0, i.createExperiment)({
        kind: "user",
        id: "2024-02_activityiframemountfromgatewayupdate",
        label: "mount activity iframe in response to gateway update",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "enabled",
            config: {
                enabled: !0
            }
        }]
    });

    function r(e) {
        return s.getCurrentConfig({
            location: e
        }).enabled
    }
}