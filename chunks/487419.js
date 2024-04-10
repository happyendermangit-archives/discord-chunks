function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("581883"),
        d = n("430824"),
        _ = n("496675"),
        c = n("983620"),
        E = n("709054"),
        I = n("154285"),
        T = n("533244");
    let f = {},
        S = {};

    function A() {
        var e;
        let t = null !== (e = u.default.getGuildsProto()) && void 0 !== e ? e : {},
            n = d.default.getGuilds(),
            i = E.default.keys(n);
        for (let e of (S = {}, i))(0, I.getGuildAlertModeEnabled)(e).showAlertMode && (S[e] = {
            guildId: e,
            guildName: n[e].name,
            ...t[e]
        })
    }

    function h(e) {
        return null != e && Object.keys(e).length > 0 ? {
            raidDetectedAt: e.raid_detected_at,
            dmSpamDetectedAt: e.dm_spam_detected_at,
            dmsDisabledUntil: e.dms_disabled_until,
            invitesDisabledUntil: e.invites_disabled_until
        } : null
    }
    class m extends(i = o.default.Store) {
        initialize() {
            this.waitFor(u.default, d.default, _.default, c.default), this.syncWith([u.default, d.default, _.default, c.default], A)
        }
        getGuildIncident(e) {
            return f[e]
        }
        getIncidentsByGuild() {
            return f
        }
        getGuildAlertSettings() {
            return S
        }
    }
    a = "GuildIncidentsStore", (s = "displayName") in(r = m) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new m(l.default, {
        CONNECTION_OPEN: function(e) {
            for (let n of (f = {}, e.guilds)) {
                var t;
                let e = h(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
                null != e && ((0, T.hasDetectedActivity)(e) || (0, T.isUnderLockdown)(e)) && (f[n.id] = e)
            }
        },
        GUILD_CREATE: function(e) {
            var t;
            let {
                guild: n
            } = e, i = h(null === (t = n.properties) || void 0 === t ? void 0 : t.incidents_data);
            null != i && ((0, T.hasDetectedActivity)(i) || (0, T.isUnderLockdown)(i)) && (f[n.id] = i)
        },
        GUILD_UPDATE: function(e) {
            let {
                guild: t
            } = e, n = h(t.incidents_data);
            null != n && ((0, T.hasDetectedActivity)(n) || (0, T.isUnderLockdown)(n)) ? f[t.id] = n : delete f[t.id]
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete f[t.id]
        },
        LOGOUT: function(e) {
            f = {}
        }
    })
}