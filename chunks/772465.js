function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PromotionPreviewExperiment: function() {
            return i
        }
    });
    var r = n("862205");
    let i = (0, r.createExperiment)({
        kind: "user",
        id: "2021-06_preview_promotions",
        label: "Promotions Preview",
        defaultConfig: {
            previewEnabled: !1
        },
        treatments: [{
            id: 1,
            label: "Preview Enabled",
            config: {
                previewEnabled: !0
            }
        }]
    })
}