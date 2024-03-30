function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isGuildShopVisibleInGuild: function() {
            return l
        },
        useGuildShopVisibleInGuild: function() {
            return s
        }
    });
    var r = n("429910"),
        o = n("162660"),
        i = n("833458"),
        a = n("757562"),
        u = n("281767");

    function s(e) {
        var t = (0, i.useIsEligibleForGuildShopStorefront)(),
            n = (0, i.useIsEligibleForSubscriptionsInGuildShop)(null == e ? void 0 : e.id, "channel_list"),
            s = (0, o.useRoleSubscriptionsVisibleInGuild)(null == e ? void 0 : e.id),
            l = (0, a.useGuildShopPreviewVisible)(e, "channel_list"),
            c = (0, r.useShouldHideGuildPurchaseEntryPoints)(null == e ? void 0 : e.id).shouldHideGuildPurchaseEntryPoints;
        return !!t && null != e && !c && (e.hasFeature(u.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && s || l)
    }

    function l(e, t) {
        var n = (0, i.isEligibleForGuildShopStorefront)(),
            r = (0, i.isEligibleForSubscriptionsInGuildShop)(null == e ? void 0 : e.id, "channel_list"),
            a = (0, o.areRoleSubscriptionsVisibleInGuild)(null == e ? void 0 : e.id, t);
        return !!n && null != e && (e.hasFeature(u.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE) || r && a)
    }
}