function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("819855"),
        o = n("77078"),
        u = n("841098"),
        d = n("812204"),
        c = n("685665"),
        f = n("538282"),
        m = n("626301"),
        p = n("552917"),
        h = n("843647"),
        E = n("154889"),
        g = n("917247"),
        C = n("956597"),
        S = n("635956"),
        T = n("599110"),
        v = n("402671"),
        I = n("719923"),
        _ = n("788506"),
        N = n("115279"),
        A = n("49111"),
        x = n("958706"),
        y = n("646718"),
        O = n("782340"),
        R = n("187971"),
        M = e => {
            var t, a, M;
            let {
                onLearnMore: L,
                onClose: P,
                channel: b,
                emojiDescriptor: j,
                pickerIntention: U,
                analyticsLocation: D
            } = e, k = (0, u.default)(), [w, F] = i.useState(!1), G = () => {
                (0, _.trackPremiumSettingsPaneOpened)(b), (0, m.navigateToPremiumMarketingPage)(), L()
            }, B = (0, r.isThemeLight)(k) ? n("602291") : n("609708"), H = (0, g.usePremiumTrialOffer)(), V = (0, E.usePremiumDiscountOffer)(), K = null != H || null != V, {
                isLoading: W,
                suggestedPremiumType: Y
            } = (0, h.default)({
                autoTrackExposure: !K,
                experiment: p.default,
                location: "emoji_picker"
            }), z = (0, f.useExpressionPickerStore)(e => e.searchQuery), {
                analyticsLocations: Z
            } = (0, c.default)(d.default.EMOJI_PICKER), J = null == H ? void 0 : null === (t = H.subscription_trial) || void 0 === t ? void 0 : t.sku_id, q = null != J ? J === y.PremiumSubscriptionSKUs.TIER_0 : Y === y.PremiumTypes.TIER_0;
            return i.useEffect(() => {
                if (!W) {
                    let e;
                    e = U === x.EmojiIntention.REACTION ? y.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED : j.subCategory === N.EmojiSubCategory.TOP_GUILD_EMOJI ? y.PremiumUpsellTypes.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : j.subCategory === N.EmojiSubCategory.NEWLY_ADDED_EMOJI ? y.PremiumUpsellTypes.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : y.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
                    let t = j.emoji;
                    T.default.track(A.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: e,
                        is_animated: t.animated,
                        is_external: !v.default.isInternalEmojiForGuildId(t, null == b ? void 0 : b.getGuildId()),
                        has_search_query: null != z && "" !== z,
                        location: {
                            ...D,
                            object: A.AnalyticsObjects.EMOJI
                        },
                        location_stack: Z,
                        sku_id: (0, I.castPremiumSubscriptionAsSkuId)(I.default.getSkuIdForPremiumType(Y))
                    })
                }
            }, [W, Y, j, b, D, Z, U, z]), (0, l.jsxs)("div", {
                className: s(R.premiumPromo, {
                    [R.unifyTrialUpsell]: K
                }),
                children: [(0, l.jsx)(o.Clickable, {
                    className: R.premiumPromoClose,
                    onClick: P,
                    children: O.default.Messages.CLOSE
                }), W ? (0, l.jsx)(o.Spinner, {}) : (0, l.jsxs)(l.Fragment, {
                    children: [K ? (0, l.jsx)(C.default, {
                        type: y.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
                        subscriptionTier: null !== (M = null == H ? void 0 : null === (a = H.subscription_trial) || void 0 === a ? void 0 : a.sku_id) && void 0 !== M ? M : y.PremiumSubscriptionSKUs.TIER_2,
                        onClose: P,
                        trialOffer: H,
                        discountOffer: V,
                        children: q ? O.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
                            planName: (0, I.getTierDisplayName)(y.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                            onClick: G
                        }) : O.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
                            onClick: G
                        })
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("img", {
                            alt: "",
                            className: R.premiumPromoImage,
                            src: B
                        }), (0, l.jsx)("div", {
                            className: R.premiumPromoTitle,
                            children: O.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                        }), (0, l.jsx)("div", {
                            className: R.premiumPromoDescription,
                            children: q ? O.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
                                planName: (0, I.getTierDisplayName)(y.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                                onClick: G
                            }) : O.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
                                onClick: G
                            })
                        })]
                    }), !K && (0, l.jsx)(S.default, {
                        subscriptionTier: q ? y.PremiumSubscriptionSKUs.TIER_0 : y.PremiumSubscriptionSKUs.TIER_2,
                        submitting: w,
                        premiumModalAnalyticsLocation: {
                            section: A.AnalyticsSections.EMOJI_PICKER_POPOUT,
                            object: A.AnalyticsObjects.BUTTON_CTA
                        },
                        size: o.Button.Sizes.SMALL,
                        color: o.Button.Colors.GREEN,
                        onClick: () => {
                            F(!0)
                        },
                        onSubscribeModalClose: e => {
                            F(!1), e && P()
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