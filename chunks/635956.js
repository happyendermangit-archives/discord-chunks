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
        T = n("471671"),
        I = n("181114"),
        C = n("978679"),
        p = n("216422"),
        S = n("719923"),
        P = n("646718"),
        R = n("49111"),
        L = n("782340"),
        O = n("917746"),
        M = function(e) {
            let {
                isGift: t,
                subscriptionTier: i,
                onClick: M,
                size: g,
                className: h,
                trialId: x,
                isTrialCTA: v,
                buttonText: N,
                buttonTextClassName: A,
                iconClassName: U,
                postSuccessGuild: b,
                onSubscribeModalClose: D,
                premiumModalAnalyticsLocation: y,
                showIcon: j = !0,
                disableShine: F,
                applicationId: B,
                giftMessage: k,
                overrideDisabledButtonText: w,
                shinyButtonClassName: H,
                ...G
            } = e, K = (0, a.useStateFromStores)([_.default], () => _.default.getCurrentUser()), V = (0, a.useStateFromStores)([T.default], () => T.default.isFocused()), Z = (0, a.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
                analyticsLocations: W
            } = (0, u.default)(), z = e => {
                if (e.preventDefault(), null == K) {
                    (0, f.transitionTo)(R.Routes.LOGIN);
                    return
                }
                if (null == M || M(e), (null == Z ? void 0 : Z.status) === R.SubscriptionStatusTypes.ACCOUNT_HOLD) {
                    (0, c.trackPremiumSettingsPaneOpened)(), o.default.open(R.UserSettingsSections.PREMIUM), null == D || D(!1);
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
                    let T = R.AnalyticsObjectTypes.BUY;
                    null != o ? T = R.AnalyticsObjectTypes.TRIAL : l && (T = R.AnalyticsObjectTypes.GIFT), (0, d.default)({
                        isGift: l,
                        initialPlanId: null,
                        subscriptionTier: a,
                        analyticsLocations: f,
                        analyticsObject: {
                            object: R.AnalyticsObjects.BUTTON_CTA,
                            objectType: T,
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
                    trialId: x,
                    postSuccessGuild: b,
                    onSubscribeModalClose: D,
                    analyticsLocations: W,
                    premiumModalAnalyticsLocation: y,
                    applicationId: B,
                    giftMessage: k
                })
            };
            if (v) return (0, r.jsxs)(s.Button, {
                size: g,
                className: h,
                innerClassName: O.premiumSubscribeButton,
                look: s.Button.Looks.INVERTED,
                onClick: z,
                ...G,
                children: [j && (0, r.jsx)(p.default, {
                    className: O.premiumIcon
                }), (0, r.jsx)("span", {
                    className: l(O.buttonText, A),
                    children: null != N ? N : L.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
                })]
            });
            if (t) return (0, r.jsxs)(s.Button, {
                size: g,
                className: h,
                innerClassName: O.giftButton,
                color: s.Button.Colors.PRIMARY,
                onClick: z,
                ...G,
                children: [(0, r.jsx)(C.default, {
                    className: O.giftIcon
                }), (0, r.jsx)("span", {
                    className: l(O.buttonText, A),
                    children: null != N ? N : L.default.Messages.PREMIUM_GIFTING_BUTTON
                })]
            });
            let Y = L.default.Messages.APPLICATION_STORE_GET_PREMIUM,
                X = null != Z ? (0, S.getPremiumPlanItem)(Z) : null,
                J = null != X ? S.default.getPremiumType(X.planId) : null == K ? void 0 : K.premiumType,
                q = i === P.PremiumSubscriptionSKUs.TIER_2 && null != J && [P.PremiumTypes.TIER_0, P.PremiumTypes.TIER_1].includes(J);
            q && (Y = L.default.Messages.BILLING_SWITCH_PLAN_UPGRADE);
            let Q = null != Z && Z.status !== R.SubscriptionStatusTypes.ACCOUNT_HOLD && !(0, m.isNoneSubscription)(Z.planId) && !q,
                $ = Q ? null != w ? w : function(e) {
                    let {
                        ctaSubscriptionSkuId: t,
                        currentPremiumType: n
                    } = e, r = null, i = null;
                    if (null != t && t !== P.PremiumSubscriptionSKUs.LEGACY && t !== P.PremiumSubscriptionSKUs.TIER_0 && t !== P.PremiumSubscriptionSKUs.TIER_1 && t !== P.PremiumSubscriptionSKUs.TIER_2) return {
                        disabledButtonText: r,
                        disabledButtonTooltipText: i
                    };
                    let l = null != t ? P.PremiumSubscriptionSKUToPremiumType[(0, S.castPremiumSubscriptionAsSkuId)(t)] : null,
                        a = null != l ? P.PremiumTypeOrder[l] : null,
                        s = null != n ? P.PremiumTypeOrder[n] : null;
                    return null != s && null != a && a < s ? (r = L.default.Messages.APPLICATION_STORE_GET_PREMIUM, i = L.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null != l && null != n && l === n ? (r = L.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, i = L.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP) : null == l && null != n && n === P.PremiumTypes.TIER_2 && (i = L.default.Messages.PREMIUM_SUBSCRIPTION_BUTTON_DISABLED_MANAGE_PLAN_TOOLTIP), {
                        disabledButtonText: r,
                        disabledButtonTooltipText: i
                    }
                }({
                    ctaSubscriptionSkuId: i,
                    currentPremiumType: J
                }) : null;

            function ee(e) {
                var t, n;
                return (0, r.jsxs)(I.default, {
                    disabled: Q,
                    onClick: z,
                    innerClassName: O.premiumSubscribeButton,
                    color: i === P.PremiumSubscriptionSKUs.TIER_1 ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
                    size: g,
                    className: H,
                    wrapperClassName: h,
                    pauseAnimation: !V || F,
                    ...G,
                    ...e,
                    children: [j && (0, r.jsx)(p.default, {
                        className: l(O.premiumIcon, U)
                    }), (0, r.jsx)("span", {
                        className: l(O.buttonText, A),
                        children: null !== (n = null !== (t = null == $ ? void 0 : $.disabledButtonText) && void 0 !== t ? t : N) && void 0 !== n ? n : Y
                    })]
                })
            }
            return (null == $ ? void 0 : $.disabledButtonTooltipText) != null ? (0, r.jsx)(s.Tooltip, {
                text: $.disabledButtonTooltipText,
                children: ee
            }) : ee()
        }
}