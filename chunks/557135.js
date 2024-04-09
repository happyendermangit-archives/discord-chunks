function(e, t, n) {
    "use strict";
    n.r(t), n("411104");
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("287734"),
        a = n("258609"),
        o = n("703656"),
        l = n("569471"),
        u = n("346479"),
        d = n("314897"),
        _ = n("944486"),
        c = n("979651"),
        E = n("366297"),
        I = n("981631");
    t.default = {
        async handleVoiceConnect(e) {
            let {
                channel: t,
                connected: T,
                needSubscriptionToAccess: f,
                locked: S = !1,
                routeDirectlyToChannel: h = !1,
                bypassChangeModal: A,
                bypassGuildIdCheck: m = !1
            } = e;
            t.isThread() && (await u.default.unarchiveThreadIfNecessary(t.id), !l.default.hasJoined(t.id) && await u.default.joinThread(t, "Join Voice"));
            let N = a.default.getRemoteSessionId(),
                O = c.default.getVoiceStateForSession(d.default.getId(), N),
                p = (null == O ? void 0 : O.channelId) === t.id || _.default.getChannelId() === c.default.getCurrentClientVoiceChannelId(t.guild_id);
            return !A && !S && (0, E.shouldShowVoiceChannelChangeConfirmation)(t) ? new Promise(e => {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: r
                    } = await n.e("65045").then(n.bind(n, "143782"));
                    return n => (0, i.jsx)(r, {
                        channel: t,
                        onConfirm: () => e(this.handleVoiceConnect({
                            channel: t,
                            connected: T,
                            needSubscriptionToAccess: f,
                            routeDirectlyToChannel: h,
                            locked: S,
                            bypassChangeModal: !0
                        })),
                        ...n
                    })
                })
            }) : (!S && !T && s.default.selectVoiceChannel(t.id), !__OVERLAY__ && (T || p || f || h) && ! function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.getGuildId();
                if (null == n && !t) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                (0, o.transitionTo)(I.Routes.CHANNEL(n, e.id))
            }(t, m), !0)
        }
    }
}