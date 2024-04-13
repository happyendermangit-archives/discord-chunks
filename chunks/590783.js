function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return c
        }
    }), i("789020");
    var s = i("913527"),
        n = i.n(s),
        l = i("81825"),
        r = i("630388"),
        a = i("301766"),
        o = i("474936");

    function d(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    let u = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4
    });
    class c extends l.default {
        static createFromServer(e) {
            return new c({
                userId: null != e.user ? e.user.id : null,
                code: e.code,
                skuId: e.sku_id,
                applicationId: e.application_id,
                uses: e.uses,
                maxUses: e.max_uses,
                storeListingId: null != e.store_listing ? e.store_listing.id : null,
                expiresAt: null != e.expires_at ? n()(e.expires_at) : null,
                redeemed: e.redeemed,
                subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : e.subscription_plan_id,
                subscriptionPlan: null != e.subscription_plan ? a.default.createFromServer(e.subscription_plan) : null,
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
        isExpired() {
            let e = this.expiresAt;
            return null != e && n()().isAfter(e)
        }
        get hasMultipleCopies() {
            return this.maxUses > 1
        }
        get isClaimed() {
            return this.uses >= this.maxUses
        }
        get remainingUses() {
            return this.maxUses - this.uses
        }
        get isSubscription() {
            return null != this.subscriptionPlanId
        }
        get premiumSubscriptionType() {
            return this.isSubscription && o.PremiumSubscriptionSKUToPremiumType[this.skuId] || null
        }
        get isSelfRedeemable() {
            return !(0, r.hasFlag)(this.flags, u.NOT_SELF_REDEEMABLE)
        }
        get isExistingPremiumSubscriptionDisallowed() {
            return (0, r.hasFlag)(this.flags, u.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
        }
        get analyticsData() {
            return {
                gift_code: this.code,
                gift_code_max_uses: this.maxUses
            }
        }
        toString() {
            return this.code
        }
        constructor(e) {
            super(), d(this, "userId", void 0), d(this, "code", void 0), d(this, "skuId", void 0), d(this, "applicationId", void 0), d(this, "uses", void 0), d(this, "maxUses", void 0), d(this, "expiresAt", void 0), d(this, "redeemed", void 0), d(this, "storeListingId", void 0), d(this, "subscriptionPlanId", void 0), d(this, "subscriptionPlan", void 0), d(this, "revoked", void 0), d(this, "entitlementBranches", void 0), d(this, "flags", void 0), d(this, "subscriptionTrial", void 0), d(this, "promotion", void 0), d(this, "giftStyle", void 0), this.userId = e.userId, this.code = e.code, this.skuId = e.skuId, this.applicationId = e.applicationId, this.uses = e.uses, this.maxUses = e.maxUses, this.expiresAt = e.expiresAt, this.redeemed = e.redeemed, this.storeListingId = e.storeListingId, this.subscriptionPlanId = e.subscriptionPlanId, this.subscriptionPlan = e.subscriptionPlan, this.revoked = e.revoked, this.entitlementBranches = e.entitlementBranches, this.flags = e.flags, this.subscriptionTrial = e.subscriptionTrial, this.promotion = e.promotion, this.giftStyle = e.giftStyle
        }
    }
}