function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("997289"),
        d = n("716241"),
        c = n("685665"),
        f = n("538282"),
        p = n("379532"),
        m = n("592407"),
        h = n("817963"),
        x = n("305961"),
        E = n("326880"),
        y = n("595086"),
        g = n("427459"),
        S = n("49111"),
        C = n("944305"),
        T = n("782340"),
        _ = n("754334"),
        I = e => {
            let {
                className: t,
                guildId: n,
                channel: a,
                shouldTrackUpsellViewed: I,
                setTrackedUpsellViewed: v
            } = e, {
                location: N
            } = (0, u.useAnalyticsContext)(), {
                analyticsLocations: A
            } = (0, c.default)(), O = (0, r.useStateFromStores)([x.default], () => x.default.getGuild(n)), {
                canManageAllExpressions: R
            } = (0, h.useManageResourcePermissions)(O), M = null != O && 0 === (0, g.getTotalStickerCountForTier)(O.premiumTier) && !O.hasFeature(S.GuildFeatures.MORE_STICKERS);
            return (l.useEffect(() => {
                R && M && I && ((0, d.trackWithMetadata)(S.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                    location: N,
                    guild_id: null == O ? void 0 : O.id,
                    channel_id: null == a ? void 0 : a.id,
                    type: "Expression Picker Inline Sticker Upsell",
                    location_stack: A
                }), v(!0))
            }, [M, O, a, N, I, v, A, R]), null != O && R) ? M ? (0, i.jsxs)("div", {
                className: s(_.upsell, t),
                children: [(0, i.jsx)(E.default, {
                    className: _.icon,
                    width: 24,
                    height: 24
                }), (0, i.jsx)(o.Text, {
                    color: "interactive-normal",
                    className: _.body,
                    variant: "text-sm/normal",
                    children: T.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_DESCRIPTION.format({
                        count: (0, g.getTotalStickerCountForTier)(S.BoostedGuildTiers.TIER_1)
                    })
                }), (0, i.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.LINK,
                    onClick: () => {
                        (0, p.default)({
                            analyticsLocations: A,
                            analyticsSourceLocation: N,
                            guild: O,
                            perks: (0, C.guildBoostingPerks)()
                        })
                    },
                    children: T.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_CTA
                })]
            }) : (0, i.jsxs)("div", {
                className: s(_.upsell, t),
                children: [(0, i.jsx)(y.default, {
                    className: _.icon,
                    width: 20,
                    height: 20
                }), (0, i.jsx)(o.Text, {
                    color: "interactive-normal",
                    className: _.body,
                    variant: "text-sm/normal",
                    children: T.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_DESCRIPTION
                }), (0, i.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.LINK,
                    onClick: () => {
                        (0, f.closeExpressionPicker)(), m.default.open(n, S.GuildSettingsSections.STICKERS, N)
                    },
                    children: T.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_CTA
                })]
            }) : null
        }
}