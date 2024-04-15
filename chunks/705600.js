function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("442837"),
        o = n("692547"),
        l = n("780384"),
        u = n("481060"),
        d = n("284363"),
        _ = n("854218"),
        c = n("623624"),
        E = n("210887"),
        I = n("271383"),
        T = n("594174"),
        f = n("267642"),
        S = n("797717"),
        h = n("672752"),
        A = n("665786"),
        m = n("639740"),
        N = n("433564"),
        p = n("697725"),
        O = n("192091"),
        R = n("507957"),
        C = n("981631"),
        g = n("689938"),
        L = n("509252");
    let D = {
        [d.BadgeCategory.STAFF]: {
            IconComponent: O.default,
            foregroundDarkColor: o.default.unsafe_rawColors.WHITE_400.css,
            foregroundLightColor: o.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: o.default.unsafe_rawColors.GREEN_360.css,
            backgroundLightColor: o.default.unsafe_rawColors.GREEN_360.css
        },
        [d.BadgeCategory.VERIFIED_AND_PARTNERED]: {
            IconComponent: R.default,
            foregroundDarkColor: o.default.unsafe_rawColors.WHITE_400.css,
            foregroundLightColor: o.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: o.default.unsafe_rawColors.GREEN_360.css,
            backgroundLightColor: o.default.unsafe_rawColors.GREEN_360.css
        },
        [d.BadgeCategory.VERIFIED]: {
            IconComponent: R.default,
            foregroundDarkColor: o.default.unsafe_rawColors.WHITE_400.css,
            foregroundLightColor: o.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: o.default.unsafe_rawColors.GREEN_360.css,
            backgroundLightColor: o.default.unsafe_rawColors.GREEN_360.css
        },
        [d.BadgeCategory.PARTNERED]: {
            IconComponent: A.default,
            foregroundDarkColor: o.default.unsafe_rawColors.WHITE_400.css,
            foregroundLightColor: o.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: o.default.unsafe_rawColors.BRAND_500.css,
            backgroundLightColor: o.default.unsafe_rawColors.BRAND_500.css
        },
        [d.BadgeCategory.COMMUNITY]: {
            IconComponent: m.default,
            foregroundDarkColor: o.default.unsafe_rawColors.PRIMARY_500.css,
            foregroundLightColor: o.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: o.default.unsafe_rawColors.WHITE_400.css,
            backgroundLightColor: o.default.unsafe_rawColors.PRIMARY_500.css,
            premiumBackgroundColor: h.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
            premiumForegroundColor: o.default.unsafe_rawColors.WHITE_400.css
        },
        [d.BadgeCategory.DISCOVERABLE]: {
            IconComponent: N.default,
            foregroundDarkColor: o.default.unsafe_rawColors.PRIMARY_500.css,
            foregroundLightColor: o.default.unsafe_rawColors.WHITE_400.css,
            backgroundDarkColor: o.default.unsafe_rawColors.WHITE_400.css,
            backgroundLightColor: o.default.unsafe_rawColors.PRIMARY_500.css,
            premiumBackgroundColor: h.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
            premiumForegroundColor: o.default.unsafe_rawColors.WHITE_400.css
        },
        [d.BadgeCategory.NONE]: {}
    };

    function v(e) {
        let {
            guildTraits: t
        } = e;
        return (0, i.jsxs)("div", {
            className: L.tooltipPremiumFooterContainer,
            children: [(0, i.jsxs)("div", {
                className: s()(L.tooltipPremiumFooterSegment, L.tooltipPremiumFooterTierSegment),
                children: [(0, i.jsx)(p.default, {
                    width: 18,
                    height: 18,
                    className: L.gemIcon
                }), (0, i.jsx)(u.Text, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: f.getTierName(t.premiumTier)
                })]
            }), (0, i.jsx)("div", {
                className: s()(L.tooltipPremiumFooterSegment),
                children: (0, i.jsx)(u.Text, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: g.default.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
                        count: t.premiumSubscriberCount
                    })
                })
            })]
        })
    }

    function M(e) {
        let {
            badgeType: t,
            guildTraits: n
        } = e, {
            tooltipTitle: r,
            tooltipSubtitle: s,
            tooltipDescription: a
        } = function(e, t) {
            let n = t === _.GuildVisibility.PUBLIC ? g.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : g.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
            switch (e) {
                case d.BadgeCategory.STAFF:
                    return {
                        tooltipTitle: g.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: g.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: g.default.Messages.INTERNAL_EMPLOYEE_ONLY
                    };
                case d.BadgeCategory.VERIFIED:
                    return {
                        tooltipTitle: g.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: g.default.Messages.GUILD_VERIFIED, tooltipDescription: n
                    };
                case d.BadgeCategory.PARTNERED:
                    return {
                        tooltipTitle: g.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: g.default.Messages.GUILD_PARTNERED, tooltipDescription: n
                    };
                case d.BadgeCategory.VERIFIED_AND_PARTNERED:
                    return {
                        tooltipTitle: g.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: g.default.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: n
                    };
                case d.BadgeCategory.COMMUNITY:
                    return {
                        tooltipTitle: g.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: g.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                    };
                case d.BadgeCategory.DISCOVERABLE:
                    return {
                        tooltipTitle: g.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: g.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                    };
                default:
                    return {
                        tooltipTitle: g.default.Messages.SERVER_BADGE_TITLE_UNKNOWN
                    }
            }
        }(t, n.visibility);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: L.tooltipBodyContainer,
                children: [(0, i.jsx)(u.Text, {
                    color: "interactive-active",
                    variant: "text-xs/bold",
                    children: r
                }), null != s ? (0, i.jsx)(u.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: s
                }) : null, null != a ? (0, i.jsx)(u.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: a
                }) : null]
            }), n.premium ? (0, i.jsx)(v, {
                guildTraits: n
            }) : null]
        })
    }

    function y(e) {
        let t, n, {
                guild: r,
                tooltipColor: s = u.Tooltip.Colors.BRAND,
                tooltipPosition: o,
                className: f,
                flowerStarClassName: h,
                iconClassName: A,
                badgeStrokeColor: m,
                badgeColor: N,
                size: p = 16,
                disableBoostClick: O,
                "aria-label": R = !1
            } = e,
            g = (0, a.useStateFromStores)([T.default, I.default], () => {
                let e = T.default.getCurrentUser();
                return I.default.isMember(null == r ? void 0 : r.id, null == e ? void 0 : e.id)
            }),
            v = (0, a.useStateFromStores)([E.default], () => E.default.theme),
            y = (0, _.getGuildTraits)(r),
            P = (0, d.getBadgeCategory)(y);
        if (P === d.BadgeCategory.NONE) return null;
        let {
            IconComponent: U,
            backgroundDarkColor: b,
            backgroundLightColor: G,
            foregroundDarkColor: w,
            foregroundLightColor: B,
            premiumBackgroundColor: k,
            premiumForegroundColor: V
        } = D[P];
        if (null == U) return null;
        y.premium && (t = V, n = k);
        let F = (0, l.isThemeDark)(v) ? w : B,
            x = (0, l.isThemeDark)(v) ? b : G;
        t = null != t ? t : F, n = null != n ? n : x;
        let H = e => {
            y.premium && g && !O && (e.stopPropagation(), e.preventDefault(), (0, c.openGuildBoostingMarketingModal)({
                guildId: r.id,
                location: {
                    section: C.AnalyticsSections.GUILD_HEADER,
                    object: C.AnalyticsObjects.BOOST_GEM_ICON
                }
            }))
        };
        return (0, i.jsx)(u.Tooltip, {
            color: s,
            position: o,
            "aria-label": R,
            text: (0, i.jsx)(M, {
                badgeType: P,
                guildTraits: y
            }),
            tooltipContentClassName: L.tooltipRemovePadding,
            children: e => (0, i.jsx)(u.Clickable, {
                onClick: H,
                children: (0, i.jsx)(S.default, {
                    ...e,
                    className: f,
                    flowerStarClassName: h,
                    color: null != n ? n : N,
                    stroke: m,
                    size: p,
                    children: (0, i.jsx)(U, {
                        className: A,
                        color: t
                    })
                })
            })
        })
    }
}