function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowVoiceChannelChangeConfirmation: function() {
            return s
        }
    });
    var r = n("254061"),
        o = n("24039"),
        i = n("217014"),
        a = n("306912"),
        u = n("665863");

    function s(e) {
        if (o.default.disableVoiceChannelChangeAlert) return !1;
        var t = r.default.getRemoteSessionId();
        if (null != u.default.getVoiceStateForSession(i.default.getId(), t) || !u.default.isCurrentClientInVoiceChannel() || u.default.isInChannel(e.id)) return !1;
        var n = a.default.getGuild(e.getGuildId());
        return !((null == n ? void 0 : n.afkChannelId) != null && u.default.isInChannel(n.afkChannelId)) && !0
    }
}