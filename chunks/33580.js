function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HangStatusExperiment: function() {
            return r
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "guild",
        id: "2023-11_enable_hang_status",
        label: "Hang Statuses",
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