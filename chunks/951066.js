function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("357378"),
        i = n("784184"),
        a = n("649455"),
        u = n("396586"),
        s = n("78074"),
        l = n("813571"),
        c = n("830567"),
        f = n("281767"),
        d = n("868615"),
        _ = n("941504"),
        E = n("23383");

    function p(e) {
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
    }
    t.default = r.memo(function(e) {
        var t = e.disabled,
            n = e.channel,
            m = (0, u.default)(a.default.GIFT_BUTTON).analyticsLocations,
            y = (0, c.useDirectMessageRecipient)(n),
            I = (0, o.useGiftLottie)(),
            h = I.Component,
            O = I.events,
            T = I.play;
        return t ? null : r.createElement(i.Tooltip, {
            text: _.default.Messages.PREMIUM_GIFT_BUTTON_TOOLTIP
        }, function(e) {
            var t, o;
            return r.createElement(l.default, p((t = p({}, e), o = (o = {
                innerClassName: E.button,
                isActive: !1,
                "aria-label": _.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                "aria-haspopup": "dialog",
                onClick: function() {
                    (0, s.default)({
                        isGift: !0,
                        giftRecipient: null === y ? void 0 : y,
                        initialPlanId: null,
                        subscriptionTier: d.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocations: m,
                        analyticsObject: {
                            page: n.isPrivate() ? f.AnalyticsPages.DM_CHANNEL : f.AnalyticsPages.GUILD_CHANNEL,
                            section: f.AnalyticsSections.CHANNEL_TEXT_AREA,
                            object: f.AnalyticsObjects.BUTTON_ICON,
                            objectType: f.AnalyticsObjectTypes.GIFT
                        }
                    }), T()
                }
            }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(o)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
            }), t), O), r.createElement(h, {
                color: "currentColor"
            }))
        })
    })
}