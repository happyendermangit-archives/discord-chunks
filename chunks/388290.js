function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SubscriptionRecord: function() {
            return f
        },
        default: function() {
            return E
        }
    });
    var i = n("627445"),
        r = n.n(i),
        s = n("666038"),
        a = n("240577"),
        o = n("773336"),
        l = n("195358"),
        u = n("49111"),
        c = n("646718");

    function d(e) {
        return {
            id: e.id,
            planId: e.plan_id,
            quantity: e.quantity
        }
    }
    class f extends s.default {
        static createFromServer(e) {
            return new f({
                id: e.id,
                type: e.type,
                createdAt: new Date(e.created_at),
                canceledAt: null != e.canceled_at ? new Date(e.canceled_at) : null,
                currentPeriodStart: new Date(e.current_period_start),
                currentPeriodEnd: new Date(e.current_period_end),
                status: e.status,
                paymentSourceId: e.payment_source_id,
                paymentGateway: e.payment_gateway,
                paymentGatewayPlanId: e.payment_gateway_plan_id,
                paymentGatewaySubscriptionId: e.payment_gateway_subscription_id,
                trialId: e.trial_id,
                trialEndsAt: e.trial_ends_at,
                items: e.items.map(d),
                renewalMutations: null != e.renewal_mutations ? {
                    items: e.renewal_mutations.items.map(d),
                    paymentGatewayPlanId: e.renewal_mutations.payment_gateway_plan_id
                } : null,
                streakStartedAt: null != e.streak_started_at ? new Date(e.streak_started_at) : null,
                currency: e.currency,
                metadata: e.metadata,
                useStorekitResubscribe: e.use_storekit_resubscribe,
                price: e.price,
                userId: e.user_id,
                ...null != e.latest_invoice ? {
                    latestInvoice: l.default.createInvoiceFromServer(e.latest_invoice)
                } : {}
            })
        }
        getCurrentSubscriptionPlanIdForGroup(e) {
            var t;
            return null === (t = this.items.find(t => e.includes(t.planId))) || void 0 === t ? void 0 : t.planId
        }
        get isPremium() {
            return this.type === u.SubscriptionTypes.PREMIUM
        }
        get planIdForCurrencies() {
            let e;
            return this.isPremium ? (r(this.planIdFromItems, "Premium subscription has no planId for currencies"), e = this.planIdFromItems) : e = this.planId, e
        }
        get planIdFromItems() {
            return this.getCurrentSubscriptionPlanIdForGroup(Object.values(c.SubscriptionPlans))
        }
        get isPurchasedViaApple() {
            return this.paymentGateway === u.PaymentGateways.APPLE
        }
        get isPurchasedViaGoogle() {
            return this.paymentGateway === u.PaymentGateways.GOOGLE
        }
        get isPurchasedExternally() {
            return this.isPurchasedViaApple || this.isPurchasedViaGoogle
        }
        get isOnPlatformMatchingExternalPaymentGateway() {
            return this.isPurchasedViaApple && (0, o.isIOS)() || this.isPurchasedViaGoogle && (0, o.isAndroid)()
        }
        get hasExternalPlanChange() {
            return this.isPurchasedExternally && null != this.renewalMutations && this.paymentGatewayPlanId !== this.renewalMutations.paymentGatewayPlanId
        }
        get hasPremiumNitroMonthly() {
            return null != this.items.find(e => e.planId === c.SubscriptionPlans.PREMIUM_MONTH_TIER_2)
        }
        constructor(e) {
            super(), this.id = e.id, this.type = e.type, this.items = e.items, this.createdAt = e.createdAt, this.canceledAt = e.canceledAt, this.currentPeriodStart = e.currentPeriodStart, this.currentPeriodEnd = e.currentPeriodEnd, this.status = e.status, this.paymentSourceId = e.paymentSourceId, this.paymentGateway = e.paymentGateway, this.paymentGatewayPlanId = e.paymentGatewayPlanId, this.paymentGatewaySubscriptionId = e.paymentGatewaySubscriptionId, this.trialId = e.trialId, this.trialEndsAt = e.trialEndsAt, this.renewalMutations = e.renewalMutations, this.currency = e.currency, this.metadata = e.metadata, this.latestInvoice = e.latestInvoice, this.useStorekitResubscribe = e.useStorekitResubscribe, this.price = e.price, this.userId = e.userId;
            let t = this.renewalMutations,
                n = e.items[0].planId,
                i = null;
            if (e.type === u.SubscriptionTypes.PREMIUM) {
                let r = c.SubscriptionPlanInfo[e.items[0].planId],
                    s = r.interval,
                    o = r.intervalCount;
                n = (0, a.getBasePlanIdForSubscriptionItems)(e.items, s, o), null != t && (i = (0, a.getBasePlanIdForSubscriptionItems)(t.items, s, o))
            } else null != t && t.items.length > 0 && (i = t.items[0].planId);
            this.planId = n, this.additionalPlans = e.items.filter(e => e.planId !== n), null != t && null != i && (t.planId = i, t.additionalPlans = t.items.filter(e => e.planId !== i))
        }
    }
    var E = f
}