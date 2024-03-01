function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    });
    var l = n("37983"),
        i = n("884691"),
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
        E = n("791106"),
        g = n("216422"),
        C = n("599110"),
        S = n("49111"),
        T = n("646718"),
        v = n("782340"),
        I = n("936369");

    function _() {
        (0, o.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("532210").then(n.bind(n, "532210"));
            return t => (0, l.jsx)(e, {
                channel: null,
                ...t
            })
        })
    }

    function N(e) {
        var t;
        let {
            className: n,
            iconOnly: a,
            remaining: N
        } = e, A = (0, r.useStateFromStores)([h.default, p.default], () => {
            let e = p.default.getChannel(h.default.getChannelId());
            return (null == e ? void 0 : e.isPrivate()) ? S.AnalyticsPages.DM_CHANNEL : S.AnalyticsPages.GUILD_CHANNEL
        }), {
            analyticsLocations: x
        } = (0, d.default)(u.default.PREMIUM_UPSELL), y = (0, c.usePremiumDiscountOffer)(), O = (0, f.usePremiumTrialOffer)(), R = (0, c.discountOfferHasTier)(y, T.PremiumSubscriptionSKUs.TIER_2), M = (null == O ? void 0 : null === (t = O.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === T.PremiumSubscriptionSKUs.TIER_2;
        return (i.useEffect(() => {
            C.default.track(S.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: {
                    location_page: A,
                    location_section: S.AnalyticsSections.CHANNEL_TEXT_AREA
                },
                location_stack: x
            })
        }, [A, x]), (M || R) && N < 0) ? (0, l.jsx)(m.default, {
            type: T.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL,
            subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
            context: N,
            discountOffer: y,
            trialOffer: O,
            children: v.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
                onLearnMore: _
            })
        }) : a ? (0, l.jsx)(o.Clickable, {
            className: I.iconOnly,
            onClick: () => _(),
            children: (0, l.jsx)(o.Tooltip, {
                text: v.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP_WITHOUT_LINK,
                position: "top",
                children: e => (0, l.jsx)(g.default, {
                    className: I.premium,
                    ...e
                })
            })
        }) : (0, l.jsxs)("div", {
            className: s(I.root, n),
            children: [(0, l.jsx)(g.default, {
                className: I.premium,
                color: E.GradientCssUrls.PREMIUM_TIER_2
            }), (0, l.jsx)(o.Text, {
                className: I.text,
                variant: "text-sm/normal",
                children: v.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
                    onLearnMore: _
                })
            })]
        })
    }
}