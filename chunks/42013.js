function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Dao: function() {
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
        get(e) {
            return this.table.get([e])
        }
        getMany(e) {
            return this.table.getMany([], e)
        }
        getRange(e, t, n) {
            return this.table.getRange([e], [t], n)
        }
        getKvEntries() {
            return this.table.getKvEntries()
        }
        getMapEntries() {
            return this.table.getMapEntries()
        }
        getIds() {
            return this.table.getChildIds([])
        }
        getParentId(e) {
            return this.table.getParentId([null, e])
        }
        put(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.ConflictOptions.Replace;
            return this.table.put({
                key: [e],
                data: t,
                generation: null
            }, n)
        }
        delete(e) {
            return 0 == arguments.length ? this.table.delete() : this.table.delete([e])
        }
        transaction(e, t) {
            return this.table.transaction(t => e(new a(t)), t)
        }
        upgradeTransaction(e) {
            return new a(this.table.upgradeTransaction(e))
        }
        getManySyncUnsafe(e) {
            return this.table.getManySyncUnsafe([], e)
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
        put(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.ConflictOptions.Replace;
            this.transaction.put({
                key: [e],
                data: t,
                generation: null
            }, n)
        }
        delete(e) {
            return 0 == arguments.length ? this.transaction.delete() : this.transaction.delete([e])
        }
        constructor(e) {
            this.transaction = e
        }
    }
}