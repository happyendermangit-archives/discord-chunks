function(e, t, n) {
    "use strict";
    var r, o;

    function i(e) {
        return {
            session_id: e.sessionId,
            user_id: e.userId,
            application_id: e.applicationId,
            channel_id: e.channelId,
            stream_key: e.streamKey
        }
    }

    function a(e, t, n) {
        return {
            sessionId: e.session_id,
            userId: t,
            applicationId: e.application_id,
            channelId: e.channel_id,
            streamKey: e.stream_key,
            source: n
        }
    }
    n.r(t), n.d(t, {
        BroadcastSourceType: function() {
            return r
        },
        broadcastFromServer: function() {
            return a
        },
        broadcastToServer: function() {
            return i
        }
    }), (o = r || (r = {}))[o.GLOBAL = 0] = "GLOBAL", o[o.GUILD = 1] = "GUILD"
}