function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Database: function() {
            return m
        }
    });
    var r = n("757167"),
        o = n("541571"),
        i = n("467339"),
        a = n("767689");

    function u(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function s(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    u(i, r, o, a, s, "next", e)
                }

                function s(e) {
                    u(i, r, o, a, s, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function l(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t && c(e.prototype, t), n && c(e, n), e
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                d(e, t, n[t])
            })
        }
        return e
    }

    function E(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function p(e, t) {
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
    }
    var m = function() {
            function e(t) {
                var n = this;
                l(this, e), d(this, "name", void 0), d(this, "handle", void 0), d(this, "raw", void 0), d(this, "lastState", void 0), d(this, "databaseStateCallback", void 0), this.raw = t, this.name = t.name, this.lastState = a.DatabaseState.Open, this.handle = t.handle, this.databaseStateCallback = i.Runtime.addDatabaseStateCallback(function(e, t) {
                    n.handle === e && (n.lastState = t)
                })
            }
            return f(e, [{
                key: "close",
                value: function() {
                    var e;
                    this.lastState = a.DatabaseState.Closed, null === (e = this.raw) || void 0 === e || e.close(), this.raw = null, i.Runtime.removeCompletionCallback(this.databaseStateCallback)
                }
            }, {
                key: "disable",
                value: function(e) {
                    return null == this.raw ? Promise.resolve() : (this.lastState = a.DatabaseState.Disabled, this.execute({
                        type: "db.disable",
                        handle: 0,
                        reason: e
                    }))
                }
            }, {
                key: "execute",
                value: function(e, t) {
                    var n = this;
                    if (null == this.raw) throw Error("database is no longer open (database: ".concat(this));
                    var o = "key" in e ? e.key[0] : e.table,
                        a = function() {
                            return i.Runtime.executeAsync(null != t ? t : e.type, function(t) {
                                n.raw.execute(t, E(_({}, e), {
                                    handle: 0
                                }))
                            })
                        };
                    return null === t ? a() : r.default.timeAsync("\uD83D\uDCBE", "".concat(null != t ? t : e.type, " ").concat(null != o ? o : ""), a)
                }
            }, {
                key: "executeSync",
                value: function(e) {
                    var t = this;
                    if (null == this.raw) throw Error("database is no longer open (database: ".concat(this));
                    var n = "key" in e ? e.key[0] : e.table;
                    return r.default.time("\uD83D\uDCBE", "SYNC: ".concat(e.type, " ").concat(null != n ? n : ""), function() {
                        return t.raw.execute(null, E(_({}, e), {
                            handle: 0
                        }), {
                            synchronous: !0
                        })
                    })
                }
            }, {
                key: "fullVacuum",
                value: function() {
                    return this.execute({
                        type: "db.vacuum",
                        handle: 0,
                        complete: !0
                    })
                }
            }, {
                key: "fsInfo",
                value: function() {
                    return this.execute({
                        type: "db.fs_info",
                        handle: 0
                    })
                }
            }, {
                key: "incrementalVacuum",
                value: function() {
                    return this.execute({
                        type: "db.vacuum",
                        handle: 0,
                        complete: !1
                    })
                }
            }, {
                key: "instantaneousState",
                value: function() {
                    return null == this.raw ? a.DatabaseState.Closed : this.lastState = this.executeSync({
                        type: "db.state"
                    })
                }
            }, {
                key: "instantaneousStateAsync",
                value: function() {
                    var e = this;
                    return s(function() {
                        var t;
                        return p(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (null != e.raw) return [3, 1];
                                    return t = a.DatabaseState.Closed, [3, 3];
                                case 1:
                                    return [4, e.execute({
                                        type: "db.state"
                                    })];
                                case 2:
                                    t = e.lastState = n.sent(), n.label = 3;
                                case 3:
                                    return [2, t]
                            }
                        })
                    })()
                }
            }, {
                key: "state",
                value: function() {
                    return this.lastState
                }
            }, {
                key: "transaction",
                value: function(e, t) {
                    var n = this,
                        r = new y(this);
                    return Promise.resolve(e(r)).then(function() {
                        return r.operations.length > 0 ? n.execute({
                            type: "db.transaction",
                            operations: r.complete()
                        }, t) : Promise.resolve()
                    })
                }
            }], [{
                key: "open",
                value: function(t, n) {
                    return s(function() {
                        var r;
                        return p(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return r = e.bind, [4, o.Host.open(t, n)];
                                case 1:
                                    return [2, new(r.apply(e, [void 0, i.sent()]))]
                            }
                        })
                    })()
                }
            }, {
                key: "openSyncUnsafe",
                value: function(t, n) {
                    return new e(o.Host.openSyncUnsafe(t, n))
                }
            }, {
                key: "delete",
                value: function(e) {
                    return o.Host.delete(e)
                }
            }]), e
        }(),
        y = function() {
            function e(t) {
                l(this, e), d(this, "database", void 0), d(this, "operations", void 0), this.database = t, this.operations = []
            }
            return f(e, [{
                key: "add",
                value: function(e) {
                    this.operations.push(e)
                }
            }, {
                key: "complete",
                value: function() {
                    var e = !0,
                        t = !1,
                        n = void 0;
                    try {
                        for (var r, o = this.operations[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) r.value.handle = 0
                    } catch (e) {
                        t = !0, n = e
                    } finally {
                        try {
                            !e && null != o.return && o.return()
                        } finally {
                            if (t) throw n
                        }
                    }
                    return this.operations
                }
            }, {
                key: "toString",
                value: function() {
                    return "[DatabaseTransaction ".concat(this.database.handle, ": ").concat(this.operations.length, " ops]")
                }
            }]), e
        }()
}