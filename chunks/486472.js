function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("710845"),
        c = n("430824");
    let E = new _.default("GuildAvailabilityStore"),
        I = new Set;

    function T(e) {
        I = new Set(e.unavailableGuilds), e.unavailableGuilds.length > 0 && E.warn("".concat(e.unavailableGuilds.length, " guilds are unavailable on connection open: ").concat(e.unavailableGuilds))
    }

    function f(e) {
        if (!I.has(e.guild.id)) return !1;
        I.delete(e.guild.id), E.info("Guild has become available: ".concat(e.guild.id))
    }
    class S extends(i = u.default.Store) {
        initialize() {
            this.waitFor(c.default)
        }
        isUnavailable(e) {
            return null != e && I.has(e)
        }
        get totalGuilds() {
            return l().size(c.default.getGuilds()) + I.size
        }
        get totalUnavailableGuilds() {
            return I.size
        }
        get unavailableGuilds() {
            return Array.from(I)
        }
    }
    a = "GuildAvailabilityStore", (s = "displayName") in(r = S) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new S(d.default, {
        CONNECTION_OPEN: T,
        OVERLAY_INITIALIZE: T,
        GUILD_UNAVAILABLE: function(e) {
            if (I.has(e.guildId)) return !1;
            let t = c.default.getGuild(e.guildId),
                n = "???";
            null != t && null != t.name && (n = t.name), E.warn("Guild has gone unavailable: ".concat(e.guildId, " (").concat(n, ")")), I.add(e.guildId)
        },
        GUILD_DELETE: function(e) {
            !0 !== e.guild.unavailable && I.delete(e.guild.id)
        },
        GUILD_CREATE: f,
        GUILD_UPDATE: f,
        GUILD_GEO_RESTRICTED: function(e) {
            if (!I.has(e.guildId)) return !1;
            I.delete(e.guildId)
        }
    })
}