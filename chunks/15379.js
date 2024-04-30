function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("411104");
    var i = n("592125"),
        r = n("19780"),
        s = n("981631"),
        a = n("176505");

    function o(e, t) {
        if (e === s.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM) {
            var n, o;
            let e = t.channelId;
            switch (e) {
                case a.StaticChannelRoute.CHANNEL_BROWSER:
                case a.StaticChannelRoute.GUILD_HOME:
                case a.StaticChannelRoute.GUILD_SHOP:
                case a.StaticChannelRoute.MEMBER_APPLICATIONS:
                case a.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
                case a.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
                case a.StaticChannelRoute.MEMBER_SAFETY:
                case a.StaticChannelRoute.GUILD_ONBOARDING:
                    return
            }
            let l = null !== (o = null === (n = i.default.getChannel(e)) || void 0 === n ? void 0 : n.type) && void 0 !== o ? o : s.ChannelTypes.UNKNOWN;
            return {
                channelId: e,
                channelType: l,
                rtcState: r.default.getState(),
                timestamp: new Date
            }
        }
        throw Error("getClickstreamTrackEvent: Unknown event: ".concat(e))
    }
}