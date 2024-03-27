function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
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
        m = n("626301"),
        p = n("552917"),
        h = n("843647"),
        x = n("154889"),
        E = n("917247"),
        y = n("956597"),
        g = n("635956"),
        S = n("599110"),
        C = n("402671"),
        T = n("719923"),
        _ = n("788506"),
        I = n("115279"),
        v = n("49111"),
        A = n("958706"),
        N = n("646718"),
        R = n("782340"),
        O = n("187971"),
        M = e => {
            var t, a, M;
            let {
                onLearnMore: k,
                onClose: L,
                channel: P,
                emojiDescriptor: b,
                pickerIntention: j,
                analyticsLocation: U
            } = e, D = (0, u.default)(), [w, F] = l.useState(!1), G = () => {
                (0, _.trackPremiumSettingsPaneOpened)(P), (0, m.navigateToPremiumMarketingPage)(), k()
            }, H = (0, r.isThemeLight)(D) ? n("602291") : n("609708"), B = (0, E.usePremiumTrialOffer)(), V = (0, x.usePremiumDiscountOffer)(), K = null != B || null != V, {
                isLoading: W,
                suggestedPremiumType: Y
            } = (0, h.default)({
                autoTrackExposure: !K,
                experiment: p.default,
                location: "emoji_picker"
            }), z = (0, f.useExpressionPickerStore)(e => e.searchQuery), {
                analyticsLocations: Q
            } = (0, c.default)(d.default.EMOJI_PICKER), Z = null == B ? void 0 : null === (t = B.subscription_trial) || void 0 === t ? void 0 : t.sku_id, q = null != Z ? Z === N.PremiumSubscriptionSKUs.TIER_0 : Y === N.PremiumTypes.TIER_0;
            return l.useEffect(() => {
                if (!W) {
                    let e;
                    e = j === A.EmojiIntention.REACTION ? N.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED : b.subCategory === I.EmojiSubCategory.TOP_GUILD_EMOJI ? N.PremiumUpsellTypes.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : b.subCategory === I.EmojiSubCategory.NEWLY_ADDED_EMOJI ? N.PremiumUpsellTypes.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : N.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
                    let t = b.emoji;
                    S.default.track(v.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: e,
                        is_animated: t.animated,
                        is_external: !C.default.isInternalEmojiForGuildId(t, null == P ? void 0 : P.getGuildId()),
                        has_search_query: null != z && "" !== z,
                        location: {
                            ...U,
                            object: v.AnalyticsObjects.EMOJI
                        },
                        location_stack: Q,
                        sku_id: (0, T.castPremiumSubscriptionAsSkuId)(T.default.getSkuIdForPremiumType(Y))
                    })
                }
            }, [W, Y, b, P, U, Q, j, z]), (0, i.jsxs)("div", {
                className: s(O.premiumPromo, {
                    [O.unifyTrialUpsell]: K
                }),
                children: [(0, i.jsx)(o.Clickable, {
                    className: O.premiumPromoClose,
                    onClick: L,
                    children: R.default.Messages.CLOSE
                }), W ? (0, i.jsx)(o.Spinner, {}) : (0, i.jsxs)(i.Fragment, {
                    children: [K ? (0, i.jsx)(y.default, {
                        type: N.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
                        subscriptionTier: null !== (M = null == B ? void 0 : null === (a = B.subscription_trial) || void 0 === a ? void 0 : a.sku_id) && void 0 !== M ? M : N.PremiumSubscriptionSKUs.TIER_2,
                        onClose: L,
                        trialOffer: B,
                        discountOffer: V,
                        children: q ? R.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
                            planName: (0, T.getTierDisplayName)(N.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                            onClick: G
                        }) : R.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
                            onClick: G
                        })
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("img", {
                            alt: "",
                            className: O.premiumPromoImage,
                            src: H
                        }), (0, i.jsx)("div", {
                            className: O.premiumPromoTitle,
                            children: R.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                        }), (0, i.jsx)("div", {
                            className: O.premiumPromoDescription,
                            children: q ? R.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
                                planName: (0, T.getTierDisplayName)(N.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                                onClick: G
                            }) : R.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
                                onClick: G
                            })
                        })]
                    }), !K && (0, i.jsx)(g.default, {
                        subscriptionTier: q ? N.PremiumSubscriptionSKUs.TIER_0 : N.PremiumSubscriptionSKUs.TIER_2,
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
                            if (K) return q ? R.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : R.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT;
                            return q ? R.default.Messages.PREMIUM_SETTINGS_GET_TIER_0 : R.default.Messages.PREMIUM_REQUIRED_GET_NITRO
                        })()
                    })]
                })]
            })
        }
}