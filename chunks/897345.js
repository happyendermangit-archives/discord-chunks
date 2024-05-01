function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isGuildShopVisibleInGuild: function() {
            return u
        },
        useGuildShopVisibleInGuild: function() {
            return l
        }
    });
    var i = n("674180"),
        r = n("994592"),
        s = n("652515"),
        a = n("550951"),
        o = n("981631");

    function l(e) {
        let t = (0, s.useIsEligibleForGuildShopStorefront)(),
            n = (0, s.useIsEligibleForSubscriptionsInGuildShop)(null == e ? void 0 : e.id, "channel_list"),
            l = (0, r.useRoleSubscriptionsVisibleInGuild)(null == e ? void 0 : e.id),
            u = (0, a.useGuildShopPreviewVisible)(e, "channel_list"),
            {
                shouldHideGuildPurchaseEntryPoints: d
            } = (0, i.useShouldHideGuildPurchaseEntryPoints)(null == e ? void 0 : e.id);
        return !!t && null != e && !d && (e.hasFeature(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && l || u)
    }

    function u(e, t) {
        let n = (0, s.isEligibleForGuildShopStorefront)(),
            i = (0, s.isEligibleForSubscriptionsInGuildShop)(null == e ? void 0 : e.id, "channel_list"),
            a = (0, r.areRoleSubscriptionsVisibleInGuild)(null == e ? void 0 : e.id, t);
        return !!n && null != e && (e.hasFeature(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || i && a)
    }
}