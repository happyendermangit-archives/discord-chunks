function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
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
        A = n("68736"),
        h = n("267642"),
        m = n("981631"),
        N = n("30513"),
        O = n("689938"),
        p = n("182998");
    t.default = e => {
        let {
            className: t,
            guildId: n,
            channel: s,
            shouldTrackUpsellViewed: R,
            setTrackedUpsellViewed: C
        } = e, {
            location: g
        } = (0, u.useAnalyticsContext)(), {
            analyticsLocations: L
        } = (0, _.default)(), D = (0, o.useStateFromStores)([f.default], () => f.default.getGuild(n)), {
            canManageAllExpressions: v
        } = (0, T.useManageResourcePermissions)(D), M = null != D && 0 === (0, h.getTotalStickerCountForTier)(D.premiumTier) && !D.hasFeature(m.GuildFeatures.MORE_STICKERS);
        return (r.useEffect(() => {
            v && M && R && ((0, d.trackWithMetadata)(m.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: g,
                guild_id: null == D ? void 0 : D.id,
                channel_id: null == s ? void 0 : s.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: L
            }), C(!0))
        }, [M, D, s, g, R, C, L, v]), null != D && v) ? M ? (0, i.jsxs)("div", {
            className: a()(p.upsell, t),
            children: [(0, i.jsx)(S.default, {
                className: p.icon,
                width: 24,
                height: 24
            }), (0, i.jsx)(l.Text, {
                color: "interactive-normal",
                className: p.body,
                variant: "text-sm/normal",
                children: O.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_DESCRIPTION.format({
                    count: (0, h.getTotalStickerCountForTier)(m.BoostedGuildTiers.TIER_1)
                })
            }), (0, i.jsx)(l.Button, {
                look: l.Button.Looks.LINK,
                color: l.Button.Colors.LINK,
                onClick: () => {
                    (0, E.default)({
                        analyticsLocations: L,
                        analyticsSourceLocation: g,
                        guild: D,
                        perks: (0, N.guildBoostingPerks)()
                    })
                },
                children: O.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_CTA
            })]
        }) : (0, i.jsxs)("div", {
            className: a()(p.upsell, t),
            children: [(0, i.jsx)(A.default, {
                className: p.icon,
                width: 20,
                height: 20
            }), (0, i.jsx)(l.Text, {
                color: "interactive-normal",
                className: p.body,
                variant: "text-sm/normal",
                children: O.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_DESCRIPTION
            }), (0, i.jsx)(l.Button, {
                look: l.Button.Looks.LINK,
                color: l.Button.Colors.LINK,
                onClick: () => {
                    (0, c.closeExpressionPicker)(), I.default.open(n, m.GuildSettingsSections.STICKERS, g)
                },
                children: O.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_CTA
            })]
        }) : null
    }
}