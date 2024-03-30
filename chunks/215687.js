function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StickersPremiumUpsell: function() {
            return v
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("649455"),
        s = n("396586"),
        l = n("587753"),
        c = n("844615"),
        f = n("444169"),
        d = n("247164"),
        _ = n("870331"),
        E = n("830721"),
        p = n("360978"),
        m = n("472661"),
        y = n("281767"),
        I = n("868615"),
        h = n("941504"),
        O = n("302458"),
        T = n("867250"),
        S = function() {
            return (0, p.setShowPremiumUpsell)(!1)
        },
        v = function(e) {
            var t, n, o, p, v, g, A = e.onLearnMore,
                b = (0, s.default)(u.default.PREMIUM_UPSELL).analyticsLocations;
            r.useEffect(function() {
                _.default.track(y.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                    location_section: y.AnalyticsSections.STICKER_PICKER_UPSELL,
                    type: I.PremiumUpsellTypes.STICKER_PICKER_UPSELL,
                    location_stack: b
                })
            }, [b]);
            var N = (0, c.usePremiumTrialOffer)(),
                R = (0, l.usePremiumDiscountOffer)(),
                C = (null == N ? void 0 : null === (p = N.subscription_trial) || void 0 === p ? void 0 : p.sku_id) === I.PremiumSubscriptionSKUs.TIER_0,
                P = null != N || null != R;
            return r.createElement("div", {
                className: i()(O.upsellWrapper, (t = {}, n = O.unifyTrialUpsell, o = P, n in t ? Object.defineProperty(t, n, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = o, t))
            }, P ? r.createElement(f.default, {
                trialOffer: N,
                discountOffer: R,
                onClose: S,
                type: I.PremiumUpsellTypes.STICKER_PICKER_UPSELL,
                subscriptionTier: null !== (g = null == N ? void 0 : null === (v = N.subscription_trial) || void 0 === v ? void 0 : v.sku_id) && void 0 !== g ? g : I.PremiumSubscriptionSKUs.TIER_2
            }, C ? h.default.Messages.STICKER_PICKER_PREMIUM_TIER_UPSELL_DESCRIPTION.format({
                planName: (0, E.getTierDisplayName)(I.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                onClick: A
            }) : h.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
                onClick: A
            })) : r.createElement(r.Fragment, null, r.createElement("img", {
                className: O.upsellImage,
                src: T,
                alt: h.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
            }), r.createElement(a.Text, {
                className: O.upsellTitle,
                color: "header-primary",
                variant: "text-lg/semibold"
            }, h.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE), r.createElement(a.Text, {
                className: O.upsellDescription,
                variant: "text-md/normal"
            }, h.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
                onClick: A
            }))), !P && r.createElement(m.default, {
                analyticsSection: y.AnalyticsSections.EXPRESSION_PICKER,
                buttonText: P ? C ? h.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : h.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
            }), r.createElement(a.Clickable, {
                className: O.upsellClose,
                onClick: S
            }, r.createElement(d.default, null)))
        }
}