function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("70102");
    var i = n("42203"),
        s = n("945956"),
        r = n("49111");

    function a(e, t) {
        if (e === r.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM) {
            var n, a;
            let e = t.channelId,
                o = null !== (a = null === (n = i.default.getChannel(e)) || void 0 === n ? void 0 : n.type) && void 0 !== a ? a : r.ChannelTypes.UNKNOWN,
                l = {
                    channelId: e,
                    channelType: o,
                    rtcState: s.default.getState(),
                    timestamp: new Date
                };
            return l
        }
        throw Error("getClickstreamTrackEvent: Unknown event: ".concat(e))
    }
}