function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    });
    var r = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        l = n("446674"),
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
        g = n("917746"),
        M = function(e) {
            let {
                isGift: t,
                subscriptionTier: i,
                onClick: M,
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
            } = e, K = (0, l.useStateFromStores)([_.default], () => _.default.getCurrentUser()), V = (0, l.useStateFromStores)([I.default], () => I.default.isFocused()), W = (0, l.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
                analyticsLocations: z
            } = (0, u.default)(), Z = e => {
                if (e.preventDefault(), null == K) {
                    (0, f.transitionTo)(C.Routes.LOGIN);
                    return
                }
                if (null == M || M(e), (null == W ? void 0 : W.status) === C.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                    (0, c.trackPremiumSettingsPaneOpened)(), o.default.open(C.UserSettingsSections.PREMIUM), null == y || y(!1);
                    return
                }! function(e) {
                    let {
                        isClaimed: t,
                        isVerified: i,
                        isGift: a,
                        subscriptionTier: l,
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
                    null != o ? I = C.AnalyticsObjectTypes.TRIAL : a && (I = C.AnalyticsObjectTypes.GIFT), (0, d.default)({
                        isGift: a,
                        initialPlanId: null,
                        subscriptionTier: l,
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
                innerClassName: g.premiumSubscribeButton,
                look: s.Button.Looks.INVERTED,
                onClick: Z,
                ...H,
                children: [j && (0, r.jsx)(S.default, {
                    className: g.premiumIcon
                }), (0, r.jsx)("span", {
                    className: a(g.buttonText, A),
                    children: null != x ? x : O.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                })]
            });
            if (t) return (0, r.jsxs)(s.Button, {
                size: h,
                className: L,
                innerClassName: g.giftButton,
                color: s.Button.Colors.PRIMARY,
                onClick: Z,
                ...H,
                children: [(0, r.jsx)(p.default, {
                    className: g.giftIcon
                }), (0, r.jsx)("span", {
                    className: a(g.buttonText, A),
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
                    let a = null != t ? R.PremiumSubscriptionSKUToPremiumType[(0, P.castPremiumSubscriptionAsSkuId)(t)] : null,
                        l = null != a ? R.PremiumTypeOrder[a] : null,
                        s = null != n ? R.PremiumTypeOrder[n] : null;
                    return null != s && null != l && l < s ? (r = O.default.Messages.APPLICATION_STORE_GET_PREMIUM, i = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != a && null != n && a === n ? (r = O.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, i = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == a && null != n && n === R.PremiumTypes.TIER_2 && (i = O.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
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
                    innerClassName: g.premiumSubscribeButton,
                    color: i === R.PremiumSubscriptionSKUs.TIER_1 ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
                    size: h,
                    className: G,
                    wrapperClassName: L,
                    pauseAnimation: !V || F,
                    ...H,
                    ...e,
                    children: [j && (0, r.jsx)(S.default, {
                        className: a(g.premiumIcon, U)
                    }), (0, r.jsx)("span", {
                        className: a(g.buttonText, A),
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