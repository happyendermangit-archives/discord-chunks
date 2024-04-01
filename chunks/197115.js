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
        N = n("474936"),
        O = n("981631"),
        p = n("689938"),
        R = n("232248");
    t.default = function(e) {
        let {
            isGift: t,
            subscriptionTier: r,
            onClick: C,
            size: g,
            className: L,
            trialId: D,
            isTrialCTA: v,
            buttonText: M,
            buttonTextClassName: y,
            iconClassName: P,
            postSuccessGuild: U,
            onSubscribeModalClose: b,
            premiumModalAnalyticsLocation: G,
            showIcon: w = !0,
            disableShine: B,
            applicationId: k,
            giftMessage: V,
            overrideDisabledButtonText: F,
            shinyButtonClassName: x,
            ...H
        } = e, Y = (0, a.useStateFromStores)([I.default], () => I.default.getCurrentUser()), j = (0, a.useStateFromStores)([f.default], () => f.default.isFocused()), W = (0, a.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()), {
            analyticsLocations: K
        } = (0, u.default)(), z = e => {
            if (e.preventDefault(), null == Y) {
                (0, c.transitionTo)(O.Routes.LOGIN);
                return
            }
            if (null == C || C(e), (null == W ? void 0 : W.status) === O.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                (0, d.trackPremiumSettingsPaneOpened)(), l.default.open(O.UserSettingsSections.PREMIUM), null == b || b(!1);
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
                let f = O.AnalyticsObjectTypes.BUY;
                null != l ? f = O.AnalyticsObjectTypes.TRIAL : s && (f = O.AnalyticsObjectTypes.GIFT), (0, _.default)({
                    isGift: s,
                    initialPlanId: null,
                    subscriptionTier: a,
                    analyticsLocations: c,
                    analyticsObject: {
                        object: O.AnalyticsObjects.BUTTON_CTA,
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
                isClaimed: Y.isClaimed(),
                isVerified: Y.verified,
                isGift: t,
                subscriptionTier: r,
                trialId: D,
                postSuccessGuild: U,
                onSubscribeModalClose: b,
                analyticsLocations: K,
                premiumModalAnalyticsLocation: G,
                applicationId: k,
                giftMessage: V
            })
        };
        if (v) return (0, i.jsxs)(o.Button, {
            size: g,
            className: L,
            innerClassName: R.premiumSubscribeButton,
            look: o.Button.Looks.INVERTED,
            onClick: z,
            ...H,
            children: [w && (0, i.jsx)(h.default, {
                className: R.premiumIcon
            }), (0, i.jsx)("span", {
                className: s()(R.buttonText, y),
                children: null != M ? M : p.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
            })]
        });
        if (t) return (0, i.jsxs)(o.Button, {
            size: g,
            className: L,
            innerClassName: R.giftButton,
            color: o.Button.Colors.PRIMARY,
            onClick: z,
            ...H,
            children: [(0, i.jsx)(A.default, {
                className: R.giftIcon
            }), (0, i.jsx)("span", {
                className: s()(R.buttonText, y),
                children: null != M ? M : p.default.Messages.PREMIUM_GIFTING_BUTTON
            })]
        });
        let X = p.default.Messages.APPLICATION_STORE_GET_PREMIUM,
            Q = null != W ? (0, m.getPremiumPlanItem)(W) : null,
            q = null != Q ? m.default.getPremiumType(Q.planId) : null == Y ? void 0 : Y.premiumType,
            J = r === N.PremiumSubscriptionSKUs.TIER_2 && null != q && [N.PremiumTypes.TIER_0, N.PremiumTypes.TIER_1].includes(q);
        J && (X = p.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
        let Z = null != W && W.status !== O.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, E.isNoneSubscription)(W.planId) && !J,
            $ = Z ? null != F ? F : function(e) {
                let {
                    ctaSubscriptionSkuId: t,
                    currentPremiumType: n
                } = e, i = null, r = null;
                if (null != t && t !== N.PremiumSubscriptionSKUs.LEGACY && t !== N.PremiumSubscriptionSKUs.TIER_0 && t !== N.PremiumSubscriptionSKUs.TIER_1 && t !== N.PremiumSubscriptionSKUs.TIER_2) return {
                    disabledButtonText: i,
                    disabledButtonTooltipText: r
                };
                let s = null != t ? N.PremiumSubscriptionSKUToPremiumType[(0, m.castPremiumSubscriptionAsSkuId)(t)] : null,
                    a = null != s ? N.PremiumTypeOrder[s] : null,
                    o = null != n ? N.PremiumTypeOrder[n] : null;
                return null != o && null != a && a < o ? (i = p.default.Messages.APPLICATION_STORE_GET_PREMIUM, r = p.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != s && null != n && s === n ? (i = p.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, r = p.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == s && null != n && n === N.PremiumTypes.TIER_2 && (r = p.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                    disabledButtonText: i,
                    disabledButtonTooltipText: r
                }
            }({
                ctaSubscriptionSkuId: r,
                currentPremiumType: q
            }) : null;

        function ee(e) {
            var t, n;
            return (0, i.jsxs)(S.default, {
                disabled: Z,
                onClick: z,
                innerClassName: R.premiumSubscribeButton,
                color: r === N.PremiumSubscriptionSKUs.TIER_1 ? o.Button.Colors.PRIMARY : o.Button.Colors.GREEN,
                size: g,
                className: x,
                wrapperClassName: L,
                pauseAnimation: !j || B,
                ...H,
                ...e,
                children: [w && (0, i.jsx)(h.default, {
                    className: s()(R.premiumIcon, P)
                }), (0, i.jsx)("span", {
                    className: s()(R.buttonText, y),
                    children: null !== (n = null !== (t = null == $ ? void 0 : $.disabledButtonText) && void 0 !== t ? t : M) && void 0 !== n ? n : X
                })]
            })
        }
        return (null == $ ? void 0 : $.disabledButtonTooltipText) != null ? (0, i.jsx)(o.Tooltip, {
            text: $.disabledButtonTooltipText,
            children: ee
        }) : ee()
    }
}