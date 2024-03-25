function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ToolbarButtons: function() {
            return I
        },
        default: function() {
            return v
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("371621"),
        o = n("77078"),
        u = n("244201"),
        d = n("520089"),
        c = n("769215"),
        f = n("204591"),
        p = n("685020"),
        m = n("265363"),
        h = n("140567"),
        x = n("983782"),
        E = n("791776"),
        y = n("83800"),
        g = n("916429"),
        S = n("939563"),
        C = n("385887"),
        _ = n("395364"),
        T = n("681426");

    function I(e) {
        var t;
        let {
            editorRef: n,
            options: l,
            iconClassName: a,
            dividerClassName: r
        } = e, o = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
        return null == o ? null : (0, i.jsxs)("div", {
            className: T.buttons,
            children: [(0, i.jsx)(A, {
                slateEditor: o,
                markdownSyntax: "bold",
                children: (0, i.jsx)(c.default, {
                    className: s(T.icon, a)
                })
            }), (0, i.jsx)(A, {
                slateEditor: o,
                markdownSyntax: "italics",
                children: (0, i.jsx)(p.default, {
                    className: s(T.icon, a)
                })
            }), (0, i.jsx)(A, {
                slateEditor: o,
                markdownSyntax: "strikethrough",
                children: (0, i.jsx)(h.default, {
                    className: s(T.icon, a)
                })
            }), (0, i.jsx)("div", {
                className: s(T.divider, r)
            }), !(null == l ? void 0 : l.disableBlockQuotes) && (0, i.jsx)(N, {
                slateEditor: o,
                blockType: "blockQuote",
                children: (0, i.jsx)(d.default, {
                    className: s(T.icon, a)
                })
            }), (0, i.jsx)(A, {
                slateEditor: o,
                markdownSyntax: "inlineCode",
                children: (0, i.jsx)(f.default, {
                    className: s(T.icon, a)
                })
            }), (0, i.jsx)(A, {
                slateEditor: o,
                markdownSyntax: "spoiler",
                children: (0, i.jsx)(m.default, {
                    className: s(T.icon, a)
                })
            })]
        })
    }
    var v = l.forwardRef(function(e, t) {
        var n;
        let {
            editorRef: a,
            containerRef: s,
            options: o
        } = e, d = l.useRef(null), [c, f] = l.useState(!1), p = l.useRef(), m = l.useContext(u.default), h = l.useCallback(() => {
            f(!1), clearTimeout(p.current)
        }, []), y = l.useCallback(e => {
            var t;
            let n = m.renderWindow,
                i = e.target instanceof n.Node && (null === (t = d.current) || void 0 === t ? void 0 : t.contains(e.target));
            !i && h()
        }, [m, h]), g = l.useCallback(e => {
            let t = m.renderWindow;
            if (e.target instanceof t.Element) {
                if (0 !== e.button) h();
                else {
                    var n;
                    let i = e.target instanceof t.Node && (null === (n = d.current) || void 0 === n ? void 0 : n.contains(e.target));
                    clearTimeout(p.current), p.current = setTimeout(() => {
                        var t;
                        let n = null === (t = (0, E.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement,
                            l = s.current;
                        f(i || null != n && null != l && l.contains(n))
                    }, 100)
                }
            } else h()
        }, [m, s, h]);
        l.useImperativeHandle(t, () => ({
            hide: h
        }), [h]), l.useEffect(() => {
            let e = m.renderWindow;
            return e.document.addEventListener("keydown", h), e.document.addEventListener("mousedown", y), e.document.addEventListener("mouseup", g), e.addEventListener("focus", h), e.addEventListener("blur", h), () => {
                e.document.removeEventListener("keydown", h), e.document.removeEventListener("mousedown", y), e.document.removeEventListener("mouseup", g), e.removeEventListener("focus", h), e.removeEventListener("blur", h), clearTimeout(p.current)
            }
        }, [m, h, y, g]);
        let {
            x: S,
            y: _
        } = l.useMemo(() => {
            var e, t, n, i;
            let l = null === (e = a.current) || void 0 === e ? void 0 : e.getSlateEditor();
            if ((null == l ? void 0 : l.selection) == null || C.RangeUtils.isCollapsed(l.selection) || !c) return {
                x: null,
                y: null
            };
            let o = r.ReactEditor.findDocumentOrShadowRoot(l),
                u = o.getSelection();
            if (null == u || null == u.focusNode || null == u.anchorNode || u.isCollapsed) return {
                x: null,
                y: null
            };
            let d = o.createRange();
            d.setStart(u.focusNode, u.focusOffset), d.setEnd(u.focusNode, u.focusOffset);
            let f = d.getBoundingClientRect(),
                p = o.createRange();
            p.setStart(u.anchorNode, u.anchorOffset), p.setEnd(u.anchorNode, u.anchorOffset);
            let m = p.getBoundingClientRect(),
                h = o.createRange();
            h.setStart(u.anchorNode, u.anchorOffset), h.setEnd(u.focusNode, u.focusOffset);
            let x = h.getBoundingClientRect(),
                E = f.x === m.x,
                y = E ? x.x : Math.min(f.x, m.x),
                g = E ? x.x + x.width : Math.max(f.x, m.x),
                S = null !== (i = null === (n = s.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== i ? i : 0,
                _ = Math.max(S, Math.min(m.y, f.y));
            return {
                x: y + (g - y) / 2,
                y: _
            }
        }, [s, c, a]), [v, A] = l.useState(0), [N, O] = l.useState(0);
        if (l.useLayoutEffect(() => {
                if (null == S || null == _ || null == d.current) return;
                let e = d.current.getBoundingClientRect();
                O(e.width / 2), A(e.height + 12)
            }, [S, _]), null == S || null == _) return null;
        let M = null === (n = a.current) || void 0 === n ? void 0 : n.getSlateEditor();
        return null == M ? null : (0, i.jsx)(x.default, {
            children: (0, i.jsxs)("div", {
                id: "slate-toolbar",
                ref: d,
                className: T.toolbar,
                style: {
                    top: _ - v,
                    left: S - N
                },
                onMouseDown: e => {
                    e.stopPropagation()
                },
                onMouseUp: e => {
                    e.stopPropagation()
                },
                children: [(0, i.jsx)(R, {
                    slateEditor: M
                }), (0, i.jsx)(I, {
                    editorRef: a,
                    options: o
                })]
            })
        })
    });

    function A(e) {
        let {
            slateEditor: t,
            markdownSyntax: n,
            children: l
        } = e, a = !1;
        if ((null == t ? void 0 : t.selection) != null) {
            let [e, i] = C.RangeUtils.edges(t.selection);
            a = null != (0, g.parseSelectedSyntax)(t, e, i).before[n]
        }
        return (0, i.jsx)(o.Button, {
            className: T.button,
            innerClassName: T.buttonInner,
            color: a ? T.active : T.inactive,
            hover: T.hover,
            look: o.Button.Looks.FILLED,
            size: o.Button.Sizes.NONE,
            onClick: () => {
                null != t && y.HistoryUtils.withSingleEntry(t, () => (0, g.toggleMarkdownStyle)(t, n))
            },
            children: l
        })
    }

    function N(e) {
        let {
            blockType: t,
            slateEditor: n,
            children: l
        } = e, a = null != n ? C.EditorUtils.getCurrentBlock(n) : null, s = null != a && C.NodeUtils.isType(a[0], t);
        return (0, i.jsx)(o.Button, {
            className: T.button,
            innerClassName: T.buttonInner,
            color: s ? T.active : T.inactive,
            hover: T.hover,
            look: o.Button.Looks.FILLED,
            size: o.Button.Sizes.NONE,
            onClick: () => {
                null != n && y.HistoryUtils.withSingleEntry(n, () => (0, g.toggleBlockStyle)(n, t))
            },
            children: l
        })
    }

    function R(e) {
        var t;
        let {
            slateEditor: n
        } = e, [i, a] = null !== (t = C.EditorUtils.getSelectedVoid(n)) && void 0 !== t ? t : [null, null], s = l.useCallback(e => {
            if ((null == n ? void 0 : n.selection) == null || null == a) return;
            let t = n.selection;
            y.HistoryUtils.withSingleEntry(n, () => {
                S.SlateTransforms.voidToText(n, e, a), S.SlateTransforms.select(n, t)
            })
        }, [n, a]);
        return null == i ? null : (0, _.default)(i, {
            replace: s
        })
    }
}