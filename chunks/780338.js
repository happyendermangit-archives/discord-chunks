function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var s = n("42203"),
        i = n("945956"),
        r = n("235660"),
        a = n("599110"),
        o = n("49111");

    function d(e, t, n) {
        var d, u;
        a.default.track(o.AnalyticEvents.VOICE_CALL_TRANSFER, {
            source_platform: null != n ? null === (d = r.default.getSessionById(n)) || void 0 === d ? void 0 : d.clientInfo.os : "discord_client",
            guild_id: null === (u = s.default.getChannel(e)) || void 0 === u ? void 0 : u.guild_id,
            channel_id: e,
            rtc_connection_id: i.default.getRTCConnectionId(),
            target_platform: t
        })
    }
}