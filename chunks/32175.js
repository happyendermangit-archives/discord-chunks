function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("610045"),
        o = n("453197"),
        i = n("714196"),
        a = n("384139");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e, t) {
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
                if ("string" == typeof e) return u(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var l = new Set(["line", "blockQuote"]);

    function c(e) {
        var t = e.deleteBackward,
            n = e.deleteFragment,
            u = e.insertBreak,
            c = e.onChange;
        e.deleteBackward = function(n) {
            var r = i.EditorUtils.getCurrentBlock(e);
            if ((null == r ? void 0 : r[0].type) === "blockQuote") {
                var a = i.RangeUtils.toPoint(e.selection);
                if (null != a && i.PathUtils.isFirstChild(r[1], a.path) && 0 === a.offset) {
                    o.SlateTransforms.setNodes(e, {
                        type: "line"
                    }, {
                        at: r[1]
                    });
                    return
                }
            }
            t(n)
        }, e.deleteFragment = function(t) {
            if (null != e.selection) {
                var a = s(i.RangeUtils.edges(e.selection), 2),
                    u = a[0],
                    l = a[1],
                    c = [u.path[0]],
                    f = i.EditorUtils.node(e, c),
                    d = [l.path[0]],
                    _ = i.PathUtils.equals(c, d) ? null : i.EditorUtils.node(e, d);
                r.HistoryUtils.withSingleEntry(e, function() {
                    (null == f ? void 0 : f[0].type) === "blockQuote" && i.PointUtils.isAtStart(u, f) && o.SlateTransforms.setNodes(e, {
                        type: "line"
                    }, {
                        at: c
                    }), (null == _ ? void 0 : _[0].type) === "blockQuote" && i.PointUtils.isAtEnd(l, _) && o.SlateTransforms.setNodes(e, {
                        type: "line"
                    }, {
                        at: d
                    }), n(t)
                });
                return
            }
            n(t)
        }, e.insertBreak = function() {
            var t = i.EditorUtils.getCurrentBlock(e);
            if ((null == t ? void 0 : t[0].type) === "blockQuote") {
                var n = i.RangeUtils.toPoint(e.selection);
                if (null == n) return;
                ! function(e, t, n) {
                    if (!i.EditorUtils.isEmpty(e, t[0])) return !1;
                    var r = i.EditorUtils.previous(e, {
                        at: t[1]
                    });
                    return !!(null != r && i.NodeUtils.isType(r[0], "blockQuote") && i.EditorUtils.isEmpty(e, r[0]) && i.PointUtils.isAtStart(n, t)) && (o.SlateTransforms.setNodes(e, {
                        type: "line"
                    }, {
                        at: t[1]
                    }), o.SlateTransforms.removeNodes(e, {
                        at: r[1]
                    }), !0)
                }(e, t, n) && o.SlateTransforms.splitNodes(e, {
                    at: n,
                    always: !0
                });
                return
            }
            u()
        };
        var f = null,
            d = !0;
        return e.onChange = function() {
            var t = i.EditorUtils.richValue(e);
            (t !== f || e.previewMarkdown !== d) && (r.HistoryUtils.withMergedEntry(e, function() {
                i.EditorUtils.withoutNormalizing(e, function() {
                    return function(e) {
                        var t = !1,
                            n = !0,
                            r = !1,
                            u = void 0;
                        try {
                            for (var c, f = i.EditorUtils.blocks(e)[Symbol.iterator](); !(n = (c = f.next()).done); n = !0) {
                                var d = c.value,
                                    _ = s(d, 2),
                                    E = _[0],
                                    p = _[1];
                                if (!l.has(E.type)) continue;
                                var m = {
                                    path: i.PathUtils.child(p, 0),
                                    offset: 0
                                };
                                if ((0, a.isPointInCodeBlock)(e, m)) {
                                    "blockQuote" === E.type && (o.SlateTransforms.setNodes(e, {
                                        type: "line"
                                    }, {
                                        at: p
                                    }), o.SlateTransforms.insertText(e, "> ", {
                                        at: m
                                    }));
                                    continue
                                }
                                if ("blockQuote" === E.type || i.EditorUtils.areStylesDisabled(e)) continue;
                                var y = E.children[0];
                                if (!!i.TextUtils.isText(y)) {
                                    var I = y.text.match(/^\s*>>> /),
                                        h = y.text.match(/^\s*> /);
                                    if ((null != h || null != I || t) && (o.SlateTransforms.setNodes(e, {
                                            type: "blockQuote"
                                        }, {
                                            at: p
                                        }), !t)) {
                                        var O, T, S = null !== (T = null !== (O = null == h ? void 0 : h[0].length) && void 0 !== O ? O : null == I ? void 0 : I[0].length) && void 0 !== T ? T : 0,
                                            v = i.PathUtils.child(p, 0);
                                        o.SlateTransforms.delete(e, {
                                            at: {
                                                anchor: {
                                                    path: v,
                                                    offset: 0
                                                },
                                                focus: {
                                                    path: v,
                                                    offset: S
                                                }
                                            }
                                        }), t = null != I
                                    }
                                }
                            }
                        } catch (e) {
                            r = !0, u = e
                        } finally {
                            try {
                                !n && null != f.return && f.return()
                            } finally {
                                if (r) throw u
                            }
                        }
                    }(e)
                })
            }), f = t, d = e.previewMarkdown), c()
        }, e
    }
}