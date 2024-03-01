function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LocalMessageBackgroundSendingExperiment: function() {
            return l
        }
    });
    var a = n("862205");
    let l = (0, a.createExperiment)({
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