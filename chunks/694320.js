function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("100527"),
        d = n("906732"),
        _ = n("104494"),
        c = n("639119"),
        E = n("165583"),
        I = n("592125"),
        T = n("944486"),
        f = n("672752"),
        S = n("466111"),
        A = n("626135"),
        h = n("981631"),
        m = n("474936"),
        N = n("689938"),
        O = n("459229");

    function p() {
        (0, l.openModalLazy)(async () => {
            let {
                default: e
            } = await n.e("3289").then(n.bind(n, "682609"));
            return t => (0, i.jsx)(e, {
                channel: null,
                ...t
            })
        })
    }

    function R(e) {
        var t;
        let {
            className: n,
            iconOnly: s,
            remaining: R
        } = e, C = (0, o.useStateFromStores)([T.default, I.default], () => {
            let e = I.default.getChannel(T.default.getChannelId());
            return (null == e ? void 0 : e.isPrivate()) ? h.AnalyticsPages.DM_CHANNEL : h.AnalyticsPages.GUILD_CHANNEL
        }), {
            analyticsLocations: g
        } = (0, d.default)(u.default.PREMIUM_UPSELL), L = (0, _.usePremiumDiscountOffer)(), D = (0, c.usePremiumTrialOffer)(), v = (0, _.discountOfferHasTier)(L, m.PremiumSubscriptionSKUs.TIER_2), M = (null == D ? void 0 : null === (t = D.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === m.PremiumSubscriptionSKUs.TIER_2;
        return (r.useEffect(() => {
            A.default.track(h.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: "longer messages inline",
                location: {
                    location_page: C,
                    location_section: h.AnalyticsSections.CHANNEL_TEXT_AREA
                },
                location_stack: g
            })
        }, [C, g]), (M || v) && R < 0) ? (0, i.jsx)(E.default, {
            type: m.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL,
            subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
            context: R,
            discountOffer: L,
            trialOffer: D,
            children: N.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
                onLearnMore: p
            })
        }) : s ? (0, i.jsx)(l.Clickable, {
            className: O.iconOnly,
            onClick: () => p(),
            children: (0, i.jsx)(l.Tooltip, {
                text: N.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP_WITHOUT_LINK,
                position: "top",
                children: e => (0, i.jsx)(S.default, {
                    className: O.premium,
                    ...e
                })
            })
        }) : (0, i.jsxs)("div", {
            className: a()(O.root, n),
            children: [(0, i.jsx)(S.default, {
                className: O.premium,
                color: f.GradientCssUrls.PREMIUM_TIER_2
            }), (0, i.jsx)(l.Text, {
                className: O.text,
                variant: "text-sm/normal",
                children: N.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
                    onLearnMore: p
                })
            })]
        })
    }
}