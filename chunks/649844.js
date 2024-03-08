function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("748820"),
        r = n("77078"),
        l = n("112679"),
        a = n("55689"),
        o = n("676379"),
        u = n("697218"),
        c = n("599110"),
        d = n("659500"),
        f = n("719923"),
        h = n("49111"),
        v = n("646718");

    function E(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: E,
            onClose: C,
            onComplete: p,
            onSubscriptionConfirmation: m,
            analyticsLocations: _,
            analyticsObject: S,
            analyticsLocation: I,
            analyticsSourceLocation: N,
            isGift: g = !1,
            giftMessage: T,
            subscriptionTier: R,
            trialId: A,
            postSuccessGuild: x,
            openInvoiceId: L,
            applicationId: M,
            referralTrialOfferId: w,
            giftRecipient: y,
            returnRef: b,
            subscription: P
        } = null != e ? e : {}, V = !1, O = (0, s.v4)(), j = u.default.getCurrentUser(), U = (0, f.isPremiumExactly)(j, v.PremiumTypes.TIER_2);
        (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("646139").then(n.bind(n, "646139"));
            return n => {
                let {
                    onClose: s,
                    ...r
                } = n;
                return (0, i.jsx)(e, {
                    ...r,
                    loadId: O,
                    subscriptionTier: R,
                    skuId: (0, f.castPremiumSubscriptionAsSkuId)(R),
                    isGift: g,
                    giftMessage: T,
                    giftRecipient: y,
                    initialPlanId: t,
                    followupSKUInfo: E,
                    onClose: (e, t) => {
                        s(), null == C || C(e), e && (null == m || m(), !g && null != t && t === v.PremiumSubscriptionSKUs.TIER_2 && !U && d.ComponentDispatch.dispatch(h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                    },
                    onComplete: () => {
                        V = !0, null == p || p(), !g && (0, o.setCanPlayWowMoment)(!0)
                    },
                    onSubscriptionConfirmation: m,
                    analyticsLocations: _,
                    analyticsObject: S,
                    analyticsLocation: I,
                    analyticsSourceLocation: N,
                    trialId: A,
                    postSuccessGuild: x,
                    planGroup: v.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: L,
                    applicationId: M,
                    referralTrialOfferId: w,
                    returnRef: b,
                    subscription: P
                })
            }
        }, {
            modalKey: "payment-modal",
            onCloseCallback: () => {
                !V && c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                    load_id: O,
                    payment_type: h.PurchaseTypeToAnalyticsPaymentType[h.PurchaseTypes.SUBSCRIPTION],
                    location: null != I ? I : S,
                    source: N,
                    subscription_type: h.SubscriptionTypes.PREMIUM,
                    is_gift: g,
                    eligible_for_trial: null != A,
                    application_id: M,
                    location_stack: _
                }), (0, l.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == C || C(V), V && (null == m || m())
            }
        })
    }
}