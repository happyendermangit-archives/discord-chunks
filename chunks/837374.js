function(e, t, n) {
    "use strict";
    var i, s;

    function r(e) {
        let {
            sessionId: t,
            userId: n,
            applicationId: i,
            channelId: s,
            streamKey: r
        } = e;
        return {
            session_id: t,
            user_id: n,
            application_id: i,
            channel_id: s,
            stream_key: r
        }
    }

    function a(e, t, n) {
        let {
            session_id: i,
            application_id: s,
            channel_id: r,
            stream_key: a
        } = e;
        return {
            sessionId: i,
            userId: t,
            applicationId: s,
            channelId: r,
            streamKey: a,
            source: n
        }
    }
    n.r(t), n.d(t, {
        BroadcastSourceType: function() {
            return i
        },
        broadcastToServer: function() {
            return r
        },
        broadcastFromServer: function() {
            return a
        }
    }), (s = i || (i = {}))[s.GLOBAL = 0] = "GLOBAL", s[s.GUILD = 1] = "GUILD"
}