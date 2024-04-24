function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("780384"),
        l = n("481060"),
        u = n("410030"),
        d = n("100527"),
        _ = n("906732"),
        c = n("28546"),
        E = n("98278"),
        I = n("911200"),
        T = n("348121"),
        f = n("104494"),
        S = n("639119"),
        h = n("165583"),
        A = n("197115"),
        m = n("626135"),
        N = n("176354"),
        p = n("74538"),
        O = n("543241"),
        R = n("149203"),
        C = n("981631"),
        g = n("185923"),
        L = n("474936"),
        D = n("689938"),
        v = n("820520");
    t.default = e => {
        var t, s, M;
        let {
            onLearnMore: y,
            onClose: P,
            channel: U,
            emojiDescriptor: b,
            pickerIntention: G,
            analyticsLocation: w
        } = e, k = (0, u.default)(), [B, V] = r.useState(!1), x = () => {
            (0, O.trackPremiumSettingsPaneOpened)(U), (0, E.navigateToPremiumMarketingPage)(), y()
        }, F = (0, o.isThemeLight)(k) ? n("537381") : n("341048"), H = (0, S.usePremiumTrialOffer)(), Y = (0, f.usePremiumDiscountOffer)(), j = null != H || null != Y, {
            isLoading: W,
            suggestedPremiumType: K
        } = (0, T.default)({
            autoTrackExposure: !j,
            experiment: I.default,
            location: "emoji_picker"
        }), z = (0, c.useExpressionPickerStore)(e => e.searchQuery), {
            analyticsLocations: X
        } = (0, _.default)(d.default.EMOJI_PICKER), Q = null == H ? void 0 : null === (t = H.subscription_trial) || void 0 === t ? void 0 : t.sku_id, q = null != Q ? Q === L.PremiumSubscriptionSKUs.TIER_0 : K === L.PremiumTypes.TIER_0;
        return r.useEffect(() => {
            if (!W) {
                let e;
                e = G === g.EmojiIntention.REACTION ? L.PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED : b.subCategory === R.EmojiSubCategory.TOP_GUILD_EMOJI ? L.PremiumUpsellTypes.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : b.subCategory === R.EmojiSubCategory.NEWLY_ADDED_EMOJI ? L.PremiumUpsellTypes.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : L.PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
                let t = b.emoji;
                m.default.track(C.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                    type: e,
                    is_animated: t.animated,
                    is_external: !N.default.isInternalEmojiForGuildId(t, null == U ? void 0 : U.getGuildId()),
                    has_search_query: null != z && "" !== z,
                    location: {
                        ...w,
                        object: C.AnalyticsObjects.EMOJI
                    },
                    location_stack: X,
                    sku_id: (0, p.castPremiumSubscriptionAsSkuId)(p.default.getSkuIdForPremiumType(K))
                })
            }
        }, [W, K, b, U, w, X, G, z]), (0, i.jsxs)("div", {
            className: a()(v.premiumPromo, {
                [v.unifyTrialUpsell]: j
            }),
            children: [(0, i.jsx)(l.Clickable, {
                className: v.premiumPromoClose,
                onClick: P,
                children: D.default.Messages.CLOSE
            }), W ? (0, i.jsx)(l.Spinner, {}) : (0, i.jsxs)(i.Fragment, {
                children: [j ? (0, i.jsx)(h.default, {
                    type: L.PremiumUpsellTypes.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
                    subscriptionTier: null !== (M = null == H ? void 0 : null === (s = H.subscription_trial) || void 0 === s ? void 0 : s.sku_id) && void 0 !== M ? M : L.PremiumSubscriptionSKUs.TIER_2,
                    onClose: P,
                    trialOffer: H,
                    discountOffer: Y,
                    children: q ? D.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
                        planName: (0, p.getTierDisplayName)(L.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                        onClick: x
                    }) : D.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
                        onClick: x
                    })
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("img", {
                        alt: "",
                        className: v.premiumPromoImage,
                        src: F
                    }), (0, i.jsx)("div", {
                        className: v.premiumPromoTitle,
                        children: D.default.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                    }), (0, i.jsx)("div", {
                        className: v.premiumPromoDescription,
                        children: q ? D.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_TIER_UPSELL.format({
                            planName: (0, p.getTierDisplayName)(L.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                            onClick: x
                        }) : D.default.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({
                            onClick: x
                        })
                    })]
                }), !j && (0, i.jsx)(A.default, {
                    subscriptionTier: q ? L.PremiumSubscriptionSKUs.TIER_0 : L.PremiumSubscriptionSKUs.TIER_2,
                    submitting: B,
                    premiumModalAnalyticsLocation: {
                        section: C.AnalyticsSections.EMOJI_PICKER_POPOUT,
                        object: C.AnalyticsObjects.BUTTON_CTA
                    },
                    size: l.Button.Sizes.SMALL,
                    color: l.Button.Colors.GREEN,
                    onClick: () => {
                        V(!0)
                    },
                    onSubscribeModalClose: e => {
                        V(!1), e && P()
                    },
                    buttonText: (() => {
                        if (j) return q ? D.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : D.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT;
                        return q ? D.default.Messages.PREMIUM_SETTINGS_GET_TIER_0 : D.default.Messages.PREMIUM_REQUIRED_GET_NITRO
                    })()
                })]
            })]
        })
    }
}