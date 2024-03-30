function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("840918"),
        o = n("714196");

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function a(e, t) {
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
                if ("string" == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var u = new Set(["line", "blockQuote"]),
        s = [];

    function l(e, t, n) {
        if (o.EditorUtils.areStylesDisabled(e)) return [];
        var i = a(t, 2),
            l = i[0],
            c = i[1];
        if (1 !== c.length || !o.NodeUtils.isInTypes(l, u)) return s;
        for (var f = o.ElementUtils.markdown(l, n, !0), d = f.entries, _ = f.serializedChildren, E = [], p = 0; p < d.length; p++) {
            var m = d[p];
            if (m.attributes.length > 0 && m.text.length > 0) {
                var y = d[p - 1],
                    I = d[p + 1],
                    h = {
                        anchor: (0, r.getPointFromPosition)(e, c, _, m.start),
                        focus: (0, r.getPointFromPosition)(e, c, _, m.start + m.text.length)
                    },
                    O = o.EditorUtils.nodes(e, {
                        at: h,
                        mode: "lowest",
                        voids: !1
                    }),
                    T = {},
                    S = !0,
                    v = !1,
                    g = void 0;
                try {
                    for (var A, b = m.attributes[Symbol.iterator](); !(S = (A = b.next()).done); S = !0) {
                        var N = A.value;
                        if (T[N] = !0, "syntaxBefore" === N && null != I) {
                            var R = !0,
                                C = !1,
                                P = void 0;
                            try {
                                for (var D, L = I.attributes[Symbol.iterator](); !(R = (D = L.next()).done); R = !0) {
                                    var M = D.value;
                                    T["before_".concat(M)] = !0
                                }
                            } catch (e) {
                                C = !0, P = e
                            } finally {
                                try {
                                    !R && null != L.return && L.return()
                                } finally {
                                    if (C) throw P
                                }
                            }
                        } else if ("syntaxAfter" === N && null != y) {
                            var U = !0,
                                w = !1,
                                k = void 0;
                            try {
                                for (var G, B = y.attributes[Symbol.iterator](); !(U = (G = B.next()).done); U = !0) {
                                    var j = G.value;
                                    T["after_".concat(j)] = !0
                                }
                            } catch (e) {
                                w = !0, k = e
                            } finally {
                                try {
                                    !U && null != B.return && B.return()
                                } finally {
                                    if (w) throw k
                                }
                            }
                        }
                    }
                } catch (e) {
                    v = !0, g = e
                } finally {
                    try {
                        !S && null != b.return && b.return()
                    } finally {
                        if (v) throw g
                    }
                }
                var F = !0,
                    V = !1,
                    H = void 0;
                try {
                    for (var x, Y = O[Symbol.iterator](); !(F = (x = Y.next()).done); F = !0) {
                        var W = a(x.value, 2),
                            K = W[0],
                            z = W[1];
                        if (!o.EditorUtils.isVoid(e, K)) {
                            var X = {
                                anchor: o.EditorUtils.start(e, z),
                                focus: o.EditorUtils.end(e, z)
                            };
                            o.PointUtils.isBefore(X.anchor, h.anchor) && (X.anchor = h.anchor), o.PointUtils.isAfter(X.focus, h.focus) && (X.focus = h.focus), E.push(function(e) {
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
                            }({}, T, X))
                        }
                    }
                } catch (e) {
                    V = !0, H = e
                } finally {
                    try {
                        !F && null != Y.return && Y.return()
                    } finally {
                        if (V) throw H
                    }
                }
            }
        }
        return E
    }
}