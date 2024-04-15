function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TextArea: function() {
            return O
        }
    }), n("653041");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("120356"),
        o = n.n(a),
        l = n("153832"),
        u = n("84735"),
        d = n("15127"),
        _ = n("766646"),
        c = n("993365"),
        E = n("179240"),
        I = n("689938"),
        T = n("989255"),
        f = n("717897"),
        S = n("633353");

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let h = (0, l.v4)(),
        m = (0, l.v4)(),
        N = (0, l.v4)();
    class O extends(i = s.Component) {
        getPaddingRight() {
            let {
                maxLength: e,
                showCharacterCountFullPadding: t
            } = this.props;
            if (null == e) return 10;
            let n = "".concat(e).length;
            return t && (n += "".concat(e, " / ").length), 7.23 * n + 10
        }
        getCharsLeftLength() {
            let {
                maxLength: e,
                value: t
            } = this.props;
            return null == e ? null : e - (null != t ? t.length : 0)
        }
        getIsOverflowing() {
            let e = this.getCharsLeftLength();
            return null != e && e < 0
        }
        getIsUnderflowing() {
            let {
                minLength: e,
                value: t
            } = this.props;
            return null != e && (null != t ? t.length : 0) < e
        }
        renderCharacterCount() {
            if (this.props.showCharacterCount) {
                var e;
                let {
                    value: t,
                    maxLength: n
                } = this.props;
                return (0, r.jsxs)("div", {
                    className: o()(T.maxLength, {
                        [T.errorOverflow]: this.hasError()
                    }),
                    "aria-hidden": "true",
                    children: [null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0, " ", null != n && "/ ".concat(n)]
                })
            }
            return null
        }
        renderMaxLength() {
            if (this.props.showCharacterCount || !1 === this.props.showRemainingCharacterCount) return null;
            let e = this.getCharsLeftLength();
            return null == e ? null : (0, r.jsx)("div", {
                className: o()(T.maxLength, {
                    [T.errorOverflow]: e < 0
                }),
                "aria-hidden": "true",
                children: e
            })
        }
        hasError() {
            return null != this.props.error || null != this.context.error || !1 !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || !1)
        }
        getErrorMessage() {
            let {
                error: e,
                maxLength: t,
                minLength: n
            } = this.props, i = this.getIsOverflowing() ? I.default.Messages.MAXIMUM_LENGTH_ERROR.format({
                maxLength: t
            }) : null, r = this.getIsUnderflowing() ? I.default.Messages.MINIMUM_LENGTH_ERROR.format({
                minLength: n
            }) : null;
            return null != e && e.length < 1 || null === e ? null : void 0 !== e ? e : !1 === this.state.dirty ? null : null != i ? i : r
        }
        renderErrorMessage() {
            let e = this.getErrorMessage();
            return null == e ? null : (0, r.jsx)(c.Text, {
                id: h,
                variant: "text-xs/normal",
                color: "text-danger",
                className: T.errorMessage,
                children: e
            })
        }
        render() {
            var e, t;
            let {
                disabled: n,
                value: i,
                placeholder: s,
                autoFocus: a,
                minLength: l,
                maxLength: d,
                allowOverflow: c,
                spellCheck: A,
                resizeable: h,
                className: O,
                id: p,
                rows: R,
                flex: C,
                autosize: g,
                required: L,
                onInvalid: D,
                inputRef: v
            } = this.props, M = g ? E.TextAreaAutosize : "textarea", y = this.hasError(), P = null !== (t = this.props["aria-labelledby"]) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId, U = this.getAriaDescribedBy();
            return (0, r.jsxs)("div", {
                className: o()(f.inputWrapper, {
                    [T.flex]: C
                }),
                children: [(0, r.jsxs)("div", {
                    className: o()(T.inputMaxLength, {
                        [T.flex]: C
                    }),
                    children: [(0, r.jsx)(u.FocusRing, {
                        children: (0, r.jsx)(M, {
                            type: "text",
                            className: o()(f.inputDefault, T.textArea, S.scrollbarDefault, O, {
                                [f.error]: y,
                                [f.disabled]: n,
                                [T.resizeable]: h
                            }),
                            "aria-labelledby": P,
                            "aria-describedby": U,
                            "aria-invalid": y,
                            style: {
                                paddingRight: this.getPaddingRight()
                            },
                            id: p,
                            disabled: n,
                            placeholder: s,
                            value: i,
                            autoFocus: a,
                            minLength: l,
                            maxLength: c ? void 0 : d,
                            spellCheck: A,
                            required: L,
                            onChange: this.onChange,
                            onBlur: this.onBlur,
                            onFocus: this.onFocus,
                            onKeyDown: this.onKeyDown,
                            onInvalid: D,
                            rows: R,
                            ref: v
                        })
                    }), null != l && (0, r.jsx)(_.HiddenVisually, {
                        id: m,
                        children: I.default.Messages.MINIMUM_LENGTH.format({
                            minLength: l
                        })
                    }), null != d && (0, r.jsx)(_.HiddenVisually, {
                        id: N,
                        children: I.default.Messages.MAXIMUM_LENGTH.format({
                            maxLength: d
                        })
                    }), this.renderCharacterCount(), this.renderMaxLength()]
                }), this.renderErrorMessage()]
            })
        }
        constructor(e) {
            var t;
            super(e), A(this, "getAriaDescribedBy", () => {
                var e;
                let {
                    maxLength: t,
                    minLength: n,
                    error: i
                } = this.props, r = [], s = null === (e = this.context) || void 0 === e ? void 0 : e.errorId;
                return null != s && r.push(s), null != i ? r.push(h) : (null != t && r.push(N), null != n && r.push(m)), r.length > 0 ? r.join(" ") : void 0
            }), A(this, "onChange", e => {
                let {
                    onChange: t,
                    name: n
                } = this.props;
                null == t || t(e.currentTarget.value, n), this.setState({
                    dirty: !0
                })
            }), A(this, "onFocus", e => {
                let {
                    onFocus: t,
                    name: n
                } = this.props;
                null == t || t(e, n)
            }), A(this, "onBlur", e => {
                let {
                    onBlur: t,
                    name: n
                } = this.props;
                null == t || t(e, n)
            }), A(this, "onKeyDown", e => {
                let {
                    onKeyDown: t
                } = this.props;
                null == t || t(e)
            }), this.state = {
                dirty: null !== (t = e.defaultDirty) && void 0 !== t && t
            }
        }
    }
    A(O, "contextType", d.FormContext), A(O, "defaultProps", {
        name: "",
        disabled: !1,
        placeholder: "",
        autoFocus: !1,
        resizeable: !1,
        flex: !1,
        autosize: !1,
        rows: 3,
        allowOverflow: !1
    })
}