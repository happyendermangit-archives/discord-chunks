function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("222007");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("605250"),
        l = n("305961");
    let u = new o.default("GuildAvailabilityStore"),
        d = new Set;

    function c(e) {
        d = new Set(e.unavailableGuilds), e.unavailableGuilds.length > 0 && u.warn("".concat(e.unavailableGuilds.length, " guilds are unavailable on connection open: ").concat(e.unavailableGuilds))
    }

    function f(e) {
        if (!d.has(e.guild.id)) return !1;
        d.delete(e.guild.id), u.info("Guild has become available: ".concat(e.guild.id))
    }
    class _ extends r.default.Store {
        initialize() {
            this.waitFor(l.default)
        }
        isUnavailable(e) {
            return null != e && d.has(e)
        }
        get totalGuilds() {
            return s.size(l.default.getGuilds()) + d.size
        }
        get totalUnavailableGuilds() {
            return d.size
        }
        get unavailableGuilds() {
            return Array.from(d)
        }
    }
    _.displayName = "GuildAvailabilityStore";
    var h = new _(a.default, {
        CONNECTION_OPEN: c,
        OVERLAY_INITIALIZE: c,
        GUILD_UNAVAILABLE: function(e) {
            if (d.has(e.guildId)) return !1;
            let t = l.default.getGuild(e.guildId),
                n = "???";
            null != t && null != t.name && (n = t.name), u.warn("Guild has gone unavailable: ".concat(e.guildId, " (").concat(n, ")")), d.add(e.guildId)
        },
        GUILD_DELETE: function(e) {
            !0 !== e.guild.unavailable && d.delete(e.guild.id)
        },
        GUILD_CREATE: f,
        GUILD_UPDATE: f,
        GUILD_GEO_RESTRICTED: function(e) {
            if (!d.has(e.guildId)) return !1;
            d.delete(e.guildId)
        }
    })
}