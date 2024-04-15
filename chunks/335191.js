function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ConnectedApplicationUserRoleAccount: function() {
            return g
        },
        ConnectedUserAccount: function() {
            return C
        },
        ConnectedUserAccounts: function() {
            return L
        }
    }), n("653041");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("692547"),
        l = n("780384"),
        u = n("481060"),
        d = n("99690"),
        _ = n("726542"),
        c = n("367907"),
        E = n("122021"),
        I = n("275759"),
        T = n("323588"),
        f = n("753194"),
        S = n("598077"),
        A = n("671533"),
        h = n("880008"),
        m = n("49012"),
        N = n("981631"),
        O = n("856651"),
        p = n("689938"),
        R = n("815639");

    function C(e) {
        var t, n;
        let r, s, d, {
            connectedAccount: S,
            theme: C,
            locale: g,
            userId: L,
            className: D,
            showMetadata: v,
            showInvisibleIcon: M
        } = e;
        null == v && (v = !0);
        let y = null !== (n = S.metadata) && void 0 !== n ? n : {},
            P = v ? (0, I.getCreatedAtDate)(y[O.MetadataFields.CREATED_AT], g) : null,
            U = (0, u.useToken)(o.default.unsafe_rawColors.TWITTER).hex(),
            b = p.default.Messages.CONNECTION_VERIFIED;
        if (v) switch (S.type) {
            case N.PlatformTypes.REDDIT:
                r = (0, T.generateRedditMetadataItems)(y);
                break;
            case N.PlatformTypes.STEAM:
                r = (0, T.generateSteamMetadataItems)(y);
                break;
            case N.PlatformTypes.TWITTER:
                r = (0, T.generateTwitterMetadataItems)(y), "1" === y[O.MetadataFields.TWITTER_VERIFIED] && (s = U, b = p.default.Messages.CONNECTION_VERIFIED_ON_TWITTER);
                break;
            case N.PlatformTypes.PAYPAL:
                r = (0, T.generatePaypalMetadataItems)(y);
                break;
            case N.PlatformTypes.EBAY:
                r = (0, T.generateEbayMetadataItems)(y);
                break;
            case N.PlatformTypes.TIKTOK:
                r = (0, T.generateTikTokMetadataItems)(y)
        }
        let G = _.default.get((0, E.useLegacyPlatformType)(S.type)),
            w = null == G ? void 0 : null === (t = G.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(G, S);
        null != M && M ? d = (0, i.jsx)(h.default, {
            className: a()(R.__invalid_connectedAccountOpenIconContainer, R.connectedAccountHideIcon),
            foregroundColor: "currentColor"
        }) : null != w && (d = (0, i.jsx)(u.Anchor, {
            href: w,
            onClick: e => {
                var t, n;
                t = S.type, n = L, (0, c.trackWithMetadata)(N.AnalyticEvents.CONNECTED_ACCOUNT_VIEWED, {
                    platform_type: t,
                    other_user_id: n
                }), (0, m.handleClick)({
                    href: w,
                    trusted: (null == G ? void 0 : G.type) !== N.PlatformTypes.DOMAIN
                }, e)
            },
            children: (0, i.jsx)(A.default, {
                className: R.connectedAccountOpenIcon,
                direction: A.default.Directions.RIGHT
            })
        }));
        let B = (0, u.useToken)(o.default.colors.INTERACTIVE_MUTED).hex(),
            k = (0, u.useToken)(o.default.colors.INTERACTIVE_ACTIVE).hex(),
            F = S.verified ? (0, i.jsx)(f.default, {
                className: R.connectedAccountVerifiedIcon,
                color: null != s ? s : B,
                forcedIconColor: k,
                size: 16,
                tooltipText: b
            }) : null;
        return (0, i.jsxs)("div", {
            className: a()(R.connectedAccountContainer, null != r && r.length > 0 || null != P ? R.connectedAccountContainerWithMetadata : null, D),
            children: [(0, i.jsxs)("div", {
                className: R.connectedAccount,
                children: [(0, i.jsx)(u.Tooltip, {
                    text: null == G ? void 0 : G.name,
                    children: e => (0, i.jsx)("img", {
                        ...e,
                        alt: p.default.Messages.IMG_ALT_LOGO.format({
                            name: null == G ? void 0 : G.name
                        }),
                        className: R.connectedAccountIcon,
                        src: (0, l.isThemeDark)(C) ? null == G ? void 0 : G.icon.darkSVG : null == G ? void 0 : G.icon.lightSVG
                    })
                }), (0, i.jsxs)("div", {
                    className: R.connectedAccountNameContainer,
                    children: [(0, i.jsxs)("div", {
                        className: R.connectedAccountName,
                        children: [(0, i.jsxs)("div", {
                            className: R.connectedAccountNameTextContainer,
                            children: [(0, i.jsx)(u.Tooltip, {
                                overflowOnly: !0,
                                text: S.name,
                                children: e => (0, i.jsx)(u.Text, {
                                    ...e,
                                    variant: "text-md/semibold",
                                    color: "interactive-active",
                                    className: R.connectedAccountNameText,
                                    children: S.name
                                })
                            }), F]
                        }), d]
                    }), null != P ? (0, i.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: p.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
                            date: P
                        })
                    }) : null]
                })]
            }), null != r && r.length > 0 ? (0, i.jsx)("div", {
                className: R.connectedAccountChildren,
                children: r
            }) : null]
        })
    }

    function g(e) {
        let {
            applicationRoleConnection: t,
            className: n,
            locale: r
        } = e, s = (0, T.generateRoleConnectionMetadataItems)(t, void 0, r);
        return (0, i.jsxs)("div", {
            className: a()(R.connectedAccountContainer, null != s && s.length > 0 ? R.connectedAccountContainerWithMetadata : null, n),
            children: [(0, i.jsx)("div", {
                className: R.connectedAccount,
                children: (0, i.jsxs)("div", {
                    className: R.connectedAccountNameContainer,
                    children: [null != t.platform_name ? (0, i.jsx)(u.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        children: t.platform_name
                    }) : null, null != t.platform_username ? (0, i.jsx)("div", {
                        className: R.connectedAccountName,
                        children: (0, i.jsx)("div", {
                            className: R.connectedAccountNameTextContainer,
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                color: "interactive-active",
                                className: R.connectedAccountNameText,
                                children: t.platform_username
                            })
                        })
                    }) : null]
                })
            }), null != s && s.length > 0 ? (0, i.jsx)("div", {
                className: a()(R.connectedAccountChildren, R.connectedAccountChildrenNoIcon),
                children: s
            }) : null, (0, i.jsx)("div", {
                children: (0, i.jsx)("div", {
                    className: R.connectedAccountPoweredBy,
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: p.default.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
                            applicationHook: () => (0, i.jsxs)("div", {
                                className: R.connectedAccountPoweredByText,
                                children: [null != t.application.bot ? (0, i.jsx)(d.default, {
                                    user: new S.default(t.application.bot),
                                    size: u.AvatarSizes.SIZE_16
                                }) : null, (0, i.jsx)(u.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: t.application.name
                                })]
                            })
                        })
                    })
                })
            })]
        })
    }
    let L = r.forwardRef(function(e, t) {
        let {
            connectedAccounts: n,
            theme: r,
            locale: s,
            className: o,
            userId: l
        } = e;
        if (null == n || 0 === n.length) return null;
        let u = n.filter(e => _.default.isSupported(e.type)).map(e => (0, i.jsx)(C, {
                connectedAccount: e,
                theme: r,
                locale: s,
                userId: l
            }, "".concat(e.type, ":").concat(e.id))),
            d = [],
            c = [];
        for (let e = 0; e < u.length; e++) {
            let t = u[e];
            e % 2 == 0 ? d.push(t) : c.push(t)
        }
        return (0, i.jsxs)("div", {
            ref: t,
            className: a()(R.connectedAccounts, o),
            children: [(0, i.jsx)("div", {
                className: R.connectedAccountsColumn,
                children: d
            }), (0, i.jsx)("div", {
                className: R.connectedAccountsColumn,
                children: c
            })]
        })
    })
}