function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("649455"),
        l = n("396586"),
        c = n("587753"),
        f = n("844615"),
        d = n("444169"),
        _ = n("870331"),
        E = n("295030"),
        p = n("389712"),
        m = n("624308"),
        y = n("472661"),
        I = n("271172"),
        h = n("281767"),
        O = n("868615"),
        T = n("941504"),
        S = n("98560");

    function v(e) {
        var t, n, o, v, g, A, b = e.className,
            N = e.onClose;
        (0, E.useFetchStickerPacks)();
        var R = (0, l.default)(s.default.EMPTY_STATE).analyticsLocations,
            C = (0, a.useStateFromStoresArray)([p.default], function() {
                return I.EMPTY_STATE_STICKERS.map(function(e) {
                    return p.default.getStickerById(e)
                })
            });
        r.useEffect(function() {
            _.default.track(h.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: O.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
                source: {
                    section: h.AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL
                },
                location_stack: R
            })
        }, [R]);
        var P = (0, f.usePremiumTrialOffer)(),
            D = (0, c.usePremiumDiscountOffer)(),
            L = null != P || null != D,
            M = (null == P ? void 0 : null === (v = P.subscription_trial) || void 0 === v ? void 0 : v.sku_id) === O.PremiumSubscriptionSKUs.TIER_0;
        return r.createElement("div", {
            className: i()(S.emptyState, b, (t = {}, n = S.unifyTrialUpsell, o = L, n in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, t))
        }, L ? r.createElement(d.default, {
            discountOffer: D,
            trialOffer: P,
            onClose: N,
            type: O.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
            subscriptionTier: null !== (A = null == P ? void 0 : null === (g = P.subscription_trial) || void 0 === g ? void 0 : g.sku_id) && void 0 !== A ? A : O.PremiumSubscriptionSKUs.TIER_2
        }, T.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE) : r.createElement(r.Fragment, null, r.createElement(u.Heading, {
            className: S.header,
            variant: "heading-xl/semibold"
        }, T.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE), r.createElement(u.Text, {
            className: S.subtitle,
            color: "header-secondary",
            variant: "text-md/normal"
        }, T.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE), r.createElement("div", {
            className: S.stickersRow
        }, C.filter(function(e) {
            return null != e
        }).map(function(e) {
            return r.createElement(m.default, {
                sticker: e,
                className: S.sticker,
                size: 80,
                key: null == e ? void 0 : e.id
            })
        }))), !L && r.createElement(y.default, {
            analyticsSection: h.AnalyticsSections.EXPRESSION_PICKER,
            buttonText: L ? M ? T.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : T.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
        }))
    }
}