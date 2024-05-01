function(e, t, n) {
    "use strict";
    var i, r;

    function a(e) {
        let {
            sessionId: t,
            userId: n,
            applicationId: i,
            channelId: r,
            streamKey: a
        } = e;
        return {
            session_id: t,
            user_id: n,
            application_id: i,
            channel_id: r,
            stream_key: a
        }
    }

    function s(e, t, n) {
        let {
            session_id: i,
            application_id: r,
            channel_id: a,
            stream_key: s
        } = e;
        return {
            sessionId: i,
            userId: t,
            applicationId: r,
            channelId: a,
            streamKey: s,
            source: n
        }
    }
    n.r(t), n.d(t, {
        BroadcastSourceType: function() {
            return i
        },
        broadcastFromServer: function() {
            return s
        },
        broadcastToServer: function() {
            return a
        }
    }), (r = i || (i = {}))[r.GLOBAL = 0] = "GLOBAL", r[r.GUILD = 1] = "GUILD"
}