function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGuildShopPreviewVisible: function() {
            return c
        }
    });
    var r = n("37295"),
        o = n("14782"),
        i = n("510077"),
        a = n("563973"),
        u = n("29884"),
        s = n("833458"),
        l = n("281767");

    function c(e, t) {
        var n, c = (0, s.useIsEligibleForGuildShopPreview)(t),
            f = (0, i.useIsDismissibleContentDismissed)(o.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW),
            d = (0, r.useStateFromStores)([u.default], function() {
                return null != e && u.default.can(l.Permissions.ADMINISTRATOR, e)
            }),
            _ = null !== (n = null == e ? void 0 : e.hasFeature(l.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) && void 0 !== n && n,
            E = (0, a.useGuildEligibleForGuildProducts)(null == e ? void 0 : e.id, "useGuildShopPreviewVisible"),
            p = [l.GuildFeatures.CREATOR_MONETIZABLE, l.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL, l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED].some(function(t) {
                return (null == e ? void 0 : e.hasFeature(t)) === !0
            });
        return null != e && d && !_ && p && c && E && !f
    }
}