function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("287328");
    t.default = new class e {
        async getAll() {
            let e = i.default.guildsRequiringDeletedIdsSync();
            if (null == e) return new Set;
            let t = await e.getMany();
            return new Set(t.map(e => e.id))
        }
        handleConnectionOpen(e, t) {
            let {
                guilds: n
            } = e, r = n.filter(e => e.unableToSyncDeletes).map(e => ({
                id: e.id
            }));
            r.length > 0 && i.default.guildsRequiringDeletedIdsSyncTransaction(t).putAll(r)
        }
        handleBackgroundSync(e, t) {
            let {
                guilds: n
            } = e, r = n.filter(e => "partial" === e.data_mode && e.unableToSyncDeletes).map(e => ({
                id: e.id
            }));
            r.length > 0 && i.default.guildsRequiringDeletedIdsSyncTransaction(t).putAll(r)
        }
        handleGuildCreate(e, t) {
            let {
                guild: n
            } = e;
            n.unableToSyncDeletes && i.default.guildsRequiringDeletedIdsSyncTransaction(t).put({
                id: n.id
            })
        }
        handleDeletedEntityIds(e, t) {
            i.default.guildsRequiringDeletedIdsSyncTransaction(t).delete(e.guild_id)
        }
        resetInMemoryState() {}
        constructor() {
            var e, t, n;
            e = this, t = "actions", n = {
                BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                DELETED_ENTITY_IDS: (e, t) => this.handleDeletedEntityIds(e, t)
            }, t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
    }
}