function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("996146"),
        a = n("481060"),
        o = n("100527"),
        l = n("906732"),
        u = n("963249"),
        d = n("147915"),
        _ = n("51144"),
        c = n("981631"),
        E = n("474936"),
        I = n("689938"),
        T = n("23383");
    t.default = r.memo(function(e) {
        let {
            disabled: t,
            channel: n
        } = e, {
            analyticsLocations: r
        } = (0, l.default)(o.default.GIFT_BUTTON), f = (0, _.useDirectMessageRecipient)(n), {
            Component: S,
            events: A,
            play: h
        } = (0, s.useGiftLottie)();
        if (t) return null;
        let m = () => (0, u.default)({
            isGift: !0,
            giftRecipient: null === f ? void 0 : f,
            initialPlanId: null,
            subscriptionTier: E.PremiumSubscriptionSKUs.TIER_2,
            analyticsLocations: r,
            analyticsObject: {
                page: n.isPrivate() ? c.AnalyticsPages.DM_CHANNEL : c.AnalyticsPages.GUILD_CHANNEL,
                section: c.AnalyticsSections.CHANNEL_TEXT_AREA,
                object: c.AnalyticsObjects.BUTTON_ICON,
                objectType: c.AnalyticsObjectTypes.GIFT
            }
        });
        return (0, i.jsx)(a.Tooltip, {
            text: I.default.Messages.PREMIUM_GIFT_BUTTON_TOOLTIP,
            children: e => (0, i.jsx)(d.default, {
                ...e,
                innerClassName: T.button,
                isActive: !1,
                "aria-label": I.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                "aria-haspopup": "dialog",
                onClick: () => {
                    m(), h()
                },
                ...A,
                children: (0, i.jsx)(S, {
                    color: "currentColor"
                })
            })
        })
    })
}