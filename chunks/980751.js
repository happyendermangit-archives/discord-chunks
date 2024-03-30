function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("931983");

    function o(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var a = function() {
        var e, t, n;

        function a() {
            var e, t, n, r = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, a), e = this, t = "actions", n = {
                BACKGROUND_SYNC: function(e, t) {
                    return r.handleBackgroundSync(e, t)
                },
                CONNECTION_OPEN: function(e, t) {
                    return r.handleConnectionOpen(e, t)
                },
                GUILD_CREATE: function(e, t) {
                    return r.handleGuildCreate(e, t)
                },
                DELETED_ENTITY_IDS: function(e, t) {
                    return r.handleDeletedEntityIds(e, t)
                }
            }, t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
        return e = a, t = [{
            key: "getAll",
            value: function() {
                var e;
                return (e = function() {
                    var e, t;
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
                    }(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (null == (e = r.default.guildsRequiringDeletedIdsSync())) return [2, new Set];
                                return [4, e.getMany()];
                            case 1:
                                return t = n.sent(), [2, new Set(t.map(function(e) {
                                    return e.id
                                }))]
                        }
                    })
                }, function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, i) {
                        var a = e.apply(t, n);

                        function u(e) {
                            o(a, r, i, u, s, "next", e)
                        }

                        function s(e) {
                            o(a, r, i, u, s, "throw", e)
                        }
                        u(void 0)
                    })
                })()
            }
        }, {
            key: "handleConnectionOpen",
            value: function(e, t) {
                var n = e.guilds.filter(function(e) {
                    return e.unableToSyncDeletes
                }).map(function(e) {
                    return {
                        id: e.id
                    }
                });
                n.length > 0 && r.default.guildsRequiringDeletedIdsSyncTransaction(t).putAll(n)
            }
        }, {
            key: "handleBackgroundSync",
            value: function(e, t) {
                var n = e.guilds.filter(function(e) {
                    return "partial" === e.data_mode && e.unableToSyncDeletes
                }).map(function(e) {
                    return {
                        id: e.id
                    }
                });
                n.length > 0 && r.default.guildsRequiringDeletedIdsSyncTransaction(t).putAll(n)
            }
        }, {
            key: "handleGuildCreate",
            value: function(e, t) {
                var n = e.guild;
                n.unableToSyncDeletes && r.default.guildsRequiringDeletedIdsSyncTransaction(t).put({
                    id: n.id
                })
            }
        }, {
            key: "handleDeletedEntityIds",
            value: function(e, t) {
                r.default.guildsRequiringDeletedIdsSyncTransaction(t).delete(e.guild_id)
            }
        }, {
            key: "resetInMemoryState",
            value: function() {}
        }], i(e.prototype, t), n && i(e, n), a
    }();
    t.default = new a
}