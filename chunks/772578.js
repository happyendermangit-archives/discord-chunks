function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SubscriptionRecord: function() {
            return y
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("864842"),
        a = n("682469"),
        u = n("374550"),
        s = n("313498"),
        l = n("281767"),
        c = n("868615");

    function f(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function m(e) {
        return {
            id: e.id,
            planId: e.plan_id,
            quantity: e.quantity
        }
    }
    var y = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(h, e);
        var t, n, r, i, y, I = (t = h, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = E(t);
            if (n) {
                var a = E(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : f(e)
        });

        function h(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, h), _(f(t = I.call(this)), "id", void 0), _(f(t), "type", void 0), _(f(t), "items", void 0), _(f(t), "createdAt", void 0), _(f(t), "canceledAt", void 0), _(f(t), "currentPeriodStart", void 0), _(f(t), "currentPeriodEnd", void 0), _(f(t), "status", void 0), _(f(t), "paymentSourceId", void 0), _(f(t), "paymentGateway", void 0), _(f(t), "paymentGatewayPlanId", void 0), _(f(t), "paymentGatewaySubscriptionId", void 0), _(f(t), "trialId", void 0), _(f(t), "trialEndsAt", void 0), _(f(t), "renewalMutations", void 0), _(f(t), "streakStartedAt", void 0), _(f(t), "currency", void 0), _(f(t), "pauseEndsAt", void 0), _(f(t), "planId", void 0), _(f(t), "additionalPlans", void 0), _(f(t), "metadata", void 0), _(f(t), "latestInvoice", void 0), _(f(t), "useStorekitResubscribe", void 0), _(f(t), "price", void 0), _(f(t), "userId", void 0), t.id = e.id, t.type = e.type, t.items = e.items, t.createdAt = e.createdAt, t.canceledAt = e.canceledAt, t.currentPeriodStart = e.currentPeriodStart, t.currentPeriodEnd = e.currentPeriodEnd, t.status = e.status, t.paymentSourceId = e.paymentSourceId, t.paymentGateway = e.paymentGateway, t.paymentGatewayPlanId = e.paymentGatewayPlanId, t.paymentGatewaySubscriptionId = e.paymentGatewaySubscriptionId, t.trialId = e.trialId, t.trialEndsAt = e.trialEndsAt, t.renewalMutations = e.renewalMutations, t.currency = e.currency, t.pauseEndsAt = e.pauseEndsAt, t.metadata = e.metadata, t.latestInvoice = e.latestInvoice, t.useStorekitResubscribe = e.useStorekitResubscribe, t.price = e.price, t.userId = e.userId;
            var t, n = t.renewalMutations,
                r = e.items[0].planId,
                o = null;
            if (e.type === l.SubscriptionTypes.PREMIUM) {
                var i = c.SubscriptionPlanInfo[e.items[0].planId],
                    u = i.interval,
                    s = i.intervalCount;
                r = (0, a.getBasePlanIdForSubscriptionItems)(e.items, u, s), null != n && (o = (0, a.getBasePlanIdForSubscriptionItems)(n.items, u, s))
            } else null != n && n.items.length > 0 && (o = n.items[0].planId);
            return t.planId = r, t.additionalPlans = e.items.filter(function(e) {
                return e.planId !== r
            }), null != n && null != o && (n.planId = o, n.additionalPlans = n.items.filter(function(e) {
                return e.planId !== o
            })), t
        }
        return r = h, i = [{
            key: "getCurrentSubscriptionPlanIdForGroup",
            value: function(e) {
                var t;
                return null === (t = this.items.find(function(t) {
                    return e.includes(t.planId)
                })) || void 0 === t ? void 0 : t.planId
            }
        }, {
            key: "isPremium",
            get: function() {
                return this.type === l.SubscriptionTypes.PREMIUM
            }
        }, {
            key: "planIdForCurrencies",
            get: function() {
                var e;
                return this.isPremium ? (o()(this.planIdFromItems, "Premium subscription has no planId for currencies"), e = this.planIdFromItems) : e = this.planId, e
            }
        }, {
            key: "planIdFromItems",
            get: function() {
                return this.getCurrentSubscriptionPlanIdForGroup(Object.values(c.SubscriptionPlans))
            }
        }, {
            key: "isPurchasedViaApple",
            get: function() {
                return this.paymentGateway === l.PaymentGateways.APPLE
            }
        }, {
            key: "isPurchasedViaGoogle",
            get: function() {
                return this.paymentGateway === l.PaymentGateways.GOOGLE
            }
        }, {
            key: "isPurchasedExternally",
            get: function() {
                return this.isPurchasedViaApple || this.isPurchasedViaGoogle
            }
        }, {
            key: "isOnPlatformMatchingExternalPaymentGateway",
            get: function() {
                return this.isPurchasedViaApple && (0, u.isIOS)() || this.isPurchasedViaGoogle && (0, u.isAndroid)()
            }
        }, {
            key: "hasExternalPlanChange",
            get: function() {
                return this.isPurchasedExternally && null != this.renewalMutations && this.paymentGatewayPlanId !== this.renewalMutations.paymentGatewayPlanId
            }
        }, {
            key: "hasPremiumNitroMonthly",
            get: function() {
                return null != this.items.find(function(e) {
                    return e.planId === c.SubscriptionPlans.PREMIUM_MONTH_TIER_2
                })
            }
        }], y = [{
            key: "createFromServer",
            value: function(e) {
                return new h(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            _(e, t, n[t])
                        })
                    }
                    return e
                }({
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
                    items: e.items.map(m),
                    renewalMutations: null != e.renewal_mutations ? {
                        items: e.renewal_mutations.items.map(m),
                        paymentGatewayPlanId: e.renewal_mutations.payment_gateway_plan_id
                    } : null,
                    streakStartedAt: null != e.streak_started_at ? new Date(e.streak_started_at) : null,
                    currency: e.currency,
                    pauseEndsAt: null != e.pause_ends_at ? new Date(e.pause_ends_at) : null,
                    metadata: e.metadata,
                    useStorekitResubscribe: e.use_storekit_resubscribe,
                    price: e.price,
                    userId: e.user_id
                }, null != e.latest_invoice ? {
                    latestInvoice: s.default.createInvoiceFromServer(e.latest_invoice)
                } : {}))
            }
        }], i && d(r.prototype, i), y && d(r, y), h
    }(i.default);
    t.default = y
}