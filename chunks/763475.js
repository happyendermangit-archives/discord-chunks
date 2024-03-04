function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildEntityDao: function() {
            return r
        }
    }), n("686130"), n("781738");
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
        put(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.ConflictOptions.Replace;
            return this.transaction(i => i.put(e, t, n), "".concat(this.prefix, " put"))
        }
        putAll(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.ConflictOptions.Replace;
            return this.transaction(i => i.putAll(e, t, n), "".concat(this.prefix, " putAll"))
        }
        replaceAll(e, t) {
            return this.transaction(n => n.replaceAll(e, t), "".concat(this.prefix, " replaceAll"))
        }
        delete(e, t) {
            return this.transaction(n => n.delete(e, t), "".concat(this.prefix, " delete"))
        }
        deleteGeneration(e, t) {
            return this.transaction(n => n.deleteGeneration(e, t), "".concat(this.prefix, " deleteGeneration"))
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
        static cell(e, t, n) {
            return {
                key: [e, t.id],
                data: t,
                generation: n
            }
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
            return this.putWithGeneration(e, t, null, n)
        }
        putWithGeneration(e, t, n) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.ConflictOptions.Replace;
            return this.transaction.put(r.cell(e, t, n), s)
        }
        putAll(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.ConflictOptions.Replace;
            return this.transaction.putAll(t.map(t => r.cell(e, t, null)), n)
        }
        replaceAll(e, t) {
            this.delete(e), this.putAll(e, t)
        }
        delete(e, t) {
            switch (arguments.length) {
                case 0:
                    return this.transaction.delete([]);
                case 1:
                    return this.transaction.delete([e]);
                default:
                    return this.transaction.delete([e, t])
            }
        }
        deleteGeneration(e, t) {
            return this.transaction.deleteGeneration([], e, t)
        }
        constructor(e) {
            this.transaction = e
        }
    }
}