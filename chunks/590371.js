function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPremiumTier2Entitlement: function() {
            return c
        },
        getTenureRewardBadgeDescription: function() {
            return _
        },
        getTenureRewardEntitlement: function() {
            return f
        },
        isPremiumTier2Entitlement: function() {
            return s
        },
        isUserTenureRewardStatusActive: function() {
            return d
        },
        isValidTenureRewardEntitlement: function() {
            return l
        }
    }), n("756658");
    var r = n("332716"),
        o = n("868615"),
        i = n("784166"),
        a = n("281767"),
        u = n("941504");

    function s(e) {
        return e.type === a.EntitlementTypes.PURCHASE && e.skuId === o.PremiumSubscriptionSKUs.TIER_2 && e.applicationId === o.PREMIUM_SUBSCRIPTION_APPLICATION && e.isValid(null, r.default)
    }

    function l(e) {
        return e.type === a.EntitlementTypes.PREMIUM_PURCHASE && i.ALL_TENURE_REWARD_SKUS.has(e.skuId) && e.applicationId === o.PREMIUM_SUBSCRIPTION_APPLICATION && e.isValid(null, r.default)
    }

    function c(e) {
        if (null != e) return Array.from(e).find(function(e) {
            return s(e)
        })
    }

    function f(e, t) {
        if (null != t) return Array.from(t).find(function(t) {
            return t.type === a.EntitlementTypes.PREMIUM_PURCHASE && e.includes(t.skuId) && t.applicationId === o.PREMIUM_SUBSCRIPTION_APPLICATION && t.isValid(null, r.default)
        })
    }

    function d(e) {
        return null != e.redeemable_at && null != e.next_tenure_reward_id
    }

    function _(e) {
        switch (e) {
            case i.NitroRewardStatus.PENDING:
                return u.default.Messages.REWARD;
            case i.NitroRewardStatus.REDEEMABLE:
                return u.default.Messages.REDEEM;
            case i.NitroRewardStatus.REDEEMED:
            default:
                return null
        }
    }
}