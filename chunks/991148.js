function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGuildShopPreviewVisible: function() {
            return l
        }
    });
    var s = n("65597"),
        i = n("151426"),
        r = n("10641"),
        a = n("287883"),
        o = n("957255"),
        d = n("551254"),
        u = n("49111");

    function l(e, t) {
        var n;
        let l = (0, d.useIsEligibleForGuildShopPreview)(t),
            f = (0, r.useIsDismissibleContentDismissed)(i.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW),
            _ = (0, s.default)([o.default], () => null != e && o.default.can(u.Permissions.ADMINISTRATOR, e)),
            c = null !== (n = null == e ? void 0 : e.hasFeature(u.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) && void 0 !== n && n,
            g = (0, a.useGuildEligibleForGuildProducts)(null == e ? void 0 : e.id, "useGuildShopPreviewVisible"),
            m = [u.GuildFeatures.CREATOR_MONETIZABLE, u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL, u.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED].some(t => (null == e ? void 0 : e.hasFeature(t)) === !0);
        return null != e && _ && !c && m && l && g && !f
    }
}