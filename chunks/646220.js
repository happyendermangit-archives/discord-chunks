function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("222007");
    var l = n("83800"),
        i = n("939563"),
        a = n("385887"),
        s = n("467123");
    let r = new Set(["line", "blockQuote"]);

    function o(e) {
        let {
            deleteBackward: t,
            deleteFragment: n,
            insertBreak: o,
            onChange: u
        } = e;
        e.deleteBackward = n => {
            let l = a.EditorUtils.getCurrentBlock(e);
            if ((null == l ? void 0 : l[0].type) === "blockQuote") {
                let t = a.RangeUtils.toPoint(e.selection);
                if (null != t && a.PathUtils.isFirstChild(l[1], t.path) && 0 === t.offset) {
                    i.SlateTransforms.setNodes(e, {
                        type: "line"
                    }, {
                        at: l[1]
                    });
                    return
                }
            }
            t(n)
        }, e.deleteFragment = t => {
            if (null != e.selection) {
                let [s, r] = a.RangeUtils.edges(e.selection), o = [s.path[0]], u = a.EditorUtils.node(e, o), d = [r.path[0]], c = a.PathUtils.equals(o, d) ? null : a.EditorUtils.node(e, d);
                l.HistoryUtils.withSingleEntry(e, () => {
                    (null == u ? void 0 : u[0].type) === "blockQuote" && a.PointUtils.isAtStart(s, u) && i.SlateTransforms.setNodes(e, {
                        type: "line"
                    }, {
                        at: o
                    }), (null == c ? void 0 : c[0].type) === "blockQuote" && a.PointUtils.isAtEnd(r, c) && i.SlateTransforms.setNodes(e, {
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
                    let l = a.EditorUtils.previous(e, {
                        at: t[1]
                    });
                    return !!(null != l && a.NodeUtils.isType(l[0], "blockQuote") && a.EditorUtils.isEmpty(e, l[0]) && a.PointUtils.isAtStart(n, t)) && (i.SlateTransforms.setNodes(e, {
                        type: "line"
                    }, {
                        at: t[1]
                    }), i.SlateTransforms.removeNodes(e, {
                        at: l[1]
                    }), !0)
                }(e, t, n) && i.SlateTransforms.splitNodes(e, {
                    at: n,
                    always: !0
                });
                return
            }
            o()
        };
        let d = null,
            c = !0;
        return e.onChange = () => {
            let t = a.EditorUtils.richValue(e);
            (t !== d || e.previewMarkdown !== c) && (l.HistoryUtils.withMergedEntry(e, () => {
                a.EditorUtils.withoutNormalizing(e, () => (function(e) {
                    let t = !1;
                    for (let o of a.EditorUtils.blocks(e)) {
                        let [u, d] = o;
                        if (!r.has(u.type)) continue;
                        let c = {
                            path: a.PathUtils.child(d, 0),
                            offset: 0
                        };
                        if ((0, s.isPointInCodeBlock)(e, c)) {
                            "blockQuote" === u.type && (i.SlateTransforms.setNodes(e, {
                                type: "line"
                            }, {
                                at: d
                            }), i.SlateTransforms.insertText(e, "> ", {
                                at: c
                            }));
                            continue
                        }
                        if ("blockQuote" === u.type || a.EditorUtils.areStylesDisabled(e)) continue;
                        let f = u.children[0];
                        if (!a.TextUtils.isText(f)) continue;
                        let m = f.text.match(/^\s*>>> /),
                            p = f.text.match(/^\s*> /);
                        if ((null != p || null != m || t) && (i.SlateTransforms.setNodes(e, {
                                type: "blockQuote"
                            }, {
                                at: d
                            }), !t)) {
                            var n, l;
                            let s = null !== (l = null !== (n = null == p ? void 0 : p[0].length) && void 0 !== n ? n : null == m ? void 0 : m[0].length) && void 0 !== l ? l : 0,
                                r = a.PathUtils.child(d, 0);
                            i.SlateTransforms.delete(e, {
                                at: {
                                    anchor: {
                                        path: r,
                                        offset: 0
                                    },
                                    focus: {
                                        path: r,
                                        offset: s
                                    }
                                }
                            }), t = null != m
                        }
                    }
                })(e))
            }), d = t, c = e.previewMarkdown), u()
        }, e
    }
}