function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityCount: function() {
            return A
        },
        AuthSpinner: function() {
            return k
        },
        Avatar: function() {
            return x
        },
        Block: function() {
            return R
        },
        Button: function() {
            return S
        },
        ChannelIcon: function() {
            return _
        },
        GuildIcon: function() {
            return I
        },
        Image: function() {
            return y
        },
        IncompatibleBrowser: function() {
            return D
        },
        Input: function() {
            return O
        },
        JoiningAs: function() {
            return C
        },
        SubText: function() {
            return L
        },
        SubTitle: function() {
            return T
        },
        Title: function() {
            return h
        }
    });
    var a = n("470079"),
        r = n("803997"),
        i = n.n(r),
        l = n("784184"),
        s = n("877468"),
        o = n("143953"),
        u = n("372844"),
        c = n("719328"),
        m = n("328507"),
        d = n("73892"),
        f = n("481971"),
        p = n("153732"),
        g = n("281767"),
        v = n("941504"),
        b = n("885399");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var N = l.Avatar;
    null == N && (N = function() {
        return null
    });
    var h = function(e) {
            var t = e.className,
                n = e.id,
                r = e.children;
            return a.createElement(l.Heading, {
                variant: "heading-xl/semibold",
                color: "header-primary",
                className: i()(b.title, t),
                id: n
            }, r)
        },
        T = function(e) {
            var t = e.className,
                n = e.children;
            return a.createElement(l.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                className: t
            }, n)
        },
        y = function(e) {
            var t = e.className,
                n = e.src;
            return a.createElement("img", {
                alt: "",
                src: n,
                className: i()(b.image, t)
            })
        },
        S = function(e) {
            var t, n = e.className,
                r = function(e, t) {
                    if (null == e) return {};
                    var n, a, r = function(e, t) {
                        if (null == e) return {};
                        var n, a, r = {},
                            i = Object.keys(e);
                        for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
                        return r
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (a = 0; a < i.length; a++) {
                            if (n = i[a], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                        }
                    }
                    return r
                }(e, ["className"]),
                s = r.look === l.Button.Looks.LINK;
            return a.createElement(l.Button, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), a.forEach(function(t) {
                        E(e, t, n[t])
                    })
                }
                return e
            }({
                size: s ? l.Button.Sizes.MIN : l.Button.Sizes.LARGE,
                fullWidth: !s,
                className: i()(n, (E(t = {}, b.button, !s), E(t, b.linkButton, s), t))
            }, r))
        };
    S.Looks = l.Button.Looks, S.Colors = l.Button.Colors, S.Sizes = l.Button.Sizes;
    var x = function(e) {
            var t = e.className,
                n = e.src,
                r = e.size;
            return a.createElement(N, {
                src: n,
                size: r,
                className: i()(b.inviteLargeIcon, t),
                "aria-hidden": !0
            })
        },
        I = function(e) {
            var t = e.guild,
                n = e.size,
                r = e.animate,
                i = e.className;
            return a.createElement(u.default, {
                active: !0,
                guild: t,
                size: n,
                animate: void 0 !== r && r,
                className: i
            })
        };
    I.Sizes = u.default.Sizes;
    var _ = function(e) {
        var t = e.className,
            n = e.channel,
            r = e.size;
        return a.createElement(N, {
            src: (0, s.getChannelIconURL)(n),
            size: r,
            className: i()(b.inviteIcon, t),
            "aria-hidden": !0
        })
    };
    _.Sizes = l.AvatarSizes;
    var O = function(e) {
            var t = e.label,
                n = e.error,
                r = e.placeholder,
                s = e.value,
                o = e.className,
                u = e.inputClassName,
                m = e.setRef,
                d = e.type,
                f = e.onChange,
                p = e.autoComplete,
                g = e.autoFocus,
                v = e.maxLength,
                N = e.spellCheck,
                h = e.name,
                T = e.description,
                y = e.required,
                S = e.onFocus,
                x = e.onBlur,
                I = (0, c.useUID)();
            return a.createElement(l.FormItem, {
                title: t,
                error: n,
                className: o,
                required: y,
                tag: "label",
                htmlFor: I
            }, a.createElement(l.TextInput, {
                name: h,
                type: void 0 === d ? "text" : d,
                value: s,
                inputRef: m,
                placeholder: r,
                inputClassName: i()(u, E({}, b.inputError, null != n)),
                "aria-label": t,
                onChange: f,
                autoComplete: p,
                autoFocus: g,
                maxLength: v,
                spellCheck: N,
                id: I,
                onFocus: S,
                onBlur: x
            }), null != T ? a.createElement(l.FormText, {
                type: l.FormText.Types.DESCRIPTION,
                className: b.description
            }, T) : null)
        },
        R = function(e) {
            var t = e.className,
                n = e.children;
            return a.createElement("div", {
                className: i()(b.block, t)
            }, n)
        },
        L = function(e) {
            var t = e.className,
                n = e.children,
                r = e.isProminent;
            return a.createElement(l.Text, {
                variant: r ? "text-sm/normal" : "text-xs/normal",
                className: i()(b.subText, t)
            }, n)
        },
        k = function(e) {
            var t = e.className;
            return a.createElement(o.default, {
                direction: o.default.Direction.VERTICAL,
                align: o.default.Align.CENTER,
                className: t
            }, a.createElement(m.default, {
                className: b.spinnerVideo
            }))
        },
        A = function(e) {
            var t, n = e.online,
                r = e.total,
                s = e.className,
                u = e.flat,
                c = e.textClassName;
            return null == r ? null : (null != n && n > 0 && (t = a.createElement("div", {
                className: i()(b.pill, b.pillOnline, u && b.pillFlat)
            }, a.createElement("i", {
                className: b.pillIconOnline
            }), a.createElement(l.Text, {
                tag: "span",
                className: i()(b.pillMessage, c),
                variant: "text-sm/normal"
            }, v.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                membersOnline: n
            })))), a.createElement(o.default, {
                justify: o.default.Justify.CENTER,
                className: s
            }, t, a.createElement("div", {
                className: i()(b.pill, u && b.pillFlat)
            }, a.createElement("i", {
                className: b.pillIconTotal
            }), a.createElement(l.Text, {
                tag: "span",
                className: i()(b.pillMessage, c),
                variant: "text-sm/normal"
            }, v.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                count: r
            })))))
        },
        C = function(e) {
            var t = e.user;
            return null == t ? null : a.createElement("div", {
                className: b.joiningAs
            }, a.createElement(l.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "header-secondary"
            }, v.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS), a.createElement(x, {
                className: b.joiningAsAvatar,
                src: t.getAvatarURL(void 0, 24),
                size: l.AvatarSizes.SIZE_24,
                "aria-label": t.username
            }), a.createElement(l.Text, {
                className: b.joiningAsUsername,
                tag: "span",
                variant: "text-md/semibold",
                color: "header-primary"
            }, t.username))
        },
        D = function(e) {
            var t = e.className;
            return a.createElement(R, {
                className: t
            }, a.createElement(S, {
                onClick: function() {
                    return window.open((0, d.getCurrentPlatformDownloadURL)())
                }
            }, v.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
                platform: (0, d.getPlatformReadableName)()
            })), a.createElement(L, {
                className: b.downloadButtonSubtext
            }, v.default.Messages.INCOMPATIBLE_BROWSER.format({
                supportedBrowserURL: f.default.getArticleURL(g.HelpdeskArticles.SUPPORTED_BROWSERS)
            })))
        };
    t.default = function(e) {
        var t = e.className,
            n = e.contentClassName,
            r = e.tag,
            l = e.onSubmit,
            s = e.children,
            o = e.expanded,
            u = e.theme,
            c = void 0 === u ? g.ThemeTypes.DARK : u,
            m = e.style;
        return a.createElement(void 0 === r ? "section" : r, {
            "data-theme": c,
            onSubmit: l,
            style: m,
            className: i()(void 0 !== o && o ? b.authBoxExpanded : b.authBox, (0, p.getThemeClass)(c), t)
        }, a.createElement("div", {
            className: b.discordLogo
        }), a.createElement("div", {
            className: i()(b.centeringWrapper, n)
        }, s))
    }
}