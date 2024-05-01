function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("442837"),
        l = n("481060"),
        u = n("2052"),
        d = n("367907"),
        _ = n("906732"),
        c = n("28546"),
        E = n("26323"),
        I = n("434404"),
        T = n("889161"),
        f = n("430824"),
        S = n("973675"),
        h = n("68736"),
        A = n("267642"),
        m = n("981631"),
        N = n("30513"),
        p = n("689938"),
        O = n("933344");
    t.default = e => {
        let {
            className: t,
            guildId: n,
            channel: a,
            shouldTrackUpsellViewed: R,
            setTrackedUpsellViewed: C
        } = e, {
            location: g
        } = (0, u.useAnalyticsContext)(), {
            analyticsLocations: L
        } = (0, _.default)(), v = (0, o.useStateFromStores)([f.default], () => f.default.getGuild(n)), {
            canManageAllExpressions: D
        } = (0, T.useManageResourcePermissions)(v), M = null != v && 0 === (0, A.getTotalStickerCountForTier)(v.premiumTier) && !v.hasFeature(m.GuildFeatures.MORE_STICKERS);
        return (r.useEffect(() => {
            D && M && R && ((0, d.trackWithMetadata)(m.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: g,
                guild_id: null == v ? void 0 : v.id,
                channel_id: null == a ? void 0 : a.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: L
            }), C(!0))
        }, [M, v, a, g, R, C, L, D]), null != v && D) ? M ? (0, i.jsxs)("div", {
            className: s()(O.upsell, t),
            children: [(0, i.jsx)(S.default, {
                className: O.icon,
                width: 24,
                height: 24
            }), (0, i.jsx)(l.Text, {
                color: "interactive-normal",
                className: O.body,
                variant: "text-sm/normal",
                children: p.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_DESCRIPTION.format({
                    count: (0, A.getTotalStickerCountForTier)(m.BoostedGuildTiers.TIER_1)
                })
            }), (0, i.jsx)(l.Button, {
                look: l.Button.Looks.LINK,
                color: l.Button.Colors.LINK,
                onClick: () => {
                    (0, E.default)({
                        analyticsLocations: L,
                        analyticsSourceLocation: g,
                        guild: v,
                        perks: (0, N.guildBoostingPerks)()
                    })
                },
                children: p.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_CTA
            })]
        }) : (0, i.jsxs)("div", {
            className: s()(O.upsell, t),
            children: [(0, i.jsx)(h.default, {
                className: O.icon,
                width: 20,
                height: 20
            }), (0, i.jsx)(l.Text, {
                color: "interactive-normal",
                className: O.body,
                variant: "text-sm/normal",
                children: p.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_DESCRIPTION
            }), (0, i.jsx)(l.Button, {
                look: l.Button.Looks.LINK,
                color: l.Button.Colors.LINK,
                onClick: () => {
                    (0, c.closeExpressionPicker)(), I.default.open(n, m.GuildSettingsSections.STICKERS, g)
                },
                children: p.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_CTA
            })]
        }) : null
    }
}