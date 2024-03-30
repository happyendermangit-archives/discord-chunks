function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815"),
        o = n("30760"),
        i = n("807471"),
        a = n("225098"),
        u = n("523018"),
        s = n("802143"),
        l = n("892223"),
        c = n("77871");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
        }(y, e);
        var t, n, i = (t = y, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = p(t);
            if (n) {
                var a = p(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : d(e)
        });

        function y() {
            var e, t, n;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, y), e = i.apply(this, arguments), E(d(e), "actions", {
                POST_CONNECTION_OPEN: function(t) {
                    return e.handleConnectionOpen(t)
                }
            }), E(d(e), "handleConnectionOpen", (n = (t = function(e) {
                var t, n, i, d, _, E;
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
                            return [4, o.default.fetchChangelogConfig()];
                        case 1:
                            if (n = (t = e.sent()).body, i = function(e, t) {
                                    var n = 0,
                                        r = null,
                                        o = !0,
                                        i = !1,
                                        a = void 0;
                                    try {
                                        for (var u, s = Object.entries(e)[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                                            var l, c, d = (l = u.value, c = 2, function(e) {
                                                    if (Array.isArray(e)) return e
                                                }(l) || function(e, t) {
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
                                                }(l, c) || function(e, t) {
                                                    if (e) {
                                                        if ("string" == typeof e) return f(e, t);
                                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                                                    }
                                                }(l, c) || function() {
                                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                }()),
                                                _ = d[0],
                                                E = d[1].min_version;
                                            E <= t && E > n && (n = E, r = _)
                                        }
                                    } catch (e) {
                                        i = !0, a = e
                                    } finally {
                                        try {
                                            !o && null != s.return && s.return()
                                        } finally {
                                            if (i) throw a
                                        }
                                    }
                                    return r
                                }(n, (0, l.getClientVersionForChangelog)()), r.default.dispatch({
                                    type: "CHANGE_LOG_SET_CONFIG",
                                    config: t.body,
                                    latestChangelogId: i
                                }), null == i || !0 !== n[i].show_on_startup) return [2];
                            if (d = s.default.lastSeenChangelogId(), _ = s.default.lastSeenChangelogDate(), null != d && 0 >= u.default.compare(i, d)) return [2];
                            return [4, o.default.fetchChangelog(i, a.default.locale)];
                        case 2:
                            if (null == (E = e.sent())) return [2];
                            if (null == _ || null == s.default.lastSeenChangelogDate()) return o.default.markChangelogAsSeen(i, E.date), [2];
                            if (s.default.isLocked()) return [2];
                            return new Date(E.date) > new Date(_) && (0, c.openChangelog)(), [2]
                    }
                })
            }, function() {
                var e = this,
                    n = arguments;
                return new Promise(function(r, o) {
                    var i = t.apply(e, n);

                    function a(e) {
                        _(i, r, o, a, u, "next", e)
                    }

                    function u(e) {
                        _(i, r, o, a, u, "throw", e)
                    }
                    a(void 0)
                })
            }), function(e) {
                return n.apply(this, arguments)
            })), e
        }
        return y
    }(i.default);
    t.default = new y
}