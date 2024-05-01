function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendVoiceChannelActivityNotification: function() {
            return a
        }
    });
    var i = n("544891"),
        r = n("981631");

    function a(e, t) {
        i.HTTP.post({
            url: r.Endpoints.VOICE_CHANNEL_NOTIFICATIONS(e),
            query: {
                first_user: t
            }
        })
    }
}