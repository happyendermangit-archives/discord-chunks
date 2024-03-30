function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("929048"),
        o = n("629815"),
        i = n("35523"),
        a = n("388990"),
        u = n("931983");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = new i.default("FileSystemStore"),
        E = 10 * a.default.Millis.MINUTE,
        p = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
            }(m, e);
            var t, n, r, i, a, p = (t = m, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = f(t);
                if (n) {
                    var a = f(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : s(e)
            });

            function m() {
                var e, t, n, r;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, m), t = s(e = p.call(this, o.default, {
                    APP_STATE_UPDATE: function(t) {
                        return e.handleAppStateUpdate(t)
                    },
                    POST_CONNECTION_OPEN: function() {
                        return e.handlePostConnectionOpen()
                    }
                })), r = !1, (n = "isLowDisk") in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, e.refresh(), e.waitFor(u.default), setInterval(function() {
                    return e.refresh()
                }, E), e
            }
            return r = m, i = [{
                key: "handlePostConnectionOpen",
                value: function() {
                    return this.refresh(), !1
                }
            }, {
                key: "handleAppStateUpdate",
                value: function(e) {
                    return "active" !== e.state && this.refresh(), !1
                }
            }, {
                key: "refresh",
                value: function() {
                    var e, t = this;
                    return (e = function() {
                        var e, n, r, o, i, a;
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
                        }(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, null === (n = u.default.database()) || void 0 === n ? void 0 : null === (e = n.fsInfo()) || void 0 === e ? void 0 : e.catch(function(e) {
                                        return _.warn("couldn't get fs info", e)
                                    })];
                                case 1:
                                    return null != (r = s.sent()) && (o = r.fs.available < 256 * 1048576 || r.fs.available < 3 * r.database.used || r.fs.available < 2 * r.database.total, i = r.fs.available > 768 * 1048576 && r.fs.available > 4 * r.database.used && r.fs.available > 4 * r.database.total, null != (a = !!o || !i && null) && t.isLowDisk !== a && (t.isLowDisk = a, t.emitChange())), [2]
                            }
                        })
                    }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var i = e.apply(t, n);

                            function a(e) {
                                l(i, r, o, a, u, "next", e)
                            }

                            function u(e) {
                                l(i, r, o, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    })()
                }
            }], c(r.prototype, i), a && c(r, a), m
        }(r.Store);
    t.default = new p
}