function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        checkModifiers: function() {
            return E
        },
        default: function() {
            return p
        }
    });
    var r = n("653603"),
        o = n.n(r),
        i = n("512722"),
        a = n.n(i),
        u = n("610045"),
        s = n("448856"),
        l = n("453197"),
        c = n("714196"),
        f = n("281767");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t) {
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
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function E(e, t) {
        var n = t.cmd,
            r = void 0 !== n && n,
            o = t.ctrl,
            i = void 0 !== o && o,
            a = t.alt,
            u = void 0 !== a && a,
            s = t.shift,
            l = void 0 !== s && s;
        return (null == r || e.metaKey === r) && (null == i || e.ctrlKey === i) && (null == u || e.altKey === u) && (null == l || e.shiftKey === l)
    }

    function p(e) {
        return e.onKeyDown = function(t) {
            var n = e.isMac;
            switch (t.which) {
                case f.KeyboardKeys.B:
                    if (!c.EditorUtils.isEditorEmpty(e) && E(t, {
                            ctrl: !n,
                            cmd: n
                        })) return (0, s.toggleMarkdownStyle)(e, "bold"), !0;
                    break;
                case f.KeyboardKeys.I:
                    if (!c.EditorUtils.isEditorEmpty(e) && E(t, {
                            ctrl: !n,
                            cmd: n
                        })) return (0, s.toggleMarkdownStyle)(e, "italics"), !0;
                    break;
                case f.KeyboardKeys.U:
                    if (!c.EditorUtils.isEditorEmpty(e) && E(t, {
                            ctrl: !n,
                            cmd: n
                        })) return (0, s.toggleMarkdownStyle)(e, "underline"), !0;
                    break;
                case f.KeyboardKeys.S:
                    if (!c.EditorUtils.isEditorEmpty(e) && E(t, {
                            ctrl: !n,
                            cmd: n,
                            shift: !0
                        })) return (0, s.toggleMarkdownStyle)(e, "strikethrough"), !0;
                    break;
                case f.KeyboardKeys.TAB:
                    if (null != e.selection && E(t, {
                            shift: null
                        })) {
                        var r = _(c.RangeUtils.edges(e.selection), 2),
                            i = r[0],
                            d = r[1],
                            p = c.EditorUtils.blocks(e).slice(i.path[0], d.path[0] + 1),
                            m = !0,
                            y = !0,
                            I = !1,
                            h = void 0;
                        try {
                            for (var O, T = p[Symbol.iterator](); !(y = (O = T.next()).done); y = !0) {
                                var S, v = _(O.value, 1)[0];
                                if ("line" !== v.type || !(null === (S = v.codeBlockState) || void 0 === S ? void 0 : S.isInCodeBlock)) {
                                    m = !1;
                                    break
                                }
                            }
                        } catch (e) {
                            I = !0, h = e
                        } finally {
                            try {
                                !y && null != T.return && T.return()
                            } finally {
                                if (I) throw h
                            }
                        }
                        if (m) {
                            if (!t.shiftKey && c.RangeUtils.isCollapsed(e.selection)) return l.SlateTransforms.insertText(e, "  "), !0;
                            var g = !t.shiftKey;
                            return u.HistoryUtils.withSingleEntry(e, function() {
                                var t = null !== (s = null === (a = e.selection) || void 0 === a ? void 0 : a.anchor) && void 0 !== s ? s : c.EditorUtils.start(e, []),
                                    n = null !== (f = null === (u = e.selection) || void 0 === u ? void 0 : u.focus) && void 0 !== f ? f : c.EditorUtils.end(e, []),
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try {
                                    for (var a, u, s, f, d, E = p[Symbol.iterator](); !(r = (d = E.next()).done); r = !0) {
                                        var m = _(d.value, 2),
                                            y = m[0],
                                            I = m[1],
                                            h = y.children[0];
                                        if (c.TextUtils.isText(y.children[0])) {
                                            var O = c.PathUtils.child(I, 0),
                                                T = {
                                                    path: O,
                                                    offset: 0
                                                };
                                            if (g) l.SlateTransforms.insertText(e, "  ", {
                                                at: T
                                            }), c.PathUtils.equals(t.path, O) && 0 !== t.offset && (t = {
                                                path: O,
                                                offset: t.offset + 2
                                            }), c.PathUtils.equals(n.path, O) && 0 !== n.offset && (n = {
                                                path: O,
                                                offset: n.offset + 2
                                            });
                                            else if (h.text.startsWith("  ")) {
                                                var S = {
                                                    path: c.PathUtils.child(I, 0),
                                                    offset: 2
                                                };
                                                l.SlateTransforms.delete(e, {
                                                    at: {
                                                        anchor: T,
                                                        focus: S
                                                    }
                                                }), c.PathUtils.equals(t.path, O) && (t = {
                                                    path: O,
                                                    offset: Math.max(0, t.offset - 2)
                                                }), c.PathUtils.equals(n.path, O) && (n = {
                                                    path: O,
                                                    offset: Math.max(0, n.offset - 2)
                                                })
                                            }
                                        }
                                    }
                                } catch (e) {
                                    o = !0, i = e
                                } finally {
                                    try {
                                        !r && null != E.return && E.return()
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                l.SlateTransforms.select(e, {
                                    anchor: t,
                                    focus: n
                                })
                            }), !0
                        }
                    }
                    break;
                case f.KeyboardKeys.ARROW_LEFT:
                case f.KeyboardKeys.ARROW_RIGHT:
                    if (E(t, {
                            shift: null
                        })) N = "character";
                    else if (E(t, {
                            ctrl: !n,
                            alt: n,
                            shift: null
                        })) N = "word";
                    else if (n && E(t, {
                            cmd: !0,
                            shift: null
                        })) break;
                    else break;
                    t.shiftKey && (R = "focus");
                    var A, b, N, R, C, P = e.children[null !== (C = null === (b = e.selection) || void 0 === b ? void 0 : null === (A = b.focus) || void 0 === A ? void 0 : A.path[0]) && void 0 !== C ? C : 0],
                        D = "rtl" === o()(c.NodeUtils.string(P)),
                        L = t.which === f.KeyboardKeys.ARROW_LEFT == !D;
                    return l.SlateTransforms.keyboardMove(e, {
                        reverse: L,
                        unit: N,
                        edge: R
                    }), !0;
                case f.KeyboardKeys.A:
                    if (n && E(t, {
                            ctrl: !0
                        })) {
                        var M = c.EditorUtils.getCurrentBlock(e);
                        if (null != M) {
                            var U = _(M, 2)[1],
                                w = {
                                    path: c.PathUtils.child(U, 0),
                                    offset: 0
                                };
                            return l.SlateTransforms.select(e, {
                                anchor: w,
                                focus: w
                            }), !0
                        }
                    }
                    break;
                case f.KeyboardKeys.E:
                    if (n && E(t, {
                            ctrl: !0
                        })) {
                        var k = c.EditorUtils.getCurrentBlock(e);
                        if (null != k) {
                            var G = _(k, 2),
                                B = G[0],
                                j = G[1],
                                F = c.PathUtils.child(j, B.children.length - 1),
                                V = _(c.EditorUtils.node(e, F), 1)[0],
                                H = {
                                    path: F,
                                    offset: V.text.length
                                };
                            return l.SlateTransforms.select(e, {
                                anchor: H,
                                focus: H
                            }), !0
                        }
                    }
                    break;
                case f.KeyboardKeys.BACKSPACE:
                case f.KeyboardKeys.DELETE:
                case f.KeyboardKeys.K:
                    var x = t.which === f.KeyboardKeys.BACKSPACE;
                    if ((!n && t.which !== f.KeyboardKeys.K && E(t, {
                            ctrl: !0,
                            shift: !0
                        }) || n && t.which !== f.KeyboardKeys.K && E(t, {
                            cmd: !0
                        }) || n && t.which === f.KeyboardKeys.K && E(t, {
                            ctrl: !0
                        })) && null != e.selection) {
                        var Y = _(c.RangeUtils.edges(e.selection), 2),
                            W = Y[0],
                            K = Y[1],
                            z = _(c.EditorUtils.node(e, [x ? W.path[0] : K.path[0]]), 2),
                            X = z[0],
                            q = z[1];
                        if (a()(c.ElementUtils.isElement(X) && c.EditorUtils.isBlock(e, X), "Top-most node of selection is not a block"), x && !c.PointUtils.isAtStart(W, [X, q]) || !x && !c.PointUtils.isAtEnd(K, [X, q])) return x ? e.deleteBackward("line") : e.deleteForward("line"), !0
                    }
            }
            return !1
        }, e
    }
}