function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("748820"),
        r = n("77078"),
        l = n("112679"),
        o = n("55689"),
        a = n("676379"),
        u = n("697218"),
        c = n("599110"),
        d = n("659500"),
        f = n("719923"),
        h = n("49111"),
        v = n("646718");

    function C(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: C,
            onClose: E,
            onComplete: p,
            onSubscriptionConfirmation: _,
            analyticsLocations: I,
            analyticsObject: S,
            analyticsLocation: m,
            analyticsSourceLocation: N,
            isGift: g = !1,
            giftMessage: R,
            subscriptionTier: A,
            trialId: T,
            postSuccessGuild: L,
            openInvoiceId: M,
            applicationId: x,
            referralTrialOfferId: w,
            giftRecipient: P,
            returnRef: O,
            subscription: b
        } = null != e ? e : {}, V = !1, y = (0, s.v4)(), H = u.default.getCurrentUser(), j = (0, f.isPremiumExactly)(H, v.PremiumTypes.TIER_2);
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
                    loadId: y,
                    subscriptionTier: A,
                    skuId: (0, f.castPremiumSubscriptionAsSkuId)(A),
                    isGift: g,
                    giftMessage: R,
                    giftRecipient: P,
                    initialPlanId: t,
                    followupSKUInfo: C,
                    onClose: (e, t) => {
                        s(), null == E || E(e), e && (null == _ || _(), !g && null != t && t === v.PremiumSubscriptionSKUs.TIER_2 && !j && d.ComponentDispatch.dispatch(h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                    },
                    onComplete: () => {
                        V = !0, null == p || p(), !g && (0, a.setCanPlayWowMoment)(!0)
                    },
                    onSubscriptionConfirmation: _,
                    analyticsLocations: I,
                    analyticsObject: S,
                    analyticsLocation: m,
                    analyticsSourceLocation: N,
                    trialId: T,
                    postSuccessGuild: L,
                    planGroup: v.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: M,
                    applicationId: x,
                    referralTrialOfferId: w,
                    returnRef: O,
                    subscription: b
                })
            }
        }, {
            modalKey: "payment-modal",
            onCloseCallback: () => {
                !V && c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                    load_id: y,
                    payment_type: h.PurchaseTypeToAnalyticsPaymentType[h.PurchaseTypes.SUBSCRIPTION],
                    location: null != m ? m : S,
                    source: N,
                    subscription_type: h.SubscriptionTypes.PREMIUM,
                    is_gift: g,
                    eligible_for_trial: null != T,
                    application_id: x,
                    location_stack: I
                }), (0, l.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == E || E(V), V && (null == _ || _())
            }
        })
    }
}