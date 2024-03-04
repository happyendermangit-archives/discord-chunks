function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ToolbarButtons: function() {
            return N
        },
        default: function() {
            return A
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("371621"),
        o = n("77078"),
        u = n("244201"),
        d = n("520089"),
        c = n("769215"),
        f = n("204591"),
        m = n("685020"),
        p = n("265363"),
        h = n("140567"),
        E = n("983782"),
        g = n("791776"),
        C = n("83800"),
        S = n("916429"),
        T = n("939563"),
        v = n("385887"),
        I = n("395364"),
        _ = n("681426");

    function N(e) {
        var t;
        let {
            editorRef: n,
            options: i,
            iconClassName: a,
            dividerClassName: r
        } = e, o = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
        return null == o ? null : (0, l.jsxs)("div", {
            className: _.buttons,
            children: [(0, l.jsx)(x, {
                slateEditor: o,
                markdownSyntax: "bold",
                children: (0, l.jsx)(c.default, {
                    className: s(_.icon, a)
                })
            }), (0, l.jsx)(x, {
                slateEditor: o,
                markdownSyntax: "italics",
                children: (0, l.jsx)(m.default, {
                    className: s(_.icon, a)
                })
            }), (0, l.jsx)(x, {
                slateEditor: o,
                markdownSyntax: "strikethrough",
                children: (0, l.jsx)(h.default, {
                    className: s(_.icon, a)
                })
            }), (0, l.jsx)("div", {
                className: s(_.divider, r)
            }), !(null == i ? void 0 : i.disableBlockQuotes) && (0, l.jsx)(y, {
                slateEditor: o,
                blockType: "blockQuote",
                children: (0, l.jsx)(d.default, {
                    className: s(_.icon, a)
                })
            }), (0, l.jsx)(x, {
                slateEditor: o,
                markdownSyntax: "inlineCode",
                children: (0, l.jsx)(f.default, {
                    className: s(_.icon, a)
                })
            }), (0, l.jsx)(x, {
                slateEditor: o,
                markdownSyntax: "spoiler",
                children: (0, l.jsx)(p.default, {
                    className: s(_.icon, a)
                })
            })]
        })
    }
    var A = i.forwardRef(function(e, t) {
        var n;
        let {
            editorRef: a,
            containerRef: s,
            options: o
        } = e, d = i.useRef(null), [c, f] = i.useState(!1), m = i.useRef(), p = i.useContext(u.default), h = i.useCallback(() => {
            f(!1), clearTimeout(m.current)
        }, []), C = i.useCallback(e => {
            var t;
            let n = p.renderWindow,
                l = e.target instanceof n.Node && (null === (t = d.current) || void 0 === t ? void 0 : t.contains(e.target));
            !l && h()
        }, [p, h]), S = i.useCallback(e => {
            let t = p.renderWindow;
            if (e.target instanceof t.Element) {
                if (0 !== e.button) h();
                else {
                    var n;
                    let l = e.target instanceof t.Node && (null === (n = d.current) || void 0 === n ? void 0 : n.contains(e.target));
                    clearTimeout(m.current), m.current = setTimeout(() => {
                        var t;
                        let n = null === (t = (0, g.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement,
                            i = s.current;
                        f(l || null != n && null != i && i.contains(n))
                    }, 100)
                }
            } else h()
        }, [p, s, h]);
        i.useImperativeHandle(t, () => ({
            hide: h
        }), [h]), i.useEffect(() => {
            let e = p.renderWindow;
            return e.document.addEventListener("keydown", h), e.document.addEventListener("mousedown", C), e.document.addEventListener("mouseup", S), e.addEventListener("focus", h), e.addEventListener("blur", h), () => {
                e.document.removeEventListener("keydown", h), e.document.removeEventListener("mousedown", C), e.document.removeEventListener("mouseup", S), e.removeEventListener("focus", h), e.removeEventListener("blur", h), clearTimeout(m.current)
            }
        }, [p, h, C, S]);
        let {
            x: T,
            y: I
        } = i.useMemo(() => {
            var e, t, n, l;
            let i = null === (e = a.current) || void 0 === e ? void 0 : e.getSlateEditor();
            if ((null == i ? void 0 : i.selection) == null || v.RangeUtils.isCollapsed(i.selection) || !c) return {
                x: null,
                y: null
            };
            let o = r.ReactEditor.findDocumentOrShadowRoot(i),
                u = o.getSelection();
            if (null == u || null == u.focusNode || null == u.anchorNode || u.isCollapsed) return {
                x: null,
                y: null
            };
            let d = o.createRange();
            d.setStart(u.focusNode, u.focusOffset), d.setEnd(u.focusNode, u.focusOffset);
            let f = d.getBoundingClientRect(),
                m = o.createRange();
            m.setStart(u.anchorNode, u.anchorOffset), m.setEnd(u.anchorNode, u.anchorOffset);
            let p = m.getBoundingClientRect(),
                h = o.createRange();
            h.setStart(u.anchorNode, u.anchorOffset), h.setEnd(u.focusNode, u.focusOffset);
            let E = h.getBoundingClientRect(),
                g = f.x === p.x,
                C = g ? E.x : Math.min(f.x, p.x),
                S = g ? E.x + E.width : Math.max(f.x, p.x),
                T = null !== (l = null === (n = s.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== l ? l : 0,
                I = Math.max(T, Math.min(p.y, f.y));
            return {
                x: C + (S - C) / 2,
                y: I
            }
        }, [s, c, a]), [A, x] = i.useState(0), [y, R] = i.useState(0);
        if (i.useLayoutEffect(() => {
                if (null == T || null == I || null == d.current) return;
                let e = d.current.getBoundingClientRect();
                R(e.width / 2), x(e.height + 12)
            }, [T, I]), null == T || null == I) return null;
        let M = null === (n = a.current) || void 0 === n ? void 0 : n.getSlateEditor();
        return null == M ? null : (0, l.jsx)(E.default, {
            children: (0, l.jsxs)("div", {
                id: "slate-toolbar",
                ref: d,
                className: _.toolbar,
                style: {
                    top: I - A,
                    left: T - y
                },
                onMouseDown: e => {
                    e.stopPropagation()
                },
                onMouseUp: e => {
                    e.stopPropagation()
                },
                children: [(0, l.jsx)(O, {
                    slateEditor: M
                }), (0, l.jsx)(N, {
                    editorRef: a,
                    options: o
                })]
            })
        })
    });

    function x(e) {
        let {
            slateEditor: t,
            markdownSyntax: n,
            children: i
        } = e, a = !1;
        if ((null == t ? void 0 : t.selection) != null) {
            let [e, l] = v.RangeUtils.edges(t.selection);
            a = null != (0, S.parseSelectedSyntax)(t, e, l).before[n]
        }
        return (0, l.jsx)(o.Button, {
            className: _.button,
            innerClassName: _.buttonInner,
            color: a ? _.active : _.inactive,
            hover: _.hover,
            look: o.Button.Looks.FILLED,
            size: o.Button.Sizes.NONE,
            onClick: () => {
                null != t && C.HistoryUtils.withSingleEntry(t, () => (0, S.toggleMarkdownStyle)(t, n))
            },
            children: i
        })
    }

    function y(e) {
        let {
            blockType: t,
            slateEditor: n,
            children: i
        } = e, a = null != n ? v.EditorUtils.getCurrentBlock(n) : null, s = null != a && v.NodeUtils.isType(a[0], t);
        return (0, l.jsx)(o.Button, {
            className: _.button,
            innerClassName: _.buttonInner,
            color: s ? _.active : _.inactive,
            hover: _.hover,
            look: o.Button.Looks.FILLED,
            size: o.Button.Sizes.NONE,
            onClick: () => {
                null != n && C.HistoryUtils.withSingleEntry(n, () => (0, S.toggleBlockStyle)(n, t))
            },
            children: i
        })
    }

    function O(e) {
        var t;
        let {
            slateEditor: n
        } = e, [l, a] = null !== (t = v.EditorUtils.getSelectedVoid(n)) && void 0 !== t ? t : [null, null], s = i.useCallback(e => {
            if ((null == n ? void 0 : n.selection) == null || null == a) return;
            let t = n.selection;
            C.HistoryUtils.withSingleEntry(n, () => {
                T.SlateTransforms.voidToText(n, e, a), T.SlateTransforms.select(n, t)
            })
        }, [n, a]);
        return null == l ? null : (0, I.default)(l, {
            replace: s
        })
    }
}