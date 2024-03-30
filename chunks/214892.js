function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageDao: function() {
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
                value: function(e, t, n) {
                    return this.table.get([e, t, d(n)])
                }
            }, {
                key: "getLatest",
                value: function(e, t, n) {
                    return this.table.getMany([e, t], {
                        ordering: r.Ordering.Descending,
                        limit: n
                    })
                }
            }, {
                key: "getRange",
                value: function(e, t, n, r, o) {
                    return this.table.getRange([e, t, d(n)], [e, t, d(r)], o)
                }
            }, {
                key: "getMostRecents",
                value: function(e) {
                    return this.table.messages.getLatest(e)
                }
            }, {
                key: "put",
                value: function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.ConflictOptions.Replace;
                    return this.table.put(f(e, t, n), o)
                }
            }, {
                key: "putAll",
                value: function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.ConflictOptions.Replace,
                        i = n.map(function(n) {
                            return f(e, t, n)
                        });
                    return this.table.putAll(i, o)
                }
            }, {
                key: "deleteAll",
                value: function() {
                    return this.table.delete()
                }
            }, {
                key: "deleteGuild",
                value: function(e) {
                    return this.table.delete([e])
                }
            }, {
                key: "deleteChannel",
                value: function(e, t) {
                    return this.table.delete([e, t])
                }
            }, {
                key: "deleteMessage",
                value: function(e, t, n) {
                    return this.table.delete([e, t, d(n)])
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
            }]), e
        }(),
        c = function() {
            function e(t) {
                i(this, e), s(this, "transaction", void 0), this.transaction = t
            }
            return u(e, [{
                key: "put",
                value: function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.ConflictOptions.Replace;
                    this.transaction.put(f(e, t, n), o)
                }
            }, {
                key: "putAll",
                value: function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.ConflictOptions.Replace,
                        i = n.map(function(n) {
                            return f(e, t, n)
                        });
                    this.transaction.putAll(i, o)
                }
            }, {
                key: "deleteAll",
                value: function() {
                    this.transaction.delete()
                }
            }, {
                key: "deleteGuild",
                value: function(e) {
                    this.transaction.delete([e])
                }
            }, {
                key: "deleteChannel",
                value: function(e, t) {
                    this.transaction.delete([e, t])
                }
            }, {
                key: "deleteMessage",
                value: function(e, t, n) {
                    this.transaction.delete([e, t, d(n)])
                }
            }, {
                key: "trimOrphans",
                value: function(e) {
                    this.transaction.messages.trimOrphans(e)
                }
            }, {
                key: "trimChannel",
                value: function(e, t, n) {
                    this.transaction.messages.trimChannel([e, t], n)
                }
            }, {
                key: "trimChannelsIn",
                value: function(e, t) {
                    this.transaction.messages.trimChannelsIn(e, t)
                }
            }, {
                key: "trimChannelsNotIn",
                value: function(e, t) {
                    this.transaction.messages.trimChannelsNotIn(e, t)
                }
            }], [{
                key: "fromTableTransaction",
                value: function(t) {
                    return new e(t)
                }
            }, {
                key: "fromDatabaseTransaction",
                value: function(t, n, r) {
                    return new e(new o.TableTransaction(t, n, r))
                }
            }]), e
        }();

    function f(e, t, n) {
        var r = d(n.id);
        return {
            key: [e, t, r],
            data: n,
            generation: r
        }
    }

    function d(e) {
        return e.padStart(19, "0")
    }
}