function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HangStatusExperiment: function() {
            return i
        }
    });
    let i = (0, n("818083").createExperiment)({
        kind: "guild",
        id: "2024-04_hang_status_v2",
        label: "Hang Statuses - V2 experiment",
        defaultConfig: {
            enableHangStatus: !1,
            setDefaultStatus: !1,
            allowChannelTopic: !1
        },
        treatments: [{
            id: 1,
            label: "enable hang statuses with no default",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !1,
                allowChannelTopic: !1
            }
        }, {
            id: 2,
            label: "enable hang statuses with default",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !0,
                allowChannelTopic: !1
            }
        }, {
            id: 3,
            label: "enable hang statuses with channel topic",
            config: {
                enableHangStatus: !0,
                setDefaultStatus: !1,
                allowChannelTopic: !0
            }
        }]
    })
}