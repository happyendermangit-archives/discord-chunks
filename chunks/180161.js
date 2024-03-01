function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("77078"),
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
        E = n("844659"),
        g = n("49111");
    async function C(e, t, n) {
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
        let l = c.default.getChannel(t);
        if (null != l && null == n && (0, d.isGuildVocalChannelType)(l.type) && (0, o.canViewChannel)(l)) {
            s.default.selectVoiceChannel(l.id);
            return
        }(0, u.default)(g.Routes.CHANNEL(e, t, n))
    }

    function S(e) {
        return {
            react(t, s, r) {
                let o = c.default.getChannel(t.channelId),
                    u = r.noStyleAndInteraction ? void 0 : n => {
                        e.shouldStopPropagation && (null == n || n.stopPropagation()), C(t.guildId, t.channelId, t.messageId), e.shouldCloseDefaultModals && (0, i.closeAllModals)()
                    },
                    d = r.noStyleAndInteraction || null == t.channelId || null == o && null == t.originalLink ? g.NOOP : e => {
                        (0, a.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("454000").then(n.bind(n, "454000"));
                            return n => {
                                var i;
                                return (0, l.jsx)(e, {
                                    ...n,
                                    channel: o,
                                    channelId: null !== (i = null == o ? void 0 : o.id) && void 0 !== i ? i : t.channelId,
                                    originalLink: t.originalLink,
                                    messageId: t.messageId
                                })
                            }
                        })
                    };
                return (0, l.jsxs)(m.default, {
                    role: "link",
                    onClick: u,
                    onContextMenu: d,
                    className: "channelMention",
                    children: [null != t.inContent ? s(t.inContent, r) : null, null != t.inContent ? (0, l.jsx)(p.default, {}) : null, (0, E.smartOutput)(t, s, r)]
                }, r.key)
            }
        }
    }
}