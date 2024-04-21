function(e, l, t) {
    "use strict";
    t.r(l), t("653041"), t("47120");
    var n = t("735250"),
        s = t("470079"),
        i = t("120356"),
        a = t.n(i),
        o = t("481060"),
        u = t("43267"),
        r = t("933557"),
        d = t("471445"),
        c = t("134432"),
        v = t("695346"),
        m = t("768581"),
        h = t("153066"),
        p = t("285952"),
        f = t("366695"),
        C = t("346656"),
        N = t("689938"),
        E = t("987969");
    let g = e => {
            let {
                text: l,
                extra: t
            } = e;
            return (0, n.jsxs)(o.FormTitle, {
                className: E.header,
                children: [l, t]
            })
        },
        I = e => {
            let {
                resolving: l,
                children: t
            } = e;
            return (0, n.jsx)("div", {
                className: E.content,
                children: l ? (0, n.jsxs)("div", {
                    className: E.resolvingWrapper,
                    children: [(0, n.jsx)("div", {
                        className: E.resolving,
                        children: (0, n.jsx)("div", {
                            className: E.resolvingBackground
                        })
                    }), (0, n.jsx)("div", {
                        className: E.resolvingFakeButton,
                        children: (0, n.jsx)("div", {
                            className: E.resolvingBackground
                        })
                    })]
                }) : t
            })
        },
        x = e => {
            var l;
            let {
                application: t,
                guild: s,
                channel: i,
                onClick: d,
                expired: c = !1,
                user: m,
                className: p
            } = e, N = null !== (l = (0, r.default)(i)) && void 0 !== l ? l : "", g = v.GifAutoPlay.useSetting();
            if (c) return (0, n.jsx)("div", {
                className: E.guildIconExpired
            });
            let I = null == s || null != s.icon,
                x = a()((0, h.getClass)(E, "guildIcon", I ? "Image" : "", null != d ? "Joined" : ""), p);
            if (null != t) return (0, n.jsx)(f.default, {
                game: t,
                onClick: d,
                size: E.applicationIcon,
                className: x
            });
            if (null != s) return (0, n.jsx)(C.default, {
                onClick: d,
                active: !0,
                guild: s,
                className: x,
                animate: g
            });
            if (null != i) return (0, n.jsx)(o.Avatar, {
                onClick: d,
                src: (0, u.getChannelIconURL)(i),
                size: o.AvatarSizes.SIZE_56,
                className: x,
                "aria-label": N
            });
            else if (null != m) return (0, n.jsx)(o.Avatar, {
                onClick: d,
                src: m.getAvatarURL(null, 56),
                size: o.AvatarSizes.SIZE_56,
                className: x,
                "aria-label": N
            });
            return null
        },
        j = e => {
            let {
                title: l,
                onClick: t,
                expired: s,
                children: i
            } = e, a = (0, n.jsx)(o.Heading, {
                variant: "heading-md/semibold",
                className: (0, h.getClass)(E, "inviteDestination", s ? "Expired" : null != t ? "Joined" : ""),
                children: l
            });
            return (0, n.jsxs)(p.default, {
                className: E.guildInfo,
                direction: p.default.Direction.VERTICAL,
                justify: p.default.Justify.CENTER,
                children: [null == t ? a : (0, n.jsx)(o.Clickable, {
                    onClick: t,
                    children: a
                }), (0, n.jsx)(o.Text, {
                    tag: "strong",
                    className: E.guildDetail,
                    variant: "text-sm/normal",
                    children: i
                })]
            })
        },
        S = e => {
            let {
                membersOnline: l,
                members: t
            } = e, s = [];
            return null != l && l > 0 && s.push((0, n.jsxs)("div", {
                className: E.statusWrapper,
                children: [(0, n.jsx)("i", {
                    className: E.statusOnline
                }), (0, n.jsx)("span", {
                    className: E.count,
                    children: N.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                        membersOnline: l
                    })
                })]
            }, "onlineCount")), null != t && s.push((0, n.jsxs)("div", {
                className: E.statusWrapper,
                children: [(0, n.jsx)("i", {
                    className: E.statusOffline
                }), (0, n.jsx)("span", {
                    className: E.count,
                    children: N.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                        count: t
                    })
                })]
            }, "memberCount")), (0, n.jsx)("div", {
                className: E.statusCounts,
                children: s
            })
        },
        L = e => {
            let {
                channel: l,
                guild: t
            } = e, s = (0, d.getChannelIconComponent)(l, t);
            return null == l || null == s ? null : (0, n.jsxs)("div", {
                className: E.channel,
                children: [(0, n.jsx)(s, {
                    className: E.channelIcon,
                    width: 20,
                    height: 20
                }), (0, n.jsx)("span", {
                    className: E.channelName,
                    children: l.name
                })]
            })
        },
        R = e => {
            let {
                children: l,
                onClick: t,
                className: s,
                isDisabled: i,
                ...u
            } = e;
            return (0, n.jsx)(o.Button, {
                ...u,
                disabled: i,
                onClick: t,
                size: E.buttonSize,
                className: a()(E.button, s),
                children: l
            })
        };
    R.Colors = o.Button.Colors, R.Looks = o.Button.Looks, R.defaultProps = {
        className: null,
        isDisabled: !1
    };
    let T = e => {
            let {
                children: l,
                className: t,
                containerRef: s
            } = e;
            return (0, n.jsx)("div", {
                ref: s,
                className: a()(E.wrapper, t),
                children: l
            })
        },
        _ = e => {
            let {
                guild: l
            } = e, [t, i] = s.useState(!1), o = m.default.getGuildSplashURL({
                id: l.id,
                splash: l.splash,
                size: 400 * (0, c.getDevicePixelRatio)()
            });
            return null == o ? null : (0, n.jsx)("div", {
                className: E.inviteSplash,
                children: (0, n.jsx)("img", {
                    src: o,
                    alt: "",
                    className: a()(E.inviteSplashImage, {
                        [E.inviteSplashImageLoaded]: t
                    }),
                    onLoad: () => i(!0)
                })
            })
        },
        B = e => {
            let {
                guild: l
            } = e;
            return (0, n.jsx)("div", {
                className: E.guildNameWrapper,
                children: (0, n.jsx)("span", {
                    className: E.guildName,
                    children: l.name
                })
            })
        },
        D = e => {
            let {
                guildTemplate: l
            } = e;
            return (0, n.jsx)("div", {
                className: E.guildNameWrapper,
                children: (0, n.jsx)("span", {
                    className: E.guildName,
                    children: l.serializedSourceGuild.name
                })
            })
        };
    T.Header = g, T.Body = I, T.Icon = x, T.Info = j, T.Data = S, T.Channel = L, T.Button = R, T.GuildSplash = _, T.GuildName = B, T.GuildTemplateName = D, g.displayName = "InviteButton.Header", I.displayName = "InviteButton.Body", x.displayName = "InviteButton.Icon", j.displayName = "InviteButton.Info", S.displayName = "InviteButton.Data", L.displayName = "InviteButton.Channel", R.displayName = "InviteButton.Button", _.displayName = "InviteButton.GuildSplash", B.displayName = "InviteButton.GuildName", D.displayName = "InviteButton.GuildTemplateName", l.default = T
}