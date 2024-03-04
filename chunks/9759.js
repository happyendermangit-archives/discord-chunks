function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CAN_VIEW_BROADCASTS_BUCKETS: function() {
            return r
        },
        default: function() {
            return a
        }
    });
    var i = n("862205");
    let s = (0, i.createExperiment)({
            kind: "user",
            id: "2023-04_broadcasting",
            label: "Go Live Broadcasting",
            defaultConfig: {
                canBroadcast: !1,
                canViewBroadcasts: !1
            },
            treatments: [{
                id: 1,
                label: "Allow user to Broadcast to friends & guilds",
                config: {
                    canBroadcast: !0,
                    canViewBroadcasts: !0
                }
            }, {
                id: 2,
                label: "Cannot broadcast, cannot view broadcasts",
                config: {
                    canBroadcast: !1,
                    canViewBroadcasts: !0
                }
            }]
        }),
        r = s.definition.treatments.filter(e => e.config.canViewBroadcasts).map(e => e.id);
    var a = s
}