function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LocalMessageBackgroundSendingExperiment: function() {
            return i
        }
    });
    let i = (0, n("818083").createExperiment)({
        kind: "user",
        id: "2023-08_local_message_background_sending",
        label: "Send Messages In The Backgrounded",
        defaultConfig: {
            enableBackgroundSending: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Background Sending",
            config: {
                enableBackgroundSending: !0
            }
        }]
    })
}