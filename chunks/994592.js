function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        areRoleSubscriptionsVisibleInGuild: function() {
            return c
        },
        useRoleSubscriptionsVisibleInGuild: function() {
            return E
        },
        useShowRoleSubscriptionsInChannelList: function() {
            return I
        }
    }), n("47120");
    var i = n("442837"),
        r = n("652515"),
        s = n("200876"),
        a = n("674180"),
        o = n("160404"),
        l = n("430824"),
        u = n("772021"),
        d = n("981631");

    function _(e) {
        let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.default, o.default], i = t.getGuild(e);
        if (null == i) return !1;
        let r = (0, s.isCreatorMonetizationEnabledGuild)(i),
            a = i.hasFeature(d.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
        return !!(r && a || n.isViewingServerShop(e)) || !1
    }

    function c(e, t) {
        return !!_(e) || (0, u.computeHasRoleSubscriptionsInGuild)(e, t)
    }

    function E(e) {
        let t = (0, u.default)(e),
            n = (0, i.useStateFromStores)([l.default, o.default], () => _(e, [l.default, o.default]), [e]),
            {
                shouldHideGuildPurchaseEntryPoints: r
            } = (0, a.useShouldHideGuildPurchaseEntryPoints)(e);
        return !r && (n || t)
    }

    function I(e) {
        let t = E(e),
            n = (0, r.useIsEligibleForSubscriptionsInGuildShop)(e, "useShowRoleSubscriptionsInChannelList");
        return t && !n
    }
}