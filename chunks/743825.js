function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("222007"), n("424973");
    var l, i = n("37983"),
        a = n("884691"),
        s = n("414456"),
        r = n.n(s),
        o = n("917351"),
        u = n.n(o),
        d = n("87682"),
        c = n.n(d),
        f = n("746379"),
        m = n.n(f),
        p = n("394846"),
        h = n("295426"),
        E = n("81594"),
        g = n("798609"),
        S = n("966724"),
        C = n("383018"),
        T = n("605250"),
        v = n("585722"),
        I = n("378765"),
        _ = n("254490"),
        N = n("850391"),
        A = n("149022"),
        x = n("296141"),
        y = n("606013"),
        O = n("32647"),
        R = n("970153"),
        M = n("49111"),
        L = n("782340"),
        P = n("350583");
    new T.default("ChannelEditor.tsx");
    let b = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        },
        j = {
            12: P.fontSize12Padding,
            14: P.fontSize14Padding,
            15: P.fontSize15Padding,
            16: P.fontSize16Padding,
            18: P.fontSize18Padding,
            20: P.fontSize20Padding,
            24: P.fontSize24Padding
        };
    l = class extends a.Component {
        componentDidMount() {
            this.props.focused && requestAnimationFrame(() => this.focus()), document.addEventListener("selectionchange", this.handleSelectionChange), window.addEventListener("beforeunload", this.handleBeforeUnload)
        }
        componentDidUpdate(e) {
            if (this.fixFocus(e), this.props.useSlate !== e.useSlate) {
                var t, n;
                let e;
                e = this.props.useSlate ? this.props.textValue : (0, R.toTextValue)(this.props.richValue, {
                    mode: "plain"
                }), null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, null, e, (0, A.toRichValue)(e))
            } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled()
        }
        componentWillUnmount() {
            var e;
            this.saveCurrentText(), null === (e = this._unsubscribe) || void 0 === e || e.call(this), window.removeEventListener("beforeunload", this.handleBeforeUnload), document.removeEventListener("selectionchange", this.handleSelectionChange), this._focusBlurQueue = null, this._unsubscribe = null
        }
        blur() {
            let e = this.ref.current;
            null != e && e.blur()
        }
        submit(e) {
            var t;
            null === (t = this.ref.current) || void 0 === t || t.submit(e)
        }
        insertEmoji(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                {
                    textValue: l
                } = this.props,
                i = this.ref.current;
            null != e && null != i && (n && !l.endsWith(" ") && i.insertText(" ", void 0, !1), i.insertEmoji(e, t), t && this.focus())
        }
        insertGIF(e) {
            let {
                textValue: t
            } = this.props, n = this.ref.current;
            null != e && null != n && (!t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText(e.url))
        }
        insertSound(e) {
            let {
                textValue: t
            } = this.props, n = this.ref.current;
            null != e && null != n && (!t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText("<sound:" + e.soundId + ">"))
        }
        handleOuterClick() {
            this.focus()
        }
        clearValue() {
            let {
                channel: e,
                type: t
            } = this.props;
            this.setState({
                focused: !0,
                submitting: !1
            }), h.default.saveDraft(e.id, "", t.drafts.type)
        }
        getCurrentWord() {
            var e;
            let t = this.ref.current;
            return null !== (e = null == t ? void 0 : t.getCurrentWord()) && void 0 !== e ? e : {
                word: null,
                isAtStart: !1
            }
        }
        insertAutocomplete(e, t, n) {
            let l = this.ref.current;
            return null == l ? void 0 : l.insertAutocomplete(e, t, n)
        }
        getCurrentCommandOption() {
            var e, t;
            let n = this.ref.current;
            return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOption) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null
        }
        getCurrentCommandOptionValue() {
            var e, t;
            let n = this.ref.current;
            return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOptionValue) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : []
        }
        getCommandOptionValues() {
            var e, t;
            let n = this.ref.current;
            return null !== (t = null == n ? void 0 : null === (e = n.getCommandOptionValues) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : {}
        }
        getFirstText() {
            var e;
            let t = this.ref.current;
            return null !== (e = null == t ? void 0 : t.getFirstText()) && void 0 !== e ? e : null
        }
        getSlateEditor() {
            var e, t;
            let n = this.ref.current;
            return null !== (t = null == n ? void 0 : null === (e = n.getSlateEditor) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null
        }
        fixFocus(e) {
            e.focused && !this.props.focused ? this.blur() : !e.focused && this.props.focused && this.focus()
        }
        appendText(e, t) {
            var n;
            let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            null === (n = this.ref.current) || void 0 === n || n.insertText(e, t, l)
        }
        getPlaceholder() {
            let {
                disabled: e,
                placeholder: t,
                isPreviewing: n
            } = this.props;
            return e && !n ? L.default.Messages.NO_SEND_MESSAGES_PERMISSION_PLACEHOLDER : t
        }
        render() {
            var e, t, n, l, a, s;
            let {
                textValue: o,
                richValue: u,
                disabled: d,
                onChange: c,
                onKeyDown: f,
                onResize: m,
                onSubmit: h,
                channel: E,
                type: g,
                fontSize: S,
                useSlate: C,
                spellcheckEnabled: T,
                useNewSlashCommands: v,
                canOnlyUseTextCommands: _,
                className: x,
                id: R,
                required: L,
                maxCharacterCount: b,
                allowNewLines: U,
                "aria-describedby": D,
                "aria-labelledby": k,
                accessibilityLabel: w
            } = this.props, {
                submitting: F,
                popup: G
            } = this.state, B = {
                channel: E,
                className: r(x, P.textArea, {
                    [P.textAreaSlate]: C,
                    [P.textAreaDisabled]: d || F
                }),
                id: R,
                placeholder: this.getPlaceholder(),
                required: L,
                accessibilityLabel: w,
                disabled: d || !1,
                submitting: F,
                isEdit: g === N.ChatInputTypes.EDIT,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onPaste: this.handlePaste,
                onTab: this.handleTab,
                onEnter: this.handleEnter,
                moveSelection: this.handleMoveSelection,
                maybeShowAutocomplete: this.maybeShowAutocomplete,
                hideAutocomplete: this.hideAutocomplete,
                allowNewLines: U,
                onChange: c,
                onResize: m,
                onKeyDown: f,
                onSubmit: h,
                textAreaPaddingClassName: r(j[S], {
                    [P.textAreaWithoutAttachmentButton]: g !== N.ChatInputTypes.NORMAL && g !== N.ChatInputTypes.OVERLAY && g !== N.ChatInputTypes.THREAD_CREATION && g !== N.ChatInputTypes.SIDEBAR,
                    [P.textAreaForPostCreation]: g === N.ChatInputTypes.CREATE_FORUM_POST,
                    [P.textAreaCustomGift]: g === N.ChatInputTypes.CUSTOM_GIFT
                }),
                spellcheckEnabled: T,
                useNewSlashCommands: v,
                disableAutoFocus: p.isMobile || null !== (n = g.disableAutoFocus) && void 0 !== n && n,
                disableEnterToSubmit: null !== (l = null === (e = g.submit) || void 0 === e ? void 0 : e.disableEnterToSubmit) && void 0 !== l && l,
                "aria-controls": null !== (a = G.id) && void 0 !== a ? a : void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== G.id || void 0,
                "aria-activedescendant": null !== (s = G.activeDescendant) && void 0 !== s ? s : void 0,
                "aria-invalid": o.length > b,
                "aria-describedby": D,
                "aria-labelledby": k,
                "aria-autocomplete": "list"
            }, H = C ? (0, i.jsx)(O.default, {
                ref: this.ref,
                ...B,
                type: g,
                value: d ? (0, A.toRichValue)("") : u,
                canUseCommands: null === (t = g.commands) || void 0 === t ? void 0 : t.enabled,
                canOnlyUseTextCommands: _
            }) : (0, i.jsx)(y.default, {
                ref: this.ref,
                ...B,
                value: d ? "" : o
            });
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(I.ComponentAction, {
                    event: M.ComponentActions.INSERT_TEXT,
                    handler: this.handleInsertText
                }), (0, i.jsx)(I.ComponentAction, {
                    event: M.ComponentActions.CLEAR_TEXT,
                    handler: this.handleClearText
                }), H]
            })
        }
        constructor(e) {
            var t;
            super(e), t = this, this.ref = a.createRef(), this._focusBlurQueue = Promise.resolve(), this.handleSelectionChange = () => {
                if (this.props.focused) {
                    var e, t, n;
                    this.props.onSelectionChanged(null === (t = (n = document).getSelection) || void 0 === t ? void 0 : null === (e = t.call(n)) || void 0 === e ? void 0 : e.toString())
                }
            }, this.focus = () => {
                var e;
                null === (e = this._focusBlurQueue) || void 0 === e || e.then(() => {
                    this.setState({
                        focused: !0
                    }, () => {
                        let e = this.ref.current;
                        null != e && e.focus()
                    })
                })
            }, this.saveCurrentText = function() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    {
                        type: n,
                        channel: l
                    } = t.props;
                n.drafts.autoSave && (e && t.saveCurrentTextThrottled.cancel(), t.handleSaveCurrentText(l.id))
            }, this.handleBeforeUnload = () => this.saveCurrentText(), this.saveCurrentTextThrottled = u.throttle(this.saveCurrentText.bind(this, !1), 500), this.handleEnter = e => {
                var t, n;
                return null === (t = (n = this.props).onEnter) || void 0 === t ? void 0 : t.call(n, e)
            }, this.handleTab = () => {
                var e, t;
                return null === (e = (t = this.props).onTab) || void 0 === e ? void 0 : e.call(t)
            }, this.handleMoveSelection = e => {
                var t, n;
                return null === (t = (n = this.props).onMoveSelection) || void 0 === t ? void 0 : t.call(n, e)
            }, this.maybeShowAutocomplete = () => {
                var e, t;
                return null === (e = (t = this.props).onMaybeShowAutocomplete) || void 0 === e ? void 0 : e.call(t)
            }, this.hideAutocomplete = () => {
                var e, t;
                return null === (e = (t = this.props).onHideAutocomplete) || void 0 === e ? void 0 : e.call(t)
            }, this.handleSaveCurrentText = e => {
                h.default.saveDraft(e, this.props.textValue, this.props.type.drafts.type)
            }, this.handleClearText = () => {
                var e, t;
                null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, null, "", (0, A.toRichValue)(""))
            }, this.handleInsertText = e => {
                let {
                    plainText: t,
                    rawText: n,
                    addSpace: l = !1
                } = e;
                !this.props.disabled && (this.appendText(t, n, l), this.focus())
            }, this.handleFocus = e => {
                let {
                    onFocus: t
                } = this.props, {
                    focused: n
                } = this.state;
                null == t || t(e), !n && this.setState({
                    focused: !0
                })
            }, this.handleBlur = e => {
                let {
                    onBlur: t
                } = this.props, {
                    focused: n
                } = this.state;
                null == t || t(e), n && this.setState({
                    focused: !1
                })
            }, this.handlePaste = e => {
                let {
                    channel: t,
                    canPasteFiles: n,
                    uploadPromptCharacterCount: l,
                    promptToUpload: i,
                    maxCharacterCount: a,
                    type: s
                } = this.props;
                if (null == i || !t.isPrivate() && !n || t.isPrivate() && t.isManaged()) return !1;
                let {
                    files: r
                } = function(e, t) {
                    let n = [],
                        l = [],
                        i = null,
                        a = null;
                    for (let t of e.items)
                        if ("file" === t.kind) {
                            let e = t.getAsFile();
                            if (null == e) continue;
                            null != e.path && e.path.length > 0 ? n.push(e) : l.push(e)
                        } else "string" === t.kind && ("text/plain" === t.type && null == i ? i = t : "text/html" === t.type && null == a && (a = t));
                    if (n.length > 0) return {
                        files: n
                    };
                    if (l.length > 0) {
                        if (1 === l.length && "image/png" === l[0].type && null != a) {
                            var s;
                            let t = l[0],
                                n = e.getData(a.type),
                                i = null !== (s = function(e) {
                                    let t = new DOMParser,
                                        n = t.parseFromString(e, "text/html"),
                                        l = n.querySelector("img");
                                    if (null != l) {
                                        let e;
                                        try {
                                            let {
                                                pathname: t
                                            } = m.parse(l.src);
                                            null != t && t.length > 0 && (e = c.basename(t).split(".")[0])
                                        } catch (e) {}
                                        if (null != e && e.length > 0) return "".concat(e, ".png")
                                    }
                                }(n)) && void 0 !== s ? s : t.name;
                            return {
                                files: [(0, _.makeFile)(t, i, t.type)]
                            }
                        }
                        return {
                            files: l
                        }
                    }
                    if (null != i && null != t) {
                        let n = e.getData(i.type);
                        if (n.length > t) {
                            let e = new Blob([n], {
                                type: "text/plain"
                            });
                            return {
                                files: [(0, _.makeFile)(e, "message.txt")],
                                convertedStringToFile: !0
                            }
                        }
                    }
                    return {
                        files: []
                    }
                }(e.clipboardData, s.uploadLongMessages ? null != l ? l : a : null);
                return b("onPaste", [...e.clipboardData.items].map(e => {
                    if ("file" !== e.kind) return {
                        kind: e.kind,
                        type: e.type
                    };
                    {
                        let t = e.getAsFile();
                        return {
                            kind: e.kind,
                            type: e.type,
                            name: null == t ? void 0 : t.name,
                            path: null == t ? void 0 : t.path
                        }
                    }
                })), 0 !== r.length && (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), ((e, n) => {
                    var l, a;
                    let r = C.default.getActiveCommand(t.id);
                    if (null == r) return i(e, t, s.drafts.type, {
                        requireConfirm: !0,
                        showLargeMessageDialog: void 0
                    });
                    let o = null !== (l = s.drafts.commandType) && void 0 !== l ? l : s.drafts.type,
                        u = null,
                        d = C.default.getActiveOption(t.id);
                    null != (u = (null == d ? void 0 : d.type) === g.ApplicationCommandOptionType.ATTACHMENT ? d : null === (a = r.options) || void 0 === a ? void 0 : a.find(e => {
                        if (e.type === g.ApplicationCommandOptionType.ATTACHMENT) return null == v.default.getUpload(t.id, e.name, o)
                    })) && E.default.setFile({
                        channelId: t.id,
                        id: u.name,
                        draftType: o,
                        file: {
                            id: u.name,
                            platform: S.UploadPlatform.WEB,
                            file: e[0]
                        }
                    })
                })(r), this.focus(), !0)
            }, this._unsubscribe = x.channelEditorPopupStore.subscribe(e => {
                requestAnimationFrame(() => {
                    this.setState({
                        popup: e
                    })
                })
            }), this.state = {
                focused: !1,
                submitting: !1,
                popup: x.channelEditorPopupStore.getState()
            }
        }
    }
}