function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("70102");
    var i = n("49111");

    function s(e, t) {
        let n = new Date;
        if (e === i.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM) return {
            time_minus: t.map(e => n.getTime() - e.timestamp.getTime()),
            channel_ids: t.map(e => e.channelId),
            channel_types: t.map(e => e.channelType),
            rtc_states: t.map(e => e.rtcState)
        };
        throw Error("getClicksteamDrainEvent: Unknown event: ".concat(e))
    }
}