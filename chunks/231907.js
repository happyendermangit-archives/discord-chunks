function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("136035"),
        u = n("549579"),
        s = n("374550"),
        l = n("285910"),
        c = n("941055"),
        f = n("610045"),
        d = n("335934"),
        _ = n("453197"),
        E = n("714196"),
        p = n("432945"),
        m = n("237410"),
        y = n("689161"),
        I = n("46979"),
        h = n("559366"),
        O = n("931093");

    function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function S(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function v(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function b(e) {
        return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function N(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                A(e, t, n[t])
            })
        }
        return e
    }

    function R(e, t) {
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

    function C(e, t) {
        return (C = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function P(e) {
        return function(e) {
            if (Array.isArray(e)) return T(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return T(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var D = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && C(e, t)
        }(U, e);
        var t, o, T, D, L, M = (t = U, o = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, n, r, i = b(t);
            if (o) {
                var a = b(this).constructor;
                r = Reflect.construct(i, arguments, a)
            } else r = i.apply(this, arguments);
            return e = this, (n = r) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(n) || "function" == typeof n) ? n : S(e)
        });

        function U(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, U), A(S(t = M.call(this, e)), "containerRef", r.createRef()), A(S(t), "state", void 0), t.decorate = t.decorate.bind(S(t)), t.renderElement = t.renderElement.bind(S(t)), t.renderLeaf = t.renderLeaf.bind(S(t)), t.handleOnChange = t.handleOnChange.bind(S(t)), t.handleKeyDown = t.handleKeyDown.bind(S(t)), t.handleKeyUp = t.handleKeyUp.bind(S(t)), t.handleBeforeInput = t.handleBeforeInput.bind(S(t)), t.handleCompositionStart = t.handleCompositionStart.bind(S(t)), t.handleCompositionEnd = t.handleCompositionEnd.bind(S(t)), t.handleFocusCapture = t.handleFocusCapture.bind(S(t)), t.handleBlurCapture = t.handleBlurCapture.bind(S(t)), t.handleContextMenu = t.handleContextMenu.bind(S(t)), t.handlePasteCapture = t.handlePasteCapture.bind(S(t)), E.EditorUtils.isEditorEmpty(e.editor) ? t.state = {
                initialValue: (0, c.createEmptyState)().richValue,
                showPlaceholder: !0
            } : t.state = {
                initialValue: E.EditorUtils.richValue(e.editor),
                showPlaceholder: !1
            }, t
        }
        return T = U, D = [{
            key: "componentDidMount",
            value: function() {
                this.props.editor.events.addListener("onChange", this.handleOnChange)
            }
        }, {
            key: "componentDidUpdate",
            value: function(e, t, n) {
                e.editor !== this.props.editor && (e.editor.events.removeListener("onChange", this.handleOnChange), this.props.editor.events.addListener("onChange", this.handleOnChange))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.props.editor.events.removeListener("onChange", this.handleOnChange)
            }
        }, {
            key: "componentDidCatch",
            value: function(e, t) {
                l.default.captureException(e, {
                    extra: t
                }), this.setState({
                    initialValue: P(this.props.editor.children)
                })
            }
        }, {
            key: "decorate",
            value: function(e) {
                var t, n = this.props,
                    r = n.editor,
                    o = n.guildId,
                    i = n.decorateExtra;
                return P((0, m.default)(r, e, o)).concat(P((0, p.default)(r, e)), P(null !== (t = null == i ? void 0 : i(r, e)) && void 0 !== t ? t : []))
            }
        }, {
            key: "renderElement",
            value: function(e) {
                var t, n = this.props,
                    o = n.guildId,
                    i = n.channelId,
                    a = n.renderExtraElement,
                    u = e.attributes,
                    s = e.children;
                "rtl" === u.dir && (u.style = R(N({}, u.style), {
                    textAlign: "right"
                }));
                var l = null !== (t = null == a ? void 0 : a(e)) && void 0 !== t ? t : (0, y.default)(e, o, i);
                return null != l ? l : r.createElement("div", u, s)
            }
        }, {
            key: "renderLeaf",
            value: function(e) {
                var t, n = this.props,
                    o = n.editor,
                    i = n.renderExtraLeaf,
                    a = e.attributes,
                    u = e.children,
                    s = null !== (t = null == i ? void 0 : i(e)) && void 0 !== t ? t : (0, I.default)(o, e);
                return null != s ? s : r.createElement("span", a, u)
            }
        }, {
            key: "handleOnChange",
            value: function() {
                var e, t, n = this.props.editor,
                    r = E.EditorUtils.isEditorEmpty(n) && null == n.composition;
                if (r !== this.state.showPlaceholder && this.setState({
                        showPlaceholder: r
                    }), null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, E.EditorUtils.richValue(n)), !1 === this.props.canFocus) {
                    var o = a.ReactEditor.findDocumentOrShadowRoot(n).getSelection();
                    null != o && this.isSelectionPartiallyInside(o) && (null == o || o.removeAllRanges())
                }
            }
        }, {
            key: "handleKeyDown",
            value: function(e) {
                var t, n;
                if (null != this.props.editor.composition) {
                    e.preventDefault(), e.stopPropagation();
                    return
                }
                null === (t = (n = this.props).onKeyDown) || void 0 === t || t.call(n, e)
            }
        }, {
            key: "handleKeyUp",
            value: function(e) {
                var t, n;
                if (null != this.props.editor.composition) {
                    e.preventDefault(), e.stopPropagation();
                    return
                }
                null === (t = (n = this.props).onKeyUp) || void 0 === t || t.call(n, e)
            }
        }, {
            key: "handleBeforeInput",
            value: function(e) {
                var t, n = this.props.editor,
                    r = a.ReactEditor.findDocumentOrShadowRoot(n).getSelection(),
                    o = null != r && r.rangeCount > 0 ? r.getRangeAt(0) : null,
                    i = null !== (t = e.getTargetRanges()[0]) && void 0 !== t ? t : null;
                if (null == n.composition) {
                    if (("insertText" === e.inputType || "insertReplacementText" === e.inputType) && (null == i && (i = o), null != i)) {
                        var u = E.EditorUtils.toSlateRange(n, i, {
                            exactMatch: !1,
                            suppressThrow: !0
                        });
                        null != u && null != e.data && (E.RangeUtils.isExpanded(u) ? f.HistoryUtils.withSingleEntry(n, function() {
                            n.selection = u, n.deleteFragment(), n.insertText(e.data), e.preventDefault()
                        }) : (n.insertText(e.data), e.preventDefault()))
                    }
                    if (e.inputType.startsWith("deleteContent") && null != o && !o.collapsed) {
                        var s = E.EditorUtils.toSlateRange(n, o, {
                            exactMatch: !0,
                            suppressThrow: !0
                        });
                        null != s && E.RangeUtils.isExpanded(s) && (n.selection = s, n.deleteFragment(e.inputType.endsWith("Backward") ? "backward" : "forward"), e.preventDefault())
                    }
                }
            }
        }, {
            key: "handleCompositionStart",
            value: function() {
                var e = this.props.editor,
                    t = {
                        insertedPrefix: !1,
                        startedInsideInline: !1
                    };
                this.state.showPlaceholder && this.setState({
                    showPlaceholder: !1
                });
                var n = null != e.selection && E.RangeUtils.isCollapsed(e.selection) ? E.EditorUtils.leaf(e, e.selection.anchor.path) : null;
                if (null == n) {
                    e.composition = t;
                    return
                }
                if (null != (null != e.selection && E.RangeUtils.isCollapsed(e.selection) ? E.EditorUtils.above(e, {
                        at: n[1],
                        match: function(t) {
                            return E.EditorUtils.isInline(e, t)
                        },
                        mode: "lowest"
                    }) : null) && (t.startedInsideInline = !0), E.EditorUtils.isEditorEmpty(e)) {
                    _.SlateTransforms.insertNodes(e, {
                        text: "\uFEFF"
                    }, {
                        select: !0
                    }), t.insertedPrefix = !0, e.composition = t;
                    return
                }
                var r = a.ReactEditor.findDocumentOrShadowRoot(this.props.editor).getSelection(),
                    o = (null !== (i = null == r ? void 0 : r.rangeCount) && void 0 !== i ? i : 0) > 0 ? null == r ? void 0 : r.getRangeAt(0) : null;
                if (null == (null != o ? E.EditorUtils.toSlateRange(e, o, {
                        exactMatch: !0,
                        suppressThrow: !0
                    }) : null) && null != o) {
                    var i, u, s = E.EditorUtils.toSlateRange(e, o, {
                        exactMatch: !1,
                        suppressThrow: !0
                    });
                    e.selection = null, null != s ? _.SlateTransforms.select(e, s) : _.SlateTransforms.select(e, null !== (u = e.selection) && void 0 !== u ? u : E.EditorUtils.end(e, []))
                }
                e.composition = t
            }
        }, {
            key: "handleCompositionEnd",
            value: function(e) {
                var t = this.props.editor;
                if (null != t.composition) {
                    if (t.composition.insertedPrefix && null != t.selection && E.RangeUtils.isCollapsed(t.selection)) {
                        var n = t.selection.anchor.path,
                            r = E.NodeUtils.leaf(t, n);
                        E.EditorUtils.withoutNormalizing(t, function() {
                            var e = r.text.replace(/^\uFEFF/, "");
                            _.SlateTransforms.delete(t, {
                                unit: "offset",
                                distance: r.text.length,
                                reverse: !0
                            }), E.EditorUtils.insertText(t, e)
                        })
                    }
                    t.composition = null
                }
            }
        }, {
            key: "handleFocusCapture",
            value: function(e) {
                var t = this.props.onFocus;
                null == t || t(e)
            }
        }, {
            key: "handleBlurCapture",
            value: function(e) {
                var t = this.props,
                    n = t.editor,
                    r = t.onBlur,
                    o = e.relatedTarget,
                    i = a.ReactEditor.findDocumentOrShadowRoot(this.props.editor),
                    u = i.getElementById("textarea-context"),
                    s = i.getElementById("slate-toolbar");
                if (null != o && !(0, d.hasDomParent)(o, u) && !(0, d.hasDomParent)(o, s)) {
                    var l = a.ReactEditor.findDocumentOrShadowRoot(n).getSelection();
                    null != l && this.isSelectionEscaping(l) && l.removeAllRanges()
                }
                null == r || r(e)
            }
        }, {
            key: "isSelectionPartiallyInside",
            value: function(e) {
                var t = this.containerRef.current;
                if (null != e && null != t)
                    for (var n = e.rangeCount - 1; n >= 0; n--) {
                        var r = e.getRangeAt(n);
                        if ((0, d.hasDomParent)(r.startContainer, t) || !r.collapsed && (0, d.hasDomParent)(r.endContainer, t)) return !0
                    }
                return !1
            }
        }, {
            key: "isSelectionEscaping",
            value: function(e) {
                var t = this.containerRef.current,
                    n = !1,
                    r = !1;
                if (null != e && null != t)
                    for (var o = e.rangeCount - 1; o >= 0; o--) {
                        var i = e.getRangeAt(o);
                        if ((0, d.hasDomParent)(i.startContainer, t)) {
                            if (r) return !0;
                            n = !0
                        } else {
                            if (n) return !0;
                            r = !0
                        }
                        if (!i.collapsed) {
                            if ((0, d.hasDomParent)(i.startContainer, t)) {
                                if (r) return !0;
                                n = !0
                            } else {
                                if (n) return !0;
                                r = !0
                            }
                        }
                    }
                return !1
            }
        }, {
            key: "handleContextMenu",
            value: function(e) {
                var t, o = this.props.editor,
                    i = e.pageY,
                    a = window.innerHeight;
                if (s.isPlatformEmbedded) {
                    ;
                    (0, u.openContextMenuLazy)(e, (t = function() {
                        var e;
                        return function(e, t) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: u(0),
                                throw: u(1),
                                return: u(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function u(i) {
                                return function(u) {
                                    return function(i) {
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; a;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                        a.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && a.label < o[1]) {
                                                        a.label = o[1], o = i;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(i);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, a)
                                        } catch (e) {
                                            i = [6, e], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, u])
                                }
                            }
                        }(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, n.e("66330").then(n.bind(n, "2596"))];
                                case 1:
                                    return e = t.sent().default, [2, function(t) {
                                        return r.createElement(e, R(N({}, t), {
                                            editor: o,
                                            text: E.EditorUtils.getSelectedText(o, !0)
                                        }))
                                    }]
                            }
                        })
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var i = t.apply(e, n);

                            function a(e) {
                                v(i, r, o, a, u, "next", e)
                            }

                            function u(e) {
                                v(i, r, o, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    }), {
                        align: null != i && null != a && i < a / 2 ? "top" : "bottom",
                        enableSpellCheck: !0
                    })
                } else blur()
            }
        }, {
            key: "handlePasteCapture",
            value: function(e) {
                var t = this.props,
                    n = t.editor,
                    r = t.onPaste,
                    o = t.readOnly;
                null == r || r(e), !(e.isDefaultPrevented() || e.isPropagationStopped()) && !o && (n.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation())
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.editor,
                    n = e.className,
                    o = e.containerClassName,
                    u = e.canFocus,
                    s = e.autoFocus,
                    l = e.placeholder,
                    c = (e.channelId, e.guildId, e.onChange, e.onFocus, e.onBlur, e.onKeyDown, e.onKeyUp, e.decorateExtra, e.renderExtraElement, e.renderExtraLeaf, function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) {
                                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                            }
                        }
                        return o
                    }(e, ["editor", "className", "containerClassName", "canFocus", "autoFocus", "placeholder", "channelId", "guildId", "onChange", "onFocus", "onBlur", "onKeyDown", "onKeyUp", "decorateExtra", "renderExtraElement", "renderExtraLeaf"]));
                return r.createElement("div", {
                    ref: this.containerRef,
                    className: o
                }, this.state.showPlaceholder ? r.createElement("div", {
                    className: i()(h.placeholder, n),
                    "aria-hidden": !0
                }, l) : null, r.createElement(a.Slate, {
                    editor: t,
                    value: P(this.state.initialValue)
                }, r.createElement(a.Editable, R(N({}, c), {
                    className: i()(O.markup, h.editor, n),
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
                    autoFocus: s && !1 !== u,
                    autoCorrect: "off",
                    "data-can-focus": !1 !== u,
                    "aria-label": l,
                    "aria-multiline": !0
                }))))
            }
        }], g(T.prototype, D), L && g(T, L), U
    }(r.PureComponent);
    t.default = D
}