function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815"),
        o = n("653211"),
        i = n("254061");
    n("241052");
    var a = n("276255"),
        u = n("163291"),
        s = n("527500"),
        l = n("935741"),
        c = n("906963"),
        f = n("335911"),
        d = n("894288"),
        _ = n("63116"),
        E = n("208454"),
        p = n("115752"),
        m = n("539592"),
        y = n("281767");
    t.default = {
        selectChannel: function(e) {
            var t = e.guildId,
                n = e.channelId,
                o = e.messageId,
                i = e.jumpType,
                a = e.preserveDrawerState,
                u = e.source;
            r.default.dispatch({
                type: "CHANNEL_SELECT",
                guildId: t === y.ME ? null : t,
                channelId: n,
                messageId: o,
                jumpType: i,
                preserveDrawerState: a,
                source: u
            })
        },
        selectPrivateChannel: function(e) {
            (0, u.transitionTo)(y.Routes.CHANNEL(y.ME, e))
        },
        selectVoiceChannel: function(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                o = l.default.getChannel(e),
                i = null == o ? void 0 : o.getGuildId();
            if ((null == o ? void 0 : o.isGuildVocal()) && (null == o ? void 0 : o.isNSFW()) && (!(null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) || !c.default.didAgree(i))) {
                (0, u.transitionTo)(y.Routes.CHANNEL(i, e));
                return
            }
            f.default.isSupported() && (null != e && f.default.getMediaEngine().interact(), (0, m.selectVoiceChannelAdditional)(e, i, n, r))
        },
        disconnect: function() {
            var e = i.default.getRemoteSessionId();
            if (null != e && o.remoteDisconnect(e), (0, s.isOldVoiceUIEnabled)()) {
                var t = l.default.getChannel(d.default.getChannelId()),
                    n = d.default.getChannelId() === d.default.getVoiceChannelId() && (null == t ? void 0 : t.isThread()) === !0;
                if (this.selectVoiceChannel(null), a.close(y.PopoutWindowKeys.CHANNEL_CALL_POPOUT), n) {
                    var r = _.default.getGuildId();
                    null != r && (0, u.transitionTo)((0, p.previousTextChannelRouteForGuild)(r))
                }
            } else this.selectVoiceChannel(null)
        }
    }
}