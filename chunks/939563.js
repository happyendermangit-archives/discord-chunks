function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SlateTransforms: function() {
            return r
        }
    }), n("106442"), n("175143"), n("222007");
    var i = n("987295"),
        l = n("640830"),
        a = n("385887"),
        s = n("566819");
    let r = {
        ...i.Transforms,
        resetSelectionToStart(e) {
            i.Transforms.select(e, a.EditorUtils.start(e, []))
        },
        resetSelectionToEnd(e) {
            i.Transforms.select(e, a.EditorUtils.end(e, []))
        },
        delete(e, t) {
            let {
                at: n,
                distance: l,
                unit: s,
                reverse: r = !1,
                select: o = !1,
                bounds: u,
                voids: d
            } = t;
            if (null == n) {
                if (null == e.selection) return;
                n = e.selection
            }
            let [c, f] = a.RangeUtils.isRange(n) ? a.RangeUtils.edges(n) : a.EditorUtils.edges(e, n);
            if (null != l || null != s) {
                var m, p, h;
                if (r) {
                    let t = null !== (m = a.EditorUtils.before(e, c, {
                        distance: l,
                        unit: s
                    })) && void 0 !== m ? m : a.EditorUtils.start(e, []);
                    if ("character" === s && (null != l ? l : 1) === 1 && a.PathUtils.equals(c.path, f.path)) {
                        let n = a.EditorUtils.leaf(e, c.path),
                            i = null != n ? n[0].text : "";
                        i.length > 0 && null != i[i.length - 1].match(/[\u0E00-\u0E7F]/) && (t = null !== (p = a.EditorUtils.before(e, c, {
                            distance: l,
                            unit: "offset"
                        })) && void 0 !== p ? p : a.EditorUtils.start(e, []))
                    }
                    c = t
                } else f = null !== (h = a.EditorUtils.after(e, f, {
                    distance: l,
                    unit: s
                })) && void 0 !== h ? h : a.EditorUtils.end(e, [])
            }
            if (null != u) {
                let [e, t] = a.RangeUtils.edges(u);
                a.PointUtils.isBefore(c, e) && (c = e), a.PointUtils.isAfter(f, t) && (f = t)
            }!a.PointUtils.equals(c, f) && (i.Transforms.delete(e, {
                at: {
                    anchor: c,
                    focus: f
                },
                hanging: !0,
                voids: d
            }), o && a.EditorUtils.hasPath(e, c.path) && i.Transforms.select(e, c))
        },
        textToText(e, t, n) {
            var l;
            let s = a.EditorUtils.getSelectionOverlap(e, n),
                [r, o] = a.RangeUtils.edges(n),
                d = null !== (l = a.EditorUtils.before(e, r)) && void 0 !== l ? l : a.EditorUtils.start(e, []),
                c = a.EditorUtils.after(e, o);
            a.RangeUtils.isExpanded(n) && i.Transforms.delete(e, {
                at: n,
                voids: !0
            }), i.Transforms.insertText(e, t, {
                at: d
            }), d = null != d ? d : a.EditorUtils.start(e, []), c = null != c ? c : a.EditorUtils.end(e, []), u(e, s, d, c, c)
        },
        textToVoid(e, t, n) {
            let l = a.EditorUtils.getSelectionOverlap(e, n),
                s = a.RangeUtils.start(n),
                r = a.PathUtils.next(s.path),
                o = {
                    path: a.PathUtils.next(r),
                    offset: 0
                };
            i.Transforms.delete(e, {
                at: n,
                voids: !0
            }), 0 === s.offset && i.Transforms.insertNodes(e, [{
                text: ""
            }], {
                at: s.path
            }), i.Transforms.insertNodes(e, [t], {
                at: s
            }), (!a.EditorUtils.hasPath(e, o.path) || !a.TextUtils.isText(a.EditorUtils.node(e, o.path)[0])) && i.Transforms.insertNodes(e, [{
                text: ""
            }], {
                at: o.path
            }), u(e, l, s, o, o)
        },
        textToInline(e, t, n) {
            let l = a.EditorUtils.getSelectionOverlap(e, n),
                s = t.children[t.children.length - 1],
                r = a.RangeUtils.start(n),
                o = a.PathUtils.next(r.path),
                d = {
                    path: a.PathUtils.child(o, t.children.length - 1),
                    offset: a.TextUtils.isText(s) ? s.text.length : 0
                };
            i.Transforms.delete(e, {
                at: n,
                voids: !0
            }), 0 === r.offset && i.Transforms.insertNodes(e, [{
                text: ""
            }], {
                at: r.path
            }), i.Transforms.insertNodes(e, [t], {
                at: r
            }), u(e, l, r, d, d)
        },
        voidToText(e, t, n) {
            var l;
            let s = a.EditorUtils.getSelectionOverlap(e, n),
                r = null !== (l = a.EditorUtils.before(e, n)) && void 0 !== l ? l : a.EditorUtils.start(e, []),
                o = {
                    path: r.path,
                    offset: r.offset + t.length
                };
            i.Transforms.delete(e, {
                at: n,
                voids: !0
            }), i.Transforms.insertText(e, t, {
                at: r
            }), u(e, s, r, r, o)
        },
        removeInline(e, t) {
            var n;
            let l = a.EditorUtils.getSelectionOverlap(e, t),
                s = null !== (n = a.EditorUtils.before(e, t)) && void 0 !== n ? n : a.EditorUtils.start(e, []);
            i.Transforms.delete(e, {
                at: t,
                voids: !0
            }), u(e, l, s, s, s)
        },
        removeInlineChildren(e, t) {
            let [n, l] = t, s = a.EditorUtils.getSelectionOverlap(e, l), r = {
                path: a.PathUtils.child(l, 0),
                offset: 0
            };
            a.EditorUtils.withoutNormalizing(e, () => {
                for (let t = n.children.length - 1; t >= 0; t--) i.Transforms.removeNodes(e, {
                    at: a.PathUtils.child(l, t),
                    voids: !0
                })
            }), u(e, s, null, r, null)
        },
        selectCommandOption(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                s = l.getCommandBlock(e);
            if (null != s)
                for (let l = 0; l < s[0].children.length; l++) {
                    let r = s[0].children[l];
                    if (a.NodeUtils.isType(r, "applicationCommandOption") && r.optionName === t) {
                        n ? i.Transforms.select(e, [0, l]) : i.Transforms.select(e, a.EditorUtils.end(e, [0, l]));
                        return
                    }
                }
        },
        selectPreviousCommandOption(e) {
            let t = l.getCommandBlock(e);
            if (null == t) return;
            let n = null != e.selection ? e.selection.focus.path : a.EditorUtils.end(e, s.FIRST_BLOCK_PATH).path,
                r = l.getCurrentCommandOption(e),
                o = a.EditorUtils.previous(e, {
                    at: n,
                    match: e => e !== (null == r ? void 0 : r[0]) && a.NodeUtils.isType(e, "applicationCommandOption")
                });
            null != o ? i.Transforms.select(e, o[1]) : a.PathUtils.isAfter(n, s.FIRST_TEXT_PATH) && i.Transforms.select(e, a.EditorUtils.end(e, s.FIRST_TEXT_PATH))
        },
        selectNextCommandOption(e) {
            let t = l.getCommandBlock(e);
            if (null == t) return;
            let n = null != e.selection ? e.selection.focus.path : a.EditorUtils.start(e, s.FIRST_BLOCK_PATH).path,
                o = l.getCurrentCommandOption(e),
                u = a.EditorUtils.next(e, {
                    at: n,
                    match: e => e !== (null == o ? void 0 : o[0]) && a.NodeUtils.isType(e, "applicationCommandOption")
                });
            null != u ? i.Transforms.select(e, u[1]) : r.resetSelectionToEnd(e)
        },
        insertCommandOption(e, t) {
            r.resetSelectionToEnd(e), r.insertNodes(e, [{
                type: "applicationCommandOption",
                optionName: t.name,
                optionDisplayName: t.displayName,
                optionType: t.type,
                children: [{
                    text: ""
                }]
            }])
        },
        keyboardMove(e, t) {
            let {
                reverse: n = !1,
                unit: l = "character",
                edge: s
            } = null != t ? t : {}, r = e.selection;
            if (null == r) return;
            if (void 0 === s && a.RangeUtils.isExpanded(r)) {
                i.Transforms.collapse(e, {
                    edge: n ? "start" : "end"
                });
                return
            }
            let o = a.EditorUtils.leaf(e, r.anchor.path);
            if (null == o) return;
            let u = n ? a.EditorUtils.before : a.EditorUtils.after,
                d = r.focus;
            for (; null != d;) {
                let t = l;
                n || r.focus.offset !== o[0].text.length ? n && 0 === r.focus.offset && (t = "offset") : t = "offset";
                let i = u(e, d, {
                    unit: t
                });
                if (null == i || a.PointUtils.equals(d, i)) {
                    d = void 0;
                    break
                }
                if (d = i, null == a.EditorUtils.getParentVoid(e, d)) break
            }
            null != d && ("focus" === s ? i.Transforms.setSelection(e, {
                focus: d
            }) : i.Transforms.setSelection(e, {
                focus: d,
                anchor: d
            }))
        }
    };

    function o(e, t, n, i, l) {
        switch (t) {
            case "start":
                return n;
            case "inside":
                return i;
            case "end":
                return l
        }
        return e
    }

    function u(e, t, n, i, l) {
        var a, s;
        if (null == t.anchor && null == t.focus) return;
        let u = o(null === (a = e.selection) || void 0 === a ? void 0 : a.anchor, t.anchor, n, i, l),
            d = o(null === (s = e.selection) || void 0 === s ? void 0 : s.focus, t.focus, n, i, l);
        if (null != u && null != d) r.select(e, {
            anchor: u,
            focus: d
        })
    }
}