function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Emoji: function() {
            return v
        },
        CustomEmoji: function() {
            return N
        },
        TextMention: function() {
            return A
        },
        UserMention: function() {
            return O
        },
        RoleMention: function() {
            return R
        },
        ChannelMention: function() {
            return M
        },
        SoundboardMention: function() {
            return k
        },
        StaticRouteMention: function() {
            return L
        },
        CommandMention: function() {
            return P
        },
        Timestamp: function() {
            return b
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("446674"),
        a = n("77078"),
        s = n("430568"),
        r = n("308289"),
        o = n("206230"),
        u = n("980215"),
        d = n("361572"),
        c = n("82300"),
        f = n("235004"),
        p = n("42203"),
        m = n("305961"),
        h = n("102985"),
        x = n("697218"),
        E = n("666897"),
        y = n("404008"),
        g = n("387111"),
        S = n("158998"),
        C = n("680894"),
        _ = n("782340"),
        I = n("918841"),
        T = n("919163");

    function v(e) {
        let {
            emoji: t
        } = e;
        return (0, i.jsx)(a.Tooltip, {
            text: t.name,
            delay: 750,
            position: "top",
            children: e => (0, i.jsx)(s.default, {
                src: t.src,
                emojiName: t.name,
                animated: !1,
                ...e
            })
        })
    }

    function N(e) {
        let {
            emoji: t
        } = e;
        return (0, i.jsx)(a.Tooltip, {
            text: t.name,
            delay: 750,
            position: "top",
            children: e => (0, i.jsx)(s.default, {
                emojiId: t.emojiId,
                emojiName: t.name,
                animated: t.animated,
                ...e
            })
        })
    }

    function A(e) {
        let {
            text: t,
            channelId: n,
            guildId: l
        } = e, a = m.default.getGuild(l), s = p.default.getChannel(n), r = (0, u.useClydeEnabled)(a, s), o = r && "@Clyde" === t ? C.CLYDE_AI_MENTION_COLOR : null;
        return (0, i.jsx)(E.default, {
            color: o,
            children: t
        })
    }

    function O(e) {
        let {
            id: t,
            guildId: n,
            channelId: s
        } = e, o = (0, l.useStateFromStores)([x.default], () => x.default.getUser(t)), u = (0, l.useStateFromStores)([h.default], () => h.default.hidePersonalInformation), d = g.default.useName(n, s, o), c = (0, i.jsx)(E.default, {
            children: null == d ? "<@".concat(t, ">") : "@".concat(d)
        });
        if (null != o) {
            let e = u || o.isPomelo() ? null : "#".concat(o.discriminator);
            return (0, i.jsx)(a.Tooltip, {
                text: (0, i.jsxs)("div", {
                    className: I.userTooltip,
                    children: [(0, i.jsx)(r.default, {
                        user: o,
                        animate: !0,
                        size: a.AvatarSizes.SIZE_16,
                        className: I.avatar
                    }), S.default.getUserTag(o, {
                        mode: "username",
                        identifiable: u ? "never" : "always"
                    }), (0, i.jsx)("span", {
                        className: I.discriminator,
                        children: e
                    })]
                }),
                delay: 750,
                position: "top",
                "aria-label": S.default.getUserTag(o, {
                    decoration: "never"
                }),
                children: e => (0, i.jsx)(a.Clickable, {
                    tag: "span",
                    ...e,
                    children: c
                })
            })
        }
        return c
    }

    function R(e) {
        let {
            id: t,
            guildId: n
        } = e, s = (0, l.useStateFromStores)([m.default], () => null != n ? m.default.getRole(n, t) : void 0), r = (0, l.useStateFromStores)([o.default], () => o.default.roleStyle);
        if (null == s) return (0, i.jsx)("span", {
            children: "@deleted-role"
        });
        let u = null != s.color && 0 !== s.color;
        return (0, i.jsxs)(E.default, {
            color: "username" === r && u ? s.color : null,
            children: ["dot" === r && (0, i.jsx)(a.RoleDot, {
                color: s.colorString,
                background: !1,
                tooltip: !1
            }), "@", s.name]
        })
    }

    function M(e) {
        let {
            id: t
        } = e, n = (0, l.useStateFromStores)([p.default], () => p.default.getChannel(t)), a = _.default.Messages.UNKNOWN_CHANNEL, s = "text", r = !0;
        if (null != n) {
            var o;
            a = (0, d.canViewChannel)(n) ? n.name : _.default.Messages.NO_ACCESS, s = (0, d.canViewChannel)(n) ? null !== (o = (0, y.getMentionIconType)(n)) && void 0 !== o ? o : "text" : "locked", r = (0, c.isChannelTypeMentionable)(n.type)
        }
        return r ? (0, i.jsx)(E.default, {
            iconType: s,
            children: a
        }) : (0, i.jsx)("span", {
            children: "#" + a
        })
    }

    function k(e) {
        var t;
        let {
            id: n
        } = e, a = (0, l.useStateFromStores)([f.default], () => f.default.getSoundById(n));
        return (0, i.jsx)(E.default, {
            children: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : "Sound"
        })
    }

    function L(e) {
        let {
            id: t
        } = e, n = {
            home: _.default.Messages.SERVER_GUIDE,
            guide: _.default.Messages.SERVER_GUIDE,
            browse: _.default.Messages.CHANNEL_BROWSER_TITLE,
            customize: _.default.Messages.CHANNELS_AND_ROLES
        };
        return (0, i.jsx)(E.default, {
            iconType: t,
            children: n[t]
        })
    }

    function P(e) {
        let {
            text: t,
            id: n
        } = e;
        return (0, i.jsxs)(E.default, {
            children: [t, "(", n, ")"]
        })
    }

    function b(e) {
        let {
            timestamp: t
        } = e;
        return (0, i.jsx)("span", {
            className: T.timestamp,
            children: t.formatted
        })
    }
}