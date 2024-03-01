function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        selectVoiceChannelAdditional: function() {
            return h
        }
    });
    var s = n("551042"),
        i = n("913144"),
        r = n("157186"),
        a = n("619395"),
        o = n("819450"),
        d = n("439141"),
        u = n("172538"),
        l = n("42203"),
        f = n("305961"),
        _ = n("88093"),
        c = n("18494"),
        g = n("800762"),
        m = n("404008");
    let h = function(e, t) {
        let h = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            v = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            E = l.default.getChannel(e),
            p = g.default.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
            y = null != E ? _.default.getCheck(E.guild_id) : null,
            T = null != t && (0, r.shouldShowMembershipVerificationGate)(t);
        if (!T) {
            if (null == y || y.canChat || (0, a.canLurkerListen)(E)) {
                if (null != E && !p) {
                    let e = (0, m.isChannelFull)(E, g.default, f.default);
                    if (e && E.isGuildStageVoice() && (0, o.getStageHasMedia)(E.id)) {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("374278").then(n.bind(n, "374278"));
                            return t => e({
                                channel: E,
                                ...t
                            })
                        });
                        return
                    }
                    if (e) {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("242144").then(n.bind(n, "242144"));
                            return t => e(t)
                        });
                        return
                    }
                }
                h && (0, d.applyInitialVideoBackgroundOption)(), (0, u.default)(function() {
                    i.default.dispatch({
                        type: "VOICE_CHANNEL_SELECT",
                        guildId: t,
                        channelId: e,
                        currentVoiceChannelId: c.default.getVoiceChannelId(),
                        video: h,
                        stream: v
                    })
                }, e, v, h)
            }
        }
    }
}