function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StreamQuality: function() {
            return r
        },
        castPremiumSubscriptionAsSkuId: function() {
            return eb
        },
        coerceExistingItemsToNewItemInterval: function() {
            return eM
        },
        experimentalGetPrices: function() {
            return H
        },
        formatIntervalDuration: function() {
            return ep
        },
        formatTrialCtaIntervalDuration: function() {
            return eN
        },
        formatTrialOfferIntervalDuration: function() {
            return em
        },
        getBillingGracePeriodDaysAndExpiresDate: function() {
            return eu
        },
        getBillingReviewSubheader: function() {
            return eh
        },
        getDefaultPrice: function() {
            return x
        },
        getDiscountIntervalString: function() {
            return Y
        },
        getDisplayName: function() {
            return z
        },
        getDisplayNameFromSku: function() {
            return Z
        },
        getDisplayPremiumType: function() {
            return Q
        },
        getExternalPlanDisplayName: function() {
            return ee
        },
        getExternalSubscriptionMethodUrl: function() {
            return eO
        },
        getFormattedPriceForPlan: function() {
            return eE
        },
        getFormattedRateForPlan: function() {
            return eI
        },
        getIntervalForInvoice: function() {
            return eA
        },
        getIntervalString: function() {
            return j
        },
        getIntervalStringAsNoun: function() {
            return W
        },
        getItemsFromNewAdditionalPlans: function() {
            return eC
        },
        getItemsWithUpsertedPlanIdForGroup: function() {
            return eL
        },
        getItemsWithUpsertedPremiumGuildPlan: function() {
            return eD
        },
        getItemsWithUpsertedPremiumPlanId: function() {
            return ev
        },
        getItemsWithoutPremiumPlanItem: function() {
            return eg
        },
        getMaxFileSizeForPremiumType: function() {
            return ey
        },
        getNumPremiumGuildSubscriptions: function() {
            return er
        },
        getPlanDescriptionFromInvoice: function() {
            return $
        },
        getPremiumGuildHeaderDescription: function() {
            return ec
        },
        getPremiumPlanItem: function() {
            return V
        },
        getPremiumPlanOptions: function() {
            return et
        },
        getPremiumSkuIdForSubscription: function() {
            return eU
        },
        getPremiumType: function() {
            return K
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
            return eR
        },
        isPremium: function() {
            return L.isPremium
        },
        isPremiumAtLeast: function() {
            return L.isPremiumAtLeast
        },
        isPremiumBaseSubscriptionPlan: function() {
            return es
        },
        isPremiumExactly: function() {
            return L.isPremiumExactly
        },
        isPremiumGuildSubscriptionCanceled: function() {
            return e_
        },
        isPremiumGuildSubscriptionPlan: function() {
            return eo
        },
        isPremiumSubscriptionPlan: function() {
            return el
        },
        isPrepaidPaymentSource: function() {
            return ed
        },
        isSubscriptionStatusFailedPayment: function() {
            return ef
        }
    }), n("411104"), n("47120"), n("733860"), n("724458"), n("653041");
    var i, r, a, s, o = n("512722"),
        l = n.n(o),
        u = n("913527"),
        d = n.n(u),
        _ = n("848246");
    n("442837");
    var c = n("710845"),
        E = n("114064"),
        I = n("803905"),
        T = n("424082"),
        f = n("439017"),
        S = n("301766"),
        h = n("594174"),
        A = n("351402"),
        m = n("853872"),
        N = n("509545"),
        p = n("78839"),
        O = n("122289"),
        R = n("424218"),
        C = n("358085"),
        g = n("380684"),
        L = n("111361"),
        v = n("74538"),
        D = n("937615"),
        M = n("981631"),
        y = n("334431"),
        P = n("474936"),
        U = n("231338"),
        b = n("689938");
    let G = {
            PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
            BILLING_HISTORY: "https://support.apple.com/HT201266",
            SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039"
        },
        w = {
            SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
            PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
            BILLING_HISTORY: "https://play.google.com/store/account/orderhistory"
        },
        B = new c.default("PremiumUtils.tsx"),
        k = {
            [P.SubscriptionPlans.NONE_MONTH]: [P.SubscriptionPlans.NONE_YEAR, P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1, P.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
            [P.SubscriptionPlans.NONE_YEAR]: [P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1, P.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
            [P.SubscriptionPlans.PREMIUM_MONTH_TIER_0]: [P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1, P.SubscriptionPlans.PREMIUM_MONTH_TIER_1, P.SubscriptionPlans.PREMIUM_YEAR_TIER_0],
            [P.SubscriptionPlans.PREMIUM_YEAR_TIER_0]: [P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1, P.SubscriptionPlans.PREMIUM_MONTH_TIER_1],
            [P.SubscriptionPlans.PREMIUM_MONTH_TIER_1]: [P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1],
            [P.SubscriptionPlans.PREMIUM_YEAR_TIER_1]: [P.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
            [P.SubscriptionPlans.PREMIUM_MONTH_TIER_2]: [P.SubscriptionPlans.PREMIUM_YEAR_TIER_2],
            [P.SubscriptionPlans.PREMIUM_YEAR_TIER_2]: [],
            ALL: [P.SubscriptionPlans.NONE_MONTH, P.SubscriptionPlans.NONE_YEAR, P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1, P.SubscriptionPlans.PREMIUM_MONTH_TIER_1, P.SubscriptionPlans.PREMIUM_YEAR_TIER_0, P.SubscriptionPlans.PREMIUM_MONTH_TIER_0]
        };

    function V(e) {
        return e.items.find(e => P.PREMIUM_PLANS.has(e.planId))
    }

    function x(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = null !== (t = m.default.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
            a = p.default.getPremiumTypeSubscription();
        return null != a && null != a.paymentSourceId && (r = a.paymentSourceId), F(e, n, i, {
            paymentSourceId: r
        })
    }

    function F(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            {
                paymentSourceId: r,
                currency: a
            } = i;
        if (null != N.default.get(e)) {
            let i = M.PriceSetAssignmentPurchaseTypes.DEFAULT;
            n ? i = M.PriceSetAssignmentPurchaseTypes.GIFT : t && (i = M.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_1);
            let s = function(e) {
                let {
                    paymentSourceId: t,
                    purchaseType: n,
                    currency: i
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    purchaseType: M.PriceSetAssignmentPurchaseTypes.DEFAULT
                }, r = H(e, {
                    paymentSourceId: t,
                    purchaseType: n
                });
                return (0 === r.length && B.warn("No prices found for planId: ".concat(e, ", paymentSourceId: ").concat(t, ", purchaseType: ").concat(n)), null != i) ? r.find(e => e.currency === i) : r[0]
            }(e, {
                paymentSourceId: r,
                purchaseType: i,
                currency: a
            });
            if (null == s) {
                let t = Error("Couldn't find price");
                throw (0, O.captureBillingException)(t, {
                    extra: {
                        paymentSourceId: r
                    },
                    tags: {
                        purchaseType: i.toString(),
                        planId: e,
                        currency: null != a ? a : "unknown"
                    }
                }), t
            }
            return s
        }
        let s = Error("Plan not found");
        throw (0, O.captureBillingException)(s, {
            tags: {
                planId: e,
                currency: null != a ? a : "unknown"
            },
            extra: {
                ...i,
                isGift: n
            }
        }), s
    }(a = i || (i = {})).BUNDLE = "bundle", a.TIER_0 = "tier_0", a.TIER_1 = "tier_1", a.TIER_2 = "tier_2", a.PREMIUM_GUILD = "premium_guild", (s = r || (r = {})).MID = "mid", s.HIGH = "high";

    function H(e) {
        let {
            paymentSourceId: t,
            purchaseType: n
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            purchaseType: M.PriceSetAssignmentPurchaseTypes.DEFAULT
        }, i = function(e, t) {
            let n = N.default.get(e);
            if (null == n) {
                let n = Error("Plan not found");
                throw (0, O.captureBillingException)(n, {
                    tags: {
                        planId: e,
                        purchaseType: t.toString()
                    }
                }), n
            }
            if (null == n.prices) throw Error("No prices returned for ".concat(e, ", is your user in the experiment?"));
            let i = n.prices[t];
            if (null == i) throw B.info("Purchase types: ".concat(JSON.stringify(Object.keys(n.prices)))), Error("No prices returned for purchase type ".concat(t, " for plan ").concat(e));
            return i
        }(e, n);
        if (null != t) {
            let r = i.paymentSourcePrices[t];
            if (null == r) {
                B.info("Payment sources IDs: ".concat(JSON.stringify(Object.keys(i.paymentSourcePrices)))), B.info("prices: ".concat(r));
                let a = Error("Missing prices for payment source on subscription plan");
                (0, O.captureBillingException)(a, {
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
            B.info("countryPrices: ".concat(JSON.stringify(i.countryPrices)));
            let t = Error("Missing prices for country");
            throw (0, O.captureBillingException)(t, {
                tags: {
                    countryCode: i.countryPrices.countryCode,
                    planId: e
                }
            }), t
        }
        return i.countryPrices.prices
    }

    function Y(e) {
        switch (e) {
            case P.DiscountUserUsageLimitIntervalTypes.MONTH:
                return b.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
            case P.DiscountUserUsageLimitIntervalTypes.YEAR:
                return b.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
            case P.DiscountUserUsageLimitIntervalTypes.DAY:
            case P.DiscountUserUsageLimitIntervalTypes.WEEK:
            default:
                throw Error("Unexpected interval")
        }
    }

    function j(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : P.PremiumTypes.TIER_2;
        if (t || n) switch (e) {
            case P.SubscriptionIntervalTypes.MONTH:
                let s = (a === P.PremiumTypes.TIER_0 ? b.default.Messages.BASIC_GIFT_DURATION : b.default.Messages.GIFT_DURATION).format({
                    timeInterval: b.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                });
                return r ? s : b.default.Messages.PAYMENT_MODAL_ONE_MONTH;
            case P.SubscriptionIntervalTypes.YEAR:
                let o = (a === P.PremiumTypes.TIER_0 ? b.default.Messages.BASIC_GIFT_DURATION : b.default.Messages.GIFT_DURATION).format({
                    timeInterval: b.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                });
                return r ? o : b.default.Messages.PAYMENT_MODAL_ONE_YEAR;
            default:
                throw Error("Unexpected interval")
        }
        switch (e) {
            case P.SubscriptionIntervalTypes.MONTH:
                if (1 !== i) return b.default.Messages.MULTI_MONTHS.format({
                    intervalCount: i
                });
                return b.default.Messages.MONTHLY;
            case P.SubscriptionIntervalTypes.YEAR:
                return b.default.Messages.YEARLY;
            default:
                throw Error("Unexpected interval")
        }
    }

    function W(e) {
        switch (e) {
            case P.SubscriptionIntervalTypes.MONTH:
                return b.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
            case P.SubscriptionIntervalTypes.YEAR:
                return b.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
            default:
                throw Error("Unexpected interval")
        }
    }

    function K(e) {
        let t = P.SubscriptionPlanInfo[e];
        if (null != t) return t.premiumType;
        let n = Error("Unsupported plan");
        throw (0, O.captureBillingException)(n, {
            tags: {
                planId: e
            }
        }), n
    }

    function z(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0;
        switch (e) {
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                return t ? b.default.Messages.PREMIUM_PLAN_MONTH_TIER_0_TRIAL_DURATION.format({
                    duration: i
                }) : n ? b.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_0 : b.default.Messages.PREMIUM_PLAN_MONTH_TIER_0;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return t ? b.default.Messages.PREMIUM_PLAN_YEAR_TIER_0_TRIAL_DURATION.format({
                    duration: i
                }) : n ? b.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_0 : b.default.Messages.PREMIUM_PLAN_YEAR_TIER_0;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                return n ? b.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_1 : b.default.Messages.PREMIUM_PLAN_MONTH_TIER_1;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return n ? b.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_1 : b.default.Messages.PREMIUM_PLAN_YEAR_TIER_1;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                return t ? b.default.Messages.PREMIUM_PLAN_MONTH_TIER_2_TRIAL_DURATION.format({
                    duration: i
                }) : n ? b.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_2 : b.default.Messages.PREMIUM_PLAN_MONTH_TIER_2;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return t ? b.default.Messages.PREMIUM_PLAN_YEAR_TIER_2_TRIAL_DURATION.format({
                    duration: i
                }) : n ? b.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_2 : b.default.Messages.PREMIUM_PLAN_YEAR_TIER_2;
            case P.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
                return b.default.Messages.PREMIUM_PLAN_3_MONTH_TIER_2;
            case P.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                return b.default.Messages.PREMIUM_PLAN_6_MONTH_TIER_2;
            case P.SubscriptionPlans.PREMIUM_MONTH_GUILD:
                return n ? b.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : b.default.Messages.PREMIUM_GUILD_PLAN_MONTH;
            case P.SubscriptionPlans.PREMIUM_YEAR_GUILD:
                return n ? b.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : b.default.Messages.PREMIUM_GUILD_PLAN_YEAR;
            case P.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
                return b.default.Messages.PREMIUM_GUILD_PLAN_3_MONTH;
            case P.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
                return b.default.Messages.PREMIUM_GUILD_PLAN_6_MONTH;
            case P.SubscriptionPlans.PREMIUM_MONTH_LEGACY:
                return b.default.Messages.PREMIUM_PLAN_MONTH;
            case P.SubscriptionPlans.PREMIUM_YEAR_LEGACY:
                return b.default.Messages.PREMIUM_PLAN_YEAR
        }
        let r = Error("Unsupported plan");
        throw (0, O.captureBillingException)(r, {
            tags: {
                planId: e
            }
        }), r
    }

    function Z(e) {
        switch (e) {
            case P.PremiumSubscriptionSKUs.TIER_0:
                return b.default.Messages.PREMIUM_TIER_0;
            case P.PremiumSubscriptionSKUs.TIER_1:
                return b.default.Messages.PREMIUM_TIER_1;
            case P.PremiumSubscriptionSKUs.TIER_2:
                return b.default.Messages.PREMIUM_TIER_2
        }
        let t = Error("Unsupported sku");
        throw (0, O.captureBillingException)(t, {
            tags: {
                skuId: e
            }
        }), t
    }

    function X(e) {
        switch (e) {
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return b.default.Messages.PREMIUM_TIER_0;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return b.default.Messages.PREMIUM_TIER_1;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
            case P.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case P.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return b.default.Messages.PREMIUM_TIER_2
        }
        let t = Error("Unsupported plan");
        throw (0, O.captureBillingException)(t, {
            tags: {
                planId: e
            }
        }), t
    }

    function Q(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return t ? "Basic" : "Nitro Basic";
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return t ? "Classic" : "Nitro Classic";
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
            case P.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case P.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                return "Nitro"
        }
        let n = Error("Unsupported plan");
        throw (0, O.captureBillingException)(n, {
            tags: {
                planId: e
            }
        }), n
    }

    function q(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case P.PremiumTypes.TIER_0:
                return t ? "Basic" : b.default.Messages.PREMIUM_TIER_0;
            case P.PremiumTypes.TIER_1:
                return t ? "Classic" : b.default.Messages.PREMIUM_TIER_1;
            case P.PremiumTypes.TIER_2:
                return b.default.Messages.PREMIUM_TIER_2
        }
    }

    function J(e) {
        var t, n, i, r, a, s, o, l, u, _;
        let {
            subscription: c,
            planId: E,
            price: I,
            includePremiumGuilds: f,
            hasDiscountApplied: S,
            activeDiscountInfo: A,
            renewalInvoicePreview: m
        } = e, N = P.SubscriptionPlanInfo[E], p = v.default.formatPriceString(v.default.getDefaultPrice(N.id), N.interval), {
            annualDiscountPercentage: O
        } = (0, T.getAnnualDiscountsExperimentConfig)("PremiumUtils"), R = eT(c) || null == c.paymentSourceId && !c.isPurchasedExternally && !(null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium()), C = null != I, g = c.status === M.SubscriptionStatusTypes.UNPAID && null !== c.latestInvoice && (null === (n = c.latestInvoice) || void 0 === n ? void 0 : n.status) === M.InvoiceStatusTypes.OPEN, L = R ? M.SubscriptionStatusTypes.CANCELED : g ? M.SubscriptionStatusTypes.UNPAID : c.status, D = null === (a = null !== (r = null == m ? void 0 : m.taxInclusive) && void 0 !== r ? r : null === (i = c.latestInvoice) || void 0 === i ? void 0 : i.taxInclusive) || void 0 === a || a, y = P.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM + (f ? er(c.additionalPlans) : 0);
        switch (E) {
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                switch (L) {
                    case M.SubscriptionStatusTypes.CANCELED:
                        return C ? D ? b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION.format({
                            price: I
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                            price: I
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_NO_PRICE;
                    case M.SubscriptionStatusTypes.ACCOUNT_HOLD:
                        return C ? D ? b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD.format({
                            price: I
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                            price: I
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_NO_PRICE.format();
                    case M.SubscriptionStatusTypes.UNPAID:
                        return b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAYMENT.format();
                    case M.SubscriptionStatusTypes.PAUSE_PENDING:
                        let U = null != c.pauseEndsAt ? d()(c.pauseEndsAt).diff(c.currentPeriodEnd, "days") : null;
                        return null != U ? b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                            pauseDate: c.currentPeriodEnd,
                            pauseDuration: U
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
                            pauseDate: c.currentPeriodEnd
                        });
                    case M.SubscriptionStatusTypes.PAUSED:
                        return b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
                            resumeDate: c.pauseEndsAt
                        });
                    default:
                        return C ? D ? b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0.format({
                            price: I
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_TAX_EXCLUSIVE.format({
                            price: I
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_NO_PRICE
                }
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                switch (L) {
                    case M.SubscriptionStatusTypes.CANCELED:
                        return C ? D ? b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION.format({
                            price: I
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                            price: I
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_NO_PRICE;
                    case M.SubscriptionStatusTypes.ACCOUNT_HOLD:
                        return C ? D ? b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD.format({
                            price: I
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                            price: I
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_NO_PRICE.format();
                    case M.SubscriptionStatusTypes.UNPAID:
                        return b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAYMENT.format();
                    case M.SubscriptionStatusTypes.PAUSE_PENDING:
                        let G = null != c.pauseEndsAt ? d()(c.pauseEndsAt).diff(c.currentPeriodEnd, "days") : null;
                        return null != G ? b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                            pauseDate: c.currentPeriodEnd,
                            pauseDuration: G
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
                            pauseDate: c.currentPeriodEnd
                        });
                    case M.SubscriptionStatusTypes.PAUSED:
                        return b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
                            resumeDate: c.pauseEndsAt
                        });
                    default:
                        return C ? D ? b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1.format({
                            price: I
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_TAX_EXCLUSIVE.format({
                            price: I
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_NO_PRICE
                }
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
            case P.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case P.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                switch (L) {
                    case M.SubscriptionStatusTypes.CANCELED:
                        return C ? D ? b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION.format({
                            price: I,
                            num: y
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                            price: I,
                            num: y
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_NO_PRICE.format({
                            num: y
                        });
                    case M.SubscriptionStatusTypes.ACCOUNT_HOLD:
                        return C ? D ? b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD.format({
                            price: I,
                            num: y
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                            price: I,
                            num: y
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_NO_PRICE.format({
                            num: y
                        });
                    case M.SubscriptionStatusTypes.UNPAID:
                        return b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAYMENT.format({
                            num: y
                        });
                    case M.SubscriptionStatusTypes.PAUSE_PENDING:
                        let w = null != c.pauseEndsAt ? d()(c.pauseEndsAt).diff(c.currentPeriodEnd, "days") : null;
                        return null != w ? b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING.format({
                            pauseDate: c.currentPeriodEnd,
                            pauseDuration: w
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSE_PENDING_NO_DURATION.format({
                            pauseDate: c.currentPeriodEnd
                        });
                    case M.SubscriptionStatusTypes.PAUSED:
                        return b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
                            resumeDate: c.pauseEndsAt
                        });
                    case M.SubscriptionStatusTypes.BILLING_RETRY:
                        return b.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO.format({
                            endDate: d()(c.currentPeriodStart).add(P.PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS, "days")
                        });
                    default:
                        return S ? E === P.SubscriptionPlans.PREMIUM_YEAR_TIER_2 ? b.default.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
                            percent: null !== (s = null == A ? void 0 : A.percentage) && void 0 !== s ? s : O,
                            regularPrice: p
                        }) : D ? b.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                            percent: null !== (o = null == A ? void 0 : A.percentage) && void 0 !== o ? o : P.DISCOUNT_PERCENTAGE_FALLBACK,
                            regularPrice: p,
                            numMonths: null !== (l = null == A ? void 0 : A.duration) && void 0 !== l ? l : P.DISCOUNT_DURATION_FALLBACK
                        }) : b.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC_TAX_EXCLUSIVE.format({
                            percent: null !== (u = null == A ? void 0 : A.percentage) && void 0 !== u ? u : P.DISCOUNT_PERCENTAGE_FALLBACK,
                            regularPrice: p,
                            numMonths: null !== (_ = null == A ? void 0 : A.duration) && void 0 !== _ ? _ : P.DISCOUNT_DURATION_FALLBACK
                        }) : C ? D ? b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2.format({
                            price: I,
                            num: y
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_TAX_EXCLUSIVE.format({
                            price: I,
                            num: y
                        }) : b.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_NO_PRICE.format({
                            num: y
                        })
                }
            default:
                throw Error("Invalid planId ".concat(E))
        }
    }

    function $(e) {
        let {
            renewalInvoicePreview: t,
            subscription: n,
            planId: i,
            includePremiumGuilds: r = !1,
            hasDiscountApplied: a = !1,
            activeDiscountInfo: s
        } = e, o = N.default.get(i);
        return l()(null != o, "Missing plan"), J({
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
            hasDiscountApplied: a,
            activeDiscountInfo: s,
            renewalInvoicePreview: t
        })
    }

    function ee(e) {
        let {
            planId: t,
            additionalPlans: n
        } = e, i = (0, S.isNoneSubscription)(t) ? null : z(t), r = null == n ? void 0 : n.find(e => {
            let {
                planId: t
            } = e;
            return P.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
        }), a = (null == r ? void 0 : r.planId) === P.SubscriptionPlans.PREMIUM_MONTH_GUILD ? b.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : (null == r ? void 0 : r.planId) === P.SubscriptionPlans.PREMIUM_YEAR_GUILD ? b.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : null, s = null == a ? void 0 : a.format({
            num: null == r ? void 0 : r.quantity
        });
        if (null != i && null != s) return b.default.Messages.PREMIUM_WITH_PREMIUM_GUILD_EXTERNAL_PLAN_DESCRIPTION.format({
            premiumDescription: i,
            premiumGuildDescription: s
        });
        if (null != i) return i;
        if (null != s) return s;
        else throw Error("Subscription without premium or premium guild subscription")
    }

    function et(e) {
        let {
            skuId: t,
            isPremium: n,
            multiMonthPlans: i,
            currentSubscription: r,
            isGift: a,
            isEligibleForTrial: s,
            defaultPlanId: o,
            defaultToMonthlyPlan: l
        } = e;
        if (null == t || !n) return [];
        let u = void 0 !== o && t === P.SubscriptionPlanInfo[o].skuId ? o : void 0;
        void 0 === u && l && !a && (u = P.PREMIUM_SKU_TO_MONTHLY_PLAN[t]), s && !a && (void 0 === o || l && P.PREMIUM_MONTHLY_PLANS.has(o)) && f.TrialRedemptionDefaultPlanExperiment.trackExposure({
            location: "de805e_1"
        });
        let d = [];
        switch (t) {
            case P.PremiumSubscriptionSKUs.TIER_0:
                d = [P.SubscriptionPlans.PREMIUM_YEAR_TIER_0, P.SubscriptionPlans.PREMIUM_MONTH_TIER_0];
                break;
            case P.PremiumSubscriptionSKUs.TIER_1:
                d = [P.SubscriptionPlans.PREMIUM_MONTH_TIER_1];
                break;
            case P.PremiumSubscriptionSKUs.TIER_2:
                let _ = i;
                if (null != r) {
                    let e = r.items[0].planId;
                    if (P.MULTI_MONTH_PLANS.has(e)) {
                        let t = P.SubscriptionPlanInfo[e];
                        _ = [...(0, P.MULTI_MONTH_PLANS)].filter(e => {
                            let n = P.SubscriptionPlanInfo[e];
                            return n.interval === t.interval && n.intervalCount === t.intervalCount && n.skuId === P.PremiumSubscriptionSKUs.TIER_2
                        })
                    } else _ = []
                }
                d = [P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, ..._, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2];
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

    function en(e) {
        let t = P.SubscriptionPlanInfo[e];
        if (null == t) {
            let t = Error("Unsupported plan");
            throw (0, O.captureBillingException)(t, {
                tags: {
                    planId: e
                }
            }), t
        }
        return t.skuId
    }

    function ei(e) {
        var t;
        return null == e ? k.ALL : null !== (t = k[e]) && void 0 !== t ? t : []
    }

    function er(e) {
        let t = N.default.getPlanIdsForSkus([eb(P.PremiumSubscriptionSKUs.GUILD)]);
        l()(null != t, "Missing guildSubscriptionPlanIds");
        let n = e.find(e => {
            let {
                planId: n
            } = e;
            return t.includes(n)
        });
        return null != n ? n.quantity : 0
    }
    let ea = new Set([P.SubscriptionPlans.NONE_MONTH, P.SubscriptionPlans.NONE_3_MONTH, P.SubscriptionPlans.NONE_6_MONTH, P.SubscriptionPlans.NONE_YEAR, P.SubscriptionPlans.PREMIUM_MONTH_TIER_0, P.SubscriptionPlans.PREMIUM_MONTH_TIER_1, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_YEAR_TIER_0, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1, P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, P.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2]);

    function es(e) {
        return ea.has(e)
    }

    function eo(e) {
        return P.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e)
    }

    function el(e) {
        return es(e) || eo(e)
    }

    function eu(e) {
        var t, n, i, r, a;
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
            let t = e.isPurchasedViaApple ? P.DEFAULT_APPLE_GRACE_PERIOD_DAYS : P.DEFAULT_GOOGLE_GRACE_PERIOD_DAYS;
            return {
                days: t,
                expiresDate: d()(e.currentPeriodStart).add(t, "days")
            }
        }
        if ((null === (r = e.metadata) || void 0 === r ? void 0 : r.grace_period_expires_date) != null) return {
            days: d()(null === (a = e.metadata) || void 0 === a ? void 0 : a.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
            expiresDate: d()(e.metadata.grace_period_expires_date)
        };
        {
            let t = null == e.paymentSourceId ? P.DEFAULT_MAX_GRACE_PERIOD_DAYS : P.PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS;
            return {
                days: t,
                expiresDate: d()(e.currentPeriodStart).add(t, "days")
            }
        }
    }

    function ed(e) {
        if (null == e) return !1;
        let t = m.default.getPaymentSource(e);
        return null != t && U.PREPAID_PAYMENT_SOURCES.has(t.type)
    }

    function e_(e) {
        return e.isPurchasedExternally ? e.status === M.SubscriptionStatusTypes.CANCELED : function(e) {
            let {
                renewalMutations: t,
                additionalPlans: n,
                status: i
            } = e, r = er(n);
            return 0 === (null != t ? er(t.additionalPlans) : null) && 0 !== r ? M.SubscriptionStatusTypes.CANCELED : i
        }(e) === M.SubscriptionStatusTypes.CANCELED
    }

    function ec(e) {
        var t, n, i;
        let {
            subscription: r,
            user: a,
            price: s,
            renewalInvoicePreview: o
        } = e, {
            planId: u,
            additionalPlans: d
        } = r, _ = N.default.get(u);
        l()(null != _, "Missing plan");
        let c = er(d),
            E = eS(r.planId, r.paymentSourceId, r.currency, a).amount * c;
        if (null != o) {
            let e = o.invoiceItems.find(e => P.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.subscriptionPlanId));
            null != e && (E = e.amount)
        }
        s = null != s ? s : (0, D.formatPrice)(E, r.currency);
        let I = null === (i = null !== (n = null == o ? void 0 : o.taxInclusive) && void 0 !== n ? n : null === (t = r.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === i || i;
        if (e_(r)) return r.isPurchasedViaGoogle ? b.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_NO_PRICE.format({
            quantity: c
        }) : I ? b.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION.format({
            quantity: c,
            rate: (0, D.formatRate)(s, _.interval, _.intervalCount)
        }) : b.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            quantity: c,
            rate: (0, D.formatRate)(s, _.interval, _.intervalCount)
        });
        switch (r.status) {
            case M.SubscriptionStatusTypes.ACCOUNT_HOLD:
                return r.isPurchasedViaGoogle ? b.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_NO_PRICE.format({
                    quantity: c,
                    boostQuantity: c
                }) : I ? b.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD.format({
                    quantity: c,
                    boostQuantity: c,
                    rate: (0, D.formatRate)(s, _.interval, _.intervalCount)
                }) : b.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                    quantity: c,
                    boostQuantity: c,
                    rate: (0, D.formatRate)(s, _.interval, _.intervalCount)
                });
            case M.SubscriptionStatusTypes.PAUSE_PENDING:
            case M.SubscriptionStatusTypes.PAUSED:
                return b.default.Messages.GUILD_BOOSTING_DISABLED_HEADER;
            default:
                return r.isPurchasedViaGoogle ? b.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_NO_PRICE.format({
                    quantity: c
                }) : I ? b.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO.format({
                    quantity: c,
                    rate: (0, D.formatRate)(s, _.interval, _.intervalCount)
                }) : b.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_TAX_EXCLUSIVE.format({
                    quantity: c,
                    rate: (0, D.formatRate)(s, _.interval, _.intervalCount)
                })
        }
    }

    function eE(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = null != t ? F(e.id, !1, i, t) : x(e.id, !1, i),
            a = (0, D.formatPrice)(r.amount, r.currency);
        return e.currency !== U.CurrencyCodes.USD && !0 === n && (a = a.concat("*")), a
    }

    function eI(e, t, n) {
        let i = eE(e, t, n);
        return (0, D.formatRate)(i, e.interval, e.intervalCount)
    }

    function eT(e) {
        let {
            status: t,
            renewalMutations: n
        } = e;
        return t === M.SubscriptionStatusTypes.CANCELED || null != n && (0, S.isNoneSubscription)(n.planId) && !e.isPurchasedExternally
    }

    function ef(e) {
        return e === M.SubscriptionStatusTypes.PAST_DUE || e === M.SubscriptionStatusTypes.ACCOUNT_HOLD || e === M.SubscriptionStatusTypes.BILLING_RETRY
    }

    function eS(e, t, n, i) {
        let r = null != t ? {
                paymentSourceId: t,
                currency: n
            } : {
                country: A.default.ipCountryCodeWithFallback,
                currency: n
            },
            a = N.default.get(e);
        if (null == a) {
            let t = Error("Unsupported plan");
            throw (0, O.captureBillingException)(t, {
                tags: {
                    planId: e
                }
            }), t
        }
        let s = N.default.getForSkuAndInterval(eb(P.PremiumSubscriptionSKUs.GUILD), a.interval, a.intervalCount);
        if (null == s) {
            let t = Error("Unsupported plan");
            throw (0, O.captureBillingException)(t, {
                tags: {
                    planId: e
                }
            }), t
        }
        return F(s.id, (0, L.isPremium)(i), !1, r)
    }

    function eh(e, t, n) {
        let i = t.id;
        if (null != e) switch (i) {
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                return b.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_0;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return b.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_0;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                return b.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_1;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return b.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_1;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                return b.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_2;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return b.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_2
        }
        switch (i) {
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                return n ? b.default.Messages.BILLING_SELECT_PLAN : b.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_0;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return n ? b.default.Messages.BILLING_SELECT_PLAN : b.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_0;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                return n ? b.default.Messages.BILLING_SELECT_PLAN : b.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_1;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return n ? b.default.Messages.BILLING_SELECT_PLAN : b.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_1;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                return n ? b.default.Messages.BILLING_SELECT_PLAN : b.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return n ? b.default.Messages.BILLING_SELECT_PLAN : b.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_2;
            case P.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case P.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                return b.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTHS_TIER_2.format({
                    intervalCount: t.intervalCount
                });
            case P.SubscriptionPlans.NONE_MONTH:
            case P.SubscriptionPlans.NONE_YEAR:
            case P.SubscriptionPlans.NONE_3_MONTH:
            case P.SubscriptionPlans.NONE_6_MONTH:
            case P.SubscriptionPlans.PREMIUM_MONTH_GUILD:
            case P.SubscriptionPlans.PREMIUM_YEAR_GUILD:
            case P.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
            case P.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
                return b.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
        }
        let r = Error("User is purchasing an unsupported plan");
        throw (0, O.captureBillingException)(r, {
            tags: {
                planId: i
            }
        }), r
    }

    function eA(e) {
        let t = e.invoiceItems[0].subscriptionPlanId,
            n = N.default.get(t);
        return l()(null != n, "Missing subscriptionPlan"), {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    }

    function em(e) {
        let {
            intervalType: t = P.SubscriptionIntervalTypes.MONTH,
            intervalCount: n = 1,
            capitalize: i = !1
        } = e;
        switch (t) {
            case P.SubscriptionIntervalTypes.DAY:
                if (n >= 7 && n % 7 == 0) return i ? b.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_WEEKS.format({
                    weeks: n / 7
                }) : b.default.Messages.PREMIUM_TRIAL_FREE_DURATION_WEEKS.format({
                    weeks: n / 7
                });
                return i ? b.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_DAYS.format({
                    days: n
                }) : b.default.Messages.PREMIUM_TRIAL_FREE_DURATION_DAYS.format({
                    days: n
                });
            case P.SubscriptionIntervalTypes.MONTH:
                return i ? b.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_MONTHS.format({
                    months: n
                }) : b.default.Messages.PREMIUM_TRIAL_FREE_DURATION_MONTHS.format({
                    months: n
                });
            case P.SubscriptionIntervalTypes.YEAR:
                return i ? b.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_YEARS.format({
                    years: n
                }) : b.default.Messages.PREMIUM_TRIAL_FREE_DURATION_YEARS.format({
                    years: n
                });
            default:
                throw Error("Unsupported interval duration.")
        }
    }

    function eN(e) {
        let {
            intervalType: t = P.SubscriptionIntervalTypes.MONTH,
            intervalCount: n = 1
        } = e;
        switch (t) {
            case P.SubscriptionIntervalTypes.DAY:
                if (n >= 7 && n % 7 == 0) return b.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_WEEKS.format({
                    weeks: n / 7
                });
                return b.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_DAYS.format({
                    days: n
                });
            case P.SubscriptionIntervalTypes.MONTH:
                return b.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_MONTHS.format({
                    months: n
                });
            case P.SubscriptionIntervalTypes.YEAR:
                return b.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_YEARS.format({
                    years: n
                });
            default:
                throw Error("Unsupported interval duration.")
        }
    }

    function ep(e) {
        let {
            intervalType: t = P.SubscriptionIntervalTypes.MONTH,
            intervalCount: n = 1,
            capitalize: i = !1
        } = e;
        switch (t) {
            case P.SubscriptionIntervalTypes.DAY:
                if (n >= 7 && n % 7 == 0) return i ? b.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
                    weeks: n / 7
                }) : b.default.Messages.DURATION_WEEKS.format({
                    weeks: n / 7
                });
                return i ? b.default.Messages.DURATION_DAYS_CAPITALIZE.format({
                    days: n
                }) : b.default.Messages.DURATION_DAYS.format({
                    days: n
                });
            case P.SubscriptionIntervalTypes.MONTH:
                return i ? b.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
                    months: n
                }) : b.default.Messages.DURATION_MONTHS.format({
                    months: n
                });
            case P.SubscriptionIntervalTypes.YEAR:
                return i ? b.default.Messages.DURATION_YEARS_CAPITALIZE.format({
                    years: n
                }) : b.default.Messages.DURATION_YEARS.format({
                    years: n
                });
            default:
                throw Error("Unsupported interval duration.")
        }
    }

    function eO(e, t) {
        switch (e) {
            case M.PaymentGateways.APPLE_PARTNER:
            case M.PaymentGateways.APPLE:
                return G[t];
            case M.PaymentGateways.GOOGLE:
                return w[t]
        }
        throw Error("Invalid external payment gateway ".concat(e))
    }

    function eR(e, t) {
        return (0, L.isPremium)(e) || ef(null == t ? void 0 : t.status)
    }

    function eC(e, t) {
        var n, i;
        let r = [],
            a = (null !== (i = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== i ? i : e.items).find(e => P.PREMIUM_PLANS.has(e.planId));
        return null != a && r.push(a), r.push(...t), r.map(t => {
            for (let n of e.items)
                if (t.planId === n.planId) return {
                    ...n,
                    ...t
                };
            return t
        })
    }

    function eg(e) {
        return e.filter(e => !P.PREMIUM_PLANS.has(e.planId))
    }

    function eL(e, t, n, i) {
        var r, a;
        l()(i.has(t), "Expected planId in group");
        let s = !1,
            o = (null !== (a = null === (r = e.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== a ? a : e.items).map(e => i.has(e.planId) ? (s = !0, {
                ...e,
                quantity: n,
                planId: t
            }) : e);
        if (!s) {
            let i = {
                    planId: t,
                    quantity: n
                },
                r = e.items.find(e => e.planId === t);
            null != r && (i.id = r.id), o.push(i)
        }
        return o.filter(e => 0 !== e.quantity)
    }

    function ev(e, t) {
        return eL(e, t, 1, P.PREMIUM_PLANS)
    }

    function eD(e, t, n) {
        return eL(e, n, t, P.PREMIUM_GUILD_SUBSCRIPTION_PLANS)
    }

    function eM(e) {
        var t;
        let n = null !== (t = e.find(e => !("id" in e))) && void 0 !== t ? t : e.find(e => P.PREMIUM_PLANS.has(e.planId));
        if (null != n) {
            let t = N.default.get(n.planId);
            l()(null != t, "Missing plan"), e = e.map(e => {
                if (e === n) return e;
                let i = N.default.get(e.planId);
                l()(null != i, "Missing plan");
                let r = N.default.getForSkuAndInterval(i.skuId, t.interval, t.intervalCount);
                return l()(null != r, "Missing planForInterval"), {
                    ...e,
                    planId: r.id
                }
            })
        }
        return e
    }

    function ey(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                useSpace: !0
            },
            n = P.PremiumUserLimits[e].fileSize;
        return (0, R.formatSize)(n / 1024, {
            useKibibytes: !0,
            useSpace: t.useSpace
        })
    }

    function eP(e) {
        return null == e ? null : e.items.find(e => P.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.planId))
    }

    function eU(e) {
        let t = null != e ? V(e) : null;
        return null != t ? en(t.planId) : null
    }

    function eb(e) {
        return e
    }
    t.default = Object.freeze({
        isNewUser: e => null != e && Date.now() - e.createdAt.getTime() < 2592e6,
        isPremiumAtLeast: L.isPremiumAtLeast,
        isPremium: L.isPremium,
        isPremiumExactly: L.isPremiumExactly,
        getPrice: F,
        getDefaultPrice: x,
        getInterval: function(e) {
            let t = P.SubscriptionPlanInfo[e];
            if (null != t) return {
                intervalType: t.interval,
                intervalCount: t.intervalCount
            };
            let n = Error("Unsupported plan");
            throw (0, O.captureBillingException)(n, {
                tags: {
                    planId: e
                }
            }), n
        },
        getIntervalString: j,
        getIntervalStringAsNoun: W,
        getPremiumType: K,
        getDisplayName: z,
        getDisplayPremiumType: Q,
        getPremiumPlanOptions: et,
        getUpgradeEligibilities: ei,
        getPlanDescription: J,
        isPremiumSku: function(e) {
            return e === P.PremiumSubscriptionSKUs.TIER_0 || e === P.PremiumSubscriptionSKUs.TIER_1 || e === P.PremiumSubscriptionSKUs.TIER_2
        },
        getClosestUpgrade: function(e) {
            let t = P.SubscriptionPlanInfo[e];
            if (null == t) throw Error("Unrecognized plan.");
            let {
                interval: n
            } = t, i = ei(e);
            for (let e of Object.keys(P.SubscriptionPlanInfo)) {
                let {
                    interval: t
                } = P.SubscriptionPlanInfo[e];
                if (n === t && i.includes(e)) return e
            }
            return null
        },
        getIntervalMonths: function(e, t) {
            if (e === P.SubscriptionIntervalTypes.MONTH) return t;
            if (e === P.SubscriptionIntervalTypes.YEAR) return 12 * t;
            throw Error("".concat(e, " interval subscription period not implemented"))
        },
        getUserMaxFileSize: g.getUserMaxFileSize,
        getSkuIdForPlan: en,
        getSkuIdForPremiumType: function(e) {
            switch (e) {
                case P.PremiumTypes.TIER_0:
                    return P.PremiumSubscriptionSKUs.TIER_0;
                case P.PremiumTypes.TIER_1:
                    return P.PremiumSubscriptionSKUs.TIER_1;
                case P.PremiumTypes.TIER_2:
                    return P.PremiumSubscriptionSKUs.TIER_2
            }
        },
        getNumIncludedPremiumGuildSubscriptionSlots: function(e) {
            if (K(e) === P.PremiumTypes.TIER_2) return P.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
            return 0
        },
        getBillingInformationString: function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = n ? (0, D.formatPrice)(t.invoiceItems.filter(e => P.PREMIUM_TIER_2_PLANS.has(e.subscriptionPlanId)).map(e => e.amount).reduce((e, t) => t + e, 0), t.currency) : (0, D.formatPrice)(t.total, t.currency);
            if (e.status === M.SubscriptionStatusTypes.CANCELED) return b.default.Messages.PREMIUM_SETTINGS_CANCELLED_INFO.format({
                endDate: t.subscriptionPeriodStart
            });
            if (e.status === M.SubscriptionStatusTypes.PAUSE_PENDING) return b.default.Messages.PREMIUM_SETTINGS_PAUSE_PENDING_INFO.format({
                pauseDate: e.currentPeriodEnd,
                resumeDate: e.pauseEndsAt
            });
            if (e.status === M.SubscriptionStatusTypes.PAUSED) return null == e.pauseEndsAt ? n ? b.default.Messages.PREMIUM_SETTINGS_PAUSED_INFO_WITH_PLAN.format({
                planName: b.default.Messages.PREMIUM,
                price: i
            }) : b.default.Messages.PREMIUM_SETTINGS_PAUSED_INFO : n ? b.default.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO_WITH_PLAN.format({
                planName: b.default.Messages.PREMIUM,
                resumeDate: e.pauseEndsAt,
                price: i
            }) : b.default.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO.format({
                resumeDate: e.pauseEndsAt
            });
            else if (e.status === M.SubscriptionStatusTypes.PAST_DUE) {
                var r, a;
                let t = eu(e).expiresDate;
                return (e.isPurchasedViaGoogle && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_grace_period_expires_date) != null && (t = d()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (a = e.metadata) || void 0 === a ? void 0 : a.apple_grace_period_expires_date) != null && (t = d()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally) ? b.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO_EXTERNAL.format({
                    endDate: t,
                    paymentGatewayName: U.PaymentGatewayToFriendlyName[e.paymentGateway],
                    paymentSourceLink: eO(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
                }) : b.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO.format({
                    endDate: t,
                    price: i
                })
            } else return e.status === M.SubscriptionStatusTypes.BILLING_RETRY ? b.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
                endDate: d()(e.currentPeriodStart).add(P.PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS, "days"),
                price: i
            }) : e.status === M.SubscriptionStatusTypes.ACCOUNT_HOLD ? e.isPurchasedViaGoogle && !(0, C.isAndroid)() ? b.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_EXTERNAL.format({
                endDate: d()(e.currentPeriodStart).add(P.MAX_ACCOUNT_HOLD_DAYS, "days"),
                paymentGatewayName: U.PaymentGatewayToFriendlyName[e.paymentGateway],
                paymentSourceLink: eO(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
            }) : b.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
                endDate: d()(e.currentPeriodStart).add(P.MAX_ACCOUNT_HOLD_DAYS, "days"),
                price: i
            }) : function(e) {
                return null != e.paymentSourceId && ed(e.paymentSourceId)
            }(e) ? b.default.Messages.PREMIUM_SETTINGS_PREPAID_THROUGH_DATE.format({
                prepaidEndDate: e.currentPeriodEnd
            }) : e.status === M.SubscriptionStatusTypes.UNPAID ? b.default.Messages.PREMIUM_SETTINGS_PAYMENT_PROCESSING.format({
                maxProcessingTimeInDays: P.MAX_PAYMENT_PROCESSING_TIME_DAYS
            }) : e.isPurchasedExternally ? b.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_EXTERNAL.format({
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: U.PaymentGatewayToFriendlyName[e.paymentGateway],
                subscriptionManagementLink: eO(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
            }) : n ? b.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_WITH_PLAN.format({
                planName: b.default.Messages.PREMIUM,
                renewalDate: t.subscriptionPeriodStart,
                price: i
            }) : b.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO.format({
                renewalDate: t.subscriptionPeriodStart,
                price: i
            })
        },
        isNoneSubscription: S.isNoneSubscription,
        getPlanIdFromInvoice: function(e, t) {
            let {
                planId: n
            } = e;
            if (e.status === M.SubscriptionStatusTypes.CANCELED || e.status === M.SubscriptionStatusTypes.PAUSE_PENDING) return n;
            l()(null != t, "Expected invoicePreview");
            let i = t.invoiceItems.find(e => {
                let {
                    subscriptionPlanId: t
                } = e;
                return es(t)
            });
            return n = null == i || (0, S.isNoneSubscription)(i.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : i.subscriptionPlanId
        },
        getStatusFromInvoice: function(e, t) {
            let {
                status: n
            } = e;
            if (e.status === M.SubscriptionStatusTypes.CANCELED || e.status === M.SubscriptionStatusTypes.PAUSE_PENDING) return n;
            l()(null != t, "Expected invoicePreview");
            let i = t.invoiceItems.find(e => {
                let {
                    subscriptionPlanId: t
                } = e;
                return es(t)
            });
            return (null == i || (0, S.isNoneSubscription)(i.subscriptionPlanId)) && (n = M.SubscriptionStatusTypes.CANCELED), n
        },
        isBaseSubscriptionCanceled: eT,
        getPremiumGuildIntervalPrice: eS,
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
        getBillingReviewSubheader: eh,
        getIntervalForInvoice: eA,
        getPremiumPlanItem: V,
        getGuildBoostPlanItem: eP,
        isBoostOnlySubscription: function(e) {
            return null != e && null == V(e) && null != eP(e)
        },
        getPremiumSkuIdForSubscription: eU,
        getPremiumTypeFromSubscription: function(e) {
            if (null != e) {
                let t = V(e);
                if (null != t) return K(t.planId)
            }
        },
        getPremiumTypeFromSubscriptionRenewalMutations: function(e) {
            if (null != e && null != e.renewalMutations) {
                let t = V(e.renewalMutations);
                if (null != t) return K(t.planId)
            }
        },
        getPremiumGradientColor: function(e) {
            switch (e) {
                case P.PremiumTypes.TIER_0:
                    return y.Gradients.PREMIUM_TIER_0;
                case P.PremiumTypes.TIER_1:
                    return y.Gradients.PREMIUM_TIER_1;
                case P.PremiumTypes.TIER_2:
                    return y.Gradients.PREMIUM_TIER_2
            }
        },
        castPremiumSubscriptionAsSkuId: eb,
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
                i = W(t);
            return "".concat(n, "/").concat(i)
        },
        StreamQuality: r
    })
}