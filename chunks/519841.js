function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        AttachmentLinkRefreshExperiment: function() {
            return n
        }
    });
    var s = r("862205");
    let n = (0, s.createExperiment)({
        kind: "user",
        id: "2023-12_attachment_link_refresh",
        label: "Attachment Link Refresh User Experiment",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Refresh expired attachment links",
            config: {
                enabled: !0
            }
        }]
    })
}