function(e, t, n) {
    "use strict";
    n.r(t);
    var l = n("470079"),
        a = n("803997"),
        r = n.n(a),
        i = n("784184"),
        o = n("877468"),
        u = n("534965"),
        c = n("974901"),
        s = n("896299"),
        d = n("53867"),
        m = n("299529"),
        v = n("573525"),
        f = n("143953"),
        E = n("433073"),
        p = n("372844"),
        g = n("941504"),
        N = n("987969");

    function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, l = Array(t); n < t; n++) l[n] = e[n];
        return l
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var I = function(e) {
            var t = e.text,
                n = e.extra;
            return l.createElement(i.FormTitle, {
                className: N.header
            }, t, n)
        },
        b = function(e) {
            var t = e.resolving,
                n = e.children;
            return l.createElement("div", {
                className: N.content
            }, t ? l.createElement("div", {
                className: N.resolvingWrapper
            }, l.createElement("div", {
                className: N.resolving
            }, l.createElement("div", {
                className: N.resolvingBackground
            })), l.createElement("div", {
                className: N.resolvingFakeButton
            }, l.createElement("div", {
                className: N.resolvingBackground
            }))) : n)
        },
        y = function(e) {
            var t, n = e.application,
                a = e.guild,
                c = e.channel,
                s = e.onClick,
                m = e.expired,
                f = e.user,
                g = e.className,
                C = null !== (t = (0, u.default)(c)) && void 0 !== t ? t : "",
                h = d.GifAutoPlay.useSetting();
            if (void 0 !== m && m) return l.createElement("div", {
                className: N.guildIconExpired
            });
            var I = null == a || null != a.icon,
                b = r()((0, v.getClass)(N, "guildIcon", I ? "Image" : "", null != s ? "Joined" : ""), g);
            if (null != n) return l.createElement(E.default, {
                game: n,
                onClick: s,
                size: N.applicationIcon,
                className: b
            });
            if (null != a) return l.createElement(p.default, {
                onClick: s,
                active: !0,
                guild: a,
                className: b,
                animate: h
            });
            if (null != c) return l.createElement(i.Avatar, {
                onClick: s,
                src: (0, o.getChannelIconURL)(c),
                size: i.AvatarSizes.SIZE_56,
                className: b,
                "aria-label": C
            });
            else if (null != f) return l.createElement(i.Avatar, {
                onClick: s,
                src: f.getAvatarURL(null, 56),
                size: i.AvatarSizes.SIZE_56,
                className: b,
                "aria-label": C
            });
            return null
        },
        S = function(e) {
            var t = e.title,
                n = e.onClick,
                a = e.expired,
                r = e.children,
                o = l.createElement(i.Heading, {
                    variant: "heading-md/semibold",
                    className: (0, v.getClass)(N, "inviteDestination", a ? "Expired" : null != n ? "Joined" : "")
                }, t);
            return l.createElement(f.default, {
                className: N.guildInfo,
                direction: f.default.Direction.VERTICAL,
                justify: f.default.Justify.CENTER
            }, null == n ? o : l.createElement(i.Clickable, {
                onClick: n
            }, o), l.createElement(i.Text, {
                tag: "strong",
                className: N.guildDetail,
                variant: "text-sm/normal"
            }, r))
        },
        L = function(e) {
            var t = e.membersOnline,
                n = e.members,
                a = [];
            return null != t && t > 0 && a.push(l.createElement("div", {
                key: "onlineCount",
                className: N.statusWrapper
            }, l.createElement("i", {
                className: N.statusOnline
            }), l.createElement("span", {
                className: N.count
            }, g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                membersOnline: t
            })))), null != n && a.push(l.createElement("div", {
                key: "memberCount",
                className: N.statusWrapper
            }, l.createElement("i", {
                className: N.statusOffline
            }), l.createElement("span", {
                className: N.count
            }, g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                count: n
            })))), l.createElement("div", {
                className: N.statusCounts
            }, a)
        },
        k = function(e) {
            var t = e.channel,
                n = e.guild,
                a = (0, c.getChannelIconComponent)(t, n);
            return null == t || null == a ? null : l.createElement("div", {
                className: N.channel
            }, l.createElement(a, {
                className: N.channelIcon,
                width: 20,
                height: 20
            }), l.createElement("span", {
                className: N.channelName
            }, t.name))
        },
        O = function(e) {
            var t, n, a = e.children,
                o = e.onClick,
                u = e.className,
                c = e.isDisabled,
                s = function(e, t) {
                    if (null == e) return {};
                    var n, l, a = function(e, t) {
                        if (null == e) return {};
                        var n, l, a = {},
                            r = Object.keys(e);
                        for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && (a[n] = e[n]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        for (l = 0; l < r.length; l++) {
                            if (n = r[l], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                        }
                    }
                    return a
                }(e, ["children", "onClick", "className", "isDisabled"]);
            return l.createElement(i.Button, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), l.forEach(function(t) {
                        h(e, t, n[t])
                    })
                }
                return e
            }({}, s), n = (n = {
                disabled: c,
                onClick: o,
                size: N.buttonSize,
                className: r()(N.button, u)
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, l)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t), a)
        };
    O.Colors = i.Button.Colors, O.Looks = i.Button.Looks, O.defaultProps = {
        className: null,
        isDisabled: !1
    };
    var T = function(e) {
            var t = e.children,
                n = e.className,
                a = e.containerRef;
            return l.createElement("div", {
                ref: a,
                className: r()(N.wrapper, n)
            }, t)
        },
        B = function(e) {
            var t, n, a = e.guild;
            var i = (t = l.useState(!1), n = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(t) || function(e, t) {
                    var n, l, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != a) {
                        var r = [],
                            i = !0,
                            o = !1;
                        try {
                            for (a = a.call(e); !(i = (n = a.next()).done) && (r.push(n.value), !t || r.length !== t); i = !0);
                        } catch (e) {
                            o = !0, l = e
                        } finally {
                            try {
                                !i && null != a.return && a.return()
                            } finally {
                                if (o) throw l
                            }
                        }
                        return r
                    }
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return C(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                o = i[0],
                u = i[1],
                c = m.default.getGuildSplashURL({
                    id: a.id,
                    splash: a.splash,
                    size: 400 * (0, s.getDevicePixelRatio)()
                });
            return null == c ? null : l.createElement("div", {
                className: N.inviteSplash
            }, l.createElement("img", {
                src: c,
                alt: "",
                className: r()(N.inviteSplashImage, h({}, N.inviteSplashImageLoaded, o)),
                onLoad: function() {
                    return u(!0)
                }
            }))
        },
        A = function(e) {
            var t = e.guild;
            return l.createElement("div", {
                className: N.guildNameWrapper
            }, l.createElement("span", {
                className: N.guildName
            }, t.name))
        },
        w = function(e) {
            var t = e.guildTemplate;
            return l.createElement("div", {
                className: N.guildNameWrapper
            }, l.createElement("span", {
                className: N.guildName
            }, t.serializedSourceGuild.name))
        };
    T.Header = I, T.Body = b, T.Icon = y, T.Info = S, T.Data = L, T.Channel = k, T.Button = O, T.GuildSplash = B, T.GuildName = A, T.GuildTemplateName = w, I.displayName = "InviteButton.Header", b.displayName = "InviteButton.Body", y.displayName = "InviteButton.Icon", S.displayName = "InviteButton.Info", L.displayName = "InviteButton.Data", k.displayName = "InviteButton.Channel", O.displayName = "InviteButton.Button", B.displayName = "InviteButton.GuildSplash", A.displayName = "InviteButton.GuildName", w.displayName = "InviteButton.GuildTemplateName", t.default = T
}