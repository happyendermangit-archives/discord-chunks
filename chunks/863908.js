function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("5192"),
        r = n("981631"),
        a = n("689938");

    function s(e, t, n, s) {
        if (e.state === r.ApplicationStreamStates.RECONNECTING) return {
            mainText: a.default.Messages.STREAM_RECONNECTING_ERROR,
            supportingText: a.default.Messages.STREAM_RECONNECTING_ERROR_SUBTEXT
        };
        if (e.state === r.ApplicationStreamStates.PAUSED) return n ? {
            mainText: a.default.Messages.STREAM_CAPTURE_PAUSED,
            supportingText: a.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS
        } : {
            mainText: a.default.Messages.STREAM_CAPTURE_PAUSED,
            supportingText: a.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS_VIEWER.format({
                username: i.default.getName(e.guildId, e.channelId, t)
            })
        };
        return s ? {
            mainText: a.default.Messages.STREAM_PREVIEW_PAUSED,
            supportingText: a.default.Messages.STREAM_PREVIEW_PAUSED_SUBTEXT
        } : null
    }
}