function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n("47120");
    var r, s, a, o, l = n("442837"),
        u = n("902704"),
        d = n("570140"),
        _ = n("601964"),
        c = n("411198"),
        E = n("625137"),
        I = n("709054"),
        T = n("314897"),
        f = n("981631"),
        S = n("647086");
    let A = {},
        h = {},
        m = !1,
        N = [];

    function O(e) {
        for (let t of (h = {}, A = {}, i = 0, e)) i++, h[t.id] = c.fromSerializedGuildRecord(t), A[t.id] = t.roles
    }

    function p(e) {
        let {
            guildId: t,
            role: n
        } = e, i = A[t], r = E.fromServerRole(n), s = null == i ? void 0 : i[r.id];
        if (null != s && (0, u.default)(r, s)) return !1;
        i = {
            ...i,
            [n.id]: E.fromServerRole(n)
        }, A[t] = i
    }
    let R = Object.freeze({});
    class C extends(r = l.default.Store) {
        getGuild(e) {
            if (null != e) return e === f.FAVORITES ? S.FAVORITES_GUILD_RECORD : h[e]
        }
        getGuilds() {
            return h
        }
        getGuildIds() {
            return I.default.keys(h)
        }
        getGuildCount() {
            return i
        }
        isLoaded() {
            return m
        }
        getGeoRestrictedGuilds() {
            return N
        }
        getAllGuildsRoles() {
            return A
        }
        getRoles(e) {
            var t;
            return null !== (t = A[e]) && void 0 !== t ? t : R
        }
        getRole(e, t) {
            var n;
            return null === (n = A[e]) || void 0 === n ? void 0 : n[t]
        }
    }
    o = "GuildStore", (a = "displayName") in(s = C) ? Object.defineProperty(s, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = o, t.default = new C(d.default, {
        BACKGROUND_SYNC: function(e) {
            for (let n of e.guilds) {
                var t;
                let e = h[n.id];
                if (null == e || "unavailable" === n.data_mode) return;
                h[n.id] = c.fromBackgroundSync(n, e), A[n.id] = "partial" === n.data_mode ? c.filterRoleDeletes(n.id, null !== (t = A[n.id]) && void 0 !== t ? t : R, n.partial_updates.roles, n.partial_updates.deleted_role_ids) : E.sortServerRoles(n.id, n.roles)
            }
            i = Object.keys(h).length
        },
        CONNECTION_OPEN: function(e) {
            m = !0;
            let t = h;
            h = {}, A = {}, i = 0, e.guilds.forEach(e => {
                i++, h[e.id] = c.fromServer(e, t[e.id]), A[e.id] = e.roles instanceof Array ? E.sortServerRoles(e.id, e.roles) : e.roles
            });
            let n = !1;
            if (N.length !== e.geoRestrictedGuilds.length) n = !0;
            else
                for (let t = 0; t < e.geoRestrictedGuilds.length; t++)
                    if (!(0, u.default)(N[t], e.geoRestrictedGuilds[t])) {
                        n = !0;
                        break
                    } n && (N = e.geoRestrictedGuilds)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t;
            h = {}, A = {}, i = 0, null === (t = e.guilds) || void 0 === t || t.forEach(e => {
                i++, h[e.id] = new _.default(e)
            }), A = e.allGuildsRoles
        },
        CACHE_LOADED: function(e) {
            O(e.guilds)
        },
        CACHE_LOADED_LAZY: function(e) {
            if (0 === e.guilds.length) return !1;
            O(e.guilds)
        },
        GUILD_CREATE: function(e) {
            let t = c.fromServer(e.guild, h[e.guild.id]);
            null == h[t.id] && i++, h = {
                ...h,
                [t.id]: t
            }, A[t.id] = e.guild.roles instanceof Array ? E.sortServerRoles(t.id, e.guild.roles) : e.guild.roles
        },
        GUILD_UPDATE: function(e) {
            let t = c.fromServerUpdate(e.guild, h[e.guild.id]);
            null == h[t.id] && i++, h = {
                ...h,
                [t.id]: t
            }, A[t.id] = E.sortServerRoles(t.id, e.guild.roles)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e, n = N.findIndex(e => e.id === t.id);
            if (-1 !== n) {
                N.splice(n, 1), N = [...N];
                return
            }
            if (null == h[t.id] || t.unavailable) return !1;
            h = {
                ...h
            }, delete h[t.id], A[t.id] = void 0, i--
        },
        GUILD_ROLE_CREATE: p,
        GUILD_ROLE_UPDATE: p,
        GUILD_ROLE_DELETE: function(e) {
            let {
                guildId: t,
                roleId: n
            } = e, i = A[t];
            if (null == i) return !1;
            i = {
                ...i
            }, delete i[n], A[t] = i
        },
        GUILD_MEMBER_ADD: function(e) {
            let {
                guildId: t,
                joinedAt: n,
                user: i
            } = e, r = T.default.getId(), s = h[t];
            if (r !== i.id || null == s) return !1;
            let a = "string" == typeof n ? new Date(n) : n;
            if (a === s.joinedAt || null == a) return !1;
            h = {
                ...h,
                [t]: s.updateJoinedAt(a)
            }
        },
        GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
            return !0
        },
        GUILD_GEO_RESTRICTED: function(e) {
            N = [...N, {
                id: e.guildId,
                name: e.name,
                icon: e.icon,
                unavailable: !0,
                geo_restricted: !0
            }]
        }
    })
}