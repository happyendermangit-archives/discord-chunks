function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("5192"),
        r = n("981631"),
        s = n("689938");

    function a(e, t, n, a) {
        if (e.state === r.ApplicationStreamStates.RECONNECTING) return {
            mainText: s.default.Messages.STREAM_RECONNECTING_ERROR,
            supportingText: s.default.Messages.STREAM_RECONNECTING_ERROR_SUBTEXT
        };
        if (e.state === r.ApplicationStreamStates.PAUSED) return n ? {
            mainText: s.default.Messages.STREAM_CAPTURE_PAUSED,
            supportingText: s.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS
        } : {
            mainText: s.default.Messages.STREAM_CAPTURE_PAUSED,
            supportingText: s.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS_VIEWER.format({
                username: i.default.getName(e.guildId, e.channelId, t)
            })
        };
        return a ? {
            mainText: s.default.Messages.STREAM_PREVIEW_PAUSED,
            supportingText: s.default.Messages.STREAM_PREVIEW_PAUSED_SUBTEXT
        } : null
    }
}