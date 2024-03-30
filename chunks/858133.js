function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("560897"),
        l = n("140817"),
        c = n("396586"),
        f = n("251384"),
        d = n("77259"),
        _ = n("878943"),
        E = n("357911"),
        p = n("306912"),
        m = n("350897"),
        y = n("173348"),
        I = n("665199"),
        h = n("281767"),
        O = n("502642"),
        T = n("941504"),
        S = n("182998");
    t.default = function(e) {
        var t = e.className,
            n = e.guildId,
            o = e.channel,
            v = e.shouldTrackUpsellViewed,
            g = e.setTrackedUpsellViewed,
            A = (0, s.useAnalyticsContext)().location,
            b = (0, c.default)().analyticsLocations,
            N = (0, a.useStateFromStores)([p.default], function() {
                return p.default.getGuild(n)
            }),
            R = (0, E.useManageResourcePermissions)(N).canManageAllExpressions,
            C = null != N && 0 === (0, I.getTotalStickerCountForTier)(N.premiumTier) && !N.hasFeature(h.GuildFeatures.MORE_STICKERS);
        return (r.useEffect(function() {
            R && C && v && ((0, l.trackWithMetadata)(h.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: A,
                guild_id: null == N ? void 0 : N.id,
                channel_id: null == o ? void 0 : o.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: b
            }), g(!0))
        }, [C, N, o, A, v, g, b, R]), null != N && R) ? C ? r.createElement("div", {
            className: i()(S.upsell, t)
        }, r.createElement(m.default, {
            className: S.icon,
            width: 24,
            height: 24
        }), r.createElement(u.Text, {
            color: "interactive-normal",
            className: S.body,
            variant: "text-sm/normal"
        }, T.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_DESCRIPTION.format({
            count: (0, I.getTotalStickerCountForTier)(h.BoostedGuildTiers.TIER_1)
        })), r.createElement(u.Button, {
            look: u.Button.Looks.LINK,
            color: u.Button.Colors.LINK,
            onClick: function() {
                (0, d.default)({
                    analyticsLocations: b,
                    analyticsSourceLocation: A,
                    guild: N,
                    perks: (0, O.guildBoostingPerks)()
                })
            }
        }, T.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_CTA)) : r.createElement("div", {
            className: i()(S.upsell, t)
        }, r.createElement(y.default, {
            className: S.icon,
            width: 20,
            height: 20
        }), r.createElement(u.Text, {
            color: "interactive-normal",
            className: S.body,
            variant: "text-sm/normal"
        }, T.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_DESCRIPTION), r.createElement(u.Button, {
            look: u.Button.Looks.LINK,
            color: u.Button.Colors.LINK,
            onClick: function() {
                (0, f.closeExpressionPicker)(), _.default.open(n, h.GuildSettingsSections.STICKERS, A)
            }
        }, T.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_CTA)) : null
    }
}