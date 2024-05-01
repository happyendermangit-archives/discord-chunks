function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DOMUtils: function() {
            return N
        },
        EditorUtils: function() {
            return d
        },
        ElementUtils: function() {
            return c
        },
        NodeUtils: function() {
            return _
        },
        PathUtils: function() {
            return I
        },
        PointUtils: function() {
            return T
        },
        RangeUtils: function() {
            return f
        },
        SelectionUtils: function() {
            return S
        },
        TextUtils: function() {
            return E
        }
    }), n("47120");
    var i = n("512722"),
        r = n.n(i),
        s = n("327432"),
        a = n("207470"),
        o = n("339227"),
        l = n("42530");
    n("789952");
    let u = !1;
    {
        let e = a.ReactEditor.findDocumentOrShadowRoot;
        a.ReactEditor.findDocumentOrShadowRoot = t => {
            var n, i;
            return null !== (i = null === (n = t.windowContext) || void 0 === n ? void 0 : n.renderWindow.document) && void 0 !== i ? i : e(t)
        }, u = !0
    }
    let d = {
            ...s.Editor,
            ...a.ReactEditor,
            richValue: e => e.children,
            blocks: e => d.richValue(e).map((e, t) => [e, [t]]),
            isBlock: (e, t) => c.isElement(t) && s.Editor.isBlock(e, t),
            isInline: (e, t) => c.isElement(t) && s.Editor.isInline(e, t),
            isVoid: (e, t) => c.isElement(t) && s.Editor.isVoid(e, t),
            isEditorEmpty(e) {
                let t = d.richValue(e);
                return !(t.length > 1) && (0 === t.length || "line" === t[0].type && c.isEmpty(t[0]))
            },
            getFirstText(e) {
                let t = d.node(e, l.FIRST_TEXT_PATH);
                return E.isText(t[0]) ? t[0] : null
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
                let t = null != e.selection ? f.toPoint(e.selection) : null;
                return null == t ? null : d.node(e, t.path)
            },
            getParentBlock(e, t) {
                var n;
                return null !== (n = d.above(e, {
                    at: t,
                    match: t => c.isElement(t) && d.isBlock(e, t),
                    mode: "lowest"
                })) && void 0 !== n ? n : null
            },
            getParentElement(e, t) {
                var n;
                return null !== (n = d.above(e, {
                    at: t,
                    match: e => c.isElement(e),
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
                if (f.isExpanded(e.selection)) {
                    let [n, i] = f.edges(e.selection), r = d.after(e, n, {
                        unit: "offset"
                    }), s = d.before(e, i, {
                        unit: "offset"
                    });
                    if (null == r || null == s || !T.equals(r, s)) return null;
                    t = r
                } else t = e.selection.anchor;
                return null == t ? null : d.getParentVoid(e, t)
            },
            getSelectedText(e, t) {
                let n = null;
                if (t) {
                    let t = a.ReactEditor.findDocumentOrShadowRoot(e).getSelection();
                    if (null != t && t.rangeCount > 0) {
                        let i = t.getRangeAt(0);
                        null != i && (n = a.ReactEditor.toSlateRange(e, i, {
                            exactMatch: !0,
                            suppressThrow: !0
                        }))
                    }
                } else n = e.selection;
                return null == n ? "" : this.getTextFromRange(e, n)
            },
            getTextFromRange(e, t) {
                let [n, i] = f.edges(t), r = d.nodes(e, {
                    at: t,
                    mode: "lowest",
                    match: e => E.isText(e)
                }), s = "";
                for (let [e, t] of r) {
                    let r = I.equals(t, n.path) ? n.offset : 0,
                        a = I.equals(t, i.path) ? i.offset : 0;
                    s += e.text.substring(r, a)
                }
                return s
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
                    i = n[0],
                    r = (null == i ? void 0 : i.type) === "line" ? i.children[0] : null;
                if (null == r || !E.isText(r)) return !1;
                let s = e.chatInputType,
                    a = r.text;
                return 1 === n.length && 1 === i.children.length && (!0 === s.sedReplace && a.startsWith("s/") || (null === (t = s.autocomplete) || void 0 === t ? void 0 : t.reactions) === !0 && a.startsWith("+"))
            },
            focus(e) {
                !a.ReactEditor.isFocused(e) && (a.ReactEditor.focus(e), a.ReactEditor.deselect(e))
            },
            getSelectionOverlap(e, t) {
                if (null == e.selection) return {
                    anchor: null,
                    focus: null
                };
                if (I.isPath(t)) {
                    let n = d.range(e, t),
                        [i] = d.node(e, t);
                    if (c.isElement(i)) {
                        let i = d.before(e, t),
                            r = d.after(e, t);
                        t = {
                            anchor: null != i ? i : n.anchor,
                            focus: null != r ? r : n.focus
                        }
                    } else t = n
                }
                let [n, i] = f.edges(t), r = null, s = null;
                return T.equals(e.selection.anchor, n) ? r = "start" : T.equals(e.selection.anchor, i) ? r = "end" : f.includes(t, e.selection.anchor) && (r = "inside"), T.equals(e.selection.focus, n) ? s = "start" : T.equals(e.selection.focus, i) ? s = "end" : f.includes(t, e.selection.focus) && (s = "inside"), {
                    anchor: r,
                    focus: s
                }
            }
        },
        _ = {
            ...s.Node,
            isType: (e, t) => s.Element.isElement(e) && e.type === t,
            isInTypes: (e, t) => s.Element.isElement(e) && t.has(e.type)
        },
        c = {
            ...s.Element,
            updateElement(e, t) {
                let n = d.node(e, t[1]);
                return r()(!d.isEditor(t[0]), "Element is the root node"), r()(null != n, "Failed to find element"), r()(c.isElement(n[0]), "Node at this path is no longer an element"), r()(n[0].type === t[0].type, "Node at this path is a different type"), n
            },
            markdown(e, t, n) {
                var i;
                let r = "line" === e.type && (null === (i = e.codeBlockState) || void 0 === i ? void 0 : i.wasInCodeBlock) === !0,
                    s = e.children.map(e => {
                        var t;
                        return E.isText(e) ? e.text : "((element:".concat(null !== (t = e.type) && void 0 !== t ? t : "unknown", "))")
                    }),
                    a = s.join("");
                return {
                    entries: o.parse(a, null != t ? t : null, r, n),
                    serializedChildren: s
                }
            },
            isEmpty(e) {
                if (e.children.length > 1) return !1;
                if (0 === e.children.length) return !0;
                let t = e.children[0];
                return E.isText(t) && 0 === t.text.length
            }
        },
        E = {
            ...s.Text
        },
        I = {
            ...s.Path,
            isFirstEditorBlock: e => I.equals(e, l.FIRST_BLOCK_PATH),
            isFirstEditorText: e => I.equals(e, l.FIRST_TEXT_PATH),
            isFirstChild: (e, t) => I.equals(t, I.child(e, 0)),
            child: (e, t) => [...e, t]
        },
        T = {
            ...s.Point,
            start(e) {
                let [, t] = e;
                return {
                    path: I.child(t, 0),
                    offset: 0
                }
            },
            end(e) {
                let [t, n] = e, i = t.children[t.children.length - 1];
                return {
                    path: I.child(n, t.children.length - 1),
                    offset: E.isText(i) ? i.text.length : 0
                }
            },
            isAtStart(e, t) {
                return T.equals(e, this.start(t))
            },
            isAtEnd(e, t) {
                return T.equals(e, this.end(t))
            },
            clamp(e, t) {
                let [n, i] = f.edges(t);
                return T.isBefore(e, n) && (e = n), T.isAfter(e, i) && (e = i), e
            }
        },
        f = {
            ...s.Range,
            toPoint: e => null == e || f.isExpanded(e) ? null : e.anchor,
            children(e) {
                let [t, n] = e, i = t.children[t.children.length - 1];
                return {
                    anchor: {
                        path: I.child(n, 0),
                        offset: 0
                    },
                    focus: {
                        path: I.child(n, t.children.length - 1),
                        offset: E.isText(i) ? i.text.length : 0
                    }
                }
            },
            clamp(e, t) {
                let [n, i] = f.edges(e), [r, s] = f.edges(t);
                return (T.isBefore(n, r) && (n = r), T.isAfter(i, s) && (i = s), f.isForward(e)) ? {
                    anchor: n,
                    focus: i
                } : {
                    anchor: i,
                    focus: n
                }
            }
        },
        S = {
            equals: (e, t) => null == e && null == t || null != e && null != t && f.equals(e, t),
            isValid(e, t) {
                if (null == t) return !1;
                let {
                    anchor: n,
                    focus: i
                } = t;
                if (!d.hasPath(e, n.path) || !d.hasPath(e, i.path)) return !1;
                let [r] = d.node(e, n.path), [s] = d.node(e, i.path);
                return E.isText(r) && E.isText(s) && n.offset <= r.text.length && i.offset <= s.text.length
            }
        },
        h = (e, t) => {
            let n = (t.top + t.bottom) / 2;
            return e.top <= n && e.bottom >= n
        },
        A = (e, t, n) => {
            let i = d.toDOMRange(e, t).getBoundingClientRect(),
                r = d.toDOMRange(e, n).getBoundingClientRect();
            return h(i, r) && h(r, i)
        },
        m = (e, t, n, i) => {
            let r = {
                    anchor: t,
                    focus: t
                },
                s = 0,
                a = n.length,
                o = Math.floor((s + a) / 2);
            for (; o !== s;)
                if (A(e, {
                        anchor: n[o],
                        focus: n[o]
                    }, r) ? i ? a = o : s = o : i ? s = o : a = o, o = Math.floor((s + a) / 2), !i && o === n.length - 2 && a === n.length - 1) {
                    let t = n[n.length - 1];
                    A(e, {
                        anchor: t,
                        focus: t
                    }, r) && (o = a)
                } return n[o]
        },
        N = {
            getLineStart(e, t, n) {
                let i;
                let r = d.getParentElement(e, t);
                if (null == r) return null;
                let s = d.previous(e, {
                    at: t,
                    match: t => d.isInline(e, t) && !d.isVoid(e, t) && t !== r[0]
                });
                null != s && (i = d.after(e, s[1])), null == i && (i = d.start(e, r[1]));
                let a = {
                        anchor: i,
                        focus: t
                    },
                    o = Array.from(d.positions(e, {
                        at: a
                    })),
                    l = m(e, t, o, !0);
                if (n && T.equals(t, l) && !T.isAtEnd(t, r)) {
                    let n = d.after(e, t);
                    if (null == n) return l;
                    l = m(e, n, o, !0)
                }
                return l
            },
            getLineEnd(e, t, n) {
                let i;
                let r = d.getParentElement(e, t);
                if (null == r) return null;
                let s = d.next(e, {
                    at: t,
                    match: t => d.isInline(e, t) && !d.isVoid(e, t) && t !== r[0]
                });
                null != s && (i = d.before(e, s[1])), null == i && (i = d.end(e, r[1]));
                let a = {
                        anchor: t,
                        focus: i
                    },
                    o = Array.from(d.positions(e, {
                        at: a
                    })),
                    l = m(e, t, o, !1);
                if (n && T.equals(t, l) && !T.isAtEnd(t, r)) {
                    let n = d.after(e, t);
                    if (null == n) return l;
                    l = m(e, n, o, !1)
                }
                return l
            },
            getLineActionRange(e, t) {
                let n = f.toPoint(e.selection);
                if (null == n) return null;
                if (t) {
                    let t = N.getLineStart(e, n, !1);
                    return null == t ? null : {
                        anchor: t,
                        focus: n
                    }
                } {
                    let t = N.getLineEnd(e, n, !0);
                    return null == t ? null : {
                        anchor: n,
                        focus: t
                    }
                }
            }
        }
}