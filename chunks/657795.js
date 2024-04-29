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
        I = n("626135"),
        T = n("453070"),
        f = n("926491"),
        S = n("419922"),
        h = n("27733"),
        A = n("611480"),
        m = n("981631"),
        N = n("474936"),
        p = n("689938"),
        O = n("243935");

    function R(e) {
        var t, n, s;
        let {
            className: R,
            onClose: C
        } = e;
        (0, T.useFetchStickerPacks)();
        let {
            analyticsLocations: g
        } = (0, d.default)(u.default.EMPTY_STATE), L = (0, o.useStateFromStoresArray)([f.default], () => A.EMPTY_STATE_STICKERS.map(e => f.default.getStickerById(e)));
        r.useEffect(() => {
            I.default.track(m.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: N.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
                source: {
                    section: m.AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL
                },
                location_stack: g
            })
        }, [g]);
        let D = (0, c.usePremiumTrialOffer)(),
            v = (0, _.usePremiumDiscountOffer)(),
            M = null != D || null != v,
            y = (null == D ? void 0 : null === (t = D.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === N.PremiumSubscriptionSKUs.TIER_0;
        return (0, i.jsxs)("div", {
            className: a()(O.emptyState, R, {
                [O.unifyTrialUpsell]: M
            }),
            children: [M ? (0, i.jsx)(E.default, {
                discountOffer: v,
                trialOffer: D,
                onClose: C,
                type: N.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
                subscriptionTier: null !== (s = null == D ? void 0 : null === (n = D.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== s ? s : N.PremiumSubscriptionSKUs.TIER_2,
                children: p.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
            }) : (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(l.Heading, {
                    className: O.header,
                    variant: "heading-xl/semibold",
                    children: p.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                }), (0, i.jsx)(l.Text, {
                    className: O.subtitle,
                    color: "header-secondary",
                    variant: "text-md/normal",
                    children: p.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
                }), (0, i.jsx)("div", {
                    className: O.stickersRow,
                    children: L.filter(e => null != e).map(e => (0, i.jsx)(S.default, {
                        sticker: e,
                        className: O.sticker,
                        size: 80
                    }, null == e ? void 0 : e.id))
                })]
            }), !M && (0, i.jsx)(h.default, {
                analyticsSection: m.AnalyticsSections.EXPRESSION_PICKER,
                buttonText: M ? y ? p.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : p.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
            })]
        })
    }
}