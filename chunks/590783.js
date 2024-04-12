function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return c
        }
    }), n("789020");
    var i = n("913527"),
        r = n.n(i),
        s = n("81825"),
        u = n("630388"),
        a = n("301766"),
        l = n("474936");

    function o(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    let d = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4
    });
    class c extends s.default {
        static createFromServer(t) {
            return new c({
                userId: null != t.user ? t.user.id : null,
                code: t.code,
                skuId: t.sku_id,
                applicationId: t.application_id,
                uses: t.uses,
                maxUses: t.max_uses,
                storeListingId: null != t.store_listing ? t.store_listing.id : null,
                expiresAt: null != t.expires_at ? r()(t.expires_at) : null,
                redeemed: t.redeemed,
                subscriptionPlanId: null != t.subscription_plan ? t.subscription_plan.id : t.subscription_plan_id,
                subscriptionPlan: null != t.subscription_plan ? a.default.createFromServer(t.subscription_plan) : null,
                revoked: !1,
                entitlementBranches: null != t.entitlement_branches ? t.entitlement_branches : null,
                flags: null != t.flags ? t.flags : 0,
                giftStyle: t.gift_style,
                subscriptionTrial: null != t.subscription_trial ? {
                    id: t.subscription_trial.id,
                    interval: t.subscription_trial.interval,
                    intervalCount: t.subscription_trial.interval_count,
                    skuId: t.subscription_trial.sku_id
                } : null,
                promotion: null != t.promotion ? {
                    id: t.promotion.id,
                    startDate: t.promotion.start_date,
                    endDate: t.promotion.end_date,
                    inboundHeaderText: t.promotion.inbound_header_text,
                    inboundBodyText: t.promotion.inbound_body_text,
                    inboundHelpCenterLink: t.promotion.inbound_help_center_link
                } : null
            })
        }
        isExpired() {
            let t = this.expiresAt;
            return null != t && r()().isAfter(t)
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
            return this.isSubscription && l.PremiumSubscriptionSKUToPremiumType[this.skuId] || null
        }
        get isSelfRedeemable() {
            return !(0, u.hasFlag)(this.flags, d.NOT_SELF_REDEEMABLE)
        }
        get isExistingPremiumSubscriptionDisallowed() {
            return (0, u.hasFlag)(this.flags, d.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
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
        constructor(t) {
            super(), o(this, "userId", void 0), o(this, "code", void 0), o(this, "skuId", void 0), o(this, "applicationId", void 0), o(this, "uses", void 0), o(this, "maxUses", void 0), o(this, "expiresAt", void 0), o(this, "redeemed", void 0), o(this, "storeListingId", void 0), o(this, "subscriptionPlanId", void 0), o(this, "subscriptionPlan", void 0), o(this, "revoked", void 0), o(this, "entitlementBranches", void 0), o(this, "flags", void 0), o(this, "subscriptionTrial", void 0), o(this, "promotion", void 0), o(this, "giftStyle", void 0), this.userId = t.userId, this.code = t.code, this.skuId = t.skuId, this.applicationId = t.applicationId, this.uses = t.uses, this.maxUses = t.maxUses, this.expiresAt = t.expiresAt, this.redeemed = t.redeemed, this.storeListingId = t.storeListingId, this.subscriptionPlanId = t.subscriptionPlanId, this.subscriptionPlan = t.subscriptionPlan, this.revoked = t.revoked, this.entitlementBranches = t.entitlementBranches, this.flags = t.flags, this.subscriptionTrial = t.subscriptionTrial, this.promotion = t.promotion, this.giftStyle = t.giftStyle
        }
    }
}