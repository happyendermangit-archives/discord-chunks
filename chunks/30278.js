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
        u = n("812204"),
        d = n("685665"),
        c = n("154889"),
        f = n("917247"),
        m = n("956597"),
        p = n("42203"),
        h = n("18494"),
        x = n("791106"),
        E = n("216422"),
        y = n("599110"),
        g = n("49111"),
        S = n("646718"),
        C = n("782340"),
        T = n("936369");

    function _() {
        (0, o.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("532210").then(n.bind(n, "532210"));
            return t => (0, i.jsx)(e, {
                channel: null,
                ...t
            })
        })
    }

    function I(e) {
        var t;
        let {
            className: n,
            iconOnly: a,
            remaining: I
        } = e, v = (0, r.useStateFromStores)([h.default, p.default], () => {
            let e = p.default.getChannel(h.default.getChannelId());
            return (null == e ? void 0 : e.isPrivate()) ? g.AnalyticsPages.DM_CHANNEL : g.AnalyticsPages.GUILD_CHANNEL
        }), {
            analyticsLocations: A
        } = (0, d.default)(u.default.PREMIUM_UPSELL), N = (0, c.usePremiumDiscountOffer)(), R = (0, f.usePremiumTrialOffer)(), O = (0, c.discountOfferHasTier)(N, S.PremiumSubscriptionSKUs.TIER_2), M = (null == R ? void 0 : null === (t = R.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === S.PremiumSubscriptionSKUs.TIER_2;
        return (l.useEffect(() => {
            y.default.track(g.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: {
                    location_page: v,
                    location_section: g.AnalyticsSections.CHANNEL_TEXT_AREA
                },
                location_stack: A
            })
        }, [v, A]), (M || O) && I < 0) ? (0, i.jsx)(m.default, {
            type: S.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL,
            subscriptionTier: S.PremiumSubscriptionSKUs.TIER_2,
            context: I,
            discountOffer: N,
            trialOffer: R,
            children: C.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
                onLearnMore: _
            })
        }) : a ? (0, i.jsx)(o.Clickable, {
            className: T.iconOnly,
            onClick: () => _(),
            children: (0, i.jsx)(o.Tooltip, {
                text: C.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP_WITHOUT_LINK,
                position: "top",
                children: e => (0, i.jsx)(E.default, {
                    className: T.premium,
                    ...e
                })
            })
        }) : (0, i.jsxs)("div", {
            className: s(T.root, n),
            children: [(0, i.jsx)(E.default, {
                className: T.premium,
                color: x.GradientCssUrls.PREMIUM_TIER_2
            }), (0, i.jsx)(o.Text, {
                className: T.text,
                variant: "text-sm/normal",
                children: C.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
                    onLearnMore: _
                })
            })]
        })
    }
}