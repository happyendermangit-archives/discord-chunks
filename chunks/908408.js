function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StickersPremiumUpsell: function() {
            return I
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("812204"),
        u = n("685665"),
        d = n("154889"),
        c = n("917247"),
        f = n("956597"),
        p = n("945330"),
        m = n("599110"),
        h = n("719923"),
        x = n("570759"),
        E = n("281072"),
        y = n("49111"),
        g = n("646718"),
        S = n("782340"),
        C = n("350327"),
        _ = n("481927");
    let T = () => (0, x.setShowPremiumUpsell)(!1),
        I = e => {
            var t, n, a;
            let {
                onLearnMore: x
            } = e, {
                analyticsLocations: I
            } = (0, u.default)(o.default.PREMIUM_UPSELL);
            l.useEffect(() => {
                m.default.track(y.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                    location_section: y.AnalyticsSections.STICKER_PICKER_UPSELL,
                    type: g.PremiumUpsellTypes.STICKER_PICKER_UPSELL,
                    location_stack: I
                })
            }, [I]);
            let v = (0, c.usePremiumTrialOffer)(),
                A = (0, d.usePremiumDiscountOffer)(),
                N = (null == v ? void 0 : null === (t = v.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === g.PremiumSubscriptionSKUs.TIER_0,
                R = null != v || null != A;
            return (0, i.jsxs)("div", {
                className: s(C.upsellWrapper, {
                    [C.unifyTrialUpsell]: R
                }),
                children: [R ? (0, i.jsx)(f.default, {
                    trialOffer: v,
                    discountOffer: A,
                    onClose: T,
                    type: g.PremiumUpsellTypes.STICKER_PICKER_UPSELL,
                    subscriptionTier: null !== (a = null == v ? void 0 : null === (n = v.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : g.PremiumSubscriptionSKUs.TIER_2,
                    children: N ? S.default.Messages.STICKER_PICKER_PREMIUM_TIER_UPSELL_DESCRIPTION.format({
                        planName: (0, h.getTierDisplayName)(g.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                        onClick: x
                    }) : S.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
                        onClick: x
                    })
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("img", {
                        className: C.upsellImage,
                        src: _,
                        alt: S.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                    }), (0, i.jsx)(r.Text, {
                        className: C.upsellTitle,
                        color: "header-primary",
                        variant: "text-lg/semibold",
                        children: S.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                    }), (0, i.jsx)(r.Text, {
                        className: C.upsellDescription,
                        variant: "text-md/normal",
                        children: S.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
                            onClick: x
                        })
                    })]
                }), !R && (0, i.jsx)(E.default, {
                    analyticsSection: y.AnalyticsSections.EXPRESSION_PICKER,
                    buttonText: R ? N ? S.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : S.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
                }), (0, i.jsx)(r.Clickable, {
                    className: C.upsellClose,
                    onClick: T,
                    children: (0, i.jsx)(p.default, {})
                })]
            })
        }
}