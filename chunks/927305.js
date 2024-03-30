function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("913527"),
        o = n.n(r),
        i = n("864842"),
        a = n("947248"),
        u = n("590515"),
        l = n("868615");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = Object.freeze({
            PAYMENT_SOURCE_REQUIRED: 1,
            EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
            NOT_SELF_REDEEMABLE: 4
        }),
        _ = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t)
            }(y, e);
            var t, n, r, i, _, m = (t = y, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = d(t);
                if (n) {
                    var a = d(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : s(e)
            });

            function y(e) {
                var t;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, y), f(s(t = m.call(this)), "userId", void 0), f(s(t), "code", void 0), f(s(t), "skuId", void 0), f(s(t), "applicationId", void 0), f(s(t), "uses", void 0), f(s(t), "maxUses", void 0), f(s(t), "expiresAt", void 0), f(s(t), "redeemed", void 0), f(s(t), "storeListingId", void 0), f(s(t), "subscriptionPlanId", void 0), f(s(t), "subscriptionPlan", void 0), f(s(t), "revoked", void 0), f(s(t), "entitlementBranches", void 0), f(s(t), "flags", void 0), f(s(t), "subscriptionTrial", void 0), f(s(t), "promotion", void 0), f(s(t), "giftStyle", void 0), t.userId = e.userId, t.code = e.code, t.skuId = e.skuId, t.applicationId = e.applicationId, t.uses = e.uses, t.maxUses = e.maxUses, t.expiresAt = e.expiresAt, t.redeemed = e.redeemed, t.storeListingId = e.storeListingId, t.subscriptionPlanId = e.subscriptionPlanId, t.subscriptionPlan = e.subscriptionPlan, t.revoked = e.revoked, t.entitlementBranches = e.entitlementBranches, t.flags = e.flags, t.subscriptionTrial = e.subscriptionTrial, t.promotion = e.promotion, t.giftStyle = e.giftStyle, t
            }
            return r = y, i = [{
                key: "isExpired",
                value: function() {
                    var e = this.expiresAt;
                    return null != e && o()().isAfter(e)
                }
            }, {
                key: "hasMultipleCopies",
                get: function() {
                    return this.maxUses > 1
                }
            }, {
                key: "isClaimed",
                get: function() {
                    return this.uses >= this.maxUses
                }
            }, {
                key: "remainingUses",
                get: function() {
                    return this.maxUses - this.uses
                }
            }, {
                key: "isSubscription",
                get: function() {
                    return null != this.subscriptionPlanId
                }
            }, {
                key: "premiumSubscriptionType",
                get: function() {
                    return this.isSubscription && l.PremiumSubscriptionSKUToPremiumType[this.skuId] || null
                }
            }, {
                key: "isSelfRedeemable",
                get: function() {
                    return !(0, a.hasFlag)(this.flags, E.NOT_SELF_REDEEMABLE)
                }
            }, {
                key: "isExistingPremiumSubscriptionDisallowed",
                get: function() {
                    return (0, a.hasFlag)(this.flags, E.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
                }
            }, {
                key: "analyticsData",
                get: function() {
                    return {
                        gift_code: this.code,
                        gift_code_max_uses: this.maxUses
                    }
                }
            }, {
                key: "toString",
                value: function() {
                    return this.code
                }
            }], _ = [{
                key: "createFromServer",
                value: function(e) {
                    return new y({
                        userId: null != e.user ? e.user.id : null,
                        code: e.code,
                        skuId: e.sku_id,
                        applicationId: e.application_id,
                        uses: e.uses,
                        maxUses: e.max_uses,
                        storeListingId: null != e.store_listing ? e.store_listing.id : null,
                        expiresAt: null != e.expires_at ? o()(e.expires_at) : null,
                        redeemed: e.redeemed,
                        subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : e.subscription_plan_id,
                        subscriptionPlan: null != e.subscription_plan ? u.default.createFromServer(e.subscription_plan) : null,
                        revoked: !1,
                        entitlementBranches: null != e.entitlement_branches ? e.entitlement_branches : null,
                        flags: null != e.flags ? e.flags : 0,
                        giftStyle: e.gift_style,
                        subscriptionTrial: null != e.subscription_trial ? {
                            id: e.subscription_trial.id,
                            interval: e.subscription_trial.interval,
                            intervalCount: e.subscription_trial.interval_count,
                            skuId: e.subscription_trial.sku_id
                        } : null,
                        promotion: null != e.promotion ? {
                            id: e.promotion.id,
                            startDate: e.promotion.start_date,
                            endDate: e.promotion.end_date,
                            inboundHeaderText: e.promotion.inbound_header_text,
                            inboundBodyText: e.promotion.inbound_body_text,
                            inboundHelpCenterLink: e.promotion.inbound_help_center_link
                        } : null
                    })
                }
            }], i && c(r.prototype, i), _ && c(r, _), y
        }(i.default)
}