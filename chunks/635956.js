function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var r = n("37983");
    n("884691");
    var i = n("414456"),
        l = n.n(i),
        a = n("446674"),
        s = n("77078"),
        o = n("79112"),
        u = n("685665"),
        c = n("788506"),
        d = n("649844"),
        f = n("393414"),
        m = n("797647"),
        _ = n("697218"),
        E = n("521012"),
        I = n("471671"),
        T = n("181114"),
        p = n("978679"),
        S = n("216422"),
        P = n("719923"),
        R = n("646718"),
        C = n("49111"),
        O = n("782340"),
        M = n("917746"),
        g = function(e) {
            let {
                isGift: t,
                subscriptionTier: i,
                onClick: g,
                size: h,
                className: L,
                trialId: N,
                isTrialCTA: v,
                buttonText: x,
                buttonTextClassName: A,
                iconClassName: U,
                postSuccessGuild: b,
                onSubscribeModalClose: y,
                premiumModalAnalyticsLocation: D,
                showIcon: j = !0,
                disableShine: F,
                applicationId: B,
                giftMessage: k,
                overrideDisabledButtonText: w,
                shinyButtonClassName: G,
                ...H
            } = e, K = (0, a.useStateFromStores)([_.default], () => _.default.getCurrentUser()), V = (0, a.useStateFromStores)([I.default], () => I.default.isFocused()), W = (0, a.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
                analyticsLocations: z
            } = (0, u.default)(), Z = e => {
                if (e.preventDefault(), null == K) {
                    (0, f.transitionTo)(C.Routes.LOGIN);
                    return
                }
                if (null == g || g(e), (null == W ? void 0 : W.status) === C.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                    (0, c.trackPremiumSettingsPaneOpened)(), o.default.open(C.UserSettingsSections.PREMIUM), null == y || y(!1);
                    return
                }! function(e) {
                    let {
                        isClaimed: t,
                        isVerified: i,
                        isGift: l,
                        subscriptionTier: a,
                        trialId: o,
                        postSuccessGuild: u,
                        onSubscribeModalClose: c,
                        analyticsLocations: f,
                        premiumModalAnalyticsLocation: m,
                        applicationId: _,
                        giftMessage: E
                    } = e;
                    if (!t) {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("984599").then(n.bind(n, "984599"));
                            return t => {
                                let {
                                    onClose: n,
                                    ...i
                                } = t;
                                return (0, r.jsx)(e, {
                                    ...i,
                                    onClose: n
                                })
                            }
                        });
                        return
                    }
                    if (!i) {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("899917").then(n.bind(n, "899917"));
                            return t => {
                                let {
                                    onClose: n,
                                    ...i
                                } = t;
                                return (0, r.jsx)(e, {
                                    ...i,
                                    onClose: n
                                })
                            }
                        });
                        return
                    }
                    let I = C.AnalyticsObjectTypes.BUY;
                    null != o ? I = C.AnalyticsObjectTypes.TRIAL : l && (I = C.AnalyticsObjectTypes.GIFT), (0, d.default)({
                        isGift: l,
                        initialPlanId: null,
                        subscriptionTier: a,
                        analyticsLocations: f,
                        analyticsObject: {
                            object: C.AnalyticsObjects.BUTTON_CTA,
                            objectType: I,
                            ...m
                        },
                        trialId: o,
                        postSuccessGuild: u,
                        onClose: c,
                        applicationId: _,
                        giftMessage: E
                    })
                }({
                    isClaimed: K.isClaimed(),
                    isVerified: K.verified,
                    isGift: t,
                    subscriptionTier: i,
                    trialId: N,
                    postSuccessGuild: b,
                    onSubscribeModalClose: y,
                    analyticsLocations: z,
                    premiumModalAnalyticsLocation: D,
                    applicationId: B,
                    giftMessage: k
                })
            };
            if (v) return (0, r.jsxs)(s.Button, {
                size: h,
                className: L,
                innerClassName: M.premiumSubscribeButton,
                look: s.Button.Looks.INVERTED,
                onClick: Z,
                ...H,
                children: [j && (0, r.jsx)(S.default, {
                    className: M.premiumIcon
                }), (0, r.jsx)("span", {
                    className: l(M.buttonText, A),
                    children: null != x ? x : O.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                })]
            });
            if (t) return (0, r.jsxs)(s.Button, {
                size: h,
                className: L,
                innerClassName: M.giftButton,
                color: s.Button.Colors.PRIMARY,
                onClick: Z,
                ...H,
                children: [(0, r.jsx)(p.default, {
                    className: M.giftIcon
                }), (0, r.jsx)("span", {
                    className: l(M.buttonText, A),
                    children: null != x ? x : O.default.Messages.PREMIUM_GIFTING_BUTTON
                })]
            });
            let Y = O.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                X = null != W ? (0, P.getPremiumPlanItem)(W) : null,
                J = null != X ? P.default.getPremiumType(X.planId) : null == K ? void 0 : K.premiumType,
                q = i === R.PremiumSubscriptionSKUs.TIER_2 && null != J && [R.PremiumTypes.TIER_0, R.PremiumTypes.TIER_1].includes(J);
            q && (Y = O.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
            let Q = null != W && W.status !== C.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, m.isNoneSubscription)(W.planId) && !q,
                $ = Q ? null != w ? w : function(e) {
                    let {
                        ctaSubscriptionSkuId: t,
                        currentPremiumType: n
                    } = e, r = null, i = null;
                    if (null != t && t !== R.PremiumSubscriptionSKUs.LEGACY && t !== R.PremiumSubscriptionSKUs.TIER_0 && t !== R.PremiumSubscriptionSKUs.TIER_1 && t !== R.PremiumSubscriptionSKUs.TIER_2) return {
                        disabledButtonText: r,
                        disabledButtonTooltipText: i
                    };
                    let l = null != t ? R.PremiumSubscriptionSKUToPremiumType[(0, P.castPremiumSubscriptionAsSkuId)(t)] : null,
                        a = null != l ? R.PremiumTypeOrder[l] : null,
                        s = null != n ? R.PremiumTypeOrder[n] : null;
                    return null != s && null != a && a < s ? (r = O.default.Messages.APPLICATION_STORE_GET_PREMIUM, i = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != l && null != n && l === n ? (r = O.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, i = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == l && null != n && n === R.PremiumTypes.TIER_2 && (i = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                        disabledButtonText: r,
                        disabledButtonTooltipText: i
                    }
                }({
                    ctaSubscriptionSkuId: i,
                    currentPremiumType: J
                }) : null;

            function ee(e) {
                var t, n;
                return (0, r.jsxs)(T.default, {
                    disabled: Q,
                    onClick: Z,
                    innerClassName: M.premiumSubscribeButton,
                    color: i === R.PremiumSubscriptionSKUs.TIER_1 ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
                    size: h,
                    className: G,
                    wrapperClassName: L,
                    pauseAnimation: !V || F,
                    ...H,
                    ...e,
                    children: [j && (0, r.jsx)(S.default, {
                        className: l(M.premiumIcon, U)
                    }), (0, r.jsx)("span", {
                        className: l(M.buttonText, A),
                        children: null !== (n = null !== (t = null == $ ? void 0 : $.disabledButtonText) && void 0 !== t ? t : x) && void 0 !== n ? n : Y
                    })]
                })
            }
            return (null == $ ? void 0 : $.disabledButtonTooltipText) != null ? (0, r.jsx)(s.Tooltip, {
                text: $.disabledButtonTooltipText,
                children: ee
            }) : ee()
        }
}