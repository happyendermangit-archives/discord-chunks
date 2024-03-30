function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("35523"),
        o = n("931983"),
        i = n("883916");

    function a(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function u(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function u(e) {
                    a(i, r, o, u, s, "next", e)
                }

                function s(e) {
                    a(i, r, o, u, s, "throw", e)
                }
                u(void 0)
            })
        }
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
    var f = new r.default("KvCacheVersion"),
        d = function() {
            var e, t, n;

            function r() {
                var e = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), l(this, "hasSuccessfullyConnected", !1), l(this, "actions", {
                    BACKGROUND_SYNC: function(t, n) {
                        return e.handleWrite(n)
                    },
                    CONNECTION_OPEN: function() {
                        return e.handleConnectionOpen()
                    },
                    WRITE_CACHES: function(t, n) {
                        return e.handleWrite(n)
                    }
                })
            }
            return e = r, t = [{
                key: "okAsync",
                value: function(e) {
                    return u(function() {
                        var t;
                        return c(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, o.default.cache(e).get(i.VERSION_TO_SKIP_READING_THE_DATABASE_KEY)];
                                case 1:
                                    return [2, null == (t = n.sent()) ? null : t === i.VERSION_TO_SKIP_READING_THE_DATABASE]
                            }
                        })
                    })()
                }
            }, {
                key: "canUseGuildVersions",
                value: function() {
                    return this.hasSuccessfullyConnected ? Promise.resolve(!0) : this.doesDatabaseVersionMatchJsConstants()
                }
            }, {
                key: "doesDatabaseVersionMatchJsConstants",
                value: function() {
                    return u(function() {
                        var e, t, n;
                        return c(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (null == (e = o.default.forceResyncVersion())) return [2, !1];
                                    return [4, e.get(i.VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY)];
                                case 1:
                                    if ((n = null == (t = r.sent()) ? void 0 : t.version) === i.VERSION_TO_FORCE_RESYNCING_ALL_DATA) return [2, !0];
                                    return f.info("KVStore version mismatch: ".concat(n, " vs ").concat(i.VERSION_TO_FORCE_RESYNCING_ALL_DATA)), [2, !1]
                            }
                        })
                    })()
                }
            }, {
                key: "handleClear",
                value: function() {
                    this.hasSuccessfullyConnected = !1
                }
            }, {
                key: "handleConnectionOpen",
                value: function() {
                    this.hasSuccessfullyConnected = !0
                }
            }, {
                key: "handleWrite",
                value: function(e) {
                    this.hasSuccessfullyConnected = !0, o.default.cacheTransaction(e).put(i.HELLO_KEY, "\uD83D\uDC4B"), o.default.cacheTransaction(e).put(i.VERSION_TO_SKIP_READING_THE_DATABASE_KEY, i.VERSION_TO_SKIP_READING_THE_DATABASE), o.default.forceResyncVersionTransaction(e).put(i.VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY, {
                        version: i.VERSION_TO_FORCE_RESYNCING_ALL_DATA
                    })
                }
            }, {
                key: "resetInMemoryState",
                value: function() {
                    this.hasSuccessfullyConnected = !1
                }
            }], s(e.prototype, t), n && s(e, n), r
        }();
    t.default = new d
}