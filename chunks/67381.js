function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        closeAllModals: function() {
            return R
        },
        closeModal: function() {
            return S
        },
        getInteractingModalContext: function() {
            return m
        },
        hasAnyModalOpen: function() {
            return A
        },
        hasAnyModalOpenSelector: function() {
            return g
        },
        hasModalOpen: function() {
            return P
        },
        hasModalOpenSelector: function() {
            return C
        },
        modalContextFromAppContext: function() {
            return y
        },
        openModal: function() {
            return T
        },
        openModalLazy: function() {
            return h
        },
        updateModal: function() {
            return v
        },
        useHasAnyModalOpen: function() {
            return b
        },
        useIsModalAtTop: function() {
            return N
        },
        useModalsStore: function() {
            return I
        }
    });
    var r = n("97613"),
        o = n.n(r),
        i = n("652874"),
        a = n("813970"),
        u = n("840801"),
        s = n("281767");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
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

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
    }

    function _(e, t) {
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
    var E = n("233405").default,
        p = [u.DEFAULT_MODAL_CONTEXT, u.POPOUT_MODAL_CONTEXT];

    function m() {
        var e = (0, a.getCurrentlyInteractingAppContext)();
        return null != e ? y(e) : u.DEFAULT_MODAL_CONTEXT
    }

    function y(e) {
        return e === s.AppContext.POPOUT ? u.POPOUT_MODAL_CONTEXT : u.DEFAULT_MODAL_CONTEXT
    }
    var I = (0, i.default)(function(e) {
        var t;
        return f(t = {}, u.DEFAULT_MODAL_CONTEXT, []), f(t, u.POPOUT_MODAL_CONTEXT, []), t
    });

    function h(e) {
        return O.apply(this, arguments)
    }

    function O() {
        var e;
        return e = function(e) {
            var t, n, r, i, a, u, s, l, c = arguments;
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
            }(this, function(f) {
                switch (f.label) {
                    case 0:
                        return r = void 0 === (n = (t = c.length > 1 && void 0 !== c[1] ? c[1] : {}).contextKey) ? m() : n, i = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < i.length; r++) {
                                    if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                }
                            }
                            return o
                        }(t, ["contextKey"]), a = null != t.modalKey ? t.modalKey : o()(), u = !1, s = setTimeout(function() {
                            u = !0, T(E, _(d({}, i), {
                                modalKey: a
                            }), r)
                        }, 300), [4, e()];
                    case 1:
                        return l = f.sent(), clearTimeout(s), u ? P(a, r) && v(a, l, i.onCloseRequest, i.onCloseCallback, r) : T(l, _(d({}, i), {
                            modalKey: a
                        }), r), [2, a]
                }
            })
        }, (O = function() {
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
        }).apply(this, arguments)
    }

    function T(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m(),
            r = t.modalKey,
            i = t.instant,
            a = t.Layer,
            u = t.onCloseRequest,
            s = t.onCloseCallback,
            c = t.backdropStyle,
            E = null != r ? r : o()();
        return I.setState(function(t) {
            var r, o = t[n];
            if (void 0 !== o && o.some(function(e) {
                    return e.key === E
                })) return t;
            return _(d({}, t), f({}, n, ((function(e) {
                if (Array.isArray(e)) return l(e)
            })(r = o) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(r) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }
            }(r) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()).concat([{
                key: E,
                Layer: a,
                render: e,
                onCloseRequest: null != u ? u : function() {
                    return S(E, n)
                },
                onCloseCallback: s,
                instant: i,
                backdropStyle: c
            }])))
        }), E
    }

    function S(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m(),
            n = I.getState()[t],
            r = null != n ? n.find(function(t) {
                return t.key === e
            }) : null;
        I.setState(function(n) {
            return void 0 === n[t] ? n : _(d({}, n), f({}, t, n[t].filter(function(t) {
                return t.key !== e
            })))
        }), null != r && null != r.onCloseCallback && r.onCloseCallback()
    }

    function v(e, t, n, r) {
        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m();
        I.setState(function(i) {
            return void 0 === i[o] ? i : _(d({}, i), f({}, o, i[o].map(function(i) {
                return i.key === e ? _(d({}, i), {
                    render: t,
                    onCloseRequest: null == n ? function() {
                        return S(e, o)
                    } : n,
                    onCloseCallback: r
                }) : i
            })))
        })
    }

    function g(e) {
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i = p[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                var a = e[o.value];
                if (null != a && a.length > 0) return !0
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
        return !1
    }

    function A() {
        return g(I.getState())
    }

    function b() {
        return g(I())
    }

    function N(e) {
        var t, n, r = I(),
            o = r.default,
            i = r.popout;
        return i.length > 0 ? (null === (t = i.at(-1)) || void 0 === t ? void 0 : t.key) === e : (null === (n = o.at(-1)) || void 0 === n ? void 0 : n.key) === e
    }

    function R() {
        var e = I.getState();
        for (var t in e) {
            var n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = e[t][Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    S(u.key, t)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
        }
    }

    function C(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.DEFAULT_MODAL_CONTEXT,
            r = e[n];
        return null != r && r.some(function(e) {
            return e.key === t
        })
    }

    function P(e, t) {
        return C(I.getState(), e, t)
    }
}