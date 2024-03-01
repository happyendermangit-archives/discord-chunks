function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowVoiceChannelChangeConfirmation: function() {
            return d
        }
    });
    var s = n("76393"),
        i = n("168973"),
        r = n("271938"),
        a = n("305961"),
        o = n("800762");

    function d(e) {
        let t = i.default.disableVoiceChannelChangeAlert;
        if (t) return !1;
        let n = s.default.getRemoteSessionId(),
            d = o.default.getVoiceStateForSession(r.default.getId(), n);
        if (null != d || !o.default.isCurrentClientInVoiceChannel() || o.default.isInChannel(e.id)) return !1;
        let u = a.default.getGuild(e.getGuildId());
        return !((null == u ? void 0 : u.afkChannelId) != null && o.default.isInChannel(u.afkChannelId)) && !0
    }
}