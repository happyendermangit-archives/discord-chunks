function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("153832"),
        s = n("481060"),
        a = n("976255"),
        o = n("667"),
        l = n("138464"),
        u = n("594174"),
        d = n("626135"),
        _ = n("585483"),
        c = n("74538"),
        E = n("981631"),
        I = n("474936");

    function T(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: T,
            onClose: f,
            onComplete: S,
            onSubscriptionConfirmation: h,
            analyticsLocations: A,
            analyticsObject: m,
            analyticsLocation: N,
            analyticsSourceLocation: p,
            isGift: O = !1,
            giftMessage: R,
            subscriptionTier: C,
            trialId: g,
            postSuccessGuild: L,
            openInvoiceId: D,
            applicationId: v,
            referralTrialOfferId: M,
            giftRecipient: y,
            returnRef: P,
            subscription: U,
            skipConfirm: b
        } = null != e ? e : {}, G = !1, w = (0, r.v4)(), B = u.default.getCurrentUser(), k = (0, c.isPremiumExactly)(B, I.PremiumTypes.TIER_2);
        (0, s.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("40326"), n.e("23357"), n.e("15972"), n.e("58625"), n.e("61247"), n.e("6416"), n.e("63438"), n.e("62511"), n.e("58600"), n.e("8016"), n.e("32776"), n.e("57878"), n.e("95900"), n.e("17938"), n.e("84992"), n.e("19959"), n.e("34853")]).then(n.bind(n, "7305"));
            return n => {
                let {
                    onClose: r,
                    ...s
                } = n;
                return (0, i.jsx)(e, {
                    ...s,
                    loadId: w,
                    subscriptionTier: C,
                    skuId: (0, c.castPremiumSubscriptionAsSkuId)(C),
                    isGift: O,
                    giftMessage: R,
                    giftRecipient: y,
                    initialPlanId: t,
                    followupSKUInfo: T,
                    onClose: (e, t) => {
                        r(), null == f || f(e), e && (null == h || h(), !O && null != t && t === I.PremiumSubscriptionSKUs.TIER_2 && !k && _.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                    },
                    onComplete: () => {
                        G = !0, null == S || S(), !O && (0, l.setCanPlayWowMoment)(!0)
                    },
                    onSubscriptionConfirmation: h,
                    analyticsLocations: A,
                    analyticsObject: m,
                    analyticsLocation: N,
                    analyticsSourceLocation: p,
                    trialId: g,
                    postSuccessGuild: L,
                    planGroup: I.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: D,
                    applicationId: v,
                    referralTrialOfferId: M,
                    returnRef: P,
                    subscription: U,
                    skipConfirm: !!b
                })
            }
        }, {
            modalKey: "payment-modal",
            onCloseCallback: () => {
                !G && d.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                    load_id: w,
                    payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                    location: null != N ? N : m,
                    source: p,
                    subscription_type: E.SubscriptionTypes.PREMIUM,
                    is_gift: O,
                    eligible_for_trial: null != g,
                    application_id: v,
                    location_stack: A
                }), (0, a.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == f || f(G), G && (null == h || h())
            }
        })
    }
}