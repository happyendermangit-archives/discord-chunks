function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("239091"),
        a = n("287734"),
        o = n("364640"),
        l = n("754688"),
        u = n("336197"),
        d = n("131704"),
        _ = n("592125"),
        c = n("430824"),
        E = n("797053"),
        I = n("442514"),
        T = n("900849"),
        f = n("746878"),
        S = n("981631");
    async function A(e, t, n) {
        if (null == t) return;
        if (o.default.trackDiscordLinkClicked({
                guildId: e,
                channelId: t,
                messageId: n
            }), null != e) {
            let n = c.default.getGuild(e);
            if ((null == n ? void 0 : n.joinedAt) == null) try {
                await T.startLurking(e, {}, {
                    channelId: t
                });
                return
            } catch {}
        }
        let i = _.default.getChannel(t);
        if (null != i && null == n && (0, d.isGuildVocalChannelType)(i.type) && (0, l.canViewChannel)(i)) {
            a.default.selectVoiceChannel(i.id);
            return
        }(0, u.default)(S.Routes.CHANNEL(e, t, n))
    }

    function h(e) {
        return {
            react(t, a, o) {
                let l = _.default.getChannel(t.channelId),
                    u = o.noStyleAndInteraction ? void 0 : n => {
                        e.shouldStopPropagation && (null == n || n.stopPropagation()), A(t.guildId, t.channelId, t.messageId), e.shouldCloseDefaultModals && (0, r.closeAllModals)()
                    },
                    d = o.noStyleAndInteraction || null == t.channelId || null == l && null == t.originalLink ? S.NOOP : e => {
                        (0, s.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.e("9573").then(n.bind(n, "546649"));
                            return n => {
                                var r;
                                return (0, i.jsx)(e, {
                                    ...n,
                                    channel: l,
                                    channelId: null !== (r = null == l ? void 0 : l.id) && void 0 !== r ? r : t.channelId,
                                    originalLink: t.originalLink,
                                    messageId: t.messageId
                                })
                            }
                        })
                    };
                return (0, i.jsxs)(E.default, {
                    role: "link",
                    onClick: u,
                    onContextMenu: d,
                    className: "channelMention",
                    children: [null != t.inContent ? a(t.inContent, o) : null, null != t.inContent ? (0, i.jsx)(I.default, {}) : null, (0, f.smartOutput)(t, a, o)]
                }, o.key)
            }
        }
    }
}