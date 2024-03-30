function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return b
        },
        maybeFetchColors: function() {
            return S
        },
        useAvatarColors: function() {
            return N
        },
        useColorStore: function() {
            return T
        }
    });
    var r = n("470079"),
        o = n("979590"),
        i = n.n(o),
        a = n("652874"),
        u = n("898511"),
        s = n("622780"),
        l = n("689952"),
        c = n("182425");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function _(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    d(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    d(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
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
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                E(e, t, n[t])
            })
        }
        return e
    }

    function m(e, t) {
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

    function y(e, t) {
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
        }(e, t) || h(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function I(e) {
        return function(e) {
            if (Array.isArray(e)) return f(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || h(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function h(e, t) {
        if (e) {
            if ("string" == typeof e) return f(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
        }
    }

    function O(e, t) {
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
    var T = (0, a.default)(function() {
        return {
            palette: {},
            fetching: {}
        }
    });

    function S(e) {
        return v.apply(this, arguments)
    }

    function v() {
        return (v = _(function(e) {
            return O(this, function(t) {
                switch (t.label) {
                    case 0:
                        if (null != T.getState().palette[e]) return [2];
                        return [4, g(e)];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })).apply(this, arguments)
    }

    function g(e) {
        return A.apply(this, arguments)
    }

    function A() {
        return (A = _(function(e) {
            var t, n, r;
            return O(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (T.getState().fetching[e]) return [2];
                        T.setState(function(t) {
                            return {
                                fetching: m(p({}, t.fetching), E({}, e, !0))
                            }
                        }), r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), [4, (0, c.getPaletteForAvatar)(e)];
                    case 2:
                        return t = r.sent(), n = (0, l.getComplimentaryPaletteForColor)(t[0]), T.setState(function(r) {
                            return {
                                fetching: m(p({}, r.fetching), E({}, e, !1)),
                                palette: m(p({}, r.palette), E({}, e, I(t.slice(0, 2)).concat(I(n))))
                            }
                        }), [3, 4];
                    case 3:
                        return r.sent(), T.setState(function(t) {
                            return {
                                fetching: m(p({}, t.fetching), E({}, e, !1))
                            }
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function b(e, t) {
        var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return y(N(e, t, n), 1)[0]
    }

    function N(e, t) {
        var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            o = T(function(t) {
                return null == e ? void 0 : t.palette[e]
            }),
            a = (0, u.useStateFromStores)([s.default], function() {
                return n && s.default.desaturateUserColors ? s.default.saturation : 1
            });
        r.useEffect(function() {
            null != e && null == o && g(e)
        }, [e, o]);
        var l = r.useMemo(function() {
            return null == o ? void 0 : o.map(function(e) {
                var t = y(e, 3),
                    n = t[0],
                    r = t[1],
                    o = t[2],
                    u = i()({
                        r: n,
                        g: r,
                        b: o
                    }).toHsl(),
                    s = u.h,
                    l = u.s,
                    c = u.l;
                return i()({
                    h: s,
                    s: l * a,
                    l: c
                }).toHexString()
            })
        }, [o, a]);
        return null != l ? l : [t, t]
    }
}