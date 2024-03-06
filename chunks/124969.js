function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Title: function() {
            return x
        },
        SubTitle: function() {
            return v
        },
        Image: function() {
            return Image
        },
        Button: function() {
            return T
        },
        Avatar: function() {
            return N
        },
        GuildIcon: function() {
            return y
        },
        ChannelIcon: function() {
            return S
        },
        Input: function() {
            return E
        },
        Block: function() {
            return I
        },
        SubText: function() {
            return A
        },
        AuthSpinner: function() {
            return j
        },
        ActivityCount: function() {
            return R
        },
        JoiningAs: function() {
            return w
        },
        IncompatibleBrowser: function() {
            return L
        },
        default: function() {
            return z
        }
    }), n("834022");
    var s = n("37983");
    n("884691");
    var r = n("414456"),
        a = n.n(r),
        i = n("77078"),
        l = n("843962"),
        u = n("145131"),
        o = n("476263"),
        c = n("476765"),
        d = n("637888"),
        f = n("98013"),
        p = n("701909"),
        m = n("439932"),
        g = n("49111"),
        _ = n("782340"),
        b = n("2710");
    let h = i.Avatar;
    null == h && (h = () => null);
    let x = e => {
            let {
                className: t,
                id: n,
                children: r
            } = e;
            return (0, s.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                color: "header-primary",
                className: a(b.title, t),
                id: n,
                children: r
            })
        },
        v = e => {
            let {
                className: t,
                children: n
            } = e;
            return (0, s.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: t,
                children: n
            })
        },
        Image = e => {
            let {
                className: t,
                src: n
            } = e;
            return (0, s.jsx)("img", {
                alt: "",
                src: n,
                className: a(b.image, t)
            })
        },
        T = e => {
            let {
                className: t,
                ...n
            } = e, r = n.look === i.Button.Looks.LINK;
            return (0, s.jsx)(i.Button, {
                size: r ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
                fullWidth: !r,
                className: a(t, {
                    [b.button]: !r,
                    [b.linkButton]: r
                }),
                ...n
            })
        };
    T.Looks = i.Button.Looks, T.Colors = i.Button.Colors, T.Sizes = i.Button.Sizes;
    let N = e => {
            let {
                className: t,
                src: n,
                size: r
            } = e;
            return (0, s.jsx)(h, {
                src: n,
                size: r,
                className: a(b.inviteLargeIcon, t),
                "aria-hidden": !0
            })
        },
        y = e => {
            let {
                guild: t,
                size: n,
                animate: r = !1,
                className: a
            } = e;
            return (0, s.jsx)(o.default, {
                active: !0,
                guild: t,
                size: n,
                animate: r,
                className: a
            })
        };
    y.Sizes = o.default.Sizes;
    let S = e => {
        let {
            className: t,
            channel: n,
            size: r
        } = e;
        return (0, s.jsx)(h, {
            src: (0, l.getChannelIconURL)(n),
            size: r,
            className: a(b.inviteIcon, t),
            "aria-hidden": !0
        })
    };
    S.Sizes = i.AvatarSizes;
    let E = e => {
            let {
                label: t,
                error: n,
                placeholder: r,
                value: l,
                className: u,
                inputClassName: o,
                setRef: d,
                type: f = "text",
                onChange: p,
                autoComplete: m,
                autoFocus: g,
                maxLength: _,
                spellCheck: h,
                name: x,
                description: v,
                required: T,
                onFocus: N,
                onBlur: y
            } = e, S = (0, c.useUID)();
            return (0, s.jsxs)(i.FormItem, {
                title: t,
                error: n,
                className: u,
                required: T,
                tag: "label",
                htmlFor: S,
                children: [(0, s.jsx)(i.TextInput, {
                    name: x,
                    type: f,
                    value: l,
                    inputRef: d,
                    placeholder: r,
                    inputClassName: a(o, {
                        [b.inputError]: null != n
                    }),
                    "aria-label": t,
                    onChange: p,
                    autoComplete: m,
                    autoFocus: g,
                    maxLength: _,
                    spellCheck: h,
                    id: S,
                    onFocus: N,
                    onBlur: y
                }), null != v ? (0, s.jsx)(i.FormText, {
                    type: i.FormText.Types.DESCRIPTION,
                    className: b.description,
                    children: v
                }) : null]
            })
        },
        I = e => {
            let {
                className: t,
                children: n
            } = e;
            return (0, s.jsx)("div", {
                className: a(b.block, t),
                children: n
            })
        },
        A = e => {
            let {
                className: t,
                children: n,
                isProminent: r
            } = e;
            return (0, s.jsx)(i.Text, {
                variant: r ? "text-sm/normal" : "text-xs/normal",
                className: a(b.subText, t),
                children: n
            })
        },
        j = e => {
            let {
                className: t
            } = e;
            return (0, s.jsx)(u.default, {
                direction: u.default.Direction.VERTICAL,
                align: u.default.Align.CENTER,
                className: t,
                children: (0, s.jsx)(d.default, {
                    className: b.spinnerVideo
                })
            })
        },
        R = e => {
            let t, {
                online: n,
                total: r,
                className: l,
                flat: o,
                textClassName: c
            } = e;
            return null == r ? null : (null != n && n > 0 && (t = (0, s.jsxs)("div", {
                className: a(b.pill, b.pillOnline, o && b.pillFlat),
                children: [(0, s.jsx)("i", {
                    className: b.pillIconOnline
                }), (0, s.jsx)(i.Text, {
                    tag: "span",
                    className: a(b.pillMessage, c),
                    variant: "text-sm/normal",
                    children: _.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                        membersOnline: n
                    })
                })]
            })), (0, s.jsxs)(u.default, {
                justify: u.default.Justify.CENTER,
                className: l,
                children: [t, (0, s.jsxs)("div", {
                    className: a(b.pill, o && b.pillFlat),
                    children: [(0, s.jsx)("i", {
                        className: b.pillIconTotal
                    }), (0, s.jsx)(i.Text, {
                        tag: "span",
                        className: a(b.pillMessage, c),
                        variant: "text-sm/normal",
                        children: _.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                            count: r
                        })
                    })]
                })]
            }))
        },
        w = e => {
            let {
                user: t
            } = e;
            return null == t ? null : (0, s.jsxs)("div", {
                className: b.joiningAs,
                children: [(0, s.jsx)(i.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: _.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                }), (0, s.jsx)(N, {
                    className: b.joiningAsAvatar,
                    src: t.getAvatarURL(void 0, 24),
                    size: i.AvatarSizes.SIZE_24,
                    "aria-label": t.username
                }), (0, s.jsx)(i.Text, {
                    className: b.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.username
                })]
            })
        },
        L = e => {
            let {
                className: t
            } = e;
            return (0, s.jsxs)(I, {
                className: t,
                children: [(0, s.jsx)(T, {
                    onClick: () => window.open((0, f.getCurrentPlatformDownloadURL)()),
                    children: _.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                        platform: (0, f.getPlatformReadableName)()
                    })
                }), (0, s.jsx)(A, {
                    className: b.downloadButtonSubtext,
                    children: _.default.Messages.INCOMPATIBLE_BROWSER.format({
                        supportedBrowserURL: p.default.getArticleURL(g.HelpdeskArticles.SUPPORTED_BROWSERS)
                    })
                })]
            })
        };
    var z = e => {
        let {
            className: t,
            contentClassName: n,
            tag: r = "section",
            onSubmit: i,
            children: l,
            expanded: u = !1,
            theme: o = g.ThemeTypes.DARK,
            style: c
        } = e;
        return (0, s.jsxs)(r, {
            "data-theme": o,
            onSubmit: i,
            style: c,
            className: a(u ? b.authBoxExpanded : b.authBox, (0, m.getThemeClass)(o), t),
            children: [(0, s.jsx)("div", {
                className: b.discordLogo
            }), (0, s.jsx)("div", {
                className: a(b.centeringWrapper, n),
                children: l
            })]
        })
    }
}