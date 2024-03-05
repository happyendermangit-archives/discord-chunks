function(e, l, n) {
    "use strict";
    n.r(l), n.d(l, {
        default: function() {
            return k
        }
    }), n("424973"), n("222007");
    var t = n("37983"),
        s = n("884691"),
        a = n("414456"),
        i = n.n(a),
        u = n("77078"),
        o = n("843962"),
        r = n("679653"),
        d = n("419830"),
        c = n("407063"),
        m = n("845579"),
        v = n("315102"),
        p = n("474293"),
        E = n("145131"),
        N = n("953109"),
        h = n("476263"),
        C = n("782340"),
        g = n("519166");
    let f = e => {
            let {
                text: l,
                extra: n
            } = e;
            return (0, t.jsxs)(u.FormTitle, {
                className: g.header,
                children: [l, n]
            })
        },
        I = e => {
            let {
                resolving: l,
                children: n
            } = e;
            return (0, t.jsx)("div", {
                className: g.content,
                children: l ? (0, t.jsxs)("div", {
                    className: g.resolvingWrapper,
                    children: [(0, t.jsx)("div", {
                        className: g.resolving,
                        children: (0, t.jsx)("div", {
                            className: g.resolvingBackground
                        })
                    }), (0, t.jsx)("div", {
                        className: g.resolvingFakeButton,
                        children: (0, t.jsx)("div", {
                            className: g.resolvingBackground
                        })
                    })]
                }) : n
            })
        },
        x = e => {
            var l;
            let {
                application: n,
                guild: s,
                channel: a,
                onClick: d,
                expired: c = !1,
                user: v,
                className: E
            } = e, C = null !== (l = (0, r.default)(a)) && void 0 !== l ? l : "", f = m.GifAutoPlay.useSetting();
            if (c) return (0, t.jsx)("div", {
                className: g.guildIconExpired
            });
            let I = null == s || null != s.icon,
                x = i((0, p.getClass)(g, "guildIcon", I ? "Image" : "", null != d ? "Joined" : ""), E);
            if (null != n) return (0, t.jsx)(N.default, {
                game: n,
                onClick: d,
                size: g.applicationIcon,
                className: x
            });
            if (null != s) return (0, t.jsx)(h.default, {
                onClick: d,
                active: !0,
                guild: s,
                className: x,
                animate: f
            });
            if (null != a) return (0, t.jsx)(u.Avatar, {
                onClick: d,
                src: (0, o.getChannelIconURL)(a),
                size: u.AvatarSizes.SIZE_56,
                className: x,
                "aria-label": C
            });
            else if (null != v) return (0, t.jsx)(u.Avatar, {
                onClick: d,
                src: v.getAvatarURL(null, 56),
                size: u.AvatarSizes.SIZE_56,
                className: x,
                "aria-label": C
            });
            return null
        },
        S = e => {
            let {
                title: l,
                onClick: n,
                expired: s,
                children: a
            } = e, i = (0, t.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                className: (0, p.getClass)(g, "inviteDestination", s ? "Expired" : null != n ? "Joined" : ""),
                children: l
            });
            return (0, t.jsxs)(E.default, {
                className: g.guildInfo,
                direction: E.default.Direction.VERTICAL,
                justify: E.default.Justify.CENTER,
                children: [null == n ? i : (0, t.jsx)(u.Clickable, {
                    onClick: n,
                    children: i
                }), (0, t.jsx)(u.Text, {
                    tag: "strong",
                    className: g.guildDetail,
                    variant: "text-sm/normal",
                    children: a
                })]
            })
        },
        j = e => {
            let {
                membersOnline: l,
                members: n
            } = e, s = [];
            return null != l && l > 0 && s.push((0, t.jsxs)("div", {
                className: g.statusWrapper,
                children: [(0, t.jsx)("i", {
                    className: g.statusOnline
                }), (0, t.jsx)("span", {
                    className: g.count,
                    children: C.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                        membersOnline: l
                    })
                })]
            }, "onlineCount")), null != n && s.push((0, t.jsxs)("div", {
                className: g.statusWrapper,
                children: [(0, t.jsx)("i", {
                    className: g.statusOffline
                }), (0, t.jsx)("span", {
                    className: g.count,
                    children: C.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                        count: n
                    })
                })]
            }, "memberCount")), (0, t.jsx)("div", {
                className: g.statusCounts,
                children: s
            })
        },
        L = e => {
            let {
                channel: l,
                guild: n
            } = e, s = (0, d.getChannelIconComponent)(l, n);
            return null == l || null == s ? null : (0, t.jsxs)("div", {
                className: g.channel,
                children: [(0, t.jsx)(s, {
                    className: g.channelIcon,
                    width: 20,
                    height: 20
                }), (0, t.jsx)("span", {
                    className: g.channelName,
                    children: l.name
                })]
            })
        },
        R = e => {
            let {
                children: l,
                onClick: n,
                className: s,
                isDisabled: a,
                ...o
            } = e;
            return (0, t.jsx)(u.Button, {
                ...o,
                disabled: a,
                onClick: n,
                size: g.buttonSize,
                className: i(g.button, s),
                children: l
            })
        };
    R.Colors = u.Button.Colors, R.Looks = u.Button.Looks, R.defaultProps = {
        className: null,
        isDisabled: !1
    };
    let T = e => {
            let {
                children: l,
                className: n,
                containerRef: s
            } = e;
            return (0, t.jsx)("div", {
                ref: s,
                className: i(g.wrapper, n),
                children: l
            })
        },
        _ = e => {
            let {
                guild: l
            } = e, [n, a] = s.useState(!1), u = v.default.getGuildSplashURL({
                id: l.id,
                splash: l.splash,
                size: 400 * (0, c.getDevicePixelRatio)()
            });
            return null == u ? null : (0, t.jsx)("div", {
                className: g.inviteSplash,
                children: (0, t.jsx)("img", {
                    src: u,
                    alt: "",
                    className: i(g.inviteSplashImage, {
                        [g.inviteSplashImageLoaded]: n
                    }),
                    onLoad: () => a(!0)
                })
            })
        },
        B = e => {
            let {
                guild: l
            } = e;
            return (0, t.jsx)("div", {
                className: g.guildNameWrapper,
                children: (0, t.jsx)("span", {
                    className: g.guildName,
                    children: l.name
                })
            })
        },
        D = e => {
            let {
                guildTemplate: l
            } = e;
            return (0, t.jsx)("div", {
                className: g.guildNameWrapper,
                children: (0, t.jsx)("span", {
                    className: g.guildName,
                    children: l.serializedSourceGuild.name
                })
            })
        };
    T.Header = f, T.Body = I, T.Icon = x, T.Info = S, T.Data = j, T.Channel = L, T.Button = R, T.GuildSplash = _, T.GuildName = B, T.GuildTemplateName = D, f.displayName = "InviteButton.Header", I.displayName = "InviteButton.Body", x.displayName = "InviteButton.Icon", S.displayName = "InviteButton.Info", j.displayName = "InviteButton.Data", L.displayName = "InviteButton.Channel", R.displayName = "InviteButton.Button", _.displayName = "InviteButton.GuildSplash", B.displayName = "InviteButton.GuildName", D.displayName = "InviteButton.GuildTemplateName";
    var k = T
}