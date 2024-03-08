function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("222007"), n("424973");
    var i, l = n("37983"),
        a = n("884691"),
        s = n("414456"),
        r = n.n(s),
        o = n("917351"),
        u = n.n(o),
        d = n("87682"),
        c = n.n(d),
        f = n("746379"),
        p = n.n(f),
        m = n("394846"),
        h = n("295426"),
        x = n("81594"),
        E = n("798609"),
        y = n("966724"),
        g = n("383018"),
        S = n("605250"),
        C = n("585722"),
        I = n("378765"),
        T = n("254490"),
        _ = n("850391"),
        v = n("149022"),
        N = n("296141"),
        A = n("606013"),
        O = n("32647"),
        k = n("970153"),
        M = n("49111"),
        R = n("782340"),
        L = n("350583");
    new S.default("ChannelEditor.tsx");
    let b = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        },
        P = {
            12: L.fontSize12Padding,
            14: L.fontSize14Padding,
            15: L.fontSize15Padding,
            16: L.fontSize16Padding,
            18: L.fontSize18Padding,
            20: L.fontSize20Padding,
            24: L.fontSize24Padding
        };
    i = class extends a.Component {
        componentDidMount() {
            this.props.focused && requestAnimationFrame(() => this.focus()), document.addEventListener("selectionchange", this.handleSelectionChange), window.addEventListener("beforeunload", this.handleBeforeUnload)
        }
        componentDidUpdate(e) {
            if (this.fixFocus(e), this.props.useSlate !== e.useSlate) {
                var t, n;
                let e;
                e = this.props.useSlate ? this.props.textValue : (0, k.toTextValue)(this.props.richValue, {
                    mode: "plain"
                }), null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, null, e, (0, v.toRichValue)(e))
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
                    textValue: i
                } = this.props,
                l = this.ref.current;
            null != e && null != l && (n && !i.endsWith(" ") && l.insertText(" ", void 0, !1), l.insertEmoji(e, t), t && this.focus())
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
            let i = this.ref.current;
            return null == i ? void 0 : i.insertAutocomplete(e, t, n)
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
            let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            null === (n = this.ref.current) || void 0 === n || n.insertText(e, t, i)
        }
        getPlaceholder() {
            let {
                disabled: e,
                placeholder: t,
                isPreviewing: n
            } = this.props;
            return e && !n ? R.default.Messages.NO_SEND_MESSAGES_PERMISSION_PLACEHOLDER : t
        }
        render() {
            var e, t, n, i, a, s;
            let {
                textValue: o,
                richValue: u,
                disabled: d,
                onChange: c,
                onKeyDown: f,
                onResize: p,
                onSubmit: h,
                channel: x,
                type: E,
                fontSize: y,
                useSlate: g,
                spellcheckEnabled: S,
                useNewSlashCommands: C,
                canOnlyUseTextCommands: T,
                className: N,
                id: k,
                required: R,
                maxCharacterCount: b,
                allowNewLines: j,
                "aria-describedby": U,
                "aria-labelledby": D,
                accessibilityLabel: w
            } = this.props, {
                submitting: F,
                popup: B
            } = this.state, G = {
                channel: x,
                className: r(N, L.textArea, {
                    [L.textAreaSlate]: g,
                    [L.textAreaDisabled]: d || F
                }),
                id: k,
                placeholder: this.getPlaceholder(),
                required: R,
                accessibilityLabel: w,
                disabled: d || !1,
                submitting: F,
                isEdit: E === _.ChatInputTypes.EDIT,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onPaste: this.handlePaste,
                onTab: this.handleTab,
                onEnter: this.handleEnter,
                moveSelection: this.handleMoveSelection,
                maybeShowAutocomplete: this.maybeShowAutocomplete,
                hideAutocomplete: this.hideAutocomplete,
                allowNewLines: j,
                onChange: c,
                onResize: p,
                onKeyDown: f,
                onSubmit: h,
                textAreaPaddingClassName: r(P[y], {
                    [L.textAreaWithoutAttachmentButton]: E !== _.ChatInputTypes.NORMAL && E !== _.ChatInputTypes.OVERLAY && E !== _.ChatInputTypes.THREAD_CREATION && E !== _.ChatInputTypes.SIDEBAR,
                    [L.textAreaForPostCreation]: E === _.ChatInputTypes.CREATE_FORUM_POST,
                    [L.textAreaCustomGift]: E === _.ChatInputTypes.CUSTOM_GIFT
                }),
                spellcheckEnabled: S,
                useNewSlashCommands: C,
                disableAutoFocus: m.isMobile || null !== (n = E.disableAutoFocus) && void 0 !== n && n,
                disableEnterToSubmit: null !== (i = null === (e = E.submit) || void 0 === e ? void 0 : e.disableEnterToSubmit) && void 0 !== i && i,
                "aria-controls": null !== (a = B.id) && void 0 !== a ? a : void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== B.id || void 0,
                "aria-activedescendant": null !== (s = B.activeDescendant) && void 0 !== s ? s : void 0,
                "aria-invalid": o.length > b,
                "aria-describedby": U,
                "aria-labelledby": D,
                "aria-autocomplete": "list"
            }, H = g ? (0, l.jsx)(O.default, {
                ref: this.ref,
                ...G,
                type: E,
                value: d ? (0, v.toRichValue)("") : u,
                canUseCommands: null === (t = E.commands) || void 0 === t ? void 0 : t.enabled,
                canOnlyUseTextCommands: T
            }) : (0, l.jsx)(A.default, {
                ref: this.ref,
                ...G,
                value: d ? "" : o
            });
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(I.ComponentAction, {
                    event: M.ComponentActions.INSERT_TEXT,
                    handler: this.handleInsertText
                }), (0, l.jsx)(I.ComponentAction, {
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
                        channel: i
                    } = t.props;
                n.drafts.autoSave && (e && t.saveCurrentTextThrottled.cancel(), t.handleSaveCurrentText(i.id))
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
                null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, null, "", (0, v.toRichValue)(""))
            }, this.handleInsertText = e => {
                let {
                    plainText: t,
                    rawText: n,
                    addSpace: i = !1
                } = e;
                !this.props.disabled && (this.appendText(t, n, i), this.focus())
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
                    uploadPromptCharacterCount: i,
                    promptToUpload: l,
                    maxCharacterCount: a,
                    type: s
                } = this.props;
                if (null == l || !t.isPrivate() && !n || t.isPrivate() && t.isManaged()) return !1;
                let {
                    files: r
                } = function(e, t) {
                    let n = [],
                        i = [],
                        l = null,
                        a = null;
                    for (let t of e.items)
                        if ("file" === t.kind) {
                            let e = t.getAsFile();
                            if (null == e) continue;
                            null != e.path && e.path.length > 0 ? n.push(e) : i.push(e)
                        } else "string" === t.kind && ("text/plain" === t.type && null == l ? l = t : "text/html" === t.type && null == a && (a = t));
                    if (n.length > 0) return {
                        files: n
                    };
                    if (i.length > 0) {
                        if (1 === i.length && "image/png" === i[0].type && null != a) {
                            var s;
                            let t = i[0],
                                n = e.getData(a.type),
                                l = null !== (s = function(e) {
                                    let t = new DOMParser,
                                        n = t.parseFromString(e, "text/html"),
                                        i = n.querySelector("img");
                                    if (null != i) {
                                        let e;
                                        try {
                                            let {
                                                pathname: t
                                            } = p.parse(i.src);
                                            null != t && t.length > 0 && (e = c.basename(t).split(".")[0])
                                        } catch (e) {}
                                        if (null != e && e.length > 0) return "".concat(e, ".png")
                                    }
                                }(n)) && void 0 !== s ? s : t.name;
                            return {
                                files: [(0, T.makeFile)(t, l, t.type)]
                            }
                        }
                        return {
                            files: i
                        }
                    }
                    if (null != l && null != t) {
                        let n = e.getData(l.type);
                        if (n.length > t) {
                            let e = new Blob([n], {
                                type: "text/plain"
                            });
                            return {
                                files: [(0, T.makeFile)(e, "message.txt")],
                                convertedStringToFile: !0
                            }
                        }
                    }
                    return {
                        files: []
                    }
                }(e.clipboardData, s.uploadLongMessages ? null != i ? i : a : null);
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
                    var i, a;
                    let r = g.default.getActiveCommand(t.id);
                    if (null == r) return l(e, t, s.drafts.type, {
                        requireConfirm: !0,
                        showLargeMessageDialog: void 0
                    });
                    let o = null !== (i = s.drafts.commandType) && void 0 !== i ? i : s.drafts.type,
                        u = null,
                        d = g.default.getActiveOption(t.id);
                    null != (u = (null == d ? void 0 : d.type) === E.ApplicationCommandOptionType.ATTACHMENT ? d : null === (a = r.options) || void 0 === a ? void 0 : a.find(e => {
                        if (e.type === E.ApplicationCommandOptionType.ATTACHMENT) return null == C.default.getUpload(t.id, e.name, o)
                    })) && x.default.setFile({
                        channelId: t.id,
                        id: u.name,
                        draftType: o,
                        file: {
                            id: u.name,
                            platform: y.UploadPlatform.WEB,
                            file: e[0]
                        }
                    })
                })(r), this.focus(), !0)
            }, this._unsubscribe = N.channelEditorPopupStore.subscribe(e => {
                requestAnimationFrame(() => {
                    this.setState({
                        popup: e
                    })
                })
            }), this.state = {
                focused: !1,
                submitting: !1,
                popup: N.channelEditorPopupStore.getState()
            }
        }
    }
}