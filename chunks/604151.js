function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        selectVoiceChannelAdditional: function() {
            return f
        }
    });
    var i = n("952265"),
        r = n("570140"),
        s = n("281956"),
        a = n("200498"),
        o = n("71275"),
        l = n("672339"),
        u = n("653175"),
        d = n("592125"),
        _ = n("430824"),
        c = n("607744"),
        E = n("944486"),
        I = n("979651"),
        T = n("934415");
    let f = function(e, t) {
        let f = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            S = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            h = d.default.getChannel(e),
            A = I.default.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
            m = null != h ? c.default.getCheck(h.guild_id) : null;
        if (!(null != t && (0, s.shouldShowMembershipVerificationGate)(t))) {
            if (null == m || m.canChat || (0, a.canLurkerListen)(h)) {
                if (null != h && !A) {
                    let e = (0, T.isChannelFull)(h, I.default, _.default);
                    if (e && h.isGuildStageVoice() && (0, o.getStageHasMedia)(h.id)) {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("99387"), n.e("43133")]).then(n.bind(n, "523794"));
                            return t => e({
                                channel: h,
                                ...t
                            })
                        });
                        return
                    }
                    if (e) {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("99387"), n.e("16609")]).then(n.bind(n, "997308"));
                            return t => e(t)
                        });
                        return
                    }
                }
                f && (0, l.applyInitialVideoBackgroundOption)(), (0, u.default)(function() {
                    r.default.dispatch({
                        type: "VOICE_CHANNEL_SELECT",
                        guildId: t,
                        channelId: e,
                        currentVoiceChannelId: E.default.getVoiceChannelId(),
                        video: f,
                        stream: S
                    })
                }, e, S, f)
            }
        }
    }
}