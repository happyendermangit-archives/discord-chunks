function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ToolbarButtons: function() {
            return b
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("136035"),
        u = n("784184"),
        s = n("813970"),
        l = n("445684"),
        c = n("673184"),
        f = n("610028"),
        d = n("281431"),
        _ = n("58525"),
        E = n("418545"),
        p = n("244749"),
        m = n("850168"),
        y = n("610045"),
        I = n("448856"),
        h = n("453197"),
        O = n("714196"),
        T = n("403777"),
        S = n("503225");

    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function g(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function A(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return v(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function b(e) {
        var t, n = e.editorRef,
            o = e.options,
            a = e.iconClassName,
            u = e.dividerClassName,
            s = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
        return null == s ? null : r.createElement("div", {
            className: S.buttons
        }, r.createElement(N, {
            slateEditor: s,
            markdownSyntax: "bold"
        }, r.createElement(c.default, {
            className: i()(S.icon, a)
        })), r.createElement(N, {
            slateEditor: s,
            markdownSyntax: "italics"
        }, r.createElement(d.default, {
            className: i()(S.icon, a)
        })), r.createElement(N, {
            slateEditor: s,
            markdownSyntax: "strikethrough"
        }, r.createElement(E.default, {
            className: i()(S.icon, a)
        })), r.createElement("div", {
            className: i()(S.divider, u)
        }), !(null == o ? void 0 : o.disableBlockQuotes) && r.createElement(R, {
            slateEditor: s,
            blockType: "blockQuote"
        }, r.createElement(l.default, {
            className: i()(S.icon, a)
        })), r.createElement(N, {
            slateEditor: s,
            markdownSyntax: "inlineCode"
        }, r.createElement(f.default, {
            className: i()(S.icon, a)
        })), r.createElement(N, {
            slateEditor: s,
            markdownSyntax: "spoiler"
        }, r.createElement(_.default, {
            className: i()(S.icon, a)
        })))
    }

    function N(e) {
        var t = e.slateEditor,
            n = e.markdownSyntax,
            o = e.children,
            i = !1;
        if ((null == t ? void 0 : t.selection) != null) {
            var a = A(O.RangeUtils.edges(t.selection), 2),
                s = a[0],
                l = a[1];
            i = null != (0, I.parseSelectedSyntax)(t, s, l).before[n]
        }
        return r.createElement(u.Button, {
            className: S.button,
            innerClassName: S.buttonInner,
            color: i ? S.active : S.inactive,
            hover: S.hover,
            look: u.Button.Looks.FILLED,
            size: u.Button.Sizes.NONE,
            onClick: function() {
                null != t && y.HistoryUtils.withSingleEntry(t, function() {
                    return (0, I.toggleMarkdownStyle)(t, n)
                })
            }
        }, o)
    }

    function R(e) {
        var t = e.blockType,
            n = e.slateEditor,
            o = e.children,
            i = null != n ? O.EditorUtils.getCurrentBlock(n) : null,
            a = null != i && O.NodeUtils.isType(i[0], t);
        return r.createElement(u.Button, {
            className: S.button,
            innerClassName: S.buttonInner,
            color: a ? S.active : S.inactive,
            hover: S.hover,
            look: u.Button.Looks.FILLED,
            size: u.Button.Sizes.NONE,
            onClick: function() {
                null != n && y.HistoryUtils.withSingleEntry(n, function() {
                    return (0, I.toggleBlockStyle)(n, t)
                })
            }
        }, o)
    }

    function C(e) {
        var t, n = e.slateEditor,
            o = A(null !== (t = O.EditorUtils.getSelectedVoid(n)) && void 0 !== t ? t : [null, null], 2),
            i = o[0],
            a = o[1],
            u = r.useCallback(function(e) {
                if ((null == n ? void 0 : n.selection) != null && null != a) {
                    var t = n.selection;
                    y.HistoryUtils.withSingleEntry(n, function() {
                        h.SlateTransforms.voidToText(n, e, a), h.SlateTransforms.select(n, t)
                    })
                }
            }, [n, a]);
        return null == i ? null : (0, T.default)(i, {
            replace: u
        })
    }
    t.default = r.forwardRef(function(e, t) {
        var n, o = e.editorRef,
            i = e.containerRef,
            u = e.options,
            l = r.useRef(null),
            c = A(r.useState(!1), 2),
            f = c[0],
            d = c[1],
            _ = r.useRef(),
            E = r.useContext(s.default),
            y = r.useCallback(function() {
                d(!1), clearTimeout(_.current)
            }, []),
            I = r.useCallback(function(e) {
                var t, n = E.renderWindow;
                !(g(e.target, n.Node) && (null === (t = l.current) || void 0 === t ? void 0 : t.contains(e.target))) && y()
            }, [E, y]),
            h = r.useCallback(function(e) {
                var t = E.renderWindow;
                if (g(e.target, t.Element)) {
                    if (0 !== e.button) y();
                    else {
                        var n, r = g(e.target, t.Node) && (null === (n = l.current) || void 0 === n ? void 0 : n.contains(e.target));
                        clearTimeout(_.current), _.current = setTimeout(function() {
                            var t, n = null === (t = (0, m.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement,
                                o = i.current;
                            d(r || null != n && null != o && o.contains(n))
                        }, 100)
                    }
                } else y()
            }, [E, i, y]);
        r.useImperativeHandle(t, function() {
            return {
                hide: y
            }
        }, [y]), r.useEffect(function() {
            var e = E.renderWindow;
            return e.document.addEventListener("keydown", y), e.document.addEventListener("mousedown", I), e.document.addEventListener("mouseup", h), e.addEventListener("focus", y), e.addEventListener("blur", y),
                function() {
                    e.document.removeEventListener("keydown", y), e.document.removeEventListener("mousedown", I), e.document.removeEventListener("mouseup", h), e.removeEventListener("focus", y), e.removeEventListener("blur", y), clearTimeout(_.current)
                }
        }, [E, y, I, h]);
        var T = r.useMemo(function() {
                var e, t, n, r, u = null === (e = o.current) || void 0 === e ? void 0 : e.getSlateEditor();
                if ((null == u ? void 0 : u.selection) == null || O.RangeUtils.isCollapsed(u.selection) || !f) return {
                    x: null,
                    y: null
                };
                var s = a.ReactEditor.findDocumentOrShadowRoot(u),
                    l = s.getSelection();
                if (null == l || null == l.focusNode || null == l.anchorNode || l.isCollapsed) return {
                    x: null,
                    y: null
                };
                var c = s.createRange();
                c.setStart(l.focusNode, l.focusOffset), c.setEnd(l.focusNode, l.focusOffset);
                var d = c.getBoundingClientRect(),
                    _ = s.createRange();
                _.setStart(l.anchorNode, l.anchorOffset), _.setEnd(l.anchorNode, l.anchorOffset);
                var E = _.getBoundingClientRect(),
                    p = s.createRange();
                p.setStart(l.anchorNode, l.anchorOffset), p.setEnd(l.focusNode, l.focusOffset);
                var m = p.getBoundingClientRect(),
                    y = d.x === E.x,
                    I = y ? m.x : Math.min(d.x, E.x),
                    h = y ? m.x + m.width : Math.max(d.x, E.x),
                    T = null !== (r = null === (n = i.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== r ? r : 0;
                return {
                    x: I + (h - I) / 2,
                    y: Math.max(T, Math.min(E.y, d.y))
                }
            }, [i, f, o]),
            v = T.x,
            N = T.y,
            R = A(r.useState(0), 2),
            P = R[0],
            D = R[1],
            L = A(r.useState(0), 2),
            M = L[0],
            U = L[1];
        if (r.useLayoutEffect(function() {
                if (null != v && null != N) {
                    if (null != l.current) {
                        var e = l.current.getBoundingClientRect();
                        U(e.width / 2), D(e.height + 12)
                    }
                }
            }, [v, N]), null == v || null == N) return null;
        var w = null === (n = o.current) || void 0 === n ? void 0 : n.getSlateEditor();
        return null == w ? null : r.createElement(p.default, null, r.createElement("div", {
            id: "slate-toolbar",
            ref: l,
            className: S.toolbar,
            style: {
                top: N - P,
                left: v - M
            },
            onMouseDown: function(e) {
                e.stopPropagation()
            },
            onMouseUp: function(e) {
                e.stopPropagation()
            }
        }, r.createElement(C, {
            slateEditor: w
        }), r.createElement(b, {
            editorRef: o,
            options: u
        })))
    })
}