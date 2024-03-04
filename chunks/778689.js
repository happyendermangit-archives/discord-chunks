function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144");
    class r extends i.Store {
        allGuildIds() {
            return this.guildIds
        }
        isMember(e) {
            return this.guildIds.has(e)
        }
        handleConnectionOpen(e) {
            this.guildIds = new Set([...e.guilds.map(e => e.id), ...e.unavailableGuilds])
        }
        handleCacheLoaded(e) {
            this.guildIds = new Set(e.guilds.map(e => e.id))
        }
        handleGuildCreate(e) {
            this.guildIds.add(e.guild.id)
        }
        handleGuildDelete(e) {
            !0 !== e.guild.unavailable && this.guildIds.delete(e.guild.id)
        }
        constructor() {
            super(s.default, {
                CACHE_LOADED_LAZY: e => this.handleCacheLoaded(e),
                CACHE_LOADED: e => this.handleCacheLoaded(e),
                CONNECTION_OPEN: e => this.handleConnectionOpen(e),
                GUILD_CREATE: e => this.handleGuildCreate(e),
                GUILD_DELETE: e => this.handleGuildDelete(e)
            }, s.DispatchBand.Early), this.guildIds = new Set
        }
    }
    var a = new r
}