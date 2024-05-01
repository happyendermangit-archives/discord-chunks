function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("757143");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("239091"),
        u = n("555573"),
        d = n("998698"),
        _ = n("459273"),
        c = n("358085"),
        E = n("62883"),
        I = n("752305"),
        T = n("981631");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let S = /(\t|\s)/;
    class h extends r.PureComponent {
        componentDidMount() {
            !this.props.disableAutoFocus && (Promise.resolve().then(() => {
                var e;
                let {
                    value: t
                } = this.props;
                null === (e = this._ref) || void 0 === e || e.setSelection(t.length, t.length)
            }), this.focus()), null != d.default.getActiveCommand(this.props.channel.id) && u.setActiveCommand({
                channelId: this.props.channel.id,
                command: null,
                section: null
            })
        }
        componentDidUpdate(e, t) {
            this.state.nextSelection !== t.nextSelection && null != this._ref && this._ref.setSelection(this.state.nextSelection, this.state.nextSelection)
        }
        getCurrentWord() {
            let e = this._ref;
            if (null == e) return {
                word: null,
                isAtStart: !1
            };
            let {
                value: t
            } = this.props;
            if (0 === t.trim().length) return {
                word: null,
                isAtStart: !1
            };
            let n = e.selectionStart,
                i = e.selectionEnd;
            for (; n > 0 && !S.test(t[n - 1]);) {
                ;
                n--
            }
            return {
                word: t.slice(n, i),
                isAtStart: 0 === n
            }
        }
        blur() {
            let {
                _ref: e
            } = this;
            null != e && e.blur()
        }
        submit(e) {
            return e.preventDefault(), this.props.onSubmit(this.props.value)
        }
        insertAutocomplete(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                {
                    word: i
                } = this.getCurrentWord();
            if (null == i) this.insertText(e, t, n);
            else {
                let t = this._ref;
                if (null == t) return;
                let r = t.value.slice(0, t.selectionStart - i.length),
                    s = t.value.slice(t.selectionEnd);
                this._insertText(e, r, s, n)
            }
        }
        insertText(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = this._ref;
            if (null == i) return;
            let r = i.value.slice(0, i.selectionStart),
                s = i.value.slice(i.selectionEnd);
            this._insertText(e, r, s, n)
        }
        _insertText(e, t, n, i) {
            if (null == this._ref) return;
            i && (e += " ");
            let r = t + e + n,
                {
                    onChange: s
                } = this.props;
            null == s || s(null, r, (0, I.toRichValue)(r));
            let a = t.length + e.length;
            this.setState({
                nextSelection: a
            }, () => {
                this.props.maybeShowAutocomplete()
            })
        }
        hasOpenCodeBlock() {
            let e = this._ref;
            if (null == e) return !1;
            let t = this.props.value.slice(0, e.selectionStart).match(/```/g);
            return null != t && t.length > 0 && t.length % 2 != 0
        }
        render() {
            let {
                value: e,
                disabled: t,
                placeholder: n,
                required: r,
                onResize: s,
                className: l,
                id: u,
                submitting: d,
                textAreaPaddingClassName: c,
                spellcheckEnabled: E,
                "aria-controls": I,
                "aria-expanded": f,
                "aria-activedescendant": S
            } = this.props;
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(_.ComponentAction, {
                    event: T.ComponentActions.GLOBAL_CLIPBOARD_PASTE,
                    handler: this.handleGlobalPaste
                }), (0, i.jsx)(o.TextAreaAutosize, {
                    ref: this.handleSetRef,
                    className: a()(l, c),
                    id: u,
                    rows: 1,
                    fontWidthEstimate: 6,
                    placeholder: n,
                    disabled: t || d,
                    required: r,
                    onChange: this.handleOnChange,
                    onResize: s,
                    onKeyPress: this.handleKeyPress,
                    onKeyDown: this.handleKeyDown,
                    onKeyUp: this.handleKeyUp,
                    onFocus: this.props.onFocus,
                    onBlur: this.props.onBlur,
                    onPaste: this.handlePaste,
                    onClick: this.handleClick,
                    onContextMenu: this.handleContextMenu,
                    value: t ? "" : e,
                    tabIndex: 0,
                    spellCheck: E,
                    "aria-controls": I,
                    "aria-expanded": f,
                    "aria-activedescendant": S,
                    "aria-haspopup": "listbox",
                    "aria-autocomplete": "list",
                    "aria-multiline": !0
                })]
            })
        }
        handleTabOrEnterDown(e) {
            e.which === T.KeyboardKeys.TAB && this.props.onTab() ? (e.preventDefault(), e.stopPropagation()) : e.which === T.KeyboardKeys.ENTER && this.props.onEnter(e) ? (e.preventDefault(), e.stopPropagation()) : e.which === T.KeyboardKeys.ESCAPE ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete()) : e.which === T.KeyboardKeys.TAB && this.hasOpenCodeBlock() && (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1))
        }
        insertEmoji(e, t) {
            this.insertText("".concat(":").concat(e.name).concat(":"), void 0, t)
        }
        getFirstText() {
            return this.props.value
        }
        constructor(...e) {
            super(...e), f(this, "_ref", void 0), f(this, "state", {
                nextSelection: -1
            }), f(this, "focus", () => {
                let {
                    _ref: e
                } = this;
                null != e && e.focus()
            }), f(this, "handleSetRef", e => {
                this._ref = e
            }), f(this, "handleKeyPress", e => {
                if (e.which === T.KeyboardKeys.ENTER) {
                    if (!e.shiftKey && !this.hasOpenCodeBlock() && (!this.props.disableEnterToSubmit || e.ctrlKey)) return e.preventDefault(), this.props.onSubmit(this.props.value)
                }
            }), f(this, "handleKeyDown", e => {
                switch (e.which) {
                    case T.KeyboardKeys.ARROW_DOWN:
                        this.props.moveSelection(1) && e.preventDefault();
                        break;
                    case T.KeyboardKeys.N:
                        e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
                        break;
                    case T.KeyboardKeys.ARROW_UP:
                        this.props.moveSelection(-1) && e.preventDefault();
                        break;
                    case T.KeyboardKeys.P:
                        e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
                        break;
                    case T.KeyboardKeys.TAB:
                    case T.KeyboardKeys.ENTER:
                        this.handleTabOrEnterDown(e)
                }
                let {
                    onKeyDown: t
                } = this.props;
                null == t || t(e)
            }), f(this, "handleKeyUp", e => {
                switch (e.which) {
                    case T.KeyboardKeys.ARROW_RIGHT:
                    case T.KeyboardKeys.ARROW_LEFT:
                    case T.KeyboardKeys.HOME:
                    case T.KeyboardKeys.END:
                        this.props.maybeShowAutocomplete()
                }
                let {
                    onKeyUp: t
                } = this.props;
                null == t || t(e)
            }), f(this, "handleGlobalPaste", e => {
                let {
                    event: t
                } = e;
                !this.handlePaste(t) && this.focus()
            }), f(this, "handlePaste", e => {
                let t = this.props.onPaste(e);
                return t && e.preventDefault(), t
            }), f(this, "handleClick", () => {
                this.props.maybeShowAutocomplete()
            }), f(this, "handleContextMenu", e => {
                c.isPlatformEmbedded && (0, l.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.e("99989").then(n.bind(n, "889662"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        isChannelTextArea: !0,
                        text: (0, E.getSelectionText)()
                    })
                }, {
                    align: "bottom",
                    enableSpellCheck: !0
                })
            }), f(this, "handleOnChange", e => {
                let {
                    onChange: t,
                    allowNewLines: n
                } = this.props, i = e.currentTarget.value, r = n ? i : i.replace("\n", "");
                null == t || t(e, r, (0, I.toRichValue)(r))
            })
        }
    }
    t.default = h
}