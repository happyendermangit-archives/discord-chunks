function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("751848"),
        u = n("784184"),
        s = n("523263"),
        l = n("649455"),
        c = n("396586"),
        f = n("251384"),
        d = n("150736"),
        _ = n("532209"),
        E = n("214803"),
        p = n("587753"),
        m = n("844615"),
        y = n("444169"),
        I = n("742971"),
        h = n("870331"),
        O = n("739226"),
        T = n("830721"),
        S = n("276328"),
        v = n("644037"),
        g = n("281767"),
        A = n("68735"),
        b = n("868615"),
        N = n("941504"),
        R = n("820520");

    function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function P(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    t.default = function(e) {
        var t, o, D, L, M, U = e.onLearnMore,
            w = e.onClose,
            k = e.channel,
            G = e.emojiDescriptor,
            B = e.pickerIntention,
            j = e.analyticsLocation,
            F = (0, s.default)();
        var V = (t = r.useState(!1), o = 2, function(e) {
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
                    if ("string" == typeof e) return C(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t)
                }
            }(t, o) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            H = V[0],
            x = V[1],
            Y = function() {
                (0, S.trackPremiumSettingsPaneOpened)(k), (0, d.navigateToPremiumMarketingPage)(), U()
            },
            W = (0, a.isThemeLight)(F) ? n("537381") : n("341048"),
            K = (0, m.usePremiumTrialOffer)(),
            z = (0, p.usePremiumDiscountOffer)(),
            X = null != K || null != z,
            q = (0, E.default)({
                autoTrackExposure: !X,
                experiment: _.default,
                location: "emoji_picker"
            }),
            Q = q.isLoading,
            J = q.suggestedPremiumType,
            Z = (0, f.useExpressionPickerStore)(function(e) {
                return e.searchQuery
            }),
            $ = (0, c.default)(l.default.EMOJI_PICKER).analyticsLocations,
            ee = null == K ? void 0 : null === (D = K.subscription_trial) || void 0 === D ? void 0 : D.sku_id,
            et = null != ee ? ee === b.PremiumSubscriptionSKUs.TIER_0 : J === b.PremiumTypes.TIER_0;
        return r.useEffect(function() {
            if (!Q) {
                n = B === A.EmojiIntention.REACTION ? b.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED : G.subCategory === v.EmojiSubCategory.TOP_GUILD_EMOJI ? b.PremiumUpsellTypes.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : G.subCategory === v.EmojiSubCategory.NEWLY_ADDED_EMOJI ? b.PremiumUpsellTypes.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : b.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
                var e, t, n, r = G.emoji;
                h.default.track(g.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                    type: n,
                    is_animated: r.animated,
                    is_external: !O.default.isInternalEmojiForGuildId(r, null == k ? void 0 : k.getGuildId()),
                    has_search_query: null != Z && "" !== Z,
                    location: (e = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                P(e, t, n[t])
                            })
                        }
                        return e
                    }({}, j), t = (t = {
                        object: g.AnalyticsObjects.EMOJI
                    }, t), Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }), e),
                    location_stack: $,
                    sku_id: (0, T.castPremiumSubscriptionAsSkuId)(T.default.getSkuIdForPremiumType(J))
                })
            }
        }, [Q, J, G, k, j, $, B, Z]), r.createElement("div", {
            className: i()(R.premiumPromo, P({}, R.unifyTrialUpsell, X))
        }, r.createElement(u.Clickable, {
            className: R.premiumPromoClose,
            onClick: w
        }, N.default.Messages.CLOSE), Q ? r.createElement(u.Spinner, null) : r.createElement(r.Fragment, null, X ? r.createElement(y.default, {
            type: b.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
            subscriptionTier: null !== (M = null == K ? void 0 : null === (L = K.subscription_trial) || void 0 === L ? void 0 : L.sku_id) && void 0 !== M ? M : b.PremiumSubscriptionSKUs.TIER_2,
            onClose: w,
            trialOffer: K,
            discountOffer: z
        }, et ? N.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
            planName: (0, T.getTierDisplayName)(b.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
            onClick: Y
        }) : N.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
            onClick: Y
        })) : r.createElement(r.Fragment, null, r.createElement("img", {
            alt: "",
            className: R.premiumPromoImage,
            src: W
        }), r.createElement("div", {
            className: R.premiumPromoTitle
        }, N.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL), r.createElement("div", {
            className: R.premiumPromoDescription
        }, et ? N.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
            planName: (0, T.getTierDisplayName)(b.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
            onClick: Y
        }) : N.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
            onClick: Y
        }))), !X && r.createElement(I.default, {
            subscriptionTier: et ? b.PremiumSubscriptionSKUs.TIER_0 : b.PremiumSubscriptionSKUs.TIER_2,
            submitting: H,
            premiumModalAnalyticsLocation: {
                section: g.AnalyticsSections.EMOJI_PICKER_POPOUT,
                object: g.AnalyticsObjects.BUTTON_CTA
            },
            size: u.Button.Sizes.SMALL,
            color: u.Button.Colors.GREEN,
            onClick: function() {
                x(!0)
            },
            onSubscribeModalClose: function(e) {
                x(!1), e && w()
            },
            buttonText: function() {
                if (X) return et ? N.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : N.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT;
                return et ? N.default.Messages.PREMIUM_SETTINGS_GET_TIER_0 : N.default.Messages.PREMIUM_REQUIRED_GET_NITRO
            }()
        })))
    }
}