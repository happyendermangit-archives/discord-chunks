function(e, l, n) {
    "use strict";
    n.r(l), n("653041"), n("47120");
    var t = n("735250"),
        a = n("470079"),
        s = n("120356"),
        i = n.n(s),
        u = n("481060"),
        r = n("43267"),
        d = n("933557"),
        o = n("471445"),
        c = n("134432"),
        m = n("695346"),
        v = n("768581"),
        h = n("153066"),
        N = n("285952"),
        g = n("366695"),
        C = n("346656"),
        p = n("689938"),
        I = n("809384");
    let x = e => {
            let {
                text: l,
                extra: n
            } = e;
            return (0, t.jsxs)(u.FormTitle, {
                className: I.header,
                children: [l, n]
            })
        },
        E = e => {
            let {
                resolving: l,
                children: n
            } = e;
            return (0, t.jsx)("div", {
                className: I.content,
                children: l ? (0, t.jsxs)("div", {
                    className: I.resolvingWrapper,
                    children: [(0, t.jsx)("div", {
                        className: I.resolving,
                        children: (0, t.jsx)("div", {
                            className: I.resolvingBackground
                        })
                    }), (0, t.jsx)("div", {
                        className: I.resolvingFakeButton,
                        children: (0, t.jsx)("div", {
                            className: I.resolvingBackground
                        })
                    })]
                }) : n
            })
        },
        f = e => {
            var l;
            let {
                application: n,
                guild: a,
                channel: s,
                onClick: o,
                expired: c = !1,
                user: v,
                className: N
            } = e, p = null !== (l = (0, d.default)(s)) && void 0 !== l ? l : "", x = m.GifAutoPlay.useSetting();
            if (c) return (0, t.jsx)("div", {
                className: I.guildIconExpired
            });
            let E = null == a || null != a.icon,
                f = i()((0, h.getClass)(I, "guildIcon", E ? "Image" : "", null != o ? "Joined" : ""), N);
            if (null != n) return (0, t.jsx)(g.default, {
                game: n,
                onClick: o,
                size: I.applicationIcon,
                className: f
            });
            if (null != a) return (0, t.jsx)(C.default, {
                onClick: o,
                active: !0,
                guild: a,
                className: f,
                animate: x
            });
            if (null != s) return (0, t.jsx)(u.Avatar, {
                onClick: o,
                src: (0, r.getChannelIconURL)(s),
                size: u.AvatarSizes.SIZE_56,
                className: f,
                "aria-label": p
            });
            else if (null != v) return (0, t.jsx)(u.Avatar, {
                onClick: o,
                src: v.getAvatarURL(null, 56),
                size: u.AvatarSizes.SIZE_56,
                className: f,
                "aria-label": p
            });
            return null
        },
        j = e => {
            let {
                title: l,
                onClick: n,
                expired: a,
                children: s
            } = e, i = (0, t.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                className: (0, h.getClass)(I, "inviteDestination", a ? "Expired" : null != n ? "Joined" : ""),
                children: l
            });
            return (0, t.jsxs)(N.default, {
                className: I.guildInfo,
                direction: N.default.Direction.VERTICAL,
                justify: N.default.Justify.CENTER,
                children: [null == n ? i : (0, t.jsx)(u.Clickable, {
                    onClick: n,
                    children: i
                }), (0, t.jsx)(u.Text, {
                    tag: "strong",
                    className: I.guildDetail,
                    variant: "text-sm/normal",
                    children: s
                })]
            })
        },
        L = e => {
            let {
                membersOnline: l,
                members: n
            } = e, a = [];
            return null != l && l > 0 && a.push((0, t.jsxs)("div", {
                className: I.statusWrapper,
                children: [(0, t.jsx)("i", {
                    className: I.statusOnline
                }), (0, t.jsx)("span", {
                    className: I.count,
                    children: p.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                        membersOnline: l
                    })
                })]
            }, "onlineCount")), null != n && a.push((0, t.jsxs)("div", {
                className: I.statusWrapper,
                children: [(0, t.jsx)("i", {
                    className: I.statusOffline
                }), (0, t.jsx)("span", {
                    className: I.count,
                    children: p.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                        count: n
                    })
                })]
            }, "memberCount")), (0, t.jsx)("div", {
                className: I.statusCounts,
                children: a
            })
        },
        S = e => {
            let {
                channel: l,
                guild: n
            } = e, a = (0, o.getChannelIconComponent)(l, n);
            return null == l || null == a ? null : (0, t.jsxs)("div", {
                className: I.channel,
                children: [(0, t.jsx)(a, {
                    className: I.channelIcon,
                    width: 20,
                    height: 20
                }), (0, t.jsx)("span", {
                    className: I.channelName,
                    children: l.name
                })]
            })
        },
        B = e => {
            let {
                children: l,
                onClick: n,
                className: a,
                isDisabled: s,
                ...r
            } = e;
            return (0, t.jsx)(u.Button, {
                ...r,
                disabled: s,
                onClick: n,
                size: I.buttonSize,
                className: i()(I.button, a),
                children: l
            })
        };
    B.Colors = u.Button.Colors, B.Looks = u.Button.Looks, B.defaultProps = {
        className: null,
        isDisabled: !1
    };
    let k = e => {
            let {
                children: l,
                className: n,
                containerRef: a
            } = e;
            return (0, t.jsx)("div", {
                ref: a,
                className: i()(I.wrapper, n),
                children: l
            })
        },
        T = e => {
            let {
                guild: l
            } = e, [n, s] = a.useState(!1), u = v.default.getGuildSplashURL({
                id: l.id,
                splash: l.splash,
                size: 400 * (0, c.getDevicePixelRatio)()
            });
            return null == u ? null : (0, t.jsx)("div", {
                className: I.inviteSplash,
                children: (0, t.jsx)("img", {
                    src: u,
                    alt: "",
                    className: i()(I.inviteSplashImage, {
                        [I.inviteSplashImageLoaded]: n
                    }),
                    onLoad: () => s(!0)
                })
            })
        },
        _ = e => {
            let {
                guild: l
            } = e;
            return (0, t.jsx)("div", {
                className: I.guildNameWrapper,
                children: (0, t.jsx)("span", {
                    className: I.guildName,
                    children: l.name
                })
            })
        },
        y = e => {
            let {
                guildTemplate: l
            } = e;
            return (0, t.jsx)("div", {
                className: I.guildNameWrapper,
                children: (0, t.jsx)("span", {
                    className: I.guildName,
                    children: l.serializedSourceGuild.name
                })
            })
        };
    k.Header = x, k.Body = E, k.Icon = f, k.Info = j, k.Data = L, k.Channel = S, k.Button = B, k.GuildSplash = T, k.GuildName = _, k.GuildTemplateName = y, x.displayName = "InviteButton.Header", E.displayName = "InviteButton.Body", f.displayName = "InviteButton.Icon", j.displayName = "InviteButton.Info", L.displayName = "InviteButton.Data", S.displayName = "InviteButton.Channel", B.displayName = "InviteButton.Button", T.displayName = "InviteButton.GuildSplash", _.displayName = "InviteButton.GuildName", y.displayName = "InviteButton.GuildTemplateName", l.default = k
}