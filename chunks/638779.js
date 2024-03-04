function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        computeHasRoleSubscriptionsInGuild: function() {
            return l
        },
        default: function() {
            return u
        }
    }), n("222007");
    var i = n("446674"),
        s = n("271938"),
        r = n("26989"),
        a = n("305961"),
        o = n("49111");

    function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == e ? null : r.default.getMember(e, s.default.getId()),
            [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.default],
            i = n.getGuild(e);
        if (null == i || null == t || !i.hasFeature(o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return !1;
        for (let e of t.roles) {
            var l;
            let t = i.getRole(e);
            if ((null == t ? void 0 : null === (l = t.tags) || void 0 === l ? void 0 : l.subscription_listing_id) != null) return !0
        }
        return !1
    }

    function u(e) {
        let t = (0, i.useStateFromStores)([s.default, r.default], () => null == e ? null : r.default.getMember(e, s.default.getId()));
        return (0, i.useStateFromStores)([a.default], () => l(e, t, [a.default]), [e, t])
    }
}