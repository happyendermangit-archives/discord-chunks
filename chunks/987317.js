function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var i = n("913144"),
        s = n("700507"),
        r = n("76393");
    n("924492");
    var a = n("383294"),
        o = n("393414"),
        l = n("742171"),
        u = n("42203"),
        d = n("247013"),
        c = n("42887"),
        f = n("18494"),
        _ = n("162771"),
        E = n("697218"),
        h = n("404008"),
        g = n("450481"),
        m = n("49111"),
        p = {
            selectChannel(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: s,
                    jumpType: r,
                    preserveDrawerState: a,
                    source: o
                } = e;
                i.default.dispatch({
                    type: "CHANNEL_SELECT",
                    guildId: t === m.ME ? null : t,
                    channelId: n,
                    messageId: s,
                    jumpType: r,
                    preserveDrawerState: a,
                    source: o
                })
            },
            selectPrivateChannel(e) {
                (0, o.transitionTo)(m.Routes.CHANNEL(m.ME, e))
            },
            selectVoiceChannel(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    s = u.default.getChannel(e),
                    r = null == s ? void 0 : s.getGuildId();
                if ((null == s ? void 0 : s.isGuildVocal()) && (null == s ? void 0 : s.isNSFW()) && (!(null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) || !d.default.didAgree(r))) {
                    (0, o.transitionTo)(m.Routes.CHANNEL(r, e));
                    return
                }
                c.default.isSupported() && (null != e && c.default.getMediaEngine().interact(), (0, g.selectVoiceChannelAdditional)(e, r, n, i))
            },
            disconnect() {
                let e = r.default.getRemoteSessionId();
                if (null != e && s.remoteDisconnect(e), (0, l.isOldVoiceUIEnabled)()) {
                    let e = u.default.getChannel(f.default.getChannelId()),
                        t = f.default.getChannelId() === f.default.getVoiceChannelId() && (null == e ? void 0 : e.isThread()) === !0;
                    if (this.selectVoiceChannel(null), a.close(m.PopoutWindowKeys.CHANNEL_CALL_POPOUT), t) {
                        let e = _.default.getGuildId();
                        null != e && (0, o.transitionTo)((0, h.previousTextChannelRouteForGuild)(e))
                    }
                } else this.selectVoiceChannel(null)
            }
        }
}