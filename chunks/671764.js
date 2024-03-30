function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ConnectedApplicationUserRoleAccount: function() {
            return N
        },
        ConnectedUserAccount: function() {
            return b
        },
        ConnectedUserAccounts: function() {
            return R
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("447515"),
        u = n("751848"),
        s = n("784184"),
        l = n("562052"),
        c = n("386823"),
        f = n("140817"),
        d = n("633225"),
        _ = n("965067"),
        E = n("437573"),
        p = n("292076"),
        m = n("428009"),
        y = n("110240"),
        I = n("274171"),
        h = n("254093"),
        O = n("281767"),
        T = n("999325"),
        S = n("941504"),
        v = n("815639");

    function g(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function A(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function b(e) {
        var t, n, o, l, m, b = e.connectedAccount,
            N = e.theme,
            R = e.locale,
            C = e.userId,
            P = e.className,
            D = e.showMetadata,
            L = e.showInvisibleIcon;
        null == D && (D = !0);
        var M = null !== (n = b.metadata) && void 0 !== n ? n : {},
            U = D ? (0, _.getCreatedAtDate)(M[T.MetadataFields.CREATED_AT], R) : null,
            w = (0, s.useToken)(a.default.unsafe_rawColors.TWITTER).hex(),
            k = S.default.Messages.CONNECTION_VERIFIED;
        if (D) switch (b.type) {
            case O.PlatformTypes.REDDIT:
                o = (0, E.generateRedditMetadataItems)(M);
                break;
            case O.PlatformTypes.STEAM:
                o = (0, E.generateSteamMetadataItems)(M);
                break;
            case O.PlatformTypes.TWITTER:
                o = (0, E.generateTwitterMetadataItems)(M), "1" === M[T.MetadataFields.TWITTER_VERIFIED] && (l = w, k = S.default.Messages.CONNECTION_VERIFIED_ON_TWITTER);
                break;
            case O.PlatformTypes.PAYPAL:
                o = (0, E.generatePaypalMetadataItems)(M);
                break;
            case O.PlatformTypes.EBAY:
                o = (0, E.generateEbayMetadataItems)(M);
                break;
            case O.PlatformTypes.TIKTOK:
                o = (0, E.generateTikTokMetadataItems)(M)
        }
        var G = c.default.get((0, d.useLegacyPlatformType)(b.type)),
            B = null == G ? void 0 : null === (t = G.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(G, b);
        null != L && L ? m = r.createElement(I.default, {
            className: i()(v.__invalid_connectedAccountOpenIconContainer, v.connectedAccountHideIcon),
            foregroundColor: "currentColor"
        }) : null != B && (m = r.createElement(s.Anchor, {
            href: B,
            onClick: function(e) {
                var t, n;
                t = b.type, n = C, (0, f.trackWithMetadata)(O.AnalyticEvents.CONNECTED_ACCOUNT_VIEWED, {
                    platform_type: t,
                    other_user_id: n
                }), (0, h.handleClick)({
                    href: B,
                    trusted: (null == G ? void 0 : G.type) !== O.PlatformTypes.DOMAIN
                }, e)
            }
        }, r.createElement(y.default, {
            className: v.connectedAccountOpenIcon,
            direction: y.default.Directions.RIGHT
        })));
        var j = (0, s.useToken)(a.default.colors.INTERACTIVE_MUTED).hex(),
            F = (0, s.useToken)(a.default.colors.INTERACTIVE_ACTIVE).hex(),
            V = b.verified ? r.createElement(p.default, {
                className: v.connectedAccountVerifiedIcon,
                color: null != l ? l : j,
                forcedIconColor: F,
                size: 16,
                tooltipText: k
            }) : null;
        return r.createElement("div", {
            className: i()(v.connectedAccountContainer, null != o && o.length > 0 || null != U ? v.connectedAccountContainerWithMetadata : null, P)
        }, r.createElement("div", {
            className: v.connectedAccount
        }, r.createElement(s.Tooltip, {
            text: null == G ? void 0 : G.name
        }, function(e) {
            return r.createElement("img", A(g({}, e), {
                alt: S.default.Messages.IMG_ALT_LOGO.format({
                    name: null == G ? void 0 : G.name
                }),
                className: v.connectedAccountIcon,
                src: (0, u.isThemeDark)(N) ? null == G ? void 0 : G.icon.darkSVG : null == G ? void 0 : G.icon.lightSVG
            }))
        }), r.createElement("div", {
            className: v.connectedAccountNameContainer
        }, r.createElement("div", {
            className: v.connectedAccountName
        }, r.createElement("div", {
            className: v.connectedAccountNameTextContainer
        }, r.createElement(s.Tooltip, {
            overflowOnly: !0,
            text: b.name
        }, function(e) {
            return r.createElement(s.Text, A(g({}, e), {
                variant: "text-md/semibold",
                color: "interactive-active",
                className: v.connectedAccountNameText
            }), b.name)
        }), V), m), null != U ? r.createElement(s.Text, {
            variant: "text-xs/normal",
            color: "header-secondary"
        }, S.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
            date: U
        })) : null)), null != o && o.length > 0 ? r.createElement("div", {
            className: v.connectedAccountChildren
        }, o) : null)
    }

    function N(e) {
        var t = e.applicationRoleConnection,
            n = e.className,
            o = e.locale,
            a = (0, E.generateRoleConnectionMetadataItems)(t, void 0, o);
        return r.createElement("div", {
            className: i()(v.connectedAccountContainer, null != a && a.length > 0 ? v.connectedAccountContainerWithMetadata : null, n)
        }, r.createElement("div", {
            className: v.connectedAccount
        }, r.createElement("div", {
            className: v.connectedAccountNameContainer
        }, null != t.platform_name ? r.createElement(s.Text, {
            variant: "eyebrow",
            color: "interactive-normal"
        }, t.platform_name) : null, null != t.platform_username ? r.createElement("div", {
            className: v.connectedAccountName
        }, r.createElement("div", {
            className: v.connectedAccountNameTextContainer
        }, r.createElement(s.Text, {
            variant: "text-md/semibold",
            color: "interactive-active",
            className: v.connectedAccountNameText
        }, t.platform_username))) : null)), null != a && a.length > 0 ? r.createElement("div", {
            className: i()(v.connectedAccountChildren, v.connectedAccountChildrenNoIcon)
        }, a) : null, r.createElement("div", null, r.createElement("div", {
            className: v.connectedAccountPoweredBy
        }, r.createElement(s.Text, {
            variant: "text-xs/normal",
            color: "text-muted"
        }, S.default.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
            applicationHook: function() {
                return r.createElement("div", {
                    className: v.connectedAccountPoweredByText
                }, null != t.application.bot ? r.createElement(l.default, {
                    user: new m.default(t.application.bot),
                    size: s.AvatarSizes.SIZE_16
                }) : null, r.createElement(s.Text, {
                    variant: "text-xs/normal",
                    color: "text-normal"
                }, t.application.name))
            }
        })))))
    }
    var R = r.forwardRef(function(e, t) {
        var n = e.connectedAccounts,
            o = e.theme,
            a = e.locale,
            u = e.className,
            s = e.userId;
        if (null == n || 0 === n.length) return null;
        for (var l = n.filter(function(e) {
                return c.default.isSupported(e.type)
            }).map(function(e) {
                return r.createElement(b, {
                    key: "".concat(e.type, ":").concat(e.id),
                    connectedAccount: e,
                    theme: o,
                    locale: a,
                    userId: s
                })
            }), f = [], d = [], _ = 0; _ < l.length; _++) {
            var E = l[_];
            _ % 2 == 0 ? f.push(E) : d.push(E)
        }
        return r.createElement("div", {
            ref: t,
            className: i()(v.connectedAccounts, u)
        }, r.createElement("div", {
            className: v.connectedAccountsColumn
        }, f), r.createElement("div", {
            className: v.connectedAccountsColumn
        }, d))
    })
}