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
        a = n("652515"),
        s = n("550951"),
        o = n("981631");

    function l(e) {
        let t = (0, a.useIsEligibleForGuildShopStorefront)(),
            n = (0, a.useIsEligibleForSubscriptionsInGuildShop)(null == e ? void 0 : e.id, "channel_list"),
            l = (0, r.useRoleSubscriptionsVisibleInGuild)(null == e ? void 0 : e.id),
            u = (0, s.useGuildShopPreviewVisible)(e, "channel_list"),
            {
                shouldHideGuildPurchaseEntryPoints: d
            } = (0, i.useShouldHideGuildPurchaseEntryPoints)(null == e ? void 0 : e.id);
        return !!t && null != e && !d && (e.hasFeature(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && l || u)
    }

    function u(e, t) {
        let n = (0, a.isEligibleForGuildShopStorefront)(),
            i = (0, a.isEligibleForSubscriptionsInGuildShop)(null == e ? void 0 : e.id, "channel_list"),
            s = (0, r.areRoleSubscriptionsVisibleInGuild)(null == e ? void 0 : e.id, t);
        return !!n && null != e && (e.hasFeature(o.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || i && s)
    }
}