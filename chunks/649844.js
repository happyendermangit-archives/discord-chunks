function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
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
        E = n("646718");

    function v(e) {
        let {
            initialPlanId: t,
            followupSKUInfo: v,
            onClose: C,
            onComplete: p,
            onSubscriptionConfirmation: _,
            analyticsLocations: S,
            analyticsObject: I,
            analyticsLocation: N,
            analyticsSourceLocation: m,
            isGift: g = !1,
            giftMessage: A,
            subscriptionTier: R,
            trialId: T,
            postSuccessGuild: L,
            openInvoiceId: M,
            applicationId: w,
            referralTrialOfferId: O,
            giftRecipient: x,
            returnRef: P,
            subscription: y
        } = null != e ? e : {}, V = !1, b = (0, s.v4)(), U = u.default.getCurrentUser(), D = (0, f.isPremiumExactly)(U, E.PremiumTypes.TIER_2);
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
                    loadId: b,
                    subscriptionTier: R,
                    skuId: R,
                    isGift: g,
                    giftMessage: A,
                    giftRecipient: x,
                    initialPlanId: t,
                    followupSKUInfo: v,
                    onClose: (e, t) => {
                        s(), null == C || C(e), e && (null == _ || _(), !g && null != t && t === E.PremiumSubscriptionSKUs.TIER_2 && !D && d.ComponentDispatch.dispatch(h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                    },
                    onComplete: () => {
                        V = !0, null == p || p(), !g && (0, a.setCanPlayWowMoment)(!0)
                    },
                    onSubscriptionConfirmation: _,
                    analyticsLocations: S,
                    analyticsObject: I,
                    analyticsLocation: N,
                    analyticsSourceLocation: m,
                    trialId: T,
                    postSuccessGuild: L,
                    planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: M,
                    applicationId: w,
                    referralTrialOfferId: O,
                    returnRef: P,
                    subscription: y
                })
            }
        }, {
            modalKey: "payment-modal",
            onCloseCallback: () => {
                !V && c.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                    load_id: b,
                    payment_type: h.PurchaseTypeToAnalyticsPaymentType[h.PurchaseTypes.SUBSCRIPTION],
                    location: null != N ? N : I,
                    source: m,
                    subscription_type: h.SubscriptionTypes.PREMIUM,
                    is_gift: g,
                    eligible_for_trial: null != T,
                    application_id: w,
                    location_stack: S
                }), (0, l.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == C || C(V), V && (null == _ || _())
            }
        })
    }
}