function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGuildShopPreviewVisible: function() {
            return d
        }
    });
    var i = n("65597"),
        s = n("151426"),
        r = n("10641"),
        a = n("287883"),
        o = n("957255"),
        l = n("551254"),
        u = n("49111");

    function d(e, t) {
        var n;
        let d = (0, l.useIsEligibleForGuildShopPreview)(t),
            c = (0, r.useIsDismissibleContentDismissed)(s.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW),
            _ = (0, i.default)([o.default], () => null != e && o.default.can(u.Permissions.ADMINISTRATOR, e)),
            f = null !== (n = null == e ? void 0 : e.hasFeature(u.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) && void 0 !== n && n,
            E = (0, a.useGuildEligibleForGuildProducts)(null == e ? void 0 : e.id, "useGuildShopPreviewVisible"),
            h = [u.GuildFeatures.CREATOR_MONETIZABLE, u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL, u.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED].some(t => (null == e ? void 0 : e.hasFeature(t)) === !0);
        return null != e && _ && !f && h && d && E && !c
    }
}