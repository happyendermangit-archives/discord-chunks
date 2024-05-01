function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("757143"), n("653041"), n("627494");
    var i = n("710845"),
        r = n("287328");
    let a = new i.default("GuildEmojis");
    t.default = new class e {
        async getAsync(e) {
            let t = performance.now(),
                n = await r.default.emojis(e).getMapEntries(),
                i = performance.now();
            return a.log("asynchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
        }
        handleConnectionOpen(e, t) {
            for (let n of e.guilds) this.handleOneGuildCreate(n, t)
        }
        handleGuildCreate(e, t) {
            this.handleOneGuildCreate(e.guild, t)
        }
        handleGuildUpdate(e, t) {
            this.replace(e.guild.id, e.guild.emojis, t)
        }
        handleGuildDelete(e, t) {
            this.delete(e.guild.id, t)
        }
        handleGuildEmojisUpdate(e, t) {
            this.replace(e.guildId, e.emojis, t)
        }
        handleBackgroundSync(e, t) {
            e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.emojis.map(e => {
                if ("unavailable" === e.dataMode) return Promise.resolve();
                "full" === e.dataMode ? (a.verbose("Replacing ".concat(e.entities.length, " emojis for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (a.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " emojis for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
            })))
        }
        handleOneGuildCreate(e, t) {
            null != e.emojiUpdates ? this.update(e.id, e.emojiUpdates.writes, e.emojiUpdates.deletes, t) : null != e.emojis && this.replace(e.id, e.emojis, t)
        }
        resetInMemoryState() {}
        replace(e, t, n) {
            r.default.emojisTransaction(n).replaceAll(e, t)
        }
        delete(e, t) {
            r.default.emojisTransaction(t).delete(e)
        }
        update(e, t, n, i) {
            let a = r.default.emojisTransaction(i);
            for (let i of (a.putAll(e, t), n)) a.delete(e, i)
        }
        constructor() {
            var e, t, n;
            e = this, t = "actions", n = {
                BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                GUILD_EMOJIS_UPDATE: (e, t) => this.handleGuildEmojisUpdate(e, t),
                GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
            }, t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
    }
}