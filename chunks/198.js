function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var l = n("37983"),
        i = n("884691"),
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
        E = i.memo(function(e) {
            let {
                disabled: t,
                channel: n
            } = e, {
                analyticsLocations: i
            } = (0, o.default)(r.default.GIFT_BUTTON), E = (0, c.useDirectMessageRecipient)(n), {
                Component: g,
                events: C
            } = (0, a.useGiftLottie)();
            if (t) return null;
            let S = () => (0, u.default)({
                isGift: !0,
                giftRecipient: null === E ? void 0 : E,
                initialPlanId: null,
                subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
                analyticsLocations: i,
                analyticsObject: {
                    page: n.isPrivate() ? f.AnalyticsPages.DM_CHANNEL : f.AnalyticsPages.GUILD_CHANNEL,
                    section: f.AnalyticsSections.CHANNEL_TEXT_AREA,
                    object: f.AnalyticsObjects.BUTTON_ICON,
                    objectType: f.AnalyticsObjectTypes.GIFT
                }
            });
            return (0, l.jsx)(s.Tooltip, {
                text: p.default.Messages.PREMIUM_GIFT_BUTTON_TOOLTIP,
                children: e => (0, l.jsx)(d.default, {
                    ...e,
                    innerClassName: h.button,
                    isActive: !1,
                    "aria-label": p.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                    "aria-haspopup": "dialog",
                    onClick: S,
                    ...C,
                    children: (0, l.jsx)(g, {
                        color: "currentColor"
                    })
                })
            })
        })
}