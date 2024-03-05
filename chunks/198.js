function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("77078"),
        s = n("812204"),
        r = n("685665"),
        o = n("649844"),
        u = n("551305"),
        d = n("978679"),
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
            } = (0, r.default)(s.default.GIFT_BUTTON), E = (0, c.useDirectMessageRecipient)(n);
            if (t) return null;
            let g = () => (0, o.default)({
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
            return (0, l.jsx)(a.Tooltip, {
                text: p.default.Messages.PREMIUM_GIFT_BUTTON_TOOLTIP,
                children: e => (0, l.jsx)(u.default, {
                    ...e,
                    innerClassName: h.button,
                    isActive: !1,
                    "aria-label": p.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                    "aria-haspopup": "dialog",
                    onClick: g,
                    children: (0, l.jsx)(d.default, {})
                })
            })
        })
}