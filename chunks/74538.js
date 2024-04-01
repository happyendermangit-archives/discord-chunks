function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StreamQuality: function() {
            return r
        },
        castPremiumSubscriptionAsSkuId: function() {
            return ey
        },
        coerceExistingItemsToNewItemInterval: function() {
            return eL
        },
        experimentalGetPrices: function() {
            return V
        },
        formatIntervalDuration: function() {
            return eA
        },
        formatTrialCtaIntervalDuration: function() {
            return eh
        },
        formatTrialOfferIntervalDuration: function() {
            return eS
        },
        getBillingGracePeriodDaysAndExpiresDate: function() {
            return ea
        },
        getBillingReviewSubheader: function() {
            return eT
        },
        getDefaultPrice: function() {
            return B
        },
        getDiscountIntervalString: function() {
            return F
        },
        getDisplayName: function() {
            return j
        },
        getDisplayNameFromSku: function() {
            return W
        },
        getDisplayPremiumType: function() {
            return z
        },
        getExternalPlanDisplayName: function() {
            return J
        },
        getExternalSubscriptionMethodUrl: function() {
            return em
        },
        getFormattedPriceForPlan: function() {
            return ed
        },
        getFormattedRateForPlan: function() {
            return e_
        },
        getIntervalForInvoice: function() {
            return ef
        },
        getIntervalString: function() {
            return x
        },
        getIntervalStringAsNoun: function() {
            return H
        },
        getItemsFromNewAdditionalPlans: function() {
            return eO
        },
        getItemsWithUpsertedPlanIdForGroup: function() {
            return eR
        },
        getItemsWithUpsertedPremiumGuildPlan: function() {
            return eg
        },
        getItemsWithUpsertedPremiumPlanId: function() {
            return eC
        },
        getItemsWithoutPremiumPlanItem: function() {
            return ep
        },
        getMaxFileSizeForPremiumType: function() {
            return eD
        },
        getNumPremiumGuildSubscriptions: function() {
            return et
        },
        getPlanDescriptionFromInvoice: function() {
            return q
        },
        getPremiumGuildHeaderDescription: function() {
            return eu
        },
        getPremiumPlanItem: function() {
            return w
        },
        getPremiumPlanOptions: function() {
            return Z
        },
        getPremiumSkuIdForSubscription: function() {
            return eM
        },
        getPremiumType: function() {
            return Y
        },
        getPremiumTypeDisplayName: function() {
            return X
        },
        getPrice: function() {
            return k
        },
        getTierDisplayName: function() {
            return K
        },
        hasPremiumSubscriptionToDisplay: function() {
            return eN
        },
        isPremium: function() {
            return R.isPremium
        },
        isPremiumAtLeast: function() {
            return R.isPremiumAtLeast
        },
        isPremiumBaseSubscriptionPlan: function() {
            return ei
        },
        isPremiumExactly: function() {
            return R.isPremiumExactly
        },
        isPremiumGuildSubscriptionCanceled: function() {
            return el
        },
        isPremiumGuildSubscriptionPlan: function() {
            return er
        },
        isPremiumSubscriptionPlan: function() {
            return es
        },
        isPrepaidPaymentSource: function() {
            return eo
        },
        isSubscriptionStatusFailedPayment: function() {
            return eE
        }
    }), n("411104"), n("47120"), n("733860"), n("724458"), n("653041");
    var i, r, s, a, o = n("512722"),
        l = n.n(o),
        u = n("913527"),
        d = n.n(u);
    n("442837");
    var _ = n("710845"),
        c = n("803905"),
        E = n("439017"),
        I = n("301766"),
        T = n("594174"),
        f = n("351402"),
        S = n("853872"),
        h = n("509545"),
        A = n("78839"),
        m = n("122289"),
        N = n("424218"),
        O = n("358085"),
        p = n("380684"),
        R = n("111361"),
        C = n("74538"),
        g = n("937615"),
        L = n("981631"),
        D = n("334431"),
        v = n("474936"),
        M = n("231338"),
        y = n("689938");
    let P = {
            PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
            BILLING_HISTORY: "https://support.apple.com/HT201266",
            SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039"
        },
        U = {
            SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
            PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
            BILLING_HISTORY: "https://play.google.com/store/account/orderhistory"
        },
        b = new _.default("PremiumUtils.tsx"),
        G = {
            [v.SubscriptionPlans.NONE_MONTH]: [v.SubscriptionPlans.NONE_YEAR, v.SubscriptionPlans.PREMIUM_YEAR_TIER_2, v.SubscriptionPlans.PREMIUM_MONTH_TIER_2, v.SubscriptionPlans.PREMIUM_YEAR_TIER_1, v.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
            [v.SubscriptionPlans.NONE_YEAR]: [v.SubscriptionPlans.PREMIUM_YEAR_TIER_2, v.SubscriptionPlans.PREMIUM_MONTH_TIER_2, v.SubscriptionPlans.PREMIUM_YEAR_TIER_1, v.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
            [v.SubscriptionPlans.PREMIUM_MONTH_TIER_0]: [v.SubscriptionPlans.PREMIUM_YEAR_TIER_2, v.SubscriptionPlans.PREMIUM_MONTH_TIER_2, v.SubscriptionPlans.PREMIUM_YEAR_TIER_1, v.SubscriptionPlans.PREMIUM_MONTH_TIER_1, v.SubscriptionPlans.PREMIUM_YEAR_TIER_0],
            [v.SubscriptionPlans.PREMIUM_YEAR_TIER_0]: [v.SubscriptionPlans.PREMIUM_YEAR_TIER_2, v.SubscriptionPlans.PREMIUM_MONTH_TIER_2, v.SubscriptionPlans.PREMIUM_YEAR_TIER_1, v.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
            [v.SubscriptionPlans.PREMIUM_MONTH_TIER_1]: [v.SubscriptionPlans.PREMIUM_YEAR_TIER_2, v.SubscriptionPlans.PREMIUM_MONTH_TIER_2, v.SubscriptionPlans.PREMIUM_YEAR_TIER_1],
            [v.SubscriptionPlans.PREMIUM_YEAR_TIER_1]: [v.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
            [v.SubscriptionPlans.PREMIUM_MONTH_TIER_2]: [v.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
            [v.SubscriptionPlans.PREMIUM_YEAR_TIER_2]: [],
            ALL: [v.SubscriptionPlans.NONE_MONTH, v.SubscriptionPlans.NONE_YEAR, v.SubscriptionPlans.PREMIUM_YEAR_TIER_2, v.SubscriptionPlans.PREMIUM_MONTH_TIER_2, v.SubscriptionPlans.PREMIUM_YEAR_TIER_1, v.SubscriptionPlans.PREMIUM_MONTH_TIER_1, v.SubscriptionPlans.PREMIUM_YEAR_TIER_0, v.SubscriptionPlans.PREMIUM_MONTH_TIER_0]
        };

    function w(e) {
        return e.items.find(e => v.PREMIUM_PLANS.has(e.planId))
    }

    function B(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = null !== (t = S.default.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
            s = A.default.getPremiumTypeSubscription();
        return null != s && null != s.paymentSourceId && (r = s.paymentSourceId), k(e, n, i, {
            paymentSourceId: r
        })
    }

    function k(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            {
                paymentSourceId: r,
                currency: s
            } = i;
        if (null != h.default.get(e)) {
            let i = L.PriceSetAssignmentPurchaseTypes.DEFAULT;
            n ? i = L.PriceSetAssignmentPurchaseTypes.GIFT : t && (i = L.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_1);
            let a = function(e) {
                let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    purchaseType: L.PriceSetAssignmentPurchaseTypes.DEFAULT
                }, r = V(e, {
                    paymentSourceId: t,
                    purchaseType: n
                });
                return (0 === r.length && b.warn("No prices found for planId: ".concat(e, ", paymentSourceId: ").concat(t, ", purchaseType: ").concat(n)), null != i) ? r.find(e => e.currency === i) : r[0]
            }(e, {
                paymentSourceId: r,
                purchaseType: i,
                currency: s
            });
            if (null == a) {
                let t = Error("Couldn't find price");
                throw (0, m.captureBillingException)(t, {
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
        throw (0, m.captureBillingException)(a, {
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

    function V(e) {
        let {
            paymentSourceId: t,
            purchaseType: n
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            purchaseType: L.PriceSetAssignmentPurchaseTypes.DEFAULT
        }, i = function(e, t) {
            let n = h.default.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw (0, m.captureBillingException)(n, {
                    tags: {
                        planId: e,
                        purchaseType: t.toString()
                    }
                }), n
            }
            if (null == n.prices) throw Error("No prices returned for ".concat(e, ", is your user in the experiment?"));
            let i = n.prices[t];
            if (null == i) throw b.info("Purchase types: ".concat(JSON.stringify(Object.keys(n.prices)))), Error("No prices returned for purchase type ".concat(t, " for plan ").concat(e));
            return i
        }(e, n);
        if (null != t) {
            let r = i.paymentSourcePrices[t];
            if (null == r) {
                b.info("Payment sources IDs: ".concat(JSON.stringify(Object.keys(i.paymentSourcePrices)))), b.info("prices: ".concat(r));
                let s = Error("Missing prices for payment source on subscription plan");
                (0, m.captureBillingException)(s, {
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
            b.info("countryPrices: ".concat(JSON.stringify(i.countryPrices)));
            let t = Error("Missing prices for country");
            throw (0, m.captureBillingException)(t, {
                tags: {
                    countryCode: i.countryPrices.countryCode,
                    planId: e
                }
            }), t
        }
        return i.countryPrices.prices
    }

    function F(e) {
        switch (e) {
            case v.DiscountUserUsageLimitIntervalTypes.MONTH:
                return y.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
            case v.DiscountUserUsageLimitIntervalTypes.YEAR:
                return y.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
            case v.DiscountUserUsageLimitIntervalTypes.DAY:
            case v.DiscountUserUsageLimitIntervalTypes.WEEK:
            default:
                throw Error("Unexpected interval")
        }
    }

    function x(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : v.PremiumTypes.TIER_2;
        if (t || n) switch (e) {
            case v.SubscriptionIntervalTypes.MONTH:
                let a = (s === v.PremiumTypes.TIER_0 ? y.default.Messages.BASIC_GIFT_DURATION : y.default.Messages.GIFT_DURATION).format({
                    timeInterval: y.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                });
                return r ? a : y.default.Messages.PAYMENT_MODAL_ONE_MONTH;
            case v.SubscriptionIntervalTypes.YEAR:
                let o = (s === v.PremiumTypes.TIER_0 ? y.default.Messages.BASIC_GIFT_DURATION : y.default.Messages.GIFT_DURATION).format({
                    timeInterval: y.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                });
                return r ? o : y.default.Messages.PAYMENT_MODAL_ONE_YEAR;
            default:
                throw Error("Unexpected interval")
        }
        switch (e) {
            case v.SubscriptionIntervalTypes.MONTH:
                if (1 !== i) return y.default.Messages.MULTI_MONTHS.format({
                    intervalCount: i
                });
                return y.default.Messages.MONTHLY;
            case v.SubscriptionIntervalTypes.YEAR:
                return y.default.Messages.YEARLY;
            default:
                throw Error("Unexpected interval")
        }
    }

    function H(e) {
        switch (e) {
            case v.SubscriptionIntervalTypes.MONTH:
                return y.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
            case v.SubscriptionIntervalTypes.YEAR:
                return y.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
            default:
                throw Error("Unexpected interval")
        }
    }

    function Y(e) {
        let t = v.SubscriptionPlanInfo[e];
        if (null != t) return t.premiumType;
        let n = Error("Unsupported plan");
        throw (0, m.captureBillingException)(n, {
            tags: {
                planId: e
            }
        }), n
    }

    function j(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0;
        switch (e) {
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                return t ? y.default.Messages.PREMIUM_PLAN_MONTH_TIER_0_TRIAL_DURATION.format({
                    duration: i
                }) : n ? y.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_0 : y.default.Messages.PREMIUM_PLAN_MONTH_TIER_0;
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return t ? y.default.Messages.PREMIUM_PLAN_YEAR_TIER_0_TRIAL_DURATION.format({
                    duration: i
                }) : n ? y.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_0 : y.default.Messages.PREMIUM_PLAN_YEAR_TIER_0;
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                return n ? y.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_1 : y.default.Messages.PREMIUM_PLAN_MONTH_TIER_1;
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return n ? y.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_1 : y.default.Messages.PREMIUM_PLAN_YEAR_TIER_1;
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                return t ? y.default.Messages.PREMIUM_PLAN_MONTH_TIER_2_TRIAL_DURATION.format({
                    duration: i
                }) : n ? y.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_2 : y.default.Messages.PREMIUM_PLAN_MONTH_TIER_2;
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return t ? y.default.Messages.PREMIUM_PLAN_YEAR_TIER_2_TRIAL_DURATION.format({
                    duration: i
                }) : n ? y.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_2 : y.default.Messages.PREMIUM_PLAN_YEAR_TIER_2;
            case v.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
                return y.default.Messages.PREMIUM_PLAN_3_MONTH_TIER_2;
            case v.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                return y.default.Messages.PREMIUM_PLAN_6_MONTH_TIER_2;
            case v.SubscriptionPlans.PREMIUM_MONTH_GUILD:
                return n ? y.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : y.default.Messages.PREMIUM_GUILD_PLAN_MONTH;
            case v.SubscriptionPlans.PREMIUM_YEAR_GUILD:
                return n ? y.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : y.default.Messages.PREMIUM_GUILD_PLAN_YEAR;
            case v.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
                return y.default.Messages.PREMIUM_GUILD_PLAN_3_MONTH;
            case v.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
                return y.default.Messages.PREMIUM_GUILD_PLAN_6_MONTH;
            case v.SubscriptionPlans.PREMIUM_MONTH_LEGACY:
                return y.default.Messages.PREMIUM_PLAN_MONTH;
            case v.SubscriptionPlans.PREMIUM_YEAR_LEGACY:
                return y.default.Messages.PREMIUM_PLAN_YEAR
        }
        let r = Error("Unsupported plan");
        throw (0, m.captureBillingException)(r, {
            tags: {
                planId: e
            }
        }), r
    }

    function W(e) {
        switch (e) {
            case v.PremiumSubscriptionSKUs.TIER_0:
                return y.default.Messages.PREMIUM_TIER_0;
            case v.PremiumSubscriptionSKUs.TIER_1:
                return y.default.Messages.PREMIUM_TIER_1;
            case v.PremiumSubscriptionSKUs.TIER_2:
                return y.default.Messages.PREMIUM_TIER_2
        }
        let t = Error("Unsupported sku");
        throw (0, m.captureBillingException)(t, {
            tags: {
                skuId: e
            }
        }), t
    }

    function K(e) {
        switch (e) {
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return y.default.Messages.PREMIUM_TIER_0;
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return y.default.Messages.PREMIUM_TIER_1;
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
            case v.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case v.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return y.default.Messages.PREMIUM_TIER_2
        }
        let t = Error("Unsupported plan");
        throw (0, m.captureBillingException)(t, {
            tags: {
                planId: e
            }
        }), t
    }

    function z(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return t ? "Basic" : "Nitro Basic";
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return t ? "Classic" : "Nitro Classic";
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
            case v.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case v.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                return "Nitro"
        }
        let n = Error("Unsupported plan");
        throw (0, m.captureBillingException)(n, {
            tags: {
                planId: e
            }
        }), n
    }

    function X(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case v.PremiumTypes.TIER_0:
                return t ? "Basic" : y.default.Messages.PREMIUM_TIER_0;
            case v.PremiumTypes.TIER_1:
                return t ? "Classic" : y.default.Messages.PREMIUM_TIER_1;
            case v.PremiumTypes.TIER_2:
                return y.default.Messages.PREMIUM_TIER_2
        }
    }

    function Q(e) {
        var t, n, i, r, s, a, o, l, u;
        let {
            subscription: _,
            planId: c,
            price: E,
            includePremiumGuilds: I,
            hasDiscountApplied: f,
            activeDiscountInfo: S,
            renewalInvoicePreview: h
        } = e, A = C.default.formatPriceString(C.default.getDefaultPrice(v.SubscriptionPlans.PREMIUM_MONTH_TIER_2), v.SubscriptionIntervalTypes.MONTH), m = ec(_) || null == _.paymentSourceId && !_.isPurchasedExternally && !(null === (t = T.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium()), N = null != E, O = _.status === L.SubscriptionStatusTypes.UNPAID && null !== _.latestInvoice && (null === (n = _.latestInvoice) || void 0 === n ? void 0 : n.status) === L.InvoiceStatusTypes.OPEN, p = m ? L.SubscriptionStatusTypes.CANCELED : O ? L.SubscriptionStatusTypes.UNPAID : _.status, R = null === (s = null !== (r = null == h ? void 0 : h.taxInclusive) && void 0 !== r ? r : null === (i = _.latestInvoice) || void 0 === i ? void 0 : i.taxInclusive) || void 0 === s || s, g = v.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM + (I ? et(_.additionalPlans) : 0);
        switch (c) {
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                switch (p) {
                    case L.SubscriptionStatusTypes.CANCELED:
                        return N ? R ? y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION.format({
                            price: E
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                            price: E
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_NO_PRICE;
                    case L.SubscriptionStatusTypes.ACCOUNT_HOLD:
                        return N ? R ? y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD.format({
                            price: E
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                            price: E
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_NO_PRICE.format();
                    case L.SubscriptionStatusTypes.UNPAID:
                        return y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAYMENT.format();
                    case L.SubscriptionStatusTypes.PAUSE_PENDING:
                        let D = null != _.pauseEndsAt ? d()(_.pauseEndsAt).diff(_.currentPeriodEnd, "days") : null;
                        return null != D ? y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                            pauseDate: _.currentPeriodEnd,
                            pauseDuration: D
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
                            pauseDate: _.currentPeriodEnd
                        });
                    case L.SubscriptionStatusTypes.PAUSED:
                        return y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
                            resumeDate: _.pauseEndsAt
                        });
                    default:
                        return N ? R ? y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0.format({
                            price: E
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_TAX_EXCLUSIVE.format({
                            price: E
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_NO_PRICE
                }
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                switch (p) {
                    case L.SubscriptionStatusTypes.CANCELED:
                        return N ? R ? y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION.format({
                            price: E
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                            price: E
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_NO_PRICE;
                    case L.SubscriptionStatusTypes.ACCOUNT_HOLD:
                        return N ? R ? y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD.format({
                            price: E
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                            price: E
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_NO_PRICE.format();
                    case L.SubscriptionStatusTypes.UNPAID:
                        return y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAYMENT.format();
                    case L.SubscriptionStatusTypes.CANCELED:
                        return N ? R ? y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAUSE.format({
                            price: E,
                            pauseDate: _.currentPeriodEnd
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAUSE_TAX_EXCLUSIVE.format({
                            price: E,
                            pauseDate: _.currentPeriodEnd
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAUSE_NO_PRICE.format({
                            pauseDate: _.currentPeriodEnd
                        });
                    case L.SubscriptionStatusTypes.PAUSED:
                        return y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
                            resumeDate: _.pauseEndsAt
                        });
                    default:
                        return N ? R ? y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1.format({
                            price: E
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_TAX_EXCLUSIVE.format({
                            price: E
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_NO_PRICE
                }
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
            case v.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case v.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                switch (p) {
                    case L.SubscriptionStatusTypes.CANCELED:
                        return N ? R ? y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION.format({
                            price: E,
                            num: g
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                            price: E,
                            num: g
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_NO_PRICE.format({
                            num: g
                        });
                    case L.SubscriptionStatusTypes.ACCOUNT_HOLD:
                        return N ? R ? y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD.format({
                            price: E,
                            num: g
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                            price: E,
                            num: g
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_NO_PRICE.format({
                            num: g
                        });
                    case L.SubscriptionStatusTypes.UNPAID:
                        return y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAYMENT.format({
                            num: g
                        });
                    case L.SubscriptionStatusTypes.PAUSE_PENDING:
                        let M = null != _.pauseEndsAt ? d()(_.pauseEndsAt).diff(_.currentPeriodEnd, "days") : null;
                        return null != M ? y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                            pauseDate: _.currentPeriodEnd,
                            pauseDuration: M
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
                            pauseDate: _.currentPeriodEnd
                        });
                    case L.SubscriptionStatusTypes.PAUSED:
                        return y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
                            resumeDate: _.pauseEndsAt
                        });
                    case L.SubscriptionStatusTypes.BILLING_RETRY:
                        return y.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO.format({
                            endDate: d()(_.currentPeriodStart).add(v.PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS, "days")
                        });
                    default:
                        return f ? R ? y.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                            percent: null !== (a = null == S ? void 0 : S.percentage) && void 0 !== a ? a : v.DISCOUNT_PERCENTAGE_FALLBACK,
                            regularPrice: A,
                            numMonths: null !== (o = null == S ? void 0 : S.duration) && void 0 !== o ? o : v.DISCOUNT_DURATION_FALLBACK
                        }) : y.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC_TAX_EXCLUSIVE.format({
                            percent: null !== (l = null == S ? void 0 : S.percentage) && void 0 !== l ? l : v.DISCOUNT_PERCENTAGE_FALLBACK,
                            regularPrice: A,
                            numMonths: null !== (u = null == S ? void 0 : S.duration) && void 0 !== u ? u : v.DISCOUNT_DURATION_FALLBACK
                        }) : N ? R ? y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2.format({
                            price: E,
                            num: g
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_TAX_EXCLUSIVE.format({
                            price: E,
                            num: g
                        }) : y.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_NO_PRICE.format({
                            num: g
                        })
                }
            default:
                throw Error("Invalid planId ".concat(c))
        }
    }

    function q(e) {
        let {
            renewalInvoicePreview: t,
            subscription: n,
            planId: i,
            includePremiumGuilds: r = !1,
            hasDiscountApplied: s = !1,
            activeDiscountInfo: a
        } = e, o = h.default.get(i);
        return l()(null != o, "Missing plan"), Q({
            subscription: n,
            planId: o.id,
            price: function(e, t, n) {
                let i = e.invoiceItems.find(e => {
                        let {
                            subscriptionPlanId: t
                        } = e;
                        return t === n.id
                    }),
                    r = null == i ? k(n.id, !1, !1, {
                        paymentSourceId: t.paymentSourceId,
                        currency: t.currency
                    }).amount : i.amount;
                return (0, g.formatRate)((0, g.formatPrice)(r, e.currency), n.interval, n.intervalCount)
            }(t, n, o),
            includePremiumGuilds: r,
            hasDiscountApplied: s,
            activeDiscountInfo: a,
            renewalInvoicePreview: t
        })
    }

    function J(e) {
        let {
            planId: t,
            additionalPlans: n
        } = e, i = (0, I.isNoneSubscription)(t) ? null : j(t), r = null == n ? void 0 : n.find(e => {
            let {
                planId: t
            } = e;
            return v.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
        }), s = (null == r ? void 0 : r.planId) === v.SubscriptionPlans.PREMIUM_MONTH_GUILD ? y.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : (null == r ? void 0 : r.planId) === v.SubscriptionPlans.PREMIUM_YEAR_GUILD ? y.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : null, a = null == s ? void 0 : s.format({
            num: null == r ? void 0 : r.quantity
        });
        if (null != i && null != a) return y.default.Messages.PREMIUM_WITH_PREMIUM_GUILD_EXTERNAL_PLAN_DESCRIPTION.format({
            premiumDescription: i,
            premiumGuildDescription: a
        });
        if (null != i) return i;
        if (null != a) return a;
        else throw Error("Subscription without premium or premium guild subscription")
    }

    function Z(e) {
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
        let u = void 0 !== o && t === v.SubscriptionPlanInfo[o].skuId ? o : void 0;
        void 0 === u && l && !s && (u = v.PREMIUM_SKU_TO_MONTHLY_PLAN[t]), a && !s && (void 0 === o || l && v.PREMIUM_MONTHLY_PLANS.has(o)) && E.TrialRedemptionDefaultPlanExperiment.trackExposure({
            location: "de805e_1"
        });
        let d = [];
        switch (t) {
            case v.PremiumSubscriptionSKUs.TIER_0:
                d = [v.SubscriptionPlans.PREMIUM_YEAR_TIER_0, v.SubscriptionPlans.PREMIUM_MONTH_TIER_0];
                break;
            case v.PremiumSubscriptionSKUs.TIER_1:
                d = [v.SubscriptionPlans.PREMIUM_MONTH_TIER_1];
                break;
            case v.PremiumSubscriptionSKUs.TIER_2:
                let _ = i;
                if (null != r) {
                    let e = r.items[0].planId;
                    if (v.MULTI_MONTH_PLANS.has(e)) {
                        let t = v.SubscriptionPlanInfo[e];
                        _ = [...(0, v.MULTI_MONTH_PLANS)].filter(e => {
                            let n = v.SubscriptionPlanInfo[e];
                            return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === v.PremiumSubscriptionSKUs.TIER_2
                        })
                    } else _ = []
                }
                d = [v.SubscriptionPlans.PREMIUM_YEAR_TIER_2, ..._, v.SubscriptionPlans.PREMIUM_MONTH_TIER_2];
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

    function $(e) {
        let t = v.SubscriptionPlanInfo[e];
        if (null == t) {
            let t = Error("Unsupported plan");
            throw (0, m.captureBillingException)(t, {
                tags: {
                    planId: e
                }
            }), t
        }
        return t.skuId
    }

    function ee(e) {
        var t;
        return null == e ? G.ALL : null !== (t = G[e]) && void 0 !== t ? t : []
    }

    function et(e) {
        let t = h.default.getPlanIdsForSkus([ey(v.PremiumSubscriptionSKUs.GUILD)]);
        l()(null != t, "Missing guildSubscriptionPlanIds");
        let n = e.find(e => {
            let {
                planId: n
            } = e;
            return t.includes(n)
        });
        return null != n ? n.quantity : 0
    }
    let en = new Set([v.SubscriptionPlans.NONE_MONTH, v.SubscriptionPlans.NONE_3_MONTH, v.SubscriptionPlans.NONE_6_MONTH, v.SubscriptionPlans.NONE_YEAR, v.SubscriptionPlans.PREMIUM_MONTH_TIER_0, v.SubscriptionPlans.PREMIUM_MONTH_TIER_1, v.SubscriptionPlans.PREMIUM_MONTH_TIER_2, v.SubscriptionPlans.PREMIUM_YEAR_TIER_0, v.SubscriptionPlans.PREMIUM_YEAR_TIER_1, v.SubscriptionPlans.PREMIUM_YEAR_TIER_2, v.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2, v.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2]);

    function ei(e) {
        return en.has(e)
    }

    function er(e) {
        return v.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e)
    }

    function es(e) {
        return ei(e) || er(e)
    }

    function ea(e) {
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
            let t = e.isPurchasedViaApple ? v.DEFAULT_APPLE_GRACE_PERIOD_DAYS : v.DEFAULT_GOOGLE_GRACE_PERIOD_DAYS;
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
            let t = null == e.paymentSourceId ? v.DEFAULT_MAX_GRACE_PERIOD_DAYS : v.PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS;
            return {
                days: t,
                expiresDate: d()(e.currentPeriodStart).add(t, "days")
            }
        }
    }

    function eo(e) {
        if (null == e) return !1;
        let t = S.default.getPaymentSource(e);
        return null != t && M.PREPAID_PAYMENT_SOURCES.has(t.type)
    }

    function el(e) {
        return e.isPurchasedExternally ? e.status === L.SubscriptionStatusTypes.CANCELED : function(e) {
            let {
                renewalMutations: t,
                additionalPlans: n,
                status: i
            } = e, r = et(n);
            return 0 === (null != t ? et(t.additionalPlans) : null) && 0 !== r ? L.SubscriptionStatusTypes.CANCELED : i
        }(e) === L.SubscriptionStatusTypes.CANCELED
    }

    function eu(e) {
        var t, n, i;
        let {
            subscription: r,
            user: s,
            price: a,
            renewalInvoicePreview: o
        } = e, {
            planId: u,
            additionalPlans: d
        } = r, _ = h.default.get(u);
        l()(null != _, "Missing plan");
        let c = et(d),
            E = eI(r.planId, r.paymentSourceId, r.currency, s).amount * c;
        if (null != o) {
            let e = o.invoiceItems.find(e => v.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.subscriptionPlanId));
            null != e && (E = e.amount)
        }
        a = null != a ? a : (0, g.formatPrice)(E, r.currency);
        let I = null === (i = null !== (n = null == o ? void 0 : o.taxInclusive) && void 0 !== n ? n : null === (t = r.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === i || i;
        return el(r) ? r.isPurchasedViaGoogle ? y.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_NO_PRICE.format({
            quantity: c
        }) : I ? y.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION.format({
            quantity: c,
            rate: (0, g.formatRate)(a, _.interval, _.intervalCount)
        }) : y.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            quantity: c,
            rate: (0, g.formatRate)(a, _.interval, _.intervalCount)
        }) : r.status === L.SubscriptionStatusTypes.ACCOUNT_HOLD ? r.isPurchasedViaGoogle ? y.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_NO_PRICE.format({
            quantity: c,
            boostQuantity: c
        }) : I ? y.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD.format({
            quantity: c,
            boostQuantity: c,
            rate: (0, g.formatRate)(a, _.interval, _.intervalCount)
        }) : y.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
            quantity: c,
            boostQuantity: c,
            rate: (0, g.formatRate)(a, _.interval, _.intervalCount)
        }) : r.isPurchasedViaGoogle ? y.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_NO_PRICE.format({
            quantity: c
        }) : I ? y.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO.format({
            quantity: c,
            rate: (0, g.formatRate)(a, _.interval, _.intervalCount)
        }) : y.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_TAX_EXCLUSIVE.format({
            quantity: c,
            rate: (0, g.formatRate)(a, _.interval, _.intervalCount)
        })
    }

    function ed(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = null != t ? k(e.id, !1, i, t) : B(e.id, !1, i),
            s = (0, g.formatPrice)(r.amount, r.currency);
        return e.currency !== M.CurrencyCodes.USD && !0 === n && (s = s.concat("*")), s
    }

    function e_(e, t, n) {
        let i = ed(e, t, n);
        return (0, g.formatRate)(i, e.interval, e.intervalCount)
    }

    function ec(e) {
        let {
            status: t,
            renewalMutations: n
        } = e;
        return t === L.SubscriptionStatusTypes.CANCELED || null != n && (0, I.isNoneSubscription)(n.planId) && !e.isPurchasedExternally
    }

    function eE(e) {
        return e === L.SubscriptionStatusTypes.PAST_DUE || e === L.SubscriptionStatusTypes.ACCOUNT_HOLD || e === L.SubscriptionStatusTypes.BILLING_RETRY
    }

    function eI(e, t, n, i) {
        let r = null != t ? {
                paymentSourceId: t,
                currency: n
            } : {
                country: f.default.ipCountryCodeWithFallback,
                currency: n
            },
            s = h.default.get(e);
        if (null == s) {
            let t = Error("Unsupported plan");
            throw (0, m.captureBillingException)(t, {
                tags: {
                    planId: e
                }
            }), t
        }
        let a = h.default.getForSkuAndInterval(ey(v.PremiumSubscriptionSKUs.GUILD), s.interval, s.intervalCount);
        if (null == a) {
            let t = Error("Unsupported plan");
            throw (0, m.captureBillingException)(t, {
                tags: {
                    planId: e
                }
            }), t
        }
        return k(a.id, (0, R.isPremium)(i), !1, r)
    }

    function eT(e, t, n) {
        let i = t.id;
        if (null != e) switch (i) {
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                return y.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_0;
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return y.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_0;
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                return y.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_1;
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return y.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_1;
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                return y.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_2;
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return y.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_2
        }
        switch (i) {
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                return n ? y.default.Messages.BILLING_SELECT_PLAN : y.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_0;
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return n ? y.default.Messages.BILLING_SELECT_PLAN : y.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_0;
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                return n ? y.default.Messages.BILLING_SELECT_PLAN : y.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_1;
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return n ? y.default.Messages.BILLING_SELECT_PLAN : y.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_1;
            case v.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                return n ? y.default.Messages.BILLING_SELECT_PLAN : y.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
            case v.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return n ? y.default.Messages.BILLING_SELECT_PLAN : y.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_2;
            case v.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case v.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                return y.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTHS_TIER_2.format({
                    intervalCount: t.intervalCount
                });
            case v.SubscriptionPlans.NONE_MONTH:
            case v.SubscriptionPlans.NONE_YEAR:
            case v.SubscriptionPlans.NONE_3_MONTH:
            case v.SubscriptionPlans.NONE_6_MONTH:
            case v.SubscriptionPlans.PREMIUM_MONTH_GUILD:
            case v.SubscriptionPlans.PREMIUM_YEAR_GUILD:
            case v.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
            case v.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
                return y.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
        }
        let r = Error("User is purchasing an unsupported plan");
        throw (0, m.captureBillingException)(r, {
            tags: {
                planId: i
            }
        }), r
    }

    function ef(e) {
        let t = e.invoiceItems[0].subscriptionPlanId,
            n = h.default.get(t);
        return l()(null != n, "Missing subscriptionPlan"), {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    }

    function eS(e) {
        let {
            intervalType: t = v.SubscriptionIntervalTypes.MONTH,
            intervalCount: n = 1,
            capitalize: i = !1
        } = e;
        switch (t) {
            case v.SubscriptionIntervalTypes.DAY:
                if (n >= 7 && n % 7 == 0) return i ? y.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_WEEKS.format({
                    weeks: n / 7
                }) : y.default.Messages.PREMIUM_TRIAL_FREE_DURATION_WEEKS.format({
                    weeks: n / 7
                });
                return i ? y.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_DAYS.format({
                    days: n
                }) : y.default.Messages.PREMIUM_TRIAL_FREE_DURATION_DAYS.format({
                    days: n
                });
            case v.SubscriptionIntervalTypes.MONTH:
                return i ? y.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_MONTHS.format({
                    months: n
                }) : y.default.Messages.PREMIUM_TRIAL_FREE_DURATION_MONTHS.format({
                    months: n
                });
            case v.SubscriptionIntervalTypes.YEAR:
                return i ? y.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_YEARS.format({
                    years: n
                }) : y.default.Messages.PREMIUM_TRIAL_FREE_DURATION_YEARS.format({
                    years: n
                });
            default:
                throw Error("Unsupported interval duration.")
        }
    }

    function eh(e) {
        let {
            intervalType: t = v.SubscriptionIntervalTypes.MONTH,
            intervalCount: n = 1
        } = e;
        switch (t) {
            case v.SubscriptionIntervalTypes.DAY:
                if (n >= 7 && n % 7 == 0) return y.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_WEEKS.format({
                    weeks: n / 7
                });
                return y.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_DAYS.format({
                    days: n
                });
            case v.SubscriptionIntervalTypes.MONTH:
                return y.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_MONTHS.format({
                    months: n
                });
            case v.SubscriptionIntervalTypes.YEAR:
                return y.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_YEARS.format({
                    years: n
                });
            default:
                throw Error("Unsupported interval duration.")
        }
    }

    function eA(e) {
        let {
            intervalType: t = v.SubscriptionIntervalTypes.MONTH,
            intervalCount: n = 1,
            capitalize: i = !1
        } = e;
        switch (t) {
            case v.SubscriptionIntervalTypes.DAY:
                if (n >= 7 && n % 7 == 0) return i ? y.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
                    weeks: n / 7
                }) : y.default.Messages.DURATION_WEEKS.format({
                    weeks: n / 7
                });
                return i ? y.default.Messages.DURATION_DAYS_CAPITALIZE.format({
                    days: n
                }) : y.default.Messages.DURATION_DAYS.format({
                    days: n
                });
            case v.SubscriptionIntervalTypes.MONTH:
                return i ? y.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
                    months: n
                }) : y.default.Messages.DURATION_MONTHS.format({
                    months: n
                });
            case v.SubscriptionIntervalTypes.YEAR:
                return i ? y.default.Messages.DURATION_YEARS_CAPITALIZE.format({
                    years: n
                }) : y.default.Messages.DURATION_YEARS.format({
                    years: n
                });
            default:
                throw Error("Unsupported interval duration.")
        }
    }

    function em(e, t) {
        switch (e) {
            case L.PaymentGateways.APPLE_PARTNER:
            case L.PaymentGateways.APPLE:
                return P[t];
            case L.PaymentGateways.GOOGLE:
                return U[t]
        }
        throw Error("Invalid external payment gateway ".concat(e))
    }

    function eN(e, t) {
        return (0, R.isPremium)(e) || eE(null == t ? void 0 : t.status)
    }

    function eO(e, t) {
        var n, i;
        let r = [],
            s = (null !== (i = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== i ? i : e.items).find(e => v.PREMIUM_PLANS.has(e.planId));
        return null != s && r.push(s), r.push(...t), r.map(t => {
            for (let n of e.items)
                if (t.planId === n.planId) return {
                    ...n,
                    ...t
                };
            return t
        })
    }

    function ep(e) {
        return e.filter(e => !v.PREMIUM_PLANS.has(e.planId))
    }

    function eR(e, t, n, i) {
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

    function eC(e, t) {
        return eR(e, t, 1, v.PREMIUM_PLANS)
    }

    function eg(e, t, n) {
        return eR(e, n, t, v.PREMIUM_GUILD_SUBSCRIPTION_PLANS)
    }

    function eL(e) {
        var t;
        let n = null !== (t = e.find(e => !("id" in e))) && void 0 !== t ? t : e.find(e => v.PREMIUM_PLANS.has(e.planId));
        if (null != n) {
            let t = h.default.get(n.planId);
            l()(null != t, "Missing plan"), e = e.map(e => {
                if (e === n) return e;
                let i = h.default.get(e.planId);
                l()(null != i, "Missing plan");
                let r = h.default.getForSkuAndInterval(i.skuId, t.interval, t.intervalCount);
                return l()(null != r, "Missing planForInterval"), {
                    ...e,
                    planId: r.id
                }
            })
        }
        return e
    }

    function eD(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                useSpace: !0
            },
            n = v.PremiumUserLimits[e].fileSize;
        return (0, N.formatSize)(n / 1024, {
            useKibibytes: !0,
            useSpace: t.useSpace
        })
    }

    function ev(e) {
        return null == e ? null : e.items.find(e => v.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.planId))
    }

    function eM(e) {
        let t = null != e ? w(e) : null;
        return null != t ? $(t.planId) : null
    }

    function ey(e) {
        return e
    }
    t.default = Object.freeze({
        isNewUser: e => null != e && Date.now() - e.createdAt.getTime() < 2592e6,
        isPremiumAtLeast: R.isPremiumAtLeast,
        isPremium: R.isPremium,
        isPremiumExactly: R.isPremiumExactly,
        getPrice: k,
        getDefaultPrice: B,
        getInterval: function(e) {
            let t = v.SubscriptionPlanInfo[e];
            if (null != t) return {
                intervalType: t.interval,
                intervalCount: t.intervalCount
            };
            let n = Error("Unsupported plan");
            throw (0, m.captureBillingException)(n, {
                tags: {
                    planId: e
                }
            }), n
        },
        getIntervalString: x,
        getIntervalStringAsNoun: H,
        getPremiumType: Y,
        getDisplayName: j,
        getDisplayPremiumType: z,
        getPremiumPlanOptions: Z,
        getUpgradeEligibilities: ee,
        getPlanDescription: Q,
        isPremiumSku: function(e) {
            return e === v.PremiumSubscriptionSKUs.TIER_0 || e === v.PremiumSubscriptionSKUs.TIER_1 || e === v.PremiumSubscriptionSKUs.TIER_2
        },
        getClosestUpgrade: function(e) {
            let t = v.SubscriptionPlanInfo[e];
            if (null == t) throw Error("Unrecognized plan.");
            let {
                interval: n
            } = t, i = ee(e);
            for (let e of Object.keys(v.SubscriptionPlanInfo)) {
                let {
                    interval: t
                } = v.SubscriptionPlanInfo[e];
                if (n === t && i.includes(e)) return e
            }
            return null
        },
        getIntervalMonths: function(e, t) {
            if (e === v.SubscriptionIntervalTypes.MONTH) return t;
            if (e === v.SubscriptionIntervalTypes.YEAR) return 12 * t;
            throw Error("".concat(e, " interval subscription period not implemented"))
        },
        getUserMaxFileSize: p.getUserMaxFileSize,
        getSkuIdForPlan: $,
        getSkuIdForPremiumType: function(e) {
            switch (e) {
                case v.PremiumTypes.TIER_0:
                    return v.PremiumSubscriptionSKUs.TIER_0;
                case v.PremiumTypes.TIER_1:
                    return v.PremiumSubscriptionSKUs.TIER_1;
                case v.PremiumTypes.TIER_2:
                    return v.PremiumSubscriptionSKUs.TIER_2
            }
        },
        getNumIncludedPremiumGuildSubscriptionSlots: function(e) {
            if (Y(e) === v.PremiumTypes.TIER_2) return v.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
            return 0
        },
        getBillingInformationString: function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = n ? (0, g.formatPrice)(t.invoiceItems.filter(e => v.PREMIUM_TIER_2_PLANS.has(e.subscriptionPlanId)).map(e => e.amount).reduce((e, t) => t + e, 0), t.currency) : (0, g.formatPrice)(t.total, t.currency);
            if (e.status === L.SubscriptionStatusTypes.CANCELED) return y.default.Messages.PREMIUM_SETTINGS_CANCELLED_INFO.format({
                endDate: t.subscriptionPeriodStart
            });
            if (e.status === L.SubscriptionStatusTypes.PAUSE_PENDING) return y.default.Messages.PREMIUM_SETTINGS_PAUSE_PENDING_INFO.format({
                pauseDate: e.currentPeriodEnd,
                resumeDate: e.pauseEndsAt
            });
            if (e.status === L.SubscriptionStatusTypes.PAUSED) return null == e.pauseEndsAt ? n ? y.default.Messages.PREMIUM_SETTINGS_PAUSED_INFO_WITH_PLAN.format({
                planName: y.default.Messages.PREMIUM,
                price: i
            }) : y.default.Messages.PREMIUM_SETTINGS_PAUSED_INFO : n ? y.default.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO_WITH_PLAN.format({
                planName: y.default.Messages.PREMIUM,
                resumeDate: e.pauseEndsAt,
                price: i
            }) : y.default.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO.format({
                resumeDate: e.pauseEndsAt
            });
            else if (e.status === L.SubscriptionStatusTypes.PAST_DUE) {
                var r, s;
                let t = ea(e).expiresDate;
                return (e.isPurchasedViaGoogle && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_grace_period_expires_date) != null && (t = d()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (s = e.metadata) || void 0 === s ? void 0 : s.apple_grace_period_expires_date) != null && (t = d()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally) ? y.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO_EXTERNAL.format({
                    endDate: t,
                    paymentGatewayName: M.PaymentGatewayToFriendlyName[e.paymentGateway],
                    paymentSourceLink: em(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
                }) : y.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO.format({
                    endDate: t,
                    price: i
                })
            } else return e.status === L.SubscriptionStatusTypes.BILLING_RETRY ? y.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
                endDate: d()(e.currentPeriodStart).add(v.PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS, "days"),
                price: i
            }) : e.status === L.SubscriptionStatusTypes.ACCOUNT_HOLD ? e.isPurchasedViaGoogle && !(0, O.isAndroid)() ? y.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_EXTERNAL.format({
                endDate: d()(e.currentPeriodStart).add(v.MAX_ACCOUNT_HOLD_DAYS, "days"),
                paymentGatewayName: M.PaymentGatewayToFriendlyName[e.paymentGateway],
                paymentSourceLink: em(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
            }) : y.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
                endDate: d()(e.currentPeriodStart).add(v.MAX_ACCOUNT_HOLD_DAYS, "days"),
                price: i
            }) : function(e) {
                return null != e.paymentSourceId && eo(e.paymentSourceId)
            }(e) ? y.default.Messages.PREMIUM_SETTINGS_PREPAID_THROUGH_DATE.format({
                prepaidEndDate: e.currentPeriodEnd
            }) : e.status === L.SubscriptionStatusTypes.UNPAID ? y.default.Messages.PREMIUM_SETTINGS_PAYMENT_PROCESSING.format({
                maxProcessingTimeInDays: v.MAX_PAYMENT_PROCESSING_TIME_DAYS
            }) : e.isPurchasedExternally ? y.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_EXTERNAL.format({
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: M.PaymentGatewayToFriendlyName[e.paymentGateway],
                subscriptionManagementLink: em(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
            }) : n ? y.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_WITH_PLAN.format({
                planName: y.default.Messages.PREMIUM,
                renewalDate: t.subscriptionPeriodStart,
                price: i
            }) : y.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO.format({
                renewalDate: t.subscriptionPeriodStart,
                price: i
            })
        },
        isNoneSubscription: I.isNoneSubscription,
        getPlanIdFromInvoice: function(e, t) {
            let {
                planId: n
            } = e;
            if (e.status === L.SubscriptionStatusTypes.CANCELED || e.status === L.SubscriptionStatusTypes.PAUSE_PENDING) return n;
            l()(null != t, "Expected invoicePreview");
            let i = t.invoiceItems.find(e => {
                let {
                    subscriptionPlanId: t
                } = e;
                return ei(t)
            });
            return n = null == i || (0, I.isNoneSubscription)(i.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : i.subscriptionPlanId
        },
        getStatusFromInvoice: function(e, t) {
            let {
                status: n
            } = e;
            if (e.status === L.SubscriptionStatusTypes.CANCELED || e.status === L.SubscriptionStatusTypes.PAUSE_PENDING) return n;
            l()(null != t, "Expected invoicePreview");
            let i = t.invoiceItems.find(e => {
                let {
                    subscriptionPlanId: t
                } = e;
                return ei(t)
            });
            return (null == i || (0, I.isNoneSubscription)(i.subscriptionPlanId)) && (n = L.SubscriptionStatusTypes.CANCELED), n
        },
        isBaseSubscriptionCanceled: ec,
        getPremiumGuildIntervalPrice: eI,
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
        getBillingReviewSubheader: eT,
        getIntervalForInvoice: ef,
        getPremiumPlanItem: w,
        getGuildBoostPlanItem: ev,
        isBoostOnlySubscription: function(e) {
            return null != e && null == w(e) && null != ev(e)
        },
        getPremiumSkuIdForSubscription: eM,
        getPremiumTypeFromSubscription: function(e) {
            if (null != e) {
                let t = w(e);
                if (null != t) return Y(t.planId)
            }
        },
        getPremiumTypeFromSubscriptionRenewalMutations: function(e) {
            if (null != e && null != e.renewalMutations) {
                let t = w(e.renewalMutations);
                if (null != t) return Y(t.planId)
            }
        },
        getPremiumGradientColor: function(e) {
            switch (e) {
                case v.PremiumTypes.TIER_0:
                    return D.Gradients.PREMIUM_TIER_0;
                case v.PremiumTypes.TIER_1:
                    return D.Gradients.PREMIUM_TIER_1;
                case v.PremiumTypes.TIER_2:
                    return D.Gradients.PREMIUM_TIER_2
            }
        },
        castPremiumSubscriptionAsSkuId: ey,
        canUseAnimatedEmojis: function(e) {
            return (0, c.canUserUse)(c.ANIMATED_EMOJIS, e)
        },
        canUseEmojisEverywhere: function(e) {
            return (0, c.canUserUse)(c.EMOJIS_EVERYWHERE, e)
        },
        canUseSoundboardEverywhere: function(e) {
            return (0, c.canUserUse)(c.SOUNDBOARD_EVERYWHERE, e)
        },
        canUseCustomCallSounds: function(e) {
            return (0, c.canUserUse)(c.CUSTOM_CALL_SOUNDS, e)
        },
        canUploadLargeFiles: function(e) {
            return (0, c.canUserUse)(c.UPLOAD_LARGE_FILES, e)
        },
        canUseBadges: function(e) {
            return (0, c.canUserUse)(c.PROFILE_BADGES, e)
        },
        canUseHighVideoUploadQuality: function(e) {
            return (0, c.canUserUse)(c.INCREASED_VIDEO_UPLOAD_QUALITY, e)
        },
        canEditDiscriminator: function(e) {
            return (0, c.canUserUse)(c.CUSTOM_DISCRIMINATOR, e)
        },
        hasBoostDiscount: function(e) {
            return (0, c.canUserUse)(c.BOOST_DISCOUNT, e)
        },
        canUseAnimatedAvatar: function(e) {
            return (0, c.canUserUse)(c.ANIMATED_AVATAR, e)
        },
        canUseFancyVoiceChannelReactions: function(e) {
            return (0, c.canUserUse)(c.FANCY_VOICE_CHANNEL_REACTIONS, e)
        },
        canInstallPremiumApplications: function(e) {
            return (0, c.canUserUse)(c.INSTALL_PREMIUM_APPLICATIONS, e)
        },
        canUseIncreasedMessageLength: function(e) {
            return (0, c.canUserUse)(c.INCREASED_MESSAGE_LENGTH, e)
        },
        canUseIncreasedGuildCap: function(e) {
            return (0, c.canUserUse)(c.INCREASED_GUILD_LIMIT, e)
        },
        canRedeemPremiumPerks: function(e) {
            return (0, c.canUserUse)(c.REDEEM_PREMIUM_PERKS, e)
        },
        canUsePremiumProfileCustomization: function(e) {
            return (0, c.canUserUse)(c.PROFILE_PREMIUM_FEATURES, e)
        },
        canUsePremiumAppIcons: function(e) {
            return (0, c.canUserUse)(c.APP_ICONS, e)
        },
        canUsePremiumGuildMemberProfile: function(e) {
            return (0, c.canUserUse)(c.PREMIUM_GUILD_MEMBER_PROFILE, e)
        },
        canUseClientThemes: function(e) {
            return (0, c.canUserUse)(c.CLIENT_THEMES, e)
        },
        canStreamQuality: function(e, t) {
            return "high" === e ? (0, c.canUserUse)(c.STREAM_HIGH_QUALITY, t) : "mid" === e && (0, c.canUserUse)(c.STREAM_MID_QUALITY, t)
        },
        hasFreeBoosts: function(e) {
            return (0, c.canUserUse)(c.FREE_BOOSTS, e)
        },
        canUseCustomStickersEverywhere: function(e) {
            return (0, c.canUserUse)(c.STICKERS_EVERYWHERE, e)
        },
        canUseCustomBackgrounds: function(e) {
            return (0, c.canUserUse)(c.VIDEO_FILTER_ASSETS, e)
        },
        canUseCollectibles: function(e) {
            return (0, c.canUserUse)(c.COLLECTIBLES, e)
        },
        formatPriceString: function(e, t) {
            let n = (0, g.formatPrice)(e.amount, e.currency),
                i = H(t);
            return "".concat(n, "/").concat(i)
        },
        StreamQuality: r
    })
}