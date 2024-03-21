function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return _
        }
    }), n("222007");
    var l = n("37983");
    n("884691");
    var r = n("77078"),
        a = n("404118"),
        s = n("850068"),
        o = n("775433"),
        i = n("521012"),
        u = n("599110"),
        d = n("719923"),
        c = n("49111"),
        f = n("782340");
    async function _(t) {
        let {
            analyticsLocations: e,
            analyticsLocation: _,
            analyticsSourceLocation: p,
            guildId: S,
            closeLayer: L,
            onCloseModal: C,
            totalNumberOfSlotsToAssign: h = 1,
            disablePremiumUpsell: T,
            onSubscriptionConfirmation: y,
            inPopout: E,
            applicationId: m
        } = t, O = E ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, A = i.default.getPremiumTypeSubscription();
        if (null != A && A.isPurchasedExternally && null != A.paymentGateway) {
            null != L && L(), a.default.show({
                title: f.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                    paymentGatewayName: c.PaymentGatewayToFriendlyName[A.paymentGateway]
                }),
                body: f.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
                    paymentGatewayName: c.PaymentGatewayToFriendlyName[A.paymentGateway],
                    subscriptionManagementLink: (0, d.getExternalSubscriptionMethodUrl)(A.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                })
            });
            return
        }
        Promise.all([(0, s.fetchPaymentSources)(), (0, o.fetchPremiumSubscriptionPlans)()]);
        let I = await (0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await n.el("860634").then(n.bind(n, "860634"));
            return n => {
                let {
                    transitionState: r,
                    onClose: a
                } = n;
                return (0, l.jsx)(t, {
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
                    disablePremiumUpsell: T,
                    onSubscriptionConfirmation: y,
                    applicationId: m
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
            contextKey: O
        })
    }
}