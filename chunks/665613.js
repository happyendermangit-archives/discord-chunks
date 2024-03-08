function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007"), n("106442"), n("175143");
    var i = n("987295"),
        l = n("939563"),
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
            var i;
            if ("set_selection" === n.type && (null === (i = e.composition) || void 0 === i ? void 0 : i.startedInsideInline) && a.RangeUtils.isRange(n.properties) && a.RangeUtils.isRange(n.newProperties) && a.RangeUtils.isCollapsed(n.newProperties)) {
                let t = a.EditorUtils.getParentInline(e, n.properties),
                    i = a.EditorUtils.getParentInline(e, n.newProperties);
                if (null != t && (null == i || !a.PathUtils.equals(t[1], i[1]))) return
            }
            t(n)
        }, e.insertText = t => {
            if (null != e.selection) {
                let n = a.EditorUtils.getCurrentInline(e);
                if (null != n) {
                    l.SlateTransforms.insertText(e, t);
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
                var n, i, s, r;
                let u = e.selection.anchor,
                    d = e.selection.focus,
                    c = a.EditorUtils.getParentInline(e, u),
                    f = a.EditorUtils.getParentInline(e, d);
                if (null != c && null != f && a.PathUtils.equals(c[1], f[1])) {
                    o(t);
                    return
                }
                let p = a.RangeUtils.isForward(e.selection);
                if (null != c) {
                    let [, t] = c, [l, s] = a.EditorUtils.edges(e, t);
                    p && a.PointUtils.equals(u, l) ? u = null !== (n = a.EditorUtils.before(e, l)) && void 0 !== n ? n : a.EditorUtils.start(e, []) : !p && a.PointUtils.equals(u, s) && (u = null !== (i = a.EditorUtils.after(e, s)) && void 0 !== i ? i : a.EditorUtils.end(e, []))
                }
                if (null != f) {
                    let [, t] = f, [n, i] = a.EditorUtils.edges(e, t);
                    !p && a.PointUtils.equals(d, n) ? d = null !== (s = a.EditorUtils.before(e, n)) && void 0 !== s ? s : a.EditorUtils.start(e, []) : p && a.PointUtils.equals(d, i) && (d = null !== (r = a.EditorUtils.after(e, i)) && void 0 !== r ? r : a.EditorUtils.end(e, []))
                }
                l.SlateTransforms.delete(e, {
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
        }, i.Editor.positions = u, e
    }

    function r(e, t, n) {
        let i = a.EditorUtils.getCurrentInline(e),
            s = a.EditorUtils.getCurrentBlock(e),
            r = a.RangeUtils.toPoint(e.selection);
        if (null == r || null == s || "block" === t) return !0;
        if ("line" === t && null == i) return !1;
        let o = i;
        if (null == o) {
            let t = (n ? a.EditorUtils.before : a.EditorUtils.after)(e, r);
            null != t && null != (o = a.EditorUtils.getParentInline(e, t)) && (r = t)
        }
        if (null != o) {
            let [i, s] = o;
            if (a.EditorUtils.isEmpty(e, i) || a.EditorUtils.isVoid(e, i)) l.SlateTransforms.removeInline(e, s);
            else {
                let [i, o] = a.EditorUtils.edges(e, s);
                l.SlateTransforms.delete(e, {
                    at: r,
                    unit: t,
                    reverse: n,
                    select: !0,
                    bounds: {
                        anchor: i,
                        focus: o
                    }
                })
            }
            return !0
        }
        let u = !1;
        if (null != s) {
            let [, t] = s, [i, l] = a.EditorUtils.edges(e, t);
            u = n && a.PointUtils.equals(r, i) || !n && a.PointUtils.equals(r, l)
        }
        if ("word" === t && !u) {
            let i = a.EditorUtils.getCurrentText(e);
            if (null != i) {
                let [, s] = i, [o, u] = a.EditorUtils.edges(e, s);
                return l.SlateTransforms.delete(e, {
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
        return l.SlateTransforms.delete(e, {
            at: r,
            unit: t,
            reverse: n,
            select: !0
        }), !0
    }
    let o = i.Editor.positions;

    function* u(e) {
        var t, n, i, l, s, r, u, d;
        let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                at: f = e.selection,
                unit: p = "offset",
                reverse: m = !1,
                voids: h = !1
            } = null != c ? c : {};
        if ("word" !== p) {
            for (let t of o(e, {
                    ...c,
                    voids: h || "block" === p
                })) yield t;
            return
        }
        if (null == f) return;
        let x = a.EditorUtils.range(e, f),
            [E, y] = a.RangeUtils.edges(x),
            g = a.EditorUtils.richValue(e),
            S = m ? -1 : 1,
            C = null !== (i = null === (t = E.path) || void 0 === t ? void 0 : t[0]) && void 0 !== i ? i : 0,
            I = null !== (l = null === (n = y.path) || void 0 === n ? void 0 : n[0]) && void 0 !== l ? l : g.length - 1,
            T = m ? C : I,
            _ = m ? I : C;
        for (;;) {
            let t = g[_],
                n = null !== (u = _ === C ? null === (s = E.path) || void 0 === s ? void 0 : s[1] : null) && void 0 !== u ? u : 0,
                i = null !== (d = _ === I ? null === (r = y.path) || void 0 === r ? void 0 : r[1] : null) && void 0 !== d ? d : t.children.length - 1,
                l = m ? i : n,
                f = m ? n : i,
                p = l;
            for (;;) {
                let n, i;
                let l = t.children[p],
                    s = [_, p];
                if (n = a.PathUtils.equals(s, E.path) || a.PathUtils.isAncestor(s, E.path) ? !m && a.EditorUtils.isEnd(e, E, s) ? null : E : a.EditorUtils.start(e, s), i = a.PathUtils.equals(s, y.path) || a.PathUtils.isAncestor(s, y.path) ? m && a.EditorUtils.isStart(e, y, s) ? null : y : a.EditorUtils.end(e, s), null != n && null != i) {
                    if (a.TextUtils.isText(l) && 0 === l.text.length) {
                        let e = {
                            path: s,
                            offset: 0
                        };
                        yield e, yield e
                    } else if (a.EditorUtils.isInline(e, l) && a.TextUtils.isText(l.children[0]) && 0 === l.children[0].text.length) {
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
                        for (let n of o(e, {
                                ...c,
                                at: t
                            })) yield n
                    }
                }
                if (p === f) break;
                p += S
            }
            if (_ === T) break;
            _ += S
        }
    }
}