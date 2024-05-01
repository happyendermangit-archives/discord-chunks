function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("570140"),
        r = n("254238"),
        s = n("258609");
    n("473241");
    var a = n("788983"),
        o = n("703656"),
        l = n("700615"),
        u = n("592125"),
        d = n("731290"),
        _ = n("131951"),
        c = n("944486"),
        E = n("914010"),
        I = n("594174"),
        T = n("934415"),
        f = n("604151"),
        S = n("981631");
    t.default = {
        selectChannel(e) {
            let {
                guildId: t,
                channelId: n,
                messageId: r,
                jumpType: s,
                preserveDrawerState: a,
                source: o
            } = e;
            i.default.dispatch({
                type: "CHANNEL_SELECT",
                guildId: t === S.ME ? null : t,
                channelId: n,
                messageId: r,
                jumpType: s,
                preserveDrawerState: a,
                source: o
            })
        },
        selectPrivateChannel(e) {
            (0, o.transitionTo)(S.Routes.CHANNEL(S.ME, e))
        },
        selectVoiceChannel(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = u.default.getChannel(e),
                s = null == r ? void 0 : r.getGuildId();
            if ((null == r ? void 0 : r.isGuildVocal()) && (null == r ? void 0 : r.isNSFW()) && (!(null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) || !d.default.didAgree(s))) {
                (0, o.transitionTo)(S.Routes.CHANNEL(s, e));
                return
            }
            _.default.isSupported() && (null != e && _.default.getMediaEngine().interact(), (0, f.selectVoiceChannelAdditional)(e, s, n, i))
        },
        disconnect() {
            let e = s.default.getRemoteSessionId();
            if (null != e && r.remoteDisconnect(e), (0, l.isVoicePanelEnabled)()) this.selectVoiceChannel(null);
            else {
                let e = u.default.getChannel(c.default.getChannelId()),
                    t = c.default.getChannelId() === c.default.getVoiceChannelId() && (null == e ? void 0 : e.isThread()) === !0;
                if (this.selectVoiceChannel(null), a.close(S.PopoutWindowKeys.CHANNEL_CALL_POPOUT), t) {
                    let e = E.default.getGuildId();
                    null != e && (0, o.transitionTo)((0, T.previousTextChannelRouteForGuild)(e))
                }
            }
        }
    }
}