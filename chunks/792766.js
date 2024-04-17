function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        StageInviteFooter: function() {
            return I
        }
    });
    var n = l("735250"),
        a = l("470079"),
        i = l("120356"),
        s = l.n(i),
        r = l("481060"),
        d = l("601964"),
        o = l("598077"),
        u = l("346656"),
        c = l("242315"),
        _ = l("357727"),
        E = l("170039"),
        f = l("727218"),
        C = l("154921"),
        S = l("806519"),
        m = l("689938"),
        h = l("425621");
    let p = e => {
            var t;
            let {
                speaker: l,
                guildId: a,
                isEmbed: i
            } = e, s = new o.default(l.user);
            return (0, n.jsxs)("div", {
                className: h.speaker,
                children: [(0, n.jsx)(r.Avatar, {
                    src: s.getAvatarURL(a, i ? 16 : 24),
                    size: i ? r.AvatarSizes.SIZE_16 : r.AvatarSizes.SIZE_24,
                    "aria-label": "".concat(l.nick, "-avatar"),
                    className: i ? null : h.avatar
                }), (0, n.jsx)(C.default, {
                    size: i ? C.default.Sizes.SIZE_12 : C.default.Sizes.SIZE_14,
                    color: C.default.Colors.HEADER_SECONDARY,
                    className: h.username,
                    children: null !== (t = l.nick) && void 0 !== t ? t : s.username
                })]
            })
        },
        I = e => {
            let {
                guild: t,
                onlineCount: l
            } = e;
            if (null == t) return null;
            let a = new d.default(t),
                {
                    name: i,
                    description: s
                } = a;
            return (0, n.jsxs)("div", {
                children: [(0, n.jsx)(f.default, {
                    muted: !0,
                    uppercase: !0,
                    className: h.alignStart,
                    children: m.default.Messages.STAGE_INVITE_GUILD_HEADER
                }), (0, n.jsxs)("div", {
                    className: h.guild,
                    children: [(0, n.jsx)(S.default, {
                        mask: S.default.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, n.jsx)(u.default, {
                            guild: a,
                            size: u.default.Sizes.MEDIUM,
                            active: !0
                        })
                    }), (0, n.jsxs)("div", {
                        className: h.guildInfo,
                        children: [(0, n.jsx)(r.Heading, {
                            variant: "heading-sm/semibold",
                            children: i
                        }), (0, n.jsxs)("div", {
                            className: h.speaker,
                            children: [(0, n.jsx)("div", {
                                className: h.dot
                            }), null != l && l > 0 ? (0, n.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: m.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                    membersOnline: l
                                })
                            }) : null]
                        })]
                    })]
                }), null != s && "" !== s && (0, n.jsx)(r.Text, {
                    color: "header-secondary",
                    className: h.alignStart,
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
            isCard: o = !1,
            isEmbed: I = !1,
            onClick: T
        } = e, R = a.useMemo(() => null == i ? null : i instanceof d.default ? i : new d.default(i), [i]);
        if (null == l || null == R) return null;
        let {
            topic: A,
            speaker_count: g,
            participant_count: v
        } = l, O = null !== (t = l.members) && void 0 !== t ? t : [], N = I ? O.slice(0, 3) : O, y = g - N.length;
        return I && (y += O.length - N.length), (0, n.jsxs)("div", {
            children: [(0, n.jsxs)("div", {
                className: h.flex,
                children: [(0, n.jsxs)("div", {
                    className: h.flex,
                    children: [(0, n.jsx)(E.default, {
                        height: 24,
                        width: 24,
                        className: h.live
                    }), (0, n.jsx)(r.Heading, {
                        variant: "eyebrow",
                        className: s()(h.__invalid_label, h.live),
                        children: m.default.Messages.STAGE_CHANNEL_LIVE_NOW
                    })]
                }), (0, n.jsxs)("div", {
                    className: h.background,
                    children: [(0, n.jsx)(c.default, {
                        height: 16,
                        width: 16,
                        className: h.listeners
                    }), (0, n.jsx)(r.Heading, {
                        className: s()(h.__invalid_label, h.listeners),
                        variant: "heading-sm/semibold",
                        children: v
                    })]
                })]
            }), I && (0, n.jsxs)("div", {
                className: s()(h.guild, {
                    [h.embed]: I
                }),
                children: [(0, n.jsx)(S.default, {
                    mask: S.default.Masks.SQUIRCLE,
                    width: 20,
                    height: 20,
                    children: (0, n.jsx)(u.default, {
                        guild: R,
                        size: u.default.Sizes.MINI,
                        active: !0
                    })
                }), (0, n.jsx)(r.Text, {
                    color: "header-secondary",
                    className: h.__invalid_label,
                    variant: "text-sm/normal",
                    children: R.name
                })]
            }), (0, n.jsx)(f.default, {
                size: o || I ? f.default.Sizes.SIZE_16 : f.default.Sizes.SIZE_20,
                className: s()(h.header, {
                    [h.embed]: I
                }),
                children: A
            }), (0, n.jsxs)("div", {
                className: s()(h.members, {
                    [h.embed]: I
                }),
                children: [N.length > 0 && (0, n.jsxs)("div", {
                    className: h.speakers,
                    children: [N.map(e => (0, n.jsx)(p, {
                        speaker: e,
                        guildId: R.id,
                        isEmbed: I
                    }, e.user.id)), y > 0 ? (0, n.jsxs)("div", {
                        className: h.speaker,
                        children: [(0, n.jsx)("div", {
                            className: s()(h.icon, {
                                [h.embed]: I
                            }),
                            children: (0, n.jsx)(_.default, {
                                height: I ? 12 : 14,
                                className: h.listeners
                            })
                        }), (0, n.jsxs)(C.default, {
                            size: I ? C.default.Sizes.SIZE_12 : C.default.Sizes.SIZE_14,
                            color: C.default.Colors.HEADER_SECONDARY,
                            children: ["+", m.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
                                count: y
                            })]
                        })]
                    }) : null]
                }), I && (0, n.jsx)(r.Button, {
                    color: r.Button.Colors.GREEN,
                    onClick: T,
                    className: h.joinButton,
                    children: m.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
                })]
            })]
        })
    }
}