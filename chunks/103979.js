function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i = (0, n("862205").createExperiment)({
        kind: "user",
        id: "2023-10_viewer_clipping",
        label: "Test viewer side clipping",
        defaultConfig: {
            enableViewerClipping: !1,
            ignoreSenderPreference: !1
        },
        treatments: [{
            id: 1,
            label: "Viewer Clipping enabled",
            config: {
                enableViewerClipping: !0,
                ignoreSenderPreference: !1
            }
        }, {
            id: 2,
            label: "Viewer Clipping enabled; For developer testing",
            config: {
                enableViewerClipping: !0,
                ignoreSenderPreference: !0
            }
        }]
    })
}