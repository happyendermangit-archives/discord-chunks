function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("757143"), n("653041"), n("627494");
    var i = n("710845"),
        r = n("287328");
    let s = new i.default("GuildStickers");
    t.default = new class e {
        async getAsync(e) {
            let t = performance.now(),
                n = await r.default.stickers(e).getMapEntries(),
                i = performance.now();
            return s.log("asynchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
        }
        handleConnectionOpen(e, t) {
            for (let n of e.guilds) this.handleOneGuildCreate(n, t)
        }
        handleGuildCreate(e, t) {
            this.handleOneGuildCreate(e.guild, t)
        }
        handleGuildUpdate(e, t) {
            this.replace(e.guild.id, e.guild.stickers, t)
        }
        handleGuildDelete(e, t) {
            this.delete(e.guild.id, t)
        }
        handleGuildStickersUpdate(e, t) {
            this.replace(e.guildId, e.stickers, t)
        }
        handleBackgroundSync(e, t) {
            e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                if ("unavailable" === e.dataMode) return Promise.resolve();
                "full" === e.dataMode ? (s.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (s.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
            })))
        }
        handleOneGuildCreate(e, t) {
            null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
        }
        resetInMemoryState() {}
        replace(e, t, n) {
            r.default.stickersTransaction(n).replaceAll(e, t)
        }
        delete(e, t) {
            r.default.stickersTransaction(t).delete(e)
        }
        update(e, t, n, i) {
            let s = r.default.stickersTransaction(i);
            for (let i of (s.putAll(e, t), n)) s.delete(e, i)
        }
        constructor() {
            var e, t, n;
            e = this, t = "actions", n = {
                BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
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