function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("222007");
    var s = n("316693"),
        i = n("446674"),
        r = n("913144"),
        a = n("26989"),
        o = n("305961"),
        d = n("697218"),
        u = n("828674"),
        l = n("49111");
    let f = new Set,
        _ = new Map,
        c = new Map,
        g = new Map,
        m = new Map,
        h = null;

    function v(e) {
        let t = d.default.getCurrentUser(),
            n = o.default.getGuild(e);
        if (null == n || null == t) return !1;
        let i = new Set,
            r = new Set,
            f = new Set;
        if (m.set(e, n.isOwner(t)), n.hasFeature(l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) {
            var h, v;
            let o = a.default.getMember(e, t.id),
                d = new Set(null !== (h = null == o ? void 0 : o.roles) && void 0 !== h ? h : []);
            for (let t in n.roles) {
                ;
                let a = n.roles[t];
                if ((0, u.isSubscriptionRole)(a) && (i.add(t), (0, u.isSubscriptionRoleAvailableForPurchase)(a) && (r.add(t), d.has(t) && f.add(t))), d.has(t) && (v = a, s.default.has(v.permissions, l.Permissions.ADMINISTRATOR))) m.set(e, !0)
            }
        }
        return _.set(e, i), g.set(e, f), c.set(e, r), !0
    }

    function E() {
        _.clear(), g.clear(), c.clear(), m.clear(), h = null
    }

    function p(e) {
        let {
            guild: {
                id: t
            }
        } = e;
        if (null == h) return !1;
        let n = o.default.getGuild(t);
        if (null == n) return !1;
        let s = n.hasFeature(l.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
        if (s && !h.has(t)) {
            let e = new Set(h);
            return e.add(t), h = e, !0
        }
        if (!s && h.has(t)) {
            let e = new Set(h);
            return e.delete(t), h = e, !0
        }
        return !1
    }

    function y(e) {
        let {
            guildId: t
        } = e;
        return !!_.has(t) && v(t)
    }
    class T extends i.default.Store {
        initialize() {
            this.waitFor(o.default)
        }
        getGuildIdsWithPurchasableRoles() {
            return null == h ? function() {
                let e = o.default.getGuilds(),
                    t = new Set;
                for (let n in e) e[n].hasFeature(l.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n);
                return h = t, t
            }() : h
        }
        buildRoles(e) {
            !_.has(e) && v(e)
        }
        getSubscriptionRoles(e) {
            var t;
            return this.buildRoles(e), null !== (t = _.get(e)) && void 0 !== t ? t : f
        }
        getPurchasableSubscriptionRoles(e) {
            var t;
            return this.buildRoles(e), null !== (t = c.get(e)) && void 0 !== t ? t : f
        }
        getUserSubscriptionRoles(e) {
            var t;
            return this.buildRoles(e), null !== (t = g.get(e)) && void 0 !== t ? t : f
        }
        getUserIsAdmin(e) {
            var t;
            return this.buildRoles(e), null !== (t = m.get(e)) && void 0 !== t && t
        }
    }
    T.displayName = "SubscriptionRoleStore";
    var C = new T(r.default, {
        CONNECTION_OPEN: E,
        LOGOUT: E,
        GUILD_CREATE: p,
        GUILD_DELETE: function(e) {
            let {
                guild: {
                    id: t
                }
            } = e;
            if ((null == h ? void 0 : h.has(t)) !== !0) return !1;
            let n = new Set(h);
            n.delete(t), h = n
        },
        GUILD_UPDATE: p,
        GUILD_ROLE_CREATE: y,
        GUILD_ROLE_UPDATE: y,
        GUILD_ROLE_DELETE: y,
        GUILD_MEMBER_UPDATE: function(e) {
            let {
                guildId: t,
                user: n
            } = e, s = d.default.getCurrentUser();
            return !!(n.id === (null == s ? void 0 : s.id) && _.has(t)) && v(t)
        }
    })
}