function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StageInviteFooter: function() {
            return I
        },
        default: function() {
            return g
        }
    });
    var i = n("37983"),
        l = n("884691"),
        s = n("414456"),
        r = n.n(s),
        a = n("77078"),
        u = n("813006"),
        d = n("766274"),
        o = n("476263"),
        c = n("272339"),
        E = n("849467"),
        _ = n("228427"),
        f = n("713573"),
        h = n("258078"),
        S = n("587974"),
        m = n("782340"),
        C = n("674877");
    let p = e => {
            var t;
            let {
                speaker: n,
                guildId: l,
                isEmbed: s
            } = e, r = new d.default(n.user);
            return (0, i.jsxs)("div", {
                className: C.speaker,
                children: [(0, i.jsx)(a.Avatar, {
                    src: r.getAvatarURL(l, s ? 16 : 24),
                    size: s ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                    "aria-label": "".concat(n.nick, "-avatar"),
                    className: s ? null : C.avatar
                }), (0, i.jsx)(h.default, {
                    size: s ? h.default.Sizes.SIZE_12 : h.default.Sizes.SIZE_14,
                    color: h.default.Colors.HEADER_SECONDARY,
                    className: C.username,
                    children: null !== (t = n.nick) && void 0 !== t ? t : r.username
                })]
            })
        },
        I = e => {
            let {
                guild: t,
                onlineCount: n
            } = e;
            if (null == t) return null;
            let l = new u.default(t),
                {
                    name: s,
                    description: r
                } = l;
            return (0, i.jsxs)("div", {
                children: [(0, i.jsx)(f.default, {
                    muted: !0,
                    uppercase: !0,
                    className: C.alignStart,
                    children: m.default.Messages.STAGE_INVITE_GUILD_HEADER
                }), (0, i.jsxs)("div", {
                    className: C.guild,
                    children: [(0, i.jsx)(S.default, {
                        mask: S.default.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, i.jsx)(o.default, {
                            guild: l,
                            size: o.default.Sizes.MEDIUM,
                            active: !0
                        })
                    }), (0, i.jsxs)("div", {
                        className: C.guildInfo,
                        children: [(0, i.jsx)(a.Heading, {
                            variant: "heading-sm/semibold",
                            children: s
                        }), (0, i.jsxs)("div", {
                            className: C.speaker,
                            children: [(0, i.jsx)("div", {
                                className: C.dot
                            }), null != n && n > 0 ? (0, i.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children: m.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                    membersOnline: n
                                })
                            }) : null]
                        })]
                    })]
                }), null != r && "" !== r && (0, i.jsx)(a.Text, {
                    color: "header-secondary",
                    className: C.alignStart,
                    variant: "text-sm/normal",
                    children: r
                })]
            })
        };
    var g = e => {
        var t;
        let {
            stageInstance: n,
            guild: s,
            isCard: d = !1,
            isEmbed: I = !1,
            onClick: g
        } = e, v = l.useMemo(() => null == s ? null : s instanceof u.default ? s : new u.default(s), [s]);
        if (null == n || null == v) return null;
        let {
            topic: R,
            speaker_count: T,
            participant_count: A
        } = n, O = null !== (t = n.members) && void 0 !== t ? t : [], N = I ? O.slice(0, 3) : O, D = T - N.length;
        return I && (D += O.length - N.length), (0, i.jsxs)("div", {
            children: [(0, i.jsxs)("div", {
                className: C.flex,
                children: [(0, i.jsxs)("div", {
                    className: C.flex,
                    children: [(0, i.jsx)(_.default, {
                        height: 24,
                        width: 24,
                        className: C.live
                    }), (0, i.jsx)(a.Heading, {
                        variant: "eyebrow",
                        className: r(C.label, C.live),
                        children: m.default.Messages.STAGE_CHANNEL_LIVE_NOW
                    })]
                }), (0, i.jsxs)("div", {
                    className: C.background,
                    children: [(0, i.jsx)(c.default, {
                        height: 16,
                        width: 16,
                        className: C.listeners
                    }), (0, i.jsx)(a.Heading, {
                        className: r(C.label, C.listeners),
                        variant: "heading-sm/semibold",
                        children: A
                    })]
                })]
            }), I && (0, i.jsxs)("div", {
                className: r(C.guild, {
                    [C.embed]: I
                }),
                children: [(0, i.jsx)(S.default, {
                    mask: S.default.Masks.SQUIRCLE,
                    width: 20,
                    height: 20,
                    children: (0, i.jsx)(o.default, {
                        guild: v,
                        size: o.default.Sizes.MINI,
                        active: !0
                    })
                }), (0, i.jsx)(a.Text, {
                    color: "header-secondary",
                    className: C.label,
                    variant: "text-sm/normal",
                    children: v.name
                })]
            }), (0, i.jsx)(f.default, {
                size: d || I ? f.default.Sizes.SIZE_16 : f.default.Sizes.SIZE_20,
                className: r(C.header, {
                    [C.embed]: I
                }),
                children: R
            }), (0, i.jsxs)("div", {
                className: r(C.members, {
                    [C.embed]: I
                }),
                children: [N.length > 0 && (0, i.jsxs)("div", {
                    className: C.speakers,
                    children: [N.map(e => (0, i.jsx)(p, {
                        speaker: e,
                        guildId: v.id,
                        isEmbed: I
                    }, e.user.id)), D > 0 ? (0, i.jsxs)("div", {
                        className: C.speaker,
                        children: [(0, i.jsx)("div", {
                            className: r(C.icon, {
                                [C.embed]: I
                            }),
                            children: (0, i.jsx)(E.default, {
                                height: I ? 12 : 14,
                                className: C.listeners
                            })
                        }), (0, i.jsxs)(h.default, {
                            size: I ? h.default.Sizes.SIZE_12 : h.default.Sizes.SIZE_14,
                            color: h.default.Colors.HEADER_SECONDARY,
                            children: ["+", m.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
                                count: D
                            })]
                        })]
                    }) : null]
                }), I && (0, i.jsx)(a.Button, {
                    color: a.Button.Colors.GREEN,
                    onClick: g,
                    className: C.joinButton,
                    children: m.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
                })]
            })]
        })
    }
}