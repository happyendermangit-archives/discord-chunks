function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007");
    var i = n("316693"),
        s = n("446674"),
        r = n("913144"),
        a = n("26989"),
        o = n("305961"),
        l = n("697218"),
        u = n("828674"),
        d = n("49111");
    let c = new Set,
        _ = new Map,
        f = new Map,
        E = new Map,
        h = new Map,
        g = null;

    function m(e) {
        let t = l.default.getCurrentUser(),
            n = o.default.getGuild(e);
        if (null == n || null == t) return !1;
        let s = new Set,
            r = new Set,
            c = new Set;
        if (h.set(e, n.isOwner(t)), n.hasFeature(d.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) {
            var g, m;
            let l = a.default.getMember(e, t.id),
                _ = new Set(null !== (g = null == l ? void 0 : l.roles) && void 0 !== g ? g : []),
                f = o.default.getRoles(n.id);
            for (let t in f) {
                ;
                let n = f[t];
                if ((0, u.isSubscriptionRole)(n) && (s.add(t), (0, u.isSubscriptionRoleAvailableForPurchase)(n) && (r.add(t), _.has(t) && c.add(t))), _.has(t) && (m = n, i.has(m.permissions, d.Permissions.ADMINISTRATOR))) h.set(e, !0)
            }
        }
        return _.set(e, s), E.set(e, c), f.set(e, r), !0
    }

    function p() {
        _.clear(), E.clear(), f.clear(), h.clear(), g = null
    }

    function S(e) {
        let {
            guild: {
                id: t
            }
        } = e;
        if (null == g) return !1;
        let n = o.default.getGuild(t);
        if (null == n) return !1;
        let i = n.hasFeature(d.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
        if (i && !g.has(t)) {
            let e = new Set(g);
            return e.add(t), g = e, !0
        }
        if (!i && g.has(t)) {
            let e = new Set(g);
            return e.delete(t), g = e, !0
        }
        return !1
    }

    function T(e) {
        let {
            guildId: t
        } = e;
        return !!_.has(t) && m(t)
    }
    class v extends s.default.Store {
        initialize() {
            this.waitFor(o.default)
        }
        getGuildIdsWithPurchasableRoles() {
            return null == g ? function() {
                let e = o.default.getGuilds(),
                    t = new Set;
                for (let n in e) e[n].hasFeature(d.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n);
                return g = t, t
            }() : g
        }
        buildRoles(e) {
            !_.has(e) && m(e)
        }
        getSubscriptionRoles(e) {
            var t;
            return this.buildRoles(e), null !== (t = _.get(e)) && void 0 !== t ? t : c
        }
        getPurchasableSubscriptionRoles(e) {
            var t;
            return this.buildRoles(e), null !== (t = f.get(e)) && void 0 !== t ? t : c
        }
        getUserSubscriptionRoles(e) {
            var t;
            return this.buildRoles(e), null !== (t = E.get(e)) && void 0 !== t ? t : c
        }
        getUserIsAdmin(e) {
            var t;
            return this.buildRoles(e), null !== (t = h.get(e)) && void 0 !== t && t
        }
    }
    v.displayName = "SubscriptionRoleStore";
    var I = new v(r.default, {
        CONNECTION_OPEN: p,
        LOGOUT: p,
        GUILD_CREATE: S,
        GUILD_DELETE: function(e) {
            let {
                guild: {
                    id: t
                }
            } = e;
            if ((null == g ? void 0 : g.has(t)) !== !0) return !1;
            let n = new Set(g);
            n.delete(t), g = n
        },
        GUILD_UPDATE: S,
        GUILD_ROLE_CREATE: T,
        GUILD_ROLE_UPDATE: T,
        GUILD_ROLE_DELETE: T,
        GUILD_MEMBER_UPDATE: function(e) {
            let {
                guildId: t,
                user: n
            } = e, i = l.default.getCurrentUser();
            return !!(n.id === (null == i ? void 0 : i.id) && _.has(t)) && m(t)
        }
    })
}