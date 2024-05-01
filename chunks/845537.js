function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChannelMention: function() {
            return M
        },
        CommandMention: function() {
            return U
        },
        CustomEmoji: function() {
            return g
        },
        Emoji: function() {
            return C
        },
        RoleMention: function() {
            return D
        },
        SoundboardMention: function() {
            return y
        },
        StaticRouteMention: function() {
            return P
        },
        TextMention: function() {
            return L
        },
        Timestamp: function() {
            return b
        },
        UserMention: function() {
            return v
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        a = n("481060"),
        s = n("596454"),
        o = n("99690"),
        l = n("607070"),
        u = n("797610"),
        d = n("754688"),
        _ = n("699450"),
        c = n("763296"),
        E = n("592125"),
        I = n("430824"),
        T = n("246946"),
        f = n("594174"),
        S = n("797053"),
        h = n("934415"),
        A = n("5192"),
        m = n("51144"),
        N = n("377668"),
        p = n("689938"),
        O = n("571199"),
        R = n("990291");

    function C(e) {
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

    function g(e) {
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

    function L(e) {
        let {
            text: t,
            channelId: n,
            guildId: r
        } = e, a = I.default.getGuild(r), s = E.default.getChannel(n), o = (0, u.useClydeEnabled)(a, s) && "@Clyde" === t ? N.CLYDE_AI_MENTION_COLOR : null;
        return (0, i.jsx)(S.default, {
            color: o,
            children: t
        })
    }

    function v(e) {
        let {
            id: t,
            guildId: n,
            channelId: s
        } = e, l = (0, r.useStateFromStores)([f.default], () => f.default.getUser(t)), u = (0, r.useStateFromStores)([T.default], () => T.default.hidePersonalInformation), d = A.default.useName(n, s, l), _ = (0, i.jsx)(S.default, {
            children: null == d ? "<@".concat(t, ">") : "@".concat(d)
        });
        if (null != l) {
            let e = u || l.isPomelo() ? null : "#".concat(l.discriminator);
            return (0, i.jsx)(a.Tooltip, {
                text: (0, i.jsxs)("div", {
                    className: O.userTooltip,
                    children: [(0, i.jsx)(o.default, {
                        user: l,
                        animate: !0,
                        size: a.AvatarSizes.SIZE_16,
                        className: O.avatar
                    }), m.default.getUserTag(l, {
                        mode: "username",
                        identifiable: u ? "never" : "always"
                    }), (0, i.jsx)("span", {
                        className: O.discriminator,
                        children: e
                    })]
                }),
                delay: 750,
                position: "top",
                "aria-label": m.default.getUserTag(l, {
                    decoration: "never"
                }),
                children: e => (0, i.jsx)(a.Clickable, {
                    tag: "span",
                    ...e,
                    children: _
                })
            })
        }
        return _
    }

    function D(e) {
        let {
            id: t,
            guildId: n
        } = e, s = (0, r.useStateFromStores)([I.default], () => null != n ? I.default.getRole(n, t) : void 0), o = (0, r.useStateFromStores)([l.default], () => l.default.roleStyle);
        if (null == s) return (0, i.jsx)("span", {
            children: "@deleted-role"
        });
        let u = null != s.color && 0 !== s.color;
        return (0, i.jsxs)(S.default, {
            color: "username" === o && u ? s.color : null,
            children: ["dot" === o && (0, i.jsx)(a.RoleDot, {
                color: s.colorString,
                background: !1,
                tooltip: !1
            }), "@", s.name]
        })
    }

    function M(e) {
        let {
            id: t
        } = e, n = (0, r.useStateFromStores)([E.default], () => E.default.getChannel(t)), a = p.default.Messages.UNKNOWN_CHANNEL.toLowerCase(), s = "text", o = !0;
        if (null != n) {
            var l;
            a = (0, d.canViewChannel)(n) ? n.name : p.default.Messages.NO_ACCESS, s = (0, d.canViewChannel)(n) ? null !== (l = (0, h.getMentionIconType)(n)) && void 0 !== l ? l : "text" : "locked", o = (0, _.isChannelTypeMentionable)(n.type)
        }
        return o ? (0, i.jsx)(S.default, {
            iconType: s,
            children: a
        }) : (0, i.jsx)("span", {
            children: "#" + a
        })
    }

    function y(e) {
        var t;
        let {
            id: n
        } = e, a = (0, r.useStateFromStores)([c.default], () => c.default.getSoundById(n));
        return (0, i.jsx)(S.default, {
            children: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : "Sound"
        })
    }

    function P(e) {
        let {
            id: t
        } = e, n = {
            home: p.default.Messages.SERVER_GUIDE,
            guide: p.default.Messages.SERVER_GUIDE,
            browse: p.default.Messages.CHANNEL_BROWSER_TITLE,
            customize: p.default.Messages.CHANNELS_AND_ROLES
        };
        return (0, i.jsx)(S.default, {
            iconType: t,
            children: n[t]
        })
    }

    function U(e) {
        let {
            text: t,
            id: n
        } = e;
        return (0, i.jsxs)(S.default, {
            children: [t, "(", n, ")"]
        })
    }

    function b(e) {
        let {
            timestamp: t
        } = e;
        return (0, i.jsx)("span", {
            className: R.timestamp,
            children: t.formatted
        })
    }
}