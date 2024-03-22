function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getApplicationSubscriptionPlanId: function() {
            return a
        },
        hasPayableSubscriptionPlan: function() {
            return o
        },
        getPayableSubscriptionListing: function() {
            return s
        },
        isApplicationGuildSubscription: function() {
            return c
        },
        isApplicationUserSubscription: function() {
            return S
        },
        isListingActiveInGuild: function() {
            return d
        }
    });
    var i = n("627445"),
        r = n.n(i),
        u = n("568734"),
        l = n("49111");

    function a(t) {
        let e = t.items;
        return r(1 === e.length, "more than 1 subscription item for application subscription"), e[0].planId
    }

    function o(t) {
        return null != s(t)
    }

    function s(t) {
        var e;
        return null === (e = t.subscription_listings) || void 0 === e ? void 0 : e.find(t => t.published && (c(t.sku_flags) || S(t.sku_flags)) && t.subscription_plans[0].price > 0)
    }

    function c(t) {
        return (0, u.hasFlag)(t, l.SKUFlags.APPLICATION_GUILD_SUBSCRIPTION)
    }

    function S(t) {
        return (0, u.hasFlag)(t, l.SKUFlags.APPLICATION_USER_SUBSCRIPTION)
    }

    function d(t, e, n) {
        return t.subscription_plans[0].sku_id === e.skuId && (c(t.sku_flags) ? null != n && e.guildId === n && n !== l.ME : !!S(t.sku_flags) && null == e.guildId)
    }
}