function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("513967"),
        s = n("784184"),
        l = n("396586"),
        c = n("78074"),
        f = n("208454"),
        d = n("762497"),
        _ = n("372844"),
        E = n("588954"),
        p = n("134466"),
        m = n("830721"),
        y = n("535457"),
        I = n("281767"),
        h = n("868615"),
        O = n("941504"),
        T = n("999150");
    t.default = function(e) {
        var t, n, o, S = e.closeLayer,
            v = e.guild,
            g = e.onCtaVisibilityChange,
            A = (0, a.useStateFromStores)([f.default], function() {
                return f.default.getCurrentUser()
            }),
            b = (0, a.useStateFromStores)([d.default], function() {
                return d.default.boostSlots
            }),
            N = (0, l.default)().analyticsLocations,
            R = r.useMemo(function() {
                return Object.keys(b).filter(function(e) {
                    var t = b[e];
                    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === v.id
                })
            }, [b, v.id]);
        return r.createElement("div", {
            className: T.guildStatus
        }, r.createElement(_.default, {
            className: T.guildIcon,
            guild: v,
            size: _.default.Sizes.LARGER
        }), r.createElement(s.Heading, {
            className: T.guildName,
            color: "always-white",
            variant: "text-lg/bold"
        }, v.name), r.createElement("div", {
            className: T.guildBoostCountWrapper
        }, r.createElement("div", {
            className: T.guildBoostCount
        }, r.createElement(p.default, {
            className: i()(T.guildBoostBadge, (t = {}, n = T.guildBoostBadgeWithBoosts, o = v.premiumSubscriberCount > 0, n in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, t))
        }), r.createElement(s.Text, {
            className: T.guildStatusCopy,
            variant: "text-md/bold"
        }, O.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
            subscriptions: v.premiumSubscriberCount
        }))), R.length > 0 ? r.createElement(s.Text, {
            className: T.guildBoostCountCurrentUser,
            variant: "text-sm/normal"
        }, O.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_USER_SUBSCRIPTION_COUNT.format({
            numSubscriptions: R.length
        })) : null), r.createElement("div", {
            className: T.guildBoostCtas
        }, r.createElement(u.VisibilitySensor, {
            onChange: g,
            threshold: .9
        }, r.createElement("div", {
            className: i()(T.guildBoostCta, T.guildBoostCtaBoostWrapper)
        }, r.createElement(y.default, {
            className: T.guildBoostCtaBoost,
            innerClassName: i()(T.__invalid_guildBoostCtaContent, T.guildBoostCtaBoostContent),
            buttonShineClassName: T.guildBoostCtaBoostShine,
            guild: v,
            analyticsLocation: {
                page: I.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                section: I.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                object: I.AnalyticsObjects.BUTTON_CTA,
                objectType: I.AnalyticsObjectTypes.BUY
            },
            closeLayer: S,
            color: s.Button.Colors.WHITE,
            size: s.Button.Sizes.LARGE,
            fullWidth: !0
        }))), m.default.hasFreeBoosts(A) || m.default.isPremium(A, h.PremiumTypes.TIER_2) ? r.createElement(s.Button, {
            className: i()(T.guildBoostCta, T.guildBoostCtaSecondary),
            innerClassName: i()(T.__invalid_guildBoostCtaContent, T.guildBoostCtaGiftContent),
            look: s.Button.Looks.OUTLINED,
            color: s.Button.Colors.WHITE,
            onClick: function() {
                (0, c.default)({
                    initialPlanId: null,
                    subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
                    isGift: !0,
                    analyticsLocations: N,
                    analyticsObject: {
                        page: I.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                        section: I.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                        object: I.AnalyticsObjects.BUTTON_ICON,
                        objectType: I.AnalyticsObjectTypes.GIFT
                    },
                    onClose: function(e) {
                        return e && S()
                    }
                })
            },
            size: s.Button.Sizes.LARGE
        }, r.createElement(E.default, {
            className: T.guildBoostCtaGiftIcon
        }), O.default.Messages.PREMIUM_GUILD_PERKS_MODAL_GIFT_NITRO) : r.createElement(s.Button, {
            className: i()(T.guildBoostCta, T.guildBoostCtaSecondary),
            innerClassName: i()(T.__invalid_guildBoostCtaContent, T.__invalid_guildBoostCtaSubscribeContent),
            look: s.Button.Looks.OUTLINED,
            color: s.Button.Colors.WHITE,
            onClick: function() {
                (0, c.default)({
                    initialPlanId: null,
                    subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
                    analyticsLocations: N,
                    analyticsObject: {
                        page: I.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                        section: I.AnalyticsSections.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                        object: I.AnalyticsObjects.BUTTON_ICON,
                        objectType: I.AnalyticsObjectTypes.BUY
                    },
                    onClose: function(e) {
                        return e && S()
                    }
                })
            },
            size: s.Button.Sizes.LARGE
        }, O.default.Messages.PREMIUM_GUILD_PERKS_MODAL_SUBSCRIBE_WITH_FREE_BOOSTS)))
    }
}