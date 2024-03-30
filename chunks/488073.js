function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("281767");

    function o(e, t) {
        var n = new Date;
        if (e === r.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM) return {
            time_minus: t.map(function(e) {
                return n.getTime() - e.timestamp.getTime()
            }),
            channel_ids: t.map(function(e) {
                return e.channelId
            }),
            channel_types: t.map(function(e) {
                return e.channelType
            }),
            rtc_states: t.map(function(e) {
                return e.rtcState
            })
        };
        throw Error("getClicksteamDrainEvent: Unknown event: ".concat(e))
    }
}