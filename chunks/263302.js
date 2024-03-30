function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("392711"),
        o = n.n(r),
        i = n("546900"),
        a = n("35523"),
        u = n("63116"),
        s = n("388990"),
        l = n("931983");

    function c(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var d = new a.default("NonGuildVersions"),
        _ = function() {
            var e, t, n;

            function r() {
                var e, t, n, a = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), e = this, t = "actions", n = {
                    CONNECTION_OPEN: function(e, t) {
                        return a.handleConnectionOpen(e, t)
                    },
                    BACKGROUND_SYNC: function(e, t) {
                        return a.handleConnectionOpen(e, t)
                    }
                }, t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, (0, i.isCacheEnabled)() && u.default.addChangeListener(o().throttle(function() {
                    var e;
                    null === (e = l.default.database()) || void 0 === e || e.transaction(function(e) {
                        var t = u.default.getGuildId();
                        null == t || isNaN(Number(t)) ? l.default.nonGuildVersionsTransaction(e).delete("initial_guild_id") : l.default.nonGuildVersionsTransaction(e).put({
                            id: "initial_guild_id",
                            versionString: t
                        })
                    })
                }, 10 * s.default.Millis.SECOND))
            }
            return e = r, t = [{
                key: "getCommittedVersions",
                value: function() {
                    var e;
                    return (e = function() {
                        var e, t, n;
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
                                    if (r.trys.push([0, 2, , 3]), null == (e = l.default.nonGuildVersions())) return [2, {}];
                                    return [4, e.getMany()];
                                case 1:
                                    return [2, Object.fromEntries(null != (t = r.sent().map(function(e) {
                                        return [e.id, "version" in e ? e.version : e.versionString]
                                    })) ? t : [])];
                                case 2:
                                    return n = r.sent(), d.warn("couldn't load guild versions", n), [2, {}];
                                case 3:
                                    return [2]
                            }
                        })
                    }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var i = e.apply(t, n);

                            function a(e) {
                                c(i, r, o, a, u, "next", e)
                            }

                            function u(e) {
                                c(i, r, o, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    })()
                }
            }, {
                key: "handleConnectionOpen",
                value: function(e, t) {
                    null != e.apiCodeVersion && l.default.nonGuildVersionsTransaction(t).put({
                        id: "api_code_version",
                        version: e.apiCodeVersion
                    })
                }
            }, {
                key: "resetInMemoryState",
                value: function() {}
            }], f(e.prototype, t), n && f(e, n), r
        }();
    t.default = new _
}