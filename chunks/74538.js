function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StreamQuality: function() {
            return r
        },
        castPremiumSubscriptionAsSkuId: function() {
            return eU
        },
        coerceExistingItemsToNewItemInterval: function() {
            return ev
        },
        experimentalGetPrices: function() {
            return x
        },
        formatIntervalDuration: function() {
            return eN
        },
        formatTrialCtaIntervalDuration: function() {
            return em
        },
        formatTrialOfferIntervalDuration: function() {
            return eA
        },
        getBillingGracePeriodDaysAndExpiresDate: function() {
            return el
        },
        getBillingReviewSubheader: function() {
            return eS
        },
        getDefaultPrice: function() {
            return V
        },
        getDiscountIntervalString: function() {
            return H
        },
        getDisplayName: function() {
            return K
        },
        getDisplayNameFromSku: function() {
            return z
        },
        getDisplayPremiumType: function() {
            return Q
        },
        getExternalPlanDisplayName: function() {
            return $
        },
        getExternalSubscriptionMethodUrl: function() {
            return ep
        },
        getFormattedPriceForPlan: function() {
            return ec
        },
        getFormattedRateForPlan: function() {
            return eE
        },
        getIntervalForInvoice: function() {
            return eh
        },
        getIntervalString: function() {
            return Y
        },
        getIntervalStringAsNoun: function() {
            return j
        },
        getItemsFromNewAdditionalPlans: function() {
            return eR
        },
        getItemsWithUpsertedPlanIdForGroup: function() {
            return eg
        },
        getItemsWithUpsertedPremiumGuildPlan: function() {
            return eD
        },
        getItemsWithUpsertedPremiumPlanId: function() {
            return eL
        },
        getItemsWithoutPremiumPlanItem: function() {
            return eC
        },
        getMaxFileSizeForPremiumType: function() {
            return eM
        },
        getNumPremiumGuildSubscriptions: function() {
            return ei
        },
        getPlanDescriptionFromInvoice: function() {
            return J
        },
        getPremiumGuildHeaderDescription: function() {
            return e_
        },
        getPremiumPlanItem: function() {
            return k
        },
        getPremiumPlanOptions: function() {
            return ee
        },
        getPremiumSkuIdForSubscription: function() {
            return eP
        },
        getPremiumType: function() {
            return W
        },
        getPremiumTypeDisplayName: function() {
            return q
        },
        getPrice: function() {
            return F
        },
        getTierDisplayName: function() {
            return X
        },
        hasPremiumSubscriptionToDisplay: function() {
            return eO
        },
        isPremium: function() {
            return g.isPremium
        },
        isPremiumAtLeast: function() {
            return g.isPremiumAtLeast
        },
        isPremiumBaseSubscriptionPlan: function() {
            return es
        },
        isPremiumExactly: function() {
            return g.isPremiumExactly
        },
        isPremiumGuildSubscriptionCanceled: function() {
            return ed
        },
        isPremiumGuildSubscriptionPlan: function() {
            return ea
        },
        isPremiumSubscriptionPlan: function() {
            return eo
        },
        isPrepaidPaymentSource: function() {
            return eu
        },
        isSubscriptionStatusFailedPayment: function() {
            return eT
        }
    }), n("411104"), n("47120"), n("733860"), n("724458"), n("653041");
    var i, r, s, a, o = n("512722"),
        l = n.n(o),
        u = n("913527"),
        d = n.n(u),
        _ = n("848246");
    n("442837");
    var c = n("710845"),
        E = n("114064"),
        I = n("803905"),
        T = n("439017"),
        f = n("301766"),
        S = n("594174"),
        h = n("351402"),
        A = n("853872"),
        m = n("509545"),
        N = n("78839"),
        p = n("122289"),
        O = n("424218"),
        R = n("358085"),
        C = n("380684"),
        g = n("111361"),
        L = n("74538"),
        D = n("937615"),
        v = n("981631"),
        M = n("334431"),
        y = n("474936"),
        P = n("231338"),
        U = n("689938");
    let b = {
            PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
            BILLING_HISTORY: "https://support.apple.com/HT201266",
            SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039"
        },
        G = {
            SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
            PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
            BILLING_HISTORY: "https://play.google.com/store/account/orderhistory"
        },
        w = new c.default("PremiumUtils.tsx"),
        B = {
            [y.SubscriptionPlans.NONE_MONTH]: [y.SubscriptionPlans.NONE_YEAR, y.SubscriptionPlans.PREMIUM_YEAR_TIER_2, y.SubscriptionPlans.PREMIUM_MONTH_TIER_2, y.SubscriptionPlans.PREMIUM_YEAR_TIER_1, y.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
            [y.SubscriptionPlans.NONE_YEAR]: [y.SubscriptionPlans.PREMIUM_YEAR_TIER_2, y.SubscriptionPlans.PREMIUM_MONTH_TIER_2, y.SubscriptionPlans.PREMIUM_YEAR_TIER_1, y.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
            [y.SubscriptionPlans.PREMIUM_MONTH_TIER_0]: [y.SubscriptionPlans.PREMIUM_YEAR_TIER_2, y.SubscriptionPlans.PREMIUM_MONTH_TIER_2, y.SubscriptionPlans.PREMIUM_YEAR_TIER_1, y.SubscriptionPlans.PREMIUM_MONTH_TIER_1, y.SubscriptionPlans.PREMIUM_YEAR_TIER_0],
            [y.SubscriptionPlans.PREMIUM_YEAR_TIER_0]: [y.SubscriptionPlans.PREMIUM_YEAR_TIER_2, y.SubscriptionPlans.PREMIUM_MONTH_TIER_2, y.SubscriptionPlans.PREMIUM_YEAR_TIER_1, y.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
            [y.SubscriptionPlans.PREMIUM_MONTH_TIER_1]: [y.SubscriptionPlans.PREMIUM_YEAR_TIER_2, y.SubscriptionPlans.PREMIUM_MONTH_TIER_2, y.SubscriptionPlans.PREMIUM_YEAR_TIER_1],
            [y.SubscriptionPlans.PREMIUM_YEAR_TIER_1]: [y.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
            [y.SubscriptionPlans.PREMIUM_MONTH_TIER_2]: [y.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
            [y.SubscriptionPlans.PREMIUM_YEAR_TIER_2]: [],
            ALL: [y.SubscriptionPlans.NONE_MONTH, y.SubscriptionPlans.NONE_YEAR, y.SubscriptionPlans.PREMIUM_YEAR_TIER_2, y.SubscriptionPlans.PREMIUM_MONTH_TIER_2, y.SubscriptionPlans.PREMIUM_YEAR_TIER_1, y.SubscriptionPlans.PREMIUM_MONTH_TIER_1, y.SubscriptionPlans.PREMIUM_YEAR_TIER_0, y.SubscriptionPlans.PREMIUM_MONTH_TIER_0]
        };

    function k(e) {
        return e.items.find(e => y.PREMIUM_PLANS.has(e.planId))
    }

    function V(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = null !== (t = A.default.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
            s = N.default.getPremiumTypeSubscription();
        return null != s && null != s.paymentSourceId && (r = s.paymentSourceId), F(e, n, i, {
            paymentSourceId: r
        })
    }

    function F(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            {
                paymentSourceId: r,
                currency: s
            } = i;
        if (null != m.default.get(e)) {
            let i = v.PriceSetAssignmentPurchaseTypes.DEFAULT;
            n ? i = v.PriceSetAssignmentPurchaseTypes.GIFT : t && (i = v.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_1);
            let a = function(e) {
                let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    purchaseType: v.PriceSetAssignmentPurchaseTypes.DEFAULT
                }, r = x(e, {
                    paymentSourceId: t,
                    purchaseType: n
                });
                return (0 === r.length && w.warn("No prices found for planId: ".concat(e, ", paymentSourceId: ").concat(t, ", purchaseType: ").concat(n)), null != i) ? r.find(e => e.currency === i) : r[0]
            }(e, {
                paymentSourceId: r,
                purchaseType: i,
                currency: s
            });
            if (null == a) {
                let t = Error("Couldn't find price");
                throw (0, p.captureBillingException)(t, {
                    extra: {
                        paymentSourceId: r
                    },
                    tags: {
                        purchaseType: i.toString(),
                        planId: e,
                        currency: null != s ? s : "unknown"
                    }
                }), t
            }
            return a
        }
        let a = Error("Plan not found");
        throw (0, p.captureBillingException)(a, {
            tags: {
                planId: e,
                currency: null != s ? s : "unknown"
            },
            extra: {
                ...i,
                isGift: n
            }
        }), a
    }(s = i || (i = {})).BUNDLE = "bundle", s.TIER_0 = "tier_0", s.TIER_1 = "tier_1", s.TIER_2 = "tier_2", s.PREMIUM_GUILD = "premium_guild", (a = r || (r = {})).MID = "mid", a.HIGH = "high";

    function x(e) {
        let {
            paymentSourceId: t,
            purchaseType: n
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            purchaseType: v.PriceSetAssignmentPurchaseTypes.DEFAULT
        }, i = function(e, t) {
            let n = m.default.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw (0, p.captureBillingException)(n, {
                    tags: {
                        planId: e,
                        purchaseType: t.toString()
                    }
                }), n
            }
            if (null == n.prices) throw Error("No prices returned for ".concat(e, ", is your user in the experiment?"));
            let i = n.prices[t];
            if (null == i) throw w.info("Purchase types: ".concat(JSON.stringify(Object.keys(n.prices)))), Error("No prices returned for purchase type ".concat(t, " for plan ").concat(e));
            return i
        }(e, n);
        if (null != t) {
            let r = i.paymentSourcePrices[t];
            if (null == r) {
                w.info("Payment sources IDs: ".concat(JSON.stringify(Object.keys(i.paymentSourcePrices)))), w.info("prices: ".concat(r));
                let s = Error("Missing prices for payment source on subscription plan");
                (0, p.captureBillingException)(s, {
                    extra: {
                        paymentSourceId: t
                    },
                    tags: {
                        purchaseType: n.toString(),
                        planId: e
                    }
                })
            } else if (0 !== r.length) return r
        }
        if (null == i.countryPrices.prices) {
            w.info("countryPrices: ".concat(JSON.stringify(i.countryPrices)));
            let t = Error("Missing prices for country");
            throw (0, p.captureBillingException)(t, {
                tags: {
                    countryCode: i.countryPrices.countryCode,
                    planId: e
                }
            }), t
        }
        return i.countryPrices.prices
    }

    function H(e) {
        switch (e) {
            case y.DiscountUserUsageLimitIntervalTypes.MONTH:
                return U.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
            case y.DiscountUserUsageLimitIntervalTypes.YEAR:
                return U.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
            case y.DiscountUserUsageLimitIntervalTypes.DAY:
            case y.DiscountUserUsageLimitIntervalTypes.WEEK:
            default:
                throw Error("Unexpected interval")
        }
    }

    function Y(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : y.PremiumTypes.TIER_2;
        if (t || n) switch (e) {
            case y.SubscriptionIntervalTypes.MONTH:
                let a = (s === y.PremiumTypes.TIER_0 ? U.default.Messages.BASIC_GIFT_DURATION : U.default.Messages.GIFT_DURATION).format({
                    timeInterval: U.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                });
                return r ? a : U.default.Messages.PAYMENT_MODAL_ONE_MONTH;
            case y.SubscriptionIntervalTypes.YEAR:
                let o = (s === y.PremiumTypes.TIER_0 ? U.default.Messages.BASIC_GIFT_DURATION : U.default.Messages.GIFT_DURATION).format({
                    timeInterval: U.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                });
                return r ? o : U.default.Messages.PAYMENT_MODAL_ONE_YEAR;
            default:
                throw Error("Unexpected interval")
        }
        switch (e) {
            case y.SubscriptionIntervalTypes.MONTH:
                if (1 !== i) return U.default.Messages.MULTI_MONTHS.format({
                    intervalCount: i
                });
                return U.default.Messages.MONTHLY;
            case y.SubscriptionIntervalTypes.YEAR:
                return U.default.Messages.YEARLY;
            default:
                throw Error("Unexpected interval")
        }
    }

    function j(e) {
        switch (e) {
            case y.SubscriptionIntervalTypes.MONTH:
                return U.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
            case y.SubscriptionIntervalTypes.YEAR:
                return U.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
            default:
                throw Error("Unexpected interval")
        }
    }

    function W(e) {
        let t = y.SubscriptionPlanInfo[e];
        if (null != t) return t.premiumType;
        let n = Error("Unsupported plan");
        throw (0, p.captureBillingException)(n, {
            tags: {
                planId: e
            }
        }), n
    }

    function K(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0;
        switch (e) {
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                return t ? U.default.Messages.PREMIUM_PLAN_MONTH_TIER_0_TRIAL_DURATION.format({
                    duration: i
                }) : n ? U.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_0 : U.default.Messages.PREMIUM_PLAN_MONTH_TIER_0;
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return t ? U.default.Messages.PREMIUM_PLAN_YEAR_TIER_0_TRIAL_DURATION.format({
                    duration: i
                }) : n ? U.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_0 : U.default.Messages.PREMIUM_PLAN_YEAR_TIER_0;
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                return n ? U.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_1 : U.default.Messages.PREMIUM_PLAN_MONTH_TIER_1;
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return n ? U.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_1 : U.default.Messages.PREMIUM_PLAN_YEAR_TIER_1;
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                return t ? U.default.Messages.PREMIUM_PLAN_MONTH_TIER_2_TRIAL_DURATION.format({
                    duration: i
                }) : n ? U.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_2 : U.default.Messages.PREMIUM_PLAN_MONTH_TIER_2;
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return t ? U.default.Messages.PREMIUM_PLAN_YEAR_TIER_2_TRIAL_DURATION.format({
                    duration: i
                }) : n ? U.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_2 : U.default.Messages.PREMIUM_PLAN_YEAR_TIER_2;
            case y.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
                return U.default.Messages.PREMIUM_PLAN_3_MONTH_TIER_2;
            case y.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                return U.default.Messages.PREMIUM_PLAN_6_MONTH_TIER_2;
            case y.SubscriptionPlans.PREMIUM_MONTH_GUILD:
                return n ? U.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : U.default.Messages.PREMIUM_GUILD_PLAN_MONTH;
            case y.SubscriptionPlans.PREMIUM_YEAR_GUILD:
                return n ? U.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : U.default.Messages.PREMIUM_GUILD_PLAN_YEAR;
            case y.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
                return U.default.Messages.PREMIUM_GUILD_PLAN_3_MONTH;
            case y.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
                return U.default.Messages.PREMIUM_GUILD_PLAN_6_MONTH;
            case y.SubscriptionPlans.PREMIUM_MONTH_LEGACY:
                return U.default.Messages.PREMIUM_PLAN_MONTH;
            case y.SubscriptionPlans.PREMIUM_YEAR_LEGACY:
                return U.default.Messages.PREMIUM_PLAN_YEAR
        }
        let r = Error("Unsupported plan");
        throw (0, p.captureBillingException)(r, {
            tags: {
                planId: e
            }
        }), r
    }

    function z(e) {
        switch (e) {
            case y.PremiumSubscriptionSKUs.TIER_0:
                return U.default.Messages.PREMIUM_TIER_0;
            case y.PremiumSubscriptionSKUs.TIER_1:
                return U.default.Messages.PREMIUM_TIER_1;
            case y.PremiumSubscriptionSKUs.TIER_2:
                return U.default.Messages.PREMIUM_TIER_2
        }
        let t = Error("Unsupported sku");
        throw (0, p.captureBillingException)(t, {
            tags: {
                skuId: e
            }
        }), t
    }

    function X(e) {
        switch (e) {
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return U.default.Messages.PREMIUM_TIER_0;
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return U.default.Messages.PREMIUM_TIER_1;
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
            case y.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case y.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return U.default.Messages.PREMIUM_TIER_2
        }
        let t = Error("Unsupported plan");
        throw (0, p.captureBillingException)(t, {
            tags: {
                planId: e
            }
        }), t
    }

    function Q(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return t ? "Basic" : "Nitro Basic";
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return t ? "Classic" : "Nitro Classic";
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
            case y.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case y.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                return "Nitro"
        }
        let n = Error("Unsupported plan");
        throw (0, p.captureBillingException)(n, {
            tags: {
                planId: e
            }
        }), n
    }

    function q(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case y.PremiumTypes.TIER_0:
                return t ? "Basic" : U.default.Messages.PREMIUM_TIER_0;
            case y.PremiumTypes.TIER_1:
                return t ? "Classic" : U.default.Messages.PREMIUM_TIER_1;
            case y.PremiumTypes.TIER_2:
                return U.default.Messages.PREMIUM_TIER_2
        }
    }

    function Z(e) {
        var t, n, i, r, s, a, o, l, u;
        let {
            subscription: _,
            planId: c,
            price: E,
            includePremiumGuilds: I,
            hasDiscountApplied: T,
            activeDiscountInfo: f,
            renewalInvoicePreview: h
        } = e, A = L.default.formatPriceString(L.default.getDefaultPrice(y.SubscriptionPlans.PREMIUM_MONTH_TIER_2), y.SubscriptionIntervalTypes.MONTH), m = eI(_) || null == _.paymentSourceId && !_.isPurchasedExternally && !(null === (t = S.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium()), N = null != E, p = _.status === v.SubscriptionStatusTypes.UNPAID && null !== _.latestInvoice && (null === (n = _.latestInvoice) || void 0 === n ? void 0 : n.status) === v.InvoiceStatusTypes.OPEN, O = m ? v.SubscriptionStatusTypes.CANCELED : p ? v.SubscriptionStatusTypes.UNPAID : _.status, R = null === (s = null !== (r = null == h ? void 0 : h.taxInclusive) && void 0 !== r ? r : null === (i = _.latestInvoice) || void 0 === i ? void 0 : i.taxInclusive) || void 0 === s || s, C = y.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM + (I ? ei(_.additionalPlans) : 0);
        switch (c) {
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                switch (O) {
                    case v.SubscriptionStatusTypes.CANCELED:
                        return N ? R ? U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION.format({
                            price: E
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                            price: E
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_NO_PRICE;
                    case v.SubscriptionStatusTypes.ACCOUNT_HOLD:
                        return N ? R ? U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD.format({
                            price: E
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                            price: E
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_NO_PRICE.format();
                    case v.SubscriptionStatusTypes.UNPAID:
                        return U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAYMENT.format();
                    case v.SubscriptionStatusTypes.PAUSE_PENDING:
                        let g = null != _.pauseEndsAt ? d()(_.pauseEndsAt).diff(_.currentPeriodEnd, "days") : null;
                        return null != g ? U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                            pauseDate: _.currentPeriodEnd,
                            pauseDuration: g
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
                            pauseDate: _.currentPeriodEnd
                        });
                    case v.SubscriptionStatusTypes.PAUSED:
                        return U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
                            resumeDate: _.pauseEndsAt
                        });
                    default:
                        return N ? R ? U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0.format({
                            price: E
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_TAX_EXCLUSIVE.format({
                            price: E
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_NO_PRICE
                }
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                switch (O) {
                    case v.SubscriptionStatusTypes.CANCELED:
                        return N ? R ? U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION.format({
                            price: E
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                            price: E
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_NO_PRICE;
                    case v.SubscriptionStatusTypes.ACCOUNT_HOLD:
                        return N ? R ? U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD.format({
                            price: E
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                            price: E
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_NO_PRICE.format();
                    case v.SubscriptionStatusTypes.UNPAID:
                        return U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAYMENT.format();
                    case v.SubscriptionStatusTypes.PAUSE_PENDING:
                        let D = null != _.pauseEndsAt ? d()(_.pauseEndsAt).diff(_.currentPeriodEnd, "days") : null;
                        return null != D ? U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                            pauseDate: _.currentPeriodEnd,
                            pauseDuration: D
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
                            pauseDate: _.currentPeriodEnd
                        });
                    case v.SubscriptionStatusTypes.PAUSED:
                        return U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
                            resumeDate: _.pauseEndsAt
                        });
                    default:
                        return N ? R ? U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1.format({
                            price: E
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_TAX_EXCLUSIVE.format({
                            price: E
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_NO_PRICE
                }
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
            case y.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case y.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                switch (O) {
                    case v.SubscriptionStatusTypes.CANCELED:
                        return N ? R ? U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION.format({
                            price: E,
                            num: C
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                            price: E,
                            num: C
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_NO_PRICE.format({
                            num: C
                        });
                    case v.SubscriptionStatusTypes.ACCOUNT_HOLD:
                        return N ? R ? U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD.format({
                            price: E,
                            num: C
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                            price: E,
                            num: C
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_NO_PRICE.format({
                            num: C
                        });
                    case v.SubscriptionStatusTypes.UNPAID:
                        return U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAYMENT.format({
                            num: C
                        });
                    case v.SubscriptionStatusTypes.PAUSE_PENDING:
                        let M = null != _.pauseEndsAt ? d()(_.pauseEndsAt).diff(_.currentPeriodEnd, "days") : null;
                        return null != M ? U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                            pauseDate: _.currentPeriodEnd,
                            pauseDuration: M
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
                            pauseDate: _.currentPeriodEnd
                        });
                    case v.SubscriptionStatusTypes.PAUSED:
                        return U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
                            resumeDate: _.pauseEndsAt
                        });
                    case v.SubscriptionStatusTypes.BILLING_RETRY:
                        return U.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO.format({
                            endDate: d()(_.currentPeriodStart).add(y.PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS, "days")
                        });
                    default:
                        return T ? R ? U.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                            percent: null !== (a = null == f ? void 0 : f.percentage) && void 0 !== a ? a : y.DISCOUNT_PERCENTAGE_FALLBACK,
                            regularPrice: A,
                            numMonths: null !== (o = null == f ? void 0 : f.duration) && void 0 !== o ? o : y.DISCOUNT_DURATION_FALLBACK
                        }) : U.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC_TAX_EXCLUSIVE.format({
                            percent: null !== (l = null == f ? void 0 : f.percentage) && void 0 !== l ? l : y.DISCOUNT_PERCENTAGE_FALLBACK,
                            regularPrice: A,
                            numMonths: null !== (u = null == f ? void 0 : f.duration) && void 0 !== u ? u : y.DISCOUNT_DURATION_FALLBACK
                        }) : N ? R ? U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2.format({
                            price: E,
                            num: C
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_TAX_EXCLUSIVE.format({
                            price: E,
                            num: C
                        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_NO_PRICE.format({
                            num: C
                        })
                }
            default:
                throw Error("Invalid planId ".concat(c))
        }
    }

    function J(e) {
        let {
            renewalInvoicePreview: t,
            subscription: n,
            planId: i,
            includePremiumGuilds: r = !1,
            hasDiscountApplied: s = !1,
            activeDiscountInfo: a
        } = e, o = m.default.get(i);
        return l()(null != o, "Missing plan"), Z({
            subscription: n,
            planId: o.id,
            price: function(e, t, n) {
                let i = e.invoiceItems.find(e => {
                        let {
                            subscriptionPlanId: t
                        } = e;
                        return t === n.id
                    }),
                    r = null == i ? F(n.id, !1, !1, {
                        paymentSourceId: t.paymentSourceId,
                        currency: t.currency
                    }).amount : i.amount;
                return (0, D.formatRate)((0, D.formatPrice)(r, e.currency), n.interval, n.intervalCount)
            }(t, n, o),
            includePremiumGuilds: r,
            hasDiscountApplied: s,
            activeDiscountInfo: a,
            renewalInvoicePreview: t
        })
    }

    function $(e) {
        let {
            planId: t,
            additionalPlans: n
        } = e, i = (0, f.isNoneSubscription)(t) ? null : K(t), r = null == n ? void 0 : n.find(e => {
            let {
                planId: t
            } = e;
            return y.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
        }), s = (null == r ? void 0 : r.planId) === y.SubscriptionPlans.PREMIUM_MONTH_GUILD ? U.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : (null == r ? void 0 : r.planId) === y.SubscriptionPlans.PREMIUM_YEAR_GUILD ? U.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : null, a = null == s ? void 0 : s.format({
            num: null == r ? void 0 : r.quantity
        });
        if (null != i && null != a) return U.default.Messages.PREMIUM_WITH_PREMIUM_GUILD_EXTERNAL_PLAN_DESCRIPTION.format({
            premiumDescription: i,
            premiumGuildDescription: a
        });
        if (null != i) return i;
        if (null != a) return a;
        else throw Error("Subscription without premium or premium guild subscription")
    }

    function ee(e) {
        let {
            skuId: t,
            isPremium: n,
            multiMonthPlans: i,
            currentSubscription: r,
            isGift: s,
            isEligibleForTrial: a,
            defaultPlanId: o,
            defaultToMonthlyPlan: l
        } = e;
        if (null == t || !n) return [];
        let u = void 0 !== o && t === y.SubscriptionPlanInfo[o].skuId ? o : void 0;
        void 0 === u && l && !s && (u = y.PREMIUM_SKU_TO_MONTHLY_PLAN[t]), a && !s && (void 0 === o || l && y.PREMIUM_MONTHLY_PLANS.has(o)) && T.TrialRedemptionDefaultPlanExperiment.trackExposure({
            location: "de805e_1"
        });
        let d = [];
        switch (t) {
            case y.PremiumSubscriptionSKUs.TIER_0:
                d = [y.SubscriptionPlans.PREMIUM_YEAR_TIER_0, y.SubscriptionPlans.PREMIUM_MONTH_TIER_0];
                break;
            case y.PremiumSubscriptionSKUs.TIER_1:
                d = [y.SubscriptionPlans.PREMIUM_MONTH_TIER_1];
                break;
            case y.PremiumSubscriptionSKUs.TIER_2:
                let _ = i;
                if (null != r) {
                    let e = r.items[0].planId;
                    if (y.MULTI_MONTH_PLANS.has(e)) {
                        let t = y.SubscriptionPlanInfo[e];
                        _ = [...(0, y.MULTI_MONTH_PLANS)].filter(e => {
                            let n = y.SubscriptionPlanInfo[e];
                            return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === y.PremiumSubscriptionSKUs.TIER_2
                        })
                    } else _ = []
                }
                d = [y.SubscriptionPlans.PREMIUM_YEAR_TIER_2, ..._, y.SubscriptionPlans.PREMIUM_MONTH_TIER_2];
                break;
            default:
                throw Error("Unexpected SKU: ".concat(t))
        }
        if (void 0 !== u) {
            let e = d.indexOf(u);
            d.splice(e, 1), d.unshift(u)
        }
        return d
    }

    function et(e) {
        let t = y.SubscriptionPlanInfo[e];
        if (null == t) {
            let t = Error("Unsupported plan");
            throw (0, p.captureBillingException)(t, {
                tags: {
                    planId: e
                }
            }), t
        }
        return t.skuId
    }

    function en(e) {
        var t;
        return null == e ? B.ALL : null !== (t = B[e]) && void 0 !== t ? t : []
    }

    function ei(e) {
        let t = m.default.getPlanIdsForSkus([eU(y.PremiumSubscriptionSKUs.GUILD)]);
        l()(null != t, "Missing guildSubscriptionPlanIds");
        let n = e.find(e => {
            let {
                planId: n
            } = e;
            return t.includes(n)
        });
        return null != n ? n.quantity : 0
    }
    let er = new Set([y.SubscriptionPlans.NONE_MONTH, y.SubscriptionPlans.NONE_3_MONTH, y.SubscriptionPlans.NONE_6_MONTH, y.SubscriptionPlans.NONE_YEAR, y.SubscriptionPlans.PREMIUM_MONTH_TIER_0, y.SubscriptionPlans.PREMIUM_MONTH_TIER_1, y.SubscriptionPlans.PREMIUM_MONTH_TIER_2, y.SubscriptionPlans.PREMIUM_YEAR_TIER_0, y.SubscriptionPlans.PREMIUM_YEAR_TIER_1, y.SubscriptionPlans.PREMIUM_YEAR_TIER_2, y.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2, y.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2]);

    function es(e) {
        return er.has(e)
    }

    function ea(e) {
        return y.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e)
    }

    function eo(e) {
        return es(e) || ea(e)
    }

    function el(e) {
        var t, n, i, r, s;
        if (e.isPurchasedViaApple && (null === (t = e.metadata) || void 0 === t ? void 0 : t.apple_grace_period_expires_date) != null) {
            let t = d()(e.metadata.apple_grace_period_expires_date);
            return {
                days: d().duration(t.diff(e.currentPeriodStart)).days(),
                expiresDate: t
            }
        }
        if (e.isPurchasedViaGoogle && (null === (n = e.metadata) || void 0 === n ? void 0 : n.google_grace_period_expires_date) != null && (null === (i = e.metadata) || void 0 === i ? void 0 : i.google_original_expires_date) != null) {
            let t = d()(e.metadata.google_grace_period_expires_date),
                n = d()(e.metadata.google_original_expires_date);
            return {
                days: d().duration(t.diff(n)).days(),
                expiresDate: t
            }
        }
        if (e.isPurchasedExternally) {
            let t = e.isPurchasedViaApple ? y.DEFAULT_APPLE_GRACE_PERIOD_DAYS : y.DEFAULT_GOOGLE_GRACE_PERIOD_DAYS;
            return {
                days: t,
                expiresDate: d()(e.currentPeriodStart).add(t, "days")
            }
        }
        if ((null === (r = e.metadata) || void 0 === r ? void 0 : r.grace_period_expires_date) != null) return {
            days: d()(null === (s = e.metadata) || void 0 === s ? void 0 : s.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: d()(e.metadata.grace_period_expires_date)
        };
        {
            let t = null == e.paymentSourceId ? y.DEFAULT_MAX_GRACE_PERIOD_DAYS : y.PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS;
            return {
                days: t,
                expiresDate: d()(e.currentPeriodStart).add(t, "days")
            }
        }
    }

    function eu(e) {
        if (null == e) return !1;
        let t = A.default.getPaymentSource(e);
        return null != t && P.PREPAID_PAYMENT_SOURCES.has(t.type)
    }

    function ed(e) {
        return e.isPurchasedExternally ? e.status === v.SubscriptionStatusTypes.CANCELED : function(e) {
            let {
                renewalMutations: t,
                additionalPlans: n,
                status: i
            } = e, r = ei(n);
            return 0 === (null != t ? ei(t.additionalPlans) : null) && 0 !== r ? v.SubscriptionStatusTypes.CANCELED : i
        }(e) === v.SubscriptionStatusTypes.CANCELED
    }

    function e_(e) {
        var t, n, i;
        let {
            subscription: r,
            user: s,
            price: a,
            renewalInvoicePreview: o
        } = e, {
            planId: u,
            additionalPlans: d
        } = r, _ = m.default.get(u);
        l()(null != _, "Missing plan");
        let c = ei(d),
            E = ef(r.planId, r.paymentSourceId, r.currency, s).amount * c;
        if (null != o) {
            let e = o.invoiceItems.find(e => y.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.subscriptionPlanId));
            null != e && (E = e.amount)
        }
        a = null != a ? a : (0, D.formatPrice)(E, r.currency);
        let I = null === (i = null !== (n = null == o ? void 0 : o.taxInclusive) && void 0 !== n ? n : null === (t = r.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === i || i;
        if (ed(r)) return r.isPurchasedViaGoogle ? U.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_NO_PRICE.format({
            quantity: c
        }) : I ? U.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION.format({
            quantity: c,
            rate: (0, D.formatRate)(a, _.interval, _.intervalCount)
        }) : U.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            quantity: c,
            rate: (0, D.formatRate)(a, _.interval, _.intervalCount)
        });
        switch (r.status) {
            case v.SubscriptionStatusTypes.ACCOUNT_HOLD:
                return r.isPurchasedViaGoogle ? U.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_NO_PRICE.format({
                    quantity: c,
                    boostQuantity: c
                }) : I ? U.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD.format({
                    quantity: c,
                    boostQuantity: c,
                    rate: (0, D.formatRate)(a, _.interval, _.intervalCount)
                }) : U.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                    quantity: c,
                    boostQuantity: c,
                    rate: (0, D.formatRate)(a, _.interval, _.intervalCount)
                });
            case v.SubscriptionStatusTypes.PAUSE_PENDING:
            case v.SubscriptionStatusTypes.PAUSED:
                return U.default.Messages.GUILD_BOOSTING_DISABLED_HEADER;
            default:
                return r.isPurchasedViaGoogle ? U.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_NO_PRICE.format({
                    quantity: c
                }) : I ? U.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO.format({
                    quantity: c,
                    rate: (0, D.formatRate)(a, _.interval, _.intervalCount)
                }) : U.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_TAX_EXCLUSIVE.format({
                    quantity: c,
                    rate: (0, D.formatRate)(a, _.interval, _.intervalCount)
                })
        }
    }

    function ec(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = null != t ? F(e.id, !1, i, t) : V(e.id, !1, i),
            s = (0, D.formatPrice)(r.amount, r.currency);
        return e.currency !== P.CurrencyCodes.USD && !0 === n && (s = s.concat("*")), s
    }

    function eE(e, t, n) {
        let i = ec(e, t, n);
        return (0, D.formatRate)(i, e.interval, e.intervalCount)
    }

    function eI(e) {
        let {
            status: t,
            renewalMutations: n
        } = e;
        return t === v.SubscriptionStatusTypes.CANCELED || null != n && (0, f.isNoneSubscription)(n.planId) && !e.isPurchasedExternally
    }

    function eT(e) {
        return e === v.SubscriptionStatusTypes.PAST_DUE || e === v.SubscriptionStatusTypes.ACCOUNT_HOLD || e === v.SubscriptionStatusTypes.BILLING_RETRY
    }

    function ef(e, t, n, i) {
        let r = null != t ? {
                paymentSourceId: t,
                currency: n
            } : {
                country: h.default.ipCountryCodeWithFallback,
                currency: n
            },
            s = m.default.get(e);
        if (null == s) {
            let t = Error("Unsupported plan");
            throw (0, p.captureBillingException)(t, {
                tags: {
                    planId: e
                }
            }), t
        }
        let a = m.default.getForSkuAndInterval(eU(y.PremiumSubscriptionSKUs.GUILD), s.interval, s.intervalCount);
        if (null == a) {
            let t = Error("Unsupported plan");
            throw (0, p.captureBillingException)(t, {
                tags: {
                    planId: e
                }
            }), t
        }
        return F(a.id, (0, g.isPremium)(i), !1, r)
    }

    function eS(e, t, n) {
        let i = t.id;
        if (null != e) switch (i) {
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                return U.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_0;
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return U.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_0;
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                return U.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_1;
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return U.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_1;
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                return U.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_2;
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return U.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_2
        }
        switch (i) {
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                return n ? U.default.Messages.BILLING_SELECT_PLAN : U.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_0;
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return n ? U.default.Messages.BILLING_SELECT_PLAN : U.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_0;
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                return n ? U.default.Messages.BILLING_SELECT_PLAN : U.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_1;
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return n ? U.default.Messages.BILLING_SELECT_PLAN : U.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_1;
            case y.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                return n ? U.default.Messages.BILLING_SELECT_PLAN : U.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
            case y.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return n ? U.default.Messages.BILLING_SELECT_PLAN : U.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_2;
            case y.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case y.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                return U.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTHS_TIER_2.format({
                    intervalCount: t.intervalCount
                });
            case y.SubscriptionPlans.NONE_MONTH:
            case y.SubscriptionPlans.NONE_YEAR:
            case y.SubscriptionPlans.NONE_3_MONTH:
            case y.SubscriptionPlans.NONE_6_MONTH:
            case y.SubscriptionPlans.PREMIUM_MONTH_GUILD:
            case y.SubscriptionPlans.PREMIUM_YEAR_GUILD:
            case y.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
            case y.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
                return U.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
        }
        let r = Error("User is purchasing an unsupported plan");
        throw (0, p.captureBillingException)(r, {
            tags: {
                planId: i
            }
        }), r
    }

    function eh(e) {
        let t = e.invoiceItems[0].subscriptionPlanId,
            n = m.default.get(t);
        return l()(null != n, "Missing subscriptionPlan"), {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    }

    function eA(e) {
        let {
            intervalType: t = y.SubscriptionIntervalTypes.MONTH,
            intervalCount: n = 1,
            capitalize: i = !1
        } = e;
        switch (t) {
            case y.SubscriptionIntervalTypes.DAY:
                if (n >= 7 && n % 7 == 0) return i ? U.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_WEEKS.format({
                    weeks: n / 7
                }) : U.default.Messages.PREMIUM_TRIAL_FREE_DURATION_WEEKS.format({
                    weeks: n / 7
                });
                return i ? U.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_DAYS.format({
                    days: n
                }) : U.default.Messages.PREMIUM_TRIAL_FREE_DURATION_DAYS.format({
                    days: n
                });
            case y.SubscriptionIntervalTypes.MONTH:
                return i ? U.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_MONTHS.format({
                    months: n
                }) : U.default.Messages.PREMIUM_TRIAL_FREE_DURATION_MONTHS.format({
                    months: n
                });
            case y.SubscriptionIntervalTypes.YEAR:
                return i ? U.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_YEARS.format({
                    years: n
                }) : U.default.Messages.PREMIUM_TRIAL_FREE_DURATION_YEARS.format({
                    years: n
                });
            default:
                throw Error("Unsupported interval duration.")
        }
    }

    function em(e) {
        let {
            intervalType: t = y.SubscriptionIntervalTypes.MONTH,
            intervalCount: n = 1
        } = e;
        switch (t) {
            case y.SubscriptionIntervalTypes.DAY:
                if (n >= 7 && n % 7 == 0) return U.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_WEEKS.format({
                    weeks: n / 7
                });
                return U.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_DAYS.format({
                    days: n
                });
            case y.SubscriptionIntervalTypes.MONTH:
                return U.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_MONTHS.format({
                    months: n
                });
            case y.SubscriptionIntervalTypes.YEAR:
                return U.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_YEARS.format({
                    years: n
                });
            default:
                throw Error("Unsupported interval duration.")
        }
    }

    function eN(e) {
        let {
            intervalType: t = y.SubscriptionIntervalTypes.MONTH,
            intervalCount: n = 1,
            capitalize: i = !1
        } = e;
        switch (t) {
            case y.SubscriptionIntervalTypes.DAY:
                if (n >= 7 && n % 7 == 0) return i ? U.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
                    weeks: n / 7
                }) : U.default.Messages.DURATION_WEEKS.format({
                    weeks: n / 7
                });
                return i ? U.default.Messages.DURATION_DAYS_CAPITALIZE.format({
                    days: n
                }) : U.default.Messages.DURATION_DAYS.format({
                    days: n
                });
            case y.SubscriptionIntervalTypes.MONTH:
                return i ? U.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
                    months: n
                }) : U.default.Messages.DURATION_MONTHS.format({
                    months: n
                });
            case y.SubscriptionIntervalTypes.YEAR:
                return i ? U.default.Messages.DURATION_YEARS_CAPITALIZE.format({
                    years: n
                }) : U.default.Messages.DURATION_YEARS.format({
                    years: n
                });
            default:
                throw Error("Unsupported interval duration.")
        }
    }

    function ep(e, t) {
        switch (e) {
            case v.PaymentGateways.APPLE_PARTNER:
            case v.PaymentGateways.APPLE:
                return b[t];
            case v.PaymentGateways.GOOGLE:
                return G[t]
        }
        throw Error("Invalid external payment gateway ".concat(e))
    }

    function eO(e, t) {
        return (0, g.isPremium)(e) || eT(null == t ? void 0 : t.status)
    }

    function eR(e, t) {
        var n, i;
        let r = [],
            s = (null !== (i = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== i ? i : e.items).find(e => y.PREMIUM_PLANS.has(e.planId));
        return null != s && r.push(s), r.push(...t), r.map(t => {
            for (let n of e.items)
                if (t.planId === n.planId) return {
                    ...n,
                    ...t
                };
            return t
        })
    }

    function eC(e) {
        return e.filter(e => !y.PREMIUM_PLANS.has(e.planId))
    }

    function eg(e, t, n, i) {
        var r, s;
        l()(i.has(t), "Expected planId in group");
        let a = !1,
            o = (null !== (s = null === (r = e.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== s ? s : e.items).map(e => i.has(e.planId) ? (a = !0, {
                ...e,
                quantity: n,
                planId: t
            }) : e);
        if (!a) {
            let i = {
                    planId: t,
                    quantity: n
                },
                r = e.items.find(e => e.planId === t);
            null != r && (i.id = r.id), o.push(i)
        }
        return o.filter(e => 0 !== e.quantity)
    }

    function eL(e, t) {
        return eg(e, t, 1, y.PREMIUM_PLANS)
    }

    function eD(e, t, n) {
        return eg(e, n, t, y.PREMIUM_GUILD_SUBSCRIPTION_PLANS)
    }

    function ev(e) {
        var t;
        let n = null !== (t = e.find(e => !("id" in e))) && void 0 !== t ? t : e.find(e => y.PREMIUM_PLANS.has(e.planId));
        if (null != n) {
            let t = m.default.get(n.planId);
            l()(null != t, "Missing plan"), e = e.map(e => {
                if (e === n) return e;
                let i = m.default.get(e.planId);
                l()(null != i, "Missing plan");
                let r = m.default.getForSkuAndInterval(i.skuId, t.interval, t.intervalCount);
                return l()(null != r, "Missing planForInterval"), {
                    ...e,
                    planId: r.id
                }
            })
        }
        return e
    }

    function eM(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                useSpace: !0
            },
            n = y.PremiumUserLimits[e].fileSize;
        return (0, O.formatSize)(n / 1024, {
            useKibibytes: !0,
            useSpace: t.useSpace
        })
    }

    function ey(e) {
        return null == e ? null : e.items.find(e => y.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.planId))
    }

    function eP(e) {
        let t = null != e ? k(e) : null;
        return null != t ? et(t.planId) : null
    }

    function eU(e) {
        return e
    }
    t.default = Object.freeze({
        isNewUser: e => null != e && Date.now() - e.createdAt.getTime() < 2592e6,
        isPremiumAtLeast: g.isPremiumAtLeast,
        isPremium: g.isPremium,
        isPremiumExactly: g.isPremiumExactly,
        getPrice: F,
        getDefaultPrice: V,
        getInterval: function(e) {
            let t = y.SubscriptionPlanInfo[e];
            if (null != t) return {
                intervalType: t.interval,
                intervalCount: t.intervalCount
            };
            let n = Error("Unsupported plan");
            throw (0, p.captureBillingException)(n, {
                tags: {
                    planId: e
                }
            }), n
        },
        getIntervalString: Y,
        getIntervalStringAsNoun: j,
        getPremiumType: W,
        getDisplayName: K,
        getDisplayPremiumType: Q,
        getPremiumPlanOptions: ee,
        getUpgradeEligibilities: en,
        getPlanDescription: Z,
        isPremiumSku: function(e) {
            return e === y.PremiumSubscriptionSKUs.TIER_0 || e === y.PremiumSubscriptionSKUs.TIER_1 || e === y.PremiumSubscriptionSKUs.TIER_2
        },
        getClosestUpgrade: function(e) {
            let t = y.SubscriptionPlanInfo[e];
            if (null == t) throw Error("Unrecognized plan.");
            let {
                interval: n
            } = t, i = en(e);
            for (let e of Object.keys(y.SubscriptionPlanInfo)) {
                let {
                    interval: t
                } = y.SubscriptionPlanInfo[e];
                if (n === t && i.includes(e)) return e
            }
            return null
        },
        getIntervalMonths: function(e, t) {
            if (e === y.SubscriptionIntervalTypes.MONTH) return t;
            if (e === y.SubscriptionIntervalTypes.YEAR) return 12 * t;
            throw Error("".concat(e, " interval subscription period not implemented"))
        },
        getUserMaxFileSize: C.getUserMaxFileSize,
        getSkuIdForPlan: et,
        getSkuIdForPremiumType: function(e) {
            switch (e) {
                case y.PremiumTypes.TIER_0:
                    return y.PremiumSubscriptionSKUs.TIER_0;
                case y.PremiumTypes.TIER_1:
                    return y.PremiumSubscriptionSKUs.TIER_1;
                case y.PremiumTypes.TIER_2:
                    return y.PremiumSubscriptionSKUs.TIER_2
            }
        },
        getNumIncludedPremiumGuildSubscriptionSlots: function(e) {
            if (W(e) === y.PremiumTypes.TIER_2) return y.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
            return 0
        },
        getBillingInformationString: function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = n ? (0, D.formatPrice)(t.invoiceItems.filter(e => y.PREMIUM_TIER_2_PLANS.has(e.subscriptionPlanId)).map(e => e.amount).reduce((e, t) => t + e, 0), t.currency) : (0, D.formatPrice)(t.total, t.currency);
            if (e.status === v.SubscriptionStatusTypes.CANCELED) return U.default.Messages.PREMIUM_SETTINGS_CANCELLED_INFO.format({
                endDate: t.subscriptionPeriodStart
            });
            if (e.status === v.SubscriptionStatusTypes.PAUSE_PENDING) return U.default.Messages.PREMIUM_SETTINGS_PAUSE_PENDING_INFO.format({
                pauseDate: e.currentPeriodEnd,
                resumeDate: e.pauseEndsAt
            });
            if (e.status === v.SubscriptionStatusTypes.PAUSED) return null == e.pauseEndsAt ? n ? U.default.Messages.PREMIUM_SETTINGS_PAUSED_INFO_WITH_PLAN.format({
                planName: U.default.Messages.PREMIUM,
                price: i
            }) : U.default.Messages.PREMIUM_SETTINGS_PAUSED_INFO : n ? U.default.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO_WITH_PLAN.format({
                planName: U.default.Messages.PREMIUM,
                resumeDate: e.pauseEndsAt,
                price: i
            }) : U.default.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO.format({
                resumeDate: e.pauseEndsAt
            });
            else if (e.status === v.SubscriptionStatusTypes.PAST_DUE) {
                var r, s;
                let t = el(e).expiresDate;
                return (e.isPurchasedViaGoogle && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_grace_period_expires_date) != null && (t = d()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (s = e.metadata) || void 0 === s ? void 0 : s.apple_grace_period_expires_date) != null && (t = d()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally) ? U.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO_EXTERNAL.format({
                    endDate: t,
                    paymentGatewayName: P.PaymentGatewayToFriendlyName[e.paymentGateway],
                    paymentSourceLink: ep(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
                }) : U.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO.format({
                    endDate: t,
                    price: i
                })
            } else return e.status === v.SubscriptionStatusTypes.BILLING_RETRY ? U.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
                endDate: d()(e.currentPeriodStart).add(y.PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS, "days"),
                price: i
            }) : e.status === v.SubscriptionStatusTypes.ACCOUNT_HOLD ? e.isPurchasedViaGoogle && !(0, R.isAndroid)() ? U.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_EXTERNAL.format({
                endDate: d()(e.currentPeriodStart).add(y.MAX_ACCOUNT_HOLD_DAYS, "days"),
                paymentGatewayName: P.PaymentGatewayToFriendlyName[e.paymentGateway],
                paymentSourceLink: ep(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
            }) : U.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
                endDate: d()(e.currentPeriodStart).add(y.MAX_ACCOUNT_HOLD_DAYS, "days"),
                price: i
            }) : function(e) {
                return null != e.paymentSourceId && eu(e.paymentSourceId)
            }(e) ? U.default.Messages.PREMIUM_SETTINGS_PREPAID_THROUGH_DATE.format({
                prepaidEndDate: e.currentPeriodEnd
            }) : e.status === v.SubscriptionStatusTypes.UNPAID ? U.default.Messages.PREMIUM_SETTINGS_PAYMENT_PROCESSING.format({
                maxProcessingTimeInDays: y.MAX_PAYMENT_PROCESSING_TIME_DAYS
            }) : e.isPurchasedExternally ? U.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_EXTERNAL.format({
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: P.PaymentGatewayToFriendlyName[e.paymentGateway],
                subscriptionManagementLink: ep(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
            }) : n ? U.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_WITH_PLAN.format({
                planName: U.default.Messages.PREMIUM,
                renewalDate: t.subscriptionPeriodStart,
                price: i
            }) : U.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO.format({
                renewalDate: t.subscriptionPeriodStart,
                price: i
            })
        },
        isNoneSubscription: f.isNoneSubscription,
        getPlanIdFromInvoice: function(e, t) {
            let {
                planId: n
            } = e;
            if (e.status === v.SubscriptionStatusTypes.CANCELED || e.status === v.SubscriptionStatusTypes.PAUSE_PENDING) return n;
            l()(null != t, "Expected invoicePreview");
            let i = t.invoiceItems.find(e => {
                let {
                    subscriptionPlanId: t
                } = e;
                return es(t)
            });
            return n = null == i || (0, f.isNoneSubscription)(i.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : i.subscriptionPlanId
        },
        getStatusFromInvoice: function(e, t) {
            let {
                status: n
            } = e;
            if (e.status === v.SubscriptionStatusTypes.CANCELED || e.status === v.SubscriptionStatusTypes.PAUSE_PENDING) return n;
            l()(null != t, "Expected invoicePreview");
            let i = t.invoiceItems.find(e => {
                let {
                    subscriptionPlanId: t
                } = e;
                return es(t)
            });
            return (null == i || (0, f.isNoneSubscription)(i.subscriptionPlanId)) && (n = v.SubscriptionStatusTypes.CANCELED), n
        },
        isBaseSubscriptionCanceled: eI,
        getPremiumGuildIntervalPrice: ef,
        hasAccountCredit: function(e) {
            return null != e && 0 !== e.size && Array.from(e).some(e => {
                let {
                    subscriptionPlanId: t,
                    parentId: n,
                    consumed: i
                } = e;
                return null != t && null != n && !i
            })
        },
        getBillingReviewSubheader: eS,
        getIntervalForInvoice: eh,
        getPremiumPlanItem: k,
        getGuildBoostPlanItem: ey,
        isBoostOnlySubscription: function(e) {
            return null != e && null == k(e) && null != ey(e)
        },
        getPremiumSkuIdForSubscription: eP,
        getPremiumTypeFromSubscription: function(e) {
            if (null != e) {
                let t = k(e);
                if (null != t) return W(t.planId)
            }
        },
        getPremiumTypeFromSubscriptionRenewalMutations: function(e) {
            if (null != e && null != e.renewalMutations) {
                let t = k(e.renewalMutations);
                if (null != t) return W(t.planId)
            }
        },
        getPremiumGradientColor: function(e) {
            switch (e) {
                case y.PremiumTypes.TIER_0:
                    return M.Gradients.PREMIUM_TIER_0;
                case y.PremiumTypes.TIER_1:
                    return M.Gradients.PREMIUM_TIER_1;
                case y.PremiumTypes.TIER_2:
                    return M.Gradients.PREMIUM_TIER_2
            }
        },
        castPremiumSubscriptionAsSkuId: eU,
        canUseAnimatedEmojis: function(e) {
            return (0, I.canUserUse)(I.ANIMATED_EMOJIS, e)
        },
        canUseEmojisEverywhere: function(e) {
            return (0, I.canUserUse)(I.EMOJIS_EVERYWHERE, e)
        },
        canUseSoundboardEverywhere: function(e) {
            return (0, I.canUserUse)(I.SOUNDBOARD_EVERYWHERE, e)
        },
        canUseCustomCallSounds: function(e) {
            return (0, I.canUserUse)(I.CUSTOM_CALL_SOUNDS, e)
        },
        canUploadLargeFiles: function(e) {
            return (0, I.canUserUse)(I.UPLOAD_LARGE_FILES, e)
        },
        canUseBadges: function(e) {
            return (0, I.canUserUse)(I.PROFILE_BADGES, e)
        },
        canUseHighVideoUploadQuality: function(e) {
            return (0, I.canUserUse)(I.INCREASED_VIDEO_UPLOAD_QUALITY, e)
        },
        canEditDiscriminator: function(e) {
            return (0, I.canUserUse)(I.CUSTOM_DISCRIMINATOR, e)
        },
        hasBoostDiscount: function(e) {
            return (0, I.canUserUse)(I.BOOST_DISCOUNT, e)
        },
        canUseAnimatedAvatar: function(e) {
            return (0, I.canUserUse)(I.ANIMATED_AVATAR, e)
        },
        canUseFancyVoiceChannelReactions: function(e) {
            return (0, I.canUserUse)(I.FANCY_VOICE_CHANNEL_REACTIONS, e)
        },
        canInstallPremiumApplications: function(e) {
            return (0, I.canUserUse)(I.INSTALL_PREMIUM_APPLICATIONS, e)
        },
        canUseIncreasedMessageLength: function(e) {
            return (0, I.canUserUse)(I.INCREASED_MESSAGE_LENGTH, e)
        },
        canUseIncreasedGuildCap: function(e) {
            return (0, I.canUserUse)(I.INCREASED_GUILD_LIMIT, e)
        },
        canRedeemPremiumPerks: function(e) {
            return (0, I.canUserUse)(I.REDEEM_PREMIUM_PERKS, e)
        },
        canUsePremiumProfileCustomization: function(e) {
            return (0, I.canUserUse)(I.PROFILE_PREMIUM_FEATURES, e)
        },
        canUsePremiumAppIcons: function(e) {
            return (0, I.canUserUse)(I.APP_ICONS, e)
        },
        canUsePremiumGuildMemberProfile: function(e) {
            return (0, I.canUserUse)(I.PREMIUM_GUILD_MEMBER_PROFILE, e)
        },
        canUseClientThemes: function(e) {
            return (0, I.canUserUse)(I.CLIENT_THEMES, e)
        },
        canStreamQuality: function(e, t) {
            return !! function(e) {
                var t;
                let n = E.default.getPerksDemos();
                return null !== (t = null == n ? void 0 : n[e]) && void 0 !== t && t
            }(_.EntitlementFeatureNames.STREAM_HIGH_QUALITY) || ("high" === e ? (0, I.canUserUse)(I.STREAM_HIGH_QUALITY, t) : "mid" === e && (0, I.canUserUse)(I.STREAM_MID_QUALITY, t))
        },
        hasFreeBoosts: function(e) {
            return (0, I.canUserUse)(I.FREE_BOOSTS, e)
        },
        canUseCustomStickersEverywhere: function(e) {
            return (0, I.canUserUse)(I.STICKERS_EVERYWHERE, e)
        },
        canUseCustomBackgrounds: function(e) {
            return (0, I.canUserUse)(I.VIDEO_FILTER_ASSETS, e)
        },
        canUseCollectibles: function(e) {
            return (0, I.canUserUse)(I.COLLECTIBLES, e)
        },
        canUseCustomNotificationSounds: function(e) {
            return (0, I.canUserUse)(I.CUSTOM_NOTIFICATION_SOUNDS, e)
        },
        formatPriceString: function(e, t) {
            let n = (0, D.formatPrice)(e.amount, e.currency),
                i = j(t);
            return "".concat(n, "/").concat(i)
        },
        StreamQuality: r
    })
}