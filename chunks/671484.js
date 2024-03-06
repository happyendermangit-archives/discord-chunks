function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("702976");
    var i, l = n("866227"),
        s = n.n(l),
        r = n("666038"),
        a = n("568734"),
        u = n("797647"),
        d = n("646718");
    let o = Object.freeze({
        PAYMENT_SOURCE_REQUIRED: 1,
        EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
        NOT_SELF_REDEEMABLE: 4
    });
    i = class e extends r.default {
        static createFromServer(t) {
            return new e({
                userId: null != t.user ? t.user.id : null,
                code: t.code,
                skuId: t.sku_id,
                applicationId: t.application_id,
                uses: t.uses,
                maxUses: t.max_uses,
                storeListingId: null != t.store_listing ? t.store_listing.id : null,
                expiresAt: null != t.expires_at ? s(t.expires_at) : null,
                redeemed: t.redeemed,
                subscriptionPlanId: null != t.subscription_plan ? t.subscription_plan.id : t.subscription_plan_id,
                subscriptionPlan: null != t.subscription_plan ? u.default.createFromServer(t.subscription_plan) : null,
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
            let e = this.expiresAt;
            return null != e && s().isAfter(e)
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
            return this.isSubscription && d.PremiumSubscriptionSKUToPremiumType[this.skuId] || null
        }
        get isSelfRedeemable() {
            return !(0, a.hasFlag)(this.flags, o.NOT_SELF_REDEEMABLE)
        }
        get isExistingPremiumSubscriptionDisallowed() {
            return (0, a.hasFlag)(this.flags, o.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
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
            super(), this.userId = e.userId, this.code = e.code, this.skuId = e.skuId, this.applicationId = e.applicationId, this.uses = e.uses, this.maxUses = e.maxUses, this.expiresAt = e.expiresAt, this.redeemed = e.redeemed, this.storeListingId = e.storeListingId, this.subscriptionPlanId = e.subscriptionPlanId, this.subscriptionPlan = e.subscriptionPlan, this.revoked = e.revoked, this.entitlementBranches = e.entitlementBranches, this.flags = e.flags, this.subscriptionTrial = e.subscriptionTrial, this.promotion = e.promotion, this.giftStyle = e.giftStyle
        }
    }
}