function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        StageInviteFooter: function() {
            return I
        },
        default: function() {
            return g
        }
    });
    var s = i("37983"),
        n = i("884691"),
        l = i("414456"),
        a = i.n(l),
        r = i("77078"),
        u = i("813006"),
        d = i("766274"),
        o = i("476263"),
        c = i("272339"),
        E = i("849467"),
        _ = i("228427"),
        f = i("713573"),
        C = i("258078"),
        h = i("587974"),
        S = i("782340"),
        m = i("674877");
    let p = e => {
            var t;
            let {
                speaker: i,
                guildId: n,
                isEmbed: l
            } = e, a = new d.default(i.user);
            return (0, s.jsxs)("div", {
                className: m.speaker,
                children: [(0, s.jsx)(r.Avatar, {
                    src: a.getAvatarURL(n, l ? 16 : 24),
                    size: l ? r.AvatarSizes.SIZE_16 : r.AvatarSizes.SIZE_24,
                    "aria-label": "".concat(i.nick, "-avatar"),
                    className: l ? null : m.avatar
                }), (0, s.jsx)(C.default, {
                    size: l ? C.default.Sizes.SIZE_12 : C.default.Sizes.SIZE_14,
                    color: C.default.Colors.HEADER_SECONDARY,
                    className: m.username,
                    children: null !== (t = i.nick) && void 0 !== t ? t : a.username
                })]
            })
        },
        I = e => {
            let {
                guild: t,
                onlineCount: i
            } = e;
            if (null == t) return null;
            let n = new u.default(t),
                {
                    name: l,
                    description: a
                } = n;
            return (0, s.jsxs)("div", {
                children: [(0, s.jsx)(f.default, {
                    muted: !0,
                    uppercase: !0,
                    className: m.alignStart,
                    children: S.default.Messages.STAGE_INVITE_GUILD_HEADER
                }), (0, s.jsxs)("div", {
                    className: m.guild,
                    children: [(0, s.jsx)(h.default, {
                        mask: h.default.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, s.jsx)(o.default, {
                            guild: n,
                            size: o.default.Sizes.MEDIUM,
                            active: !0
                        })
                    }), (0, s.jsxs)("div", {
                        className: m.guildInfo,
                        children: [(0, s.jsx)(r.Heading, {
                            variant: "heading-sm/semibold",
                            children: l
                        }), (0, s.jsxs)("div", {
                            className: m.speaker,
                            children: [(0, s.jsx)("div", {
                                className: m.dot
                            }), null != i && i > 0 ? (0, s.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: S.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                    membersOnline: i
                                })
                            }) : null]
                        })]
                    })]
                }), null != a && "" !== a && (0, s.jsx)(r.Text, {
                    color: "header-secondary",
                    className: m.alignStart,
                    variant: "text-sm/normal",
                    children: a
                })]
            })
        };
    var g = e => {
        var t;
        let {
            stageInstance: i,
            guild: l,
            isCard: d = !1,
            isEmbed: I = !1,
            onClick: g
        } = e, R = n.useMemo(() => null == l ? null : l instanceof u.default ? l : new u.default(l), [l]);
        if (null == i || null == R) return null;
        let {
            topic: T,
            speaker_count: A,
            participant_count: O
        } = i, v = null !== (t = i.members) && void 0 !== t ? t : [], N = I ? v.slice(0, 3) : v, L = A - N.length;
        return I && (L += v.length - N.length), (0, s.jsxs)("div", {
            children: [(0, s.jsxs)("div", {
                className: m.flex,
                children: [(0, s.jsxs)("div", {
                    className: m.flex,
                    children: [(0, s.jsx)(_.default, {
                        height: 24,
                        width: 24,
                        className: m.live
                    }), (0, s.jsx)(r.Heading, {
                        variant: "eyebrow",
                        className: a(m.label, m.live),
                        children: S.default.Messages.STAGE_CHANNEL_LIVE_NOW
                    })]
                }), (0, s.jsxs)("div", {
                    className: m.background,
                    children: [(0, s.jsx)(c.default, {
                        height: 16,
                        width: 16,
                        className: m.listeners
                    }), (0, s.jsx)(r.Heading, {
                        className: a(m.label, m.listeners),
                        variant: "heading-sm/semibold",
                        children: O
                    })]
                })]
            }), I && (0, s.jsxs)("div", {
                className: a(m.guild, {
                    [m.embed]: I
                }),
                children: [(0, s.jsx)(h.default, {
                    mask: h.default.Masks.SQUIRCLE,
                    width: 20,
                    height: 20,
                    children: (0, s.jsx)(o.default, {
                        guild: R,
                        size: o.default.Sizes.MINI,
                        active: !0
                    })
                }), (0, s.jsx)(r.Text, {
                    color: "header-secondary",
                    className: m.label,
                    variant: "text-sm/normal",
                    children: R.name
                })]
            }), (0, s.jsx)(f.default, {
                size: d || I ? f.default.Sizes.SIZE_16 : f.default.Sizes.SIZE_20,
                className: a(m.header, {
                    [m.embed]: I
                }),
                children: T
            }), (0, s.jsxs)("div", {
                className: a(m.members, {
                    [m.embed]: I
                }),
                children: [N.length > 0 && (0, s.jsxs)("div", {
                    className: m.speakers,
                    children: [N.map(e => (0, s.jsx)(p, {
                        speaker: e,
                        guildId: R.id,
                        isEmbed: I
                    }, e.user.id)), L > 0 ? (0, s.jsxs)("div", {
                        className: m.speaker,
                        children: [(0, s.jsx)("div", {
                            className: a(m.icon, {
                                [m.embed]: I
                            }),
                            children: (0, s.jsx)(E.default, {
                                height: I ? 12 : 14,
                                className: m.listeners
                            })
                        }), (0, s.jsxs)(C.default, {
                            size: I ? C.default.Sizes.SIZE_12 : C.default.Sizes.SIZE_14,
                            color: C.default.Colors.HEADER_SECONDARY,
                            children: ["+", S.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
                                count: L
                            })]
                        })]
                    }) : null]
                }), I && (0, s.jsx)(r.Button, {
                    color: r.Button.Colors.GREEN,
                    onClick: g,
                    className: m.joinButton,
                    children: S.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
                })]
            })]
        })
    }
}