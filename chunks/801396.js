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
        m = n("379532"),
        p = n("592407"),
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
                location: A
            } = (0, u.useAnalyticsContext)(), {
                analyticsLocations: N
            } = (0, c.default)(), R = (0, r.useStateFromStores)([x.default], () => x.default.getGuild(n)), {
                canManageAllExpressions: O
            } = (0, h.useManageResourcePermissions)(R), M = null != R && 0 === (0, g.getTotalStickerCountForTier)(R.premiumTier) && !R.hasFeature(S.GuildFeatures.MORE_STICKERS);
            return (l.useEffect(() => {
                O && M && I && ((0, d.trackWithMetadata)(S.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                    location: A,
                    guild_id: null == R ? void 0 : R.id,
                    channel_id: null == a ? void 0 : a.id,
                    type: "Expression Picker Inline Sticker Upsell",
                    location_stack: N
                }), v(!0))
            }, [M, R, a, A, I, v, N, O]), null != R && O) ? M ? (0, i.jsxs)("div", {
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
                        (0, m.default)({
                            analyticsLocations: N,
                            analyticsSourceLocation: A,
                            guild: R,
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
                        (0, f.closeExpressionPicker)(), p.default.open(n, S.GuildSettingsSections.STICKERS, A)
                    },
                    children: T.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_CTA
                })]
            }) : null
        }
}