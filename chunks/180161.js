function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("77078"),
        a = n("272030"),
        s = n("987317"),
        r = n("765089"),
        o = n("361572"),
        u = n("537325"),
        d = n("233069"),
        c = n("42203"),
        f = n("305961"),
        m = n("666897"),
        p = n("848825"),
        h = n("794818"),
        x = n("844659"),
        E = n("49111");
    async function y(e, t, n) {
        if (null == t) return;
        if (r.default.trackDiscordLinkClicked({
                guildId: e,
                channelId: t,
                messageId: n
            }), null != e) {
            let n = f.default.getGuild(e);
            if ((null == n ? void 0 : n.joinedAt) == null) try {
                await h.startLurking(e, {}, {
                    channelId: t
                });
                return
            } catch {}
        }
        let i = c.default.getChannel(t);
        if (null != i && null == n && (0, d.isGuildVocalChannelType)(i.type) && (0, o.canViewChannel)(i)) {
            s.default.selectVoiceChannel(i.id);
            return
        }(0, u.default)(E.Routes.CHANNEL(e, t, n))
    }

    function g(e) {
        return {
            react(t, s, r) {
                let o = c.default.getChannel(t.channelId),
                    u = r.noStyleAndInteraction ? void 0 : n => {
                        e.shouldStopPropagation && (null == n || n.stopPropagation()), y(t.guildId, t.channelId, t.messageId), e.shouldCloseDefaultModals && (0, l.closeAllModals)()
                    },
                    d = r.noStyleAndInteraction || null == t.channelId || null == o && null == t.originalLink ? E.NOOP : e => {
                        (0, a.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("454000").then(n.bind(n, "454000"));
                            return n => {
                                var l;
                                return (0, i.jsx)(e, {
                                    ...n,
                                    channel: o,
                                    channelId: null !== (l = null == o ? void 0 : o.id) && void 0 !== l ? l : t.channelId,
                                    originalLink: t.originalLink,
                                    messageId: t.messageId
                                })
                            }
                        })
                    };
                return (0, i.jsxs)(m.default, {
                    role: "link",
                    onClick: u,
                    onContextMenu: d,
                    className: "channelMention",
                    children: [null != t.inContent ? s(t.inContent, r) : null, null != t.inContent ? (0, i.jsx)(p.default, {}) : null, (0, x.smartOutput)(t, s, r)]
                }, r.key)
            }
        }
    }
}