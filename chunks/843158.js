function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ExperimentRPCServerAnalyticsKillswitch: function() {
            return r
        }
    });
    var i = n("862205");
    let r = (0, i.createExperiment)({
        kind: "user",
        id: "2024-01_rpc_analytics_killswitch",
        label: "RPC Server Analytics Killswitch",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable RPC Server Analytics",
            config: {
                enabled: !0
            }
        }]
    })
}