function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        computeHasRoleSubscriptionsInGuild: function() {
            return d
        },
        default: function() {
            return u
        }
    }), n("222007");
    var s = n("446674"),
        i = n("271938"),
        r = n("26989"),
        a = n("305961"),
        o = n("49111");

    function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == e ? null : r.default.getMember(e, i.default.getId()),
            [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.default],
            s = n.getGuild(e);
        if (null == s || null == t || !s.hasFeature(o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return !1;
        for (let e of t.roles) {
            var d;
            let t = s.getRole(e);
            if ((null == t ? void 0 : null === (d = t.tags) || void 0 === d ? void 0 : d.subscription_listing_id) != null) return !0
        }
        return !1
    }

    function u(e) {
        let t = (0, s.useStateFromStores)([i.default, r.default], () => null == e ? null : r.default.getMember(e, i.default.getId()));
        return (0, s.useStateFromStores)([a.default], () => d(e, t, [a.default]), [e, t])
    }
}