function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("47120"), n("571269"), n("298267");
    var i = n("327432"),
        r = n("436660"),
        s = n("887490");

    function a(e) {
        let {
            apply: t,
            deleteBackward: n,
            deleteForward: a,
            deleteFragment: l,
            insertText: d
        } = e;
        return e.apply = n => {
            var i;
            if ("set_selection" === n.type && (null === (i = e.composition) || void 0 === i ? void 0 : i.startedInsideInline) && s.RangeUtils.isRange(n.properties) && s.RangeUtils.isRange(n.newProperties) && s.RangeUtils.isCollapsed(n.newProperties)) {
                let t = s.EditorUtils.getParentInline(e, n.properties),
                    i = s.EditorUtils.getParentInline(e, n.newProperties);
                if (null != t && (null == i || !s.PathUtils.equals(t[1], i[1]))) return
            }
            t(n)
        }, e.insertText = t => {
            if (null != e.selection && null != s.EditorUtils.getCurrentInline(e)) {
                r.SlateTransforms.insertText(e, t);
                return
            }
            d(t)
        }, e.deleteBackward = t => {
            !o(e, t, !0) && n(t)
        }, e.deleteForward = t => {
            !o(e, t, !1) && a(t)
        }, e.deleteFragment = t => {
            if (null != e.selection && s.RangeUtils.isExpanded(e.selection)) {
                var n, i, a, o;
                let u = e.selection.anchor,
                    d = e.selection.focus,
                    _ = s.EditorUtils.getParentInline(e, u),
                    c = s.EditorUtils.getParentInline(e, d);
                if (null != _ && null != c && s.PathUtils.equals(_[1], c[1])) {
                    l(t);
                    return
                }
                let E = s.RangeUtils.isForward(e.selection);
                if (null != _) {
                    let [, t] = _, [r, a] = s.EditorUtils.edges(e, t);
                    E && s.PointUtils.equals(u, r) ? u = null !== (n = s.EditorUtils.before(e, r)) && void 0 !== n ? n : s.EditorUtils.start(e, []) : !E && s.PointUtils.equals(u, a) && (u = null !== (i = s.EditorUtils.after(e, a)) && void 0 !== i ? i : s.EditorUtils.end(e, []))
                }
                if (null != c) {
                    let [, t] = c, [n, i] = s.EditorUtils.edges(e, t);
                    !E && s.PointUtils.equals(d, n) ? d = null !== (a = s.EditorUtils.before(e, n)) && void 0 !== a ? a : s.EditorUtils.start(e, []) : E && s.PointUtils.equals(d, i) && (d = null !== (o = s.EditorUtils.after(e, i)) && void 0 !== o ? o : s.EditorUtils.end(e, []))
                }
                r.SlateTransforms.delete(e, {
                    at: {
                        anchor: u,
                        focus: d
                    },
                    reverse: "backward" === t,
                    select: !0
                });
                return
            }
            l(t)
        }, i.Editor.positions = u, e
    }

    function o(e, t, n) {
        let i = s.EditorUtils.getCurrentInline(e),
            a = s.EditorUtils.getCurrentBlock(e),
            o = s.RangeUtils.toPoint(e.selection);
        if (null == o || null == a || "block" === t) return !0;
        if ("line" === t && null == i) return !1;
        let l = i;
        if (null == l) {
            let t = (n ? s.EditorUtils.before : s.EditorUtils.after)(e, o);
            null != t && null != (l = s.EditorUtils.getParentInline(e, t)) && (o = t)
        }
        if (null != l) {
            let [i, a] = l;
            if (s.EditorUtils.isEmpty(e, i) || s.EditorUtils.isVoid(e, i)) r.SlateTransforms.removeInline(e, a);
            else {
                let [i, l] = s.EditorUtils.edges(e, a);
                r.SlateTransforms.delete(e, {
                    at: o,
                    unit: t,
                    reverse: n,
                    select: !0,
                    bounds: {
                        anchor: i,
                        focus: l
                    }
                })
            }
            return !0
        }
        let u = !1;
        if (null != a) {
            let [, t] = a, [i, r] = s.EditorUtils.edges(e, t);
            u = n && s.PointUtils.equals(o, i) || !n && s.PointUtils.equals(o, r)
        }
        if ("word" === t && !u) {
            let i = s.EditorUtils.getCurrentText(e);
            if (null != i) {
                let [, a] = i, [l, u] = s.EditorUtils.edges(e, a);
                return r.SlateTransforms.delete(e, {
                    at: o,
                    unit: t,
                    reverse: n,
                    select: !0,
                    bounds: {
                        anchor: l,
                        focus: u
                    }
                }), !0
            }
        }
        return r.SlateTransforms.delete(e, {
            at: o,
            unit: t,
            reverse: n,
            select: !0
        }), !0
    }
    let l = i.Editor.positions;

    function* u(e) {
        var t, n, i, r, a, o, u, d;
        let _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                at: c = e.selection,
                unit: E = "offset",
                reverse: I = !1,
                voids: T = !1
            } = null != _ ? _ : {};
        if ("word" !== E) {
            for (let t of l(e, {
                    ..._,
                    voids: T || "block" === E
                })) yield t;
            return
        }
        if (null == c) return;
        let f = s.EditorUtils.range(e, c),
            [S, h] = s.RangeUtils.edges(f),
            A = s.EditorUtils.richValue(e),
            m = I ? -1 : 1,
            N = null !== (i = null === (t = S.path) || void 0 === t ? void 0 : t[0]) && void 0 !== i ? i : 0,
            p = null !== (r = null === (n = h.path) || void 0 === n ? void 0 : n[0]) && void 0 !== r ? r : A.length - 1,
            O = I ? N : p,
            R = I ? p : N;
        for (;;) {
            let t = A[R],
                n = null !== (u = R === N ? null === (a = S.path) || void 0 === a ? void 0 : a[1] : null) && void 0 !== u ? u : 0,
                i = null !== (d = R === p ? null === (o = h.path) || void 0 === o ? void 0 : o[1] : null) && void 0 !== d ? d : t.children.length - 1,
                r = I ? i : n,
                c = I ? n : i,
                E = r;
            for (;;) {
                let n, i;
                let r = t.children[E],
                    a = [R, E];
                if (n = s.PathUtils.equals(a, S.path) || s.PathUtils.isAncestor(a, S.path) ? !I && s.EditorUtils.isEnd(e, S, a) ? null : S : s.EditorUtils.start(e, a), i = s.PathUtils.equals(a, h.path) || s.PathUtils.isAncestor(a, h.path) ? I && s.EditorUtils.isStart(e, h, a) ? null : h : s.EditorUtils.end(e, a), null != n && null != i) {
                    if (s.TextUtils.isText(r) && 0 === r.text.length) {
                        let e = {
                            path: a,
                            offset: 0
                        };
                        yield e, yield e
                    } else if (s.EditorUtils.isInline(e, r) && s.TextUtils.isText(r.children[0]) && 0 === r.children[0].text.length) {
                        let e = {
                            path: s.PathUtils.child(a, 0),
                            offset: 0
                        };
                        yield e, yield e
                    } else {
                        let t = {
                            anchor: n,
                            focus: i
                        };
                        for (let n of l(e, {
                                ..._,
                                at: t
                            })) yield n
                    }
                }
                if (E === c) break;
                E += m
            }
            if (R === O) break;
            R += m
        }
    }
}