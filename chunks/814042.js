function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StickersPremiumUpsell: function() {
            return R
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("100527"),
        u = n("906732"),
        d = n("104494"),
        _ = n("639119"),
        c = n("165583"),
        E = n("465670"),
        I = n("626135"),
        T = n("74538"),
        f = n("191177"),
        S = n("27733"),
        h = n("981631"),
        A = n("474936"),
        m = n("689938"),
        N = n("325687"),
        p = n("867250");
    let O = () => (0, f.setShowPremiumUpsell)(!1),
        R = e => {
            var t, n, s;
            let {
                onLearnMore: f
            } = e, {
                analyticsLocations: R
            } = (0, u.default)(l.default.PREMIUM_UPSELL);
            r.useEffect(() => {
                I.default.track(h.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                    location_section: h.AnalyticsSections.STICKER_PICKER_UPSELL,
                    type: A.PremiumUpsellTypes.STICKER_PICKER_UPSELL,
                    location_stack: R
                })
            }, [R]);
            let C = (0, _.usePremiumTrialOffer)(),
                g = (0, d.usePremiumDiscountOffer)(),
                L = (null == C ? void 0 : null === (t = C.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === A.PremiumSubscriptionSKUs.TIER_0,
                v = null != C || null != g;
            return (0, i.jsxs)("div", {
                className: a()(N.upsellWrapper, {
                    [N.unifyTrialUpsell]: v
                }),
                children: [v ? (0, i.jsx)(c.default, {
                    trialOffer: C,
                    discountOffer: g,
                    onClose: O,
                    type: A.PremiumUpsellTypes.STICKER_PICKER_UPSELL,
                    subscriptionTier: null !== (s = null == C ? void 0 : null === (n = C.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== s ? s : A.PremiumSubscriptionSKUs.TIER_2,
                    children: L ? m.default.Messages.STICKER_PICKER_PREMIUM_TIER_UPSELL_DESCRIPTION.format({
                        planName: (0, T.getTierDisplayName)(A.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                        onClick: f
                    }) : m.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
                        onClick: f
                    })
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("img", {
                        className: N.upsellImage,
                        src: p,
                        alt: m.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                    }), (0, i.jsx)(o.Text, {
                        className: N.upsellTitle,
                        color: "header-primary",
                        variant: "text-lg/semibold",
                        children: m.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                    }), (0, i.jsx)(o.Text, {
                        className: N.upsellDescription,
                        variant: "text-md/normal",
                        children: m.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
                            onClick: f
                        })
                    })]
                }), !v && (0, i.jsx)(S.default, {
                    analyticsSection: h.AnalyticsSections.EXPRESSION_PICKER,
                    buttonText: v ? L ? m.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : m.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
                }), (0, i.jsx)(o.Clickable, {
                    className: N.upsellClose,
                    onClick: O,
                    children: (0, i.jsx)(E.default, {})
                })]
            })
        }
}