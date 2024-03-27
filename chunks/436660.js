function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SlateTransforms: function() {
            return o
        }
    }), n("571269"), n("298267"), n("47120");
    var i = n("327432"),
        r = n("91313"),
        s = n("887490"),
        a = n("42530");
    let o = {
        ...i.Transforms,
        resetSelectionToStart(e) {
            i.Transforms.select(e, s.EditorUtils.start(e, []))
        },
        resetSelectionToEnd(e) {
            i.Transforms.select(e, s.EditorUtils.end(e, []))
        },
        delete(e, t) {
            let {
                at: n,
                distance: r,
                unit: a,
                reverse: o = !1,
                select: l = !1,
                bounds: u,
                voids: d
            } = t;
            if (null == n) {
                if (null == e.selection) return;
                n = e.selection
            }
            let [_, c] = s.RangeUtils.isRange(n) ? s.RangeUtils.edges(n) : s.EditorUtils.edges(e, n);
            if (null != r || null != a) {
                var E, I, T;
                if (o) {
                    let t = null !== (E = s.EditorUtils.before(e, _, {
                        distance: r,
                        unit: a
                    })) && void 0 !== E ? E : s.EditorUtils.start(e, []);
                    if ("character" === a && (null != r ? r : 1) === 1 && s.PathUtils.equals(_.path, c.path)) {
                        let n = s.EditorUtils.leaf(e, _.path),
                            i = null != n ? n[0].text : "";
                        i.length > 0 && null != i[i.length - 1].match(/[\u0E00-\u0E7F]/) && (t = null !== (I = s.EditorUtils.before(e, _, {
                            distance: r,
                            unit: "offset"
                        })) && void 0 !== I ? I : s.EditorUtils.start(e, []))
                    }
                    _ = t
                } else c = null !== (T = s.EditorUtils.after(e, c, {
                    distance: r,
                    unit: a
                })) && void 0 !== T ? T : s.EditorUtils.end(e, [])
            }
            if (null != u) {
                let [e, t] = s.RangeUtils.edges(u);
                s.PointUtils.isBefore(_, e) && (_ = e), s.PointUtils.isAfter(c, t) && (c = t)
            }!s.PointUtils.equals(_, c) && (i.Transforms.delete(e, {
                at: {
                    anchor: _,
                    focus: c
                },
                hanging: !0,
                voids: d
            }), l && s.EditorUtils.hasPath(e, _.path) && i.Transforms.select(e, _))
        },
        textToText(e, t, n) {
            var r;
            let a = s.EditorUtils.getSelectionOverlap(e, n),
                [o, l] = s.RangeUtils.edges(n),
                d = null !== (r = s.EditorUtils.before(e, o)) && void 0 !== r ? r : s.EditorUtils.start(e, []),
                _ = s.EditorUtils.after(e, l);
            s.RangeUtils.isExpanded(n) && i.Transforms.delete(e, {
                at: n,
                voids: !0
            }), i.Transforms.insertText(e, t, {
                at: d
            }), d = null != d ? d : s.EditorUtils.start(e, []), _ = null != _ ? _ : s.EditorUtils.end(e, []), u(e, a, d, _, _)
        },
        textToVoid(e, t, n) {
            let r = s.EditorUtils.getSelectionOverlap(e, n),
                a = s.RangeUtils.start(n),
                o = s.PathUtils.next(a.path),
                l = {
                    path: s.PathUtils.next(o),
                    offset: 0
                };
            i.Transforms.delete(e, {
                at: n,
                voids: !0
            }), 0 === a.offset && i.Transforms.insertNodes(e, [{
                text: ""
            }], {
                at: a.path
            }), i.Transforms.insertNodes(e, [t], {
                at: a
            }), (!s.EditorUtils.hasPath(e, l.path) || !s.TextUtils.isText(s.EditorUtils.node(e, l.path)[0])) && i.Transforms.insertNodes(e, [{
                text: ""
            }], {
                at: l.path
            }), u(e, r, a, l, l)
        },
        textToInline(e, t, n) {
            let r = s.EditorUtils.getSelectionOverlap(e, n),
                a = t.children[t.children.length - 1],
                o = s.RangeUtils.start(n),
                l = s.PathUtils.next(o.path),
                d = {
                    path: s.PathUtils.child(l, t.children.length - 1),
                    offset: s.TextUtils.isText(a) ? a.text.length : 0
                };
            i.Transforms.delete(e, {
                at: n,
                voids: !0
            }), 0 === o.offset && i.Transforms.insertNodes(e, [{
                text: ""
            }], {
                at: o.path
            }), i.Transforms.insertNodes(e, [t], {
                at: o
            }), u(e, r, o, d, d)
        },
        voidToText(e, t, n) {
            var r;
            let a = s.EditorUtils.getSelectionOverlap(e, n),
                o = null !== (r = s.EditorUtils.before(e, n)) && void 0 !== r ? r : s.EditorUtils.start(e, []),
                l = {
                    path: o.path,
                    offset: o.offset + t.length
                };
            i.Transforms.delete(e, {
                at: n,
                voids: !0
            }), i.Transforms.insertText(e, t, {
                at: o
            }), u(e, a, o, o, l)
        },
        removeInline(e, t) {
            var n;
            let r = s.EditorUtils.getSelectionOverlap(e, t),
                a = null !== (n = s.EditorUtils.before(e, t)) && void 0 !== n ? n : s.EditorUtils.start(e, []);
            i.Transforms.delete(e, {
                at: t,
                voids: !0
            }), u(e, r, a, a, a)
        },
        removeInlineChildren(e, t) {
            let [n, r] = t, a = s.EditorUtils.getSelectionOverlap(e, r), o = {
                path: s.PathUtils.child(r, 0),
                offset: 0
            };
            s.EditorUtils.withoutNormalizing(e, () => {
                for (let t = n.children.length - 1; t >= 0; t--) i.Transforms.removeNodes(e, {
                    at: s.PathUtils.child(r, t),
                    voids: !0
                })
            }), u(e, a, null, o, null)
        },
        selectCommandOption(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                a = r.getCommandBlock(e);
            if (null != a)
                for (let r = 0; r < a[0].children.length; r++) {
                    let o = a[0].children[r];
                    if (s.NodeUtils.isType(o, "applicationCommandOption") && o.optionName === t) {
                        n ? i.Transforms.select(e, [0, r]) : i.Transforms.select(e, s.EditorUtils.end(e, [0, r]));
                        return
                    }
                }
        },
        selectPreviousCommandOption(e) {
            if (null == r.getCommandBlock(e)) return;
            let t = null != e.selection ? e.selection.focus.path : s.EditorUtils.end(e, a.FIRST_BLOCK_PATH).path,
                n = r.getCurrentCommandOption(e),
                o = s.EditorUtils.previous(e, {
                    at: t,
                    match: e => e !== (null == n ? void 0 : n[0]) && s.NodeUtils.isType(e, "applicationCommandOption")
                });
            null != o ? i.Transforms.select(e, o[1]) : s.PathUtils.isAfter(t, a.FIRST_TEXT_PATH) && i.Transforms.select(e, s.EditorUtils.end(e, a.FIRST_TEXT_PATH))
        },
        selectNextCommandOption(e) {
            if (null == r.getCommandBlock(e)) return;
            let t = null != e.selection ? e.selection.focus.path : s.EditorUtils.start(e, a.FIRST_BLOCK_PATH).path,
                n = r.getCurrentCommandOption(e),
                l = s.EditorUtils.next(e, {
                    at: t,
                    match: e => e !== (null == n ? void 0 : n[0]) && s.NodeUtils.isType(e, "applicationCommandOption")
                });
            null != l ? i.Transforms.select(e, l[1]) : o.resetSelectionToEnd(e)
        },
        insertCommandOption(e, t) {
            o.resetSelectionToEnd(e), o.insertNodes(e, [{
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
                unit: r = "character",
                edge: a
            } = null != t ? t : {}, o = e.selection;
            if (null == o) return;
            if (void 0 === a && s.RangeUtils.isExpanded(o)) {
                i.Transforms.collapse(e, {
                    edge: n ? "start" : "end"
                });
                return
            }
            let l = s.EditorUtils.leaf(e, o.anchor.path);
            if (null == l) return;
            let u = n ? s.EditorUtils.before : s.EditorUtils.after,
                d = o.focus;
            for (; null != d;) {
                let t = r;
                n || o.focus.offset !== l[0].text.length ? n && 0 === o.focus.offset && (t = "offset") : t = "offset";
                let i = u(e, d, {
                    unit: t
                });
                if (null == i || s.PointUtils.equals(d, i)) {
                    d = void 0;
                    break
                }
                if (d = i, null == s.EditorUtils.getParentVoid(e, d)) break
            }
            null != d && ("focus" === a ? i.Transforms.setSelection(e, {
                focus: d
            }) : i.Transforms.setSelection(e, {
                focus: d,
                anchor: d
            }))
        }
    };

    function l(e, t, n, i, r) {
        switch (t) {
            case "start":
                return n;
            case "inside":
                return i;
            case "end":
                return r
        }
        return e
    }

    function u(e, t, n, i, r) {
        var s, a;
        if (null == t.anchor && null == t.focus) return;
        let u = l(null === (s = e.selection) || void 0 === s ? void 0 : s.anchor, t.anchor, n, i, r),
            d = l(null === (a = e.selection) || void 0 === a ? void 0 : a.focus, t.focus, n, i, r);
        if (null != u && null != d) o.select(e, {
            anchor: u,
            focus: d
        })
    }
}