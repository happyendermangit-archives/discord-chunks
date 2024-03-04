function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Table: function() {
            return o
        },
        TableTransaction: function() {
            return l
        }
    }), n("70102");
    var i = n("999673"),
        s = n("481871");

    function r(e, t) {
        return 0 === t.length ? e : {
            key: (0, s.combineKey)(t, e.key),
            data: e.data,
            generation: e.generation
        }
    }

    function a(e, t) {
        return 0 === t.length ? e : e.map(e => r(e, t))
    }
    class o {
        close() {
            this.database.close()
        }
        async get(e) {
            var t;
            let n = await this.getMany(e, {
                limit: 1
            });
            return null !== (t = n[0]) && void 0 !== t ? t : null
        }
        getMany() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0;
            return this.database.execute({
                type: "kv.get_many",
                table: this.tableId,
                key: (0, s.combineKeyPrefix)(this.prefix, e),
                ordering: null == t ? void 0 : t.ordering,
                limit: null == t ? void 0 : t.limit
            }, this.defaultDebugTag)
        }
        getRange(e, t, n) {
            let i = (0, s.combineKey)(this.prefix, e),
                r = (0, s.combineKey)(this.prefix, t);
            return this.database.execute({
                type: "kv.get_range",
                table: this.tableId,
                range: [i, r],
                ordering: null == n ? void 0 : n.ordering,
                limit: null == n ? void 0 : n.limit
            }, this.defaultDebugTag)
        }
        getKvEntries() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return this.database.execute({
                type: "kv.get_kv_entries",
                table: this.tableId,
                key: (0, s.combineKeyPrefix)(this.prefix, e)
            }, this.defaultDebugTag)
        }
        getMapEntries() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return this.database.execute({
                type: "kv.get_map_entries",
                table: this.tableId,
                key: (0, s.combineKeyPrefix)(this.prefix, e)
            }, this.defaultDebugTag)
        }
        getChildIds() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return this.database.execute({
                type: "kv.get_child_ids",
                table: this.tableId,
                key: (0, s.combineKeyPrefix)(this.prefix, e)
            }, this.defaultDebugTag)
        }
        getParentId() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return this.database.execute({
                type: "kv.get_parent_id",
                table: this.tableId,
                key: (0, s.combineKey)(this.prefix, e)
            }, this.defaultDebugTag)
        }
        put(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ConflictOptions.Replace;
            return this.database.execute({
                type: "kv.put_one",
                table: this.tableId,
                cell: r(e, this.prefix),
                overwrite: t === i.ConflictOptions.Replace
            }, this.defaultDebugTag)
        }
        putAll(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ConflictOptions.Replace;
            return this.database.execute({
                type: "kv.put_many",
                table: this.tableId,
                cells: a(e, this.prefix),
                overwrite: t === i.ConflictOptions.Replace
            }, this.defaultDebugTag)
        }
        replaceAll(e) {
            return this.transaction(t => {
                t.delete(), t.putAll(e)
            }, this.defaultDebugTag)
        }
        delete() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return this.database.execute({
                type: "kv.delete_many",
                table: this.tableId,
                key: (0, s.combineKeyPrefix)(this.prefix, e)
            }, this.defaultDebugTag)
        }
        deleteRange(e, t) {
            let n = (0, s.combineKey)(this.prefix, e),
                i = (0, s.combineKey)(this.prefix, t);
            return this.database.execute({
                type: "kv.delete_range",
                table: this.tableId,
                range: [n, i]
            }, this.defaultDebugTag)
        }
        deleteGeneration() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 ? arguments[2] : void 0;
            return this.database.execute({
                type: "kv.delete_generation",
                table: this.tableId,
                key: (0, s.combineKeyPrefix)(this.prefix, e),
                generation: n,
                comparer: t
            }, this.defaultDebugTag)
        }
        transaction(e, t) {
            return this.database.transaction(t => e(new l(this.prefix, this.tableId, t)), t)
        }
        upgradeTransaction(e) {
            return new l(this.prefix, this.tableId, e)
        }
        getManySyncUnsafe() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0;
            return this.database.executeSync({
                type: "kv.get_many",
                table: this.tableId,
                key: (0, s.combineKeyPrefix)(this.prefix, e),
                ordering: null == t ? void 0 : t.ordering,
                limit: null == t ? void 0 : t.limit
            })
        }
        getMapEntriesSyncUnsafe() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return this.database.executeSync({
                type: "kv.get_map_entries",
                table: this.tableId,
                key: (0, s.combineKeyPrefix)(this.prefix, e)
            })
        }
        constructor(e, t, n, i) {
            this.messages = {
                getLatest: e => this.database.execute({
                    type: "messages.get_latest",
                    table: this.tableId,
                    guildId: e
                }, this.defaultDebugTag)
            }, this.prefix = e, this.tableId = t, this.database = n, this.defaultDebugTag = i ? void 0 : null
        }
    }
    class l {
        static fromDatabaseTransaction(e, t, n) {
            return new l(e, t, n)
        }
        put(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ConflictOptions.Replace;
            this.transaction.add({
                type: "kv.put_one",
                table: this.tableId,
                cell: r(e, this.prefix),
                overwrite: t === i.ConflictOptions.Replace
            })
        }
        putAll(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ConflictOptions.Replace;
            this.transaction.add({
                type: "kv.put_many",
                table: this.tableId,
                cells: a(e, this.prefix),
                overwrite: t === i.ConflictOptions.Replace
            })
        }
        replaceAll(e) {
            this.delete(), this.putAll(e)
        }
        delete() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            this.transaction.add({
                type: "kv.delete_many",
                table: this.tableId,
                key: (0, s.combineKeyPrefix)(this.prefix, e)
            })
        }
        deleteRange(e, t) {
            let n = (0, s.combineKey)(this.prefix, e),
                i = (0, s.combineKey)(this.prefix, t);
            this.transaction.add({
                type: "kv.delete_range",
                table: this.tableId,
                range: [n, i]
            })
        }
        deleteGeneration() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 ? arguments[2] : void 0;
            this.transaction.add({
                type: "kv.delete_generation",
                table: this.tableId,
                key: (0, s.combineKeyPrefix)(this.prefix, e),
                generation: n,
                comparer: t
            })
        }
        constructor(e, t, n) {
            this.messages = {
                trimOrphans: e => {
                    if (1 !== this.prefix.length || 1 !== e.length) throw Error("trimOrphans: only one prefix component is supported at this time");
                    this.transaction.add({
                        type: "messages.trim_orphans",
                        table: this.tableId,
                        channelKey: e[0],
                        messageKey: this.prefix[0]
                    })
                },
                trimChannel: (e, t) => {
                    this.transaction.add({
                        type: "messages.trim_channel",
                        table: this.tableId,
                        key: (0, s.combineKey)(this.prefix, e),
                        limit: t
                    })
                },
                trimChannelsIn: (e, t) => {
                    if (1 !== this.prefix.length || 1 !== e.length) throw Error("trimChannelsIn: only one prefix component is supported at this time");
                    this.transaction.add({
                        type: "messages.trim_channels_in",
                        table: this.tableId,
                        channelKey: e[0],
                        messageKey: this.prefix[0],
                        limit: t
                    })
                },
                trimChannelsNotIn: (e, t) => {
                    if (1 !== this.prefix.length || 1 !== e.length) throw Error("trimChannelsNotIn: only one prefix component is supported at this time");
                    this.transaction.add({
                        type: "messages.trim_channels_not_in",
                        table: this.tableId,
                        channelKey: e[0],
                        messageKey: this.prefix[0],
                        limit: t
                    })
                }
            }, this.prefix = e, this.tableId = t, this.transaction = n
        }
    }
}