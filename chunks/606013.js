function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("222007"), n("781738");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("272030"),
        u = n("507217"),
        d = n("383018"),
        c = n("378765"),
        f = n("773336"),
        m = n("573055"),
        p = n("149022"),
        h = n("49111");
    let E = /(\t|\s)/;
    class g extends i.PureComponent {
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
                l = e.selectionEnd;
            for (; n > 0;) {
                let e = E.test(t[n - 1]);
                if (e) break;
                n--
            }
            return {
                word: t.slice(n, l),
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
                    word: l
                } = this.getCurrentWord();
            if (null == l) this.insertText(e, t, n);
            else {
                let t = this._ref;
                if (null == t) return;
                let i = t.value.slice(0, t.selectionStart - l.length),
                    a = t.value.slice(t.selectionEnd);
                this._insertText(e, i, a, n)
            }
        }
        insertText(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                l = this._ref;
            if (null == l) return;
            let i = l.value.slice(0, l.selectionStart),
                a = l.value.slice(l.selectionEnd);
            this._insertText(e, i, a, n)
        }
        _insertText(e, t, n, l) {
            let i = this._ref;
            if (null == i) return;
            l && (e += " ");
            let a = t + e + n,
                {
                    onChange: s
                } = this.props;
            null == s || s(null, a, (0, p.toRichValue)(a));
            let r = t.length + e.length;
            this.setState({
                nextSelection: r
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
                required: i,
                onResize: a,
                className: o,
                id: u,
                submitting: d,
                textAreaPaddingClassName: f,
                spellcheckEnabled: m,
                "aria-controls": p,
                "aria-expanded": E,
                "aria-activedescendant": g
            } = this.props;
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(c.ComponentAction, {
                    event: h.ComponentActions.GLOBAL_CLIPBOARD_PASTE,
                    handler: this.handleGlobalPaste
                }), (0, l.jsx)(r.TextAreaAutosize, {
                    ref: this.handleSetRef,
                    className: s(o, f),
                    id: u,
                    rows: 1,
                    fontWidthEstimate: 6,
                    placeholder: n,
                    disabled: t || d,
                    required: i,
                    onChange: this.handleOnChange,
                    onResize: a,
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
                    spellCheck: m,
                    "aria-controls": p,
                    "aria-expanded": E,
                    "aria-activedescendant": g,
                    "aria-haspopup": "listbox",
                    "aria-autocomplete": "list",
                    "aria-multiline": !0
                })]
            })
        }
        handleTabOrEnterDown(e) {
            e.which === h.KeyboardKeys.TAB && this.props.onTab() ? (e.preventDefault(), e.stopPropagation()) : e.which === h.KeyboardKeys.ENTER && this.props.onEnter(e) ? (e.preventDefault(), e.stopPropagation()) : e.which === h.KeyboardKeys.ESCAPE ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete()) : e.which === h.KeyboardKeys.TAB && this.hasOpenCodeBlock() && (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1))
        }
        insertEmoji(e, t) {
            this.insertText("".concat(":").concat(e.name).concat(":"), void 0, t)
        }
        getFirstText() {
            return this.props.value
        }
        constructor(...e) {
            super(...e), this.state = {
                nextSelection: -1
            }, this.focus = () => {
                let {
                    _ref: e
                } = this;
                null != e && e.focus()
            }, this.handleSetRef = e => {
                this._ref = e
            }, this.handleKeyPress = e => {
                if (e.which === h.KeyboardKeys.ENTER) {
                    if (!e.shiftKey && !this.hasOpenCodeBlock() && (!this.props.disableEnterToSubmit || e.ctrlKey)) return e.preventDefault(), this.props.onSubmit(this.props.value)
                }
            }, this.handleKeyDown = e => {
                switch (e.which) {
                    case h.KeyboardKeys.ARROW_DOWN:
                        this.props.moveSelection(1) && e.preventDefault();
                        break;
                    case h.KeyboardKeys.N:
                        e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
                        break;
                    case h.KeyboardKeys.ARROW_UP:
                        this.props.moveSelection(-1) && e.preventDefault();
                        break;
                    case h.KeyboardKeys.P:
                        e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
                        break;
                    case h.KeyboardKeys.TAB:
                    case h.KeyboardKeys.ENTER:
                        this.handleTabOrEnterDown(e)
                }
                let {
                    onKeyDown: t
                } = this.props;
                null == t || t(e)
            }, this.handleKeyUp = e => {
                switch (e.which) {
                    case h.KeyboardKeys.ARROW_RIGHT:
                    case h.KeyboardKeys.ARROW_LEFT:
                    case h.KeyboardKeys.HOME:
                    case h.KeyboardKeys.END:
                        this.props.maybeShowAutocomplete()
                }
                let {
                    onKeyUp: t
                } = this.props;
                null == t || t(e)
            }, this.handleGlobalPaste = e => {
                let {
                    event: t
                } = e, n = this.handlePaste(t);
                !n && this.focus()
            }, this.handlePaste = e => {
                let t = this.props.onPaste(e);
                return t && e.preventDefault(), t
            }, this.handleClick = () => {
                this.props.maybeShowAutocomplete()
            }, this.handleContextMenu = e => {
                f.isPlatformEmbedded && (0, o.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("604288").then(n.bind(n, "604288"));
                    return t => (0, l.jsx)(e, {
                        ...t,
                        isChannelTextArea: !0,
                        text: (0, m.getSelectionText)()
                    })
                }, {
                    align: "bottom",
                    enableSpellCheck: !0
                })
            }, this.handleOnChange = e => {
                let {
                    onChange: t,
                    allowNewLines: n
                } = this.props, l = e.currentTarget.value, i = n ? l : l.replace("\n", "");
                null == t || t(e, i, (0, p.toRichValue)(i))
            }
        }
    }
    var C = g
}