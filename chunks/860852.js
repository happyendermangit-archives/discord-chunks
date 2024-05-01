function(e, t, n) {
    "use strict";
    var i, r;

    function s(e) {
        let {
            sessionId: t,
            userId: n,
            applicationId: i,
            channelId: r,
            streamKey: s
        } = e;
        return {
            session_id: t,
            user_id: n,
            application_id: i,
            channel_id: r,
            stream_key: s
        }
    }

    function a(e, t, n) {
        let {
            session_id: i,
            application_id: r,
            channel_id: s,
            stream_key: a
        } = e;
        return {
            sessionId: i,
            userId: t,
            applicationId: r,
            channelId: s,
            streamKey: a,
            source: n
        }
    }
    n.r(t), n.d(t, {
        BroadcastSourceType: function() {
            return i
        },
        broadcastFromServer: function() {
            return a
        },
        broadcastToServer: function() {
            return s
        }
    }), (r = i || (i = {}))[r.GLOBAL = 0] = "GLOBAL", r[r.GUILD = 1] = "GUILD"
}