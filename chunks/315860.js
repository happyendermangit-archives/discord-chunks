function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnimatedDots: function() {
            return m
        },
        Dots: function() {
            return y
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("718017"),
        u = n("597981");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
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

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function f(e, t) {
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

    function d() {
        return document.hasFocus()
    }
    var _ = {
            config: {
                friction: 50,
                tension: 900,
                mass: 1
            },
            unique: !0,
            initial: {
                dotPosition: 1
            },
            from: {
                dotPosition: 0
            },
            enter: {
                dotPosition: 1
            },
            leave: {
                dotPosition: 0
            }
        },
        E = {
            config: {
                duration: 2400
            },
            from: {
                dotCycle: 2.8
            },
            reset: !0
        };

    function p(e) {
        var t = e % 2;
        return t > 1 ? 1 - (t - 1) : t
    }
    var m = r.memo(function(e) {
            var t, n, o = e.dotRadius,
                i = e.dotPosition,
                u = e.fill,
                _ = void 0 === u ? "currentColor" : u,
                m = e.spacing,
                y = void 0 === m ? 2.5 : m,
                I = r.useRef(d()),
                h = r.useRef(!0);
            r.useEffect(function() {
                return function() {
                    h.current = !1
                }
            }, []);
            var O = (t = (0, a.useSpring)(function() {
                    var e, t;
                    return f(c({}, E), {
                        to: (t = (e = function(e) {
                            var t;
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
                                        t = 2.8, n.label = 1;
                                    case 1:
                                        if (!h.current) return [3, 9];
                                        if (I.current = d(), I.current) return [3, 6];
                                        if (!(2.8 !== t)) return [3, 3];
                                        return [4, e({
                                            dotCycle: t = 2.8,
                                            immediate: !0
                                        })];
                                    case 2:
                                        return n.sent(), [3, 5];
                                    case 3:
                                        return [4, new Promise(function(e) {
                                            return setTimeout(e, 1e3)
                                        })];
                                    case 4:
                                        n.sent(), n.label = 5;
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return [4, e({
                                            dotCycle: t += 4,
                                            immediate: !1
                                        })];
                                    case 7:
                                        n.sent(), n.label = 8;
                                    case 8:
                                        return [3, 1];
                                    case 9:
                                        return [2]
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
                        }), function(e) {
                            return t.apply(this, arguments)
                        })
                    })
                }), n = 1, function(e) {
                    if (Array.isArray(e)) return e
                }(t) || function(e, t) {
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
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return s(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())[0],
                T = (6 * o + o / 4 * 2) / 2;
            return r.createElement(r.Fragment, null, [0, 1, 2].map(function(e) {
                var t = .25 * e,
                    n = o + o * y * e;
                return r.createElement(a.animated.circle, {
                    key: e,
                    cx: i ? i.to([0, 1], [T, n]) : n,
                    cy: o,
                    r: O.dotCycle.to(function(e) {
                        return p(e - t)
                    }).to([0, .4, .8, 1], [.8 * o, .8 * o, o, o]).to(function(e) {
                        return I.current ? e : o
                    }),
                    fill: _,
                    style: {
                        opacity: O.dotCycle.to(function(e) {
                            return p(e - t)
                        }).to([0, .4, .8, 1], [.3, .3, 1, 1]).to(function(e) {
                            return I.current ? e : 1
                        })
                    }
                })
            }))
        }),
        y = r.memo(r.forwardRef(function(e, t) {
            var n = e.dotRadius,
                o = e.x,
                s = e.y,
                l = e.hide,
                E = e.themed,
                p = void 0 !== E && E,
                y = e.className;
            return (0, a.useTransition)(void 0 !== l && l, f(c({}, _), {
                key: function(e) {
                    return e ? "true" : "false"
                },
                immediate: !d()
            }))(function(e, l, c) {
                var f = e.dotPosition,
                    d = c.key;
                return l ? null : r.createElement("svg", {
                    key: d,
                    ref: t,
                    x: o,
                    y: s,
                    width: 6 * n + n / 2 * 2,
                    height: 2 * n,
                    className: i()(y, u.dots, p ? u.themed : null)
                }, r.createElement(a.animated.g, {
                    style: {
                        opacity: f.to(function(e) {
                            return Math.min(1, Math.max(e, 0))
                        })
                    }
                }, r.createElement(m, {
                    dotRadius: n,
                    dotPosition: f
                })))
            })
        }))
}