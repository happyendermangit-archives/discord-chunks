function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getApplicationSubscriptionPlanId: function() {
            return o
        },
        getPayableSubscriptionListing: function() {
            return u
        },
        hasPayableSubscriptionPlan: function() {
            return l
        },
        isApplicationGuildSubscription: function() {
            return d
        },
        isApplicationUserSubscription: function() {
            return _
        },
        isListingActiveInGuild: function() {
            return c
        }
    });
    var i = n("512722"),
        r = n.n(i),
        s = n("630388"),
        a = n("981631");

    function o(e) {
        let t = e.items;
        return r()(1 === t.length, "more than 1 subscription item for application subscription"), t[0].planId
    }

    function l(e) {
        return null != u(e)
    }

    function u(e) {
        var t;
        return null === (t = e.subscription_listings) || void 0 === t ? void 0 : t.find(e => e.published && (d(e.sku_flags) || _(e.sku_flags)) && e.subscription_plans[0].price > 0)
    }

    function d(e) {
        return (0, s.hasFlag)(e, a.SKUFlags.APPLICATION_GUILD_SUBSCRIPTION)
    }

    function _(e) {
        return (0, s.hasFlag)(e, a.SKUFlags.APPLICATION_USER_SUBSCRIPTION)
    }

    function c(e, t, n) {
        return e.subscription_plans[0].sku_id === t.skuId && (d(e.sku_flags) ? null != n && t.guildId === n && n !== a.ME : !!_(e.sku_flags) && null == t.guildId)
    }
}