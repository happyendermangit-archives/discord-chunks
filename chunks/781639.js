function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("898511"),
        o = n("560412"),
        i = n("629815"),
        a = n("35523"),
        u = n("217014"),
        s = n("376631");

    function l(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

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

    function f(e) {
        return function() {
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
        }
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function m(e, t) {
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
    var y = new a.default("DatabaseManager"),
        I = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t)
            }(T, e);
            var t, n, r, a, c, I = (t = T, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = E(t);
                if (n) {
                    var a = E(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : l(e)
            });

            function T() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, T), _(l(e = I.call(this, i.default, {
                    CLEAR_CACHES: function(t) {
                        return e.handleClearCaches(t)
                    },
                    CONNECTION_CLOSED: function() {
                        return e.handleAuthenticationStoreChanged()
                    },
                    CONNECTION_OPEN: function() {
                        return e.handleConnectionOpen()
                    },
                    LOGOUT: function() {
                        return e.handleAuthenticationStoreChanged()
                    }
                }, i.DispatchBand.Early)), "databases", new Map), _(l(e), "activeUserId", null), _(l(e), "preventWritingCachesAgainThisSession", !1), e
            }
            return r = T, a = [{
                key: "initialize",
                value: function() {
                    var e = this;
                    this.waitFor(u.default), this.carefullySpeculativelyOpen(s.getUserId()), this.handleAuthenticationStoreChanged(), u.default.addChangeListener(function() {
                        return e.handleAuthenticationStoreChanged()
                    })
                }
            }, {
                key: "databaseName",
                value: function(e) {
                    return h(e)
                }
            }, {
                key: "database",
                value: function(e) {
                    if (null != e) {
                        var t;
                        return null !== (t = this.databases.get(e)) && void 0 !== t ? t : null
                    }
                    return null
                }
            }, {
                key: "carefullyOpenDatabase",
                value: function(e) {
                    if (this.preventWritingCachesAgainThisSession) return y.verbose("Not opening database because caches have been manually cleared."), null;
                    if (null != e && !this.databases.has(e)) {
                        var t = function(e) {
                            var t;
                            return null
                        }(e);
                        y.verbose("added database (".concat(e, " → ").concat(t, ")")), this.databases.set(e, t), this.emitChange()
                    }
                    return this.database(e)
                }
            }, {
                key: "replaceDisableAllDatabases",
                value: function(e) {
                    y.info("disabling and nulling all databases (reason: ".concat(e, ")"));
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = this.databases.keys()[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var a = o.value,
                                u = this.databases.get(a);
                            null == u || u.disable(e), null == u || u.close(), this.databases.set(a, null)
                        }
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            !t && null != i.return && i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                    this.emitChange()
                }
            }, {
                key: "remove",
                value: function(e) {
                    var t = this.databases.get(e);
                    y.log("removing database (user: ".concat(e, ", database: ").concat(t, ")")), null == t || t.close(), this.databases.delete(e), this.emitChange()
                }
            }, {
                key: "handleClearCaches",
                value: function(e) {
                    e.preventWritingCachesAgainThisSession && (this.preventWritingCachesAgainThisSession = !0), this.replaceDisableAllDatabases("DatabaseManager (".concat(e.reason, ")"))
                }
            }, {
                key: "handleConnectionOpen",
                value: function() {
                    var e = u.default.getId(),
                        t = this.databases.get(e),
                        n = null == t ? void 0 : t.state();
                    null == t && n !== o.DatabaseState.Open && this.remove(e), this.carefullyOpenDatabase(e)
                }
            }, {
                key: "handleAuthenticationStoreChanged",
                value: function() {
                    var e = u.default.getId(),
                        t = this.activeUserId;
                    if (e !== t) {
                        var n = this.databases.get(t);
                        y.verbose("active user changed (now: ".concat(e, ", was: ").concat(t, ", was: ").concat(n, ")")), null == n || n.close(), s.setUserId(e), this.activeUserId = e, this.databases.delete(t)
                    }
                }
            }, {
                key: "carefullySpeculativelyOpen",
                value: function(e) {
                    var t = this;
                    return f(function() {
                        var n;
                        return m(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (t.preventWritingCachesAgainThisSession) return y.verbose("Not opening database because caches have been manually cleared."), [2];
                                    if (!(null != e)) return [3, 2];
                                    return [4, function(e) {
                                        return O.apply(this, arguments)
                                    }(e)];
                                case 1:
                                    null == (n = r.sent()) || t.databases.has(e) ? (y.verbose("discarding speculative database (".concat(e, " → ").concat(n, ")")), null == n || n.close()) : (y.verbose("added speculative database (".concat(e, " → ").concat(n, ")")), t.databases.set(e, n), t.emitChange()), r.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })()
                }
            }], d(r.prototype, a), c && d(r, c), T
        }(r.Store);

    function h(e) {
        return "@account.".concat(e)
    }

    function O() {
        return (O = f(function(e) {
            var t, n;
            return m(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [3, 4];
                    case 1:
                        return e.trys.push([1, 3, , 4]), [4, o.Database.open(t)];
                    case 2:
                        return [2, e.sent()];
                    case 3:
                        return n = e.sent(), y.warn("couldn't speculatively open database.", n), [3, 4];
                    case 4:
                        return [2, null]
                }
            })
        })).apply(this, arguments)
    }
    t.default = new I
}