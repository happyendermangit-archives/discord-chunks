function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("47120"), n("571269"), n("298267");
    var i = n("327432"),
        r = n("436660"),
        a = n("887490");

    function s(e) {
        let {
            apply: t,
            deleteBackward: n,
            deleteForward: s,
            deleteFragment: l,
            insertText: d
        } = e;
        return e.apply = n => {
            var i;
            if ("set_selection" === n.type && (null === (i = e.composition) || void 0 === i ? void 0 : i.startedInsideInline) && a.RangeUtils.isRange(n.properties) && a.RangeUtils.isRange(n.newProperties) && a.RangeUtils.isCollapsed(n.newProperties)) {
                let t = a.EditorUtils.getParentInline(e, n.properties),
                    i = a.EditorUtils.getParentInline(e, n.newProperties);
                if (null != t && (null == i || !a.PathUtils.equals(t[1], i[1]))) return
            }
            t(n)
        }, e.insertText = t => {
            if (null != e.selection && null != a.EditorUtils.getCurrentInline(e)) {
                r.SlateTransforms.insertText(e, t);
                return
            }
            d(t)
        }, e.deleteBackward = t => {
            !o(e, t, !0) && n(t)
        }, e.deleteForward = t => {
            !o(e, t, !1) && s(t)
        }, e.deleteFragment = t => {
            if (null != e.selection && a.RangeUtils.isExpanded(e.selection)) {
                var n, i, s, o;
                let u = e.selection.anchor,
                    d = e.selection.focus,
                    _ = a.EditorUtils.getParentInline(e, u),
                    c = a.EditorUtils.getParentInline(e, d);
                if (null != _ && null != c && a.PathUtils.equals(_[1], c[1])) {
                    l(t);
                    return
                }
                let E = a.RangeUtils.isForward(e.selection);
                if (null != _) {
                    let [, t] = _, [r, s] = a.EditorUtils.edges(e, t);
                    E && a.PointUtils.equals(u, r) ? u = null !== (n = a.EditorUtils.before(e, r)) && void 0 !== n ? n : a.EditorUtils.start(e, []) : !E && a.PointUtils.equals(u, s) && (u = null !== (i = a.EditorUtils.after(e, s)) && void 0 !== i ? i : a.EditorUtils.end(e, []))
                }
                if (null != c) {
                    let [, t] = c, [n, i] = a.EditorUtils.edges(e, t);
                    !E && a.PointUtils.equals(d, n) ? d = null !== (s = a.EditorUtils.before(e, n)) && void 0 !== s ? s : a.EditorUtils.start(e, []) : E && a.PointUtils.equals(d, i) && (d = null !== (o = a.EditorUtils.after(e, i)) && void 0 !== o ? o : a.EditorUtils.end(e, []))
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
        let i = a.EditorUtils.getCurrentInline(e),
            s = a.EditorUtils.getCurrentBlock(e),
            o = a.RangeUtils.toPoint(e.selection);
        if (null == o || null == s || "block" === t) return !0;
        if ("line" === t && null == i) return !1;
        let l = i;
        if (null == l) {
            let t = (n ? a.EditorUtils.before : a.EditorUtils.after)(e, o);
            null != t && null != (l = a.EditorUtils.getParentInline(e, t)) && (o = t)
        }
        if (null != l) {
            let [i, s] = l;
            if (a.EditorUtils.isEmpty(e, i) || a.EditorUtils.isVoid(e, i)) r.SlateTransforms.removeInline(e, s);
            else {
                let [i, l] = a.EditorUtils.edges(e, s);
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
        if (null != s) {
            let [, t] = s, [i, r] = a.EditorUtils.edges(e, t);
            u = n && a.PointUtils.equals(o, i) || !n && a.PointUtils.equals(o, r)
        }
        if ("word" === t && !u) {
            let i = a.EditorUtils.getCurrentText(e);
            if (null != i) {
                let [, s] = i, [l, u] = a.EditorUtils.edges(e, s);
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
        var t, n, i, r, s, o, u, d;
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
        let f = a.EditorUtils.range(e, c),
            [S, h] = a.RangeUtils.edges(f),
            A = a.EditorUtils.richValue(e),
            m = I ? -1 : 1,
            N = null !== (i = null === (t = S.path) || void 0 === t ? void 0 : t[0]) && void 0 !== i ? i : 0,
            p = null !== (r = null === (n = h.path) || void 0 === n ? void 0 : n[0]) && void 0 !== r ? r : A.length - 1,
            O = I ? N : p,
            R = I ? p : N;
        for (;;) {
            let t = A[R],
                n = null !== (u = R === N ? null === (s = S.path) || void 0 === s ? void 0 : s[1] : null) && void 0 !== u ? u : 0,
                i = null !== (d = R === p ? null === (o = h.path) || void 0 === o ? void 0 : o[1] : null) && void 0 !== d ? d : t.children.length - 1,
                r = I ? i : n,
                c = I ? n : i,
                E = r;
            for (;;) {
                let n, i;
                let r = t.children[E],
                    s = [R, E];
                if (n = a.PathUtils.equals(s, S.path) || a.PathUtils.isAncestor(s, S.path) ? !I && a.EditorUtils.isEnd(e, S, s) ? null : S : a.EditorUtils.start(e, s), i = a.PathUtils.equals(s, h.path) || a.PathUtils.isAncestor(s, h.path) ? I && a.EditorUtils.isStart(e, h, s) ? null : h : a.EditorUtils.end(e, s), null != n && null != i) {
                    if (a.TextUtils.isText(r) && 0 === r.text.length) {
                        let e = {
                            path: s,
                            offset: 0
                        };
                        yield e, yield e
                    } else if (a.EditorUtils.isInline(e, r) && a.TextUtils.isText(r.children[0]) && 0 === r.children[0].text.length) {
                        let e = {
                            path: a.PathUtils.child(s, 0),
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