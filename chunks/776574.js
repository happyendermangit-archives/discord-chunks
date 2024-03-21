function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007"), n("781738");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("371621"),
        o = n("272030"),
        u = n("773336"),
        d = n("286235"),
        c = n("149022"),
        f = n("83800"),
        p = n("903782"),
        m = n("939563"),
        h = n("385887"),
        x = n("368555"),
        E = n("30550"),
        y = n("760120"),
        g = n("632550"),
        S = n("235541"),
        C = n("919163");
    class T extends l.PureComponent {
        componentDidMount() {
            this.props.editor.events.addListener("onChange", this.handleOnChange)
        }
        componentDidUpdate(e, t, n) {
            e.editor !== this.props.editor && (e.editor.events.removeListener("onChange", this.handleOnChange), this.props.editor.events.addListener("onChange", this.handleOnChange))
        }
        componentWillUnmount() {
            this.props.editor.events.removeListener("onChange", this.handleOnChange)
        }
        componentDidCatch(e, t) {
            d.default.captureException(e, {
                extra: t
            }), this.setState({
                initialValue: [...this.props.editor.children]
            })
        }
        decorate(e) {
            var t;
            let {
                editor: n,
                guildId: i,
                decorateExtra: l
            } = this.props;
            return [...(0, E.default)(n, e, i), ...(0, x.default)(n, e), ...null !== (t = null == l ? void 0 : l(n, e)) && void 0 !== t ? t : []]
        }
        renderElement(e) {
            var t;
            let {
                guildId: n,
                channelId: l,
                renderExtraElement: a
            } = this.props, {
                attributes: s,
                children: r
            } = e;
            "rtl" === s.dir && (s.style = {
                ...s.style,
                textAlign: "right"
            });
            let o = null !== (t = null == a ? void 0 : a(e)) && void 0 !== t ? t : (0, y.default)(e, n, l);
            return null != o ? o : (0, i.jsx)("div", {
                ...s,
                children: r
            })
        }
        renderLeaf(e) {
            var t;
            let {
                editor: n,
                renderExtraLeaf: l
            } = this.props, {
                attributes: a,
                children: s
            } = e, r = null !== (t = null == l ? void 0 : l(e)) && void 0 !== t ? t : (0, g.default)(n, e);
            return null != r ? r : (0, i.jsx)("span", {
                ...a,
                children: s
            })
        }
        handleOnChange() {
            var e, t;
            let {
                editor: n
            } = this.props, i = h.EditorUtils.isEditorEmpty(n) && null == n.composition;
            if (i !== this.state.showPlaceholder && this.setState({
                    showPlaceholder: i
                }), null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, h.EditorUtils.richValue(n)), !1 === this.props.canFocus) {
                let e = r.ReactEditor.findDocumentOrShadowRoot(n),
                    t = e.getSelection();
                null != t && this.isSelectionPartiallyInside(t) && (null == t || t.removeAllRanges())
            }
        }
        handleKeyDown(e) {
            var t, n;
            if (null != this.props.editor.composition) {
                e.preventDefault(), e.stopPropagation();
                return
            }
            null === (t = (n = this.props).onKeyDown) || void 0 === t || t.call(n, e)
        }
        handleKeyUp(e) {
            var t, n;
            if (null != this.props.editor.composition) {
                e.preventDefault(), e.stopPropagation();
                return
            }
            null === (t = (n = this.props).onKeyUp) || void 0 === t || t.call(n, e)
        }
        handleBeforeInput(e) {
            var t;
            let {
                editor: n
            } = this.props, i = r.ReactEditor.findDocumentOrShadowRoot(n), l = i.getSelection(), a = null != l && l.rangeCount > 0 ? l.getRangeAt(0) : null, s = null !== (t = e.getTargetRanges()[0]) && void 0 !== t ? t : null;
            if (null == n.composition) {
                if (("insertText" === e.inputType || "insertReplacementText" === e.inputType) && (null == s && (s = a), null != s)) {
                    let t = h.EditorUtils.toSlateRange(n, s, {
                        exactMatch: !1,
                        suppressThrow: !0
                    });
                    null != t && null != e.data && (h.RangeUtils.isExpanded(t) ? f.HistoryUtils.withSingleEntry(n, () => {
                        n.selection = t, n.deleteFragment(), n.insertText(e.data), e.preventDefault()
                    }) : (n.insertText(e.data), e.preventDefault()))
                }
                if (e.inputType.startsWith("deleteContent") && null != a && !a.collapsed) {
                    let t = h.EditorUtils.toSlateRange(n, a, {
                        exactMatch: !0,
                        suppressThrow: !0
                    });
                    null != t && h.RangeUtils.isExpanded(t) && (n.selection = t, n.deleteFragment(e.inputType.endsWith("Backward") ? "backward" : "forward"), e.preventDefault())
                }
            }
        }
        handleCompositionStart() {
            var e, t;
            let {
                editor: n
            } = this.props, i = {
                insertedPrefix: !1,
                startedInsideInline: !1
            };
            this.state.showPlaceholder && this.setState({
                showPlaceholder: !1
            });
            let l = null != n.selection && h.RangeUtils.isCollapsed(n.selection) ? h.EditorUtils.leaf(n, n.selection.anchor.path) : null;
            if (null == l) {
                n.composition = i;
                return
            }
            let a = null != n.selection && h.RangeUtils.isCollapsed(n.selection) ? h.EditorUtils.above(n, {
                at: l[1],
                match: e => h.EditorUtils.isInline(n, e),
                mode: "lowest"
            }) : null;
            if (null != a && (i.startedInsideInline = !0), h.EditorUtils.isEditorEmpty(n)) {
                m.SlateTransforms.insertNodes(n, {
                    text: "\uFEFF"
                }, {
                    select: !0
                }), i.insertedPrefix = !0, n.composition = i;
                return
            }
            let s = r.ReactEditor.findDocumentOrShadowRoot(this.props.editor),
                o = s.getSelection(),
                u = (null !== (e = null == o ? void 0 : o.rangeCount) && void 0 !== e ? e : 0) > 0 ? null == o ? void 0 : o.getRangeAt(0) : null,
                d = null != u ? h.EditorUtils.toSlateRange(n, u, {
                    exactMatch: !0,
                    suppressThrow: !0
                }) : null;
            if (null == d && null != u) {
                let e = h.EditorUtils.toSlateRange(n, u, {
                    exactMatch: !1,
                    suppressThrow: !0
                });
                n.selection = null, null != e ? m.SlateTransforms.select(n, e) : m.SlateTransforms.select(n, null !== (t = n.selection) && void 0 !== t ? t : h.EditorUtils.end(n, []))
            }
            n.composition = i
        }
        handleCompositionEnd(e) {
            let {
                editor: t
            } = this.props;
            if (null == t.composition) return;
            let {
                insertedPrefix: n
            } = t.composition;
            if (n && null != t.selection && h.RangeUtils.isCollapsed(t.selection)) {
                let e = t.selection.anchor.path,
                    n = h.NodeUtils.leaf(t, e);
                h.EditorUtils.withoutNormalizing(t, () => {
                    let e = n.text.replace(/^\uFEFF/, "");
                    m.SlateTransforms.delete(t, {
                        unit: "offset",
                        distance: n.text.length,
                        reverse: !0
                    }), h.EditorUtils.insertText(t, e)
                })
            }
            t.composition = null
        }
        handleFocusCapture(e) {
            let {
                onFocus: t
            } = this.props;
            null == t || t(e)
        }
        handleBlurCapture(e) {
            let {
                editor: t,
                onBlur: n
            } = this.props, i = e.relatedTarget, l = r.ReactEditor.findDocumentOrShadowRoot(this.props.editor), a = l.getElementById("textarea-context"), s = l.getElementById("slate-toolbar");
            if (null != i && !(0, p.hasDomParent)(i, a) && !(0, p.hasDomParent)(i, s)) {
                let e = r.ReactEditor.findDocumentOrShadowRoot(t),
                    n = e.getSelection();
                null != n && this.isSelectionEscaping(n) && n.removeAllRanges()
            }
            null == n || n(e)
        }
        isSelectionPartiallyInside(e) {
            let t = this.containerRef.current;
            if (null != e && null != t)
                for (let n = e.rangeCount - 1; n >= 0; n--) {
                    let i = e.getRangeAt(n);
                    if ((0, p.hasDomParent)(i.startContainer, t) || !i.collapsed && (0, p.hasDomParent)(i.endContainer, t)) return !0
                }
            return !1
        }
        isSelectionEscaping(e) {
            let t = this.containerRef.current,
                n = !1,
                i = !1;
            if (null != e && null != t)
                for (let l = e.rangeCount - 1; l >= 0; l--) {
                    let a = e.getRangeAt(l);
                    if ((0, p.hasDomParent)(a.startContainer, t)) {
                        if (i) return !0;
                        n = !0
                    } else {
                        if (n) return !0;
                        i = !0
                    }
                    if (!a.collapsed) {
                        if ((0, p.hasDomParent)(a.startContainer, t)) {
                            if (i) return !0;
                            n = !0
                        } else {
                            if (n) return !0;
                            i = !0
                        }
                    }
                }
            return !1
        }
        handleContextMenu(e) {
            let {
                editor: t
            } = this.props, l = e.pageY, a = window.innerHeight;
            u.isPlatformEmbedded ? (0, o.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("875602").then(n.bind(n, "875602"));
                return n => (0, i.jsx)(e, {
                    ...n,
                    editor: t,
                    text: h.EditorUtils.getSelectedText(t, !0)
                })
            }, {
                align: null != l && null != a && l < a / 2 ? "top" : "bottom",
                enableSpellCheck: !0
            }) : blur()
        }
        handlePasteCapture(e) {
            let {
                editor: t,
                onPaste: n,
                readOnly: i
            } = this.props;
            null == n || n(e), !(e.isDefaultPrevented() || e.isPropagationStopped()) && !i && (t.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation())
        }
        render() {
            let {
                editor: e,
                className: t,
                containerClassName: n,
                canFocus: l,
                autoFocus: a,
                placeholder: o,
                channelId: u,
                guildId: d,
                onChange: c,
                onFocus: f,
                onBlur: p,
                onKeyDown: m,
                onKeyUp: h,
                decorateExtra: x,
                renderExtraElement: E,
                renderExtraLeaf: y,
                ...g
            } = this.props;
            return (0, i.jsxs)("div", {
                ref: this.containerRef,
                className: n,
                children: [this.state.showPlaceholder ? (0, i.jsx)("div", {
                    className: s(S.placeholder, t),
                    "aria-hidden": !0,
                    children: o
                }) : null, (0, i.jsx)(r.Slate, {
                    editor: e,
                    value: [...this.state.initialValue],
                    children: (0, i.jsx)(r.Editable, {
                        ...g,
                        className: s(C.markup, S.editor, t),
                        decorate: this.decorate,
                        renderElement: this.renderElement,
                        renderLeaf: this.renderLeaf,
                        onFocusCapture: this.handleFocusCapture,
                        onBlurCapture: this.handleBlurCapture,
                        onContextMenu: this.handleContextMenu,
                        onKeyDown: this.handleKeyDown,
                        onKeyUp: this.handleKeyUp,
                        onDOMBeforeInput: this.handleBeforeInput,
                        onCompositionStart: this.handleCompositionStart,
                        onCompositionEnd: this.handleCompositionEnd,
                        onPasteCapture: this.handlePasteCapture,
                        autoFocus: a && !1 !== l,
                        autoCorrect: "off",
                        "data-can-focus": !1 !== l,
                        "aria-label": o,
                        "aria-multiline": !0
                    })
                })]
            })
        }
        constructor(e) {
            super(e), this.containerRef = l.createRef(), this.decorate = this.decorate.bind(this), this.renderElement = this.renderElement.bind(this), this.renderLeaf = this.renderLeaf.bind(this), this.handleOnChange = this.handleOnChange.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleKeyUp = this.handleKeyUp.bind(this), this.handleBeforeInput = this.handleBeforeInput.bind(this), this.handleCompositionStart = this.handleCompositionStart.bind(this), this.handleCompositionEnd = this.handleCompositionEnd.bind(this), this.handleFocusCapture = this.handleFocusCapture.bind(this), this.handleBlurCapture = this.handleBlurCapture.bind(this), this.handleContextMenu = this.handleContextMenu.bind(this), this.handlePasteCapture = this.handlePasteCapture.bind(this), h.EditorUtils.isEditorEmpty(e.editor) ? this.state = {
                initialValue: (0, c.createEmptyState)().richValue,
                showPlaceholder: !0
            } : this.state = {
                initialValue: h.EditorUtils.richValue(e.editor),
                showPlaceholder: !1
            }
        }
    }
    var _ = T
}