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
        p = n("956597"),
        m = n("599110"),
        h = n("256860"),
        x = n("364685"),
        E = n("41170"),
        y = n("281072"),
        g = n("560241"),
        S = n("49111"),
        C = n("646718"),
        _ = n("782340"),
        T = n("192465");

    function I(e) {
        var t, n, a;
        let {
            className: I,
            onClose: v
        } = e;
        (0, h.useFetchStickerPacks)();
        let {
            analyticsLocations: N
        } = (0, d.default)(u.default.EMPTY_STATE), A = (0, r.useStateFromStoresArray)([x.default], () => g.EMPTY_STATE_STICKERS.map(e => x.default.getStickerById(e)));
        l.useEffect(() => {
            m.default.track(S.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: C.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
                source: {
                    section: S.AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL
                },
                location_stack: N
            })
        }, [N]);
        let O = (0, f.usePremiumTrialOffer)(),
            R = (0, c.usePremiumDiscountOffer)(),
            M = null != O || null != R,
            k = (null == O ? void 0 : null === (t = O.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === C.PremiumSubscriptionSKUs.TIER_0;
        return (0, i.jsxs)("div", {
            className: s(T.emptyState, I, {
                [T.unifyTrialUpsell]: M
            }),
            children: [M ? (0, i.jsx)(p.default, {
                discountOffer: R,
                trialOffer: O,
                onClose: v,
                type: C.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
                subscriptionTier: null !== (a = null == O ? void 0 : null === (n = O.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : C.PremiumSubscriptionSKUs.TIER_2,
                children: _.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
            }) : (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(o.Heading, {
                    className: T.header,
                    variant: "heading-xl/semibold",
                    children: _.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                }), (0, i.jsx)(o.Text, {
                    className: T.subtitle,
                    color: "header-secondary",
                    variant: "text-md/normal",
                    children: _.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
                }), (0, i.jsx)("div", {
                    className: T.stickersRow,
                    children: A.filter(e => null != e).map(e => (0, i.jsx)(E.default, {
                        sticker: e,
                        className: T.sticker,
                        size: 80
                    }, null == e ? void 0 : e.id))
                })]
            }), !M && (0, i.jsx)(y.default, {
                analyticsSection: S.AnalyticsSections.EXPRESSION_PICKER,
                buttonText: M ? k ? _.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : _.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
            })]
        })
    }
}