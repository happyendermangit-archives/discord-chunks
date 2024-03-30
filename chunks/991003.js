function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("513967"),
        u = n("784184"),
        s = n("560897"),
        l = n("396586"),
        c = n("78074"),
        f = n("532209"),
        d = n("214803"),
        _ = n("283248"),
        E = n("247164"),
        p = n("412791"),
        m = n("870331"),
        y = n("830721"),
        I = n("281767"),
        h = n("868615"),
        O = n("941504"),
        T = n("368907");
    t.default = function(e) {
        var t = e.bodyCopy,
            n = void 0 === t ? O.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_BODY : t,
            o = e.className,
            S = e.onDismiss,
            v = e.onCtaClick,
            g = (0, s.useAnalyticsContext)().location,
            A = (0, l.default)().analyticsLocations,
            b = (0, d.default)({
                autoTrackExposure: !0,
                experiment: f.default,
                location: h.PremiumUpsellTypes.EMOJI_PICKER_SEARCH
            }),
            N = b.isLoading,
            R = b.suggestedPremiumType,
            C = r.useRef(!1),
            P = r.useCallback(function() {
                var e, t;
                (0, c.default)({
                    subscriptionTier: y.default.getSkuIdForPremiumType(R),
                    analyticsLocations: A,
                    analyticsObject: (e = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r, o, i;
                                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : r[o] = i
                            })
                        }
                        return e
                    }({}, g), t = (t = {
                        object: I.AnalyticsObjects.BUTTON_CTA,
                        objectType: I.AnalyticsObjectTypes.TIER_2
                    }, t), Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }), e)
                }), null == v || v()
            }, [A, g, v, R]),
            D = R === h.PremiumTypes.TIER_0;
        return r.createElement("div", {
            className: i()(T.wrapper, o)
        }, N ? r.createElement(u.Spinner, {
            type: u.SpinnerTypes.PULSING_ELLIPSIS
        }) : r.createElement(a.VisibilitySensor, {
            onChange: function(e) {
                e && !C.current && (m.default.track(I.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                    type: h.PremiumUpsellTypes.EMOJI_PICKER_SEARCH,
                    location: g,
                    location_stack: A,
                    sku_id: y.default.getSkuIdForPremiumType(R)
                }), C.current = !0)
            }
        }, r.createElement("div", {
            className: T.upsell
        }, r.createElement(p.default, {
            color: D ? _.GradientCssUrls.PREMIUM_TIER_0 : _.GradientCssUrls.PREMIUM_TIER_2,
            className: T.premiumIcon
        }), r.createElement(u.Text, {
            color: "interactive-normal",
            className: T.body,
            variant: "text-sm/normal"
        }, D ? O.default.Messages.EMOJI_PICKER_PREMIUM_TIER_0_UPSELL_BODY.format({
            planName: (0, y.getTierDisplayName)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_0)
        }) : n), r.createElement(u.Button, {
            look: u.Button.Looks.LINK,
            color: u.Button.Colors.LINK,
            onClick: P
        }, D ? O.default.Messages.PREMIUM_SETTINGS_GET_TIER_0 : O.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA), null != S && r.createElement(u.Button, {
            onClick: S,
            className: T.dismissButton,
            look: u.Button.Looks.BLANK,
            size: u.Button.Sizes.ICON
        }, r.createElement(E.default, {
            className: T.dismissIcon
        })))))
    }
}