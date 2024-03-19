function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ConnectedUserAccount: function() {
            return v
        },
        ConnectedApplicationUserRoleAccount: function() {
            return N
        },
        ConnectedUserAccounts: function() {
            return A
        }
    }), n("424973");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("669491"),
        o = n("819855"),
        u = n("77078"),
        d = n("308289"),
        c = n("376556"),
        f = n("716241"),
        p = n("572943"),
        m = n("535013"),
        h = n("816499"),
        x = n("526190"),
        E = n("766274"),
        y = n("246053"),
        g = n("867544"),
        S = n("128259"),
        C = n("49111"),
        _ = n("214509"),
        I = n("782340"),
        T = n("561372");

    function v(e) {
        var t, n;
        let l, a, d, {
            connectedAccount: E,
            theme: v,
            locale: N,
            userId: A,
            className: O,
            showMetadata: R,
            showInvisibleIcon: M
        } = e;
        null == R && (R = !0);
        let k = null !== (n = E.metadata) && void 0 !== n ? n : {},
            L = R ? (0, m.getCreatedAtDate)(k[_.MetadataFields.CREATED_AT], N) : null,
            P = (0, u.useToken)(r.default.unsafe_rawColors.TWITTER).hex(),
            b = I.default.Messages.CONNECTION_VERIFIED;
        if (R) switch (E.type) {
            case C.PlatformTypes.REDDIT:
                l = (0, h.generateRedditMetadataItems)(k);
                break;
            case C.PlatformTypes.STEAM:
                l = (0, h.generateSteamMetadataItems)(k);
                break;
            case C.PlatformTypes.TWITTER: {
                l = (0, h.generateTwitterMetadataItems)(k);
                let e = "1" === k[_.MetadataFields.TWITTER_VERIFIED];
                e && (a = P, b = I.default.Messages.CONNECTION_VERIFIED_ON_TWITTER);
                break
            }
            case C.PlatformTypes.PAYPAL:
                l = (0, h.generatePaypalMetadataItems)(k);
                break;
            case C.PlatformTypes.EBAY:
                l = (0, h.generateEbayMetadataItems)(k);
                break;
            case C.PlatformTypes.TIKTOK:
                l = (0, h.generateTikTokMetadataItems)(k)
        }
        let j = c.default.get((0, p.useLegacyPlatformType)(E.type)),
            U = null == j ? void 0 : null === (t = j.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(j, E);
        null != M && M ? d = (0, i.jsx)(g.default, {
            className: s(T.connectedAccountOpenIconContainer, T.connectedAccountHideIcon),
            foregroundColor: "currentColor"
        }) : null != U && (d = (0, i.jsx)(u.Anchor, {
            href: U,
            onClick: e => {
                var t, n;
                t = E.type, n = A, (0, f.trackWithMetadata)(C.AnalyticEvents.CONNECTED_ACCOUNT_VIEWED, {
                    platform_type: t,
                    other_user_id: n
                }), (0, S.handleClick)({
                    href: U,
                    trusted: (null == j ? void 0 : j.type) !== C.PlatformTypes.DOMAIN
                }, e)
            },
            children: (0, i.jsx)(y.default, {
                className: T.connectedAccountOpenIcon,
                direction: y.default.Directions.RIGHT
            })
        }));
        let D = (0, u.useToken)(r.default.colors.INTERACTIVE_MUTED).hex(),
            w = (0, u.useToken)(r.default.colors.INTERACTIVE_ACTIVE).hex(),
            F = E.verified ? (0, i.jsx)(x.default, {
                className: T.connectedAccountVerifiedIcon,
                color: null != a ? a : D,
                forcedIconColor: w,
                size: 16,
                tooltipText: b
            }) : null;
        return (0, i.jsxs)("div", {
            className: s(T.connectedAccountContainer, null != l && l.length > 0 || null != L ? T.connectedAccountContainerWithMetadata : null, O),
            children: [(0, i.jsxs)("div", {
                className: T.connectedAccount,
                children: [(0, i.jsx)(u.Tooltip, {
                    text: null == j ? void 0 : j.name,
                    children: e => (0, i.jsx)("img", {
                        ...e,
                        alt: I.default.Messages.IMG_ALT_LOGO.format({
                            name: null == j ? void 0 : j.name
                        }),
                        className: T.connectedAccountIcon,
                        src: (0, o.isThemeDark)(v) ? null == j ? void 0 : j.icon.darkSVG : null == j ? void 0 : j.icon.lightSVG
                    })
                }), (0, i.jsxs)("div", {
                    className: T.connectedAccountNameContainer,
                    children: [(0, i.jsxs)("div", {
                        className: T.connectedAccountName,
                        children: [(0, i.jsxs)("div", {
                            className: T.connectedAccountNameTextContainer,
                            children: [(0, i.jsx)(u.Tooltip, {
                                overflowOnly: !0,
                                text: E.name,
                                children: e => (0, i.jsx)(u.Text, {
                                    ...e,
                                    variant: "text-md/semibold",
                                    color: "interactive-active",
                                    className: T.connectedAccountNameText,
                                    children: E.name
                                })
                            }), F]
                        }), d]
                    }), null != L ? (0, i.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: I.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
                            date: L
                        })
                    }) : null]
                })]
            }), null != l && l.length > 0 ? (0, i.jsx)("div", {
                className: T.connectedAccountChildren,
                children: l
            }) : null]
        })
    }

    function N(e) {
        let {
            applicationRoleConnection: t,
            className: n,
            locale: l
        } = e, a = (0, h.generateRoleConnectionMetadataItems)(t, void 0, l);
        return (0, i.jsxs)("div", {
            className: s(T.connectedAccountContainer, null != a && a.length > 0 ? T.connectedAccountContainerWithMetadata : null, n),
            children: [(0, i.jsx)("div", {
                className: T.connectedAccount,
                children: (0, i.jsxs)("div", {
                    className: T.connectedAccountNameContainer,
                    children: [null != t.platform_name ? (0, i.jsx)(u.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        children: t.platform_name
                    }) : null, null != t.platform_username ? (0, i.jsx)("div", {
                        className: T.connectedAccountName,
                        children: (0, i.jsx)("div", {
                            className: T.connectedAccountNameTextContainer,
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                color: "interactive-active",
                                className: T.connectedAccountNameText,
                                children: t.platform_username
                            })
                        })
                    }) : null]
                })
            }), null != a && a.length > 0 ? (0, i.jsx)("div", {
                className: s(T.connectedAccountChildren, T.connectedAccountChildrenNoIcon),
                children: a
            }) : null, (0, i.jsx)("div", {
                children: (0, i.jsx)("div", {
                    className: T.connectedAccountPoweredBy,
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: I.default.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
                            applicationHook: () => (0, i.jsxs)("div", {
                                className: T.connectedAccountPoweredByText,
                                children: [null != t.application.bot ? (0, i.jsx)(d.default, {
                                    user: new E.default(t.application.bot),
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
    let A = l.forwardRef(function(e, t) {
        let {
            connectedAccounts: n,
            theme: l,
            locale: a,
            className: r,
            userId: o
        } = e;
        if (null == n || 0 === n.length) return null;
        let u = n.filter(e => c.default.isSupported(e.type)).map(e => (0, i.jsx)(v, {
                connectedAccount: e,
                theme: l,
                locale: a,
                userId: o
            }, "".concat(e.type, ":").concat(e.id))),
            d = [],
            f = [];
        for (let e = 0; e < u.length; e++) {
            let t = u[e];
            e % 2 == 0 ? d.push(t) : f.push(t)
        }
        return (0, i.jsxs)("div", {
            ref: t,
            className: s(T.connectedAccounts, r),
            children: [(0, i.jsx)("div", {
                className: T.connectedAccountsColumn,
                children: d
            }), (0, i.jsx)("div", {
                className: T.connectedAccountsColumn,
                children: f
            })]
        })
    })
}