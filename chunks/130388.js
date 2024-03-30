function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sendVoiceChannelActivityNotification: function() {
            return i
        }
    });
    var r = n("967888"),
        o = n("281767");

    function i(e, t) {
        r.HTTP.post({
            url: o.Endpoints.VOICE_CHANNEL_NOTIFICATIONS(e),
            query: {
                first_user: t
            }
        })
    }
}