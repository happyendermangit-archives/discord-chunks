function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityCount: function() {
            return O
        },
        AuthSpinner: function() {
            return P
        },
        Avatar: function() {
            return y
        },
        Block: function() {
            return R
        },
        Button: function() {
            return I
        },
        ChannelIcon: function() {
            return x
        },
        GuildIcon: function() {
            return v
        },
        Image: function() {
            return N
        },
        IncompatibleBrowser: function() {
            return D
        },
        Input: function() {
            return S
        },
        JoiningAs: function() {
            return j
        },
        SubText: function() {
            return A
        },
        SubTitle: function() {
            return T
        },
        Title: function() {
            return b
        }
    }), n("536091");
    var r = n("735250");
    n("470079");
    var s = n("803997"),
        i = n.n(s),
        a = n("481060"),
        l = n("43267"),
        o = n("285952"),
        u = n("346656"),
        d = n("153124"),
        c = n("838949"),
        p = n("361207"),
        f = n("63063"),
        _ = n("792125"),
        m = n("981631"),
        g = n("689938"),
        E = n("885399");
    let h = a.Avatar;
    null == h && (h = () => null);
    let b = e => {
            let {
                className: t,
                id: n,
                children: s
            } = e;
            return (0, r.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                color: "header-primary",
                className: i()(E.title, t),
                id: n,
                children: s
            })
        },
        T = e => {
            let {
                className: t,
                children: n
            } = e;
            return (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: t,
                children: n
            })
        },
        N = e => {
            let {
                className: t,
                src: n
            } = e;
            return (0, r.jsx)("img", {
                alt: "",
                src: n,
                className: i()(E.image, t)
            })
        },
        I = e => {
            let {
                className: t,
                ...n
            } = e, s = n.look === a.Button.Looks.LINK;
            return (0, r.jsx)(a.Button, {
                size: s ? a.Button.Sizes.MIN : a.Button.Sizes.LARGE,
                fullWidth: !s,
                className: i()(t, {
                    [E.button]: !s,
                    [E.linkButton]: s
                }),
                ...n
            })
        };
    I.Looks = a.Button.Looks, I.Colors = a.Button.Colors, I.Sizes = a.Button.Sizes;
    let y = e => {
            let {
                className: t,
                src: n,
                size: s
            } = e;
            return (0, r.jsx)(h, {
                src: n,
                size: s,
                className: i()(E.inviteLargeIcon, t),
                "aria-hidden": !0
            })
        },
        v = e => {
            let {
                guild: t,
                size: n,
                animate: s = !1,
                className: i
            } = e;
            return (0, r.jsx)(u.default, {
                active: !0,
                guild: t,
                size: n,
                animate: s,
                className: i
            })
        };
    v.Sizes = u.default.Sizes;
    let x = e => {
        let {
            className: t,
            channel: n,
            size: s
        } = e;
        return (0, r.jsx)(h, {
            src: (0, l.getChannelIconURL)(n),
            size: s,
            className: i()(E.inviteIcon, t),
            "aria-hidden": !0
        })
    };
    x.Sizes = a.AvatarSizes;
    let S = e => {
            let {
                label: t,
                error: n,
                placeholder: s,
                value: l,
                className: o,
                inputClassName: u,
                setRef: c,
                type: p = "text",
                onChange: f,
                autoComplete: _,
                autoFocus: m,
                maxLength: g,
                spellCheck: h,
                name: b,
                description: T,
                required: N,
                onFocus: I,
                onBlur: y
            } = e, v = (0, d.useUID)();
            return (0, r.jsxs)(a.FormItem, {
                title: t,
                error: n,
                className: o,
                required: N,
                tag: "label",
                htmlFor: v,
                children: [(0, r.jsx)(a.TextInput, {
                    name: b,
                    type: p,
                    value: l,
                    inputRef: c,
                    placeholder: s,
                    inputClassName: i()(u, {
                        [E.inputError]: null != n
                    }),
                    "aria-label": t,
                    onChange: f,
                    autoComplete: _,
                    autoFocus: m,
                    maxLength: g,
                    spellCheck: h,
                    id: v,
                    onFocus: I,
                    onBlur: y
                }), null != T ? (0, r.jsx)(a.FormText, {
                    type: a.FormText.Types.DESCRIPTION,
                    className: E.description,
                    children: T
                }) : null]
            })
        },
        R = e => {
            let {
                className: t,
                children: n
            } = e;
            return (0, r.jsx)("div", {
                className: i()(E.block, t),
                children: n
            })
        },
        A = e => {
            let {
                className: t,
                children: n,
                isProminent: s
            } = e;
            return (0, r.jsx)(a.Text, {
                variant: s ? "text-sm/normal" : "text-xs/normal",
                className: i()(E.subText, t),
                children: n
            })
        },
        P = e => {
            let {
                className: t
            } = e;
            return (0, r.jsx)(o.default, {
                direction: o.default.Direction.VERTICAL,
                align: o.default.Align.CENTER,
                className: t,
                children: (0, r.jsx)(c.default, {
                    className: E.spinnerVideo
                })
            })
        },
        O = e => {
            let t, {
                online: n,
                total: s,
                className: l,
                flat: u,
                textClassName: d
            } = e;
            return null == s ? null : (null != n && n > 0 && (t = (0, r.jsxs)("div", {
                className: i()(E.pill, E.pillOnline, u && E.pillFlat),
                children: [(0, r.jsx)("i", {
                    className: E.pillIconOnline
                }), (0, r.jsx)(a.Text, {
                    tag: "span",
                    className: i()(E.pillMessage, d),
                    variant: "text-sm/normal",
                    children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                        membersOnline: n
                    })
                })]
            })), (0, r.jsxs)(o.default, {
                justify: o.default.Justify.CENTER,
                className: l,
                children: [t, (0, r.jsxs)("div", {
                    className: i()(E.pill, u && E.pillFlat),
                    children: [(0, r.jsx)("i", {
                        className: E.pillIconTotal
                    }), (0, r.jsx)(a.Text, {
                        tag: "span",
                        className: i()(E.pillMessage, d),
                        variant: "text-sm/normal",
                        children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                            count: s
                        })
                    })]
                })]
            }))
        },
        j = e => {
            let {
                user: t
            } = e;
            return null == t ? null : (0, r.jsxs)("div", {
                className: E.joiningAs,
                children: [(0, r.jsx)(a.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "header-secondary",
                    children: g.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                }), (0, r.jsx)(y, {
                    className: E.joiningAsAvatar,
                    src: t.getAvatarURL(void 0, 24),
                    size: a.AvatarSizes.SIZE_24,
                    "aria-label": t.username
                }), (0, r.jsx)(a.Text, {
                    className: E.joiningAsUsername,
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
            return (0, r.jsxs)(R, {
                className: t,
                children: [(0, r.jsx)(I, {
                    onClick: () => window.open((0, p.getCurrentPlatformDownloadURL)()),
                    children: g.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                        platform: (0, p.getPlatformReadableName)()
                    })
                }), (0, r.jsx)(A, {
                    className: E.downloadButtonSubtext,
                    children: g.default.Messages.INCOMPATIBLE_BROWSER.format({
                        supportedBrowserURL: f.default.getArticleURL(m.HelpdeskArticles.SUPPORTED_BROWSERS)
                    })
                })]
            })
        };
    t.default = e => {
        let {
            className: t,
            contentClassName: n,
            tag: s = "section",
            onSubmit: a,
            children: l,
            expanded: o = !1,
            theme: u = m.ThemeTypes.DARK,
            style: d
        } = e;
        return (0, r.jsxs)(s, {
            "data-theme": u,
            onSubmit: a,
            style: d,
            className: i()(o ? E.authBoxExpanded : E.authBox, (0, _.getThemeClass)(u), t),
            children: [(0, r.jsx)("div", {
                className: E.discordLogo
            }), (0, r.jsx)("div", {
                className: i()(E.centeringWrapper, n),
                children: l
            })]
        })
    }
}