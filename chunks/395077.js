function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Table: function() {
            return d
        },
        TableTransaction: function() {
            return _
        }
    });
    var r = n("767689"),
        o = n("753478");

    function i(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function a(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t && u(e.prototype, t), n && u(e, n), e
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e, t) {
        return 0 === t.length ? e : {
            key: (0, o.combineKey)(t, e.key),
            data: e.data,
            generation: e.generation
        }
    }

    function f(e, t) {
        return 0 === t.length ? e : e.map(function(e) {
            return c(e, t)
        })
    }
    var d = function() {
            function e(t, n, r, o) {
                var i = this;
                a(this, e), l(this, "prefix", void 0), l(this, "tableId", void 0), l(this, "database", void 0), l(this, "defaultDebugTag", void 0), l(this, "messages", {
                    getLatest: function(e) {
                        return i.database.execute({
                            type: "messages.get_latest",
                            table: i.tableId,
                            guildId: e
                        }, i.defaultDebugTag)
                    }
                }), this.prefix = t, this.tableId = n, this.database = r, this.defaultDebugTag = o ? void 0 : null
            }
            return s(e, [{
                key: "close",
                value: function() {
                    this.database.close()
                }
            }, {
                key: "get",
                value: function(e) {
                    var t, n = this;
                    return (t = function() {
                        var t;
                        return function(e, t) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: u(0),
                                throw: u(1),
                                return: u(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function u(i) {
                                return function(u) {
                                    return function(i) {
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; a;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                        a.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && a.label < o[1]) {
                                                        a.label = o[1], o = i;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(i);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, a)
                                        } catch (e) {
                                            i = [6, e], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, u])
                                }
                            }
                        }(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, n.getMany(e, {
                                        limit: 1
                                    })];
                                case 1:
                                    return [2, null !== (t = r.sent()[0]) && void 0 !== t ? t : null]
                            }
                        })
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var a = t.apply(e, n);

                            function u(e) {
                                i(a, r, o, u, s, "next", e)
                            }

                            function s(e) {
                                i(a, r, o, u, s, "throw", e)
                            }
                            u(void 0)
                        })
                    })()
                }
            }, {
                key: "getMany",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return this.database.execute({
                        type: "kv.get_many",
                        table: this.tableId,
                        key: (0, o.combineKeyPrefix)(this.prefix, e),
                        ordering: null == t ? void 0 : t.ordering,
                        limit: null == t ? void 0 : t.limit
                    }, this.defaultDebugTag)
                }
            }, {
                key: "getRange",
                value: function(e, t, n) {
                    var r = (0, o.combineKey)(this.prefix, e),
                        i = (0, o.combineKey)(this.prefix, t);
                    return this.database.execute({
                        type: "kv.get_range",
                        table: this.tableId,
                        range: [r, i],
                        ordering: null == n ? void 0 : n.ordering,
                        limit: null == n ? void 0 : n.limit
                    }, this.defaultDebugTag)
                }
            }, {
                key: "getKvEntries",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this.database.execute({
                        type: "kv.get_kv_entries",
                        table: this.tableId,
                        key: (0, o.combineKeyPrefix)(this.prefix, e)
                    }, this.defaultDebugTag)
                }
            }, {
                key: "getMapEntries",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this.database.execute({
                        type: "kv.get_map_entries",
                        table: this.tableId,
                        key: (0, o.combineKeyPrefix)(this.prefix, e)
                    }, this.defaultDebugTag)
                }
            }, {
                key: "getChildIds",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this.database.execute({
                        type: "kv.get_child_ids",
                        table: this.tableId,
                        key: (0, o.combineKeyPrefix)(this.prefix, e)
                    }, this.defaultDebugTag)
                }
            }, {
                key: "getParentId",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this.database.execute({
                        type: "kv.get_parent_id",
                        table: this.tableId,
                        key: (0, o.combineKey)(this.prefix, e)
                    }, this.defaultDebugTag)
                }
            }, {
                key: "put",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.ConflictOptions.Replace;
                    return this.database.execute({
                        type: "kv.put_one",
                        table: this.tableId,
                        cell: c(e, this.prefix),
                        overwrite: t === r.ConflictOptions.Replace
                    }, this.defaultDebugTag)
                }
            }, {
                key: "putAll",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.ConflictOptions.Replace;
                    return this.database.execute({
                        type: "kv.put_many",
                        table: this.tableId,
                        cells: f(e, this.prefix),
                        overwrite: t === r.ConflictOptions.Replace
                    }, this.defaultDebugTag)
                }
            }, {
                key: "replaceAll",
                value: function(e) {
                    return this.transaction(function(t) {
                        t.delete(), t.putAll(e)
                    }, this.defaultDebugTag)
                }
            }, {
                key: "delete",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this.database.execute({
                        type: "kv.delete_many",
                        table: this.tableId,
                        key: (0, o.combineKeyPrefix)(this.prefix, e)
                    }, this.defaultDebugTag)
                }
            }, {
                key: "deleteRange",
                value: function(e, t) {
                    var n = (0, o.combineKey)(this.prefix, e),
                        r = (0, o.combineKey)(this.prefix, t);
                    return this.database.execute({
                        type: "kv.delete_range",
                        table: this.tableId,
                        range: [n, r]
                    }, this.defaultDebugTag)
                }
            }, {
                key: "deleteGeneration",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return this.database.execute({
                        type: "kv.delete_generation",
                        table: this.tableId,
                        key: (0, o.combineKeyPrefix)(this.prefix, e),
                        generation: n,
                        comparer: t
                    }, this.defaultDebugTag)
                }
            }, {
                key: "transaction",
                value: function(e, t) {
                    var n = this;
                    return this.database.transaction(function(t) {
                        return e(new _(n.prefix, n.tableId, t))
                    }, t)
                }
            }, {
                key: "upgradeTransaction",
                value: function(e) {
                    return new _(this.prefix, this.tableId, e)
                }
            }, {
                key: "getManySyncUnsafe",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return this.database.executeSync({
                        type: "kv.get_many",
                        table: this.tableId,
                        key: (0, o.combineKeyPrefix)(this.prefix, e),
                        ordering: null == t ? void 0 : t.ordering,
                        limit: null == t ? void 0 : t.limit
                    })
                }
            }, {
                key: "getMapEntriesSyncUnsafe",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this.database.executeSync({
                        type: "kv.get_map_entries",
                        table: this.tableId,
                        key: (0, o.combineKeyPrefix)(this.prefix, e)
                    })
                }
            }]), e
        }(),
        _ = function() {
            function e(t, n, r) {
                var i = this;
                a(this, e), l(this, "prefix", void 0), l(this, "tableId", void 0), l(this, "transaction", void 0), l(this, "messages", {
                    trimOrphans: function(e) {
                        if (1 !== i.prefix.length || 1 !== e.length) throw Error("trimOrphans: only one prefix component is supported at this time");
                        i.transaction.add({
                            type: "messages.trim_orphans",
                            table: i.tableId,
                            channelKey: e[0],
                            messageKey: i.prefix[0]
                        })
                    },
                    trimChannel: function(e, t) {
                        i.transaction.add({
                            type: "messages.trim_channel",
                            table: i.tableId,
                            key: (0, o.combineKey)(i.prefix, e),
                            limit: t
                        })
                    },
                    trimChannelsIn: function(e, t) {
                        if (1 !== i.prefix.length || 1 !== e.length) throw Error("trimChannelsIn: only one prefix component is supported at this time");
                        i.transaction.add({
                            type: "messages.trim_channels_in",
                            table: i.tableId,
                            channelKey: e[0],
                            messageKey: i.prefix[0],
                            limit: t
                        })
                    },
                    trimChannelsNotIn: function(e, t) {
                        if (1 !== i.prefix.length || 1 !== e.length) throw Error("trimChannelsNotIn: only one prefix component is supported at this time");
                        i.transaction.add({
                            type: "messages.trim_channels_not_in",
                            table: i.tableId,
                            channelKey: e[0],
                            messageKey: i.prefix[0],
                            limit: t
                        })
                    }
                }), this.prefix = t, this.tableId = n, this.transaction = r
            }
            return s(e, [{
                key: "put",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.ConflictOptions.Replace;
                    this.transaction.add({
                        type: "kv.put_one",
                        table: this.tableId,
                        cell: c(e, this.prefix),
                        overwrite: t === r.ConflictOptions.Replace
                    })
                }
            }, {
                key: "putAll",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.ConflictOptions.Replace;
                    this.transaction.add({
                        type: "kv.put_many",
                        table: this.tableId,
                        cells: f(e, this.prefix),
                        overwrite: t === r.ConflictOptions.Replace
                    })
                }
            }, {
                key: "replaceAll",
                value: function(e) {
                    this.delete(), this.putAll(e)
                }
            }, {
                key: "delete",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    this.transaction.add({
                        type: "kv.delete_many",
                        table: this.tableId,
                        key: (0, o.combineKeyPrefix)(this.prefix, e)
                    })
                }
            }, {
                key: "deleteRange",
                value: function(e, t) {
                    var n = (0, o.combineKey)(this.prefix, e),
                        r = (0, o.combineKey)(this.prefix, t);
                    this.transaction.add({
                        type: "kv.delete_range",
                        table: this.tableId,
                        range: [n, r]
                    })
                }
            }, {
                key: "deleteGeneration",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    this.transaction.add({
                        type: "kv.delete_generation",
                        table: this.tableId,
                        key: (0, o.combineKeyPrefix)(this.prefix, e),
                        generation: n,
                        comparer: t
                    })
                }
            }], [{
                key: "fromDatabaseTransaction",
                value: function(t, n, r) {
                    return new e(t, n, r)
                }
            }]), e
        }()
}