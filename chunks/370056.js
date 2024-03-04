function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageDao: function() {
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
        get(e, t, n) {
            return this.table.get([e, t, l(n)])
        }
        getLatest(e, t, n) {
            return this.table.getMany([e, t], {
                ordering: i.Ordering.Descending,
                limit: n
            })
        }
        getRange(e, t, n, i, s) {
            return this.table.getRange([e, t, l(n)], [e, t, l(i)], s)
        }
        getMostRecents(e) {
            return this.table.messages.getLatest(e)
        }
        put(e, t, n) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.ConflictOptions.Replace;
            return this.table.put(o(e, t, n), s)
        }
        putAll(e, t, n) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.ConflictOptions.Replace,
                r = n.map(n => o(e, t, n));
            return this.table.putAll(r, s)
        }
        deleteAll() {
            return this.table.delete()
        }
        deleteGuild(e) {
            return this.table.delete([e])
        }
        deleteChannel(e, t) {
            return this.table.delete([e, t])
        }
        deleteMessage(e, t, n) {
            return this.table.delete([e, t, l(n)])
        }
        transaction(e, t) {
            return this.table.transaction(t => e(new a(t)), t)
        }
        upgradeTransaction(e) {
            return new a(this.table.upgradeTransaction(e))
        }
        constructor(e, t, n, i = !0) {
            this.originalPrefix = e, this.table = new s.Table([e], t, n, i)
        }
    }
    class a {
        static fromTableTransaction(e) {
            return new a(e)
        }
        static fromDatabaseTransaction(e, t, n) {
            return new a(new s.TableTransaction(e, t, n))
        }
        put(e, t, n) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.ConflictOptions.Replace;
            this.transaction.put(o(e, t, n), s)
        }
        putAll(e, t, n) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : i.ConflictOptions.Replace,
                r = n.map(n => o(e, t, n));
            this.transaction.putAll(r, s)
        }
        deleteAll() {
            this.transaction.delete()
        }
        deleteGuild(e) {
            this.transaction.delete([e])
        }
        deleteChannel(e, t) {
            this.transaction.delete([e, t])
        }
        deleteMessage(e, t, n) {
            this.transaction.delete([e, t, l(n)])
        }
        trimOrphans(e) {
            this.transaction.messages.trimOrphans(e)
        }
        trimChannel(e, t, n) {
            this.transaction.messages.trimChannel([e, t], n)
        }
        trimChannelsIn(e, t) {
            this.transaction.messages.trimChannelsIn(e, t)
        }
        trimChannelsNotIn(e, t) {
            this.transaction.messages.trimChannelsNotIn(e, t)
        }
        constructor(e) {
            this.transaction = e
        }
    }

    function o(e, t, n) {
        let i = l(n.id);
        return {
            key: [e, t, i],
            data: n,
            generation: i
        }
    }

    function l(e) {
        return e.padStart(19, "0")
    }
}