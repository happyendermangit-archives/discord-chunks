function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGuildShopVisibleInGuild: function() {
            return d
        },
        isGuildShopVisibleInGuild: function() {
            return u
        }
    });
    var s = n("465869"),
        i = n("903724"),
        r = n("551254"),
        a = n("991148"),
        o = n("49111");

    function d(e) {
        let t = (0, r.useIsEligibleForGuildShopStorefront)(),
            n = (0, r.useIsEligibleForSubscriptionsInGuildShop)(null == e ? void 0 : e.id, "channel_list"),
            d = (0, i.useRoleSubscriptionsVisibleInGuild)(null == e ? void 0 : e.id),
            u = (0, a.useGuildShopPreviewVisible)(e, "channel_list"),
            {
                shouldHideGuildPurchaseEntryPoints: l
            } = (0, s.useShouldHideGuildPurchaseEntryPoints)(null == e ? void 0 : e.id);
        return !!t && null != e && !l && (e.hasFeature(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && d || u)
    }

    function u(e) {
        let t = (0, r.isEligibleForGuildShopStorefront)(),
            n = (0, r.isEligibleForSubscriptionsInGuildShop)(null == e ? void 0 : e.id, "channel_list"),
            s = (0, i.areRoleSubscriptionsVisibleInGuild)(null == e ? void 0 : e.id);
        return !!t && null != e && (e.hasFeature(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && s)
    }
}