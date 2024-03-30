function(e, t, n) {
    "use strict";
    n.r(t);
    var r = (0, n("94498").createExperiment)({
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
    t.default = r
}