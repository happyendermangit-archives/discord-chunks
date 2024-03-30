function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("62957"),
        o = n("281767"),
        i = n("941504");

    function a(e, t, n, a) {
        if (e.state === o.ApplicationStreamStates.RECONNECTING) return {
            mainText: i.default.Messages.STREAM_RECONNECTING_ERROR,
            supportingText: i.default.Messages.STREAM_RECONNECTING_ERROR_SUBTEXT
        };
        if (e.state === o.ApplicationStreamStates.PAUSED) return n ? {
            mainText: i.default.Messages.STREAM_CAPTURE_PAUSED,
            supportingText: i.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS
        } : {
            mainText: i.default.Messages.STREAM_CAPTURE_PAUSED,
            supportingText: i.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS_VIEWER.format({
                username: r.default.getName(e.guildId, e.channelId, t)
            })
        };
        return a ? {
            mainText: i.default.Messages.STREAM_PREVIEW_PAUSED,
            supportingText: i.default.Messages.STREAM_PREVIEW_PAUSED_SUBTEXT
        } : null
    }
}