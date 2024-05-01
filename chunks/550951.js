function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGuildShopPreviewVisible: function() {
            return d
        }
    });
    var i = n("399606"),
        r = n("524437"),
        a = n("605236"),
        s = n("352981"),
        o = n("496675"),
        l = n("652515"),
        u = n("981631");

    function d(e, t) {
        var n;
        let d = (0, l.useIsEligibleForGuildShopPreview)(t),
            _ = (0, a.useIsDismissibleContentDismissed)(r.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW),
            c = (0, i.useStateFromStores)([o.default], () => null != e && o.default.can(u.Permissions.ADMINISTRATOR, e)),
            E = null !== (n = null == e ? void 0 : e.hasFeature(u.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) && void 0 !== n && n,
            I = (0, s.useGuildEligibleForGuildProducts)(null == e ? void 0 : e.id, "useGuildShopPreviewVisible"),
            T = [u.GuildFeatures.CREATOR_MONETIZABLE, u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL, u.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED].some(t => (null == e ? void 0 : e.hasFeature(t)) === !0);
        return null != e && c && !E && T && d && I && !_
    }
}