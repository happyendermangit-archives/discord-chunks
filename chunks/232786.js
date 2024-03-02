function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("235855"),
        o = n("77078"),
        u = n("997289"),
        d = n("685665"),
        c = n("649844"),
        f = n("552917"),
        m = n("843647"),
        p = n("791106"),
        h = n("945330"),
        E = n("216422"),
        g = n("599110"),
        C = n("719923"),
        S = n("49111"),
        T = n("646718"),
        I = n("782340"),
        v = n("230537"),
        _ = function(e) {
            let {
                bodyCopy: t = I.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_BODY,
                className: n,
                onDismiss: a,
                onCtaClick: _
            } = e, {
                location: N
            } = (0, u.useAnalyticsContext)(), {
                analyticsLocations: A
            } = (0, d.default)(), {
                isLoading: x,
                suggestedPremiumType: y
            } = (0, m.default)({
                autoTrackExposure: !0,
                experiment: f.default,
                location: T.PremiumUpsellTypes.EMOJI_PICKER_SEARCH
            }), O = i.useRef(!1), R = i.useCallback(() => {
                (0, c.default)({
                    subscriptionTier: C.default.getSkuIdForPremiumType(y),
                    analyticsLocations: A,
                    analyticsObject: {
                        ...N,
                        object: S.AnalyticsObjects.BUTTON_CTA,
                        objectType: S.AnalyticsObjectTypes.TIER_2
                    }
                }), null == _ || _()
            }, [A, N, _, y]), M = y === T.PremiumTypes.TIER_0;
            return (0, l.jsx)("div", {
                className: s(v.wrapper, n),
                children: x ? (0, l.jsx)(o.Spinner, {
                    type: o.SpinnerTypes.PULSING_ELLIPSIS
                }) : (0, l.jsx)(r.default, {
                    onChange: e => {
                        e && !O.current && (g.default.track(S.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: T.PremiumUpsellTypes.EMOJI_PICKER_SEARCH,
                            location: N,
                            location_stack: A,
                            sku_id: C.default.getSkuIdForPremiumType(y)
                        }), O.current = !0)
                    },
                    children: (0, l.jsxs)("div", {
                        className: v.upsell,
                        children: [(0, l.jsx)(E.default, {
                            color: M ? p.GradientCssUrls.PREMIUM_TIER_0 : p.GradientCssUrls.PREMIUM_TIER_2,
                            className: v.premiumIcon
                        }), (0, l.jsx)(o.Text, {
                            color: "interactive-normal",
                            className: v.body,
                            variant: "text-sm/normal",
                            children: M ? I.default.Messages.EMOJI_PICKER_PREMIUM_TIER_0_UPSELL_BODY.format({
                                planName: (0, C.getTierDisplayName)(T.SubscriptionPlans.PREMIUM_MONTH_TIER_0)
                            }) : t
                        }), (0, l.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.LINK,
                            onClick: R,
                            children: M ? I.default.Messages.PREMIUM_SETTINGS_GET_TIER_0 : I.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA
                        }), null != a && (0, l.jsx)(o.Button, {
                            onClick: a,
                            className: v.dismissButton,
                            look: o.Button.Looks.BLANK,
                            size: o.Button.Sizes.ICON,
                            children: (0, l.jsx)(h.default, {
                                className: v.dismissIcon
                            })
                        })]
                    })
                })
            })
        }
}