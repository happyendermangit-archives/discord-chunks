function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGuildShopVisibleInGuild: function() {
            return l
        },
        isGuildShopVisibleInGuild: function() {
            return u
        }
    });
    var i = n("465869"),
        s = n("903724"),
        r = n("551254"),
        a = n("991148"),
        o = n("49111");

    function l(e) {
        let t = (0, r.useIsEligibleForGuildShopStorefront)(),
            n = (0, r.useIsEligibleForSubscriptionsInGuildShop)(null == e ? void 0 : e.id, "channel_list"),
            l = (0, s.useRoleSubscriptionsVisibleInGuild)(null == e ? void 0 : e.id),
            u = (0, a.useGuildShopPreviewVisible)(e, "channel_list"),
            {
                shouldHideGuildPurchaseEntryPoints: d
            } = (0, i.useShouldHideGuildPurchaseEntryPoints)(null == e ? void 0 : e.id);
        return !!t && null != e && !d && (e.hasFeature(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && l || u)
    }

    function u(e, t) {
        let n = (0, r.isEligibleForGuildShopStorefront)(),
            i = (0, r.isEligibleForSubscriptionsInGuildShop)(null == e ? void 0 : e.id, "channel_list"),
            a = (0, s.areRoleSubscriptionsVisibleInGuild)(null == e ? void 0 : e.id, t);
        return !!n && null != e && (e.hasFeature(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || i && a)
    }
}