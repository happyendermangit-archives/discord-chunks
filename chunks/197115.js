function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("442837"),
        o = n("481060"),
        l = n("230711"),
        u = n("906732"),
        d = n("543241"),
        _ = n("963249"),
        c = n("703656"),
        E = n("301766"),
        I = n("594174"),
        T = n("78839"),
        f = n("451478"),
        S = n("976644"),
        A = n("559629"),
        h = n("466111"),
        m = n("74538"),
        N = n("958589"),
        O = n("474936"),
        p = n("981631"),
        R = n("689938"),
        C = n("232248");
    t.default = function(e) {
        let {
            isGift: t,
            subscriptionTier: r,
            onClick: g,
            size: L,
            className: D,
            trialId: v,
            isTrialCTA: M,
            buttonText: y,
            buttonTextClassName: P,
            iconClassName: U,
            postSuccessGuild: b,
            onSubscribeModalClose: G,
            premiumModalAnalyticsLocation: w,
            showIcon: k = !0,
            disableShine: B,
            applicationId: F,
            giftMessage: V,
            overrideDisabledButtonText: x,
            shinyButtonClassName: H,
            ...Y
        } = e, j = (0, a.useStateFromStores)([I.default], () => I.default.getCurrentUser()), W = (0, a.useStateFromStores)([f.default], () => f.default.isFocused()), K = (0, a.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()), {
            analyticsLocations: z
        } = (0, u.default)(), X = N.default.useExperiment({
            location: "PremiumSubscribeButton"
        }).enabled, Q = e => {
            if (e.preventDefault(), null == j) {
                (0, c.transitionTo)(p.Routes.LOGIN);
                return
            }
            if (null == g || g(e), (null == K ? void 0 : K.status) === p.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                (0, d.trackPremiumSettingsPaneOpened)(), l.default.open(p.UserSettingsSections.PREMIUM), null == G || G(!1);
                return
            }! function(e) {
                let {
                    isClaimed: t,
                    isVerified: r,
                    isGift: s,
                    subscriptionTier: a,
                    trialId: l,
                    postSuccessGuild: u,
                    onSubscribeModalClose: d,
                    analyticsLocations: c,
                    premiumModalAnalyticsLocation: E,
                    applicationId: I,
                    giftMessage: T
                } = e;
                if (!t) {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("99387"), n.e("96645")]).then(n.bind(n, "918995"));
                        return t => {
                            let {
                                onClose: n,
                                ...r
                            } = t;
                            return (0, i.jsx)(e, {
                                ...r,
                                onClose: n
                            })
                        }
                    });
                    return
                }
                if (!r) {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("99387"), n.e("35822")]).then(n.bind(n, "444688"));
                        return t => {
                            let {
                                onClose: n,
                                ...r
                            } = t;
                            return (0, i.jsx)(e, {
                                ...r,
                                onClose: n
                            })
                        }
                    });
                    return
                }
                let f = p.AnalyticsObjectTypes.BUY;
                null != l ? f = p.AnalyticsObjectTypes.TRIAL : s && (f = p.AnalyticsObjectTypes.GIFT), (0, _.default)({
                    isGift: s,
                    initialPlanId: null,
                    subscriptionTier: a,
                    analyticsLocations: c,
                    analyticsObject: {
                        object: p.AnalyticsObjects.BUTTON_CTA,
                        objectType: f,
                        ...E
                    },
                    trialId: l,
                    postSuccessGuild: u,
                    onClose: d,
                    applicationId: I,
                    giftMessage: T
                })
            }({
                isClaimed: j.isClaimed(),
                isVerified: j.verified,
                isGift: t,
                subscriptionTier: r,
                trialId: v,
                postSuccessGuild: b,
                onSubscribeModalClose: G,
                analyticsLocations: z,
                premiumModalAnalyticsLocation: w,
                applicationId: F,
                giftMessage: V
            })
        };
        if (M) return (0, i.jsxs)(o.Button, {
            size: L,
            className: D,
            innerClassName: C.premiumSubscribeButton,
            look: o.Button.Looks.INVERTED,
            onClick: Q,
            ...Y,
            children: [k && (0, i.jsx)(h.default, {
                className: C.premiumIcon
            }), (0, i.jsx)("span", {
                className: s()(C.buttonText, P),
                children: null != y ? y : R.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
            })]
        });
        if (t) return (0, i.jsxs)(o.Button, {
            size: L,
            className: D,
            innerClassName: C.giftButton,
            color: o.Button.Colors.PRIMARY,
            onClick: Q,
            ...Y,
            children: [(0, i.jsx)(A.default, {
                className: C.giftIcon
            }), (0, i.jsx)("span", {
                className: s()(C.buttonText, P),
                children: null != y ? y : R.default.Messages.PREMIUM_GIFTING_BUTTON
            })]
        });
        let q = R.default.Messages.APPLICATION_STORE_GET_PREMIUM,
            J = null != K ? (0, m.getPremiumPlanItem)(K) : null,
            Z = null != J ? m.default.getPremiumType(J.planId) : null == j ? void 0 : j.premiumType,
            $ = r === O.PremiumSubscriptionSKUs.TIER_2 && null != Z && [O.PremiumTypes.TIER_0, O.PremiumTypes.TIER_1].includes(Z);
        $ ? q = R.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : X && null == K && (r === O.PremiumSubscriptionSKUs.TIER_2 || null == r) && (q = R.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_BUTTON_CTA_NON_SUB);
        let ee = null != K && K.status !== p.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, E.isNoneSubscription)(K.planId) && !$,
            et = ee ? null != x ? x : function(e) {
                let {
                    ctaSubscriptionSkuId: t,
                    currentPremiumType: n
                } = e, i = null, r = null;
                if (null != t && t !== O.PremiumSubscriptionSKUs.LEGACY && t !== O.PremiumSubscriptionSKUs.TIER_0 && t !== O.PremiumSubscriptionSKUs.TIER_1 && t !== O.PremiumSubscriptionSKUs.TIER_2) return {
                    disabledButtonText: i,
                    disabledButtonTooltipText: r
                };
                let s = null != t ? O.PremiumSubscriptionSKUToPremiumType[(0, m.castPremiumSubscriptionAsSkuId)(t)] : null,
                    a = null != s ? O.PremiumTypeOrder[s] : null,
                    o = null != n ? O.PremiumTypeOrder[n] : null;
                return null != o && null != a && a < o ? (i = R.default.Messages.APPLICATION_STORE_GET_PREMIUM, r = R.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != s && null != n && s === n ? (i = R.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, r = R.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == s && null != n && n === O.PremiumTypes.TIER_2 && (r = R.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                    disabledButtonText: i,
                    disabledButtonTooltipText: r
                }
            }({
                ctaSubscriptionSkuId: r,
                currentPremiumType: Z
            }) : null;

        function en(e) {
            var t, n;
            return (0, i.jsxs)(S.default, {
                disabled: ee,
                onClick: Q,
                innerClassName: C.premiumSubscribeButton,
                color: r === O.PremiumSubscriptionSKUs.TIER_1 ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
                size: L,
                className: H,
                wrapperClassName: D,
                pauseAnimation: !W || B,
                ...Y,
                ...e,
                children: [k && (0, i.jsx)(h.default, {
                    className: s()(C.premiumIcon, U)
                }), (0, i.jsx)("span", {
                    className: s()(C.buttonText, P),
                    children: null !== (n = null !== (t = null == et ? void 0 : et.disabledButtonText) && void 0 !== t ? t : y) && void 0 !== n ? n : q
                })]
            })
        }
        return (null == et ? void 0 : et.disabledButtonTooltipText) != null ? (0, i.jsx)(o.Tooltip, {
            text: et.disabledButtonTooltipText,
            children: en
        }) : en()
    }
}