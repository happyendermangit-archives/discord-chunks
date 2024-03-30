function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActionLogger: function() {
            return m
        }
    });
    var r = n("836560"),
        o = n("188129"),
        i = n("97744");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function s(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t && l(e.prototype, t), n && l(e, n), e
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function E(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var p = new o.Logger("Flux"),
        m = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
            }(a, e);
            var t, r, o = (t = a, r = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, n, o, i = d(t);
                if (r) {
                    var a = d(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (n = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(n) || "function" == typeof n) ? n : u(e)
            });

            function a() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.persist;
                return s(this, a), f(u(e = o.call(this)), "logs", []), f(u(e), "persist", void 0), e.persist = void 0 !== n && n, e
            }
            return c(a, [{
                key: "log",
                value: function(e, t) {
                    var n = this,
                        r = new I(e);
                    r.startTime = i.performance.now();
                    try {
                        t(function(t, o) {
                            var a, u = {
                                    name: t,
                                    time: -1
                                },
                                s = i.performance.now();
                            try {
                                a = o()
                            } finally {
                                u.time = i.performance.now() - s, n.persist && r.traces.push(u), n.emit("trace", e.type, t, u.time)
                            }
                            return a
                        })
                    } catch (e) {
                        throw r.error = e, e
                    } finally {
                        r.totalTime = i.performance.now() - r.startTime, this.persist && r.totalTime > 0 && this.logs.push(r), this.logs.length > 1e3 && this.logs.shift(), this.emit("log", e)
                    }
                    return r
                }
            }, {
                key: "getSlowestActions",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                        r = [],
                        o = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var u, s, l = this.logs[Symbol.iterator](); !(o = (s = l.next()).done); o = !0) {
                            var c = s.value;
                            if (null == e || c.name === e) {
                                var f = !0,
                                    d = !1,
                                    _ = void 0;
                                try {
                                    for (var m, y = c.traces[Symbol.iterator](); !(f = (m = y.next()).done); f = !0) {
                                        var I = m.value;
                                        r.push([I.name, c.name, I.time])
                                    }
                                } catch (e) {
                                    d = !0, _ = e
                                } finally {
                                    try {
                                        !f && null != y.return && y.return()
                                    } finally {
                                        if (d) throw _
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !o && null != l.return && l.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    r.sort(function(e, t) {
                        return t[2] - e[2]
                    }), r.length > t && (r.length = t);
                    var h = 0,
                        O = 0,
                        T = r.map(function(t) {
                            var n = E(t, 3),
                                r = n[0],
                                o = n[1],
                                i = n[2],
                                a = "".concat(r);
                            return null == e && (a += "<".concat(o, ">")), h = Math.max(a.length, h), [a, i]
                        }).map(function(e) {
                            var t = E(e, 2),
                                n = t[0],
                                r = t[1];
                            return O += r, "".concat(n.padEnd(h + 1, " "), " - ").concat(r, "ms")
                        }).join("\n");
                    return 0 === r.length || r[0][2] < 10 || O < 20 ? r : (p.log("Using Hermes:", void 0 !== (null === (u = n.g) || void 0 === u ? void 0 : u.HermesInternal)), p.log("".concat(null != e ? "\n\n=== ".concat(e, " ===") : "", "\n").concat(T, "\n")), p.log("Total Time: ".concat(O, "ms")), r)
                }
            }, {
                key: "getLastActionMetrics",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                        r = {},
                        o = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var u, s, l = this.logs[Symbol.iterator](); !(o = (s = l.next()).done); o = !0) {
                            var c = s.value,
                                f = !0,
                                d = !1,
                                _ = void 0;
                            try {
                                for (var m, y = c.traces[Symbol.iterator](); !(f = (m = y.next()).done); f = !0) {
                                    var I = m.value;
                                    r[I.name] = [I.name, c.name, I.time]
                                }
                            } catch (e) {
                                d = !0, _ = e
                            } finally {
                                try {
                                    !f && null != y.return && y.return()
                                } finally {
                                    if (d) throw _
                                }
                            }
                        }
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !o && null != l.return && l.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    var h = Object.values(r);
                    h.sort(function(e, t) {
                        return t[2] - e[2]
                    }), h.length > t && (h.length = t);
                    var O = 0,
                        T = 0,
                        S = h.map(function(e) {
                            var t = E(e, 3),
                                n = t[0],
                                r = (t[1], t[2]);
                            return O = Math.max(n.length, O), [n, r]
                        }).map(function(e) {
                            var t = E(e, 2),
                                n = t[0],
                                r = t[1];
                            return T += r, "".concat(n.padEnd(O + 1, " "), " - ").concat(r, "ms")
                        }).join("\n");
                    return 0 === h.length || T < 8 ? h : (p.log("\nUsing Hermes: ".concat(void 0 !== (null === (u = n.g) || void 0 === u ? void 0 : u.HermesInternal)), "\n\n=== ".concat(e, " ===\n").concat(S), "\nTotal Time: ".concat(T, "ms\n\n")), h)
                }
            }]), a
        }(r.EventEmitter),
        y = 0,
        I = function() {
            function e(t) {
                s(this, e), f(this, "id", void 0), f(this, "action", void 0), f(this, "createdAt", void 0), f(this, "startTime", 0), f(this, "totalTime", 0), f(this, "traces", []), f(this, "error", void 0), this.id = y++, this.action = t, this.createdAt = new Date
            }
            return c(e, [{
                key: "name",
                get: function() {
                    return this.action.type
                }
            }, {
                key: "toJSON",
                value: function() {
                    if (null == this.createdAt) throw Error("ActionLog.toJSON: You must complete your logging before calling toJSON");
                    return {
                        actionType: this.action.type,
                        created_at: this.createdAt,
                        totalTime: this.totalTime,
                        traces: this.traces
                    }
                }
            }]), e
        }()
}