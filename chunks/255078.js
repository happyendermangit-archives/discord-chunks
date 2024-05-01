function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SubscriptionRecord: function() {
            return E
        }
    });
    var i = n("512722"),
        r = n.n(i),
        a = n("81825"),
        s = n("491819"),
        o = n("358085"),
        l = n("146528"),
        u = n("981631"),
        d = n("474936");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return {
            id: e.id,
            planId: e.plan_id,
            quantity: e.quantity
        }
    }
    class E extends a.default {
        static createFromServer(e) {
            return new E({
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
                items: e.items.map(c),
                renewalMutations: null != e.renewal_mutations ? {
                    items: e.renewal_mutations.items.map(c),
                    paymentGatewayPlanId: e.renewal_mutations.payment_gateway_plan_id
                } : null,
                streakStartedAt: null != e.streak_started_at ? new Date(e.streak_started_at) : null,
                currency: e.currency,
                pauseEndsAt: null != e.pause_ends_at ? new Date(e.pause_ends_at) : null,
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
            return this.isPremium ? (r()(this.planIdFromItems, "Premium subscription has no planId for currencies"), e = this.planIdFromItems) : e = this.planId, e
        }
        get planIdFromItems() {
            return this.getCurrentSubscriptionPlanIdForGroup(Object.values(d.SubscriptionPlans))
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
            return null != this.items.find(e => e.planId === d.SubscriptionPlans.PREMIUM_MONTH_TIER_2)
        }
        get isPausedOrPausePending() {
            return u.SubscriptionStatusTypesSets.ALL_PAUSE.has(this.status)
        }
        get isPaused() {
            return this.status === u.SubscriptionStatusTypes.PAUSED
        }
        constructor(e) {
            super(), _(this, "id", void 0), _(this, "type", void 0), _(this, "items", void 0), _(this, "createdAt", void 0), _(this, "canceledAt", void 0), _(this, "currentPeriodStart", void 0), _(this, "currentPeriodEnd", void 0), _(this, "status", void 0), _(this, "paymentSourceId", void 0), _(this, "paymentGateway", void 0), _(this, "paymentGatewayPlanId", void 0), _(this, "paymentGatewaySubscriptionId", void 0), _(this, "trialId", void 0), _(this, "trialEndsAt", void 0), _(this, "renewalMutations", void 0), _(this, "streakStartedAt", void 0), _(this, "currency", void 0), _(this, "pauseEndsAt", void 0), _(this, "planId", void 0), _(this, "additionalPlans", void 0), _(this, "metadata", void 0), _(this, "latestInvoice", void 0), _(this, "useStorekitResubscribe", void 0), _(this, "price", void 0), _(this, "userId", void 0), this.id = e.id, this.type = e.type, this.items = e.items, this.createdAt = e.createdAt, this.canceledAt = e.canceledAt, this.currentPeriodStart = e.currentPeriodStart, this.currentPeriodEnd = e.currentPeriodEnd, this.status = e.status, this.paymentSourceId = e.paymentSourceId, this.paymentGateway = e.paymentGateway, this.paymentGatewayPlanId = e.paymentGatewayPlanId, this.paymentGatewaySubscriptionId = e.paymentGatewaySubscriptionId, this.trialId = e.trialId, this.trialEndsAt = e.trialEndsAt, this.renewalMutations = e.renewalMutations, this.currency = e.currency, this.pauseEndsAt = e.pauseEndsAt, this.metadata = e.metadata, this.latestInvoice = e.latestInvoice, this.useStorekitResubscribe = e.useStorekitResubscribe, this.price = e.price, this.userId = e.userId;
            let t = this.renewalMutations,
                n = e.items[0].planId,
                i = null;
            if (e.type === u.SubscriptionTypes.PREMIUM) {
                let r = d.SubscriptionPlanInfo[e.items[0].planId],
                    a = r.interval,
                    o = r.intervalCount;
                n = (0, s.getBasePlanIdForSubscriptionItems)(e.items, a, o), null != t && (i = (0, s.getBasePlanIdForSubscriptionItems)(t.items, a, o))
            } else null != t && t.items.length > 0 && (i = t.items[0].planId);
            this.planId = n, this.additionalPlans = e.items.filter(e => e.planId !== n), null != t && null != i && (t.planId = i, t.additionalPlans = t.items.filter(e => e.planId !== i))
        }
    }
    t.default = E
}