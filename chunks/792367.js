function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowVoiceChannelChangeConfirmation: function() {
            return l
        }
    });
    var i = n("76393"),
        s = n("168973"),
        r = n("271938"),
        a = n("305961"),
        o = n("800762");

    function l(e) {
        let t = s.default.disableVoiceChannelChangeAlert;
        if (t) return !1;
        let n = i.default.getRemoteSessionId(),
            l = o.default.getVoiceStateForSession(r.default.getId(), n);
        if (null != l || !o.default.isCurrentClientInVoiceChannel() || o.default.isInChannel(e.id)) return !1;
        let u = a.default.getGuild(e.getGuildId());
        return !((null == u ? void 0 : u.afkChannelId) != null && o.default.isInChannel(u.afkChannelId)) && !0
    }
}