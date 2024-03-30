function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Dao: function() {
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
                value: function(e) {
                    return this.table.get([e])
                }
            }, {
                key: "getMany",
                value: function(e) {
                    return this.table.getMany([], e)
                }
            }, {
                key: "getRange",
                value: function(e, t, n) {
                    return this.table.getRange([e], [t], n)
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
                value: function() {
                    return this.table.getChildIds([])
                }
            }, {
                key: "getParentId",
                value: function(e) {
                    return this.table.getParentId([null, e])
                }
            }, {
                key: "put",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.ConflictOptions.Replace;
                    return this.table.put({
                        key: [e],
                        data: t,
                        generation: null
                    }, n)
                }
            }, {
                key: "delete",
                value: function(e) {
                    return 0 == arguments.length ? this.table.delete() : this.table.delete([e])
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
                value: function(e) {
                    return this.table.getManySyncUnsafe([], e)
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
                i(this, e), s(this, "transaction", void 0), this.transaction = t
            }
            return u(e, [{
                key: "put",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.ConflictOptions.Replace;
                    this.transaction.put({
                        key: [e],
                        data: t,
                        generation: null
                    }, n)
                }
            }, {
                key: "delete",
                value: function(e) {
                    return 0 == arguments.length ? this.transaction.delete() : this.transaction.delete([e])
                }
            }], [{
                key: "fromDatabaseTransaction",
                value: function(t, n, r) {
                    return new e(new o.TableTransaction(t, n, r))
                }
            }]), e
        }()
}