function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildDao: function() {
            return l
        }
    });
    var r = n("767689"),
        o = n("395077");

    function i(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t && a(e.prototype, t), n && a(e, n), e
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var l = function() {
            function e(t, n, r) {
                var a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                i(this, e), s(this, "originalPrefix", void 0), s(this, "table", void 0), this.originalPrefix = t, this.table = new o.Table([t], n, r, a)
            }
            return u(e, [{
                key: "prefix",
                get: function() {
                    return this.table.prefix
                }
            }, {
                key: "withoutLogging",
                value: function() {
                    return new e(this.originalPrefix, this.table.tableId, this.table.database, !1)
                }
            }, {
                key: "get",
                value: function(e, t) {
                    return this.table.get([e, t])
                }
            }, {
                key: "getMany",
                value: function(e, t) {
                    return this.table.getMany([e], t)
                }
            }, {
                key: "getRange",
                value: function(e, t, n, r) {
                    return this.table.getRange([e, t], [e, n], r)
                }
            }, {
                key: "getKvEntries",
                value: function() {
                    return this.table.getKvEntries()
                }
            }, {
                key: "getMapEntries",
                value: function() {
                    return this.table.getMapEntries()
                }
            }, {
                key: "getIds",
                value: function(e) {
                    return this.table.getChildIds([e])
                }
            }, {
                key: "getGuildIds",
                value: function() {
                    return this.table.getChildIds([])
                }
            }, {
                key: "getGuildId",
                value: function(e) {
                    return this.table.getParentId([null, e])
                }
            }, {
                key: "put",
                value: function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.ConflictOptions.Replace;
                    return this.putWithGeneration(e, t, n, null, o)
                }
            }, {
                key: "putWithGeneration",
                value: function(e, t, n, o) {
                    var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.ConflictOptions.Replace;
                    return this.table.put({
                        key: [e, t],
                        data: n,
                        generation: o
                    }, i)
                }
            }, {
                key: "delete",
                value: function(e, t) {
                    switch (arguments.length) {
                        case 0:
                            return this.table.delete([]);
                        case 1:
                            return this.table.delete([e]);
                        default:
                            return this.table.delete([e, t])
                    }
                }
            }, {
                key: "deleteGeneration",
                value: function(e, t) {
                    return this.table.deleteGeneration([], e, t)
                }
            }, {
                key: "transaction",
                value: function(e, t) {
                    return this.table.transaction(function(t) {
                        return e(new c(t))
                    }, t)
                }
            }, {
                key: "upgradeTransaction",
                value: function(e) {
                    return new c(this.table.upgradeTransaction(e))
                }
            }, {
                key: "getManySyncUnsafe",
                value: function(e, t) {
                    return this.table.getManySyncUnsafe([e], t)
                }
            }, {
                key: "getMapEntriesSyncUnsafe",
                value: function() {
                    return this.table.getMapEntriesSyncUnsafe()
                }
            }]), e
        }(),
        c = function() {
            function e(t) {
                i(this, e), s(this, "state", void 0), this.state = t
            }
            return u(e, [{
                key: "put",
                value: function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.ConflictOptions.Replace;
                    this.putWithGeneration(e, t, n, null, o)
                }
            }, {
                key: "putWithGeneration",
                value: function(e, t, n, o) {
                    var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.ConflictOptions.Replace;
                    return this.state.put({
                        key: [e, t],
                        data: n,
                        generation: o
                    }, i)
                }
            }, {
                key: "delete",
                value: function(e, t) {
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
            }, {
                key: "deleteGeneration",
                value: function(e, t) {
                    return this.state.deleteGeneration([], e, t)
                }
            }], [{
                key: "fromDatabaseTransaction",
                value: function(t, n, r) {
                    return new e(new o.TableTransaction(t, n, r))
                }
            }]), e
        }()
}