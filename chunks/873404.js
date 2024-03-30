function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("935741"),
        o = n("545072"),
        i = n("276664"),
        a = n("870331"),
        u = n("281767");

    function s(e, t, n) {
        var s, l;
        a.default.track(u.AnalyticEvents.VOICE_CALL_TRANSFER, {
            source_platform: null != n ? null === (s = i.default.getSessionById(n)) || void 0 === s ? void 0 : s.clientInfo.os : "discord_client",
            guild_id: null === (l = r.default.getChannel(e)) || void 0 === l ? void 0 : l.guild_id,
            channel_id: e,
            rtc_connection_id: o.default.getRTCConnectionId(),
            target_platform: t
        })
    }
}