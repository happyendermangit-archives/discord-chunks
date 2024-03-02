function(t, e, l) {
    "use strict";
    l.r(e), l.d(e, {
        default: function() {
            return _
        }
    }), l("222007");
    var n = l("37983");
    l("884691");
    var r = l("77078"),
        a = l("404118"),
        s = l("850068"),
        o = l("775433"),
        i = l("521012"),
        u = l("599110"),
        d = l("719923"),
        c = l("49111"),
        f = l("782340");
    async function _(t) {
        let {
            analyticsLocations: e,
            analyticsLocation: _,
            analyticsSourceLocation: p,
            guildId: S,
            closeLayer: L,
            onCloseModal: C,
            totalNumberOfSlotsToAssign: h = 1,
            disablePremiumUpsell: y,
            onSubscriptionConfirmation: E,
            inPopout: m,
            applicationId: O
        } = t, A = m ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, T = i.default.getPremiumTypeSubscription();
        if (null != T && T.isPurchasedExternally && null != T.paymentGateway) {
            null != L && L(), a.default.show({
                title: f.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                    paymentGatewayName: c.PaymentGatewayToFriendlyName[T.paymentGateway]
                }),
                body: f.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
                    paymentGatewayName: c.PaymentGatewayToFriendlyName[T.paymentGateway],
                    subscriptionManagementLink: (0, d.getExternalSubscriptionMethodUrl)(T.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                })
            });
            return
        }
        Promise.all([(0, s.fetchPaymentSources)(), (0, o.fetchPremiumSubscriptionPlans)()]);
        let I = await (0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await l.el("860634").then(l.bind(l, "860634"));
            return l => {
                let {
                    transitionState: r,
                    onClose: a
                } = l;
                return (0, n.jsx)(t, {
                    transitionState: r,
                    onClose: t => {
                        a(), null == C || C(t)
                    },
                    analyticsLocations: e,
                    analyticsLocation: _,
                    analyticsSourceLocation: null != p ? p : _,
                    guildId: S,
                    totalNumberOfSlotsToAssign: h,
                    closeGuildPerksModal: L,
                    disablePremiumUpsell: y,
                    onSubscriptionConfirmation: E,
                    applicationId: O
                })
            }
        }, {
            onCloseCallback: () => {
                u.default.track(c.AnalyticEvents.MODAL_DISMISSED, {
                    type: c.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL,
                    location: _
                })
            },
            onCloseRequest: () => {
                null != I && (0, r.closeModal)(I), null == C || C(!1)
            },
            contextKey: A
        })
    }
}