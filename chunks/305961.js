function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return I
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
        m = !1,
        p = [];

    function S(e) {
        g = {}, i = 0, null != e.guilds && r.forEach(e.guilds, e => {
            i++, g[e.id] = d.fromSerializedGuildRecord(e)
        })
    }

    function v(e) {
        let {
            guildId: t,
            role: n
        } = e, i = g[t];
        null != i && (g = {
            ...g,
            [i.id]: i.upsertRole(c.fromServerRole(n))
        })
    }
    class T extends a.default.Store {
        getGuild(e) {
            if (null != e) return e === h.FAVORITES ? E.FAVORITES_GUILD_RECORD : g[e]
        }
        getGuilds() {
            return g
        }
        getGuildIds() {
            return f.default.keys(g)
        }
        getGuildCount() {
            return i
        }
        isLoaded() {
            return m
        }
        getGeoRestrictedGuilds() {
            return p
        }
    }
    T.displayName = "GuildStore";
    var I = new T(l.default, {
        BACKGROUND_SYNC: function(e) {
            for (let t of e.guilds) {
                let e = g[t.id];
                if (null == e || "unavailable" === t.data_mode) return;
                g[t.id] = d.fromBackgroundSync(t, e)
            }
            i = Object.keys(g).length
        },
        CONNECTION_OPEN: function(e) {
            m = !0, g = {}, i = 0, e.guilds.forEach(e => {
                i++, g[e.id] = d.fromServer(e)
            });
            let t = !1;
            if (p.length !== e.geoRestrictedGuilds.length) t = !0;
            else
                for (let n = 0; n < e.geoRestrictedGuilds.length; n++)
                    if (!(0, o.default)(p[n], e.geoRestrictedGuilds[n])) {
                        t = !0;
                        break
                    } t && (p = e.geoRestrictedGuilds)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t;
            g = {}, i = 0, null === (t = e.guilds) || void 0 === t || t.forEach(e => {
                i++, g[e.id] = new u.default(e)
            })
        },
        CACHE_LOADED: S,
        CACHE_LOADED_LAZY: S,
        GUILD_CREATE: function(e) {
            let t = d.fromServer(e.guild, g[e.guild.id]);
            null == g[t.id] && i++, g = {
                ...g,
                [t.id]: t
            }
        },
        GUILD_UPDATE: function(e) {
            let t = d.fromServerUpdate(e.guild, g[e.guild.id]);
            null == g[t.id] && i++, g = {
                ...g,
                [t.id]: t
            }
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e, n = p.findIndex(e => e.id === t.id);
            if (-1 !== n) {
                p.splice(n, 1), p = [...p];
                return
            }
            if (null == g[t.id] || t.unavailable) return !1;
            g = {
                ...g
            }, delete g[t.id], i--
        },
        GUILD_ROLE_CREATE: v,
        GUILD_ROLE_UPDATE: v,
        GUILD_ROLE_DELETE: function(e) {
            let {
                guildId: t,
                roleId: n
            } = e, i = g[t];
            null != i && (g = {
                ...g,
                [t]: i.deleteRole(n)
            })
        },
        GUILD_MEMBER_ADD: function(e) {
            let {
                guildId: t,
                joinedAt: n,
                user: i
            } = e, s = _.default.getId(), r = g[t];
            if (s !== i.id || null == r) return !1;
            let a = "string" == typeof n ? new Date(n) : n;
            if (a === r.joinedAt || null == a) return !1;
            g = {
                ...g,
                [t]: r.updateJoinedAt(a)
            }
        },
        GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
            return !0
        },
        GUILD_GEO_RESTRICTED: function(e) {
            p = [...p, {
                id: e.guildId,
                name: e.name,
                icon: e.icon,
                unavailable: !0,
                geo_restricted: !0
            }]
        }
    })
}