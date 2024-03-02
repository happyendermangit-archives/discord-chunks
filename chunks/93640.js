function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        checkModifiers: function() {
            return f
        },
        default: function() {
            return m
        }
    }), n("222007");
    var l = n("717837"),
        i = n.n(l),
        a = n("627445"),
        s = n.n(a),
        r = n("83800"),
        o = n("916429"),
        u = n("939563"),
        d = n("385887"),
        c = n("49111");

    function f(e, t) {
        let {
            cmd: n = !1,
            ctrl: l = !1,
            alt: i = !1,
            shift: a = !1
        } = t;
        return (null == n || e.metaKey === n) && (null == l || e.ctrlKey === l) && (null == i || e.altKey === i) && (null == a || e.shiftKey === a)
    }

    function m(e) {
        return e.onKeyDown = t => {
            var n, l, a, m;
            let p = e.isMac;
            switch (t.which) {
                case c.KeyboardKeys.B:
                    if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                            ctrl: !p,
                            cmd: p
                        })) return (0, o.toggleMarkdownStyle)(e, "bold"), !0;
                    break;
                case c.KeyboardKeys.I:
                    if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                            ctrl: !p,
                            cmd: p
                        })) return (0, o.toggleMarkdownStyle)(e, "italics"), !0;
                    break;
                case c.KeyboardKeys.U:
                    if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                            ctrl: !p,
                            cmd: p
                        })) return (0, o.toggleMarkdownStyle)(e, "underline"), !0;
                    break;
                case c.KeyboardKeys.S:
                    if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                            ctrl: !p,
                            cmd: p,
                            shift: !0
                        })) return (0, o.toggleMarkdownStyle)(e, "strikethrough"), !0;
                    break;
                case c.KeyboardKeys.TAB:
                    if (null != e.selection && f(t, {
                            shift: null
                        })) {
                        let [l, i] = d.RangeUtils.edges(e.selection), a = d.EditorUtils.blocks(e).slice(l.path[0], i.path[0] + 1), s = !0;
                        for (let [e] of a)
                            if ("line" !== e.type || !(null === (n = e.codeBlockState) || void 0 === n ? void 0 : n.isInCodeBlock)) {
                                s = !1;
                                break
                            } if (s) {
                            if (!t.shiftKey && d.RangeUtils.isCollapsed(e.selection)) return u.SlateTransforms.insertText(e, "  "), !0;
                            let n = !t.shiftKey;
                            return r.HistoryUtils.withSingleEntry(e, () => {
                                var t, l, i, s;
                                let r = null !== (i = null === (t = e.selection) || void 0 === t ? void 0 : t.anchor) && void 0 !== i ? i : d.EditorUtils.start(e, []),
                                    o = null !== (s = null === (l = e.selection) || void 0 === l ? void 0 : l.focus) && void 0 !== s ? s : d.EditorUtils.end(e, []);
                                for (let [t, l] of a) {
                                    let i = t.children[0];
                                    if (!d.TextUtils.isText(t.children[0])) continue;
                                    let a = d.PathUtils.child(l, 0),
                                        s = {
                                            path: a,
                                            offset: 0
                                        };
                                    if (n) u.SlateTransforms.insertText(e, "  ", {
                                        at: s
                                    }), d.PathUtils.equals(r.path, a) && 0 !== r.offset && (r = {
                                        path: a,
                                        offset: r.offset + 2
                                    }), d.PathUtils.equals(o.path, a) && 0 !== o.offset && (o = {
                                        path: a,
                                        offset: o.offset + 2
                                    });
                                    else if (i.text.startsWith("  ")) {
                                        let t = {
                                            path: d.PathUtils.child(l, 0),
                                            offset: 2
                                        };
                                        u.SlateTransforms.delete(e, {
                                            at: {
                                                anchor: s,
                                                focus: t
                                            }
                                        }), d.PathUtils.equals(r.path, a) && (r = {
                                            path: a,
                                            offset: Math.max(0, r.offset - 2)
                                        }), d.PathUtils.equals(o.path, a) && (o = {
                                            path: a,
                                            offset: Math.max(0, o.offset - 2)
                                        })
                                    }
                                }
                                u.SlateTransforms.select(e, {
                                    anchor: r,
                                    focus: o
                                })
                            }), !0
                        }
                    }
                    break;
                case c.KeyboardKeys.ARROW_LEFT:
                case c.KeyboardKeys.ARROW_RIGHT: {
                    let n, s;
                    if (f(t, {
                            shift: null
                        })) n = "character";
                    else if (f(t, {
                            ctrl: !p,
                            alt: p,
                            shift: null
                        })) n = "word";
                    else if (p && f(t, {
                            cmd: !0,
                            shift: null
                        })) return !1;
                    else return !1;
                    t.shiftKey && (s = "focus");
                    let r = e.children[null !== (m = null === (a = e.selection) || void 0 === a ? void 0 : null === (l = a.focus) || void 0 === l ? void 0 : l.path[0]) && void 0 !== m ? m : 0],
                        o = "rtl" === i(d.NodeUtils.string(r)),
                        h = t.which === c.KeyboardKeys.ARROW_LEFT == !o;
                    return u.SlateTransforms.keyboardMove(e, {
                        reverse: h,
                        unit: n,
                        edge: s
                    }), !0
                }
                case c.KeyboardKeys.A:
                    if (p && f(t, {
                            ctrl: !0
                        })) {
                        let t = d.EditorUtils.getCurrentBlock(e);
                        if (null != t) {
                            let [, n] = t, l = d.PathUtils.child(n, 0), i = {
                                path: l,
                                offset: 0
                            };
                            return u.SlateTransforms.select(e, {
                                anchor: i,
                                focus: i
                            }), !0
                        }
                    }
                    break;
                case c.KeyboardKeys.E:
                    if (p && f(t, {
                            ctrl: !0
                        })) {
                        let t = d.EditorUtils.getCurrentBlock(e);
                        if (null != t) {
                            let [n, l] = t, i = d.PathUtils.child(l, n.children.length - 1), [a] = d.EditorUtils.node(e, i), s = {
                                path: i,
                                offset: a.text.length
                            };
                            return u.SlateTransforms.select(e, {
                                anchor: s,
                                focus: s
                            }), !0
                        }
                    }
                    break;
                case c.KeyboardKeys.BACKSPACE:
                case c.KeyboardKeys.DELETE:
                case c.KeyboardKeys.K:
                    let h = t.which === c.KeyboardKeys.BACKSPACE;
                    if ((!p && t.which !== c.KeyboardKeys.K && f(t, {
                            ctrl: !0,
                            shift: !0
                        }) || p && t.which !== c.KeyboardKeys.K && f(t, {
                            cmd: !0
                        }) || p && t.which === c.KeyboardKeys.K && f(t, {
                            ctrl: !0
                        })) && null != e.selection) {
                        let [t, n] = d.RangeUtils.edges(e.selection), [l, i] = d.EditorUtils.node(e, [h ? t.path[0] : n.path[0]]);
                        if (s(d.ElementUtils.isElement(l) && d.EditorUtils.isBlock(e, l), "Top-most node of selection is not a block"), h && !d.PointUtils.isAtStart(t, [l, i]) || !h && !d.PointUtils.isAtEnd(n, [l, i])) return h ? e.deleteBackward("line") : e.deleteForward("line"), !0
                    }
            }
            return !1
        }, e
    }
}