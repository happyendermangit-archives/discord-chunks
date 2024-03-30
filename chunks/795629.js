function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    });
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("898511"),
        s = n("447515"),
        l = n("751848"),
        c = n("784184"),
        f = n("650457"),
        d = n("376033"),
        _ = n("322421"),
        E = n("798206"),
        p = n("957808"),
        m = n("208454"),
        y = n("665199"),
        I = n("516617"),
        h = n("283248"),
        O = n("421986"),
        T = n("607633"),
        S = n("457618"),
        v = n("484478"),
        g = n("282544"),
        A = n("728664"),
        b = n("281767"),
        N = n("941504"),
        R = n("509252");

    function C(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var P = (C(r = {}, f.BadgeCategory.STAFF, {
        IconComponent: g.default,
        foregroundDarkColor: s.default.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: s.default.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: s.default.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: s.default.unsafe_rawColors.GREEN_360.css
    }), C(r, f.BadgeCategory.VERIFIED_AND_PARTNERED, {
        IconComponent: A.default,
        foregroundDarkColor: s.default.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: s.default.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: s.default.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: s.default.unsafe_rawColors.GREEN_360.css
    }), C(r, f.BadgeCategory.VERIFIED, {
        IconComponent: A.default,
        foregroundDarkColor: s.default.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: s.default.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: s.default.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: s.default.unsafe_rawColors.GREEN_360.css
    }), C(r, f.BadgeCategory.PARTNERED, {
        IconComponent: O.default,
        foregroundDarkColor: s.default.unsafe_rawColors.WHITE_400.css,
        foregroundLightColor: s.default.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: s.default.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: s.default.unsafe_rawColors.BRAND_500.css
    }), C(r, f.BadgeCategory.COMMUNITY, {
        IconComponent: T.default,
        foregroundDarkColor: s.default.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: s.default.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: s.default.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: s.default.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: h.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: s.default.unsafe_rawColors.WHITE_400.css
    }), C(r, f.BadgeCategory.DISCOVERABLE, {
        IconComponent: S.default,
        foregroundDarkColor: s.default.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: s.default.unsafe_rawColors.WHITE_400.css,
        backgroundDarkColor: s.default.unsafe_rawColors.WHITE_400.css,
        backgroundLightColor: s.default.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: h.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: s.default.unsafe_rawColors.WHITE_400.css
    }), C(r, f.BadgeCategory.NONE, {}), r);

    function D(e) {
        var t = e.guildTraits;
        return o.createElement("div", {
            className: R.tooltipPremiumFooterContainer
        }, o.createElement("div", {
            className: a()(R.tooltipPremiumFooterSegment, R.tooltipPremiumFooterTierSegment)
        }, o.createElement(v.default, {
            width: 18,
            height: 18,
            className: R.gemIcon
        }), o.createElement(c.Text, {
            variant: "text-xs/semibold",
            color: "always-white"
        }, y.getTierName(t.premiumTier))), o.createElement("div", {
            className: a()(R.tooltipPremiumFooterSegment)
        }, o.createElement(c.Text, {
            variant: "text-xs/semibold",
            color: "always-white"
        }, N.default.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
            count: t.premiumSubscriberCount
        }))))
    }

    function L(e) {
        var t = e.badgeType,
            n = e.guildTraits,
            r = function(e, t) {
                var n = t === d.GuildVisibility.PUBLIC ? N.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : N.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
                switch (e) {
                    case f.BadgeCategory.STAFF:
                        return {
                            tooltipTitle: N.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: N.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: N.default.Messages.INTERNAL_EMPLOYEE_ONLY
                        };
                    case f.BadgeCategory.VERIFIED:
                        return {
                            tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: N.default.Messages.GUILD_VERIFIED, tooltipDescription: n
                        };
                    case f.BadgeCategory.PARTNERED:
                        return {
                            tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: N.default.Messages.GUILD_PARTNERED, tooltipDescription: n
                        };
                    case f.BadgeCategory.VERIFIED_AND_PARTNERED:
                        return {
                            tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: N.default.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: n
                        };
                    case f.BadgeCategory.COMMUNITY:
                        return {
                            tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: N.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                        };
                    case f.BadgeCategory.DISCOVERABLE:
                        return {
                            tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: N.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                        };
                    default:
                        return {
                            tooltipTitle: N.default.Messages.SERVER_BADGE_TITLE_UNKNOWN
                        }
                }
            }(t, n.visibility),
            i = r.tooltipTitle,
            a = r.tooltipSubtitle,
            u = r.tooltipDescription;
        return o.createElement(o.Fragment, null, o.createElement("div", {
            className: R.tooltipBodyContainer
        }, o.createElement(c.Text, {
            color: "interactive-active",
            variant: "text-xs/bold"
        }, i), null != a ? o.createElement(c.Text, {
            color: "text-muted",
            variant: "text-xs/medium"
        }, a) : null, null != u ? o.createElement(c.Text, {
            color: "text-muted",
            variant: "text-xs/medium"
        }, u) : null), n.premium ? o.createElement(D, {
            guildTraits: n
        }) : null)
    }

    function M(e) {
        var t, n, r = e.guild,
            i = e.tooltipColor,
            a = void 0 === i ? c.Tooltip.Colors.BRAND : i,
            s = e.tooltipPosition,
            y = e.className,
            h = e.flowerStarClassName,
            O = e.iconClassName,
            T = e.badgeStrokeColor,
            S = e.badgeColor,
            v = e.size,
            g = void 0 === v ? 16 : v,
            A = e.disableBoostClick,
            N = e["aria-label"],
            D = (0, u.useStateFromStores)([m.default, p.default], function() {
                var e = m.default.getCurrentUser();
                return p.default.isMember(null == r ? void 0 : r.id, null == e ? void 0 : e.id)
            }),
            M = (0, u.useStateFromStores)([E.default], function() {
                return E.default.theme
            }),
            U = (0, d.getGuildTraits)(r),
            w = (0, f.getBadgeCategory)(U);
        if (w === f.BadgeCategory.NONE) return null;
        var k = P[w],
            G = k.IconComponent,
            B = k.backgroundDarkColor,
            j = k.backgroundLightColor,
            F = k.foregroundDarkColor,
            V = k.foregroundLightColor,
            H = k.premiumBackgroundColor,
            x = k.premiumForegroundColor;
        if (null == G) return null;
        U.premium && (t = x, n = H);
        var Y = (0, l.isThemeDark)(M) ? F : V,
            W = (0, l.isThemeDark)(M) ? B : j;
        t = null != t ? t : Y, n = null != n ? n : W;
        var K = function(e) {
            U.premium && D && !A && (e.stopPropagation(), e.preventDefault(), (0, _.openGuildBoostingMarketingModal)({
                guildId: r.id,
                location: {
                    section: b.AnalyticsSections.GUILD_HEADER,
                    object: b.AnalyticsObjects.BOOST_GEM_ICON
                }
            }))
        };
        return o.createElement(c.Tooltip, {
            color: a,
            position: s,
            "aria-label": void 0 !== N && N,
            text: o.createElement(L, {
                badgeType: w,
                guildTraits: U
            }),
            tooltipContentClassName: R.tooltipRemovePadding
        }, function(e) {
            var r, i;
            return o.createElement(c.Clickable, {
                onClick: K
            }, o.createElement(I.default, (r = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        C(e, t, n[t])
                    })
                }
                return e
            }({}, e), i = (i = {
                className: y,
                flowerStarClassName: h,
                color: null != n ? n : S,
                stroke: T,
                size: g
            }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(i)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
            }), r), o.createElement(G, {
                className: O,
                color: t
            })))
        })
    }
}