function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        checkModifiers: function() {
            return c
        },
        default: function() {
            return E
        }
    }), n("47120");
    var i = n("653603"),
        r = n.n(i),
        s = n("512722"),
        a = n.n(s),
        o = n("53529"),
        l = n("50659"),
        u = n("436660"),
        d = n("887490"),
        _ = n("981631");

    function c(e, t) {
        let {
            cmd: n = !1,
            ctrl: i = !1,
            alt: r = !1,
            shift: s = !1
        } = t;
        return (null == n || e.metaKey === n) && (null == i || e.ctrlKey === i) && (null == r || e.altKey === r) && (null == s || e.shiftKey === s)
    }

    function E(e) {
        return e.onKeyDown = t => {
            var n, i, s, E;
            let I = e.isMac;
            switch (t.which) {
                case _.KeyboardKeys.B:
                    if (!d.EditorUtils.isEditorEmpty(e) && c(t, {
                            ctrl: !I,
                            cmd: I
                        })) return (0, l.toggleMarkdownStyle)(e, "bold"), !0;
                    break;
                case _.KeyboardKeys.I:
                    if (!d.EditorUtils.isEditorEmpty(e) && c(t, {
                            ctrl: !I,
                            cmd: I
                        })) return (0, l.toggleMarkdownStyle)(e, "italics"), !0;
                    break;
                case _.KeyboardKeys.U:
                    if (!d.EditorUtils.isEditorEmpty(e) && c(t, {
                            ctrl: !I,
                            cmd: I
                        })) return (0, l.toggleMarkdownStyle)(e, "underline"), !0;
                    break;
                case _.KeyboardKeys.S:
                    if (!d.EditorUtils.isEditorEmpty(e) && c(t, {
                            ctrl: !I,
                            cmd: I,
                            shift: !0
                        })) return (0, l.toggleMarkdownStyle)(e, "strikethrough"), !0;
                    break;
                case _.KeyboardKeys.TAB:
                    if (null != e.selection && c(t, {
                            shift: null
                        })) {
                        let [i, r] = d.RangeUtils.edges(e.selection), s = d.EditorUtils.blocks(e).slice(i.path[0], r.path[0] + 1), a = !0;
                        for (let [e] of s)
                            if ("line" !== e.type || !(null === (n = e.codeBlockState) || void 0 === n ? void 0 : n.isInCodeBlock)) {
                                a = !1;
                                break
                            } if (a) {
                            if (!t.shiftKey && d.RangeUtils.isCollapsed(e.selection)) return u.SlateTransforms.insertText(e, "  "), !0;
                            let n = !t.shiftKey;
                            return o.HistoryUtils.withSingleEntry(e, () => {
                                var t, i, r, a;
                                let o = null !== (r = null === (t = e.selection) || void 0 === t ? void 0 : t.anchor) && void 0 !== r ? r : d.EditorUtils.start(e, []),
                                    l = null !== (a = null === (i = e.selection) || void 0 === i ? void 0 : i.focus) && void 0 !== a ? a : d.EditorUtils.end(e, []);
                                for (let [t, i] of s) {
                                    let r = t.children[0];
                                    if (!d.TextUtils.isText(t.children[0])) continue;
                                    let s = d.PathUtils.child(i, 0),
                                        a = {
                                            path: s,
                                            offset: 0
                                        };
                                    if (n) u.SlateTransforms.insertText(e, "  ", {
                                        at: a
                                    }), d.PathUtils.equals(o.path, s) && 0 !== o.offset && (o = {
                                        path: s,
                                        offset: o.offset + 2
                                    }), d.PathUtils.equals(l.path, s) && 0 !== l.offset && (l = {
                                        path: s,
                                        offset: l.offset + 2
                                    });
                                    else if (r.text.startsWith("  ")) {
                                        let t = {
                                            path: d.PathUtils.child(i, 0),
                                            offset: 2
                                        };
                                        u.SlateTransforms.delete(e, {
                                            at: {
                                                anchor: a,
                                                focus: t
                                            }
                                        }), d.PathUtils.equals(o.path, s) && (o = {
                                            path: s,
                                            offset: Math.max(0, o.offset - 2)
                                        }), d.PathUtils.equals(l.path, s) && (l = {
                                            path: s,
                                            offset: Math.max(0, l.offset - 2)
                                        })
                                    }
                                }
                                u.SlateTransforms.select(e, {
                                    anchor: o,
                                    focus: l
                                })
                            }), !0
                        }
                    }
                    break;
                case _.KeyboardKeys.ARROW_LEFT:
                case _.KeyboardKeys.ARROW_RIGHT: {
                    let n, a;
                    if (c(t, {
                            shift: null
                        })) n = "character";
                    else if (c(t, {
                            ctrl: !I,
                            alt: I,
                            shift: null
                        })) n = "word";
                    else if (I && c(t, {
                            cmd: !0,
                            shift: null
                        })) return !1;
                    else return !1;
                    t.shiftKey && (a = "focus");
                    let o = e.children[null !== (E = null === (s = e.selection) || void 0 === s ? void 0 : null === (i = s.focus) || void 0 === i ? void 0 : i.path[0]) && void 0 !== E ? E : 0],
                        l = "rtl" === r()(d.NodeUtils.string(o)),
                        T = t.which === _.KeyboardKeys.ARROW_LEFT == !l;
                    return u.SlateTransforms.keyboardMove(e, {
                        reverse: T,
                        unit: n,
                        edge: a
                    }), !0
                }
                case _.KeyboardKeys.A:
                    if (I && c(t, {
                            ctrl: !0
                        })) {
                        let t = d.EditorUtils.getCurrentBlock(e);
                        if (null != t) {
                            let [, n] = t, i = {
                                path: d.PathUtils.child(n, 0),
                                offset: 0
                            };
                            return u.SlateTransforms.select(e, {
                                anchor: i,
                                focus: i
                            }), !0
                        }
                    }
                    break;
                case _.KeyboardKeys.E:
                    if (I && c(t, {
                            ctrl: !0
                        })) {
                        let t = d.EditorUtils.getCurrentBlock(e);
                        if (null != t) {
                            let [n, i] = t, r = d.PathUtils.child(i, n.children.length - 1), [s] = d.EditorUtils.node(e, r), a = {
                                path: r,
                                offset: s.text.length
                            };
                            return u.SlateTransforms.select(e, {
                                anchor: a,
                                focus: a
                            }), !0
                        }
                    }
                    break;
                case _.KeyboardKeys.BACKSPACE:
                case _.KeyboardKeys.DELETE:
                case _.KeyboardKeys.K:
                    let T = t.which === _.KeyboardKeys.BACKSPACE;
                    if ((!I && t.which !== _.KeyboardKeys.K && c(t, {
                            ctrl: !0,
                            shift: !0
                        }) || I && t.which !== _.KeyboardKeys.K && c(t, {
                            cmd: !0
                        }) || I && t.which === _.KeyboardKeys.K && c(t, {
                            ctrl: !0
                        })) && null != e.selection) {
                        let [t, n] = d.RangeUtils.edges(e.selection), [i, r] = d.EditorUtils.node(e, [T ? t.path[0] : n.path[0]]);
                        if (a()(d.ElementUtils.isElement(i) && d.EditorUtils.isBlock(e, i), "Top-most node of selection is not a block"), T && !d.PointUtils.isAtStart(t, [i, r]) || !T && !d.PointUtils.isAtEnd(n, [i, r])) return T ? e.deleteBackward("line") : e.deleteForward("line"), !0
                    }
            }
            return !1
        }, e
    }
}