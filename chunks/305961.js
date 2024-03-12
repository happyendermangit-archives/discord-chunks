function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    }), n("222007");
    var s = n("917351"),
        r = n.n(s),
        a = n("446674"),
        o = n("233736"),
        l = n("913144"),
        u = n("813006"),
        d = n("665618"),
        c = n("605136"),
        f = n("299039"),
        _ = n("271938"),
        h = n("49111"),
        E = n("695838");
    let g = {},
        m = {},
        p = !1,
        S = [];

    function v(e) {
        m = {}, g = {}, i = 0, null != e.guilds && r.forEach(e.guilds, e => {
            i++, m[e.id] = d.fromSerializedGuildRecord(e), g[e.id] = e.roles
        })
    }

    function T(e) {
        let {
            guildId: t,
            role: n
        } = e, i = g[t], s = c.fromServerRole(n), r = null == i ? void 0 : i[s.id];
        if (null != r && (0, o.default)(s, r)) return !1;
        i = {
            ...i,
            [n.id]: c.fromServerRole(n)
        }, g[t] = i
    }
    let I = Object.freeze({});
    class C extends a.default.Store {
        getGuild(e) {
            if (null != e) return e === h.FAVORITES ? E.FAVORITES_GUILD_RECORD : m[e]
        }
        getGuilds() {
            return m
        }
        getGuildIds() {
            return f.default.keys(m)
        }
        getGuildCount() {
            return i
        }
        isLoaded() {
            return p
        }
        getGeoRestrictedGuilds() {
            return S
        }
        getAllGuildsRoles() {
            return g
        }
        getRoles(e) {
            var t;
            return null !== (t = g[e]) && void 0 !== t ? t : I
        }
        getRole(e, t) {
            var n;
            return null === (n = g[e]) || void 0 === n ? void 0 : n[t]
        }
    }
    C.displayName = "GuildStore";
    var A = new C(l.default, {
        BACKGROUND_SYNC: function(e) {
            for (let n of e.guilds) {
                var t;
                let e = m[n.id];
                if (null == e || "unavailable" === n.data_mode) return;
                m[n.id] = d.fromBackgroundSync(n, e), g[n.id] = "partial" === n.data_mode ? d.filterRoleDeletes(n.id, null !== (t = g[n.id]) && void 0 !== t ? t : I, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : c.sortServerRoles(n.id, n.roles)
            }
            i = Object.keys(m).length
        },
        CONNECTION_OPEN: function(e) {
            p = !0;
            let t = m;
            m = {}, g = {}, i = 0, e.guilds.forEach(e => {
                i++, m[e.id] = d.fromServer(e, t[e.id]), g[e.id] = e.roles instanceof Array ? c.sortServerRoles(e.id, e.roles) : e.roles
            });
            let n = !1;
            if (S.length !== e.geoRestrictedGuilds.length) n = !0;
            else
                for (let t = 0; t < e.geoRestrictedGuilds.length; t++)
                    if (!(0, o.default)(S[t], e.geoRestrictedGuilds[t])) {
                        n = !0;
                        break
                    } n && (S = e.geoRestrictedGuilds)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t;
            m = {}, g = {}, i = 0, null === (t = e.guilds) || void 0 === t || t.forEach(e => {
                i++, m[e.id] = new u.default(e)
            }), g = e.allGuildsRoles
        },
        CACHE_LOADED: v,
        CACHE_LOADED_LAZY: v,
        GUILD_CREATE: function(e) {
            let t = d.fromServer(e.guild, m[e.guild.id]);
            null == m[t.id] && i++, m = {
                ...m,
                [t.id]: t
            }, g[t.id] = e.guild.roles instanceof Array ? c.sortServerRoles(t.id, e.guild.roles) : e.guild.roles
        },
        GUILD_UPDATE: function(e) {
            let t = d.fromServerUpdate(e.guild, m[e.guild.id]);
            null == m[t.id] && i++, m = {
                ...m,
                [t.id]: t
            }, g[t.id] = c.sortServerRoles(t.id, e.guild.roles)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e, n = S.findIndex(e => e.id === t.id);
            if (-1 !== n) {
                S.splice(n, 1), S = [...S];
                return
            }
            if (null == m[t.id] || t.unavailable) return !1;
            m = {
                ...m
            }, delete m[t.id], g[t.id] = void 0, i--
        },
        GUILD_ROLE_CREATE: T,
        GUILD_ROLE_UPDATE: T,
        GUILD_ROLE_DELETE: function(e) {
            let {
                guildId: t,
                roleId: n
            } = e, i = g[t];
            if (null == i) return !1;
            i = {
                ...i
            }, delete i[n], g[t] = i
        },
        GUILD_MEMBER_ADD: function(e) {
            let {
                guildId: t,
                joinedAt: n,
                user: i
            } = e, s = _.default.getId(), r = m[t];
            if (s !== i.id || null == r) return !1;
            let a = "string" == typeof n ? new Date(n) : n;
            if (a === r.joinedAt || null == a) return !1;
            m = {
                ...m,
                [t]: r.updateJoinedAt(a)
            }
        },
        GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
            return !0
        },
        GUILD_GEO_RESTRICTED: function(e) {
            S = [...S, {
                id: e.guildId,
                name: e.name,
                icon: e.icon,
                unavailable: !0,
                geo_restricted: !0
            }]
        }
    })
}