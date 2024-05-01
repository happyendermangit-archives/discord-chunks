function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("47120");
    var i = n("53529"),
        r = n("436660"),
        a = n("887490"),
        s = n("515270");
    let o = new Set(["line", "blockQuote"]);

    function l(e) {
        let {
            deleteBackward: t,
            deleteFragment: n,
            insertBreak: l,
            onChange: u
        } = e;
        e.deleteBackward = n => {
            let i = a.EditorUtils.getCurrentBlock(e);
            if ((null == i ? void 0 : i[0].type) === "blockQuote") {
                let t = a.RangeUtils.toPoint(e.selection);
                if (null != t && a.PathUtils.isFirstChild(i[1], t.path) && 0 === t.offset) {
                    r.SlateTransforms.setNodes(e, {
                        type: "line"
                    }, {
                        at: i[1]
                    });
                    return
                }
            }
            t(n)
        }, e.deleteFragment = t => {
            if (null != e.selection) {
                let [s, o] = a.RangeUtils.edges(e.selection), l = [s.path[0]], u = a.EditorUtils.node(e, l), d = [o.path[0]], _ = a.PathUtils.equals(l, d) ? null : a.EditorUtils.node(e, d);
                i.HistoryUtils.withSingleEntry(e, () => {
                    (null == u ? void 0 : u[0].type) === "blockQuote" && a.PointUtils.isAtStart(s, u) && r.SlateTransforms.setNodes(e, {
                        type: "line"
                    }, {
                        at: l
                    }), (null == _ ? void 0 : _[0].type) === "blockQuote" && a.PointUtils.isAtEnd(o, _) && r.SlateTransforms.setNodes(e, {
                        type: "line"
                    }, {
                        at: d
                    }), n(t)
                });
                return
            }
            n(t)
        }, e.insertBreak = () => {
            let t = a.EditorUtils.getCurrentBlock(e);
            if ((null == t ? void 0 : t[0].type) === "blockQuote") {
                let n = a.RangeUtils.toPoint(e.selection);
                if (null == n) return;
                ! function(e, t, n) {
                    if (!a.EditorUtils.isEmpty(e, t[0])) return !1;
                    let i = a.EditorUtils.previous(e, {
                        at: t[1]
                    });
                    return !!(null != i && a.NodeUtils.isType(i[0], "blockQuote") && a.EditorUtils.isEmpty(e, i[0]) && a.PointUtils.isAtStart(n, t)) && (r.SlateTransforms.setNodes(e, {
                        type: "line"
                    }, {
                        at: t[1]
                    }), r.SlateTransforms.removeNodes(e, {
                        at: i[1]
                    }), !0)
                }(e, t, n) && r.SlateTransforms.splitNodes(e, {
                    at: n,
                    always: !0
                });
                return
            }
            l()
        };
        let d = null,
            _ = !0;
        return e.onChange = () => {
            let t = a.EditorUtils.richValue(e);
            (t !== d || e.previewMarkdown !== _) && (i.HistoryUtils.withMergedEntry(e, () => {
                a.EditorUtils.withoutNormalizing(e, () => (function(e) {
                    let t = !1;
                    for (let l of a.EditorUtils.blocks(e)) {
                        let [u, d] = l;
                        if (!o.has(u.type)) continue;
                        let _ = {
                            path: a.PathUtils.child(d, 0),
                            offset: 0
                        };
                        if ((0, s.isPointInCodeBlock)(e, _)) {
                            "blockQuote" === u.type && (r.SlateTransforms.setNodes(e, {
                                type: "line"
                            }, {
                                at: d
                            }), r.SlateTransforms.insertText(e, "> ", {
                                at: _
                            }));
                            continue
                        }
                        if ("blockQuote" === u.type || a.EditorUtils.areStylesDisabled(e)) continue;
                        let c = u.children[0];
                        if (!a.TextUtils.isText(c)) continue;
                        let E = c.text.match(/^\s*>>> /),
                            I = c.text.match(/^\s*> /);
                        if ((null != I || null != E || t) && (r.SlateTransforms.setNodes(e, {
                                type: "blockQuote"
                            }, {
                                at: d
                            }), !t)) {
                            var n, i;
                            let s = null !== (i = null !== (n = null == I ? void 0 : I[0].length) && void 0 !== n ? n : null == E ? void 0 : E[0].length) && void 0 !== i ? i : 0,
                                o = a.PathUtils.child(d, 0);
                            r.SlateTransforms.delete(e, {
                                at: {
                                    anchor: {
                                        path: o,
                                        offset: 0
                                    },
                                    focus: {
                                        path: o,
                                        offset: s
                                    }
                                }
                            }), t = null != E
                        }
                    }
                })(e))
            }), d = t, _ = e.previewMarkdown), u()
        }, e
    }
}