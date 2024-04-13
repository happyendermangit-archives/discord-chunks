function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        StageInviteFooter: function() {
            return I
        }
    });
    var s = i("735250"),
        n = i("470079"),
        l = i("803997"),
        r = i.n(l),
        a = i("481060"),
        o = i("601964"),
        d = i("598077"),
        u = i("346656"),
        c = i("242315"),
        _ = i("357727"),
        E = i("170039"),
        f = i("727218"),
        p = i("154921"),
        h = i("806519"),
        m = i("689938"),
        S = i("425621");
    let C = e => {
            var t;
            let {
                speaker: i,
                guildId: n,
                isEmbed: l
            } = e, r = new d.default(i.user);
            return (0, s.jsxs)("div", {
                className: S.speaker,
                children: [(0, s.jsx)(a.Avatar, {
                    src: r.getAvatarURL(n, l ? 16 : 24),
                    size: l ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                    "aria-label": "".concat(i.nick, "-avatar"),
                    className: l ? null : S.avatar
                }), (0, s.jsx)(p.default, {
                    size: l ? p.default.Sizes.SIZE_12 : p.default.Sizes.SIZE_14,
                    color: p.default.Colors.HEADER_SECONDARY,
                    className: S.username,
                    children: null !== (t = i.nick) && void 0 !== t ? t : r.username
                })]
            })
        },
        I = e => {
            let {
                guild: t,
                onlineCount: i
            } = e;
            if (null == t) return null;
            let n = new o.default(t),
                {
                    name: l,
                    description: r
                } = n;
            return (0, s.jsxs)("div", {
                children: [(0, s.jsx)(f.default, {
                    muted: !0,
                    uppercase: !0,
                    className: S.alignStart,
                    children: m.default.Messages.STAGE_INVITE_GUILD_HEADER
                }), (0, s.jsxs)("div", {
                    className: S.guild,
                    children: [(0, s.jsx)(h.default, {
                        mask: h.default.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, s.jsx)(u.default, {
                            guild: n,
                            size: u.default.Sizes.MEDIUM,
                            active: !0
                        })
                    }), (0, s.jsxs)("div", {
                        className: S.guildInfo,
                        children: [(0, s.jsx)(a.Heading, {
                            variant: "heading-sm/semibold",
                            children: l
                        }), (0, s.jsxs)("div", {
                            className: S.speaker,
                            children: [(0, s.jsx)("div", {
                                className: S.dot
                            }), null != i && i > 0 ? (0, s.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children: m.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                    membersOnline: i
                                })
                            }) : null]
                        })]
                    })]
                }), null != r && "" !== r && (0, s.jsx)(a.Text, {
                    color: "header-secondary",
                    className: S.alignStart,
                    variant: "text-sm/normal",
                    children: r
                })]
            })
        };
    t.default = e => {
        var t;
        let {
            stageInstance: i,
            guild: l,
            isCard: d = !1,
            isEmbed: I = !1,
            onClick: g
        } = e, v = n.useMemo(() => null == l ? null : l instanceof o.default ? l : new o.default(l), [l]);
        if (null == i || null == v) return null;
        let {
            topic: T,
            speaker_count: A,
            participant_count: R
        } = i, b = null !== (t = i.members) && void 0 !== t ? t : [], O = I ? b.slice(0, 3) : b, N = A - O.length;
        return I && (N += b.length - O.length), (0, s.jsxs)("div", {
            children: [(0, s.jsxs)("div", {
                className: S.flex,
                children: [(0, s.jsxs)("div", {
                    className: S.flex,
                    children: [(0, s.jsx)(E.default, {
                        height: 24,
                        width: 24,
                        className: S.live
                    }), (0, s.jsx)(a.Heading, {
                        variant: "eyebrow",
                        className: r()(S.__invalid_label, S.live),
                        children: m.default.Messages.STAGE_CHANNEL_LIVE_NOW
                    })]
                }), (0, s.jsxs)("div", {
                    className: S.background,
                    children: [(0, s.jsx)(c.default, {
                        height: 16,
                        width: 16,
                        className: S.listeners
                    }), (0, s.jsx)(a.Heading, {
                        className: r()(S.__invalid_label, S.listeners),
                        variant: "heading-sm/semibold",
                        children: R
                    })]
                })]
            }), I && (0, s.jsxs)("div", {
                className: r()(S.guild, {
                    [S.embed]: I
                }),
                children: [(0, s.jsx)(h.default, {
                    mask: h.default.Masks.SQUIRCLE,
                    width: 20,
                    height: 20,
                    children: (0, s.jsx)(u.default, {
                        guild: v,
                        size: u.default.Sizes.MINI,
                        active: !0
                    })
                }), (0, s.jsx)(a.Text, {
                    color: "header-secondary",
                    className: S.__invalid_label,
                    variant: "text-sm/normal",
                    children: v.name
                })]
            }), (0, s.jsx)(f.default, {
                size: d || I ? f.default.Sizes.SIZE_16 : f.default.Sizes.SIZE_20,
                className: r()(S.header, {
                    [S.embed]: I
                }),
                children: T
            }), (0, s.jsxs)("div", {
                className: r()(S.members, {
                    [S.embed]: I
                }),
                children: [O.length > 0 && (0, s.jsxs)("div", {
                    className: S.speakers,
                    children: [O.map(e => (0, s.jsx)(C, {
                        speaker: e,
                        guildId: v.id,
                        isEmbed: I
                    }, e.user.id)), N > 0 ? (0, s.jsxs)("div", {
                        className: S.speaker,
                        children: [(0, s.jsx)("div", {
                            className: r()(S.icon, {
                                [S.embed]: I
                            }),
                            children: (0, s.jsx)(_.default, {
                                height: I ? 12 : 14,
                                className: S.listeners
                            })
                        }), (0, s.jsxs)(p.default, {
                            size: I ? p.default.Sizes.SIZE_12 : p.default.Sizes.SIZE_14,
                            color: p.default.Colors.HEADER_SECONDARY,
                            children: ["+", m.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
                                count: N
                            })]
                        })]
                    }) : null]
                }), I && (0, s.jsx)(a.Button, {
                    color: a.Button.Colors.GREEN,
                    onClick: g,
                    className: S.joinButton,
                    children: m.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
                })]
            })]
        })
    }
}