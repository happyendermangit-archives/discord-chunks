function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("819855"),
        o = n("77078"),
        u = n("841098"),
        d = n("812204"),
        c = n("685665"),
        f = n("538282"),
        p = n("626301"),
        m = n("552917"),
        h = n("843647"),
        x = n("154889"),
        E = n("917247"),
        y = n("956597"),
        g = n("635956"),
        S = n("599110"),
        C = n("402671"),
        I = n("719923"),
        T = n("788506"),
        _ = n("115279"),
        v = n("49111"),
        N = n("958706"),
        A = n("646718"),
        O = n("782340"),
        M = n("187971"),
        R = e => {
            var t, a, R;
            let {
                onLearnMore: k,
                onClose: L,
                channel: b,
                emojiDescriptor: P,
                pickerIntention: j,
                analyticsLocation: U
            } = e, D = (0, u.default)(), [w, F] = l.useState(!1), G = () => {
                (0, T.trackPremiumSettingsPaneOpened)(b), (0, p.navigateToPremiumMarketingPage)(), k()
            }, B = (0, r.isThemeLight)(D) ? n("602291") : n("609708"), H = (0, E.usePremiumTrialOffer)(), V = (0, x.usePremiumDiscountOffer)(), K = null != H || null != V, {
                isLoading: W,
                suggestedPremiumType: Y
            } = (0, h.default)({
                autoTrackExposure: !K,
                experiment: m.default,
                location: "emoji_picker"
            }), z = (0, f.useExpressionPickerStore)(e => e.searchQuery), {
                analyticsLocations: Z
            } = (0, c.default)(d.default.EMOJI_PICKER), J = null == H ? void 0 : null === (t = H.subscription_trial) || void 0 === t ? void 0 : t.sku_id, q = null != J ? J === A.PremiumSubscriptionSKUs.TIER_0 : Y === A.PremiumTypes.TIER_0;
            return l.useEffect(() => {
                if (!W) {
                    let e;
                    e = j === N.EmojiIntention.REACTION ? A.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED : P.subCategory === _.EmojiSubCategory.TOP_GUILD_EMOJI ? A.PremiumUpsellTypes.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : P.subCategory === _.EmojiSubCategory.NEWLY_ADDED_EMOJI ? A.PremiumUpsellTypes.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : A.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
                    let t = P.emoji;
                    S.default.track(v.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: e,
                        is_animated: t.animated,
                        is_external: !C.default.isInternalEmojiForGuildId(t, null == b ? void 0 : b.getGuildId()),
                        has_search_query: null != z && "" !== z,
                        location: {
                            ...U,
                            object: v.AnalyticsObjects.EMOJI
                        },
                        location_stack: Z,
                        sku_id: (0, I.castPremiumSubscriptionAsSkuId)(I.default.getSkuIdForPremiumType(Y))
                    })
                }
            }, [W, Y, P, b, U, Z, j, z]), (0, i.jsxs)("div", {
                className: s(M.premiumPromo, {
                    [M.unifyTrialUpsell]: K
                }),
                children: [(0, i.jsx)(o.Clickable, {
                    className: M.premiumPromoClose,
                    onClick: L,
                    children: O.default.Messages.CLOSE
                }), W ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsxs)(i.Fragment, {
                    children: [K ? (0, i.jsx)(y.default, {
                        type: A.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
                        subscriptionTier: null !== (R = null == H ? void 0 : null === (a = H.subscription_trial) || void 0 === a ? void 0 : a.sku_id) && void 0 !== R ? R : A.PremiumSubscriptionSKUs.TIER_2,
                        onClose: L,
                        trialOffer: H,
                        discountOffer: V,
                        children: q ? O.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
                            planName: (0, I.getTierDisplayName)(A.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                            onClick: G
                        }) : O.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
                            onClick: G
                        })
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("img", {
                            alt: "",
                            className: M.premiumPromoImage,
                            src: B
                        }), (0, i.jsx)("div", {
                            className: M.premiumPromoTitle,
                            children: O.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                        }), (0, i.jsx)("div", {
                            className: M.premiumPromoDescription,
                            children: q ? O.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
                                planName: (0, I.getTierDisplayName)(A.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                                onClick: G
                            }) : O.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
                                onClick: G
                            })
                        })]
                    }), !K && (0, i.jsx)(g.default, {
                        subscriptionTier: q ? A.PremiumSubscriptionSKUs.TIER_0 : A.PremiumSubscriptionSKUs.TIER_2,
                        submitting: w,
                        premiumModalAnalyticsLocation: {
                            section: v.AnalyticsSections.EMOJI_PICKER_POPOUT,
                            object: v.AnalyticsObjects.BUTTON_CTA
                        },
                        size: o.Button.Sizes.SMALL,
                        color: o.Button.Colors.GREEN,
                        onClick: () => {
                            F(!0)
                        },
                        onSubscribeModalClose: e => {
                            F(!1), e && L()
                        },
                        buttonText: (() => {
                            if (K) return q ? O.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : O.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT;
                            return q ? O.default.Messages.PREMIUM_SETTINGS_GET_TIER_0 : O.default.Messages.PREMIUM_REQUIRED_GET_NITRO
                        })()
                    })]
                })]
            })
        }
}