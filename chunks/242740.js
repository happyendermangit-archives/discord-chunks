function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return I
        }
    }), i("70102");
    var n = i("37983");
    i("884691");
    var l = i("77078"),
        a = i("987317"),
        r = i("76393"),
        u = i("393414"),
        d = i("755624"),
        s = i("263024"),
        o = i("271938"),
        c = i("18494"),
        E = i("800762"),
        _ = i("792367"),
        f = i("49111"),
        I = {
            async handleVoiceConnect(t) {
                let {
                    channel: e,
                    connected: I,
                    needSubscriptionToAccess: A,
                    locked: T = !1,
                    routeDirectlyToChannel: C = !1,
                    bypassChangeModal: S,
                    bypassGuildIdCheck: N = !1
                } = t;
                e.isThread() && (await s.default.unarchiveThreadIfNecessary(e.id), !d.default.hasJoined(e.id) && await s.default.joinThread(e, "Join Voice"));
                let v = r.default.getRemoteSessionId(),
                    O = E.default.getVoiceStateForSession(o.default.getId(), v),
                    D = (null == O ? void 0 : O.channelId) === e.id,
                    p = D || c.default.getChannelId() === E.default.getCurrentClientVoiceChannelId(e.guild_id);
                return !S && !T && (0, _.shouldShowVoiceChannelChangeConfirmation)(e) ? new Promise(t => {
                    (0, l.openModalLazy)(async () => {
                        let {
                            default: l
                        } = await i.el("371895").then(i.bind(i, "371895"));
                        return i => (0, n.jsx)(l, {
                            channel: e,
                            onConfirm: () => t(this.handleVoiceConnect({
                                channel: e,
                                connected: I,
                                needSubscriptionToAccess: A,
                                routeDirectlyToChannel: C,
                                locked: T,
                                bypassChangeModal: !0
                            })),
                            ...i
                        })
                    })
                }) : (!T && !I && a.default.selectVoiceChannel(e.id), !__OVERLAY__ && (I || p || A || C) && ! function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = t.getGuildId();
                    if (null == i && !e) throw Error("VoiceChannel, transitionTo: Channel does not have a guildId");
                    (0, u.transitionTo)(f.Routes.CHANNEL(i, t.id))
                }(e, N), !0)
            }
        }
}