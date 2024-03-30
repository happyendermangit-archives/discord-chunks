function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StreamQuality: function() {
            return u
        },
        castPremiumSubscriptionAsSkuId: function() {
            return eG
        },
        coerceExistingItemsToNewItemInterval: function() {
            return eM
        },
        experimentalGetPrices: function() {
            return W
        },
        formatIntervalDuration: function() {
            return eA
        },
        formatTrialCtaIntervalDuration: function() {
            return eg
        },
        formatTrialOfferIntervalDuration: function() {
            return ev
        },
        getBillingGracePeriodDaysAndExpiresDate: function() {
            return ed
        },
        getBillingReviewSubheader: function() {
            return eT
        },
        getDefaultPrice: function() {
            return x
        },
        getDiscountIntervalString: function() {
            return K
        },
        getDisplayName: function() {
            return Q
        },
        getDisplayNameFromSku: function() {
            return J
        },
        getDisplayPremiumType: function() {
            return $
        },
        getExternalPlanDisplayName: function() {
            return er
        },
        getExternalSubscriptionMethodUrl: function() {
            return eb
        },
        getFormattedPriceForPlan: function() {
            return em
        },
        getFormattedRateForPlan: function() {
            return ey
        },
        getIntervalForInvoice: function() {
            return eS
        },
        getIntervalString: function() {
            return z
        },
        getIntervalStringAsNoun: function() {
            return X
        },
        getItemsFromNewAdditionalPlans: function() {
            return eR
        },
        getItemsWithUpsertedPlanIdForGroup: function() {
            return eP
        },
        getItemsWithUpsertedPremiumGuildPlan: function() {
            return eL
        },
        getItemsWithUpsertedPremiumPlanId: function() {
            return eD
        },
        getItemsWithoutPremiumPlanItem: function() {
            return eC
        },
        getMaxFileSizeForPremiumType: function() {
            return eU
        },
        getNumPremiumGuildSubscriptions: function() {
            return eu
        },
        getPlanDescriptionFromInvoice: function() {
            return en
        },
        getPremiumGuildHeaderDescription: function() {
            return ep
        },
        getPremiumPlanItem: function() {
            return H
        },
        getPremiumPlanOptions: function() {
            return eo
        },
        getPremiumSkuIdForSubscription: function() {
            return ek
        },
        getPremiumType: function() {
            return q
        },
        getPremiumTypeDisplayName: function() {
            return ee
        },
        getPrice: function() {
            return Y
        },
        getTierDisplayName: function() {
            return Z
        },
        hasPremiumSubscriptionToDisplay: function() {
            return eN
        },
        isPremium: function() {
            return A.isPremium
        },
        isPremiumAtLeast: function() {
            return A.isPremiumAtLeast
        },
        isPremiumBaseSubscriptionPlan: function() {
            return el
        },
        isPremiumExactly: function() {
            return A.isPremiumExactly
        },
        isPremiumGuildSubscriptionCanceled: function() {
            return eE
        },
        isPremiumGuildSubscriptionPlan: function() {
            return ec
        },
        isPremiumSubscriptionPlan: function() {
            return ef
        },
        isPrepaidPaymentSource: function() {
            return e_
        },
        isSubscriptionStatusFailedPayment: function() {
            return eh
        }
    });
    var r, o, i, a, u, s = n("512722"),
        l = n.n(s),
        c = n("913527"),
        f = n.n(c);
    n("898511");
    var d = n("35523"),
        _ = n("64916"),
        E = n("89334"),
        p = n("590515"),
        m = n("208454"),
        y = n("362108"),
        I = n("534154"),
        h = n("622753"),
        O = n("428920"),
        T = n("146703"),
        S = n("304933"),
        v = n("374550"),
        g = n("59747"),
        A = n("32950"),
        b = n("830721"),
        N = n("497894"),
        R = n("281767"),
        C = n("224121"),
        P = n("868615"),
        D = n("563090"),
        L = n("941504");

    function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function U(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function w(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                U(e, t, n[t])
            })
        }
        return e
    }

    function k(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function G(e) {
        return function(e) {
            if (Array.isArray(e)) return M(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return M(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var B = {
            PAYMENT_SOURCE_MANAGEMENT: "https://support.apple.com/HT201266",
            BILLING_HISTORY: "https://support.apple.com/HT201266",
            SUBSCRIPTION_MANAGEMENT: "https://support.apple.com/HT202039"
        },
        j = {
            SUBSCRIPTION_MANAGEMENT: "https://play.google.com/store/account/subscriptions",
            PAYMENT_SOURCE_MANAGEMENT: "https://play.google.com/store/paymentmethods",
            BILLING_HISTORY: "https://play.google.com/store/account/orderhistory"
        },
        F = new d.default("PremiumUtils.tsx"),
        V = (U(i = {}, P.SubscriptionPlans.NONE_MONTH, [P.SubscriptionPlans.NONE_YEAR, P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1, P.SubscriptionPlans.PREMIUM_MONTH_TIER_1]), U(i, P.SubscriptionPlans.NONE_YEAR, [P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1, P.SubscriptionPlans.PREMIUM_MONTH_TIER_1]), U(i, P.SubscriptionPlans.PREMIUM_MONTH_TIER_0, [P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1, P.SubscriptionPlans.PREMIUM_MONTH_TIER_1, P.SubscriptionPlans.PREMIUM_YEAR_TIER_0]), U(i, P.SubscriptionPlans.PREMIUM_YEAR_TIER_0, [P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1, P.SubscriptionPlans.PREMIUM_MONTH_TIER_1]), U(i, P.SubscriptionPlans.PREMIUM_MONTH_TIER_1, [P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1]), U(i, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1, [P.SubscriptionPlans.PREMIUM_YEAR_TIER_2]), U(i, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, [P.SubscriptionPlans.PREMIUM_YEAR_TIER_2]), U(i, P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, []), U(i, "ALL", [P.SubscriptionPlans.NONE_MONTH, P.SubscriptionPlans.NONE_YEAR, P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1, P.SubscriptionPlans.PREMIUM_MONTH_TIER_1, P.SubscriptionPlans.PREMIUM_YEAR_TIER_0, P.SubscriptionPlans.PREMIUM_MONTH_TIER_0]), i);

    function H(e) {
        return e.items.find(function(e) {
            return P.PREMIUM_PLANS.has(e.planId)
        })
    }

    function x(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = null !== (t = I.default.defaultPaymentSourceId) && void 0 !== t ? t : void 0,
            i = O.default.getPremiumTypeSubscription();
        return null != i && null != i.paymentSourceId && (o = i.paymentSourceId), Y(e, n, r, {
            paymentSourceId: o
        })
    }

    function Y(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            o = r.paymentSourceId,
            i = r.currency;
        if (null != h.default.get(e)) {
            var a = R.PriceSetAssignmentPurchaseTypes.DEFAULT;
            n ? a = R.PriceSetAssignmentPurchaseTypes.GIFT : t && (a = R.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_1);
            var u = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        purchaseType: R.PriceSetAssignmentPurchaseTypes.DEFAULT
                    },
                    n = t.paymentSourceId,
                    r = t.purchaseType,
                    o = t.currency,
                    i = W(e, {
                        paymentSourceId: n,
                        purchaseType: r
                    });
                return (0 === i.length && F.warn("No prices found for planId: ".concat(e, ", paymentSourceId: ").concat(n, ", purchaseType: ").concat(r)), null != o) ? i.find(function(e) {
                    return e.currency === o
                }) : i[0]
            }(e, {
                paymentSourceId: o,
                purchaseType: a,
                currency: i
            });
            if (null == u) {
                var s = Error("Couldn't find price");
                throw (0, T.captureBillingException)(s, {
                    extra: {
                        paymentSourceId: o
                    },
                    tags: {
                        purchaseType: a.toString(),
                        planId: e,
                        currency: null != i ? i : "unknown"
                    }
                }), s
            }
            return u
        }
        var l = Error("Plan not found");
        throw (0, T.captureBillingException)(l, {
            tags: {
                planId: e,
                currency: null != i ? i : "unknown"
            },
            extra: k(w({}, r), {
                isGift: n
            })
        }), l
    }(r = a || (a = {})).BUNDLE = "bundle", r.TIER_0 = "tier_0", r.TIER_1 = "tier_1", r.TIER_2 = "tier_2", r.PREMIUM_GUILD = "premium_guild", (o = u || (u = {})).MID = "mid", o.HIGH = "high";

    function W(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                purchaseType: R.PriceSetAssignmentPurchaseTypes.DEFAULT
            },
            n = t.paymentSourceId,
            r = t.purchaseType,
            o = function(e, t) {
                var n = h.default.get(e);
                if (null == n) {
                    var r = Error("Plan not found");
                    throw (0, T.captureBillingException)(r, {
                        tags: {
                            planId: e,
                            purchaseType: t.toString()
                        }
                    }), r
                }
                if (null == n.prices) throw Error("No prices returned for ".concat(e, ", is your user in the experiment?"));
                var o = n.prices[t];
                if (null == o) throw F.info("Purchase types: ".concat(JSON.stringify(Object.keys(n.prices)))), Error("No prices returned for purchase type ".concat(t, " for plan ").concat(e));
                return o
            }(e, r);
        if (null != n) {
            var i = o.paymentSourcePrices[n];
            if (null == i) {
                F.info("Payment sources IDs: ".concat(JSON.stringify(Object.keys(o.paymentSourcePrices)))), F.info("prices: ".concat(i));
                var a = Error("Missing prices for payment source on subscription plan");
                (0, T.captureBillingException)(a, {
                    extra: {
                        paymentSourceId: n
                    },
                    tags: {
                        purchaseType: r.toString(),
                        planId: e
                    }
                })
            } else if (0 !== i.length) return i
        }
        if (null == o.countryPrices.prices) {
            F.info("countryPrices: ".concat(JSON.stringify(o.countryPrices)));
            var u = Error("Missing prices for country");
            throw (0, T.captureBillingException)(u, {
                tags: {
                    countryCode: o.countryPrices.countryCode,
                    planId: e
                }
            }), u
        }
        return o.countryPrices.prices
    }

    function K(e) {
        switch (e) {
            case P.DiscountUserUsageLimitIntervalTypes.MONTH:
                return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
            case P.DiscountUserUsageLimitIntervalTypes.YEAR:
                return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
            case P.DiscountUserUsageLimitIntervalTypes.DAY:
            case P.DiscountUserUsageLimitIntervalTypes.WEEK:
            default:
                throw Error("Unexpected interval")
        }
    }

    function z(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : P.PremiumTypes.TIER_2;
        if (t || n) switch (e) {
            case P.SubscriptionIntervalTypes.MONTH:
                var a = (i === P.PremiumTypes.TIER_0 ? L.default.Messages.BASIC_GIFT_DURATION : L.default.Messages.GIFT_DURATION).format({
                    timeInterval: L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                });
                return o ? a : L.default.Messages.PAYMENT_MODAL_ONE_MONTH;
            case P.SubscriptionIntervalTypes.YEAR:
                var u = (i === P.PremiumTypes.TIER_0 ? L.default.Messages.BASIC_GIFT_DURATION : L.default.Messages.GIFT_DURATION).format({
                    timeInterval: L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                });
                return o ? u : L.default.Messages.PAYMENT_MODAL_ONE_YEAR;
            default:
                throw Error("Unexpected interval")
        }
        switch (e) {
            case P.SubscriptionIntervalTypes.MONTH:
                if (1 !== r) return L.default.Messages.MULTI_MONTHS.format({
                    intervalCount: r
                });
                return L.default.Messages.MONTHLY;
            case P.SubscriptionIntervalTypes.YEAR:
                return L.default.Messages.YEARLY;
            default:
                throw Error("Unexpected interval")
        }
    }

    function X(e) {
        switch (e) {
            case P.SubscriptionIntervalTypes.MONTH:
                return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
            case P.SubscriptionIntervalTypes.YEAR:
                return L.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
            default:
                throw Error("Unexpected interval")
        }
    }

    function q(e) {
        var t = P.SubscriptionPlanInfo[e];
        if (null != t) return t.premiumType;
        var n = Error("Unsupported plan");
        throw (0, T.captureBillingException)(n, {
            tags: {
                planId: e
            }
        }), n
    }

    function Q(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0;
        switch (e) {
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                return t ? L.default.Messages.PREMIUM_PLAN_MONTH_TIER_0_TRIAL_DURATION.format({
                    duration: r
                }) : n ? L.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_0 : L.default.Messages.PREMIUM_PLAN_MONTH_TIER_0;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return t ? L.default.Messages.PREMIUM_PLAN_YEAR_TIER_0_TRIAL_DURATION.format({
                    duration: r
                }) : n ? L.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_0 : L.default.Messages.PREMIUM_PLAN_YEAR_TIER_0;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                return n ? L.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_1 : L.default.Messages.PREMIUM_PLAN_MONTH_TIER_1;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return n ? L.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_1 : L.default.Messages.PREMIUM_PLAN_YEAR_TIER_1;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                return t ? L.default.Messages.PREMIUM_PLAN_MONTH_TIER_2_TRIAL_DURATION.format({
                    duration: r
                }) : n ? L.default.Messages.PREMIUM_PLAN_ONE_MONTH_TIER_2 : L.default.Messages.PREMIUM_PLAN_MONTH_TIER_2;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return t ? L.default.Messages.PREMIUM_PLAN_YEAR_TIER_2_TRIAL_DURATION.format({
                    duration: r
                }) : n ? L.default.Messages.PREMIUM_PLAN_ONE_YEAR_TIER_2 : L.default.Messages.PREMIUM_PLAN_YEAR_TIER_2;
            case P.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
                return L.default.Messages.PREMIUM_PLAN_3_MONTH_TIER_2;
            case P.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                return L.default.Messages.PREMIUM_PLAN_6_MONTH_TIER_2;
            case P.SubscriptionPlans.PREMIUM_MONTH_GUILD:
                return n ? L.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : L.default.Messages.PREMIUM_GUILD_PLAN_MONTH;
            case P.SubscriptionPlans.PREMIUM_YEAR_GUILD:
                return n ? L.default.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : L.default.Messages.PREMIUM_GUILD_PLAN_YEAR;
            case P.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
                return L.default.Messages.PREMIUM_GUILD_PLAN_3_MONTH;
            case P.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
                return L.default.Messages.PREMIUM_GUILD_PLAN_6_MONTH;
            case P.SubscriptionPlans.PREMIUM_MONTH_LEGACY:
                return L.default.Messages.PREMIUM_PLAN_MONTH;
            case P.SubscriptionPlans.PREMIUM_YEAR_LEGACY:
                return L.default.Messages.PREMIUM_PLAN_YEAR
        }
        var o = Error("Unsupported plan");
        throw (0, T.captureBillingException)(o, {
            tags: {
                planId: e
            }
        }), o
    }

    function J(e) {
        switch (e) {
            case P.PremiumSubscriptionSKUs.TIER_0:
                return L.default.Messages.PREMIUM_TIER_0;
            case P.PremiumSubscriptionSKUs.TIER_1:
                return L.default.Messages.PREMIUM_TIER_1;
            case P.PremiumSubscriptionSKUs.TIER_2:
                return L.default.Messages.PREMIUM_TIER_2
        }
        var t = Error("Unsupported sku");
        throw (0, T.captureBillingException)(t, {
            tags: {
                skuId: e
            }
        }), t
    }

    function Z(e) {
        switch (e) {
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return L.default.Messages.PREMIUM_TIER_0;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return L.default.Messages.PREMIUM_TIER_1;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
            case P.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case P.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return L.default.Messages.PREMIUM_TIER_2
        }
        var t = Error("Unsupported plan");
        throw (0, T.captureBillingException)(t, {
            tags: {
                planId: e
            }
        }), t
    }

    function $(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
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
        var n = Error("Unsupported plan");
        throw (0, T.captureBillingException)(n, {
            tags: {
                planId: e
            }
        }), n
    }

    function ee(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch (e) {
            case P.PremiumTypes.TIER_0:
                return t ? "Basic" : L.default.Messages.PREMIUM_TIER_0;
            case P.PremiumTypes.TIER_1:
                return t ? "Classic" : L.default.Messages.PREMIUM_TIER_1;
            case P.PremiumTypes.TIER_2:
                return L.default.Messages.PREMIUM_TIER_2
        }
    }

    function et(e) {
        var t, n, r, o, i, a, u, s, l, c = e.subscription,
            f = e.planId,
            d = e.price,
            _ = e.includePremiumGuilds,
            E = e.hasDiscountApplied,
            p = e.activeDiscountInfo,
            y = e.renewalInvoicePreview,
            I = b.default.formatPriceString(b.default.getDefaultPrice(P.SubscriptionPlans.PREMIUM_MONTH_TIER_2), P.SubscriptionIntervalTypes.MONTH),
            h = eI(c) || null == c.paymentSourceId && !c.isPurchasedExternally && !(null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.hasFreePremium()),
            O = null != d,
            T = c.status === R.SubscriptionStatusTypes.UNPAID && null !== c.latestInvoice && (null === (n = c.latestInvoice) || void 0 === n ? void 0 : n.status) === R.InvoiceStatusTypes.OPEN,
            S = h ? R.SubscriptionStatusTypes.CANCELED : T ? R.SubscriptionStatusTypes.UNPAID : c.status,
            v = null === (i = null !== (o = null == y ? void 0 : y.taxInclusive) && void 0 !== o ? o : null === (r = c.latestInvoice) || void 0 === r ? void 0 : r.taxInclusive) || void 0 === i || i,
            g = P.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM + (_ ? eu(c.additionalPlans) : 0);
        switch (f) {
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                switch (S) {
                    case R.SubscriptionStatusTypes.CANCELED:
                        return O ? v ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION.format({
                            price: d
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                            price: d
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_CANCELATION_NO_PRICE;
                    case R.SubscriptionStatusTypes.ACCOUNT_HOLD:
                        return O ? v ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD.format({
                            price: d
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                            price: d
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_ACCOUNT_HOLD_NO_PRICE.format();
                    case R.SubscriptionStatusTypes.UNPAID:
                        return L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAYMENT.format();
                    case R.SubscriptionStatusTypes.PAUSE_PENDING:
                        return O ? v ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAUSE.format({
                            price: d,
                            pauseDate: c.currentPeriodEnd
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAUSE_TAX_EXCLUSIVE.format({
                            price: d,
                            pauseDate: c.currentPeriodEnd
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_PENDING_PAUSE_NO_PRICE.format({
                            pauseDate: c.currentPeriodEnd
                        });
                    case R.SubscriptionStatusTypes.PAUSED:
                        return L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
                            resumeDate: c.pauseEndsAt
                        });
                    default:
                        return O ? v ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0.format({
                            price: d
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_TAX_EXCLUSIVE.format({
                            price: d
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_0_NO_PRICE
                }
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                switch (S) {
                    case R.SubscriptionStatusTypes.CANCELED:
                        return O ? v ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION.format({
                            price: d
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                            price: d
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_CANCELATION_NO_PRICE;
                    case R.SubscriptionStatusTypes.ACCOUNT_HOLD:
                        return O ? v ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD.format({
                            price: d
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                            price: d
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_ACCOUNT_HOLD_NO_PRICE.format();
                    case R.SubscriptionStatusTypes.UNPAID:
                        return L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAYMENT.format();
                    case R.SubscriptionStatusTypes.CANCELED:
                        return O ? v ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAUSE.format({
                            price: d,
                            pauseDate: c.currentPeriodEnd
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAUSE_TAX_EXCLUSIVE.format({
                            price: d,
                            pauseDate: c.currentPeriodEnd
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_PENDING_PAUSE_NO_PRICE.format({
                            pauseDate: c.currentPeriodEnd
                        });
                    case R.SubscriptionStatusTypes.PAUSED:
                        return L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
                            resumeDate: c.pauseEndsAt
                        });
                    default:
                        return O ? v ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1.format({
                            price: d
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_TAX_EXCLUSIVE.format({
                            price: d
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_1_NO_PRICE
                }
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
            case P.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case P.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                switch (S) {
                    case R.SubscriptionStatusTypes.CANCELED:
                        return O ? v ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION.format({
                            price: d,
                            num: g
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
                            price: d,
                            num: g
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_CANCELATION_NO_PRICE.format({
                            num: g
                        });
                    case R.SubscriptionStatusTypes.ACCOUNT_HOLD:
                        return O ? v ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD.format({
                            price: d,
                            num: g
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
                            price: d,
                            num: g
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_ACCOUNT_HOLD_NO_PRICE.format({
                            num: g
                        });
                    case R.SubscriptionStatusTypes.UNPAID:
                        return L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAYMENT.format({
                            num: g
                        });
                    case R.SubscriptionStatusTypes.PAUSE_PENDING:
                        return O ? v ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAUSE.format({
                            price: d,
                            num: g,
                            pauseDate: c.currentPeriodEnd
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAUSE_TAX_EXCLUSIVE.format({
                            price: d,
                            num: g,
                            pauseDate: c.currentPeriodEnd
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_PENDING_PAUSE_NO_PRICE.format({
                            num: g,
                            pauseDate: c.currentPeriodEnd
                        });
                    case R.SubscriptionStatusTypes.PAUSED:
                        return L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_NITRO_PAUSED.format({
                            resumeDate: c.pauseEndsAt
                        });
                    default:
                        return E ? v ? L.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
                            percent: null !== (a = null == p ? void 0 : p.percentage) && void 0 !== a ? a : P.DISCOUNT_PERCENTAGE_FALLBACK,
                            regularPrice: I,
                            numMonths: null !== (u = null == p ? void 0 : p.duration) && void 0 !== u ? u : P.DISCOUNT_DURATION_FALLBACK
                        }) : L.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC_TAX_EXCLUSIVE.format({
                            percent: null !== (s = null == p ? void 0 : p.percentage) && void 0 !== s ? s : P.DISCOUNT_PERCENTAGE_FALLBACK,
                            regularPrice: I,
                            numMonths: null !== (l = null == p ? void 0 : p.duration) && void 0 !== l ? l : P.DISCOUNT_DURATION_FALLBACK
                        }) : O ? v ? L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2.format({
                            price: d,
                            num: g
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_TAX_EXCLUSIVE.format({
                            price: d,
                            num: g
                        }) : L.default.Messages.PREMIUM_SUBSCRIPTION_DESCRIPTION_TIER_2_NO_PRICE.format({
                            num: g
                        })
                }
            default:
                throw Error("Invalid planId ".concat(f))
        }
    }

    function en(e) {
        var t = e.renewalInvoicePreview,
            n = e.subscription,
            r = e.planId,
            o = e.includePremiumGuilds,
            i = e.hasDiscountApplied,
            a = e.activeDiscountInfo,
            u = h.default.get(r);
        return l()(null != u, "Missing plan"), et({
            subscription: n,
            planId: u.id,
            price: function(e, t, n) {
                var r = e.invoiceItems.find(function(e) {
                        return e.subscriptionPlanId === n.id
                    }),
                    o = null == r ? Y(n.id, !1, !1, {
                        paymentSourceId: t.paymentSourceId,
                        currency: t.currency
                    }).amount : r.amount;
                return (0, N.formatRate)((0, N.formatPrice)(o, e.currency), n.interval, n.intervalCount)
            }(t, n, u),
            includePremiumGuilds: void 0 !== o && o,
            hasDiscountApplied: void 0 !== i && i,
            activeDiscountInfo: a,
            renewalInvoicePreview: t
        })
    }

    function er(e) {
        var t = e.planId,
            n = e.additionalPlans,
            r = (0, p.isNoneSubscription)(t) ? null : Q(t),
            o = null == n ? void 0 : n.find(function(e) {
                var t = e.planId;
                return P.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
            }),
            i = (null == o ? void 0 : o.planId) === P.SubscriptionPlans.PREMIUM_MONTH_GUILD ? L.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : (null == o ? void 0 : o.planId) === P.SubscriptionPlans.PREMIUM_YEAR_GUILD ? L.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS_UNFORMATTED : null,
            a = null == i ? void 0 : i.format({
                num: null == o ? void 0 : o.quantity
            });
        if (null != r && null != a) return L.default.Messages.PREMIUM_WITH_PREMIUM_GUILD_EXTERNAL_PLAN_DESCRIPTION.format({
            premiumDescription: r,
            premiumGuildDescription: a
        });
        if (null != r) return r;
        if (null != a) return a;
        else throw Error("Subscription without premium or premium guild subscription")
    }

    function eo(e) {
        var t = e.skuId,
            n = e.isPremium,
            r = e.multiMonthPlans,
            o = e.currentSubscription,
            i = e.isGift,
            a = e.isEligibleForTrial,
            u = e.defaultPlanId,
            s = e.defaultToMonthlyPlan;
        if (null == t || !n) return [];
        var l = void 0 !== u && t === P.SubscriptionPlanInfo[u].skuId ? u : void 0;
        void 0 === l && s && !i && (l = P.PREMIUM_SKU_TO_MONTHLY_PLAN[t]), a && !i && (void 0 === u || s && P.PREMIUM_MONTHLY_PLANS.has(u)) && E.TrialRedemptionDefaultPlanExperiment.trackExposure({
            location: "de805e_1"
        });
        var c = [];
        switch (t) {
            case P.PremiumSubscriptionSKUs.TIER_0:
                c = [P.SubscriptionPlans.PREMIUM_YEAR_TIER_0, P.SubscriptionPlans.PREMIUM_MONTH_TIER_0];
                break;
            case P.PremiumSubscriptionSKUs.TIER_1:
                c = [P.SubscriptionPlans.PREMIUM_MONTH_TIER_1];
                break;
            case P.PremiumSubscriptionSKUs.TIER_2:
                var f = r;
                if (null != o) {
                    var d = o.items[0].planId;
                    if (P.MULTI_MONTH_PLANS.has(d)) {
                        var _ = P.SubscriptionPlanInfo[d];
                        f = G(P.MULTI_MONTH_PLANS).filter(function(e) {
                            var t = P.SubscriptionPlanInfo[e];
                            return t.interval === _.interval && t.intervalCount === _.intervalCount && t.skuId === P.PremiumSubscriptionSKUs.TIER_2
                        })
                    } else f = []
                }
                c = [P.SubscriptionPlans.PREMIUM_YEAR_TIER_2].concat(G(f), [P.SubscriptionPlans.PREMIUM_MONTH_TIER_2]);
                break;
            default:
                throw Error("Unexpected SKU: ".concat(t))
        }
        if (void 0 !== l) {
            var p = c.indexOf(l);
            c.splice(p, 1), c.unshift(l)
        }
        return c
    }

    function ei(e) {
        var t = P.SubscriptionPlanInfo[e];
        if (null == t) {
            var n = Error("Unsupported plan");
            throw (0, T.captureBillingException)(n, {
                tags: {
                    planId: e
                }
            }), n
        }
        return t.skuId
    }

    function ea(e) {
        var t;
        return null == e ? V.ALL : null !== (t = V[e]) && void 0 !== t ? t : []
    }

    function eu(e) {
        var t = h.default.getPlanIdsForSkus([eG(P.PremiumSubscriptionSKUs.GUILD)]);
        l()(null != t, "Missing guildSubscriptionPlanIds");
        var n = e.find(function(e) {
            var n = e.planId;
            return t.includes(n)
        });
        return null != n ? n.quantity : 0
    }
    var es = new Set([P.SubscriptionPlans.NONE_MONTH, P.SubscriptionPlans.NONE_3_MONTH, P.SubscriptionPlans.NONE_6_MONTH, P.SubscriptionPlans.NONE_YEAR, P.SubscriptionPlans.PREMIUM_MONTH_TIER_0, P.SubscriptionPlans.PREMIUM_MONTH_TIER_1, P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_YEAR_TIER_0, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1, P.SubscriptionPlans.PREMIUM_YEAR_TIER_2, P.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2, P.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2]);

    function el(e) {
        return es.has(e)
    }

    function ec(e) {
        return P.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e)
    }

    function ef(e) {
        return el(e) || ec(e)
    }

    function ed(e) {
        if (e.isPurchasedViaApple && (null === (t = e.metadata) || void 0 === t ? void 0 : t.apple_grace_period_expires_date) != null) {
            var t, n, r, o, i, a = f()(e.metadata.apple_grace_period_expires_date);
            return {
                days: f().duration(a.diff(e.currentPeriodStart)).days(),
                expiresDate: a
            }
        }
        if (e.isPurchasedViaGoogle && (null === (n = e.metadata) || void 0 === n ? void 0 : n.google_grace_period_expires_date) != null && (null === (r = e.metadata) || void 0 === r ? void 0 : r.google_original_expires_date) != null) {
            var u = f()(e.metadata.google_grace_period_expires_date),
                s = f()(e.metadata.google_original_expires_date);
            return {
                days: f().duration(u.diff(s)).days(),
                expiresDate: u
            }
        }
        if (e.isPurchasedExternally) {
            var l = e.isPurchasedViaApple ? P.DEFAULT_APPLE_GRACE_PERIOD_DAYS : P.DEFAULT_GOOGLE_GRACE_PERIOD_DAYS;
            return {
                days: l,
                expiresDate: f()(e.currentPeriodStart).add(l, "days")
            }
        }
        if ((null === (o = e.metadata) || void 0 === o ? void 0 : o.grace_period_expires_date) != null) {
            ;
            return {
                days: f()(null === (i = e.metadata) || void 0 === i ? void 0 : i.grace_period_expires_date).diff(e.currentPeriodStart, "days"),
                expiresDate: f()(e.metadata.grace_period_expires_date)
            }
        }
        var c = null == e.paymentSourceId ? P.DEFAULT_MAX_GRACE_PERIOD_DAYS : P.PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS;
        return {
            days: c,
            expiresDate: f()(e.currentPeriodStart).add(c, "days")
        }
    }

    function e_(e) {
        if (null == e) return !1;
        var t = I.default.getPaymentSource(e);
        return null != t && D.PREPAID_PAYMENT_SOURCES.has(t.type)
    }

    function eE(e) {
        var t, n, r, o, i;
        return e.isPurchasedExternally ? e.status === R.SubscriptionStatusTypes.CANCELED : (n = (t = e).renewalMutations, r = t.additionalPlans, o = t.status, i = eu(r), (0 === (null != n ? eu(n.additionalPlans) : null) && 0 !== i ? R.SubscriptionStatusTypes.CANCELED : o) === R.SubscriptionStatusTypes.CANCELED)
    }

    function ep(e) {
        var t, n, r, o = e.subscription,
            i = e.user,
            a = e.price,
            u = e.renewalInvoicePreview,
            s = o.planId,
            c = o.additionalPlans,
            f = h.default.get(s);
        l()(null != f, "Missing plan");
        var d = eu(c),
            _ = eO(o.planId, o.paymentSourceId, o.currency, i).amount * d;
        if (null != u) {
            var E = u.invoiceItems.find(function(e) {
                return P.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.subscriptionPlanId)
            });
            null != E && (_ = E.amount)
        }
        a = null != a ? a : (0, N.formatPrice)(_, o.currency);
        var p = null === (r = null !== (n = null == u ? void 0 : u.taxInclusive) && void 0 !== n ? n : null === (t = o.latestInvoice) || void 0 === t ? void 0 : t.taxInclusive) || void 0 === r || r;
        return eE(o) ? o.isPurchasedViaGoogle ? L.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_NO_PRICE.format({
            quantity: d
        }) : p ? L.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION.format({
            quantity: d,
            rate: (0, N.formatRate)(a, f.interval, f.intervalCount)
        }) : L.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_PENDING_CANCELATION_TAX_EXCLUSIVE.format({
            quantity: d,
            rate: (0, N.formatRate)(a, f.interval, f.intervalCount)
        }) : o.status === R.SubscriptionStatusTypes.ACCOUNT_HOLD ? o.isPurchasedViaGoogle ? L.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_NO_PRICE.format({
            quantity: d,
            boostQuantity: d
        }) : p ? L.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD.format({
            quantity: d,
            boostQuantity: d,
            rate: (0, N.formatRate)(a, f.interval, f.intervalCount)
        }) : L.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_ACCOUNT_HOLD_TAX_EXCLUSIVE.format({
            quantity: d,
            boostQuantity: d,
            rate: (0, N.formatRate)(a, f.interval, f.intervalCount)
        }) : o.isPurchasedViaGoogle ? L.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_NO_PRICE.format({
            quantity: d
        }) : p ? L.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO.format({
            quantity: d,
            rate: (0, N.formatRate)(a, f.interval, f.intervalCount)
        }) : L.default.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_RENEWAL_INFO_TAX_EXCLUSIVE.format({
            quantity: d,
            rate: (0, N.formatRate)(a, f.interval, f.intervalCount)
        })
    }

    function em(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = null != t ? Y(e.id, !1, r, t) : x(e.id, !1, r),
            i = (0, N.formatPrice)(o.amount, o.currency);
        return e.currency !== D.CurrencyCodes.USD && !0 === n && (i = i.concat("*")), i
    }

    function ey(e, t, n) {
        var r = em(e, t, n);
        return (0, N.formatRate)(r, e.interval, e.intervalCount)
    }

    function eI(e) {
        var t = e.status,
            n = e.renewalMutations;
        return t === R.SubscriptionStatusTypes.CANCELED || null != n && (0, p.isNoneSubscription)(n.planId) && !e.isPurchasedExternally
    }

    function eh(e) {
        return e === R.SubscriptionStatusTypes.PAST_DUE || e === R.SubscriptionStatusTypes.ACCOUNT_HOLD || e === R.SubscriptionStatusTypes.BILLING_RETRY
    }

    function eO(e, t, n, r) {
        var o = null != t ? {
                paymentSourceId: t,
                currency: n
            } : {
                country: y.default.ipCountryCodeWithFallback,
                currency: n
            },
            i = h.default.get(e);
        if (null == i) {
            var a = Error("Unsupported plan");
            throw (0, T.captureBillingException)(a, {
                tags: {
                    planId: e
                }
            }), a
        }
        var u = h.default.getForSkuAndInterval(eG(P.PremiumSubscriptionSKUs.GUILD), i.interval, i.intervalCount);
        if (null == u) {
            var s = Error("Unsupported plan");
            throw (0, T.captureBillingException)(s, {
                tags: {
                    planId: e
                }
            }), s
        }
        return Y(u.id, (0, A.isPremium)(r), !1, o)
    }

    function eT(e, t, n) {
        var r = t.id;
        if (null != e) switch (r) {
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                return L.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_0;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return L.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_0;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                return L.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_1;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return L.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_1;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                return L.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_MONTH_TIER_2;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return L.default.Messages.PREMIUM_SWITCH_REVIEW_HEADER_PREMIUM_YEAR_TIER_2
        }
        switch (r) {
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                return n ? L.default.Messages.BILLING_SELECT_PLAN : L.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_0;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                return n ? L.default.Messages.BILLING_SELECT_PLAN : L.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_0;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                return n ? L.default.Messages.BILLING_SELECT_PLAN : L.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_1;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                return n ? L.default.Messages.BILLING_SELECT_PLAN : L.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_1;
            case P.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                return n ? L.default.Messages.BILLING_SELECT_PLAN : L.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
            case P.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                return n ? L.default.Messages.BILLING_SELECT_PLAN : L.default.Messages.BILLING_SELECT_PLAN_PREMIUM_YEAR_TIER_2;
            case P.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
            case P.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                return L.default.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTHS_TIER_2.format({
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
                return L.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
        }
        var o = Error("User is purchasing an unsupported plan");
        throw (0, T.captureBillingException)(o, {
            tags: {
                planId: r
            }
        }), o
    }

    function eS(e) {
        var t = e.invoiceItems[0].subscriptionPlanId,
            n = h.default.get(t);
        return l()(null != n, "Missing subscriptionPlan"), {
            intervalType: n.interval,
            intervalCount: n.intervalCount
        }
    }

    function ev(e) {
        var t = e.intervalType,
            n = void 0 === t ? P.SubscriptionIntervalTypes.MONTH : t,
            r = e.intervalCount,
            o = void 0 === r ? 1 : r,
            i = e.capitalize,
            a = void 0 !== i && i;
        switch (n) {
            case P.SubscriptionIntervalTypes.DAY:
                if (o >= 7 && o % 7 == 0) return a ? L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_WEEKS.format({
                    weeks: o / 7
                }) : L.default.Messages.PREMIUM_TRIAL_FREE_DURATION_WEEKS.format({
                    weeks: o / 7
                });
                return a ? L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_DAYS.format({
                    days: o
                }) : L.default.Messages.PREMIUM_TRIAL_FREE_DURATION_DAYS.format({
                    days: o
                });
            case P.SubscriptionIntervalTypes.MONTH:
                return a ? L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_MONTHS.format({
                    months: o
                }) : L.default.Messages.PREMIUM_TRIAL_FREE_DURATION_MONTHS.format({
                    months: o
                });
            case P.SubscriptionIntervalTypes.YEAR:
                return a ? L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_HEADING_YEARS.format({
                    years: o
                }) : L.default.Messages.PREMIUM_TRIAL_FREE_DURATION_YEARS.format({
                    years: o
                });
            default:
                throw Error("Unsupported interval duration.")
        }
    }

    function eg(e) {
        var t = e.intervalType,
            n = void 0 === t ? P.SubscriptionIntervalTypes.MONTH : t,
            r = e.intervalCount,
            o = void 0 === r ? 1 : r;
        switch (n) {
            case P.SubscriptionIntervalTypes.DAY:
                if (o >= 7 && o % 7 == 0) return L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_WEEKS.format({
                    weeks: o / 7
                });
                return L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_DAYS.format({
                    days: o
                });
            case P.SubscriptionIntervalTypes.MONTH:
                return L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_MONTHS.format({
                    months: o
                });
            case P.SubscriptionIntervalTypes.YEAR:
                return L.default.Messages.PREMIUM_TRIAL_MARKETING_TRIAL_CTA_YEARS.format({
                    years: o
                });
            default:
                throw Error("Unsupported interval duration.")
        }
    }

    function eA(e) {
        var t = e.intervalType,
            n = void 0 === t ? P.SubscriptionIntervalTypes.MONTH : t,
            r = e.intervalCount,
            o = void 0 === r ? 1 : r,
            i = e.capitalize,
            a = void 0 !== i && i;
        switch (n) {
            case P.SubscriptionIntervalTypes.DAY:
                if (o >= 7 && o % 7 == 0) return a ? L.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
                    weeks: o / 7
                }) : L.default.Messages.DURATION_WEEKS.format({
                    weeks: o / 7
                });
                return a ? L.default.Messages.DURATION_DAYS_CAPITALIZE.format({
                    days: o
                }) : L.default.Messages.DURATION_DAYS.format({
                    days: o
                });
            case P.SubscriptionIntervalTypes.MONTH:
                return a ? L.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
                    months: o
                }) : L.default.Messages.DURATION_MONTHS.format({
                    months: o
                });
            case P.SubscriptionIntervalTypes.YEAR:
                return a ? L.default.Messages.DURATION_YEARS_CAPITALIZE.format({
                    years: o
                }) : L.default.Messages.DURATION_YEARS.format({
                    years: o
                });
            default:
                throw Error("Unsupported interval duration.")
        }
    }

    function eb(e, t) {
        switch (e) {
            case R.PaymentGateways.APPLE_PARTNER:
            case R.PaymentGateways.APPLE:
                return B[t];
            case R.PaymentGateways.GOOGLE:
                return j[t]
        }
        throw Error("Invalid external payment gateway ".concat(e))
    }

    function eN(e, t) {
        return (0, A.isPremium)(e) || eh(null == t ? void 0 : t.status)
    }

    function eR(e, t) {
        var n, r, o = [],
            i = (null !== (r = null === (n = e.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== r ? r : e.items).find(function(e) {
                return P.PREMIUM_PLANS.has(e.planId)
            });
        return null != i && o.push(i), o.push.apply(o, G(t)), o.map(function(t) {
            var n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = e.items[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    if (t.planId === u.planId) return w({}, u, t)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
            return t
        })
    }

    function eC(e) {
        return e.filter(function(e) {
            return !P.PREMIUM_PLANS.has(e.planId)
        })
    }

    function eP(e, t, n, r) {
        l()(r.has(t), "Expected planId in group");
        var o, i, a = !1,
            u = (null !== (i = null === (o = e.renewalMutations) || void 0 === o ? void 0 : o.items) && void 0 !== i ? i : e.items).map(function(e) {
                return r.has(e.planId) ? (a = !0, k(w({}, e), {
                    quantity: n,
                    planId: t
                })) : e
            });
        if (!a) {
            var s = {
                    planId: t,
                    quantity: n
                },
                c = e.items.find(function(e) {
                    return e.planId === t
                });
            null != c && (s.id = c.id), u.push(s)
        }
        return u.filter(function(e) {
            return 0 !== e.quantity
        })
    }

    function eD(e, t) {
        return eP(e, t, 1, P.PREMIUM_PLANS)
    }

    function eL(e, t, n) {
        return eP(e, n, t, P.PREMIUM_GUILD_SUBSCRIPTION_PLANS)
    }

    function eM(e) {
        var t, n = null !== (t = e.find(function(e) {
            return !("id" in e)
        })) && void 0 !== t ? t : e.find(function(e) {
            return P.PREMIUM_PLANS.has(e.planId)
        });
        if (null != n) {
            var r = h.default.get(n.planId);
            l()(null != r, "Missing plan"), e = e.map(function(e) {
                if (e === n) return e;
                var t = h.default.get(e.planId);
                l()(null != t, "Missing plan");
                var o = h.default.getForSkuAndInterval(t.skuId, r.interval, r.intervalCount);
                return l()(null != o, "Missing planForInterval"), k(w({}, e), {
                    planId: o.id
                })
            })
        }
        return e
    }

    function eU(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                useSpace: !0
            },
            n = P.PremiumUserLimits[e].fileSize;
        return (0, S.formatSize)(n / 1024, {
            useKibibytes: !0,
            useSpace: t.useSpace
        })
    }

    function ew(e) {
        return null == e ? null : e.items.find(function(e) {
            return P.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(e.planId)
        })
    }

    function ek(e) {
        var t = null != e ? H(e) : null;
        return null != t ? ei(t.planId) : null
    }

    function eG(e) {
        return e
    }
    t.default = Object.freeze({
        isNewUser: function(e) {
            return null != e && Date.now() - e.createdAt.getTime() < 2592e6
        },
        isPremiumAtLeast: A.isPremiumAtLeast,
        isPremium: A.isPremium,
        isPremiumExactly: A.isPremiumExactly,
        getPrice: Y,
        getDefaultPrice: x,
        getInterval: function(e) {
            var t = P.SubscriptionPlanInfo[e];
            if (null != t) return {
                intervalType: t.interval,
                intervalCount: t.intervalCount
            };
            var n = Error("Unsupported plan");
            throw (0, T.captureBillingException)(n, {
                tags: {
                    planId: e
                }
            }), n
        },
        getIntervalString: z,
        getIntervalStringAsNoun: X,
        getPremiumType: q,
        getDisplayName: Q,
        getDisplayPremiumType: $,
        getPremiumPlanOptions: eo,
        getUpgradeEligibilities: ea,
        getPlanDescription: et,
        isPremiumSku: function(e) {
            return e === P.PremiumSubscriptionSKUs.TIER_0 || e === P.PremiumSubscriptionSKUs.TIER_1 || e === P.PremiumSubscriptionSKUs.TIER_2
        },
        getClosestUpgrade: function(e) {
            var t = P.SubscriptionPlanInfo[e];
            if (null == t) throw Error("Unrecognized plan.");
            var n = t.interval,
                r = ea(e),
                o = !0,
                i = !1,
                a = void 0;
            try {
                for (var u, s = Object.keys(P.SubscriptionPlanInfo)[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                    var l = u.value,
                        c = P.SubscriptionPlanInfo[l].interval;
                    if (n === c && r.includes(l)) return l
                }
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    !o && null != s.return && s.return()
                } finally {
                    if (i) throw a
                }
            }
            return null
        },
        getIntervalMonths: function(e, t) {
            if (e === P.SubscriptionIntervalTypes.MONTH) return t;
            if (e === P.SubscriptionIntervalTypes.YEAR) return 12 * t;
            throw Error("".concat(e, " interval subscription period not implemented"))
        },
        getUserMaxFileSize: g.getUserMaxFileSize,
        getSkuIdForPlan: ei,
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
            if (q(e) === P.PremiumTypes.TIER_2) return P.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
            return 0
        },
        getBillingInformationString: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = n ? (0, N.formatPrice)(t.invoiceItems.filter(function(e) {
                    return P.PREMIUM_TIER_2_PLANS.has(e.subscriptionPlanId)
                }).map(function(e) {
                    return e.amount
                }).reduce(function(e, t) {
                    return t + e
                }, 0), t.currency) : (0, N.formatPrice)(t.total, t.currency);
            if (e.status === R.SubscriptionStatusTypes.CANCELED) return L.default.Messages.PREMIUM_SETTINGS_CANCELLED_INFO.format({
                endDate: t.subscriptionPeriodStart
            });
            if (e.status === R.SubscriptionStatusTypes.PAUSE_PENDING) return L.default.Messages.PREMIUM_SETTINGS_PAUSE_PENDING_INFO.format({
                pauseDate: e.currentPeriodEnd,
                resumeDate: e.pauseEndsAt
            });
            if (e.status === R.SubscriptionStatusTypes.PAUSED) return null == e.pauseEndsAt ? n ? L.default.Messages.PREMIUM_SETTINGS_PAUSED_INFO_WITH_PLAN.format({
                planName: L.default.Messages.PREMIUM,
                price: r
            }) : L.default.Messages.PREMIUM_SETTINGS_PAUSED_INFO : n ? L.default.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO_WITH_PLAN.format({
                planName: L.default.Messages.PREMIUM,
                resumeDate: e.pauseEndsAt,
                price: r
            }) : L.default.Messages.PREMIUM_SETTINGS_PAUSE_ENDS_AT_INFO.format({
                resumeDate: e.pauseEndsAt
            });
            else if (e.status === R.SubscriptionStatusTypes.PAST_DUE) {
                var o, i, a = ed(e).expiresDate;
                return (e.isPurchasedViaGoogle && (null === (o = e.metadata) || void 0 === o ? void 0 : o.google_grace_period_expires_date) != null && (a = f()(e.metadata.google_grace_period_expires_date)), e.isPurchasedViaApple && (null === (i = e.metadata) || void 0 === i ? void 0 : i.apple_grace_period_expires_date) != null && (a = f()(e.metadata.apple_grace_period_expires_date)), e.isPurchasedExternally) ? L.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO_EXTERNAL.format({
                    endDate: a,
                    paymentGatewayName: D.PaymentGatewayToFriendlyName[e.paymentGateway],
                    paymentSourceLink: eb(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
                }) : L.default.Messages.PREMIUM_SETTINGS_PAST_DUE_INFO.format({
                    endDate: a,
                    price: r
                })
            } else return e.status === R.SubscriptionStatusTypes.ACCOUNT_HOLD ? e.isPurchasedViaGoogle && !(0, v.isAndroid)() ? L.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_EXTERNAL.format({
                endDate: f()(e.currentPeriodStart).add(P.MAX_ACCOUNT_HOLD_DAYS, "days"),
                paymentGatewayName: D.PaymentGatewayToFriendlyName[e.paymentGateway],
                paymentSourceLink: eb(e.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT")
            }) : L.default.Messages.PREMIUM_SETTINGS_ACCOUNT_HOLD_INFO_PRICE.format({
                endDate: f()(e.currentPeriodStart).add(P.MAX_ACCOUNT_HOLD_DAYS, "days"),
                price: r
            }) : function(e) {
                return null != e.paymentSourceId && e_(e.paymentSourceId)
            }(e) ? L.default.Messages.PREMIUM_SETTINGS_PREPAID_THROUGH_DATE.format({
                prepaidEndDate: e.currentPeriodEnd
            }) : e.status === R.SubscriptionStatusTypes.UNPAID ? L.default.Messages.PREMIUM_SETTINGS_PAYMENT_PROCESSING.format({
                maxProcessingTimeInDays: P.MAX_PAYMENT_PROCESSING_TIME_DAYS
            }) : e.isPurchasedExternally ? L.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_EXTERNAL.format({
                renewalDate: t.subscriptionPeriodStart,
                paymentGatewayName: D.PaymentGatewayToFriendlyName[e.paymentGateway],
                subscriptionManagementLink: eb(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
            }) : n ? L.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO_WITH_PLAN.format({
                planName: L.default.Messages.PREMIUM,
                renewalDate: t.subscriptionPeriodStart,
                price: r
            }) : L.default.Messages.PREMIUM_SETTINGS_RENEWAL_INFO.format({
                renewalDate: t.subscriptionPeriodStart,
                price: r
            })
        },
        isNoneSubscription: p.isNoneSubscription,
        getPlanIdFromInvoice: function(e, t) {
            var n = e.planId;
            if (e.status === R.SubscriptionStatusTypes.CANCELED || e.status === R.SubscriptionStatusTypes.PAUSE_PENDING) return n;
            l()(null != t, "Expected invoicePreview");
            var r = t.invoiceItems.find(function(e) {
                return el(e.subscriptionPlanId)
            });
            return n = null == r || (0, p.isNoneSubscription)(r.subscriptionPlanId) ? e.planId : null != e.renewalMutations && e.renewalMutations.planId !== e.planId ? e.planId : r.subscriptionPlanId
        },
        getStatusFromInvoice: function(e, t) {
            var n = e.status;
            if (e.status === R.SubscriptionStatusTypes.CANCELED || e.status === R.SubscriptionStatusTypes.PAUSE_PENDING) return n;
            l()(null != t, "Expected invoicePreview");
            var r = t.invoiceItems.find(function(e) {
                return el(e.subscriptionPlanId)
            });
            return (null == r || (0, p.isNoneSubscription)(r.subscriptionPlanId)) && (n = R.SubscriptionStatusTypes.CANCELED), n
        },
        isBaseSubscriptionCanceled: eI,
        getPremiumGuildIntervalPrice: eO,
        hasAccountCredit: function(e) {
            return null != e && 0 !== e.size && Array.from(e).some(function(e) {
                var t = e.subscriptionPlanId,
                    n = e.parentId,
                    r = e.consumed;
                return null != t && null != n && !r
            })
        },
        getBillingReviewSubheader: eT,
        getIntervalForInvoice: eS,
        getPremiumPlanItem: H,
        getGuildBoostPlanItem: ew,
        isBoostOnlySubscription: function(e) {
            return null != e && null == H(e) && null != ew(e)
        },
        getPremiumSkuIdForSubscription: ek,
        getPremiumTypeFromSubscription: function(e) {
            if (null != e) {
                var t = H(e);
                if (null != t) return q(t.planId)
            }
        },
        getPremiumTypeFromSubscriptionRenewalMutations: function(e) {
            if (null != e && null != e.renewalMutations) {
                var t = H(e.renewalMutations);
                if (null != t) return q(t.planId)
            }
        },
        getPremiumGradientColor: function(e) {
            switch (e) {
                case P.PremiumTypes.TIER_0:
                    return C.Gradients.PREMIUM_TIER_0;
                case P.PremiumTypes.TIER_1:
                    return C.Gradients.PREMIUM_TIER_1;
                case P.PremiumTypes.TIER_2:
                    return C.Gradients.PREMIUM_TIER_2
            }
        },
        castPremiumSubscriptionAsSkuId: eG,
        canUseAnimatedEmojis: function(e) {
            return (0, _.canUserUse)(_.ANIMATED_EMOJIS, e)
        },
        canUseEmojisEverywhere: function(e) {
            return (0, _.canUserUse)(_.EMOJIS_EVERYWHERE, e)
        },
        canUseSoundboardEverywhere: function(e) {
            return (0, _.canUserUse)(_.SOUNDBOARD_EVERYWHERE, e)
        },
        canUseCustomCallSounds: function(e) {
            return (0, _.canUserUse)(_.CUSTOM_CALL_SOUNDS, e)
        },
        canUploadLargeFiles: function(e) {
            return (0, _.canUserUse)(_.UPLOAD_LARGE_FILES, e)
        },
        canUseBadges: function(e) {
            return (0, _.canUserUse)(_.PROFILE_BADGES, e)
        },
        canUseHighVideoUploadQuality: function(e) {
            return (0, _.canUserUse)(_.INCREASED_VIDEO_UPLOAD_QUALITY, e)
        },
        canEditDiscriminator: function(e) {
            return (0, _.canUserUse)(_.CUSTOM_DISCRIMINATOR, e)
        },
        hasBoostDiscount: function(e) {
            return (0, _.canUserUse)(_.BOOST_DISCOUNT, e)
        },
        canUseAnimatedAvatar: function(e) {
            return (0, _.canUserUse)(_.ANIMATED_AVATAR, e)
        },
        canUseFancyVoiceChannelReactions: function(e) {
            return (0, _.canUserUse)(_.FANCY_VOICE_CHANNEL_REACTIONS, e)
        },
        canInstallPremiumApplications: function(e) {
            return (0, _.canUserUse)(_.INSTALL_PREMIUM_APPLICATIONS, e)
        },
        canUseIncreasedMessageLength: function(e) {
            return (0, _.canUserUse)(_.INCREASED_MESSAGE_LENGTH, e)
        },
        canUseIncreasedGuildCap: function(e) {
            return (0, _.canUserUse)(_.INCREASED_GUILD_LIMIT, e)
        },
        canRedeemPremiumPerks: function(e) {
            return (0, _.canUserUse)(_.REDEEM_PREMIUM_PERKS, e)
        },
        canUsePremiumProfileCustomization: function(e) {
            return (0, _.canUserUse)(_.PROFILE_PREMIUM_FEATURES, e)
        },
        canUsePremiumAppIcons: function(e) {
            return (0, _.canUserUse)(_.APP_ICONS, e)
        },
        canUsePremiumGuildMemberProfile: function(e) {
            return (0, _.canUserUse)(_.PREMIUM_GUILD_MEMBER_PROFILE, e)
        },
        canUseClientThemes: function(e) {
            return (0, _.canUserUse)(_.CLIENT_THEMES, e)
        },
        canStreamQuality: function(e, t) {
            return "high" === e ? (0, _.canUserUse)(_.STREAM_HIGH_QUALITY, t) : "mid" === e && (0, _.canUserUse)(_.STREAM_MID_QUALITY, t)
        },
        hasFreeBoosts: function(e) {
            return (0, _.canUserUse)(_.FREE_BOOSTS, e)
        },
        canUseCustomStickersEverywhere: function(e) {
            return (0, _.canUserUse)(_.STICKERS_EVERYWHERE, e)
        },
        canUseCustomBackgrounds: function(e) {
            return (0, _.canUserUse)(_.VIDEO_FILTER_ASSETS, e)
        },
        canUseCollectibles: function(e) {
            return (0, _.canUserUse)(_.COLLECTIBLES, e)
        },
        formatPriceString: function(e, t) {
            var n = (0, N.formatPrice)(e.amount, e.currency),
                r = X(t);
            return "".concat(n, "/").concat(r)
        },
        StreamQuality: u
    })
}