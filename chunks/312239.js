function(e, t, n) {
    "use strict";
    n.r(t);
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2023-03_store_latest_message_data",
        label: "Store latest message data",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Use latest data from api/gateway",
            config: {
                enabled: !0
            }
        }]
    });
    t.default = r
}