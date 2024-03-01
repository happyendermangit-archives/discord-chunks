function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        areRoleSubscriptionsVisibleInGuild: function() {
            return _
        },
        useRoleSubscriptionsVisibleInGuild: function() {
            return c
        },
        useShowRoleSubscriptionsInChannelList: function() {
            return g
        }
    }), n("222007");
    var s = n("446674"),
        i = n("551254"),
        r = n("250666"),
        a = n("465869"),
        o = n("38654"),
        d = n("305961"),
        u = n("638779"),
        l = n("49111");

    function f(e) {
        let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [d.default, o.default], s = t.getGuild(e);
        if (null == s) return !1;
        let i = (0, r.isCreatorMonetizationEnabledGuild)(s),
            a = s.hasFeature(l.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
        if (i && a) return !0;
        let u = n.isViewingServerShop(e);
        return !!u || !1
    }

    function _(e) {
        return !!f(e) || (0, u.computeHasRoleSubscriptionsInGuild)(e)
    }

    function c(e) {
        let t = (0, u.default)(e),
            n = (0, s.useStateFromStores)([d.default, o.default], () => f(e, [d.default, o.default]), [e]),
            {
                shouldHideGuildPurchaseEntryPoints: i
            } = (0, a.useShouldHideGuildPurchaseEntryPoints)(e);
        return !i && (n || t)
    }

    function g(e) {
        let t = c(e),
            n = (0, i.useIsEligibleForSubscriptionsInGuildShop)(e, "useShowRoleSubscriptionsInChannelList");
        return t && !n
    }
}