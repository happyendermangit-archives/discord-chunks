function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isPremiumAtLeast: function() {
            return A.isPremiumAtLeast
        },
        isPremium: function() {
            return A.isPremium
        },
        isPremiumExactly: function() {
            return A.isPremiumExactly
        },
        StreamQuality: function() {
            return s
        },
        getPremiumPlanItem: function() {
            return k
        },
        getDefaultPrice: function() {
            return V
        },
        getPrice: function() {
            return G
        },
        experimentalGetPrices: function() {
            return F
        },
        getDiscountIntervalString: function() {
            return x
        },
        getIntervalString: function() {
            return B
        },
        getIntervalStringAsNoun: function() {
            return H
        },
        getPremiumType: function() {
            return Y
        },
        getDisplayName: function() {
            return j
        },
        getDisplayNameFromSku: function() {
            return W
        },
        getTierDisplayName: function() {
            return K
        },
        getDisplayPremiumType: function() {
            return z
        },
        getPremiumTypeDisplayName: function() {
            return q
        },
        getPlanDescriptionFromInvoice: function() {
            return Q
        },
        getExternalPlanDisplayName: function() {
            return Z
        },
        getPremiumPlanOptions: function() {
            return J
        },
        getNumPremiumGuildSubscriptions: function() {
            return et
        },
        isPremiumBaseSubscriptionPlan: function() {
            return ei
        },
        isPremiumGuildSubscriptionPlan: function() {
            return es
        },
        isPremiumSubscriptionPlan: function() {
            return er
        },
        getBillingGracePeriodDays: function() {
            return ea
        },
        isPrepaidPaymentSource: function() {
            return eo
        },
        isPremiumGuildSubscriptionCanceled: function() {
            return el
        },
        getPremiumGuildHeaderDescription: function() {
            return eu
        },
        getFormattedPriceForPlan: function() {
            return ed
        },
        getFormattedRateForPlan: function() {
            return ec
        },
        isSubscriptionStatusFailedPayment: function() {
            return e_
        },
        getBillingReviewSubheader: function() {
            return eE
        },
        getIntervalForInvoice: function() {
            return eg
        },
        formatTrialOfferIntervalDuration: function() {
            return em
        },
        formatTrialCtaIntervalDuration: function() {
            return ep
        },
        formatIntervalDuration: function() {
            return eS
        },
        getExternalSubscriptionMethodUrl: function() {
            return ev
        },
        hasPremiumSubscriptionToDisplay: function() {
            return eT
        },
        getItemsFromNewAdditionalPlans: function() {
            return eI
        },
        getItemsWithoutPremiumPlanItem: function() {
            return eC
        },
        getItemsWithUpsertedPlanIdForGroup: function() {
            return eA
        },
        getItemsWithUpsertedPremiumPlanId: function() {
            return ey
        },
        getItemsWithUpsertedPremiumGuildPlan: function() {
            return eN
        },
        coerceExistingItemsToNewItemInterval: function() {
            return eR
        },
        getMaxFileSizeForPremiumType: function() {
            return eO
        },
        getPremiumSkuIdForSubscription: function() {
            return eP
        },
        castPremiumSubscriptionAsSkuId: function() {
            return eL
        },
        default: function() {
            return eM
        }
    }), n("70102"), n("222007"), n("843762"), n("808653"), n("424973");
    var i, s, r, a, o = n("627445"),
        l = n.n(o),
        u = n("866227"),
        d = n.n(u);
    n("446674");
    var c = n("605250"),
        f = n("432155"),
        _ = n("669073"),
        h = n("797647"),
        E = n("697218"),
        g = n("160299"),
        m = n("357957"),
        p = n("10514"),
        S = n("521012"),
        v = n("745279"),
        T = n("993105"),
        I = n("773336"),
        C = n("886551"),
        A = n("764364"),
        y = n("719923"),
        N = n("153160"),
        R = n("49111"),
        O = n("504593"),
        D = n("646718"),
        P = n("843455"),
        L = n("782340");
    let M = {
            PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
            BILLING_HISTORY: "https://support.apple.com/HT201266",
            SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039"
        },
        b = {
            SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
            PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
            BILLING_HISTORY: "https://play.google.com/store/account/orderhistory"
        },
        U = new c.default("PremiumUtils.tsx"),
        w = {
            [D.SubscriptionPlans.NONE_MONTH]: [D.SubscriptionPlans.NONE_YEAR, D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_YEAR_TIER_1, D.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
            [D.SubscriptionPlans.NONE_YEAR]: [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_YEAR_TIER_1, D.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
            [D.SubscriptionPlans.PREMIUM_MONTH_TIER_0]: [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_YEAR_TIER_1, D.SubscriptionPlans.PREMIUM_MONTH_TIER_1, D.SubscriptionPlans.PREMIUM_YEAR_TIER_0],
            [D.SubscriptionPlans.PREMIUM_YEAR_TIER_0]: [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_YEAR_TIER_1, D.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
            [D.SubscriptionPlans.PREMIUM_MONTH_TIER_1]: [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_YEAR_TIER_1],
            [D.SubscriptionPlans.PREMIUM_YEAR_TIER_1]: [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
            [D.SubscriptionPlans.PREMIUM_MONTH_TIER_2]: [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
            [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2]: [],
            ALL: [D.SubscriptionPlans.NONE_MONTH, D.SubscriptionPlans.NONE_YEAR, D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_YEAR_TIER_1, D.SubscriptionPlans.PREMIUM_MONTH_TIER_1, D.SubscriptionPlans.PREMIUM_YEAR_TIER_0, D.SubscriptionPlans.PREMIUM_MONTH_TIER_0]
        };

    function k(e) {
        return e.items.find(e => D.PREMIUM_PLANS.has(e.planId))
    }

    function V(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = null !== (t = m.default.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
            r = S.default.getPremiumTypeSubscription();
        return null != r && null != r.paymentSourceId && (s = r.paymentSourceId), G(e, n, i, {
            paymentSourceId: s
        })
    }

    function G(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            {
                paymentSourceId: s,
                currency: r
            } = i,
            a = p.default.get(e);
        if (null != a) {
            let i = R.PriceSetAssignmentPurchaseTypes.DEFAULT;
            n ? i = R.PriceSetAssignmentPurchaseTypes.GIFT : t && (i = R.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_1);
            let a = function(e) {
                let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    purchaseType: R.PriceSetAssignmentPurchaseTypes.DEFAULT
                }, s = F(e, {
                    paymentSourceId: t,
                    purchaseType: n
                });
                return (0 === s.length && U.warn("No prices found for planId: ".concat(e, ", paymentSourceId: ").concat(t, ", purchaseType: ").concat(n)), null != i) ? s.find(e => e.currency === i) : s[0]
            }(e, {
                paymentSourceId: s,
                purchaseType: i,
                currency: r
            });
            if (null == a) {
                let t = Error("Couldn't find price");
                throw (0, v.captureBillingException)(t, {
                    extra: {
                        paymentSourceId: s
                    },
                    tags: {
                        purchaseType: i.toString(),
                        planId: e,
                        currency: null != r ? r : "unknown"
                    }
                }), t
            }
            return a
        }
        let o = Error("Plan not found");
        throw (0, v.captureBillingException)(o, {
            tags: {
                planId: e,
                currency: null != r ? r : "unknown"
            },
            extra: {
                ...i,
                isGift: n
            }
        }), o
    }(r = i || (i = {})).BUNDLE = "bundle", r.TIER_0 = "tier_0", r.TIER_1 = "tier_1", r.TIER_2 = "tier_2", r.PREMIUM_GUILD = "premium_guild", (a = s || (s = {})).MID = "mid", a.HIGH = "high";

    function F(e) {
        let {
            paymentSourceId: t,
            purchaseType: n
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            purchaseType: R.PriceSetAssignmentPurchaseTypes.DEFAULT
        }, i = function(e, t) {
            let n = p.default.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw (0, v.captureBillingException)(n, {
                    tags: {
                        planId: e,
                        purchaseType: t.toString()
                    }
                }), n
            }
            if (null == n.prices) throw Error("No prices returned for ".concat(e, ", is your user in the experiment?"));
            let i = n.prices[t];
            if (null == i) throw U.info("Purchase types: ".concat(JSON.stringify(Object.keys(n.prices)))), Error("No prices returned for purchase type ".concat(t, " for plan ").concat(e));
            return i
        }(e, n);
        if (null != t) {
            let s = i.paymentSourcePrices[t];
            if (null == s) {
                U.info("Payment sources IDs: ".concat(JSON.stringify(Object.keys(i.paymentSourcePrices)))), U.info("prices: ".concat(s));
                let r = Error("Missing prices for payment source on subscription plan");
                (0, v.captureBillingException)(r, {
                    extra: {
                        paymentSourceId: t
                    },
                    tags: {
                        purchaseType: n.toString(),
                        planId: e
                    }
                })
            } else if (0 !== s.length) return s
        }
        if (null == i.countryPrices.prices) {
            U.info("countryPrices: ".concat(JSON.stringify(i.countryPrices)));
            let t = Error("Missing prices for country");
            throw (0, v.captureBillingException)(t, {
                tags: {
                    countryCode: i.countryPrices.countryCode,
                    planId: e
                }
            }), t
        }
        return i.countryPrices.prices
    }

    function x(e) {
        switch (e) {
            case D.DiscountUserUsageLimitIntervalTypes.MONTH:
                return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
            case D.DiscountUserUsageLimitIntervalTypes.YEAR:
                return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
            case D.DiscountUserUsageLimitIntervalTypes.DAY:
            case D.DiscountUserUsageLimitIntervalTypes.WEEK:
            default:
                throw Error("Unexpected interval")
        }
    }

    function B(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : D.PremiumTypes.TIER_2;
        if (t || n) switch (e) {
            case D.SubscriptionIntervalTypes.MONTH:
                let a = (r === D.PremiumTypes.TIER_0 ? L.default.Messages.BASIC_GIFT_DURATION : L.default.Messages.GIFT_DURATION).format({
                    timeInterval: L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                });
                return s ? a : L.default.Messages.PAYMENT_MODAL_ONE_MONTH;
            case D.SubscriptionIntervalTypes.YEAR:
                let o = (r === D.PremiumTypes.TIER_0 ? L.default.Messages.BASIC_GIFT_DURATION : L.default.Messages.GIFT_DURATION).format({
                    timeInterval: L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                });
                return s ? o : L.default.Messages.PAYMENT_MODAL_ONE_YEAR;
            default:
                throw Error("Unexpected interval")
        }
        switch (e) {
            case D.SubscriptionIntervalTypes.MONTH:
                if (1 !== i) return L.default.Messages.MULTI_MONTHS.format({
                    intervalCount: i
                });
                return L.default.Messages.MONTHLY;
            case D.SubscriptionIntervalTypes.YEAR:
                return L.default.Messages.YEARLY;
            default:
                throw Error("Unexpected interval")
        }
    }

    function H(e) {
        switch (e) {
            case D.SubscriptionIntervalTypes.MONTH:
                return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
            case D.SubscriptionIntervalTypes.YEAR:
                return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
            default:
                throw Error("Unexpected interval")
        }
    }

    function Y(e) {
        let t = D.SubscriptionPlanInfo[e];
        if (null != t) return t.premiumType;
        let n = Error("Unsupported plan");
        throw (0, v.captureBillingException)(n, {
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
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                return t ? L.default.Messages.PREMIUM_PLAN_MONTH_TIER_0_TRIAL_DURATION.format({
                    duration: i
                }) : n ? L.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_0 : L.default.Messages.PREMIUM_PLAN_MONTH_TIER_0;
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return t ? L.default.Messages.PREMIUM_PLAN_YEAR_TIER_0_TRIAL_DURATION.format({
                    duration: i
                }) : n ? L.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_0 : L.default.Messages.PREMIUM_PLAN_YEAR_TIER_0;
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                return n ? L.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_1 : L.default.Messages.PREMIUM_PLAN_MONTH_TIER_1;
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return n ? L.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_1 : L.default.Messages.PREMIUM_PLAN_YEAR_TIER_1;
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                return t ? L.default.Messages.PREMIUM_PLAN_MONTH_TIER_2_TRIAL_DURATION.format({
                    duration: i
                }) : n ? L.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_2 : L.default.Messages.PREMIUM_PLAN_MONTH_TIER_2;
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return t ? L.default.Messages.PREMIUM_PLAN_YEAR_TIER_2_TRIAL_DURATION.format({
                    duration: i
                }) : n ? L.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_2 : L.default.Messages.PREMIUM_PLAN_YEAR_TIER_2;
            case D.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
                return L.default.Messages.PREMIUM_PLAN_3_MONTH_TIER_2;
            case D.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                return L.default.Messages.PREMIUM_PLAN_6_MONTH_TIER_2;
            case D.SubscriptionPlans.PREMIUM_MONTH_GUILD:
                return n ? L.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : L.default.Messages.PREMIUM_GUILD_PLAN_MONTH;
            case D.SubscriptionPlans.PREMIUM_YEAR_GUILD:
                return n ? L.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : L.default.Messages.PREMIUM_GUILD_PLAN_YEAR;
            case D.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
                return L.default.Messages.PREMIUM_GUILD_PLAN_3_MONTH;
            case D.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
                return L.default.Messages.PREMIUM_GUILD_PLAN_6_MONTH;
            case D.SubscriptionPlans.PREMIUM_MONTH_LEGACY:
                return L.default.Messages.PREMIUM_PLAN_MONTH;
            case D.SubscriptionPlans.PREMIUM_YEAR_LEGACY:
                return L.default.Messages.PREMIUM_PLAN_YEAR
        }
        let s = Error("Unsupported plan");
        throw (0, v.captureBillingException)(s, {
            tags: {
                planId: e
            }
        }), s
    }

    function W(e) {
        switch (e) {
            case D.PremiumSubscriptionSKUs.TIER_0:
                return L.default.Messages.PREMIUM_TIER_0;
            case D.PremiumSubscriptionSKUs.TIER_1:
                return L.default.Messages.PREMIUM_TIER_1;
            case D.PremiumSubscriptionSKUs.TIER_2:
                return L.default.Messages.PREMIUM_TIER_2
        }
        let t = Error("Unsupported sku");
        throw (0, v.captureBillingException)(t, {
            tags: {
                skuId: e
            }
        }), t
    }

    function K(e) {
        switch (e) {
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return L.default.Messages.PREMIUM_TIER_0;
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return L.default.Messages.PREMIUM_TIER_1;
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
            case D.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case D.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return L.default.Messages.PREMIUM_TIER_2
        }
        let t = Error("Unsupported plan");
        throw (0, v.captureBillingException)(t, {
            tags: {
                planId: e
            }
        }), t
    }

    function z(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return t ? "Basic" : "Nitro Basic";
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return t ? "Classic" : "Nitro Classic";
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
            case D.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case D.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                return "Nitro"
        }
        let n = Error("Unsupported plan");
        throw (0, v.captureBillingException)(n, {
            tags: {
                planId: e
            }
        }), n
    }

    function q(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case D.PremiumTypes.TIER_0:
                return t ? "Basic" : L.default.Messages.PREMIUM_TIER_0;
            case D.PremiumTypes.TIER_1:
                return t ? "Classic" : L.default.Messages.PREMIUM_TIER_1;
            case D.PremiumTypes.TIER_2:
                return L.default.Messages.PREMIUM_TIER_2
        }
    }

    function X(e) {
        var t, n;
        let {
            subscription: i,
            planId: s,
            price: r,
            includePremiumGuilds: a,
            hasDiscountApplied: o,
            activeDiscountDuration: l
        } = e, u = y.default.formatPriceString(y.default.getDefaultPrice(D.SubscriptionPlans.PREMIUM_MONTH_TIER_2), D.SubscriptionIntervalTypes.MONTH), d = ef(i) || null == i.paymentSourceId && !i.isPurchasedExternally && !(null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium()), c = null != r, f = i.status === R.SubscriptionStatusTypes.UNPAID && null !== i.latestInvoice && (null === (n = i.latestInvoice) || void 0 === n ? void 0 : n.status) === R.InvoiceStatusTypes.OPEN, _ = d ? R.SubscriptionStatusTypes.CANCELED : f ? R.SubscriptionStatusTypes.UNPAID : i.status, h = D.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM + (a ? et(i.additionalPlans) : 0);
        switch (s) {
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                switch (_) {
                    case R.SubscriptionStatusTypes.CANCELED:
                        return c ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION.format({
                            price: r
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_NO_PRICE;
                    case R.SubscriptionStatusTypes.ACCOUNT_HOLD:
                        return c ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD.format({
                            price: r
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_NO_PRICE.format();
                    case R.SubscriptionStatusTypes.UNPAID:
                        return L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAYMENT.format();
                    case R.SubscriptionStatusTypes.PAUSE_PENDING:
                        return c ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAUSE.format({
                            price: r,
                            pauseDate: i.currentPeriodEnd
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAUSE_NO_PRICE.format({
                            pauseDate: i.currentPeriodEnd
                        });
                    default:
                        return c ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0.format({
                            price: r
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_NO_PRICE
                }
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                switch (_) {
                    case R.SubscriptionStatusTypes.CANCELED:
                        return c ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION.format({
                            price: r
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_NO_PRICE;
                    case R.SubscriptionStatusTypes.ACCOUNT_HOLD:
                        return c ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD.format({
                            price: r
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_NO_PRICE.format();
                    case R.SubscriptionStatusTypes.UNPAID:
                        return L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAYMENT.format();
                    case R.SubscriptionStatusTypes.CANCELED:
                        return c ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAUSE.format({
                            price: r,
                            pauseDate: i.currentPeriodEnd
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAUSE_NO_PRICE.format({
                            pauseDate: i.currentPeriodEnd
                        });
                    default:
                        return c ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1.format({
                            price: r
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_NO_PRICE
                }
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
            case D.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case D.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                switch (_) {
                    case R.SubscriptionStatusTypes.CANCELED:
                        return c ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION.format({
                            price: r,
                            num: h
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_NO_PRICE.format({
                            num: h
                        });
                    case R.SubscriptionStatusTypes.ACCOUNT_HOLD:
                        return c ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD.format({
                            price: r,
                            num: h
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_NO_PRICE.format({
                            num: h
                        });
                    case R.SubscriptionStatusTypes.UNPAID:
                        return L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAYMENT.format({
                            num: h
                        });
                    case R.SubscriptionStatusTypes.PAUSE_PENDING:
                        return c ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAUSE.format({
                            price: r,
                            num: h,
                            pauseDate: i.currentPeriodEnd
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAUSE_NO_PRICE.format({
                            num: h,
                            pauseDate: i.currentPeriodEnd
                        });
                    default:
                        return o ? L.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                            percent: 30,
                            regularPrice: u,
                            numMonths: null != l ? l : D.DISCOUNT_DURATION_FALLBACK
                        }) : c ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2.format({
                            price: r,
                            num: h
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_NO_PRICE.format({
                            num: h
                        })
                }
            default:
                throw Error("Invalid planId ".concat(s))
        }
    }

    function Q(e) {
        let {
            renewalInvoicePreview: t,
            subscription: n,
            planId: i,
            includePremiumGuilds: s = !1,
            hasDiscountApplied: r = !1,
            activeDiscountDuration: a
        } = e, o = p.default.get(i);
        return l(null != o, "Missing plan"), X({
            subscription: n,
            planId: o.id,
            price: function(e, t, n) {
                let i = e.invoiceItems.find(e => {
                        let {
                            subscriptionPlanId: t
                        } = e;
                        return t === n.id
                    }),
                    s = null == i ? G(n.id, !1, !1, {
                        paymentSourceId: t.paymentSourceId,
                        currency: t.currency
                    }).amount : i.amount;
                return (0, N.formatRate)((0, N.formatPrice)(s, e.currency), n.interval, n.intervalCount)
            }(t, n, o),
            includePremiumGuilds: s,
            hasDiscountApplied: r,
            activeDiscountDuration: a
        })
    }

    function Z(e) {
        let {
            planId: t,
            additionalPlans: n
        } = e, i = (0, h.isNoneSubscription)(t) ? null : j(t), s = null == n ? void 0 : n.find(e => {
            let {
                planId: t
            } = e;
            return D.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
        }), r = (null == s ? void 0 : s.planId) === D.SubscriptionPlans.PREMIUM_MONTH_GUILD ? L.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : (null == s ? void 0 : s.planId) === D.SubscriptionPlans.PREMIUM_YEAR_GUILD ? L.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : null, a = null == r ? void 0 : r.format({
            num: null == s ? void 0 : s.quantity
        });
        if (null != i && null != a) return L.default.Messages.PREMIUM_WITH_PREMIUM_GUILD_EXTERNAL_PLAN_DESCRIPTION.format({
            premiumDescription: i,
            premiumGuildDescription: a
        });
        if (null != i) return i;
        if (null != a) return a;
        else throw Error("Subscription without premium or premium guild subscription")
    }

    function J(e) {
        let {
            skuId: t,
            isPremium: n,
            multiMonthPlans: i,
            currentSubscription: s,
            isGift: r,
            isEligibleForTrial: a,
            defaultPlanId: o,
            defaultToMonthlyPlan: l
        } = e;
        if (null == t || !n) return [];
        let u = void 0 !== o && t === D.SubscriptionPlanInfo[o].skuId ? o : void 0;
        void 0 === u && l && !r && (u = D.PREMIUM_SKU_TO_MONTHLY_PLAN[t]), a && !r && (void 0 === o || l && D.PREMIUM_MONTHLY_PLANS.has(o)) && _.TrialRedemptionDefaultPlanExperiment.trackExposure({
            location: "de805e_1"
        });
        let d = [];
        switch (t) {
            case D.PremiumSubscriptionSKUs.TIER_0:
                d = [D.SubscriptionPlans.PREMIUM_YEAR_TIER_0, D.SubscriptionPlans.PREMIUM_MONTH_TIER_0];
                break;
            case D.PremiumSubscriptionSKUs.TIER_1:
                d = [D.SubscriptionPlans.PREMIUM_MONTH_TIER_1];
                break;
            case D.PremiumSubscriptionSKUs.TIER_2:
                let c = i;
                if (null != s) {
                    let e = s.items[0].planId;
                    if (D.MULTI_MONTH_PLANS.has(e)) {
                        let t = D.SubscriptionPlanInfo[e];
                        c = [...(0, D.MULTI_MONTH_PLANS)].filter(e => {
                            let n = D.SubscriptionPlanInfo[e];
                            return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === D.PremiumSubscriptionSKUs.TIER_2
                        })
                    } else c = []
                }
                d = [D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, ...c, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2];
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
        let t = D.SubscriptionPlanInfo[e];
        if (null == t) {
            let t = Error("Unsupported plan");
            throw (0, v.captureBillingException)(t, {
                tags: {
                    planId: e
                }
            }), t
        }
        return t.skuId
    }

    function ee(e) {
        var t;
        return null == e ? w.ALL : null !== (t = w[e]) && void 0 !== t ? t : []
    }

    function et(e) {
        let t = p.default.getPlanIdsForSkus([eL(D.PremiumSubscriptionSKUs.GUILD)]);
        l(null != t, "Missing guildSubscriptionPlanIds");
        let n = e.find(e => {
            let {
                planId: n
            } = e;
            return t.includes(n)
        });
        return null != n ? n.quantity : 0
    }
    let en = new Set([D.SubscriptionPlans.NONE_MONTH, D.SubscriptionPlans.NONE_3_MONTH, D.SubscriptionPlans.NONE_6_MONTH, D.SubscriptionPlans.NONE_YEAR, D.SubscriptionPlans.PREMIUM_MONTH_TIER_0, D.SubscriptionPlans.PREMIUM_MONTH_TIER_1, D.SubscriptionPlans.PREMIUM_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_YEAR_TIER_0, D.SubscriptionPlans.PREMIUM_YEAR_TIER_1, D.SubscriptionPlans.PREMIUM_YEAR_TIER_2, D.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2, D.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2]);

    function ei(e) {
        return en.has(e)
    }

    function es(e) {
        return D.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e)
    }

    function er(e) {
        return ei(e) || es(e)
    }

    function ea(e) {
        var t, n, i;
        if (e.isPurchasedViaApple && (null === (t = e.metadata) || void 0 === t ? void 0 : t.apple_grace_period_expires_date) != null) {
            let t = d(e.metadata.apple_grace_period_expires_date),
                n = d(e.currentPeriodStart);
            return d.duration(t.diff(n)).days()
        }
        if (e.isPurchasedViaGoogle && (null === (n = e.metadata) || void 0 === n ? void 0 : n.google_grace_period_expires_date) != null && (null === (i = e.metadata) || void 0 === i ? void 0 : i.google_original_expires_date) != null) {
            let t = d(e.metadata.google_grace_period_expires_date),
                n = d(e.metadata.google_original_expires_date);
            return d.duration(t.diff(n)).days()
        }
        if (e.isPurchasedExternally || null == e.paymentSourceId) return D.DEFAULT_MAX_GRACE_PERIOD_DAYS;
        return D.PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS
    }

    function eo(e) {
        if (null == e) return !1;
        let t = m.default.getPaymentSource(e);
        return null != t && P.PREPAID_PAYMENT_SOURCES.has(t.type)
    }

    function el(e) {
        return e.isPurchasedExternally ? e.status === R.SubscriptionStatusTypes.CANCELED : function(e) {
            let {
                renewalMutations: t,
                additionalPlans: n,
                status: i
            } = e, s = et(n), r = null != t ? et(t.additionalPlans) : null;
            return 0 === r && 0 !== s ? R.SubscriptionStatusTypes.CANCELED : i
        }(e) === R.SubscriptionStatusTypes.CANCELED
    }

    function eu(e) {
        let {
            subscription: t,
            user: n,
            price: i,
            renewalInvoicePreview: s
        } = e, {
            planId: r,
            additionalPlans: a
        } = t, o = p.default.get(r);
        l(null != o, "Missing plan");
        let u = et(a),
            d = eh(t.planId, t.paymentSourceId, t.currency, n),
            c = d.amount * u;
        if (null != s) {
            let e = s.invoiceItems.find(e => D.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.subscriptionPlanId));
            null != e && (c = e.amount)
        }
        i = null != i ? i : (0, N.formatPrice)(c, t.currency);
        let f = el(t);
        return f ? t.isPurchasedViaGoogle ? L.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_NO_PRICE.format({
            quantity: u
        }) : L.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION.format({
            quantity: u,
            rate: (0, N.formatRate)(i, o.interval, o.intervalCount)
        }) : t.status === R.SubscriptionStatusTypes.ACCOUNT_HOLD ? t.isPurchasedViaGoogle ? L.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_NO_PRICE.format({
            quantity: u,
            boostQuantity: u
        }) : L.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD.format({
            quantity: u,
            boostQuantity: u,
            rate: (0, N.formatRate)(i, o.interval, o.intervalCount)
        }) : t.isPurchasedViaGoogle ? L.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_NO_PRICE.format({
            quantity: u
        }) : L.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO.format({
            quantity: u,
            rate: (0, N.formatRate)(i, o.interval, o.intervalCount)
        })
    }

    function ed(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = null != t ? G(e.id, !1, i, t) : V(e.id, !1, i),
            r = (0, N.formatPrice)(s.amount, s.currency);
        return e.currency !== P.CurrencyCodes.USD && !0 === n && (r = r.concat("*")), r
    }

    function ec(e, t, n) {
        let i = ed(e, t, n);
        return (0, N.formatRate)(i, e.interval, e.intervalCount)
    }

    function ef(e) {
        let {
            status: t,
            renewalMutations: n
        } = e;
        return t === R.SubscriptionStatusTypes.CANCELED || null != n && (0, h.isNoneSubscription)(n.planId) && !e.isPurchasedExternally
    }

    function e_(e) {
        return e === R.SubscriptionStatusTypes.PAST_DUE || e === R.SubscriptionStatusTypes.ACCOUNT_HOLD || e === R.SubscriptionStatusTypes.BILLING_RETRY
    }

    function eh(e, t, n, i) {
        let s = null != t ? {
                paymentSourceId: t,
                currency: n
            } : {
                country: g.default.ipCountryCodeWithFallback,
                currency: n
            },
            r = p.default.get(e);
        if (null == r) {
            let t = Error("Unsupported plan");
            throw (0, v.captureBillingException)(t, {
                tags: {
                    planId: e
                }
            }), t
        }
        let a = p.default.getForSkuAndInterval(eL(D.PremiumSubscriptionSKUs.GUILD), r.interval, r.intervalCount);
        if (null == a) {
            let t = Error("Unsupported plan");
            throw (0, v.captureBillingException)(t, {
                tags: {
                    planId: e
                }
            }), t
        }
        return G(a.id, (0, A.isPremium)(i), !1, s)
    }

    function eE(e, t, n) {
        let i = t.id;
        if (null != e) switch (i) {
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                return L.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_0;
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return L.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_0;
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                return L.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_1;
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return L.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_1;
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                return L.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_2;
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return L.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_2
        }
        switch (i) {
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                return n ? L.default.Messages.BILLING_SELECT_PLAN : L.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_0;
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return n ? L.default.Messages.BILLING_SELECT_PLAN : L.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_0;
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                return n ? L.default.Messages.BILLING_SELECT_PLAN : L.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_1;
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return n ? L.default.Messages.BILLING_SELECT_PLAN : L.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_1;
            case D.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                return n ? L.default.Messages.BILLING_SELECT_PLAN : L.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
            case D.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return n ? L.default.Messages.BILLING_SELECT_PLAN : L.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_2;
            case D.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case D.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                return L.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTHS_TIER_2.format({
                    intervalCount: t.intervalCount
                });
            case D.SubscriptionPlans.NONE_MONTH:
            case D.SubscriptionPlans.NONE_YEAR:
            case D.SubscriptionPlans.NONE_3_MONTH:
            case D.SubscriptionPlans.NONE_6_MONTH:
            case D.SubscriptionPlans.PREMIUM_MONTH_GUILD:
            case D.SubscriptionPlans.PREMIUM_YEAR_GUILD:
            case D.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
            case D.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
                return L.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
        }
        let s = Error("User is purchasing an unsupported plan");
        throw (0, v.captureBillingException)(s, {
            tags: {
                planId: i
            }
        }), s
    }

    function eg(e) {
        let t = e.invoiceItems[0].subscriptionPlanId,
            n = p.default.get(t);
        return l(null != n, "Missing subscriptionPlan"), {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    }

    function em(e) {
        let {
            intervalType: t = D.SubscriptionIntervalTypes.MONTH,
            intervalCount: n = 1,
            capitalize: i = !1
        } = e;
        switch (t) {
            case D.SubscriptionIntervalTypes.DAY:
                if (n >= 7 && n % 7 == 0) return i ? L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_WEEKS.format({
                    weeks: n / 7
                }) : L.default.Messages.PREMIUM_TRIAL_FREE_DURATION_WEEKS.format({
                    weeks: n / 7
                });
                return i ? L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_DAYS.format({
                    days: n
                }) : L.default.Messages.PREMIUM_TRIAL_FREE_DURATION_DAYS.format({
                    days: n
                });
            case D.SubscriptionIntervalTypes.MONTH:
                return i ? L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_MONTHS.format({
                    months: n
                }) : L.default.Messages.PREMIUM_TRIAL_FREE_DURATION_MONTHS.format({
                    months: n
                });
            case D.SubscriptionIntervalTypes.YEAR:
                return i ? L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_YEARS.format({
                    years: n
                }) : L.default.Messages.PREMIUM_TRIAL_FREE_DURATION_YEARS.format({
                    years: n
                });
            default:
                throw Error("Unsupported interval duration.")
        }
    }

    function ep(e) {
        let {
            intervalType: t = D.SubscriptionIntervalTypes.MONTH,
            intervalCount: n = 1
        } = e;
        switch (t) {
            case D.SubscriptionIntervalTypes.DAY:
                if (n >= 7 && n % 7 == 0) return L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_WEEKS.format({
                    weeks: n / 7
                });
                return L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_DAYS.format({
                    days: n
                });
            case D.SubscriptionIntervalTypes.MONTH:
                return L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_MONTHS.format({
                    months: n
                });
            case D.SubscriptionIntervalTypes.YEAR:
                return L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_YEARS.format({
                    years: n
                });
            default:
                throw Error("Unsupported interval duration.")
        }
    }

    function eS(e) {
        let {
            intervalType: t = D.SubscriptionIntervalTypes.MONTH,
            intervalCount: n = 1,
            capitalize: i = !1
        } = e;
        switch (t) {
            case D.SubscriptionIntervalTypes.DAY:
                if (n >= 7 && n % 7 == 0) return i ? L.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
                    weeks: n / 7
                }) : L.default.Messages.DURATION_WEEKS.format({
                    weeks: n / 7
                });
                return i ? L.default.Messages.DURATION_DAYS_CAPITALIZE.format({
                    days: n
                }) : L.default.Messages.DURATION_DAYS.format({
                    days: n
                });
            case D.SubscriptionIntervalTypes.MONTH:
                return i ? L.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
                    months: n
                }) : L.default.Messages.DURATION_MONTHS.format({
                    months: n
                });
            case D.SubscriptionIntervalTypes.YEAR:
                return i ? L.default.Messages.DURATION_YEARS_CAPITALIZE.format({
                    years: n
                }) : L.default.Messages.DURATION_YEARS.format({
                    years: n
                });
            default:
                throw Error("Unsupported interval duration.")
        }
    }

    function ev(e, t) {
        switch (e) {
            case R.PaymentGateways.APPLE_PARTNER:
            case R.PaymentGateways.APPLE:
                return M[t];
            case R.PaymentGateways.GOOGLE:
                return b[t]
        }
        throw Error("Invalid external payment gateway ".concat(e))
    }

    function eT(e, t) {
        return (0, A.isPremium)(e) || e_(null == t ? void 0 : t.status)
    }

    function eI(e, t) {
        var n, i;
        let s = [],
            r = null !== (i = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== i ? i : e.items,
            a = r.find(e => D.PREMIUM_PLANS.has(e.planId));
        return null != a && s.push(a), s.push(...t), s.map(t => {
            for (let n of e.items)
                if (t.planId === n.planId) return {
                    ...n,
                    ...t
                };
            return t
        })
    }

    function eC(e) {
        return e.filter(e => !D.PREMIUM_PLANS.has(e.planId))
    }

    function eA(e, t, n, i) {
        var s, r;
        l(i.has(t), "Expected planId in group");
        let a = !1,
            o = null !== (r = null === (s = e.renewalMutations) || void 0 === s ? void 0 : s.items) && void 0 !== r ? r : e.items,
            u = o.map(e => i.has(e.planId) ? (a = !0, {
                ...e,
                quantity: n,
                planId: t
            }) : e);
        if (!a) {
            let i = {
                    planId: t,
                    quantity: n
                },
                s = e.items.find(e => e.planId === t);
            null != s && (i.id = s.id), u.push(i)
        }
        return u.filter(e => 0 !== e.quantity)
    }

    function ey(e, t) {
        return eA(e, t, 1, D.PREMIUM_PLANS)
    }

    function eN(e, t, n) {
        return eA(e, n, t, D.PREMIUM_GUILD_SUBSCRIPTION_PLANS)
    }

    function eR(e) {
        var t;
        let n = null !== (t = e.find(e => !("id" in e))) && void 0 !== t ? t : e.find(e => D.PREMIUM_PLANS.has(e.planId));
        if (null != n) {
            let t = p.default.get(n.planId);
            l(null != t, "Missing plan"), e = e.map(e => {
                if (e === n) return e;
                let i = p.default.get(e.planId);
                l(null != i, "Missing plan");
                let s = p.default.getForSkuAndInterval(i.skuId, t.interval, t.intervalCount);
                return l(null != s, "Missing planForInterval"), {
                    ...e,
                    planId: s.id
                }
            })
        }
        return e
    }

    function eO(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                useSpace: !0
            },
            n = D.PremiumUserLimits[e].fileSize;
        return (0, T.formatSize)(n / 1024, {
            useKibibytes: !0,
            useSpace: t.useSpace
        })
    }

    function eD(e) {
        return null == e ? null : e.items.find(e => D.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.planId))
    }

    function eP(e) {
        let t = null != e ? k(e) : null,
            n = null != t ? $(t.planId) : null;
        return n
    }

    function eL(e) {
        return e
    }
    var eM = Object.freeze({
        isNewUser: e => null != e && Date.now() - e.createdAt.getTime() < 2592e6,
        isPremiumAtLeast: A.isPremiumAtLeast,
        isPremium: A.isPremium,
        isPremiumExactly: A.isPremiumExactly,
        getPrice: G,
        getDefaultPrice: V,
        getInterval: function(e) {
            let t = D.SubscriptionPlanInfo[e];
            if (null != t) return {
                intervalType: t.interval,
                intervalCount: t.intervalCount
            };
            let n = Error("Unsupported plan");
            throw (0, v.captureBillingException)(n, {
                tags: {
                    planId: e
                }
            }), n
        },
        getIntervalString: B,
        getIntervalStringAsNoun: H,
        getPremiumType: Y,
        getDisplayName: j,
        getDisplayPremiumType: z,
        getPremiumPlanOptions: J,
        getUpgradeEligibilities: ee,
        getPlanDescription: X,
        isPremiumSku: function(e) {
            return e === D.PremiumSubscriptionSKUs.TIER_0 || e === D.PremiumSubscriptionSKUs.TIER_1 || e === D.PremiumSubscriptionSKUs.TIER_2
        },
        getClosestUpgrade: function(e) {
            let t = D.SubscriptionPlanInfo[e];
            if (null == t) throw Error("Unrecognized plan.");
            let {
                interval: n
            } = t, i = ee(e);
            for (let e of Object.keys(D.SubscriptionPlanInfo)) {
                let {
                    interval: t
                } = D.SubscriptionPlanInfo[e];
                if (n === t && i.includes(e)) return e
            }
            return null
        },
        getIntervalMonths: function(e, t) {
            if (e === D.SubscriptionIntervalTypes.MONTH) return t;
            if (e === D.SubscriptionIntervalTypes.YEAR) return 12 * t;
            throw Error("".concat(e, " interval subscription period not implemented"))
        },
        getUserMaxFileSize: C.getUserMaxFileSize,
        getSkuIdForPlan: $,
        getSkuIdForPremiumType: function(e) {
            switch (e) {
                case D.PremiumTypes.TIER_0:
                    return D.PremiumSubscriptionSKUs.TIER_0;
                case D.PremiumTypes.TIER_1:
                    return D.PremiumSubscriptionSKUs.TIER_1;
                case D.PremiumTypes.TIER_2:
                    return D.PremiumSubscriptionSKUs.TIER_2
            }
        },
        getNumIncludedPremiumGuildSubscriptionSlots: function(e) {
            if (Y(e) === D.PremiumTypes.TIER_2) return D.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
            return 0
        },
        getBillingInformationString: function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = n ? (0, N.formatPrice)(t.invoiceItems.filter(e => D.PREMIUM_TIER_2_PLANS.has(e.subscriptionPlanId)).map(e => e.amount).reduce((e, t) => t + e, 0), t.currency) : (0, N.formatPrice)(t.total, t.currency);
            if (e.status === R.SubscriptionStatusTypes.CANCELED) return L.default.Messages.PREMIUM_SETTINGS_CANCELLED_INFO.format({
                endDate: t.subscriptionPeriodStart
            });
            if (e.status === R.SubscriptionStatusTypes.PAUSE_PENDING) return L.default.Messages.PREMIUM_SETTINGS_PAUSE_PENDING_INFO.format({
                pauseDate: e.currentPeriodEnd,
                resumeDate: e.pauseEndsAt
            });
            if (e.status === R.SubscriptionStatusTypes.PAUSED) return null == e.pauseEndsAt ? n ? L.default.Messages.PREMIUM_SETTINGS_PAUSED_INFO_WITH_PLAN.format({
                planName: L.default.Messages.PREMIUM,
                price: i
            }) : L.default.Messages.PREMIUM_SETTINGS_PAUSED_INFO : n ? L.default.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO_WITH_PLAN.format({
                planName: L.default.Messages.PREMIUM,
                resumeDate: e.pauseEndsAt,
                price: i
            }) : L.default.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO.format({
                resumeDate: e.pauseEndsAt
            });
            else if (e.status === R.SubscriptionStatusTypes.PAST_DUE) {
                var s, r;
                let t = ea(e),
                    n = d(e.currentPeriodStart).add(t, "days");
                return (e.isPurchasedViaGoogle && (null === (s = e.metadata) || void 0 === s ? void 0 : s.google_grace_period_expires_date) != null && (n = d(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (r = e.metadata) || void 0 === r ? void 0 : r.apple_grace_period_expires_date) != null && (n = d(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally) ? L.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO_EXTERNAL.format({
                    endDate: n,
                    paymentGatewayName: P.PaymentGatewayToFriendlyName[e.paymentGateway],
                    paymentSourceLink: ev(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
                }) : L.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO.format({
                    endDate: d(e.currentPeriodStart).add(t, "days"),
                    price: i
                })
            } else return e.status === R.SubscriptionStatusTypes.ACCOUNT_HOLD ? e.isPurchasedViaGoogle && !(0, I.isAndroid)() ? L.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_EXTERNAL.format({
                endDate: d(e.currentPeriodStart).add(D.MAX_ACCOUNT_HOLD_DAYS, "days"),
                paymentGatewayName: P.PaymentGatewayToFriendlyName[e.paymentGateway],
                paymentSourceLink: ev(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
            }) : L.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
                endDate: d(e.currentPeriodStart).add(D.MAX_ACCOUNT_HOLD_DAYS, "days"),
                price: i
            }) : function(e) {
                return null != e.paymentSourceId && eo(e.paymentSourceId)
            }(e) ? L.default.Messages.PREMIUM_SETTINGS_PREPAID_THROUGH_DATE.format({
                prepaidEndDate: e.currentPeriodEnd
            }) : e.status === R.SubscriptionStatusTypes.UNPAID ? L.default.Messages.PREMIUM_SETTINGS_PAYMENT_PROCESSING.format({
                maxProcessingTimeInDays: D.MAX_PAYMENT_PROCESSING_TIME_DAYS
            }) : e.isPurchasedExternally ? L.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_EXTERNAL.format({
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: P.PaymentGatewayToFriendlyName[e.paymentGateway],
                subscriptionManagementLink: ev(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
            }) : n ? L.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_WITH_PLAN.format({
                planName: L.default.Messages.PREMIUM,
                renewalDate: t.subscriptionPeriodStart,
                price: i
            }) : L.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO.format({
                renewalDate: t.subscriptionPeriodStart,
                price: i
            })
        },
        isNoneSubscription: h.isNoneSubscription,
        getPlanIdFromInvoice: function(e, t) {
            let {
                planId: n
            } = e;
            if (e.status === R.SubscriptionStatusTypes.CANCELED || e.status === R.SubscriptionStatusTypes.PAUSE_PENDING) return n;
            l(null != t, "Expected invoicePreview");
            let i = t.invoiceItems.find(e => {
                let {
                    subscriptionPlanId: t
                } = e;
                return ei(t)
            });
            return n = null == i || (0, h.isNoneSubscription)(i.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : i.subscriptionPlanId
        },
        getStatusFromInvoice: function(e, t) {
            let {
                status: n
            } = e;
            if (e.status === R.SubscriptionStatusTypes.CANCELED || e.status === R.SubscriptionStatusTypes.PAUSE_PENDING) return n;
            l(null != t, "Expected invoicePreview");
            let i = t.invoiceItems.find(e => {
                let {
                    subscriptionPlanId: t
                } = e;
                return ei(t)
            });
            return (null == i || (0, h.isNoneSubscription)(i.subscriptionPlanId)) && (n = R.SubscriptionStatusTypes.CANCELED), n
        },
        isBaseSubscriptionCanceled: ef,
        getPremiumGuildIntervalPrice: eh,
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
        getBillingReviewSubheader: eE,
        getIntervalForInvoice: eg,
        getPremiumPlanItem: k,
        getGuildBoostPlanItem: eD,
        isBoostOnlySubscription: function(e) {
            return null != e && null == k(e) && null != eD(e)
        },
        getPremiumSkuIdForSubscription: eP,
        getPremiumTypeFromSubscription: function(e) {
            if (null != e) {
                let t = k(e);
                if (null != t) return Y(t.planId)
            }
        },
        getPremiumTypeFromSubscriptionRenewalMutations: function(e) {
            if (null != e && null != e.renewalMutations) {
                let t = k(e.renewalMutations);
                if (null != t) return Y(t.planId)
            }
        },
        getPremiumGradientColor: function(e) {
            switch (e) {
                case D.PremiumTypes.TIER_0:
                    return O.Gradients.PREMIUM_TIER_0;
                case D.PremiumTypes.TIER_1:
                    return O.Gradients.PREMIUM_TIER_1;
                case D.PremiumTypes.TIER_2:
                    return O.Gradients.PREMIUM_TIER_2
            }
        },
        castPremiumSubscriptionAsSkuId: eL,
        canUseAnimatedEmojis: function(e) {
            return (0, f.canUserUse)(f.ANIMATED_EMOJIS, e)
        },
        canUseEmojisEverywhere: function(e) {
            return (0, f.canUserUse)(f.EMOJIS_EVERYWHERE, e)
        },
        canUseSoundboardEverywhere: function(e) {
            return (0, f.canUserUse)(f.SOUNDBOARD_EVERYWHERE, e)
        },
        canUseCustomCallSounds: function(e) {
            return (0, f.canUserUse)(f.CUSTOM_CALL_SOUNDS, e)
        },
        canUploadLargeFiles: function(e) {
            return (0, f.canUserUse)(f.UPLOAD_LARGE_FILES, e)
        },
        canUseBadges: function(e) {
            return (0, f.canUserUse)(f.PROFILE_BADGES, e)
        },
        canUseHighVideoUploadQuality: function(e) {
            return (0, f.canUserUse)(f.INCREASED_VIDEO_UPLOAD_QUALITY, e)
        },
        canEditDiscriminator: function(e) {
            return (0, f.canUserUse)(f.CUSTOM_DISCRIMINATOR, e)
        },
        hasBoostDiscount: function(e) {
            return (0, f.canUserUse)(f.BOOST_DISCOUNT, e)
        },
        canUseAnimatedAvatar: function(e) {
            return (0, f.canUserUse)(f.ANIMATED_AVATAR, e)
        },
        canUseFancyVoiceChannelReactions: function(e) {
            return (0, f.canUserUse)(f.FANCY_VOICE_CHANNEL_REACTIONS, e)
        },
        canInstallPremiumApplications: function(e) {
            return (0, f.canUserUse)(f.INSTALL_PREMIUM_APPLICATIONS, e)
        },
        canUseIncreasedMessageLength: function(e) {
            return (0, f.canUserUse)(f.INCREASED_MESSAGE_LENGTH, e)
        },
        canUseIncreasedGuildCap: function(e) {
            return (0, f.canUserUse)(f.INCREASED_GUILD_LIMIT, e)
        },
        canRedeemPremiumPerks: function(e) {
            return (0, f.canUserUse)(f.REDEEM_PREMIUM_PERKS, e)
        },
        canUsePremiumProfileCustomization: function(e) {
            return (0, f.canUserUse)(f.PROFILE_PREMIUM_FEATURES, e)
        },
        canUsePremiumAppIcons: function(e) {
            return (0, f.canUserUse)(f.APP_ICONS, e)
        },
        canUsePremiumGuildMemberProfile: function(e) {
            return (0, f.canUserUse)(f.PREMIUM_GUILD_MEMBER_PROFILE, e)
        },
        canUseClientThemes: function(e) {
            return (0, f.canUserUse)(f.CLIENT_THEMES, e)
        },
        canStreamQuality: function(e, t) {
            return "high" === e ? (0, f.canUserUse)(f.STREAM_HIGH_QUALITY, t) : "mid" === e && (0, f.canUserUse)(f.STREAM_MID_QUALITY, t)
        },
        hasFreeBoosts: function(e) {
            return (0, f.canUserUse)(f.FREE_BOOSTS, e)
        },
        canUseCustomStickersEverywhere: function(e) {
            return (0, f.canUserUse)(f.STICKERS_EVERYWHERE, e)
        },
        canUseCustomBackgrounds: function(e) {
            return (0, f.canUserUse)(f.VIDEO_FILTER_ASSETS, e)
        },
        canUseCollectibles: function(e) {
            return (0, f.canUserUse)(f.COLLECTIBLES, e)
        },
        formatPriceString: function(e, t) {
            let n = (0, N.formatPrice)(e.amount, e.currency),
                i = H(t);
            return "".concat(n, "/").concat(i)
        },
        StreamQuality: s
    })
}