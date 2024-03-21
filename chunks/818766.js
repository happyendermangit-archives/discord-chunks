function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        sendVoiceChannelActivityNotification: function() {
            return n
        }
    });
    var t = E("872717"),
        o = E("49111");

    function n(e, _) {
        t.HTTP.post({
            url: o.Endpoints.VOICE_CHANNEL_NOTIFICATIONS(e),
            query: {
                first_user: _
            }
        })
    }
}