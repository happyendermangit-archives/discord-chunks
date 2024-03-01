function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return w
        }
    });
    var r = s("37983");
    s("884691");
    var o = s("414456"),
        l = s.n(o),
        a = s("446674"),
        n = s("669491"),
        i = s("819855"),
        u = s("77078"),
        d = s("614858"),
        c = s("883474"),
        f = s("95039"),
        _ = s("161778"),
        E = s("26989"),
        I = s("697218"),
        C = s("427459"),
        R = s("931138"),
        M = s("791106"),
        g = s("888978"),
        L = s("419441"),
        h = s("583698"),
        p = s("992639"),
        P = s("390864"),
        U = s("486952"),
        T = s("49111"),
        N = s("782340"),
        v = s("327152");
    let D = {
        [d.BadgeCategory.STAFF]: {
            IconComponent: P.default,
            foregroundDarkColor: n.default.unsafe_rawColors.WHITE_400.css,
            foregroundLightColor: n.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: n.default.unsafe_rawColors.GREEN_360.css,
            backgroundLightColor: n.default.unsafe_rawColors.GREEN_360.css
        },
        [d.BadgeCategory.VERIFIED_AND_PARTNERED]: {
            IconComponent: U.default,
            foregroundDarkColor: n.default.unsafe_rawColors.WHITE_400.css,
            foregroundLightColor: n.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: n.default.unsafe_rawColors.GREEN_360.css,
            backgroundLightColor: n.default.unsafe_rawColors.GREEN_360.css
        },
        [d.BadgeCategory.VERIFIED]: {
            IconComponent: U.default,
            foregroundDarkColor: n.default.unsafe_rawColors.WHITE_400.css,
            foregroundLightColor: n.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: n.default.unsafe_rawColors.GREEN_360.css,
            backgroundLightColor: n.default.unsafe_rawColors.GREEN_360.css
        },
        [d.BadgeCategory.PARTNERED]: {
            IconComponent: g.default,
            foregroundDarkColor: n.default.unsafe_rawColors.WHITE_400.css,
            foregroundLightColor: n.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: n.default.unsafe_rawColors.BRAND_500.css,
            backgroundLightColor: n.default.unsafe_rawColors.BRAND_500.css
        },
        [d.BadgeCategory.COMMUNITY]: {
            IconComponent: L.default,
            foregroundDarkColor: n.default.unsafe_rawColors.PRIMARY_500.css,
            foregroundLightColor: n.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: n.default.unsafe_rawColors.WHITE_400.css,
            backgroundLightColor: n.default.unsafe_rawColors.PRIMARY_500.css,
            premiumBackgroundColor: M.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
            premiumForegroundColor: n.default.unsafe_rawColors.WHITE_400.css
        },
        [d.BadgeCategory.DISCOVERABLE]: {
            IconComponent: h.default,
            foregroundDarkColor: n.default.unsafe_rawColors.PRIMARY_500.css,
            foregroundLightColor: n.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: n.default.unsafe_rawColors.WHITE_400.css,
            backgroundLightColor: n.default.unsafe_rawColors.PRIMARY_500.css,
            premiumBackgroundColor: M.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
            premiumForegroundColor: n.default.unsafe_rawColors.WHITE_400.css
        },
        [d.BadgeCategory.NONE]: {}
    };

    function x(e) {
        let {
            guildTraits: t
        } = e;
        return (0, r.jsxs)("div", {
            className: v.tooltipPremiumFooterContainer,
            children: [(0, r.jsxs)("div", {
                className: l(v.tooltipPremiumFooterSegment, v.tooltipPremiumFooterTierSegment),
                children: [(0, r.jsx)(p.default, {
                    width: 18,
                    height: 18,
                    className: v.gemIcon
                }), (0, r.jsx)(u.Text, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: C.getTierName(t.premiumTier)
                })]
            }), (0, r.jsx)("div", {
                className: l(v.tooltipPremiumFooterSegment),
                children: (0, r.jsx)(u.Text, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: N.default.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
                        count: t.premiumSubscriberCount
                    })
                })
            })]
        })
    }

    function m(e) {
        let {
            badgeType: t,
            guildTraits: s
        } = e, {
            tooltipTitle: o,
            tooltipSubtitle: l,
            tooltipDescription: a
        } = function(e, t) {
            let s = t === c.GuildVisibility.PUBLIC ? N.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : N.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
            switch (e) {
                case d.BadgeCategory.STAFF:
                    return {
                        tooltipTitle: N.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: N.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: N.default.Messages.INTERNAL_EMPLOYEE_ONLY
                    };
                case d.BadgeCategory.VERIFIED:
                    return {
                        tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: N.default.Messages.GUILD_VERIFIED, tooltipDescription: s
                    };
                case d.BadgeCategory.PARTNERED:
                    return {
                        tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: N.default.Messages.GUILD_PARTNERED, tooltipDescription: s
                    };
                case d.BadgeCategory.VERIFIED_AND_PARTNERED:
                    return {
                        tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: N.default.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: s
                    };
                case d.BadgeCategory.COMMUNITY:
                    return {
                        tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: N.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                    };
                case d.BadgeCategory.DISCOVERABLE:
                    return {
                        tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: N.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                    };
                default:
                    return {
                        tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_UNKNOWN
                    }
            }
        }(t, s.visibility);
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
                className: v.tooltipBodyContainer,
                children: [(0, r.jsx)(u.Text, {
                    color: "interactive-active",
                    variant: "text-xs/bold",
                    children: o
                }), null != l ? (0, r.jsx)(u.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: l
                }) : null, null != a ? (0, r.jsx)(u.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: a
                }) : null]
            }), s.premium ? (0, r.jsx)(x, {
                guildTraits: s
            }) : null]
        })
    }

    function w(e) {
        let t, s, {
                guild: o,
                tooltipColor: l = u.Tooltip.Colors.BRAND,
                tooltipPosition: n,
                className: C,
                flowerStarClassName: M,
                iconClassName: g,
                badgeStrokeColor: L,
                badgeColor: h,
                size: p = 16,
                disableBoostClick: P,
                "aria-label": U = !1
            } = e,
            N = (0, a.useStateFromStores)([I.default, E.default], () => {
                let e = I.default.getCurrentUser();
                return E.default.isMember(null == o ? void 0 : o.id, null == e ? void 0 : e.id)
            }),
            x = (0, a.useStateFromStores)([_.default], () => _.default.theme),
            w = (0, c.getGuildTraits)(o),
            S = (0, d.getBadgeCategory)(w);
        if (S === d.BadgeCategory.NONE) return null;
        let B = D[S],
            {
                IconComponent: O,
                backgroundDarkColor: G,
                backgroundLightColor: A,
                foregroundDarkColor: j,
                foregroundLightColor: V,
                premiumBackgroundColor: y,
                premiumForegroundColor: H
            } = B;
        if (null == O) return null;
        w.premium && (t = H, s = y);
        let k = (0, i.isThemeDark)(x) ? j : V,
            F = (0, i.isThemeDark)(x) ? G : A;
        t = null != t ? t : k, s = null != s ? s : F;
        let b = e => {
            w.premium && N && !P && (e.stopPropagation(), e.preventDefault(), (0, f.openGuildBoostingMarketingModal)({
                guildId: o.id,
                location: {
                    section: T.AnalyticsSections.GUILD_HEADER,
                    object: T.AnalyticsObjects.BOOST_GEM_ICON
                }
            }))
        };
        return (0, r.jsx)(u.Tooltip, {
            color: l,
            position: n,
            "aria-label": U,
            text: (0, r.jsx)(m, {
                badgeType: S,
                guildTraits: w
            }),
            tooltipContentClassName: v.tooltipRemovePadding,
            children: e => (0, r.jsx)(u.Clickable, {
                onClick: b,
                children: (0, r.jsx)(R.default, {
                    ...e,
                    className: C,
                    flowerStarClassName: M,
                    color: null != s ? s : h,
                    stroke: L,
                    size: p,
                    children: (0, r.jsx)(O, {
                        className: g,
                        color: t
                    })
                })
            })
        })
    }
}