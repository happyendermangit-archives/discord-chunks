function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("622535"),
        l = n("481060"),
        u = n("2052"),
        d = n("906732"),
        _ = n("963249"),
        c = n("911200"),
        E = n("348121"),
        I = n("672752"),
        T = n("465670"),
        f = n("466111"),
        S = n("626135"),
        A = n("74538"),
        h = n("981631"),
        m = n("474936"),
        N = n("689938"),
        O = n("368907");
    t.default = function(e) {
        let {
            bodyCopy: t = N.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_BODY,
            className: n,
            onDismiss: s,
            onCtaClick: p
        } = e, {
            location: R
        } = (0, u.useAnalyticsContext)(), {
            analyticsLocations: C
        } = (0, d.default)(), {
            isLoading: g,
            suggestedPremiumType: L
        } = (0, E.default)({
            autoTrackExposure: !0,
            experiment: c.default,
            location: m.PremiumUpsellTypes.EMOJI_PICKER_SEARCH
        }), D = r.useRef(!1), v = r.useCallback(() => {
            (0, _.default)({
                subscriptionTier: A.default.getSkuIdForPremiumType(L),
                analyticsLocations: C,
                analyticsObject: {
                    ...R,
                    object: h.AnalyticsObjects.BUTTON_CTA,
                    objectType: h.AnalyticsObjectTypes.TIER_2
                }
            }), null == p || p()
        }, [C, R, p, L]), M = L === m.PremiumTypes.TIER_0;
        return (0, i.jsx)("div", {
            className: a()(O.wrapper, n),
            children: g ? (0, i.jsx)(l.Spinner, {
                type: l.SpinnerTypes.PULSING_ELLIPSIS
            }) : (0, i.jsx)(o.VisibilitySensor, {
                onChange: e => {
                    e && !D.current && (S.default.track(h.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: m.PremiumUpsellTypes.EMOJI_PICKER_SEARCH,
                        location: R,
                        location_stack: C,
                        sku_id: A.default.getSkuIdForPremiumType(L)
                    }), D.current = !0)
                },
                children: (0, i.jsxs)("div", {
                    className: O.upsell,
                    children: [(0, i.jsx)(f.default, {
                        color: M ? I.GradientCssUrls.PREMIUM_TIER_0 : I.GradientCssUrls.PREMIUM_TIER_2,
                        className: O.premiumIcon
                    }), (0, i.jsx)(l.Text, {
                        color: "interactive-normal",
                        className: O.body,
                        variant: "text-sm/normal",
                        children: M ? N.default.Messages.EMOJI_PICKER_PREMIUM_TIER_0_UPSELL_BODY.format({
                            planName: (0, A.getTierDisplayName)(m.SubscriptionPlans.PREMIUM_MONTH_TIER_0)
                        }) : t
                    }), (0, i.jsx)(l.Button, {
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.LINK,
                        onClick: v,
                        children: M ? N.default.Messages.PREMIUM_SETTINGS_GET_TIER_0 : N.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA
                    }), null != s && (0, i.jsx)(l.Button, {
                        onClick: s,
                        className: O.dismissButton,
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.ICON,
                        children: (0, i.jsx)(T.default, {
                            className: O.dismissIcon
                        })
                    })]
                })
            })
        })
    }
}