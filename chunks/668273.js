function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var s = n("862205");
    let i = (0, s.createExperiment)({
        kind: "user",
        id: "2024-01_chunked_message_attachment_uploads",
        label: "Use chunked uploads for message attachments",
        defaultConfig: {
            enabled: !1,
            chunkSize: 0
        },
        treatments: [{
            id: 1,
            label: "Chunked message attachment uploads",
            config: {
                enabled: !0,
                chunkSize: 8388608
            }
        }]
    });
    var r = i
}