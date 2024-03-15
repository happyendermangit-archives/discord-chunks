function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        areRoleSubscriptionsVisibleInGuild: function() {
            return f
        },
        useRoleSubscriptionsVisibleInGuild: function() {
            return _
        },
        useShowRoleSubscriptionsInChannelList: function() {
            return E
        }
    }), n("222007");
    var i = n("446674"),
        s = n("551254"),
        r = n("250666"),
        a = n("465869"),
        o = n("38654"),
        l = n("305961"),
        u = n("638779"),
        d = n("49111");

    function c(e) {
        let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.default, o.default], i = t.getGuild(e);
        if (null == i) return !1;
        let s = (0, r.isCreatorMonetizationEnabledGuild)(i),
            a = i.hasFeature(d.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
        if (s && a) return !0;
        let u = n.isViewingServerShop(e);
        return !!u || !1
    }

    function f(e, t) {
        return !!c(e) || (0, u.computeHasRoleSubscriptionsInGuild)(e, t)
    }

    function _(e) {
        let t = (0, u.default)(e),
            n = (0, i.useStateFromStores)([l.default, o.default], () => c(e, [l.default, o.default]), [e]),
            {
                shouldHideGuildPurchaseEntryPoints: s
            } = (0, a.useShouldHideGuildPurchaseEntryPoints)(e);
        return !s && (n || t)
    }

    function E(e) {
        let t = _(e),
            n = (0, s.useIsEligibleForSubscriptionsInGuildShop)(e, "useShowRoleSubscriptionsInChannelList");
        return t && !n
    }
}