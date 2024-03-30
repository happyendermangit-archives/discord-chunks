function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("935741"),
        o = n("545072"),
        i = n("281767");

    function a(e, t) {
        if (e === i.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM) {
            var n, a, u = t.channelId,
                s = null !== (a = null === (n = r.default.getChannel(u)) || void 0 === n ? void 0 : n.type) && void 0 !== a ? a : i.ChannelTypes.UNKNOWN;
            return {
                channelId: u,
                channelType: s,
                rtcState: o.default.getState(),
                timestamp: new Date
            }
        }
        throw Error("getClickstreamTrackEvent: Unknown event: ".concat(e))
    }
}