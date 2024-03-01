function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SilentMessagesExperiment: function() {
            return r
        }
    });
    var l = n("862205");
    let r = (0, l.createExperiment)({
        kind: "user",
        id: "2023-01_silent_messages",
        label: "Silent Messages",
        defaultConfig: {
            allowSending: !1
        },
        treatments: [{
            id: 1,
            label: "Allow sending @silent messages",
            config: {
                allowSending: !0
            }
        }]
    })
}