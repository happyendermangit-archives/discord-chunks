function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BOGOAnnouncementModalExperiment: function() {
            return r
        }
    });
    var r = (0, n("94498").createExperiment)({
        kind: "user",
        id: "2023-06_bogo_announcement_modal",
        label: "BOGO Announcement Modal",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Users will see the BOGO announcement modal",
            config: {
                enabled: !0
            }
        }]
    })
}