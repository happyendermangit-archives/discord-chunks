function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("327432"),
        o = n("453197"),
        i = n("714196");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e) {
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

    function s(e, t) {
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

    function l(e, t) {
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

    function c(e) {
        var t = e.apply,
            n = e.deleteBackward,
            a = e.deleteForward,
            u = e.deleteFragment,
            s = e.insertText;
        return e.apply = function(n) {
            var r;
            if ("set_selection" === n.type && (null === (r = e.composition) || void 0 === r ? void 0 : r.startedInsideInline) && i.RangeUtils.isRange(n.properties) && i.RangeUtils.isRange(n.newProperties) && i.RangeUtils.isCollapsed(n.newProperties)) {
                var o = i.EditorUtils.getParentInline(e, n.properties),
                    a = i.EditorUtils.getParentInline(e, n.newProperties);
                if (null != o && (null == a || !i.PathUtils.equals(o[1], a[1]))) return
            }
            t(n)
        }, e.insertText = function(t) {
            if (null != e.selection && null != i.EditorUtils.getCurrentInline(e)) {
                o.SlateTransforms.insertText(e, t);
                return
            }
            s(t)
        }, e.deleteBackward = function(t) {
            !f(e, t, !0) && n(t)
        }, e.deleteForward = function(t) {
            !f(e, t, !1) && a(t)
        }, e.deleteFragment = function(t) {
            if (null != e.selection && i.RangeUtils.isExpanded(e.selection)) {
                var n = e.selection.anchor,
                    r = e.selection.focus,
                    a = i.EditorUtils.getParentInline(e, n),
                    s = i.EditorUtils.getParentInline(e, r);
                if (null != a && null != s && i.PathUtils.equals(a[1], s[1])) {
                    u(t);
                    return
                }
                var c = i.RangeUtils.isForward(e.selection);
                if (null != a) {
                    var f, d, _ = l(a, 2)[1],
                        E = l(i.EditorUtils.edges(e, _), 2),
                        p = E[0],
                        m = E[1];
                    c && i.PointUtils.equals(n, p) ? n = null !== (f = i.EditorUtils.before(e, p)) && void 0 !== f ? f : i.EditorUtils.start(e, []) : !c && i.PointUtils.equals(n, m) && (n = null !== (d = i.EditorUtils.after(e, m)) && void 0 !== d ? d : i.EditorUtils.end(e, []))
                }
                if (null != s) {
                    var y, I, h = l(s, 2)[1],
                        O = l(i.EditorUtils.edges(e, h), 2),
                        T = O[0],
                        S = O[1];
                    !c && i.PointUtils.equals(r, T) ? r = null !== (y = i.EditorUtils.before(e, T)) && void 0 !== y ? y : i.EditorUtils.start(e, []) : c && i.PointUtils.equals(r, S) && (r = null !== (I = i.EditorUtils.after(e, S)) && void 0 !== I ? I : i.EditorUtils.end(e, []))
                }
                o.SlateTransforms.delete(e, {
                    at: {
                        anchor: n,
                        focus: r
                    },
                    reverse: "backward" === t,
                    select: !0
                });
                return
            }
            u(t)
        }, r.Editor.positions = _, e
    }

    function f(e, t, n) {
        var r = i.EditorUtils.getCurrentInline(e),
            a = i.EditorUtils.getCurrentBlock(e),
            u = i.RangeUtils.toPoint(e.selection);
        if (null == u || null == a || "block" === t) return !0;
        if ("line" === t && null == r) return !1;
        var s = r;
        if (null == s) {
            var c = (n ? i.EditorUtils.before : i.EditorUtils.after)(e, u);
            null != c && null != (s = i.EditorUtils.getParentInline(e, c)) && (u = c)
        }
        if (null != s) {
            var f = l(s, 2),
                d = f[0],
                _ = f[1];
            if (i.EditorUtils.isEmpty(e, d) || i.EditorUtils.isVoid(e, d)) o.SlateTransforms.removeInline(e, _);
            else {
                var E = l(i.EditorUtils.edges(e, _), 2),
                    p = E[0],
                    m = E[1];
                o.SlateTransforms.delete(e, {
                    at: u,
                    unit: t,
                    reverse: n,
                    select: !0,
                    bounds: {
                        anchor: p,
                        focus: m
                    }
                })
            }
            return !0
        }
        var y = !1;
        if (null != a) {
            var I = l(a, 2)[1],
                h = l(i.EditorUtils.edges(e, I), 2),
                O = h[0],
                T = h[1];
            y = n && i.PointUtils.equals(u, O) || !n && i.PointUtils.equals(u, T)
        }
        if ("word" === t && !y) {
            var S = i.EditorUtils.getCurrentText(e);
            if (null != S) {
                var v = l(S, 2)[1],
                    g = l(i.EditorUtils.edges(e, v), 2),
                    A = g[0],
                    b = g[1];
                return o.SlateTransforms.delete(e, {
                    at: u,
                    unit: t,
                    reverse: n,
                    select: !0,
                    bounds: {
                        anchor: A,
                        focus: b
                    }
                }), !0
            }
        }
        return o.SlateTransforms.delete(e, {
            at: u,
            unit: t,
            reverse: n,
            select: !0
        }), !0
    }
    var d = r.Editor.positions;

    function _(e) {
        var t, n, r, o, a, c, f, _, E, p, m, y, I, h, O, T, S, v, g, A, b, N, R, C, P, D, L, M, U, w, k, G, B, j, F, V, H, x, Y, W, K, z, X, q, Q, J, Z, $, ee, et, en, er, eo, ei = arguments;
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
        }(this, function(ea) {
            switch (ea.label) {
                case 0:
                    if (c = void 0 === (a = (o = null != (t = ei.length > 1 && void 0 !== ei[1] ? ei[1] : {}) ? t : {}).at) ? e.selection : a, _ = void 0 === (f = o.unit) ? "offset" : f, p = void 0 !== (E = o.reverse) && E, y = void 0 !== (m = o.voids) && m, !("word" !== _)) return [3, 9];
                    I = !0, h = !1, O = void 0, ea.label = 1;
                case 1:
                    ea.trys.push([1, 6, 7, 8]), T = d(e, s(u({}, t), {
                        voids: y || "block" === _
                    }))[Symbol.iterator](), ea.label = 2;
                case 2:
                    if (I = (S = T.next()).done) return [3, 5];
                    return [4, S.value];
                case 3:
                    ea.sent(), ea.label = 4;
                case 4:
                    return I = !0, [3, 2];
                case 5:
                    return [3, 8];
                case 6:
                    return v = ea.sent(), h = !0, O = v, [3, 8];
                case 7:
                    try {
                        !I && null != T.return && T.return()
                    } finally {
                        if (h) throw O
                    }
                    return [7];
                case 8:
                    return [2];
                case 9:
                    if (null == c) return [2];
                    g = i.EditorUtils.range(e, c), b = (A = l(i.RangeUtils.edges(g), 2))[0], N = A[1], R = i.EditorUtils.richValue(e), C = p ? -1 : 1, D = null !== (P = null === (n = b.path) || void 0 === n ? void 0 : n[0]) && void 0 !== P ? P : 0, M = null !== (L = null === (r = N.path) || void 0 === r ? void 0 : r[0]) && void 0 !== L ? L : R.length - 1, U = p ? M : D, w = p ? D : M, k = U, ea.label = 10;
                case 10:
                    j = R[k], V = null !== (F = k === D ? null === (G = b.path) || void 0 === G ? void 0 : G[1] : null) && void 0 !== F ? F : 0, x = null !== (H = k === M ? null === (B = N.path) || void 0 === B ? void 0 : B[1] : null) && void 0 !== H ? H : j.children.length - 1, Y = p ? x : V, W = p ? V : x, K = Y, ea.label = 11;
                case 11:
                    if (z = j.children[K], X = [k, K], q = void 0, q = i.PathUtils.equals(X, b.path) || i.PathUtils.isAncestor(X, b.path) ? !p && i.EditorUtils.isEnd(e, b, X) ? null : b : i.EditorUtils.start(e, X), Q = void 0, Q = i.PathUtils.equals(X, N.path) || i.PathUtils.isAncestor(X, N.path) ? p && i.EditorUtils.isStart(e, N, X) ? null : N : i.EditorUtils.end(e, X), !(null != q && null != Q)) return [3, 25];
                    if (!(i.TextUtils.isText(z) && 0 === z.text.length)) return [3, 14];
                    return [4, J = {
                        path: X,
                        offset: 0
                    }];
                case 12:
                    return ea.sent(), [4, J];
                case 13:
                case 16:
                    return ea.sent(), [3, 25];
                case 14:
                    if (!(i.EditorUtils.isInline(e, z) && i.TextUtils.isText(z.children[0]) && 0 === z.children[0].text.length)) return [3, 17];
                    return [4, Z = {
                        path: i.PathUtils.child(X, 0),
                        offset: 0
                    }];
                case 15:
                    return ea.sent(), [4, Z];
                case 17:
                    $ = {
                        anchor: q,
                        focus: Q
                    }, ee = !0, et = !1, en = void 0, ea.label = 18;
                case 18:
                    ea.trys.push([18, 23, 24, 25]), er = d(e, s(u({}, t), {
                        at: $
                    }))[Symbol.iterator](), ea.label = 19;
                case 19:
                    if (ee = (eo = er.next()).done) return [3, 22];
                    return [4, eo.value];
                case 20:
                    ea.sent(), ea.label = 21;
                case 21:
                    return ee = !0, [3, 19];
                case 22:
                    return [3, 25];
                case 23:
                    return v = ea.sent(), et = !0, en = v, [3, 25];
                case 24:
                    try {
                        !ee && null != er.return && er.return()
                    } finally {
                        if (et) throw en
                    }
                    return [7];
                case 25:
                    if (K === W) return [3, 26];
                    return K += C, [3, 11];
                case 26:
                    if (k === w) return [3, 27];
                    return k += C, [3, 10];
                case 27:
                    return [2]
            }
        })
    }
}