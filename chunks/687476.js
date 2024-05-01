function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a, s, o = n("149765"),
        l = n("442837"),
        u = n("570140"),
        d = n("271383"),
        _ = n("430824"),
        c = n("594174"),
        E = n("973542"),
        I = n("981631");
    let T = new Set,
        f = new Map,
        S = new Map,
        h = new Map,
        A = new Map,
        m = null;

    function N(e) {
        let t = c.default.getCurrentUser(),
            n = _.default.getGuild(e);
        if (null == n || null == t) return !1;
        let i = new Set,
            r = new Set,
            a = new Set;
        if (A.set(e, n.isOwner(t)), n.hasFeature(I.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) {
            var s, l;
            let u = d.default.getMember(e, t.id),
                c = new Set(null !== (s = null == u ? void 0 : u.roles) && void 0 !== s ? s : []),
                T = _.default.getRoles(n.id);
            for (let t in T) {
                ;
                let n = T[t];
                if ((0, E.isSubscriptionRole)(n) && (i.add(t), (0, E.isSubscriptionRoleAvailableForPurchase)(n) && (r.add(t), c.has(t) && a.add(t))), c.has(t) && (l = n, o.has(l.permissions, I.Permissions.ADMINISTRATOR))) A.set(e, !0)
            }
        }
        return f.set(e, i), h.set(e, a), S.set(e, r), !0
    }

    function p() {
        f.clear(), h.clear(), S.clear(), A.clear(), m = null
    }

    function O(e) {
        let {
            guild: {
                id: t
            }
        } = e;
        if (null == m) return !1;
        let n = _.default.getGuild(t);
        if (null == n) return !1;
        let i = n.hasFeature(I.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
        if (i && !m.has(t)) {
            let e = new Set(m);
            return e.add(t), m = e, !0
        }
        if (!i && m.has(t)) {
            let e = new Set(m);
            return e.delete(t), m = e, !0
        }
        return !1
    }

    function R(e) {
        let {
            guildId: t
        } = e;
        return !!f.has(t) && N(t)
    }
    class C extends(i = l.default.Store) {
        initialize() {
            this.waitFor(_.default)
        }
        getGuildIdsWithPurchasableRoles() {
            return null == m ? function() {
                let e = _.default.getGuilds(),
                    t = new Set;
                for (let n in e) e[n].hasFeature(I.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n);
                return m = t, t
            }() : m
        }
        buildRoles(e) {
            !f.has(e) && N(e)
        }
        getSubscriptionRoles(e) {
            var t;
            return this.buildRoles(e), null !== (t = f.get(e)) && void 0 !== t ? t : T
        }
        getPurchasableSubscriptionRoles(e) {
            var t;
            return this.buildRoles(e), null !== (t = S.get(e)) && void 0 !== t ? t : T
        }
        getUserSubscriptionRoles(e) {
            var t;
            return this.buildRoles(e), null !== (t = h.get(e)) && void 0 !== t ? t : T
        }
        getUserIsAdmin(e) {
            var t;
            return this.buildRoles(e), null !== (t = A.get(e)) && void 0 !== t && t
        }
    }
    s = "SubscriptionRoleStore", (a = "displayName") in(r = C) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new C(u.default, {
        CONNECTION_OPEN: p,
        LOGOUT: p,
        GUILD_CREATE: O,
        GUILD_DELETE: function(e) {
            let {
                guild: {
                    id: t
                }
            } = e;
            if ((null == m ? void 0 : m.has(t)) !== !0) return !1;
            let n = new Set(m);
            n.delete(t), m = n
        },
        GUILD_UPDATE: O,
        GUILD_ROLE_CREATE: R,
        GUILD_ROLE_UPDATE: R,
        GUILD_ROLE_DELETE: R,
        GUILD_MEMBER_UPDATE: function(e) {
            let {
                guildId: t,
                user: n
            } = e, i = c.default.getCurrentUser();
            return !!(n.id === (null == i ? void 0 : i.id) && f.has(t)) && N(t)
        }
    })
}