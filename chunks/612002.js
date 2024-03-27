function(e, t, n) {
    "use strict";
    n.r(t);
    let i = (0, n("818083").createExperiment)({
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
    t.default = i
}