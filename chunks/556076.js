function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendVoiceChannelActivityNotification: function() {
            return s
        }
    });
    var i = n("544891"),
        r = n("981631");

    function s(e, t) {
        i.HTTP.post({
            url: r.Endpoints.VOICE_CHANNEL_NOTIFICATIONS(e),
            query: {
                first_user: t
            }
        })
    }
}