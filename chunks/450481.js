function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        selectVoiceChannelAdditional: function() {
            return g
        }
    });
    var i = n("551042"),
        s = n("913144"),
        r = n("157186"),
        a = n("619395"),
        o = n("819450"),
        l = n("439141"),
        u = n("172538"),
        d = n("42203"),
        c = n("305961"),
        _ = n("88093"),
        f = n("18494"),
        E = n("800762"),
        h = n("404008");
    let g = function(e, t) {
        let g = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            m = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            p = d.default.getChannel(e),
            S = E.default.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
            T = null != p ? _.default.getCheck(p.guild_id) : null,
            v = null != t && (0, r.shouldShowMembershipVerificationGate)(t);
        if (!v) {
            if (null == T || T.canChat || (0, a.canLurkerListen)(p)) {
                if (null != p && !S) {
                    let e = (0, h.isChannelFull)(p, E.default, c.default);
                    if (e && p.isGuildStageVoice() && (0, o.getStageHasMedia)(p.id)) {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("374278").then(n.bind(n, "374278"));
                            return t => e({
                                channel: p,
                                ...t
                            })
                        });
                        return
                    }
                    if (e) {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("242144").then(n.bind(n, "242144"));
                            return t => e(t)
                        });
                        return
                    }
                }
                g && (0, l.applyInitialVideoBackgroundOption)(), (0, u.default)(function() {
                    s.default.dispatch({
                        type: "VOICE_CHANNEL_SELECT",
                        guildId: t,
                        channelId: e,
                        currentVoiceChannelId: f.default.getVoiceChannelId(),
                        video: g,
                        stream: m
                    })
                }, e, m, g)
            }
        }
    }
}