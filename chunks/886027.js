function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("47120");
    var i = n("53529"),
        r = n("436660"),
        s = n("887490"),
        a = n("515270");
    let o = new Set(["line", "blockQuote"]);

    function l(e) {
        let {
            deleteBackward: t,
            deleteFragment: n,
            insertBreak: l,
            onChange: u
        } = e;
        e.deleteBackward = n => {
            let i = s.EditorUtils.getCurrentBlock(e);
            if ((null == i ? void 0 : i[0].type) === "blockQuote") {
                let t = s.RangeUtils.toPoint(e.selection);
                if (null != t && s.PathUtils.isFirstChild(i[1], t.path) && 0 === t.offset) {
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
                let [a, o] = s.RangeUtils.edges(e.selection), l = [a.path[0]], u = s.EditorUtils.node(e, l), d = [o.path[0]], _ = s.PathUtils.equals(l, d) ? null : s.EditorUtils.node(e, d);
                i.HistoryUtils.withSingleEntry(e, () => {
                    (null == u ? void 0 : u[0].type) === "blockQuote" && s.PointUtils.isAtStart(a, u) && r.SlateTransforms.setNodes(e, {
                        type: "line"
                    }, {
                        at: l
                    }), (null == _ ? void 0 : _[0].type) === "blockQuote" && s.PointUtils.isAtEnd(o, _) && r.SlateTransforms.setNodes(e, {
                        type: "line"
                    }, {
                        at: d
                    }), n(t)
                });
                return
            }
            n(t)
        }, e.insertBreak = () => {
            let t = s.EditorUtils.getCurrentBlock(e);
            if ((null == t ? void 0 : t[0].type) === "blockQuote") {
                let n = s.RangeUtils.toPoint(e.selection);
                if (null == n) return;
                ! function(e, t, n) {
                    if (!s.EditorUtils.isEmpty(e, t[0])) return !1;
                    let i = s.EditorUtils.previous(e, {
                        at: t[1]
                    });
                    return !!(null != i && s.NodeUtils.isType(i[0], "blockQuote") && s.EditorUtils.isEmpty(e, i[0]) && s.PointUtils.isAtStart(n, t)) && (r.SlateTransforms.setNodes(e, {
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
            let t = s.EditorUtils.richValue(e);
            (t !== d || e.previewMarkdown !== _) && (i.HistoryUtils.withMergedEntry(e, () => {
                s.EditorUtils.withoutNormalizing(e, () => (function(e) {
                    let t = !1;
                    for (let l of s.EditorUtils.blocks(e)) {
                        let [u, d] = l;
                        if (!o.has(u.type)) continue;
                        let _ = {
                            path: s.PathUtils.child(d, 0),
                            offset: 0
                        };
                        if ((0, a.isPointInCodeBlock)(e, _)) {
                            "blockQuote" === u.type && (r.SlateTransforms.setNodes(e, {
                                type: "line"
                            }, {
                                at: d
                            }), r.SlateTransforms.insertText(e, "> ", {
                                at: _
                            }));
                            continue
                        }
                        if ("blockQuote" === u.type || s.EditorUtils.areStylesDisabled(e)) continue;
                        let c = u.children[0];
                        if (!s.TextUtils.isText(c)) continue;
                        let E = c.text.match(/^\s*>>> /),
                            I = c.text.match(/^\s*> /);
                        if ((null != I || null != E || t) && (r.SlateTransforms.setNodes(e, {
                                type: "blockQuote"
                            }, {
                                at: d
                            }), !t)) {
                            var n, i;
                            let a = null !== (i = null !== (n = null == I ? void 0 : I[0].length) && void 0 !== n ? n : null == E ? void 0 : E[0].length) && void 0 !== i ? i : 0,
                                o = s.PathUtils.child(d, 0);
                            r.SlateTransforms.delete(e, {
                                at: {
                                    anchor: {
                                        path: o,
                                        offset: 0
                                    },
                                    focus: {
                                        path: o,
                                        offset: a
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