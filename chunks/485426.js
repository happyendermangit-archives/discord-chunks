function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        isPremiumTier2Entitlement: function() {
            return i
        },
        isValidTenureRewardEntitlement: function() {
            return I
        },
        getPremiumTier2Entitlement: function() {
            return s
        },
        getTenureRewardEntitlement: function() {
            return T
        },
        isUserTenureRewardStatusActive: function() {
            return S
        },
        getTenureRewardBadgeDescription: function() {
            return N
        }
    }), E("437712");
    var t = E("552712"),
        o = E("646718"),
        n = E("511143"),
        r = E("49111"),
        a = E("782340");

    function i(e) {
        return e.type === r.EntitlementTypes.PURCHASE && e.skuId === o.PremiumSubscriptionSKUs.TIER_2 && e.applicationId === o.PREMIUM_SUBSCRIPTION_APPLICATION && e.isValid(null, t.default)
    }

    function I(e) {
        return e.type === r.EntitlementTypes.PREMIUM_PURCHASE && n.ALL_TENURE_REWARD_SKUS.has(e.skuId) && e.applicationId === o.PREMIUM_SUBSCRIPTION_APPLICATION && e.isValid(null, t.default)
    }

    function s(e) {
        if (null == e) return;
        let _ = Array.from(e).find(e => i(e));
        return _
    }

    function T(e, _) {
        if (null == _) return;
        let E = Array.from(_).find(_ => _.type === r.EntitlementTypes.PREMIUM_PURCHASE && e.includes(_.skuId) && _.applicationId === o.PREMIUM_SUBSCRIPTION_APPLICATION && _.isValid(null, t.default));
        return E
    }

    function S(e) {
        return null != e.redeemable_at && null != e.next_tenure_reward_id
    }

    function N(e) {
        switch (e) {
            case n.NitroRewardStatus.PENDING:
                return a.default.Messages.REWARD;
            case n.NitroRewardStatus.REDEEMABLE:
                return a.default.Messages.REDEEM;
            case n.NitroRewardStatus.REDEEMED:
            default:
                return null
        }
    }
}