function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ToolbarButtons: function() {
            return R
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("136035"),
        l = n("481060"),
        u = n("40851"),
        d = n("489465"),
        _ = n("15322"),
        c = n("672108"),
        E = n("979232"),
        I = n("149111"),
        T = n("61753"),
        f = n("153850"),
        S = n("5967"),
        A = n("53529"),
        h = n("50659"),
        m = n("436660"),
        N = n("887490"),
        O = n("447525"),
        p = n("503225");

    function R(e) {
        var t;
        let {
            editorRef: n,
            options: r,
            iconClassName: s,
            dividerClassName: o
        } = e, l = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
        return null == l ? null : (0, i.jsxs)("div", {
            className: p.buttons,
            children: [(0, i.jsx)(C, {
                slateEditor: l,
                markdownSyntax: "bold",
                children: (0, i.jsx)(_.default, {
                    className: a()(p.icon, s)
                })
            }), (0, i.jsx)(C, {
                slateEditor: l,
                markdownSyntax: "italics",
                children: (0, i.jsx)(E.default, {
                    className: a()(p.icon, s)
                })
            }), (0, i.jsx)(C, {
                slateEditor: l,
                markdownSyntax: "strikethrough",
                children: (0, i.jsx)(T.default, {
                    className: a()(p.icon, s)
                })
            }), (0, i.jsx)("div", {
                className: a()(p.divider, o)
            }), !(null == r ? void 0 : r.disableBlockQuotes) && (0, i.jsx)(g, {
                slateEditor: l,
                blockType: "blockQuote",
                children: (0, i.jsx)(d.default, {
                    className: a()(p.icon, s)
                })
            }), (0, i.jsx)(C, {
                slateEditor: l,
                markdownSyntax: "inlineCode",
                children: (0, i.jsx)(c.default, {
                    className: a()(p.icon, s)
                })
            }), (0, i.jsx)(C, {
                slateEditor: l,
                markdownSyntax: "spoiler",
                children: (0, i.jsx)(I.default, {
                    className: a()(p.icon, s)
                })
            })]
        })
    }

    function C(e) {
        let {
            slateEditor: t,
            markdownSyntax: n,
            children: r
        } = e, s = !1;
        if ((null == t ? void 0 : t.selection) != null) {
            let [e, i] = N.RangeUtils.edges(t.selection);
            s = null != (0, h.parseSelectedSyntax)(t, e, i).before[n]
        }
        return (0, i.jsx)(l.Button, {
            className: p.button,
            innerClassName: p.buttonInner,
            color: s ? p.active : p.inactive,
            hover: p.hover,
            look: l.Button.Looks.FILLED,
            size: l.Button.Sizes.NONE,
            onClick: () => {
                null != t && A.HistoryUtils.withSingleEntry(t, () => (0, h.toggleMarkdownStyle)(t, n))
            },
            children: r
        })
    }

    function g(e) {
        let {
            blockType: t,
            slateEditor: n,
            children: r
        } = e, s = null != n ? N.EditorUtils.getCurrentBlock(n) : null, a = null != s && N.NodeUtils.isType(s[0], t);
        return (0, i.jsx)(l.Button, {
            className: p.button,
            innerClassName: p.buttonInner,
            color: a ? p.active : p.inactive,
            hover: p.hover,
            look: l.Button.Looks.FILLED,
            size: l.Button.Sizes.NONE,
            onClick: () => {
                null != n && A.HistoryUtils.withSingleEntry(n, () => (0, h.toggleBlockStyle)(n, t))
            },
            children: r
        })
    }

    function L(e) {
        var t;
        let {
            slateEditor: n
        } = e, [i, s] = null !== (t = N.EditorUtils.getSelectedVoid(n)) && void 0 !== t ? t : [null, null], a = r.useCallback(e => {
            if ((null == n ? void 0 : n.selection) == null || null == s) return;
            let t = n.selection;
            A.HistoryUtils.withSingleEntry(n, () => {
                m.SlateTransforms.voidToText(n, e, s), m.SlateTransforms.select(n, t)
            })
        }, [n, s]);
        return null == i ? null : (0, O.default)(i, {
            replace: a
        })
    }
    t.default = r.forwardRef(function(e, t) {
        var n;
        let {
            editorRef: s,
            containerRef: a,
            options: l
        } = e, d = r.useRef(null), [_, c] = r.useState(!1), E = r.useRef(), I = r.useContext(u.default), T = r.useCallback(() => {
            c(!1), clearTimeout(E.current)
        }, []), A = r.useCallback(e => {
            var t;
            let n = I.renderWindow;
            !(e.target instanceof n.Node && (null === (t = d.current) || void 0 === t ? void 0 : t.contains(e.target))) && T()
        }, [I, T]), h = r.useCallback(e => {
            let t = I.renderWindow;
            if (e.target instanceof t.Element) {
                if (0 !== e.button) T();
                else {
                    var n;
                    let i = e.target instanceof t.Node && (null === (n = d.current) || void 0 === n ? void 0 : n.contains(e.target));
                    clearTimeout(E.current), E.current = setTimeout(() => {
                        var t;
                        let n = null === (t = (0, S.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement,
                            r = a.current;
                        c(i || null != n && null != r && r.contains(n))
                    }, 100)
                }
            } else T()
        }, [I, a, T]);
        r.useImperativeHandle(t, () => ({
            hide: T
        }), [T]), r.useEffect(() => {
            let e = I.renderWindow;
            return e.document.addEventListener("keydown", T), e.document.addEventListener("mousedown", A), e.document.addEventListener("mouseup", h), e.addEventListener("focus", T), e.addEventListener("blur", T), () => {
                e.document.removeEventListener("keydown", T), e.document.removeEventListener("mousedown", A), e.document.removeEventListener("mouseup", h), e.removeEventListener("focus", T), e.removeEventListener("blur", T), clearTimeout(E.current)
            }
        }, [I, T, A, h]);
        let {
            x: m,
            y: O
        } = r.useMemo(() => {
            var e, t, n, i;
            let r = null === (e = s.current) || void 0 === e ? void 0 : e.getSlateEditor();
            if ((null == r ? void 0 : r.selection) == null || N.RangeUtils.isCollapsed(r.selection) || !_) return {
                x: null,
                y: null
            };
            let l = o.ReactEditor.findDocumentOrShadowRoot(r),
                u = l.getSelection();
            if (null == u || null == u.focusNode || null == u.anchorNode || u.isCollapsed) return {
                x: null,
                y: null
            };
            let d = l.createRange();
            d.setStart(u.focusNode, u.focusOffset), d.setEnd(u.focusNode, u.focusOffset);
            let c = d.getBoundingClientRect(),
                E = l.createRange();
            E.setStart(u.anchorNode, u.anchorOffset), E.setEnd(u.anchorNode, u.anchorOffset);
            let I = E.getBoundingClientRect(),
                T = l.createRange();
            T.setStart(u.anchorNode, u.anchorOffset), T.setEnd(u.focusNode, u.focusOffset);
            let f = T.getBoundingClientRect(),
                S = c.x === I.x,
                A = S ? f.x : Math.min(c.x, I.x),
                h = S ? f.x + f.width : Math.max(c.x, I.x),
                m = null !== (i = null === (n = a.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== i ? i : 0;
            return {
                x: A + (h - A) / 2,
                y: Math.max(m, Math.min(I.y, c.y))
            }
        }, [a, _, s]), [C, g] = r.useState(0), [D, v] = r.useState(0);
        if (r.useLayoutEffect(() => {
                if (null == m || null == O || null == d.current) return;
                let e = d.current.getBoundingClientRect();
                v(e.width / 2), g(e.height + 12)
            }, [m, O]), null == m || null == O) return null;
        let M = null === (n = s.current) || void 0 === n ? void 0 : n.getSlateEditor();
        return null == M ? null : (0, i.jsx)(f.default, {
            children: (0, i.jsxs)("div", {
                id: "slate-toolbar",
                ref: d,
                className: p.toolbar,
                style: {
                    top: O - C,
                    left: m - D
                },
                onMouseDown: e => {
                    e.stopPropagation()
                },
                onMouseUp: e => {
                    e.stopPropagation()
                },
                children: [(0, i.jsx)(L, {
                    slateEditor: M
                }), (0, i.jsx)(R, {
                    editorRef: s,
                    options: l
                })]
            })
        })
    })
}