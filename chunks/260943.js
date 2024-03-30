function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return F
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("218887"),
        l = n.n(s),
        c = n("729594"),
        f = n("56300"),
        d = n("771382"),
        _ = n("183645"),
        E = n("29570"),
        p = n("319654"),
        m = n("471559"),
        y = n("35523"),
        I = n("158201"),
        h = n("443817"),
        O = n("49657"),
        T = n("398975"),
        S = n("941055"),
        v = n("186179"),
        g = n("381914"),
        A = n("616944"),
        b = n("590401"),
        N = n("281767"),
        R = n("941504"),
        C = n("23383");

    function P(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function D(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function L(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function M(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function U(e) {
        return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function w(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                M(e, t, n[t])
            })
        }
        return e
    }

    function k(e, t) {
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

    function G(e, t) {
        return (G = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    new y.default("ChannelEditor.tsx");
    var B = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        },
        j = {
            12: C.fontSize12Padding,
            14: C.fontSize14Padding,
            15: C.fontSize15Padding,
            16: C.fontSize16Padding,
            18: C.fontSize18Padding,
            20: C.fontSize20Padding,
            24: C.fontSize24Padding
        },
        F = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && G(e, t)
            }(F, e);
            var t, n, o, a, s, y = (t = F, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = U(t);
                if (n) {
                    var a = U(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : D(e)
            });

            function F(e) {
                var t;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, F), M(D(t = y.call(this, e)), "ref", r.createRef()), M(D(t), "_focusBlurQueue", Promise.resolve()), M(D(t), "_unsubscribe", void 0), M(D(t), "handleSelectionChange", function() {
                    if (t.props.focused) {
                        var e, n, r;
                        t.props.onSelectionChanged(null === (n = (r = document).getSelection) || void 0 === n ? void 0 : null === (e = n.call(r)) || void 0 === e ? void 0 : e.toString())
                    }
                }), M(D(t), "focus", function() {
                    var e;
                    null === (e = t._focusBlurQueue) || void 0 === e || e.then(function() {
                        t.setState({
                            focused: !0
                        }, function() {
                            var e = t.ref.current;
                            null != e && e.focus()
                        })
                    })
                }), M(D(t), "saveCurrentText", function() {
                    var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        n = t.props,
                        r = n.type,
                        o = n.channel;
                    r.drafts.autoSave && (e && t.saveCurrentTextThrottled.cancel(), t.handleSaveCurrentText(o.id))
                }), M(D(t), "handleBeforeUnload", function() {
                    return t.saveCurrentText()
                }), M(D(t), "saveCurrentTextThrottled", u().throttle(t.saveCurrentText.bind(D(t), !1), 500)), M(D(t), "handleEnter", function(e) {
                    var n, r;
                    return null === (n = (r = t.props).onEnter) || void 0 === n ? void 0 : n.call(r, e)
                }), M(D(t), "handleTab", function() {
                    var e, n;
                    return null === (e = (n = t.props).onTab) || void 0 === e ? void 0 : e.call(n)
                }), M(D(t), "handleMoveSelection", function(e) {
                    var n, r;
                    return null === (n = (r = t.props).onMoveSelection) || void 0 === n ? void 0 : n.call(r, e)
                }), M(D(t), "maybeShowAutocomplete", function() {
                    var e, n;
                    return null === (e = (n = t.props).onMaybeShowAutocomplete) || void 0 === e ? void 0 : e.call(n)
                }), M(D(t), "hideAutocomplete", function() {
                    var e, n;
                    return null === (e = (n = t.props).onHideAutocomplete) || void 0 === e ? void 0 : e.call(n)
                }), M(D(t), "handleSaveCurrentText", function(e) {
                    d.default.saveDraft(e, t.props.textValue, t.props.type.drafts.type)
                }), M(D(t), "handleClearText", function() {
                    var e, n;
                    null === (e = (n = t.props).onChange) || void 0 === e || e.call(n, null, "", (0, S.toRichValue)(""))
                }), M(D(t), "handleInsertText", function(e) {
                    var n = e.plainText,
                        r = e.rawText,
                        o = e.addSpace;
                    !t.props.disabled && (t.appendText(n, r, void 0 !== o && o), t.focus())
                }), M(D(t), "handleFocus", function(e) {
                    var n = t.props.onFocus,
                        r = t.state.focused;
                    null == n || n(e), !r && t.setState({
                        focused: !0
                    })
                }), M(D(t), "handleBlur", function(e) {
                    var n = t.props.onBlur,
                        r = t.state.focused;
                    null == n || n(e), r && t.setState({
                        focused: !1
                    })
                }), M(D(t), "handlePaste", function(e) {
                    var n, r = t.props,
                        o = r.channel,
                        i = r.canPasteFiles,
                        a = r.uploadPromptCharacterCount,
                        u = r.promptToUpload,
                        s = r.maxCharacterCount,
                        f = r.type;
                    if (null == u || !o.isPrivate() && !i || o.isPrivate() && o.isManaged()) return !1;
                    var d = function(e, t) {
                        var n = [],
                            r = [],
                            o = null,
                            i = null,
                            a = !0,
                            u = !1,
                            s = void 0;
                        try {
                            for (var f, d = e.items[Symbol.iterator](); !(a = (f = d.next()).done); a = !0) {
                                var _ = f.value;
                                if ("file" === _.kind) {
                                    var E = _.getAsFile();
                                    if (null == E) continue;
                                    null != E.path && E.path.length > 0 ? n.push(E) : r.push(E)
                                } else "string" === _.kind && ("text/plain" === _.type && null == o ? o = _ : "text/html" === _.type && null == i && (i = _))
                            }
                        } catch (e) {
                            u = !0, s = e
                        } finally {
                            try {
                                !a && null != d.return && d.return()
                            } finally {
                                if (u) throw s
                            }
                        }
                        if (n.length > 0) return {
                            files: n
                        };
                        if (r.length > 0) {
                            if (1 === r.length && "image/png" === r[0].type && null != i) {
                                var p, m = r[0],
                                    y = null !== (p = function(e) {
                                        var t, n = new DOMParser().parseFromString(e, "text/html").querySelector("img");
                                        if (null != n) {
                                            try {
                                                var r = c.parse(n.src).pathname;
                                                null != r && r.length > 0 && (t = l().basename(r).split(".")[0])
                                            } catch (e) {}
                                            if (null != t && t.length > 0) return "".concat(t, ".png")
                                        }
                                    }(e.getData(i.type))) && void 0 !== p ? p : m.name;
                                return {
                                    files: [(0, O.makeFile)(m, y, m.type)]
                                }
                            }
                            return {
                                files: r
                            }
                        }
                        if (null != o && null != t) {
                            var I = e.getData(o.type);
                            if (I.length > t) {
                                var h = new Blob([I], {
                                    type: "text/plain"
                                });
                                return {
                                    files: [(0, O.makeFile)(h, "message.txt")],
                                    convertedStringToFile: !0
                                }
                            }
                        }
                        return {
                            files: []
                        }
                    }(e.clipboardData, f.uploadLongMessages ? null != a ? a : s : null).files;
                    return B("onPaste", ((function(e) {
                        if (Array.isArray(e)) return P(e)
                    })(n = e.clipboardData.items) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(n) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return P(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t)
                        }
                    }(n) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()).map(function(e) {
                        if ("file" !== e.kind) return {
                            kind: e.kind,
                            type: e.type
                        };
                        var t = e.getAsFile();
                        return {
                            kind: e.kind,
                            type: e.type,
                            name: null == t ? void 0 : t.name,
                            path: null == t ? void 0 : t.path
                        }
                    })), 0 !== d.length && (e.preventDefault(), e.stopPropagation(), t.saveCurrentText(), ! function(e, t) {
                        var n, r, i = m.default.getActiveCommand(o.id);
                        if (null == i) return u(e, o, f.drafts.type, {
                            requireConfirm: !0,
                            showLargeMessageDialog: void 0
                        });
                        var a = null !== (n = f.drafts.commandType) && void 0 !== n ? n : f.drafts.type,
                            s = null,
                            l = m.default.getActiveOption(o.id);
                        null != (s = (null == l ? void 0 : l.type) === E.ApplicationCommandOptionType.ATTACHMENT ? l : null === (r = i.options) || void 0 === r ? void 0 : r.find(function(e) {
                            if (e.type === E.ApplicationCommandOptionType.ATTACHMENT) return null == I.default.getUpload(o.id, e.name, a)
                        })) && _.default.setFile({
                            channelId: o.id,
                            id: s.name,
                            draftType: a,
                            file: {
                                id: s.name,
                                platform: p.UploadPlatform.WEB,
                                file: e[0]
                            }
                        })
                    }(d), t.focus(), !0)
                }), t._unsubscribe = v.channelEditorPopupStore.subscribe(function(e) {
                    requestAnimationFrame(function() {
                        t.setState({
                            popup: e
                        })
                    })
                }), t.state = {
                    focused: !1,
                    submitting: !1,
                    popup: v.channelEditorPopupStore.getState()
                }, t
            }
            return o = F, a = [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.props.focused && requestAnimationFrame(function() {
                        return e.focus()
                    }), document.addEventListener("selectionchange", this.handleSelectionChange), window.addEventListener("beforeunload", this.handleBeforeUnload)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    if (this.fixFocus(e), this.props.useSlate !== e.useSlate) {
                        var t, n, r;
                        r = this.props.useSlate ? this.props.textValue : (0, b.toTextValue)(this.props.richValue, {
                            mode: "plain"
                        }), null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, null, r, (0, S.toRichValue)(r))
                    } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e;
                    this.saveCurrentText(), null === (e = this._unsubscribe) || void 0 === e || e.call(this), window.removeEventListener("beforeunload", this.handleBeforeUnload), document.removeEventListener("selectionchange", this.handleSelectionChange), this._focusBlurQueue = null, this._unsubscribe = null
                }
            }, {
                key: "blur",
                value: function() {
                    var e = this.ref.current;
                    null != e && e.blur()
                }
            }, {
                key: "submit",
                value: function(e) {
                    var t;
                    null === (t = this.ref.current) || void 0 === t || t.submit(e)
                }
            }, {
                key: "insertEmoji",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = this.props.textValue,
                        o = this.ref.current;
                    null != e && null != o && (n && !r.endsWith(" ") && o.insertText(" ", void 0, !1), o.insertEmoji(e, t), t && this.focus())
                }
            }, {
                key: "insertGIF",
                value: function(e) {
                    var t = this.props.textValue,
                        n = this.ref.current;
                    null != e && null != n && (!t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText(e.url))
                }
            }, {
                key: "insertSound",
                value: function(e) {
                    var t = this.props.textValue,
                        n = this.ref.current;
                    null != e && null != n && (!t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText("<sound:" + e.soundId + ">"))
                }
            }, {
                key: "handleOuterClick",
                value: function() {
                    this.focus()
                }
            }, {
                key: "clearValue",
                value: function() {
                    var e = this.props,
                        t = e.channel,
                        n = e.type;
                    this.setState({
                        focused: !0,
                        submitting: !1
                    }), d.default.saveDraft(t.id, "", n.drafts.type)
                }
            }, {
                key: "getCurrentWord",
                value: function() {
                    var e, t = this.ref.current;
                    return null !== (e = null == t ? void 0 : t.getCurrentWord()) && void 0 !== e ? e : {
                        word: null,
                        isAtStart: !1
                    }
                }
            }, {
                key: "insertAutocomplete",
                value: function(e, t, n) {
                    var r = this.ref.current;
                    return null == r ? void 0 : r.insertAutocomplete(e, t, n)
                }
            }, {
                key: "getCurrentCommandOption",
                value: function() {
                    var e, t, n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOption) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null
                }
            }, {
                key: "getCurrentCommandOptionValue",
                value: function() {
                    var e, t, n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOptionValue) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : []
                }
            }, {
                key: "getCommandOptionValues",
                value: function() {
                    var e, t, n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getCommandOptionValues) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : {}
                }
            }, {
                key: "getFirstText",
                value: function() {
                    var e, t = this.ref.current;
                    return null !== (e = null == t ? void 0 : t.getFirstText()) && void 0 !== e ? e : null
                }
            }, {
                key: "getSlateEditor",
                value: function() {
                    var e, t, n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getSlateEditor) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null
                }
            }, {
                key: "fixFocus",
                value: function(e) {
                    e.focused && !this.props.focused ? this.blur() : !e.focused && this.props.focused && this.focus()
                }
            }, {
                key: "appendText",
                value: function(e, t) {
                    var n, r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    null === (n = this.ref.current) || void 0 === n || n.insertText(e, t, r)
                }
            }, {
                key: "getPlaceholder",
                value: function() {
                    var e = this.props,
                        t = e.disabled,
                        n = e.placeholder,
                        r = e.isPreviewing;
                    return t && !r ? R.default.Messages.NO_SEND_MESSAGES_PERMISSION_PLACEHOLDER : n
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n, o, a, u, s, l, c = this.props,
                        d = c.textValue,
                        _ = c.richValue,
                        E = c.disabled,
                        p = c.onChange,
                        m = c.onKeyDown,
                        y = c.onResize,
                        I = c.onSubmit,
                        O = c.channel,
                        v = c.type,
                        b = c.fontSize,
                        R = c.useSlate,
                        P = c.spellcheckEnabled,
                        D = c.useNewSlashCommands,
                        L = c.canOnlyUseTextCommands,
                        U = c.className,
                        G = c.id,
                        B = c.required,
                        F = c.maxCharacterCount,
                        V = c.allowNewLines,
                        H = c["aria-describedby"],
                        x = c["aria-labelledby"],
                        Y = c.accessibilityLabel,
                        W = this.state,
                        K = W.submitting,
                        z = W.popup,
                        X = {
                            channel: O,
                            className: i()(U, C.textArea, (M(s = {}, C.textAreaSlate, R), M(s, C.textAreaDisabled, E || K), s)),
                            id: G,
                            placeholder: this.getPlaceholder(),
                            required: B,
                            accessibilityLabel: Y,
                            disabled: E || !1,
                            submitting: K,
                            isEdit: v === T.ChatInputTypes.EDIT,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur,
                            onPaste: this.handlePaste,
                            onTab: this.handleTab,
                            onEnter: this.handleEnter,
                            moveSelection: this.handleMoveSelection,
                            maybeShowAutocomplete: this.maybeShowAutocomplete,
                            hideAutocomplete: this.hideAutocomplete,
                            allowNewLines: V,
                            onChange: p,
                            onResize: y,
                            onKeyDown: m,
                            onSubmit: I,
                            textAreaPaddingClassName: i()(j[b], (M(l = {}, C.textAreaWithoutAttachmentButton, v !== T.ChatInputTypes.NORMAL && v !== T.ChatInputTypes.OVERLAY && v !== T.ChatInputTypes.THREAD_CREATION && v !== T.ChatInputTypes.SIDEBAR), M(l, C.textAreaForPostCreation, v === T.ChatInputTypes.CREATE_FORUM_POST), M(l, C.textAreaCustomGift, v === T.ChatInputTypes.CUSTOM_GIFT), l)),
                            spellcheckEnabled: P,
                            useNewSlashCommands: D,
                            disableAutoFocus: f.isMobile || null !== (n = v.disableAutoFocus) && void 0 !== n && n,
                            disableEnterToSubmit: null !== (o = null === (e = v.submit) || void 0 === e ? void 0 : e.disableEnterToSubmit) && void 0 !== o && o,
                            "aria-controls": null !== (a = z.id) && void 0 !== a ? a : void 0,
                            "aria-haspopup": "listbox",
                            "aria-expanded": null !== z.id || void 0,
                            "aria-activedescendant": null !== (u = z.activeDescendant) && void 0 !== u ? u : void 0,
                            "aria-invalid": d.length > F,
                            "aria-describedby": H,
                            "aria-labelledby": x,
                            "aria-autocomplete": "list"
                        },
                        q = R ? r.createElement(A.default, k(w({
                            ref: this.ref
                        }, X), {
                            type: v,
                            value: E ? (0, S.toRichValue)("") : _,
                            canUseCommands: null === (t = v.commands) || void 0 === t ? void 0 : t.enabled,
                            canOnlyUseTextCommands: L
                        })) : r.createElement(g.default, k(w({
                            ref: this.ref
                        }, X), {
                            value: E ? "" : d
                        }));
                    return r.createElement(r.Fragment, null, r.createElement(h.ComponentAction, {
                        event: N.ComponentActions.INSERT_TEXT,
                        handler: this.handleInsertText
                    }), r.createElement(h.ComponentAction, {
                        event: N.ComponentActions.CLEAR_TEXT,
                        handler: this.handleClearText
                    }), q)
                }
            }], L(o.prototype, a), s && L(o, s), F
        }(r.Component)
}