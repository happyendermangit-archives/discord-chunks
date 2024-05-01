function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityCount: function() {
            return P
        },
        AuthSpinner: function() {
            return A
        },
        Avatar: function() {
            return I
        },
        Block: function() {
            return O
        },
        Button: function() {
            return x
        },
        ChannelIcon: function() {
            return R
        },
        GuildIcon: function() {
            return v
        },
        Image: function() {
            return b
        },
        IncompatibleBrowser: function() {
            return D
        },
        Input: function() {
            return S
        },
        JoiningAs: function() {
            return C
        },
        SubText: function() {
            return y
        },
        SubTitle: function() {
            return N
        },
        Title: function() {
            return T
        }
    }), n("536091");
    var r = n("735250");
    n("470079");
    var a = n("120356"),
        s = n.n(a),
        i = n("481060"),
        l = n("43267"),
        o = n("285952"),
        u = n("346656"),
        d = n("153124"),
        c = n("838949"),
        p = n("361207"),
        f = n("63063"),
        m = n("792125"),
        g = n("981631"),
        E = n("689938"),
        _ = n("252512");
    let h = i.Avatar;
    null == h && (h = () => null);
    let T = e => {
            let {
                className: t,
                id: n,
                children: a
            } = e;
            return (0, r.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                color: "header-primary",
                className: s()(_.title, t),
                id: n,
                children: a
            })
        },
        N = e => {
            let {
                className: t,
                children: n
            } = e;
            return (0, r.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: t,
                children: n
            })
        },
        b = e => {
            let {
                className: t,
                src: n
            } = e;
            return (0, r.jsx)("img", {
                alt: "",
                src: n,
                className: s()(_.image, t)
            })
        },
        x = e => {
            let {
                className: t,
                ...n
            } = e, a = n.look === i.Button.Looks.LINK;
            return (0, r.jsx)(i.Button, {
                size: a ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
                fullWidth: !a,
                className: s()(t, {
                    [_.button]: !a,
                    [_.linkButton]: a
                }),
                ...n
            })
        };
    x.Looks = i.Button.Looks, x.Colors = i.Button.Colors, x.Sizes = i.Button.Sizes;
    let I = e => {
            let {
                className: t,
                src: n,
                size: a
            } = e;
            return (0, r.jsx)(h, {
                src: n,
                size: a,
                className: s()(_.inviteLargeIcon, t),
                "aria-hidden": !0
            })
        },
        v = e => {
            let {
                guild: t,
                size: n,
                animate: a = !1,
                className: s
            } = e;
            return (0, r.jsx)(u.default, {
                active: !0,
                guild: t,
                size: n,
                animate: a,
                className: s
            })
        };
    v.Sizes = u.default.Sizes;
    let R = e => {
        let {
            className: t,
            channel: n,
            size: a
        } = e;
        return (0, r.jsx)(h, {
            src: (0, l.getChannelIconURL)(n),
            size: a,
            className: s()(_.inviteIcon, t),
            "aria-hidden": !0
        })
    };
    R.Sizes = i.AvatarSizes;
    let S = e => {
            let {
                label: t,
                error: n,
                placeholder: a,
                value: l,
                className: o,
                inputClassName: u,
                setRef: c,
                type: p = "text",
                onChange: f,
                autoComplete: m,
                autoFocus: g,
                maxLength: E,
                spellCheck: h,
                name: T,
                description: N,
                required: b,
                onFocus: x,
                onBlur: I
            } = e, v = (0, d.useUID)();
            return (0, r.jsxs)(i.FormItem, {
                title: t,
                error: n,
                className: o,
                required: b,
                tag: "label",
                htmlFor: v,
                children: [(0, r.jsx)(i.TextInput, {
                    name: T,
                    type: p,
                    value: l,
                    inputRef: c,
                    placeholder: a,
                    inputClassName: s()(u, {
                        [_.inputError]: null != n
                    }),
                    "aria-label": t,
                    onChange: f,
                    autoComplete: m,
                    autoFocus: g,
                    maxLength: E,
                    spellCheck: h,
                    id: v,
                    onFocus: x,
                    onBlur: I
                }), null != N ? (0, r.jsx)(i.FormText, {
                    type: i.FormText.Types.DESCRIPTION,
                    className: _.description,
                    children: N
                }) : null]
            })
        },
        O = e => {
            let {
                className: t,
                children: n
            } = e;
            return (0, r.jsx)("div", {
                className: s()(_.block, t),
                children: n
            })
        },
        y = e => {
            let {
                className: t,
                children: n,
                isProminent: a
            } = e;
            return (0, r.jsx)(i.Text, {
                variant: a ? "text-sm/normal" : "text-xs/normal",
                className: s()(_.subText, t),
                children: n
            })
        },
        A = e => {
            let {
                className: t
            } = e;
            return (0, r.jsx)(o.default, {
                direction: o.default.Direction.VERTICAL,
                align: o.default.Align.CENTER,
                className: t,
                children: (0, r.jsx)(c.default, {
                    className: _.spinnerVideo
                })
            })
        },
        P = e => {
            let t, {
                online: n,
                total: a,
                className: l,
                flat: u,
                textClassName: d
            } = e;
            return null == a ? null : (null != n && n > 0 && (t = (0, r.jsxs)("div", {
                className: s()(_.pill, _.pillOnline, u && _.pillFlat),
                children: [(0, r.jsx)("i", {
                    className: _.pillIconOnline
                }), (0, r.jsx)(i.Text, {
                    tag: "span",
                    className: s()(_.pillMessage, d),
                    variant: "text-sm/normal",
                    children: E.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                        membersOnline: n
                    })
                })]
            })), (0, r.jsxs)(o.default, {
                justify: o.default.Justify.CENTER,
                className: l,
                children: [t, (0, r.jsxs)("div", {
                    className: s()(_.pill, u && _.pillFlat),
                    children: [(0, r.jsx)("i", {
                        className: _.pillIconTotal
                    }), (0, r.jsx)(i.Text, {
                        tag: "span",
                        className: s()(_.pillMessage, d),
                        variant: "text-sm/normal",
                        children: E.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                            count: a
                        })
                    })]
                })]
            }))
        },
        C = e => {
            let {
                user: t
            } = e;
            return null == t ? null : (0, r.jsxs)("div", {
                className: _.joiningAs,
                children: [(0, r.jsx)(i.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: E.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                }), (0, r.jsx)(I, {
                    className: _.joiningAsAvatar,
                    src: t.getAvatarURL(void 0, 24),
                    size: i.AvatarSizes.SIZE_24,
                    "aria-label": t.username
                }), (0, r.jsx)(i.Text, {
                    className: _.joiningAsUsername,
                    tag: "span",
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: t.username
                })]
            })
        },
        D = e => {
            let {
                className: t
            } = e;
            return (0, r.jsxs)(O, {
                className: t,
                children: [(0, r.jsx)(x, {
                    onClick: () => window.open((0, p.getCurrentPlatformDownloadURL)()),
                    children: E.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                        platform: (0, p.getPlatformReadableName)()
                    })
                }), (0, r.jsx)(y, {
                    className: _.downloadButtonSubtext,
                    children: E.default.Messages.INCOMPATIBLE_BROWSER.format({
                        supportedBrowserURL: f.default.getArticleURL(g.HelpdeskArticles.SUPPORTED_BROWSERS)
                    })
                })]
            })
        };
    t.default = e => {
        let {
            className: t,
            contentClassName: n,
            tag: a = "section",
            onSubmit: i,
            children: l,
            expanded: o = !1,
            theme: u = g.ThemeTypes.DARK,
            style: d
        } = e;
        return (0, r.jsxs)(a, {
            "data-theme": u,
            onSubmit: i,
            style: d,
            className: s()(o ? _.authBoxExpanded : _.authBox, (0, m.getThemeClass)(u), t),
            children: [(0, r.jsx)("div", {
                className: _.discordLogo
            }), (0, r.jsx)("div", {
                className: s()(_.centeringWrapper, n),
                children: l
            })]
        })
    }
}