function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("784184"),
        o = n("140817"),
        l = n("719328"),
        i = n("303822"),
        u = n("658005"),
        c = n("132027"),
        s = n("281767"),
        d = n("729780");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t, n, r, a, o, l) {
        try {
            var i = e[o](l),
                u = i.value
        } catch (e) {
            n(e);
            return
        }
        i.done ? t(u) : Promise.resolve(u).then(r, a)
    }

    function p(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != a) {
                var o = [],
                    l = !0,
                    i = !1;
                try {
                    for (a = a.call(e); !(l = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); l = !0);
                } catch (e) {
                    i = !0, r = e
                } finally {
                    try {
                        !l && null != a.return && a.return()
                    } finally {
                        if (i) throw r
                    }
                }
                return o
            }
        }(e, t) || y(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function v(e) {
        return function(e) {
            if (Array.isArray(e)) return f(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || y(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function y(e, t) {
        if (e) {
            if ("string" == typeof e) return f(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
        }
    }
    t.default = function(e) {
        var t = e.reportType,
            n = e.menu,
            f = e.modalProps,
            y = e.onSubmit,
            E = e.onNavigate,
            b = e.emailToken,
            h = e.isAuthenticated,
            g = void 0 === h || h,
            _ = (0, l.useUID)(),
            S = n.nodes,
            R = n.root_node_id,
            O = n.success_node_id,
            N = n.fail_node_id,
            I = p(r.useState(R), 2),
            T = I[0],
            M = I[1],
            A = p(r.useState(void 0), 2),
            w = A[0],
            C = A[1],
            P = p(r.useState(void 0), 2),
            j = P[0],
            x = P[1],
            D = p(r.useState([]), 2),
            k = D[0],
            L = D[1],
            U = p(r.useState(void 0), 2),
            B = U[0],
            G = U[1],
            H = function(e) {
                var n, r, a, l = p(e.destination, 2)[1],
                    u = S[l];
                if (u.elements.some(function(e) {
                        return "skip" === e.type
                    }) && (null === (n = u.button) || void 0 === n ? void 0 : n.type) === "next") {
                    ;
                    return H((r = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r, a, o;
                                r = e, a = t, o = n[t], a in r ? Object.defineProperty(r, a, {
                                    value: o,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : r[a] = o
                            })
                        }
                        return e
                    }({}, e), a = (a = {
                        destination: ["", u.button.target]
                    }, a), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(a)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                    }), r))
                }
                if (L(v(k).concat([e])), null != u.key && (null == E || E(u.key)), C(void 0), x(void 0), t.name === i.ReportNames.MESSAGE || t.name === i.ReportNames.FIRST_DM) {
                    var c = t.record.id;
                    o.default.trackWithMetadata(s.AnalyticEvents.IAR_NAVIGATE, {
                        message_id: c,
                        content_type: t.name,
                        report_sub_type: u.report_type,
                        current_node: S[T].id,
                        next_node: u.id
                    })
                }
                M(l)
            };
        var F = (q = ($ = function(e) {
                var r, a, o, l;
                return function(e, t) {
                    var n, r, a, o, l = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: i(0),
                        throw: i(1),
                        return: i(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function i(o) {
                        return function(i) {
                            return function(o) {
                                if (n) throw TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                    switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = (a = l.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                l.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && l.label < a[1]) {
                                                l.label = a[1], a = o;
                                                break
                                            }
                                            if (a && l.label < a[2]) {
                                                l.label = a[2], l.ops.push(o);
                                                break
                                            }
                                            a[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, l)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, i])
                        }
                    }
                }(this, function(i) {
                    switch (i.label) {
                        case 0:
                            if (!g) return [3, 2];
                            return [4, (0, u.submitReport)(n, t, v(k).concat([e]))];
                        case 1:
                            return o = i.sent(), [3, 4];
                        case 2:
                            return [4, (0, u.submitUnauthenticatedReport)(n, t, v(k).concat([e]), b)];
                        case 3:
                            o = i.sent(), i.label = 4;
                        case 4:
                            return null != (l = null == (a = o) ? void 0 : null === (r = a.body) || void 0 === r ? void 0 : r.report_id) && G(l), null == y || y(l), [2]
                    }
                })
            }, function() {
                var e = this,
                    t = arguments;
                return new Promise(function(n, r) {
                    var a = $.apply(e, t);

                    function o(e) {
                        m(a, n, r, o, l, "next", e)
                    }

                    function l(e) {
                        m(a, n, r, o, l, "throw", e)
                    }
                    o(void 0)
                })
            }), function(e) {
                return q.apply(this, arguments)
            }),
            V = function() {
                if (!(k.length < 1)) {
                    var e, n, r = v(k),
                        a = r.pop(),
                        l = null !== (n = null == a ? void 0 : a.nodeRef) && void 0 !== n ? n : R;
                    if (t.name === i.ReportNames.MESSAGE || t.name === i.ReportNames.FIRST_DM) {
                        var u = t.record.id;
                        o.default.trackWithMetadata(s.AnalyticEvents.IAR_NAVIGATE, {
                            message_id: u,
                            content_type: t.name,
                            report_sub_type: S[l].report_type,
                            current_node: S[T].id,
                            next_node: S[l].id
                        })
                    }
                    C(null == a ? void 0 : null === (e = a.multiSelect) || void 0 === e ? void 0 : e.state), x(null == a ? void 0 : a.textInput), M(l), L(r), null == E || E("..")
                }
            },
            z = [],
            Y = [];
        for (var W in S) {
            var K = S[W];
            if (K.id !== O && K.id !== N && K.id !== R) {
                if (K.key.endsWith("_SUBMIT")) {
                    Y.push(K);
                    continue
                }
                if (z.push(K), (null === (Z = K.button) || void 0 === Z ? void 0 : Z.type) === "next") {
                    var $, q, Z, X, J = null === (X = K.button) || void 0 === X ? void 0 : X.target,
                        Q = z.indexOf(S[J]); - 1 !== Q && (z.splice(Q, 1), z.push(S[J]))
                }
            }
        }
        var ee = [S[R]].concat(v(z), v(Y), [S[O], S[N]]);
        return r.createElement(a.ModalRoot, {
            transitionState: f.transitionState,
            "aria-labelledby": _
        }, r.createElement(a.Slides, {
            width: 440,
            activeSlide: T,
            centered: !1
        }, ee.map(function(e) {
            return r.createElement(a.Slide, {
                id: e.id,
                key: e.id
            }, r.createElement("div", {
                className: d.slideContainer
            }, r.createElement(c.default, {
                node: e,
                reportType: t,
                history: k,
                onModalClose: f.onClose,
                onSelectChild: H,
                onNavigateBack: V,
                multiSelect: w,
                textInput: j,
                successNodeId: O,
                failNodeId: N,
                onSubmit: F,
                reportId: B
            })))
        })))
    }
}