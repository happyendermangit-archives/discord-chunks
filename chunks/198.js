function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return x
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("855643"),
        s = n("77078"),
        r = n("812204"),
        o = n("685665"),
        u = n("649844"),
        d = n("551305"),
        c = n("158998"),
        f = n("49111"),
        m = n("646718"),
        p = n("782340"),
        h = n("350583"),
        x = l.memo(function(e) {
            let {
                disabled: t,
                channel: n
            } = e, {
                analyticsLocations: l
            } = (0, o.default)(r.default.GIFT_BUTTON), x = (0, c.useDirectMessageRecipient)(n), {
                Component: E,
                events: y,
                play: g
            } = (0, a.useGiftLottie)();
            if (t) return null;
            let S = () => (0, u.default)({
                isGift: !0,
                giftRecipient: null === x ? void 0 : x,
                initialPlanId: null,
                subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocations: l,
                analyticsObject: {
                    page: n.isPrivate() ? f.AnalyticsPages.DM_CHANNEL : f.AnalyticsPages.GUILD_CHANNEL,
                    section: f.AnalyticsSections.CHANNEL_TEXT_AREA,
                    object: f.AnalyticsObjects.BUTTON_ICON,
                    objectType: f.AnalyticsObjectTypes.GIFT
                }
            });
            return (0, i.jsx)(s.Tooltip, {
                text: p.default.Messages.PREMIUM_GIFT_BUTTON_TOOLTIP,
                children: e => (0, i.jsx)(d.default, {
                    ...e,
                    innerClassName: h.button,
                    isActive: !1,
                    "aria-label": p.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                    "aria-haspopup": "dialog",
                    onClick: () => {
                        S(), g()
                    },
                    ...y,
                    children: (0, i.jsx)(E, {
                        color: "currentColor"
                    })
                })
            })
        })
}