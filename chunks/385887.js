function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EditorUtils: function() {
            return d
        },
        NodeUtils: function() {
            return c
        },
        ElementUtils: function() {
            return f
        },
        TextUtils: function() {
            return m
        },
        PathUtils: function() {
            return p
        },
        PointUtils: function() {
            return h
        },
        RangeUtils: function() {
            return E
        },
        SelectionUtils: function() {
            return g
        },
        DOMUtils: function() {
            return v
        }
    }), n("222007");
    var l = n("627445"),
        i = n.n(l),
        a = n("987295"),
        s = n("371621"),
        r = n("96342"),
        o = n("566819");
    n("903782");
    let u = !1;
    {
        let e = s.ReactEditor.findDocumentOrShadowRoot;
        s.ReactEditor.findDocumentOrShadowRoot = t => {
            var n, l;
            return null !== (l = null === (n = t.windowContext) || void 0 === n ? void 0 : n.renderWindow.document) && void 0 !== l ? l : e(t)
        }, u = !0
    }
    let d = {
            ...a.Editor,
            ...s.ReactEditor,
            richValue: e => e.children,
            blocks: e => d.richValue(e).map((e, t) => [e, [t]]),
            isBlock: (e, t) => f.isElement(t) && a.Editor.isBlock(e, t),
            isInline: (e, t) => f.isElement(t) && a.Editor.isInline(e, t),
            isVoid: (e, t) => f.isElement(t) && a.Editor.isVoid(e, t),
            isEditorEmpty(e) {
                let t = d.richValue(e);
                return !(t.length > 1) && (0 === t.length || "line" === t[0].type && f.isEmpty(t[0]))
            },
            getFirstText(e) {
                let t = d.node(e, o.FIRST_TEXT_PATH);
                return m.isText(t[0]) ? t[0] : null
            },
            getCurrentBlock(e) {
                return null == e.selection ? null : this.getParentBlock(e, e.selection)
            },
            getCurrentElement(e) {
                return null == e.selection ? null : this.getParentElement(e, e.selection)
            },
            getCurrentInline(e) {
                return null == e.selection ? null : this.getParentInline(e, e.selection)
            },
            getCurrentVoid(e) {
                return null == e.selection ? null : this.getParentVoid(e, e.selection)
            },
            getCurrentText(e) {
                let t = null != e.selection ? E.toPoint(e.selection) : null;
                return null == t ? null : d.node(e, t.path)
            },
            getParentBlock(e, t) {
                var n;
                return null !== (n = d.above(e, {
                    at: t,
                    match: t => f.isElement(t) && d.isBlock(e, t),
                    mode: "lowest"
                })) && void 0 !== n ? n : null
            },
            getParentElement(e, t) {
                var n;
                return null !== (n = d.above(e, {
                    at: t,
                    match: e => f.isElement(e),
                    mode: "lowest"
                })) && void 0 !== n ? n : null
            },
            getParentInline(e, t) {
                var n;
                return null !== (n = d.above(e, {
                    at: t,
                    match: t => d.isInline(e, t),
                    mode: "lowest"
                })) && void 0 !== n ? n : null
            },
            getParentVoid(e, t) {
                var n;
                return null !== (n = d.above(e, {
                    at: t,
                    match: t => d.isVoid(e, t),
                    mode: "lowest"
                })) && void 0 !== n ? n : null
            },
            getSelectedVoid(e) {
                let t;
                if (null == e.selection) return null;
                if (E.isExpanded(e.selection)) {
                    let [n, l] = E.edges(e.selection), i = d.after(e, n, {
                        unit: "offset"
                    }), a = d.before(e, l, {
                        unit: "offset"
                    });
                    if (null == i || null == a || !h.equals(i, a)) return null;
                    t = i
                } else t = e.selection.anchor;
                return null == t ? null : d.getParentVoid(e, t)
            },
            getSelectedText(e, t) {
                let n = null;
                if (t) {
                    let t = s.ReactEditor.findDocumentOrShadowRoot(e),
                        l = t.getSelection();
                    if (null != l && l.rangeCount > 0) {
                        let t = l.getRangeAt(0);
                        null != t && (n = s.ReactEditor.toSlateRange(e, t, {
                            exactMatch: !0,
                            suppressThrow: !0
                        }))
                    }
                } else n = e.selection;
                return null == n ? "" : this.getTextFromRange(e, n)
            },
            getTextFromRange(e, t) {
                let [n, l] = E.edges(t), i = d.nodes(e, {
                    at: t,
                    mode: "lowest",
                    match: e => m.isText(e)
                }), a = "";
                for (let [e, t] of i) {
                    let i = p.equals(t, n.path) ? n.offset : 0,
                        s = p.equals(t, l.path) ? l.offset : 0;
                    a += e.text.substring(i, s)
                }
                return a
            },
            withoutNormalizing(e, t) {
                let n = d.isNormalizing(e);
                d.setNormalizing(e, !1);
                try {
                    t()
                } finally {
                    d.setNormalizing(e, n)
                }!1 !== n && d.normalize(e)
            },
            areStylesDisabled(e) {
                var t;
                if (!e.previewMarkdown) return !0;
                let n = d.richValue(e),
                    l = n[0],
                    i = (null == l ? void 0 : l.type) === "line" ? l.children[0] : null;
                if (null == i || !m.isText(i)) return !1;
                let a = e.chatInputType,
                    s = i.text;
                return 1 === n.length && 1 === l.children.length && (!0 === a.sedReplace && s.startsWith("s/") || (null === (t = a.autocomplete) || void 0 === t ? void 0 : t.reactions) === !0 && s.startsWith("+"))
            },
            focus(e) {
                !s.ReactEditor.isFocused(e) && (s.ReactEditor.focus(e), s.ReactEditor.deselect(e))
            },
            getSelectionOverlap(e, t) {
                if (null == e.selection) return {
                    anchor: null,
                    focus: null
                };
                if (p.isPath(t)) {
                    let n = d.range(e, t),
                        [l] = d.node(e, t);
                    if (f.isElement(l)) {
                        let l = d.before(e, t),
                            i = d.after(e, t);
                        t = {
                            anchor: null != l ? l : n.anchor,
                            focus: null != i ? i : n.focus
                        }
                    } else t = n
                }
                let [n, l] = E.edges(t), i = null, a = null;
                return h.equals(e.selection.anchor, n) ? i = "start" : h.equals(e.selection.anchor, l) ? i = "end" : E.includes(t, e.selection.anchor) && (i = "inside"), h.equals(e.selection.focus, n) ? a = "start" : h.equals(e.selection.focus, l) ? a = "end" : E.includes(t, e.selection.focus) && (a = "inside"), {
                    anchor: i,
                    focus: a
                }
            }
        },
        c = {
            ...a.Node,
            isType: (e, t) => a.Element.isElement(e) && e.type === t,
            isInTypes: (e, t) => a.Element.isElement(e) && t.has(e.type)
        },
        f = {
            ...a.Element,
            updateElement(e, t) {
                let n = d.node(e, t[1]);
                return i(!d.isEditor(t[0]), "Element is the root node"), i(null != n, "Failed to find element"), i(f.isElement(n[0]), "Node at this path is no longer an element"), i(n[0].type === t[0].type, "Node at this path is a different type"), n
            },
            markdown(e, t, n) {
                var l;
                let i = "line" === e.type && (null === (l = e.codeBlockState) || void 0 === l ? void 0 : l.wasInCodeBlock) === !0,
                    a = e.children.map(e => m.isText(e) ? e.text : " "),
                    s = a.join(""),
                    o = r.parse(s, null != t ? t : null, i, n);
                return {
                    entries: o,
                    serializedChildren: a
                }
            },
            isEmpty(e) {
                if (e.children.length > 1) return !1;
                if (0 === e.children.length) return !0;
                let t = e.children[0];
                return m.isText(t) && 0 === t.text.length
            }
        },
        m = {
            ...a.Text
        },
        p = {
            ...a.Path,
            isFirstEditorBlock: e => p.equals(e, o.FIRST_BLOCK_PATH),
            isFirstEditorText: e => p.equals(e, o.FIRST_TEXT_PATH),
            isFirstChild: (e, t) => p.equals(t, p.child(e, 0)),
            child: (e, t) => [...e, t]
        },
        h = {
            ...a.Point,
            start(e) {
                let [, t] = e;
                return {
                    path: p.child(t, 0),
                    offset: 0
                }
            },
            end(e) {
                let [t, n] = e, l = t.children[t.children.length - 1];
                return {
                    path: p.child(n, t.children.length - 1),
                    offset: m.isText(l) ? l.text.length : 0
                }
            },
            isAtStart(e, t) {
                return h.equals(e, this.start(t))
            },
            isAtEnd(e, t) {
                return h.equals(e, this.end(t))
            },
            clamp(e, t) {
                let [n, l] = E.edges(t);
                return h.isBefore(e, n) && (e = n), h.isAfter(e, l) && (e = l), e
            }
        },
        E = {
            ...a.Range,
            toPoint: e => null == e || E.isExpanded(e) ? null : e.anchor,
            children(e) {
                let [t, n] = e, l = t.children[t.children.length - 1];
                return {
                    anchor: {
                        path: p.child(n, 0),
                        offset: 0
                    },
                    focus: {
                        path: p.child(n, t.children.length - 1),
                        offset: m.isText(l) ? l.text.length : 0
                    }
                }
            },
            clamp(e, t) {
                let [n, l] = E.edges(e), [i, a] = E.edges(t);
                return (h.isBefore(n, i) && (n = i), h.isAfter(l, a) && (l = a), E.isForward(e)) ? {
                    anchor: n,
                    focus: l
                } : {
                    anchor: l,
                    focus: n
                }
            }
        },
        g = {
            equals: (e, t) => null == e && null == t || null != e && null != t && E.equals(e, t),
            isValid(e, t) {
                if (null == t) return !1;
                let {
                    anchor: n,
                    focus: l
                } = t;
                if (!d.hasPath(e, n.path) || !d.hasPath(e, l.path)) return !1;
                let [i] = d.node(e, n.path), [a] = d.node(e, l.path);
                return m.isText(i) && m.isText(a) && n.offset <= i.text.length && l.offset <= a.text.length
            }
        },
        S = (e, t) => {
            let n = (t.top + t.bottom) / 2;
            return e.top <= n && e.bottom >= n
        },
        C = (e, t, n) => {
            let l = d.toDOMRange(e, t).getBoundingClientRect(),
                i = d.toDOMRange(e, n).getBoundingClientRect();
            return S(l, i) && S(i, l)
        },
        T = (e, t, n, l) => {
            let i = {
                    anchor: t,
                    focus: t
                },
                a = 0,
                s = n.length,
                r = Math.floor((a + s) / 2);
            for (; r !== a;) {
                let t = {
                    anchor: n[r],
                    focus: n[r]
                };
                if (C(e, t, i) ? l ? s = r : a = r : l ? a = r : s = r, r = Math.floor((a + s) / 2), !l && r === n.length - 2 && s === n.length - 1) {
                    let t = n[n.length - 1];
                    C(e, {
                        anchor: t,
                        focus: t
                    }, i) && (r = s)
                }
            }
            return n[r]
        },
        v = {
            getLineStart(e, t, n) {
                let l;
                let i = d.getParentElement(e, t);
                if (null == i) return null;
                let a = d.previous(e, {
                    at: t,
                    match: t => d.isInline(e, t) && !d.isVoid(e, t) && t !== i[0]
                });
                null != a && (l = d.after(e, a[1])), null == l && (l = d.start(e, i[1]));
                let s = {
                        anchor: l,
                        focus: t
                    },
                    r = Array.from(d.positions(e, {
                        at: s
                    })),
                    o = T(e, t, r, !0);
                if (n && h.equals(t, o) && !h.isAtEnd(t, i)) {
                    let n = d.after(e, t);
                    if (null == n) return o;
                    o = T(e, n, r, !0)
                }
                return o
            },
            getLineEnd(e, t, n) {
                let l;
                let i = d.getParentElement(e, t);
                if (null == i) return null;
                let a = d.next(e, {
                    at: t,
                    match: t => d.isInline(e, t) && !d.isVoid(e, t) && t !== i[0]
                });
                null != a && (l = d.before(e, a[1])), null == l && (l = d.end(e, i[1]));
                let s = {
                        anchor: t,
                        focus: l
                    },
                    r = Array.from(d.positions(e, {
                        at: s
                    })),
                    o = T(e, t, r, !1);
                if (n && h.equals(t, o) && !h.isAtEnd(t, i)) {
                    let n = d.after(e, t);
                    if (null == n) return o;
                    o = T(e, n, r, !1)
                }
                return o
            },
            getLineActionRange(e, t) {
                let n = E.toPoint(e.selection);
                if (null == n) return null;
                if (t) {
                    let t = v.getLineStart(e, n, !1);
                    return null == t ? null : {
                        anchor: t,
                        focus: n
                    }
                } {
                    let t = v.getLineEnd(e, n, !0);
                    return null == t ? null : {
                        anchor: n,
                        focus: t
                    }
                }
            }
        }
}