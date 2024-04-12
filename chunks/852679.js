function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("668781"),
        a = n("355467"),
        o = n("821849"),
        l = n("78839"),
        u = n("626135"),
        d = n("74538"),
        _ = n("981631"),
        c = n("689938");
    async function E(e) {
        let {
            analyticsLocations: t,
            analyticsLocation: E,
            analyticsSourceLocation: I,
            guildId: T,
            closeLayer: f,
            onCloseModal: S,
            totalNumberOfSlotsToAssign: A = 1,
            disablePremiumUpsell: h,
            onSubscriptionConfirmation: m,
            inPopout: N,
            applicationId: O
        } = e, p = N ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, R = l.default.getPremiumTypeSubscription();
        if (null != R && R.isPurchasedExternally && null != R.paymentGateway) {
            null != f && f(), s.default.show({
                title: c.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                    paymentGatewayName: _.PaymentGatewayToFriendlyName[R.paymentGateway]
                }),
                body: c.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
                    paymentGatewayName: _.PaymentGatewayToFriendlyName[R.paymentGateway],
                    subscriptionManagementLink: (0, d.getExternalSubscriptionMethodUrl)(R.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                })
            });
            return
        }
        Promise.all([(0, a.fetchPaymentSources)(), (0, o.fetchPremiumSubscriptionPlans)()]);
        let C = await (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("40326"), n.e("23357"), n.e("15972"), n.e("58625"), n.e("14720"), n.e("63438"), n.e("62511"), n.e("61247"), n.e("58600"), n.e("8016"), n.e("22646"), n.e("80593"), n.e("87221")]).then(n.bind(n, "343649"));
            return n => {
                let {
                    transitionState: r,
                    onClose: s
                } = n;
                return (0, i.jsx)(e, {
                    transitionState: r,
                    onClose: e => {
                        s(), null == S || S(e)
                    },
                    analyticsLocations: t,
                    analyticsLocation: E,
                    analyticsSourceLocation: null != I ? I : E,
                    guildId: T,
                    totalNumberOfSlotsToAssign: A,
                    closeGuildPerksModal: f,
                    disablePremiumUpsell: h,
                    onSubscriptionConfirmation: m,
                    applicationId: O
                })
            }
        }, {
            onCloseCallback: () => {
                u.default.track(_.AnalyticEvents.MODAL_DISMISSED, {
                    type: _.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL,
                    location: E
                })
            },
            onCloseRequest: () => {
                null != C && (0, r.closeModal)(C), null == S || S(!1)
            },
            contextKey: p
        })
    }
}