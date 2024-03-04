function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildDao: function() {
            return r
        }
    });
    var i = n("999673"),
        s = n("429231");
    class r {
        get prefix() {
            return this.table.prefix
        }
        withoutLogging() {
            return new r(this.originalPrefix, this.table.tableId, this.table.database, !1)
        }
        get(e, t) {
            return this.table.get([e, t])
        }
        getMany(e, t) {
            return this.table.getMany([e], t)
        }
        getRange(e, t, n, i) {
            return this.table.getRange([e, t], [e, n], i)
        }
        getKvEntries() {
            return this.table.getKvEntries()
        }
        getMapEntries() {
            return this.table.getMapEntries()
        }
        getIds(e) {
            return this.table.getChildIds([e])
        }
        getGuildIds() {
            return this.table.getChildIds([])
        }
        getGuildId(e) {
            return this.table.getParentId([null, e])
        }
        put(e, t, n) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.ConflictOptions.Replace;
            return this.putWithGeneration(e, t, n, null, s)
        }
        putWithGeneration(e, t, n, s) {
            let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.ConflictOptions.Replace;
            return this.table.put({
                key: [e, t],
                data: n,
                generation: s
            }, r)
        }
        delete(e, t) {
            switch (arguments.length) {
                case 0:
                    return this.table.delete([]);
                case 1:
                    return this.table.delete([e]);
                default:
                    return this.table.delete([e, t])
            }
        }
        deleteGeneration(e, t) {
            return this.table.deleteGeneration([], e, t)
        }
        transaction(e, t) {
            return this.table.transaction(t => e(new a(t)), t)
        }
        upgradeTransaction(e) {
            return new a(this.table.upgradeTransaction(e))
        }
        getManySyncUnsafe(e, t) {
            return this.table.getManySyncUnsafe([e], t)
        }
        getMapEntriesSyncUnsafe() {
            return this.table.getMapEntriesSyncUnsafe()
        }
        constructor(e, t, n, i = !0) {
            this.originalPrefix = e, this.table = new s.Table([e], t, n, i)
        }
    }
    class a {
        static fromDatabaseTransaction(e, t, n) {
            return new a(new s.TableTransaction(e, t, n))
        }
        put(e, t, n) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.ConflictOptions.Replace;
            this.putWithGeneration(e, t, n, null, s)
        }
        putWithGeneration(e, t, n, s) {
            let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.ConflictOptions.Replace;
            return this.state.put({
                key: [e, t],
                data: n,
                generation: s
            }, r)
        }
        delete(e, t) {
            switch (arguments.length) {
                case 0:
                    this.state.delete([]);
                    break;
                case 1:
                    this.state.delete([e]);
                    break;
                default:
                    this.state.delete([e, t])
            }
        }
        deleteGeneration(e, t) {
            return this.state.deleteGeneration([], e, t)
        }
        constructor(e) {
            this.state = e
        }
    }
}