function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("411104");
    var i = n("592125"),
        r = n("19780"),
        s = n("981631");

    function a(e, t) {
        if (e === s.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM) {
            var n, a;
            let e = t.channelId,
                o = null !== (a = null === (n = i.default.getChannel(e)) || void 0 === n ? void 0 : n.type) && void 0 !== a ? a : s.ChannelTypes.UNKNOWN;
            return {
                channelId: e,
                channelType: o,
                rtcState: r.default.getState(),
                timestamp: new Date
            }
        }
        throw Error("getClickstreamTrackEvent: Unknown event: ".concat(e))
    }
}