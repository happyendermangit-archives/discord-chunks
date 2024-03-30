function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Table: function() {
            return l
        },
        TableTransaction: function() {
            return u
        }
    }), n("411104");
    var i = n("503461"),
        r = n("218521");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e, t) {
        return 0 === t.length ? e : {
            key: (0, r.combineKey)(t, e.key),
            data: e.data,
            generation: e.generation
        }
    }

    function o(e, t) {
        return 0 === t.length ? e : e.map(e => a(e, t))
    }
    class l {
        close() {
            this.database.close()
        }
        async get(e) {
            var t;
            return null !== (t = (await this.getMany(e, {
                limit: 1
            }))[0]) && void 0 !== t ? t : null
        }
        getMany() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0;
            return this.database.execute({
                type: "kv.get_many",
                table: this.tableId,
                key: (0, r.combineKeyPrefix)(this.prefix, e),
                ordering: null == t ? void 0 : t.ordering,
                limit: null == t ? void 0 : t.limit
            }, this.defaultDebugTag)
        }
        getRange(e, t, n) {
            let i = (0, r.combineKey)(this.prefix, e),
                s = (0, r.combineKey)(this.prefix, t);
            return this.database.execute({
                type: "kv.get_range",
                table: this.tableId,
                range: [i, s],
                ordering: null == n ? void 0 : n.ordering,
                limit: null == n ? void 0 : n.limit
            }, this.defaultDebugTag)
        }
        getKvEntries() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return this.database.execute({
                type: "kv.get_kv_entries",
                table: this.tableId,
                key: (0, r.combineKeyPrefix)(this.prefix, e)
            }, this.defaultDebugTag)
        }
        getMapEntries() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return this.database.execute({
                type: "kv.get_map_entries",
                table: this.tableId,
                key: (0, r.combineKeyPrefix)(this.prefix, e)
            }, this.defaultDebugTag)
        }
        getChildIds() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return this.database.execute({
                type: "kv.get_child_ids",
                table: this.tableId,
                key: (0, r.combineKeyPrefix)(this.prefix, e)
            }, this.defaultDebugTag)
        }
        getParentId() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return this.database.execute({
                type: "kv.get_parent_id",
                table: this.tableId,
                key: (0, r.combineKey)(this.prefix, e)
            }, this.defaultDebugTag)
        }
        put(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ConflictOptions.Replace;
            return this.database.execute({
                type: "kv.put_one",
                table: this.tableId,
                cell: a(e, this.prefix),
                overwrite: t === i.ConflictOptions.Replace
            }, this.defaultDebugTag)
        }
        putAll(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ConflictOptions.Replace;
            return this.database.execute({
                type: "kv.put_many",
                table: this.tableId,
                cells: o(e, this.prefix),
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
                key: (0, r.combineKeyPrefix)(this.prefix, e)
            }, this.defaultDebugTag)
        }
        deleteRange(e, t) {
            let n = (0, r.combineKey)(this.prefix, e),
                i = (0, r.combineKey)(this.prefix, t);
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
                key: (0, r.combineKeyPrefix)(this.prefix, e),
                generation: n,
                comparer: t
            }, this.defaultDebugTag)
        }
        transaction(e, t) {
            return this.database.transaction(t => e(new u(this.prefix, this.tableId, t)), t)
        }
        upgradeTransaction(e) {
            return new u(this.prefix, this.tableId, e)
        }
        getManySyncUnsafe() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0;
            return this.database.executeSync({
                type: "kv.get_many",
                table: this.tableId,
                key: (0, r.combineKeyPrefix)(this.prefix, e),
                ordering: null == t ? void 0 : t.ordering,
                limit: null == t ? void 0 : t.limit
            })
        }
        getMapEntriesSyncUnsafe() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return this.database.executeSync({
                type: "kv.get_map_entries",
                table: this.tableId,
                key: (0, r.combineKeyPrefix)(this.prefix, e)
            })
        }
        constructor(e, t, n, i) {
            s(this, "prefix", void 0), s(this, "tableId", void 0), s(this, "database", void 0), s(this, "defaultDebugTag", void 0), s(this, "messages", {
                getLatest: e => this.database.execute({
                    type: "messages.get_latest",
                    table: this.tableId,
                    guildId: e
                }, this.defaultDebugTag)
            }), this.prefix = e, this.tableId = t, this.database = n, this.defaultDebugTag = i ? void 0 : null
        }
    }
    class u {
        static fromDatabaseTransaction(e, t, n) {
            return new u(e, t, n)
        }
        put(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ConflictOptions.Replace;
            this.transaction.add({
                type: "kv.put_one",
                table: this.tableId,
                cell: a(e, this.prefix),
                overwrite: t === i.ConflictOptions.Replace
            })
        }
        putAll(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.ConflictOptions.Replace;
            this.transaction.add({
                type: "kv.put_many",
                table: this.tableId,
                cells: o(e, this.prefix),
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
                key: (0, r.combineKeyPrefix)(this.prefix, e)
            })
        }
        deleteRange(e, t) {
            let n = (0, r.combineKey)(this.prefix, e),
                i = (0, r.combineKey)(this.prefix, t);
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
                key: (0, r.combineKeyPrefix)(this.prefix, e),
                generation: n,
                comparer: t
            })
        }
        constructor(e, t, n) {
            s(this, "prefix", void 0), s(this, "tableId", void 0), s(this, "transaction", void 0), s(this, "messages", {
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
                        key: (0, r.combineKey)(this.prefix, e),
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
            }), this.prefix = e, this.tableId = t, this.transaction = n
        }
    }
}