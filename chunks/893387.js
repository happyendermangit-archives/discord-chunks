function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("592125"),
        r = n("19780"),
        s = n("797258"),
        a = n("626135"),
        o = n("981631");

    function l(e, t, n) {
        var l, u;
        a.default.track(o.AnalyticEvents.VOICE_CALL_TRANSFER, {
            source_platform: null != n ? null === (l = s.default.getSessionById(n)) || void 0 === l ? void 0 : l.clientInfo.os : "discord_client",
            guild_id: null === (u = i.default.getChannel(e)) || void 0 === u ? void 0 : u.guild_id,
            channel_id: e,
            rtc_connection_id: r.default.getRTCConnectionId(),
            target_platform: t
        })
    }
}