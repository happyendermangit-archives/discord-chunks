function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SlateTransforms: function() {
            return o
        }
    }), n("571269"), n("298267"), n("47120");
    var i = n("327432"),
        r = n("91313"),
        a = n("887490"),
        s = n("42530");
    let o = {
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
                distance: r,
                unit: s,
                reverse: o = !1,
                select: l = !1,
                bounds: u,
                voids: d
            } = t;
            if (null == n) {
                if (null == e.selection) return;
                n = e.selection
            }
            let [_, c] = a.RangeUtils.isRange(n) ? a.RangeUtils.edges(n) : a.EditorUtils.edges(e, n);
            if (null != r || null != s) {
                var E, I, T;
                if (o) {
                    let t = null !== (E = a.EditorUtils.before(e, _, {
                        distance: r,
                        unit: s
                    })) && void 0 !== E ? E : a.EditorUtils.start(e, []);
                    if ("character" === s && (null != r ? r : 1) === 1 && a.PathUtils.equals(_.path, c.path)) {
                        let n = a.EditorUtils.leaf(e, _.path),
                            i = null != n ? n[0].text : "";
                        i.length > 0 && null != i[i.length - 1].match(/[\u0E00-\u0E7F]/) && (t = null !== (I = a.EditorUtils.before(e, _, {
                            distance: r,
                            unit: "offset"
                        })) && void 0 !== I ? I : a.EditorUtils.start(e, []))
                    }
                    _ = t
                } else c = null !== (T = a.EditorUtils.after(e, c, {
                    distance: r,
                    unit: s
                })) && void 0 !== T ? T : a.EditorUtils.end(e, [])
            }
            if (null != u) {
                let [e, t] = a.RangeUtils.edges(u);
                a.PointUtils.isBefore(_, e) && (_ = e), a.PointUtils.isAfter(c, t) && (c = t)
            }!a.PointUtils.equals(_, c) && (i.Transforms.delete(e, {
                at: {
                    anchor: _,
                    focus: c
                },
                hanging: !0,
                voids: d
            }), l && a.EditorUtils.hasPath(e, _.path) && i.Transforms.select(e, _))
        },
        textToText(e, t, n) {
            var r;
            let s = a.EditorUtils.getSelectionOverlap(e, n),
                [o, l] = a.RangeUtils.edges(n),
                d = null !== (r = a.EditorUtils.before(e, o)) && void 0 !== r ? r : a.EditorUtils.start(e, []),
                _ = a.EditorUtils.after(e, l);
            a.RangeUtils.isExpanded(n) && i.Transforms.delete(e, {
                at: n,
                voids: !0
            }), i.Transforms.insertText(e, t, {
                at: d
            }), d = null != d ? d : a.EditorUtils.start(e, []), _ = null != _ ? _ : a.EditorUtils.end(e, []), u(e, s, d, _, _)
        },
        textToVoid(e, t, n) {
            let r = a.EditorUtils.getSelectionOverlap(e, n),
                s = a.RangeUtils.start(n),
                o = a.PathUtils.next(s.path),
                l = {
                    path: a.PathUtils.next(o),
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
            }), (!a.EditorUtils.hasPath(e, l.path) || !a.TextUtils.isText(a.EditorUtils.node(e, l.path)[0])) && i.Transforms.insertNodes(e, [{
                text: ""
            }], {
                at: l.path
            }), u(e, r, s, l, l)
        },
        textToInline(e, t, n) {
            let r = a.EditorUtils.getSelectionOverlap(e, n),
                s = t.children[t.children.length - 1],
                o = a.RangeUtils.start(n),
                l = a.PathUtils.next(o.path),
                d = {
                    path: a.PathUtils.child(l, t.children.length - 1),
                    offset: a.TextUtils.isText(s) ? s.text.length : 0
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
            let s = a.EditorUtils.getSelectionOverlap(e, n),
                o = null !== (r = a.EditorUtils.before(e, n)) && void 0 !== r ? r : a.EditorUtils.start(e, []),
                l = {
                    path: o.path,
                    offset: o.offset + t.length
                };
            i.Transforms.delete(e, {
                at: n,
                voids: !0
            }), i.Transforms.insertText(e, t, {
                at: o
            }), u(e, s, o, o, l)
        },
        removeInline(e, t) {
            var n;
            let r = a.EditorUtils.getSelectionOverlap(e, t),
                s = null !== (n = a.EditorUtils.before(e, t)) && void 0 !== n ? n : a.EditorUtils.start(e, []);
            i.Transforms.delete(e, {
                at: t,
                voids: !0
            }), u(e, r, s, s, s)
        },
        removeInlineChildren(e, t) {
            let [n, r] = t, s = a.EditorUtils.getSelectionOverlap(e, r), o = {
                path: a.PathUtils.child(r, 0),
                offset: 0
            };
            a.EditorUtils.withoutNormalizing(e, () => {
                for (let t = n.children.length - 1; t >= 0; t--) i.Transforms.removeNodes(e, {
                    at: a.PathUtils.child(r, t),
                    voids: !0
                })
            }), u(e, s, null, o, null)
        },
        selectCommandOption(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                s = r.getCommandBlock(e);
            if (null != s)
                for (let r = 0; r < s[0].children.length; r++) {
                    let o = s[0].children[r];
                    if (a.NodeUtils.isType(o, "applicationCommandOption") && o.optionName === t) {
                        n ? i.Transforms.select(e, [0, r]) : i.Transforms.select(e, a.EditorUtils.end(e, [0, r]));
                        return
                    }
                }
        },
        selectPreviousCommandOption(e) {
            if (null == r.getCommandBlock(e)) return;
            let t = null != e.selection ? e.selection.focus.path : a.EditorUtils.end(e, s.FIRST_BLOCK_PATH).path,
                n = r.getCurrentCommandOption(e),
                o = a.EditorUtils.previous(e, {
                    at: t,
                    match: e => e !== (null == n ? void 0 : n[0]) && a.NodeUtils.isType(e, "applicationCommandOption")
                });
            null != o ? i.Transforms.select(e, o[1]) : a.PathUtils.isAfter(t, s.FIRST_TEXT_PATH) && i.Transforms.select(e, a.EditorUtils.end(e, s.FIRST_TEXT_PATH))
        },
        selectNextCommandOption(e) {
            if (null == r.getCommandBlock(e)) return;
            let t = null != e.selection ? e.selection.focus.path : a.EditorUtils.start(e, s.FIRST_BLOCK_PATH).path,
                n = r.getCurrentCommandOption(e),
                l = a.EditorUtils.next(e, {
                    at: t,
                    match: e => e !== (null == n ? void 0 : n[0]) && a.NodeUtils.isType(e, "applicationCommandOption")
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
                edge: s
            } = null != t ? t : {}, o = e.selection;
            if (null == o) return;
            if (void 0 === s && a.RangeUtils.isExpanded(o)) {
                i.Transforms.collapse(e, {
                    edge: n ? "start" : "end"
                });
                return
            }
            let l = a.EditorUtils.leaf(e, o.anchor.path);
            if (null == l) return;
            let u = n ? a.EditorUtils.before : a.EditorUtils.after,
                d = o.focus;
            for (; null != d;) {
                let t = r;
                n || o.focus.offset !== l[0].text.length ? n && 0 === o.focus.offset && (t = "offset") : t = "offset";
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
        var a, s;
        if (null == t.anchor && null == t.focus) return;
        let u = l(null === (a = e.selection) || void 0 === a ? void 0 : a.anchor, t.anchor, n, i, r),
            d = l(null === (s = e.selection) || void 0 === s ? void 0 : s.focus, t.focus, n, i, r);
        if (null != u && null != d) o.select(e, {
            anchor: u,
            focus: d
        })
    }
}