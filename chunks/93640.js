function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        checkModifiers: function() {
            return f
        },
        default: function() {
            return p
        }
    }), n("222007");
    var i = n("717837"),
        l = n.n(i),
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
            ctrl: i = !1,
            alt: l = !1,
            shift: a = !1
        } = t;
        return (null == n || e.metaKey === n) && (null == i || e.ctrlKey === i) && (null == l || e.altKey === l) && (null == a || e.shiftKey === a)
    }

    function p(e) {
        return e.onKeyDown = t => {
            var n, i, a, p;
            let m = e.isMac;
            switch (t.which) {
                case c.KeyboardKeys.B:
                    if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                            ctrl: !m,
                            cmd: m
                        })) return (0, o.toggleMarkdownStyle)(e, "bold"), !0;
                    break;
                case c.KeyboardKeys.I:
                    if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                            ctrl: !m,
                            cmd: m
                        })) return (0, o.toggleMarkdownStyle)(e, "italics"), !0;
                    break;
                case c.KeyboardKeys.U:
                    if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                            ctrl: !m,
                            cmd: m
                        })) return (0, o.toggleMarkdownStyle)(e, "underline"), !0;
                    break;
                case c.KeyboardKeys.S:
                    if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                            ctrl: !m,
                            cmd: m,
                            shift: !0
                        })) return (0, o.toggleMarkdownStyle)(e, "strikethrough"), !0;
                    break;
                case c.KeyboardKeys.TAB:
                    if (null != e.selection && f(t, {
                            shift: null
                        })) {
                        let [i, l] = d.RangeUtils.edges(e.selection), a = d.EditorUtils.blocks(e).slice(i.path[0], l.path[0] + 1), s = !0;
                        for (let [e] of a)
                            if ("line" !== e.type || !(null === (n = e.codeBlockState) || void 0 === n ? void 0 : n.isInCodeBlock)) {
                                s = !1;
                                break
                            } if (s) {
                            if (!t.shiftKey && d.RangeUtils.isCollapsed(e.selection)) return u.SlateTransforms.insertText(e, "  "), !0;
                            let n = !t.shiftKey;
                            return r.HistoryUtils.withSingleEntry(e, () => {
                                var t, i, l, s;
                                let r = null !== (l = null === (t = e.selection) || void 0 === t ? void 0 : t.anchor) && void 0 !== l ? l : d.EditorUtils.start(e, []),
                                    o = null !== (s = null === (i = e.selection) || void 0 === i ? void 0 : i.focus) && void 0 !== s ? s : d.EditorUtils.end(e, []);
                                for (let [t, i] of a) {
                                    let l = t.children[0];
                                    if (!d.TextUtils.isText(t.children[0])) continue;
                                    let a = d.PathUtils.child(i, 0),
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
                                    else if (l.text.startsWith("  ")) {
                                        let t = {
                                            path: d.PathUtils.child(i, 0),
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
                            ctrl: !m,
                            alt: m,
                            shift: null
                        })) n = "word";
                    else if (m && f(t, {
                            cmd: !0,
                            shift: null
                        })) return !1;
                    else return !1;
                    t.shiftKey && (s = "focus");
                    let r = e.children[null !== (p = null === (a = e.selection) || void 0 === a ? void 0 : null === (i = a.focus) || void 0 === i ? void 0 : i.path[0]) && void 0 !== p ? p : 0],
                        o = "rtl" === l(d.NodeUtils.string(r)),
                        h = t.which === c.KeyboardKeys.ARROW_LEFT == !o;
                    return u.SlateTransforms.keyboardMove(e, {
                        reverse: h,
                        unit: n,
                        edge: s
                    }), !0
                }
                case c.KeyboardKeys.A:
                    if (m && f(t, {
                            ctrl: !0
                        })) {
                        let t = d.EditorUtils.getCurrentBlock(e);
                        if (null != t) {
                            let [, n] = t, i = d.PathUtils.child(n, 0), l = {
                                path: i,
                                offset: 0
                            };
                            return u.SlateTransforms.select(e, {
                                anchor: l,
                                focus: l
                            }), !0
                        }
                    }
                    break;
                case c.KeyboardKeys.E:
                    if (m && f(t, {
                            ctrl: !0
                        })) {
                        let t = d.EditorUtils.getCurrentBlock(e);
                        if (null != t) {
                            let [n, i] = t, l = d.PathUtils.child(i, n.children.length - 1), [a] = d.EditorUtils.node(e, l), s = {
                                path: l,
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
                    if ((!m && t.which !== c.KeyboardKeys.K && f(t, {
                            ctrl: !0,
                            shift: !0
                        }) || m && t.which !== c.KeyboardKeys.K && f(t, {
                            cmd: !0
                        }) || m && t.which === c.KeyboardKeys.K && f(t, {
                            ctrl: !0
                        })) && null != e.selection) {
                        let [t, n] = d.RangeUtils.edges(e.selection), [i, l] = d.EditorUtils.node(e, [h ? t.path[0] : n.path[0]]);
                        if (s(d.ElementUtils.isElement(i) && d.EditorUtils.isBlock(e, i), "Top-most node of selection is not a block"), h && !d.PointUtils.isAtStart(t, [i, l]) || !h && !d.PointUtils.isAtEnd(n, [i, l])) return h ? e.deleteBackward("line") : e.deleteForward("line"), !0
                    }
            }
            return !1
        }, e
    }
}