function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ConnectedUserAccount: function() {
            return A
        },
        ConnectedApplicationUserRoleAccount: function() {
            return x
        },
        ConnectedUserAccounts: function() {
            return y
        }
    }), n("424973");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("669491"),
        o = n("819855"),
        u = n("77078"),
        d = n("308289"),
        c = n("376556"),
        f = n("716241"),
        m = n("572943"),
        p = n("535013"),
        h = n("816499"),
        E = n("526190"),
        g = n("766274"),
        C = n("246053"),
        S = n("867544"),
        T = n("128259"),
        v = n("49111"),
        I = n("214509"),
        _ = n("782340"),
        N = n("561372");

    function A(e) {
        var t, n;
        let i, a, d, {
            connectedAccount: g,
            theme: A,
            locale: x,
            userId: y,
            className: O,
            showMetadata: R,
            showInvisibleIcon: M
        } = e;
        null == R && (R = !0);
        let L = null !== (n = g.metadata) && void 0 !== n ? n : {},
            P = R ? (0, p.getCreatedAtDate)(L[I.MetadataFields.CREATED_AT], x) : null,
            b = (0, u.useToken)(r.default.unsafe_rawColors.TWITTER).hex(),
            j = _.default.Messages.CONNECTION_VERIFIED;
        if (R) switch (g.type) {
            case v.PlatformTypes.REDDIT:
                i = (0, h.generateRedditMetadataItems)(L);
                break;
            case v.PlatformTypes.STEAM:
                i = (0, h.generateSteamMetadataItems)(L);
                break;
            case v.PlatformTypes.TWITTER: {
                i = (0, h.generateTwitterMetadataItems)(L);
                let e = "1" === L[I.MetadataFields.TWITTER_VERIFIED];
                e && (a = b, j = _.default.Messages.CONNECTION_VERIFIED_ON_TWITTER);
                break
            }
            case v.PlatformTypes.PAYPAL:
                i = (0, h.generatePaypalMetadataItems)(L);
                break;
            case v.PlatformTypes.EBAY:
                i = (0, h.generateEbayMetadataItems)(L);
                break;
            case v.PlatformTypes.TIKTOK:
                i = (0, h.generateTikTokMetadataItems)(L)
        }
        let U = c.default.get((0, m.useLegacyPlatformType)(g.type)),
            D = null == U ? void 0 : null === (t = U.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(U, g);
        null != M && M ? d = (0, l.jsx)(S.default, {
            className: s(N.connectedAccountOpenIconContainer, N.connectedAccountHideIcon),
            foregroundColor: "currentColor"
        }) : null != D && (d = (0, l.jsx)(u.Anchor, {
            href: D,
            onClick: e => {
                var t, n;
                t = g.type, n = y, (0, f.trackWithMetadata)(v.AnalyticEvents.CONNECTED_ACCOUNT_VIEWED, {
                    platform_type: t,
                    other_user_id: n
                }), (0, T.handleClick)({
                    href: D,
                    trusted: (null == U ? void 0 : U.type) !== v.PlatformTypes.DOMAIN
                }, e)
            },
            children: (0, l.jsx)(C.default, {
                className: N.connectedAccountOpenIcon,
                direction: C.default.Directions.RIGHT
            })
        }));
        let k = (0, u.useToken)(r.default.colors.INTERACTIVE_MUTED).hex(),
            w = (0, u.useToken)(r.default.colors.INTERACTIVE_ACTIVE).hex(),
            F = g.verified ? (0, l.jsx)(E.default, {
                className: N.connectedAccountVerifiedIcon,
                color: null != a ? a : k,
                forcedIconColor: w,
                size: 16,
                tooltipText: j
            }) : null;
        return (0, l.jsxs)("div", {
            className: s(N.connectedAccountContainer, null != i && i.length > 0 || null != P ? N.connectedAccountContainerWithMetadata : null, O),
            children: [(0, l.jsxs)("div", {
                className: N.connectedAccount,
                children: [(0, l.jsx)(u.Tooltip, {
                    text: null == U ? void 0 : U.name,
                    children: e => (0, l.jsx)("img", {
                        ...e,
                        alt: _.default.Messages.IMG_ALT_LOGO.format({
                            name: null == U ? void 0 : U.name
                        }),
                        className: N.connectedAccountIcon,
                        src: (0, o.isThemeDark)(A) ? null == U ? void 0 : U.icon.darkSVG : null == U ? void 0 : U.icon.lightSVG
                    })
                }), (0, l.jsxs)("div", {
                    className: N.connectedAccountNameContainer,
                    children: [(0, l.jsxs)("div", {
                        className: N.connectedAccountName,
                        children: [(0, l.jsxs)("div", {
                            className: N.connectedAccountNameTextContainer,
                            children: [(0, l.jsx)(u.Tooltip, {
                                overflowOnly: !0,
                                text: g.name,
                                children: e => (0, l.jsx)(u.Text, {
                                    ...e,
                                    variant: "text-md/semibold",
                                    color: "interactive-active",
                                    className: N.connectedAccountNameText,
                                    children: g.name
                                })
                            }), F]
                        }), d]
                    }), null != P ? (0, l.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: _.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
                            date: P
                        })
                    }) : null]
                })]
            }), null != i && i.length > 0 ? (0, l.jsx)("div", {
                className: N.connectedAccountChildren,
                children: i
            }) : null]
        })
    }

    function x(e) {
        let {
            applicationRoleConnection: t,
            className: n,
            locale: i
        } = e, a = (0, h.generateRoleConnectionMetadataItems)(t, void 0, i);
        return (0, l.jsxs)("div", {
            className: s(N.connectedAccountContainer, null != a && a.length > 0 ? N.connectedAccountContainerWithMetadata : null, n),
            children: [(0, l.jsx)("div", {
                className: N.connectedAccount,
                children: (0, l.jsxs)("div", {
                    className: N.connectedAccountNameContainer,
                    children: [null != t.platform_name ? (0, l.jsx)(u.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        children: t.platform_name
                    }) : null, null != t.platform_username ? (0, l.jsx)("div", {
                        className: N.connectedAccountName,
                        children: (0, l.jsx)("div", {
                            className: N.connectedAccountNameTextContainer,
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                color: "interactive-active",
                                className: N.connectedAccountNameText,
                                children: t.platform_username
                            })
                        })
                    }) : null]
                })
            }), null != a && a.length > 0 ? (0, l.jsx)("div", {
                className: s(N.connectedAccountChildren, N.connectedAccountChildrenNoIcon),
                children: a
            }) : null, (0, l.jsx)("div", {
                children: (0, l.jsx)("div", {
                    className: N.connectedAccountPoweredBy,
                    children: (0, l.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: _.default.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
                            applicationHook: () => (0, l.jsxs)("div", {
                                className: N.connectedAccountPoweredByText,
                                children: [null != t.application.bot ? (0, l.jsx)(d.default, {
                                    user: new g.default(t.application.bot),
                                    size: u.AvatarSizes.SIZE_16
                                }) : null, (0, l.jsx)(u.Text, {
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
    let y = i.forwardRef(function(e, t) {
        let {
            connectedAccounts: n,
            theme: i,
            locale: a,
            className: r,
            userId: o
        } = e;
        if (null == n || 0 === n.length) return null;
        let u = n.filter(e => c.default.isSupported(e.type)).map(e => (0, l.jsx)(A, {
                connectedAccount: e,
                theme: i,
                locale: a,
                userId: o
            }, "".concat(e.type, ":").concat(e.id))),
            d = [],
            f = [];
        for (let e = 0; e < u.length; e++) {
            let t = u[e];
            e % 2 == 0 ? d.push(t) : f.push(t)
        }
        return (0, l.jsxs)("div", {
            ref: t,
            className: s(N.connectedAccounts, r),
            children: [(0, l.jsx)("div", {
                className: N.connectedAccountsColumn,
                children: d
            }), (0, l.jsx)("div", {
                className: N.connectedAccountsColumn,
                children: f
            })]
        })
    })
}