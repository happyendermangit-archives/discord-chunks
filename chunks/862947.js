function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("70102");
    var i = n("42203"),
        s = n("49111");

    function r(e, t) {
        if (e === s.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM) {
            var n, r;
            let e = t.channelId,
                a = null !== (r = null === (n = i.default.getChannel(e)) || void 0 === n ? void 0 : n.type) && void 0 !== r ? r : s.ChannelTypes.UNKNOWN,
                o = {
                    channelId: e,
                    channelType: a,
                    timestamp: new Date
                };
            return o
        }
        throw Error("getClickstreamTrackEvent: Unknown event: ".concat(e))
    }
}