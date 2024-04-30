function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("149765"),
        l = n("442837"),
        u = n("570140"),
        d = n("223892"),
        _ = n("738774"),
        c = n("644542"),
        E = n("923726"),
        I = n("973542"),
        T = n("790285"),
        f = n("160404"),
        S = n("592125"),
        h = n("271383"),
        A = n("430824"),
        m = n("594174"),
        N = n("981631");
    let p = {},
        O = new Set;

    function R(e) {
        let {
            guildId: t,
            role: n,
            isPreviewingRoles: i
        } = e;
        return !!(0, I.isSubscriptionRole)(n) && (!!(i || (0, I.isSubscriptionRoleAvailableForPurchase)(null != n ? n : void 0) || function(e, t) {
            if (null == e) return !1;
            let n = m.default.getCurrentUser();
            if (null == n) return !1;
            let i = h.default.getMember(t, n.id);
            return null != i && i.roles.includes(e.id)
        }(n, t)) || !1)
    }

    function C(e, t) {
        if (!t.hasFeature(N.GuildFeatures.CREATOR_MONETIZABLE) && !t.hasFeature(N.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) return !1;
        let n = f.default.isViewingServerShop(t.id);
        for (let i of Object.keys(e.permissionOverwrites)) {
            let r = A.default.getRole(t.id, i);
            if (!R({
                    guildId: t.id,
                    role: r,
                    isPreviewingRoles: n
                })) continue;
            let s = e.permissionOverwrites[i];
            if ((0, T.isChannelAccessGrantedBy)(e, s)) return !0
        }
        let i = A.default.getRole(t.id, t.getEveryoneRoleId()),
            r = null != i && !o.has(i.permissions, N.Permissions.VIEW_CHANNEL),
            s = (0, T.isChannelAccessDeniedBy)(e, e.permissionOverwrites[t.id]);
        if (r && !s) {
            for (let e of Object.values(A.default.getRoles(t.id)))
                if (R({
                        guildId: t.id,
                        role: e,
                        isPreviewingRoles: n
                    }) && (0, T.isAllChannelsRole)(e)) return !0
        }
        return !1
    }

    function g(e, t) {
        let n = p[e];
        if (null == n) return !1;
        let i = S.default.getChannel(t);
        if (null == i) return !1;
        let r = A.default.getGuild(i.getGuildId());
        if (null == r) return !1;
        let s = n.has(t),
            a = C(i, r);
        return s !== a && (a ? n.add(t) : n.delete(t), !0)
    }

    function L() {
        p = {}, O.clear()
    }

    function v(e) {
        let {
            guild: t
        } = e;
        delete p[t.id]
    }

    function D(e) {
        let {
            guildId: t
        } = e;
        delete p[t]
    }

    function M(e) {
        let {
            channel: t
        } = e;
        return null != t.guild_id && g(t.guild_id, t.id)
    }
    class y extends(i = l.default.Store) {
        initialize() {
            this.waitFor(A.default, S.default, f.default), c.GuildRoleSubscriptionUsersExperiment.subscribe({
                location: "1"
            }, () => L())
        }
        isChannelGated(e, t) {
            if (null == e) return !1;
            let n = p[e];
            return null == n && (! function(e) {
                let t = A.default.getGuild(e);
                if (null == t) return;
                let n = p[e] = new Set;
                if (!t.hasFeature(N.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) || !(0, E.isGuildEligibleForRoleSubscriptions)(e) && !(0, d.isExpeditedMonetizationOnboardingGuild)(t)) return;
                let i = S.default.getMutableGuildChannelsForGuild(e);
                for (let e in i) {
                    let r = i[e];
                    C(r, t) && n.add(r.id)
                }
            }(e), n = p[e]), null != n && n.has(t)
        }
        isChannelGatedAndVisible(e, t) {
            return null != e && this.isChannelGated(e, t) && !O.has(e)
        }
    }
    a = "GatedChannelStore", (s = "displayName") in(r = y) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new y(u.default, {
        CONNECTION_OPEN: L,
        OVERLAY_INITIALIZE: L,
        CACHE_LOADED_LAZY: L,
        GUILD_CREATE: v,
        GUILD_UPDATE: v,
        GUILD_DELETE: v,
        GUILD_ROLE_CREATE: D,
        GUILD_ROLE_UPDATE: D,
        GUILD_ROLE_DELETE: D,
        IMPERSONATE_UPDATE: D,
        IMPERSONATE_STOP: D,
        CHANNEL_CREATE: M,
        CHANNEL_DELETE: M,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e, n = !1;
            for (let e of t) null != e.guild_id && g(e.guild_id, e.id) && (n = !0);
            return n
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function(e) {
            let {
                guildId: t,
                restrictions: n
            } = e;
            (0, _.isRestrictedFromShowingGuildPurchaseEntryPoints)(n) ? O.add(t): O.delete(t)
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function(e) {
            let {
                guildId: t
            } = e;
            O.add(t)
        }
    })
}