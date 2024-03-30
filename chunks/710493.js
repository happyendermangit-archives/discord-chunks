function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return b
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("751848"),
        u = n("784184"),
        s = n("560897"),
        l = n("523263"),
        c = n("649455"),
        f = n("396586"),
        d = n("150736"),
        _ = n("742971"),
        E = n("870331"),
        p = n("830721"),
        m = n("940070"),
        y = n("797992"),
        I = n("281767"),
        h = n("868615"),
        O = n("941504"),
        T = n("892085"),
        S = n("820520");

    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function g(e) {
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

    function A(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function b(e) {
        var t, o, b, N = e.onClose,
            R = e.closePopout,
            C = e.sound,
            P = e.channel,
            D = (0, l.default)();
        var L = (t = r.useState(!1), o = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, o) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }
            }(t, o) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            M = L[0],
            U = L[1],
            w = (0, s.useAnalyticsContext)().location,
            k = r.useMemo(function() {
                return A(g({}, w), {
                    section: I.AnalyticsSections.SOUNDBOARD_SOUND_PICKER
                })
            }, [w]),
            G = (0, f.default)(c.default.PREMIUM_UPSELL).analyticsLocations,
            B = (0, m.default)(C, null !== (b = null == P ? void 0 : P.id) && void 0 !== b ? b : null).previewSound,
            j = (0, y.PreviewButton)({
                sound: C,
                previewSound: B,
                tooltipPosition: "left"
            }),
            F = (0, a.isThemeLight)(D) ? n("537381") : n("341048");
        r.useEffect(function() {
            E.default.track(I.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: h.PremiumUpsellTypes.SOUND_PICKER_SOUND_CLICKED,
                is_external: !0,
                location: A(g({}, k), {
                    object: I.AnalyticsObjects.SOUNDBOARD_SOUND
                }),
                location_stack: G,
                sku_id: p.default.getSkuIdForPremiumType(h.PremiumTypes.TIER_2)
            })
        }, [G, k]);
        var V = r.useCallback(function() {
            E.default.track(I.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                location_section: I.AnalyticsSections.SOUNDBOARD_SOUND_PICKER_UPSELL
            }), (0, d.navigateToPremiumMarketingPage)(), R()
        }, [R]);
        return r.createElement("div", {
            className: i()(S.premiumPromo, T.container)
        }, r.createElement(u.Clickable, {
            className: S.premiumPromoClose,
            onClick: N
        }, O.default.Messages.CLOSE), r.createElement("img", {
            "aria-hidden": !0,
            alt: "",
            className: i()(S.premiumPromoImage, S.premiumPromoImageSmaller, T.image),
            src: F
        }), r.createElement(u.Heading, {
            variant: "heading-lg/normal",
            color: "header-primary",
            className: S.premiumPromoTitle
        }, O.default.Messages.SOUNDBOARD_NITRO_UPSELL_TITLE), r.createElement(u.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: S.premiumPromoDescription
        }, O.default.Messages.SOUNDBOARD_NITRO_UPSELL_BODY.format({
            onClick: V
        })), r.createElement("div", {
            className: T.buttonContainer
        }, r.createElement("div", {
            className: T.previewButtonContainer
        }, j), r.createElement(_.default, {
            subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
            submitting: M,
            premiumModalAnalyticsLocation: {
                section: I.AnalyticsSections.SOUNDBOARD_SOUND_PICKER,
                object: I.AnalyticsObjects.BUTTON_CTA
            },
            size: u.Button.Sizes.SMALL,
            color: u.Button.Colors.GREEN,
            onClick: function() {
                U(!0)
            },
            onSubscribeModalClose: function(e) {
                U(!1), e && N()
            }
        })))
    }
}