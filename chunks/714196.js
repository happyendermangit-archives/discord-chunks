function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DOMUtils: function() {
            return N
        },
        EditorUtils: function() {
            return m
        },
        ElementUtils: function() {
            return I
        },
        NodeUtils: function() {
            return y
        },
        PathUtils: function() {
            return O
        },
        PointUtils: function() {
            return T
        },
        RangeUtils: function() {
            return S
        },
        SelectionUtils: function() {
            return v
        },
        TextUtils: function() {
            return h
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("327432"),
        a = n("136035"),
        u = n("257619"),
        s = n("188629");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function f(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function d(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || _(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function _(e, t) {
        if (e) {
            if ("string" == typeof e) return l(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
        }
    }
    n("335934");
    var E = !1,
        p = a.ReactEditor.findDocumentOrShadowRoot;
    a.ReactEditor.findDocumentOrShadowRoot = function(e) {
        var t, n;
        return null !== (n = null === (t = e.windowContext) || void 0 === t ? void 0 : t.renderWindow.document) && void 0 !== n ? n : p(e)
    }, E = !0;
    var m = f(c({}, i.Editor, a.ReactEditor), {
            richValue: function(e) {
                return e.children
            },
            blocks: function(e) {
                return m.richValue(e).map(function(e, t) {
                    return [e, [t]]
                })
            },
            isBlock: function(e, t) {
                return I.isElement(t) && i.Editor.isBlock(e, t)
            },
            isInline: function(e, t) {
                return I.isElement(t) && i.Editor.isInline(e, t)
            },
            isVoid: function(e, t) {
                return I.isElement(t) && i.Editor.isVoid(e, t)
            },
            isEditorEmpty: function(e) {
                var t = m.richValue(e);
                return !(t.length > 1) && (0 === t.length || "line" === t[0].type && I.isEmpty(t[0]))
            },
            getFirstText: function(e) {
                var t = m.node(e, s.FIRST_TEXT_PATH);
                return h.isText(t[0]) ? t[0] : null
            },
            getCurrentBlock: function(e) {
                return null == e.selection ? null : this.getParentBlock(e, e.selection)
            },
            getCurrentElement: function(e) {
                return null == e.selection ? null : this.getParentElement(e, e.selection)
            },
            getCurrentInline: function(e) {
                return null == e.selection ? null : this.getParentInline(e, e.selection)
            },
            getCurrentVoid: function(e) {
                return null == e.selection ? null : this.getParentVoid(e, e.selection)
            },
            getCurrentText: function(e) {
                var t = null != e.selection ? S.toPoint(e.selection) : null;
                return null == t ? null : m.node(e, t.path)
            },
            getParentBlock: function(e, t) {
                var n;
                return null !== (n = m.above(e, {
                    at: t,
                    match: function(t) {
                        return I.isElement(t) && m.isBlock(e, t)
                    },
                    mode: "lowest"
                })) && void 0 !== n ? n : null
            },
            getParentElement: function(e, t) {
                var n;
                return null !== (n = m.above(e, {
                    at: t,
                    match: function(e) {
                        return I.isElement(e)
                    },
                    mode: "lowest"
                })) && void 0 !== n ? n : null
            },
            getParentInline: function(e, t) {
                var n;
                return null !== (n = m.above(e, {
                    at: t,
                    match: function(t) {
                        return m.isInline(e, t)
                    },
                    mode: "lowest"
                })) && void 0 !== n ? n : null
            },
            getParentVoid: function(e, t) {
                var n;
                return null !== (n = m.above(e, {
                    at: t,
                    match: function(t) {
                        return m.isVoid(e, t)
                    },
                    mode: "lowest"
                })) && void 0 !== n ? n : null
            },
            getSelectedVoid: function(e) {
                if (null == e.selection) return null;
                if (S.isExpanded(e.selection)) {
                    var t, n = d(S.edges(e.selection), 2),
                        r = n[0],
                        o = n[1],
                        i = m.after(e, r, {
                            unit: "offset"
                        }),
                        a = m.before(e, o, {
                            unit: "offset"
                        });
                    if (null == i || null == a || !T.equals(i, a)) return null;
                    t = i
                } else t = e.selection.anchor;
                return null == t ? null : m.getParentVoid(e, t)
            },
            getSelectedText: function(e, t) {
                var n = null;
                if (t) {
                    var r = a.ReactEditor.findDocumentOrShadowRoot(e).getSelection();
                    if (null != r && r.rangeCount > 0) {
                        var o = r.getRangeAt(0);
                        null != o && (n = a.ReactEditor.toSlateRange(e, o, {
                            exactMatch: !0,
                            suppressThrow: !0
                        }))
                    }
                } else n = e.selection;
                return null == n ? "" : this.getTextFromRange(e, n)
            },
            getTextFromRange: function(e, t) {
                var n = d(S.edges(t), 2),
                    r = n[0],
                    o = n[1],
                    i = m.nodes(e, {
                        at: t,
                        mode: "lowest",
                        match: function(e) {
                            return h.isText(e)
                        }
                    }),
                    a = "",
                    u = !0,
                    s = !1,
                    l = void 0;
                try {
                    for (var c, f = i[Symbol.iterator](); !(u = (c = f.next()).done); u = !0) {
                        var _ = d(c.value, 2),
                            E = _[0],
                            p = _[1],
                            y = O.equals(p, r.path) ? r.offset : 0,
                            I = O.equals(p, o.path) ? o.offset : 0;
                        a += E.text.substring(y, I)
                    }
                } catch (e) {
                    s = !0, l = e
                } finally {
                    try {
                        !u && null != f.return && f.return()
                    } finally {
                        if (s) throw l
                    }
                }
                return a
            },
            withoutNormalizing: function(e, t) {
                var n = m.isNormalizing(e);
                m.setNormalizing(e, !1);
                try {
                    t()
                } finally {
                    m.setNormalizing(e, n)
                }!1 !== n && m.normalize(e)
            },
            areStylesDisabled: function(e) {
                if (!e.previewMarkdown) return !0;
                var t, n = m.richValue(e),
                    r = n[0],
                    o = (null == r ? void 0 : r.type) === "line" ? r.children[0] : null;
                if (null == o || !h.isText(o)) return !1;
                var i = e.chatInputType,
                    a = o.text;
                return 1 === n.length && 1 === r.children.length && (!0 === i.sedReplace && a.startsWith("s/") || (null === (t = i.autocomplete) || void 0 === t ? void 0 : t.reactions) === !0 && a.startsWith("+"))
            },
            focus: function(e) {
                !a.ReactEditor.isFocused(e) && (a.ReactEditor.focus(e), a.ReactEditor.deselect(e))
            },
            getSelectionOverlap: function(e, t) {
                if (null == e.selection) return {
                    anchor: null,
                    focus: null
                };
                if (O.isPath(t)) {
                    var n = m.range(e, t),
                        r = d(m.node(e, t), 1)[0];
                    if (I.isElement(r)) {
                        var o = m.before(e, t),
                            i = m.after(e, t);
                        t = {
                            anchor: null != o ? o : n.anchor,
                            focus: null != i ? i : n.focus
                        }
                    } else t = n
                }
                var a = d(S.edges(t), 2),
                    u = a[0],
                    s = a[1],
                    l = null,
                    c = null;
                return T.equals(e.selection.anchor, u) ? l = "start" : T.equals(e.selection.anchor, s) ? l = "end" : S.includes(t, e.selection.anchor) && (l = "inside"), T.equals(e.selection.focus, u) ? c = "start" : T.equals(e.selection.focus, s) ? c = "end" : S.includes(t, e.selection.focus) && (c = "inside"), {
                    anchor: l,
                    focus: c
                }
            }
        }),
        y = f(c({}, i.Node), {
            isType: function(e, t) {
                return i.Element.isElement(e) && e.type === t
            },
            isInTypes: function(e, t) {
                return i.Element.isElement(e) && t.has(e.type)
            }
        }),
        I = f(c({}, i.Element), {
            updateElement: function(e, t) {
                var n = m.node(e, t[1]);
                return o()(!m.isEditor(t[0]), "Element is the root node"), o()(null != n, "Failed to find element"), o()(I.isElement(n[0]), "Node at this path is no longer an element"), o()(n[0].type === t[0].type, "Node at this path is a different type"), n
            },
            markdown: function(e, t, n) {
                var r, o = "line" === e.type && (null === (r = e.codeBlockState) || void 0 === r ? void 0 : r.wasInCodeBlock) === !0,
                    i = e.children.map(function(e) {
                        return h.isText(e) ? e.text : " "
                    }),
                    a = i.join("");
                return {
                    entries: u.parse(a, null != t ? t : null, o, n),
                    serializedChildren: i
                }
            },
            isEmpty: function(e) {
                if (e.children.length > 1) return !1;
                if (0 === e.children.length) return !0;
                var t = e.children[0];
                return h.isText(t) && 0 === t.text.length
            }
        }),
        h = c({}, i.Text),
        O = f(c({}, i.Path), {
            isFirstEditorBlock: function(e) {
                return O.equals(e, s.FIRST_BLOCK_PATH)
            },
            isFirstEditorText: function(e) {
                return O.equals(e, s.FIRST_TEXT_PATH)
            },
            isFirstChild: function(e, t) {
                return O.equals(t, O.child(e, 0))
            },
            child: function(e, t) {
                var n;
                return ((function(e) {
                    if (Array.isArray(e)) return l(e)
                })(n = e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(n) || _(n) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()).concat([t])
            }
        }),
        T = f(c({}, i.Point), {
            start: function(e) {
                var t = d(e, 2)[1];
                return {
                    path: O.child(t, 0),
                    offset: 0
                }
            },
            end: function(e) {
                var t = d(e, 2),
                    n = t[0],
                    r = t[1],
                    o = n.children[n.children.length - 1];
                return {
                    path: O.child(r, n.children.length - 1),
                    offset: h.isText(o) ? o.text.length : 0
                }
            },
            isAtStart: function(e, t) {
                return T.equals(e, this.start(t))
            },
            isAtEnd: function(e, t) {
                return T.equals(e, this.end(t))
            },
            clamp: function(e, t) {
                var n = d(S.edges(t), 2),
                    r = n[0],
                    o = n[1];
                return T.isBefore(e, r) && (e = r), T.isAfter(e, o) && (e = o), e
            }
        }),
        S = f(c({}, i.Range), {
            toPoint: function(e) {
                return null == e || S.isExpanded(e) ? null : e.anchor
            },
            children: function(e) {
                var t = d(e, 2),
                    n = t[0],
                    r = t[1],
                    o = n.children[n.children.length - 1];
                return {
                    anchor: {
                        path: O.child(r, 0),
                        offset: 0
                    },
                    focus: {
                        path: O.child(r, n.children.length - 1),
                        offset: h.isText(o) ? o.text.length : 0
                    }
                }
            },
            clamp: function(e, t) {
                var n = d(S.edges(e), 2),
                    r = n[0],
                    o = n[1],
                    i = d(S.edges(t), 2),
                    a = i[0],
                    u = i[1];
                return (T.isBefore(r, a) && (r = a), T.isAfter(o, u) && (o = u), S.isForward(e)) ? {
                    anchor: r,
                    focus: o
                } : {
                    anchor: o,
                    focus: r
                }
            }
        }),
        v = {
            equals: function(e, t) {
                return null == e && null == t || null != e && null != t && S.equals(e, t)
            },
            isValid: function(e, t) {
                if (null == t) return !1;
                var n = t.anchor,
                    r = t.focus;
                if (!m.hasPath(e, n.path) || !m.hasPath(e, r.path)) return !1;
                var o = d(m.node(e, n.path), 1)[0],
                    i = d(m.node(e, r.path), 1)[0];
                return h.isText(o) && h.isText(i) && n.offset <= o.text.length && r.offset <= i.text.length
            }
        },
        g = function(e, t) {
            var n = (t.top + t.bottom) / 2;
            return e.top <= n && e.bottom >= n
        },
        A = function(e, t, n) {
            var r = m.toDOMRange(e, t).getBoundingClientRect(),
                o = m.toDOMRange(e, n).getBoundingClientRect();
            return g(r, o) && g(o, r)
        },
        b = function(e, t, n, r) {
            for (var o = {
                    anchor: t,
                    focus: t
                }, i = 0, a = n.length, u = Math.floor((i + a) / 2); u !== i;)
                if (A(e, {
                        anchor: n[u],
                        focus: n[u]
                    }, o) ? r ? a = u : i = u : r ? i = u : a = u, u = Math.floor((i + a) / 2), !r && u === n.length - 2 && a === n.length - 1) {
                    var s = n[n.length - 1];
                    A(e, {
                        anchor: s,
                        focus: s
                    }, o) && (u = a)
                } return n[u]
        },
        N = {
            getLineStart: function(e, t, n) {
                var r, o = m.getParentElement(e, t);
                if (null == o) return null;
                var i = m.previous(e, {
                    at: t,
                    match: function(t) {
                        return m.isInline(e, t) && !m.isVoid(e, t) && t !== o[0]
                    }
                });
                null != i && (r = m.after(e, i[1])), null == r && (r = m.start(e, o[1]));
                var a = {
                        anchor: r,
                        focus: t
                    },
                    u = Array.from(m.positions(e, {
                        at: a
                    })),
                    s = b(e, t, u, !0);
                if (n && T.equals(t, s) && !T.isAtEnd(t, o)) {
                    var l = m.after(e, t);
                    if (null == l) return s;
                    s = b(e, l, u, !0)
                }
                return s
            },
            getLineEnd: function(e, t, n) {
                var r, o = m.getParentElement(e, t);
                if (null == o) return null;
                var i = m.next(e, {
                    at: t,
                    match: function(t) {
                        return m.isInline(e, t) && !m.isVoid(e, t) && t !== o[0]
                    }
                });
                null != i && (r = m.before(e, i[1])), null == r && (r = m.end(e, o[1]));
                var a = {
                        anchor: t,
                        focus: r
                    },
                    u = Array.from(m.positions(e, {
                        at: a
                    })),
                    s = b(e, t, u, !1);
                if (n && T.equals(t, s) && !T.isAtEnd(t, o)) {
                    var l = m.after(e, t);
                    if (null == l) return s;
                    s = b(e, l, u, !1)
                }
                return s
            },
            getLineActionRange: function(e, t) {
                var n = S.toPoint(e.selection);
                if (null == n) return null;
                if (t) {
                    var r = N.getLineStart(e, n, !1);
                    return null == r ? null : {
                        anchor: r,
                        focus: n
                    }
                }
                var o = N.getLineEnd(e, n, !0);
                return null == o ? null : {
                    anchor: n,
                    focus: o
                }
            }
        }
}