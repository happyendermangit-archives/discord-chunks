function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("442837"),
        l = n("622535"),
        u = n("481060"),
        d = n("906732"),
        _ = n("963249"),
        c = n("594174"),
        E = n("314884"),
        I = n("346656"),
        T = n("559629"),
        f = n("709586"),
        S = n("74538"),
        h = n("678558"),
        A = n("981631"),
        m = n("474936"),
        N = n("689938"),
        p = n("44769");
    t.default = function(e) {
        let {
            closeLayer: t,
            guild: n,
            onCtaVisibilityChange: a
        } = e, O = (0, o.useStateFromStores)([c.default], () => c.default.getCurrentUser()), R = (0, o.useStateFromStores)([E.default], () => E.default.boostSlots), {
            analyticsLocations: C
        } = (0, d.default)(), g = r.useMemo(() => Object.keys(R).filter(e => {
            let t = R[e];
            return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id
        }), [R, n.id]);
        return (0, i.jsxs)("div", {
            className: p.guildStatus,
            children: [(0, i.jsx)(I.default, {
                className: p.guildIcon,
                guild: n,
                size: I.default.Sizes.LARGER
            }), (0, i.jsx)(u.Heading, {
                className: p.guildName,
                color: "always-white",
                variant: "text-lg/bold",
                children: n.name
            }), (0, i.jsxs)("div", {
                className: p.guildBoostCountWrapper,
                children: [(0, i.jsxs)("div", {
                    className: p.guildBoostCount,
                    children: [(0, i.jsx)(f.default, {
                        className: s()(p.guildBoostBadge, {
                            [p.guildBoostBadgeWithBoosts]: n.premiumSubscriberCount > 0
                        })
                    }), (0, i.jsx)(u.Text, {
                        className: p.guildStatusCopy,
                        variant: "text-md/bold",
                        children: N.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
                            subscriptions: n.premiumSubscriberCount
                        })
                    })]
                }), g.length > 0 ? (0, i.jsx)(u.Text, {
                    className: p.guildBoostCountCurrentUser,
                    variant: "text-sm/normal",
                    children: N.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_USER_SUBSCRIPTION_COUNT.format({
                        numSubscriptions: g.length
                    })
                }) : null]
            }), (0, i.jsxs)("div", {
                className: p.guildBoostCtas,
                children: [(0, i.jsx)(l.VisibilitySensor, {
                    onChange: a,
                    threshold: .9,
                    children: (0, i.jsx)("div", {
                        className: s()(p.guildBoostCta, p.guildBoostCtaBoostWrapper),
                        children: (0, i.jsx)(h.default, {
                            className: p.guildBoostCtaBoost,
                            innerClassName: s()(p.__invalid_guildBoostCtaContent, p.guildBoostCtaBoostContent),
                            buttonShineClassName: p.guildBoostCtaBoostShine,
                            guild: n,
                            analyticsLocation: {
                                page: A.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                section: A.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                object: A.AnalyticsObjects.BUTTON_CTA,
                                objectType: A.AnalyticsObjectTypes.BUY
                            },
                            closeLayer: t,
                            color: u.Button.Colors.WHITE,
                            size: u.Button.Sizes.LARGE,
                            fullWidth: !0
                        })
                    })
                }), S.default.hasFreeBoosts(O) || S.default.isPremium(O, m.PremiumTypes.TIER_2) ? (0, i.jsxs)(u.Button, {
                    className: s()(p.guildBoostCta, p.guildBoostCtaSecondary),
                    innerClassName: s()(p.__invalid_guildBoostCtaContent, p.guildBoostCtaGiftContent),
                    look: u.Button.Looks.OUTLINED,
                    color: u.Button.Colors.WHITE,
                    onClick: function() {
                        (0, _.default)({
                            initialPlanId: null,
                            subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
                            isGift: !0,
                            analyticsLocations: C,
                            analyticsObject: {
                                page: A.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                section: A.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                object: A.AnalyticsObjects.BUTTON_ICON,
                                objectType: A.AnalyticsObjectTypes.GIFT
                            },
                            onClose: e => e && t()
                        })
                    },
                    size: u.Button.Sizes.LARGE,
                    children: [(0, i.jsx)(T.default, {
                        className: p.guildBoostCtaGiftIcon
                    }), N.default.Messages.PREMIUM_GUILD_PERKS_MODAL_GIFT_NITRO]
                }) : (0, i.jsx)(u.Button, {
                    className: s()(p.guildBoostCta, p.guildBoostCtaSecondary),
                    innerClassName: s()(p.__invalid_guildBoostCtaContent, p.__invalid_guildBoostCtaSubscribeContent),
                    look: u.Button.Looks.OUTLINED,
                    color: u.Button.Colors.WHITE,
                    onClick: function() {
                        (0, _.default)({
                            initialPlanId: null,
                            subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
                            analyticsLocations: C,
                            analyticsObject: {
                                page: A.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                                section: A.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                object: A.AnalyticsObjects.BUTTON_ICON,
                                objectType: A.AnalyticsObjectTypes.BUY
                            },
                            onClose: e => e && t()
                        })
                    },
                    size: u.Button.Sizes.LARGE,
                    children: N.default.Messages.PREMIUM_GUILD_PERKS_MODAL_SUBSCRIBE_WITH_FREE_BOOSTS
                })]
            })]
        })
    }
}