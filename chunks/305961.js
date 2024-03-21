function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007");
    var s = n("446674"),
        r = n("233736"),
        a = n("913144"),
        o = n("813006"),
        l = n("665618"),
        u = n("605136"),
        d = n("299039"),
        c = n("271938"),
        _ = n("49111"),
        f = n("695838");
    let E = {},
        h = {},
        g = !1,
        m = [];

    function p(e) {
        for (let t of (h = {}, E = {}, i = 0, e)) i++, h[t.id] = l.fromSerializedGuildRecord(t), E[t.id] = t.roles
    }

    function S(e) {
        let {
            guildId: t,
            role: n
        } = e, i = E[t], s = u.fromServerRole(n), a = null == i ? void 0 : i[s.id];
        if (null != a && (0, r.default)(s, a)) return !1;
        i = {
            ...i,
            [n.id]: u.fromServerRole(n)
        }, E[t] = i
    }
    let v = Object.freeze({});
    class T extends s.default.Store {
        getGuild(e) {
            if (null != e) return e === _.FAVORITES ? f.FAVORITES_GUILD_RECORD : h[e]
        }
        getGuilds() {
            return h
        }
        getGuildIds() {
            return d.default.keys(h)
        }
        getGuildCount() {
            return i
        }
        isLoaded() {
            return g
        }
        getGeoRestrictedGuilds() {
            return m
        }
        getAllGuildsRoles() {
            return E
        }
        getRoles(e) {
            var t;
            return null !== (t = E[e]) && void 0 !== t ? t : v
        }
        getRole(e, t) {
            var n;
            return null === (n = E[e]) || void 0 === n ? void 0 : n[t]
        }
    }
    T.displayName = "GuildStore";
    var I = new T(a.default, {
        BACKGROUND_SYNC: function(e) {
            for (let n of e.guilds) {
                var t;
                let e = h[n.id];
                if (null == e || "unavailable" === n.data_mode) return;
                h[n.id] = l.fromBackgroundSync(n, e), E[n.id] = "partial" === n.data_mode ? l.filterRoleDeletes(n.id, null !== (t = E[n.id]) && void 0 !== t ? t : v, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : u.sortServerRoles(n.id, n.roles)
            }
            i = Object.keys(h).length
        },
        CONNECTION_OPEN: function(e) {
            g = !0;
            let t = h;
            h = {}, E = {}, i = 0, e.guilds.forEach(e => {
                i++, h[e.id] = l.fromServer(e, t[e.id]), E[e.id] = e.roles instanceof Array ? u.sortServerRoles(e.id, e.roles) : e.roles
            });
            let n = !1;
            if (m.length !== e.geoRestrictedGuilds.length) n = !0;
            else
                for (let t = 0; t < e.geoRestrictedGuilds.length; t++)
                    if (!(0, r.default)(m[t], e.geoRestrictedGuilds[t])) {
                        n = !0;
                        break
                    } n && (m = e.geoRestrictedGuilds)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t;
            h = {}, E = {}, i = 0, null === (t = e.guilds) || void 0 === t || t.forEach(e => {
                i++, h[e.id] = new o.default(e)
            }), E = e.allGuildsRoles
        },
        CACHE_LOADED: function(e) {
            p(e.guilds)
        },
        CACHE_LOADED_LAZY: function(e) {
            if (0 === e.guilds.length) return !1;
            p(e.guilds)
        },
        GUILD_CREATE: function(e) {
            let t = l.fromServer(e.guild, h[e.guild.id]);
            null == h[t.id] && i++, h = {
                ...h,
                [t.id]: t
            }, E[t.id] = e.guild.roles instanceof Array ? u.sortServerRoles(t.id, e.guild.roles) : e.guild.roles
        },
        GUILD_UPDATE: function(e) {
            let t = l.fromServerUpdate(e.guild, h[e.guild.id]);
            null == h[t.id] && i++, h = {
                ...h,
                [t.id]: t
            }, E[t.id] = u.sortServerRoles(t.id, e.guild.roles)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e, n = m.findIndex(e => e.id === t.id);
            if (-1 !== n) {
                m.splice(n, 1), m = [...m];
                return
            }
            if (null == h[t.id] || t.unavailable) return !1;
            h = {
                ...h
            }, delete h[t.id], E[t.id] = void 0, i--
        },
        GUILD_ROLE_CREATE: S,
        GUILD_ROLE_UPDATE: S,
        GUILD_ROLE_DELETE: function(e) {
            let {
                guildId: t,
                roleId: n
            } = e, i = E[t];
            if (null == i) return !1;
            i = {
                ...i
            }, delete i[n], E[t] = i
        },
        GUILD_MEMBER_ADD: function(e) {
            let {
                guildId: t,
                joinedAt: n,
                user: i
            } = e, s = c.default.getId(), r = h[t];
            if (s !== i.id || null == r) return !1;
            let a = "string" == typeof n ? new Date(n) : n;
            if (a === r.joinedAt || null == a) return !1;
            h = {
                ...h,
                [t]: r.updateJoinedAt(a)
            }
        },
        GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
            return !0
        },
        GUILD_GEO_RESTRICTED: function(e) {
            m = [...m, {
                id: e.guildId,
                name: e.name,
                icon: e.icon,
                unavailable: !0,
                geo_restricted: !0
            }]
        }
    })
}