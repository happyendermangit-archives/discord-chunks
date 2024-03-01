function(e, t, n) {
    "use strict";
    var s, i;

    function r(e) {
        let {
            sessionId: t,
            userId: n,
            applicationId: s,
            channelId: i,
            streamKey: r
        } = e;
        return {
            session_id: t,
            user_id: n,
            application_id: s,
            channel_id: i,
            stream_key: r
        }
    }

    function a(e, t, n) {
        let {
            session_id: s,
            application_id: i,
            channel_id: r,
            stream_key: a
        } = e;
        return {
            sessionId: s,
            userId: t,
            applicationId: i,
            channelId: r,
            streamKey: a,
            source: n
        }
    }
    n.r(t), n.d(t, {
        BroadcastSourceType: function() {
            return s
        },
        broadcastToServer: function() {
            return r
        },
        broadcastFromServer: function() {
            return a
        }
    }), (i = s || (s = {}))[i.GLOBAL = 0] = "GLOBAL", i[i.GUILD = 1] = "GUILD"
}