function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return b
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("442837"),
        l = n("692547"),
        u = n("780384"),
        d = n("481060"),
        _ = n("353093"),
        c = n("979264"),
        E = n("284363"),
        I = n("854218"),
        T = n("623624"),
        f = n("210887"),
        S = n("271383"),
        h = n("594174"),
        A = n("267642"),
        m = n("797717"),
        N = n("672752"),
        p = n("665786"),
        O = n("639740"),
        R = n("433564"),
        C = n("697725"),
        g = n("192091"),
        L = n("507957"),
        v = n("981631"),
        D = n("689938"),
        M = n("187885");
    let y = {
        [E.BadgeCategory.STAFF]: {
            IconComponent: g.default,
            foregroundDarkColor: l.default.unsafe_rawColors.WHITE_400.css,
            foregroundLightColor: l.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: l.default.unsafe_rawColors.GREEN_360.css,
            backgroundLightColor: l.default.unsafe_rawColors.GREEN_360.css
        },
        [E.BadgeCategory.VERIFIED_AND_PARTNERED]: {
            IconComponent: L.default,
            foregroundDarkColor: l.default.unsafe_rawColors.WHITE_400.css,
            foregroundLightColor: l.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: l.default.unsafe_rawColors.GREEN_360.css,
            backgroundLightColor: l.default.unsafe_rawColors.GREEN_360.css
        },
        [E.BadgeCategory.VERIFIED]: {
            IconComponent: L.default,
            foregroundDarkColor: l.default.unsafe_rawColors.WHITE_400.css,
            foregroundLightColor: l.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: l.default.unsafe_rawColors.GREEN_360.css,
            backgroundLightColor: l.default.unsafe_rawColors.GREEN_360.css
        },
        [E.BadgeCategory.PARTNERED]: {
            IconComponent: p.default,
            foregroundDarkColor: l.default.unsafe_rawColors.WHITE_400.css,
            foregroundLightColor: l.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: l.default.unsafe_rawColors.BRAND_500.css,
            backgroundLightColor: l.default.unsafe_rawColors.BRAND_500.css
        },
        [E.BadgeCategory.COMMUNITY]: {
            IconComponent: O.default,
            foregroundDarkColor: l.default.unsafe_rawColors.PRIMARY_500.css,
            foregroundLightColor: l.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: l.default.unsafe_rawColors.WHITE_400.css,
            backgroundLightColor: l.default.unsafe_rawColors.PRIMARY_500.css,
            premiumBackgroundColor: N.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
            premiumForegroundColor: l.default.unsafe_rawColors.WHITE_400.css
        },
        [E.BadgeCategory.DISCOVERABLE]: {
            IconComponent: R.default,
            foregroundDarkColor: l.default.unsafe_rawColors.PRIMARY_500.css,
            foregroundLightColor: l.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: l.default.unsafe_rawColors.WHITE_400.css,
            backgroundLightColor: l.default.unsafe_rawColors.PRIMARY_500.css,
            premiumBackgroundColor: N.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
            premiumForegroundColor: l.default.unsafe_rawColors.WHITE_400.css
        },
        [E.BadgeCategory.CLAN]: {},
        [E.BadgeCategory.NONE]: {}
    };

    function P(e) {
        let {
            guildTraits: t
        } = e;
        return (0, i.jsxs)("div", {
            className: M.tooltipPremiumFooterContainer,
            children: [(0, i.jsxs)("div", {
                className: s()(M.tooltipPremiumFooterSegment, M.tooltipPremiumFooterTierSegment),
                children: [(0, i.jsx)(C.default, {
                    width: 18,
                    height: 18,
                    className: M.gemIcon
                }), (0, i.jsx)(d.Text, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: A.getTierName(t.premiumTier)
                })]
            }), (0, i.jsx)("div", {
                className: s()(M.tooltipPremiumFooterSegment),
                children: (0, i.jsx)(d.Text, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: D.default.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
                        count: t.premiumSubscriberCount
                    })
                })
            })]
        })
    }

    function U(e) {
        let {
            badgeType: t,
            guildTraits: n
        } = e, {
            tooltipTitle: r,
            tooltipSubtitle: a,
            tooltipDescription: s
        } = function(e, t) {
            let n = t === I.GuildVisibility.PUBLIC ? D.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : D.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
            switch (e) {
                case E.BadgeCategory.STAFF:
                    return {
                        tooltipTitle: D.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: D.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: D.default.Messages.INTERNAL_EMPLOYEE_ONLY
                    };
                case E.BadgeCategory.VERIFIED:
                    return {
                        tooltipTitle: D.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: D.default.Messages.GUILD_VERIFIED, tooltipDescription: n
                    };
                case E.BadgeCategory.PARTNERED:
                    return {
                        tooltipTitle: D.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: D.default.Messages.GUILD_PARTNERED, tooltipDescription: n
                    };
                case E.BadgeCategory.VERIFIED_AND_PARTNERED:
                    return {
                        tooltipTitle: D.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: D.default.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: n
                    };
                case E.BadgeCategory.COMMUNITY:
                    return {
                        tooltipTitle: D.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: D.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                    };
                case E.BadgeCategory.DISCOVERABLE:
                    return {
                        tooltipTitle: D.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: D.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                    };
                case E.BadgeCategory.CLAN:
                    return {
                        tooltipTitle: D.default.Messages.SERVER_BADGE_TITLE_CLAN, tooltipDescription: D.default.Messages.SERVER_BADGE_DESCRIPTION_APPLICATION_REQUIRED
                    };
                default:
                    return {
                        tooltipTitle: D.default.Messages.SERVER_BADGE_TITLE_UNKNOWN
                    }
            }
        }(t, n.visibility);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: M.tooltipBodyContainer,
                children: [(0, i.jsx)(d.Text, {
                    color: "interactive-active",
                    variant: "text-xs/bold",
                    children: r
                }), null != a ? (0, i.jsx)(d.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: a
                }) : null, null != s ? (0, i.jsx)(d.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: s
                }) : null]
            }), n.premium ? (0, i.jsx)(P, {
                guildTraits: n
            }) : null]
        })
    }

    function b(e) {
        let t, n, {
                guild: a,
                tooltipColor: l = d.Tooltip.Colors.BRAND,
                tooltipPosition: A,
                className: N,
                flowerStarClassName: p,
                iconClassName: O,
                badgeStrokeColor: R,
                badgeColor: C,
                size: g = 16,
                disableBoostClick: L,
                "aria-label": D = !1
            } = e,
            P = (0, o.useStateFromStores)([h.default, S.default], () => {
                let e = h.default.getCurrentUser();
                return S.default.isMember(null == a ? void 0 : a.id, null == e ? void 0 : e.id)
            }),
            b = (0, o.useStateFromStores)([f.default], () => f.default.theme),
            G = (0, I.getGuildTraits)(a),
            w = (0, E.getBadgeCategory)(G),
            B = r.useCallback(e => {
                G.premium && P && !L && (e.stopPropagation(), e.preventDefault(), (0, T.openGuildBoostingMarketingModal)({
                    guildId: a.id,
                    location: {
                        section: v.AnalyticsSections.GUILD_HEADER,
                        object: v.AnalyticsObjects.BOOST_GEM_ICON
                    }
                }))
            }, [G.premium, P, L, a.id]);
        if (w === E.BadgeCategory.NONE) return null;
        if (w === E.BadgeCategory.CLAN) {
            var k;
            let e = (0, _.getClanBadgeUrl)(a.id, null === (k = a.clan) || void 0 === k ? void 0 : k.badge, g);
            return (0, i.jsx)(d.Tooltip, {
                color: l,
                position: A,
                "aria-label": D,
                text: (0, i.jsx)(U, {
                    badgeType: w,
                    guildTraits: G
                }),
                tooltipContentClassName: M.tooltipRemovePadding,
                children: t => (0, i.jsx)(d.Clickable, {
                    ...t,
                    onClick: B,
                    className: s()(M.clanBadgeContainer, N),
                    children: (0, i.jsx)(c.ClanTagBadge, {
                        src: e,
                        size: g
                    })
                })
            })
        }
        let {
            IconComponent: V,
            backgroundDarkColor: x,
            backgroundLightColor: F,
            foregroundDarkColor: H,
            foregroundLightColor: Y,
            premiumBackgroundColor: j,
            premiumForegroundColor: W
        } = y[w];
        if (null == V) return null;
        G.premium && (t = W, n = j);
        let K = (0, u.isThemeDark)(b) ? H : Y,
            z = (0, u.isThemeDark)(b) ? x : F;
        return t = null != t ? t : K, n = null != n ? n : z, (0, i.jsx)(d.Tooltip, {
            color: l,
            position: A,
            "aria-label": D,
            text: (0, i.jsx)(U, {
                badgeType: w,
                guildTraits: G
            }),
            tooltipContentClassName: M.tooltipRemovePadding,
            children: e => (0, i.jsx)(d.Clickable, {
                onClick: B,
                children: (0, i.jsx)(m.default, {
                    ...e,
                    className: N,
                    flowerStarClassName: p,
                    color: null != n ? n : C,
                    stroke: R,
                    size: g,
                    children: (0, i.jsx)(V, {
                        className: O,
                        color: t
                    })
                })
            })
        })
    }
}