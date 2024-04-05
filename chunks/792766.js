function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        StageInviteFooter: function() {
            return R
        }
    });
    var a = l("735250"),
        n = l("470079"),
        i = l("803997"),
        s = l.n(i),
        r = l("481060"),
        d = l("601964"),
        u = l("598077"),
        o = l("346656"),
        c = l("242315"),
        E = l("357727"),
        _ = l("170039"),
        f = l("727218"),
        C = l("154921"),
        S = l("806519"),
        h = l("689938"),
        m = l("425621");
    let I = e => {
            var t;
            let {
                speaker: l,
                guildId: n,
                isEmbed: i
            } = e, s = new u.default(l.user);
            return (0, a.jsxs)("div", {
                className: m.speaker,
                children: [(0, a.jsx)(r.Avatar, {
                    src: s.getAvatarURL(n, i ? 16 : 24),
                    size: i ? r.AvatarSizes.SIZE_16 : r.AvatarSizes.SIZE_24,
                    "aria-label": "".concat(l.nick, "-avatar"),
                    className: i ? null : m.avatar
                }), (0, a.jsx)(C.default, {
                    size: i ? C.default.Sizes.SIZE_12 : C.default.Sizes.SIZE_14,
                    color: C.default.Colors.HEADER_SECONDARY,
                    className: m.username,
                    children: null !== (t = l.nick) && void 0 !== t ? t : s.username
                })]
            })
        },
        R = e => {
            let {
                guild: t,
                onlineCount: l
            } = e;
            if (null == t) return null;
            let n = new d.default(t),
                {
                    name: i,
                    description: s
                } = n;
            return (0, a.jsxs)("div", {
                children: [(0, a.jsx)(f.default, {
                    muted: !0,
                    uppercase: !0,
                    className: m.alignStart,
                    children: h.default.Messages.STAGE_INVITE_GUILD_HEADER
                }), (0, a.jsxs)("div", {
                    className: m.guild,
                    children: [(0, a.jsx)(S.default, {
                        mask: S.default.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, a.jsx)(o.default, {
                            guild: n,
                            size: o.default.Sizes.MEDIUM,
                            active: !0
                        })
                    }), (0, a.jsxs)("div", {
                        className: m.guildInfo,
                        children: [(0, a.jsx)(r.Heading, {
                            variant: "heading-sm/semibold",
                            children: i
                        }), (0, a.jsxs)("div", {
                            className: m.speaker,
                            children: [(0, a.jsx)("div", {
                                className: m.dot
                            }), null != l && l > 0 ? (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                    membersOnline: l
                                })
                            }) : null]
                        })]
                    })]
                }), null != s && "" !== s && (0, a.jsx)(r.Text, {
                    color: "header-secondary",
                    className: m.alignStart,
                    variant: "text-sm/normal",
                    children: s
                })]
            })
        };
    t.default = e => {
        var t;
        let {
            stageInstance: l,
            guild: i,
            isCard: u = !1,
            isEmbed: R = !1,
            onClick: p
        } = e, T = n.useMemo(() => null == i ? null : i instanceof d.default ? i : new d.default(i), [i]);
        if (null == l || null == T) return null;
        let {
            topic: A,
            speaker_count: O,
            participant_count: g
        } = l, v = null !== (t = l.members) && void 0 !== t ? t : [], N = R ? v.slice(0, 3) : v, L = O - N.length;
        return R && (L += v.length - N.length), (0, a.jsxs)("div", {
            children: [(0, a.jsxs)("div", {
                className: m.flex,
                children: [(0, a.jsxs)("div", {
                    className: m.flex,
                    children: [(0, a.jsx)(_.default, {
                        height: 24,
                        width: 24,
                        className: m.live
                    }), (0, a.jsx)(r.Heading, {
                        variant: "eyebrow",
                        className: s()(m.__invalid_label, m.live),
                        children: h.default.Messages.STAGE_CHANNEL_LIVE_NOW
                    })]
                }), (0, a.jsxs)("div", {
                    className: m.background,
                    children: [(0, a.jsx)(c.default, {
                        height: 16,
                        width: 16,
                        className: m.listeners
                    }), (0, a.jsx)(r.Heading, {
                        className: s()(m.__invalid_label, m.listeners),
                        variant: "heading-sm/semibold",
                        children: g
                    })]
                })]
            }), R && (0, a.jsxs)("div", {
                className: s()(m.guild, {
                    [m.embed]: R
                }),
                children: [(0, a.jsx)(S.default, {
                    mask: S.default.Masks.SQUIRCLE,
                    width: 20,
                    height: 20,
                    children: (0, a.jsx)(o.default, {
                        guild: T,
                        size: o.default.Sizes.MINI,
                        active: !0
                    })
                }), (0, a.jsx)(r.Text, {
                    color: "header-secondary",
                    className: m.__invalid_label,
                    variant: "text-sm/normal",
                    children: T.name
                })]
            }), (0, a.jsx)(f.default, {
                size: u || R ? f.default.Sizes.SIZE_16 : f.default.Sizes.SIZE_20,
                className: s()(m.header, {
                    [m.embed]: R
                }),
                children: A
            }), (0, a.jsxs)("div", {
                className: s()(m.members, {
                    [m.embed]: R
                }),
                children: [N.length > 0 && (0, a.jsxs)("div", {
                    className: m.speakers,
                    children: [N.map(e => (0, a.jsx)(I, {
                        speaker: e,
                        guildId: T.id,
                        isEmbed: R
                    }, e.user.id)), L > 0 ? (0, a.jsxs)("div", {
                        className: m.speaker,
                        children: [(0, a.jsx)("div", {
                            className: s()(m.icon, {
                                [m.embed]: R
                            }),
                            children: (0, a.jsx)(E.default, {
                                height: R ? 12 : 14,
                                className: m.listeners
                            })
                        }), (0, a.jsxs)(C.default, {
                            size: R ? C.default.Sizes.SIZE_12 : C.default.Sizes.SIZE_14,
                            color: C.default.Colors.HEADER_SECONDARY,
                            children: ["+", h.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
                                count: L
                            })]
                        })]
                    }) : null]
                }), R && (0, a.jsx)(r.Button, {
                    color: r.Button.Colors.GREEN,
                    onClick: p,
                    className: m.joinButton,
                    children: h.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
                })]
            })]
        })
    }
}