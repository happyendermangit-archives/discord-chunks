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
        p = n("599110"),
        h = n("256860"),
        E = n("364685"),
        g = n("41170"),
        C = n("281072"),
        S = n("560241"),
        T = n("49111"),
        v = n("646718"),
        I = n("782340"),
        _ = n("192465");

    function N(e) {
        var t, n, a;
        let {
            className: N,
            onClose: A
        } = e;
        (0, h.useFetchStickerPacks)();
        let {
            analyticsLocations: x
        } = (0, d.default)(u.default.EMPTY_STATE), y = (0, r.useStateFromStoresArray)([E.default], () => S.EMPTY_STATE_STICKERS.map(e => E.default.getStickerById(e)));
        i.useEffect(() => {
            p.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: v.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
                source: {
                    section: T.AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL
                },
                location_stack: x
            })
        }, [x]);
        let O = (0, f.usePremiumTrialOffer)(),
            R = (0, c.usePremiumDiscountOffer)(),
            M = null != O || null != R,
            L = (null == O ? void 0 : null === (t = O.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === v.PremiumSubscriptionSKUs.TIER_0;
        return (0, l.jsxs)("div", {
            className: s(_.emptyState, N, {
                [_.unifyTrialUpsell]: M
            }),
            children: [M ? (0, l.jsx)(m.default, {
                discountOffer: R,
                trialOffer: O,
                onClose: A,
                type: v.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
                subscriptionTier: null !== (a = null == O ? void 0 : null === (n = O.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : v.PremiumSubscriptionSKUs.TIER_2,
                children: I.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
            }) : (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(o.Heading, {
                    className: _.header,
                    variant: "heading-xl/semibold",
                    children: I.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                }), (0, l.jsx)(o.Text, {
                    className: _.subtitle,
                    color: "header-secondary",
                    variant: "text-md/normal",
                    children: I.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
                }), (0, l.jsx)("div", {
                    className: _.stickersRow,
                    children: y.filter(e => null != e).map(e => (0, l.jsx)(g.default, {
                        sticker: e,
                        className: _.sticker,
                        size: 80
                    }, null == e ? void 0 : e.id))
                })]
            }), !M && (0, l.jsx)(C.default, {
                analyticsSection: T.AnalyticsSections.EXPRESSION_PICKER,
                buttonText: M ? L ? I.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : I.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
            })]
        })
    }
}