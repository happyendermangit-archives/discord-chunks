function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Host: function() {
            return u
        }
    });
    var r = n("313312"),
        o = n("467339");

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
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var u = function() {
        var e, t, n;

        function u() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u)
        }
        return e = u, t = null, n = [{
            key: "open",
            value: function(e, t) {
                return o.Runtime.executeAsync("database_open", function(n) {
                    var o;
                    return r.KV_RAW.databaseOpen(n, {
                        database: e,
                        invalidateDisabledHandles: null !== (o = null == t ? void 0 : t.invalidateDisabledHandles) && void 0 !== o && o
                    })
                })
            }
        }, {
            key: "openSyncUnsafe",
            value: function(e, t) {
                var n;
                return r.KV_RAW.databaseOpen(null, {
                    database: e,
                    invalidateDisabledHandles: null !== (n = null == t ? void 0 : t.invalidateDisabledHandles) && void 0 !== n && n
                }, {
                    synchronous: !0
                })
            }
        }, {
            key: "delete",
            value: function(e) {
                return o.Runtime.executeAsync("database_delete", function(t) {
                    return r.KV_RAW.databaseDelete(t, {
                        database: e
                    })
                })
            }
        }, {
            key: "list",
            value: function() {
                var e;
                return (e = function() {
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
                    }(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, o.Runtime.executeAsync("database_list", function(e) {
                                    return r.KV_RAW.databaseList(e)
                                })];
                            case 1:
                                return [2, e.sent().map(function(e) {
                                    return e.data
                                })]
                        }
                    })
                }, function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var a = e.apply(t, n);

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
            key: "optimize",
            value: function(e) {
                return o.Runtime.executeAsync("database_optimize", function(t) {
                    return r.KV_RAW.databaseOptimize(t, {
                        aggressive: e
                    })
                })
            }
        }, {
            key: "raise",
            value: function(e) {
                r.KV_RAW.raise(e)
            }
        }], t && a(e.prototype, t), n && a(e, n), u
    }()
}