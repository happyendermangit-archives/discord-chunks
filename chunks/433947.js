function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BOGOAnnouncementModalExperiment: function() {
            return i
        }
    });
    var r = n("862205");
    let i = (0, r.createExperiment)({
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