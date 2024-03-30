function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSystemAnalyticsInfo: function() {
            return v
        }
    });
    var r, o = n("898511"),
        i = n("629815"),
        a = n("870331"),
        u = n("374550"),
        s = n("131900"),
        l = n("139890");

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
    var y = {
        hashes: {}
    };

    function I() {
        return h.apply(this, arguments)
    }

    function h() {
        return (h = f(function() {
            return m(this, function(e) {
                switch (e.label) {
                    case 0:
                        if (!u.isPlatformEmbedded || !(0, u.isWindows)()) return [2, []];
                        return [4, s.default.ensureModule("discord_media")];
                    case 1:
                        return e.sent(), [4, s.default.requireModule("discord_media").getSystemAnalyticsBlob()];
                    case 2:
                        return [2, e.sent() || []]
                }
            })
        })).apply(this, arguments)
    }

    function O() {
        return (O = f(function() {
            var e, t, n, r, o, i, u, s, l, c, f;
            return m(this, function(f) {
                switch (f.label) {
                    case 0:
                        return f.trys.push([0, 2, , 3]), [4, I()];
                    case 1:
                        e = f.sent().filter(function(e) {
                            return y.hashes[e.name] !== e.hash
                        }), t = !0, n = !1, r = void 0;
                        try {
                            for (o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) s = (u = i.value).name, l = u.hash, c = u.data, a.default.track(s, c), (y = {
                                hashes: function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))), r.forEach(function(t) {
                                            _(e, t, n[t])
                                        })
                                    }
                                    return e
                                }({}, y.hashes)
                            }).hashes[s] = l
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                !t && null != o.return && o.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                        return e.length > 0 && S.emitChange(), [3, 3];
                    case 2:
                        return f.sent(), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
    var T = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
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
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function(e) {
                y = null != e && "object" == typeof e.hashes ? e : {
                    hashes: {}
                }, this.waitFor(l.default)
            }
        }, {
            key: "getState",
            value: function() {
                return y
            }
        }, {
            key: "info",
            value: function() {
                return f(function() {
                    var e, t;
                    return m(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return t.trys.push([0, 2, , 3]), [4, I()];
                            case 1:
                                if (null == (e = t.sent().find(function(e) {
                                        return "hardware_detected" === e.name
                                    }))) return [2, null];
                                return [2, e.data];
                            case 2:
                                return t.sent(), [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })()
            }
        }], d(r.prototype, o), i && d(r, i), u
    }(o.default.PersistedStore);
    _(T, "displayName", "SystemAnalyticsStore"), _(T, "persistKey", "SystemAnalyticsStore");
    var S = new T(i.default, {
        START_SESSION: function() {
            return ! function() {
                O.apply(this, arguments)
            }(), !1
        }
    });

    function v() {
        return S.info()
    }
}