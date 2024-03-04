function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007"), n("106442"), n("175143");
    var l = n("987295"),
        i = n("939563"),
        a = n("385887");

    function s(e) {
        let {
            apply: t,
            deleteBackward: n,
            deleteForward: s,
            deleteFragment: o,
            insertText: d
        } = e;
        return e.apply = n => {
            var l;
            if ("set_selection" === n.type && (null === (l = e.composition) || void 0 === l ? void 0 : l.startedInsideInline) && a.RangeUtils.isRange(n.properties) && a.RangeUtils.isRange(n.newProperties) && a.RangeUtils.isCollapsed(n.newProperties)) {
                let t = a.EditorUtils.getParentInline(e, n.properties),
                    l = a.EditorUtils.getParentInline(e, n.newProperties);
                if (null != t && (null == l || !a.PathUtils.equals(t[1], l[1]))) return
            }
            t(n)
        }, e.insertText = t => {
            if (null != e.selection) {
                let n = a.EditorUtils.getCurrentInline(e);
                if (null != n) {
                    i.SlateTransforms.insertText(e, t);
                    return
                }
            }
            d(t)
        }, e.deleteBackward = t => {
            !r(e, t, !0) && n(t)
        }, e.deleteForward = t => {
            !r(e, t, !1) && s(t)
        }, e.deleteFragment = t => {
            if (null != e.selection && a.RangeUtils.isExpanded(e.selection)) {
                var n, l, s, r;
                let u = e.selection.anchor,
                    d = e.selection.focus,
                    c = a.EditorUtils.getParentInline(e, u),
                    f = a.EditorUtils.getParentInline(e, d);
                if (null != c && null != f && a.PathUtils.equals(c[1], f[1])) {
                    o(t);
                    return
                }
                let m = a.RangeUtils.isForward(e.selection);
                if (null != c) {
                    let [, t] = c, [i, s] = a.EditorUtils.edges(e, t);
                    m && a.PointUtils.equals(u, i) ? u = null !== (n = a.EditorUtils.before(e, i)) && void 0 !== n ? n : a.EditorUtils.start(e, []) : !m && a.PointUtils.equals(u, s) && (u = null !== (l = a.EditorUtils.after(e, s)) && void 0 !== l ? l : a.EditorUtils.end(e, []))
                }
                if (null != f) {
                    let [, t] = f, [n, l] = a.EditorUtils.edges(e, t);
                    !m && a.PointUtils.equals(d, n) ? d = null !== (s = a.EditorUtils.before(e, n)) && void 0 !== s ? s : a.EditorUtils.start(e, []) : m && a.PointUtils.equals(d, l) && (d = null !== (r = a.EditorUtils.after(e, l)) && void 0 !== r ? r : a.EditorUtils.end(e, []))
                }
                i.SlateTransforms.delete(e, {
                    at: {
                        anchor: u,
                        focus: d
                    },
                    reverse: "backward" === t,
                    select: !0
                });
                return
            }
            o(t)
        }, l.Editor.positions = u, e
    }

    function r(e, t, n) {
        let l = a.EditorUtils.getCurrentInline(e),
            s = a.EditorUtils.getCurrentBlock(e),
            r = a.RangeUtils.toPoint(e.selection);
        if (null == r || null == s || "block" === t) return !0;
        if ("line" === t && null == l) return !1;
        let o = l;
        if (null == o) {
            let t = (n ? a.EditorUtils.before : a.EditorUtils.after)(e, r);
            null != t && null != (o = a.EditorUtils.getParentInline(e, t)) && (r = t)
        }
        if (null != o) {
            let [l, s] = o;
            if (a.EditorUtils.isEmpty(e, l) || a.EditorUtils.isVoid(e, l)) i.SlateTransforms.removeInline(e, s);
            else {
                let [l, o] = a.EditorUtils.edges(e, s);
                i.SlateTransforms.delete(e, {
                    at: r,
                    unit: t,
                    reverse: n,
                    select: !0,
                    bounds: {
                        anchor: l,
                        focus: o
                    }
                })
            }
            return !0
        }
        let u = !1;
        if (null != s) {
            let [, t] = s, [l, i] = a.EditorUtils.edges(e, t);
            u = n && a.PointUtils.equals(r, l) || !n && a.PointUtils.equals(r, i)
        }
        if ("word" === t && !u) {
            let l = a.EditorUtils.getCurrentText(e);
            if (null != l) {
                let [, s] = l, [o, u] = a.EditorUtils.edges(e, s);
                return i.SlateTransforms.delete(e, {
                    at: r,
                    unit: t,
                    reverse: n,
                    select: !0,
                    bounds: {
                        anchor: o,
                        focus: u
                    }
                }), !0
            }
        }
        return i.SlateTransforms.delete(e, {
            at: r,
            unit: t,
            reverse: n,
            select: !0
        }), !0
    }
    let o = l.Editor.positions;

    function* u(e) {
        var t, n, l, i, s, r, u, d;
        let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                at: f = e.selection,
                unit: m = "offset",
                reverse: p = !1,
                voids: h = !1
            } = null != c ? c : {};
        if ("word" !== m) {
            for (let t of o(e, {
                    ...c,
                    voids: h || "block" === m
                })) yield t;
            return
        }
        if (null == f) return;
        let E = a.EditorUtils.range(e, f),
            [g, C] = a.RangeUtils.edges(E),
            S = a.EditorUtils.richValue(e),
            T = p ? -1 : 1,
            v = null !== (l = null === (t = g.path) || void 0 === t ? void 0 : t[0]) && void 0 !== l ? l : 0,
            I = null !== (i = null === (n = C.path) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : S.length - 1,
            _ = p ? v : I,
            N = p ? I : v;
        for (;;) {
            let t = S[N],
                n = null !== (u = N === v ? null === (s = g.path) || void 0 === s ? void 0 : s[1] : null) && void 0 !== u ? u : 0,
                l = null !== (d = N === I ? null === (r = C.path) || void 0 === r ? void 0 : r[1] : null) && void 0 !== d ? d : t.children.length - 1,
                i = p ? l : n,
                f = p ? n : l,
                m = i;
            for (;;) {
                let n, l;
                let i = t.children[m],
                    s = [N, m];
                if (n = a.PathUtils.equals(s, g.path) || a.PathUtils.isAncestor(s, g.path) ? !p && a.EditorUtils.isEnd(e, g, s) ? null : g : a.EditorUtils.start(e, s), l = a.PathUtils.equals(s, C.path) || a.PathUtils.isAncestor(s, C.path) ? p && a.EditorUtils.isStart(e, C, s) ? null : C : a.EditorUtils.end(e, s), null != n && null != l) {
                    if (a.TextUtils.isText(i) && 0 === i.text.length) {
                        let e = {
                            path: s,
                            offset: 0
                        };
                        yield e, yield e
                    } else if (a.EditorUtils.isInline(e, i) && a.TextUtils.isText(i.children[0]) && 0 === i.children[0].text.length) {
                        let e = {
                            path: a.PathUtils.child(s, 0),
                            offset: 0
                        };
                        yield e, yield e
                    } else {
                        let t = {
                            anchor: n,
                            focus: l
                        };
                        for (let n of o(e, {
                                ...c,
                                at: t
                            })) yield n
                    }
                }
                if (m === f) break;
                m += T
            }
            if (N === _) break;
            N += T
        }
    }
}