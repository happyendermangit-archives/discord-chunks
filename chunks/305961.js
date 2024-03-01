function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("222007");
    var r = n("917351"),
        s = n.n(r),
        a = n("446674"),
        o = n("233736"),
        l = n("913144"),
        u = n("813006"),
        c = n("665618"),
        d = n("605136"),
        f = n("299039"),
        E = n("271938"),
        p = n("49111"),
        h = n("695838");
    let _ = {},
        S = !1,
        m = [];

    function T(e) {
        _ = {}, i = 0, null != e.guilds && s.forEach(e.guilds, e => {
            i++, _[e.id] = c.fromSerializedGuildRecord(e)
        })
    }

    function g(e) {
        let {
            guildId: t,
            role: n
        } = e, i = _[t];
        null != i && (_ = {
            ..._,
            [i.id]: i.upsertRole(d.fromServerRole(n))
        })
    }
    class I extends a.default.Store {
        getGuild(e) {
            if (null != e) return e === p.FAVORITES ? h.FAVORITES_GUILD_RECORD : _[e]
        }
        getGuilds() {
            return _
        }
        getGuildIds() {
            return f.default.keys(_)
        }
        getGuildCount() {
            return i
        }
        isLoaded() {
            return S
        }
        getGeoRestrictedGuilds() {
            return m
        }
    }
    I.displayName = "GuildStore";
    var C = new I(l.default, {
        BACKGROUND_SYNC: function(e) {
            for (let t of e.guilds) {
                let e = _[t.id];
                if (null == e || "unavailable" === t.data_mode) return;
                _[t.id] = c.fromBackgroundSync(t, e)
            }
            i = Object.keys(_).length
        },
        CONNECTION_OPEN: function(e) {
            S = !0, _ = {}, i = 0, e.guilds.forEach(e => {
                i++, _[e.id] = c.fromServer(e)
            });
            let t = !1;
            if (m.length !== e.geoRestrictedGuilds.length) t = !0;
            else
                for (let n = 0; n < e.geoRestrictedGuilds.length; n++)
                    if (!(0, o.default)(m[n], e.geoRestrictedGuilds[n])) {
                        t = !0;
                        break
                    } t && (m = e.geoRestrictedGuilds)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t;
            _ = {}, i = 0, null === (t = e.guilds) || void 0 === t || t.forEach(e => {
                i++, _[e.id] = new u.default(e)
            })
        },
        CACHE_LOADED: T,
        CACHE_LOADED_LAZY: T,
        GUILD_CREATE: function(e) {
            let t = c.fromServer(e.guild, _[e.guild.id]);
            null == _[t.id] && i++, _ = {
                ..._,
                [t.id]: t
            }
        },
        GUILD_UPDATE: function(e) {
            let t = c.fromServerUpdate(e.guild, _[e.guild.id]);
            null == _[t.id] && i++, _ = {
                ..._,
                [t.id]: t
            }
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e, n = m.findIndex(e => e.id === t.id);
            if (-1 !== n) {
                m.splice(n, 1), m = [...m];
                return
            }
            if (null == _[t.id] || t.unavailable) return !1;
            _ = {
                ..._
            }, delete _[t.id], i--
        },
        GUILD_ROLE_CREATE: g,
        GUILD_ROLE_UPDATE: g,
        GUILD_ROLE_DELETE: function(e) {
            let {
                guildId: t,
                roleId: n
            } = e, i = _[t];
            null != i && (_ = {
                ..._,
                [t]: i.deleteRole(n)
            })
        },
        GUILD_MEMBER_ADD: function(e) {
            let {
                guildId: t,
                joinedAt: n,
                user: i
            } = e, r = E.default.getId(), s = _[t];
            if (r !== i.id || null == s) return !1;
            let a = "string" == typeof n ? new Date(n) : n;
            if (a === s.joinedAt || null == a) return !1;
            _ = {
                ..._,
                [t]: s.updateJoinedAt(a)
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