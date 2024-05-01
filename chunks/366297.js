function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowVoiceChannelChangeConfirmation: function() {
            return l
        }
    });
    var i = n("258609"),
        r = n("740492"),
        a = n("314897"),
        s = n("430824"),
        o = n("979651");

    function l(e) {
        if (r.default.disableVoiceChannelChangeAlert) return !1;
        let t = i.default.getRemoteSessionId();
        if (null != o.default.getVoiceStateForSession(a.default.getId(), t) || !o.default.isCurrentClientInVoiceChannel() || o.default.isInChannel(e.id)) return !1;
        let n = s.default.getGuild(e.getGuildId());
        return !((null == n ? void 0 : n.afkChannelId) != null && o.default.isInChannel(n.afkChannelId)) && !0
    }
}