function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getApplicationSubscriptionPlanId: function() {
            return u
        },
        getPayableSubscriptionListing: function() {
            return l
        },
        hasPayableSubscriptionPlan: function() {
            return s
        },
        isApplicationGuildSubscription: function() {
            return c
        },
        isApplicationUserSubscription: function() {
            return f
        },
        isListingActiveInGuild: function() {
            return d
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("947248"),
        a = n("281767");

    function u(e) {
        var t = e.items;
        return o()(1 === t.length, "more than 1 subscription item for application subscription"), t[0].planId
    }

    function s(e) {
        return null != l(e)
    }

    function l(e) {
        var t;
        return null === (t = e.subscription_listings) || void 0 === t ? void 0 : t.find(function(e) {
            return e.published && (c(e.sku_flags) || f(e.sku_flags)) && e.subscription_plans[0].price > 0
        })
    }

    function c(e) {
        return (0, i.hasFlag)(e, a.SKUFlags.APPLICATION_GUILD_SUBSCRIPTION)
    }

    function f(e) {
        return (0, i.hasFlag)(e, a.SKUFlags.APPLICATION_USER_SUBSCRIPTION)
    }

    function d(e, t, n) {
        return e.subscription_plans[0].sku_id === t.skuId && (c(e.sku_flags) ? null != n && t.guildId === n && n !== a.ME : !!f(e.sku_flags) && null == t.guildId)
    }
}