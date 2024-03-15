function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TextArea: function() {
            return v
        }
    }), n("424973");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("748820"),
        l = n("718776"),
        u = n("516826"),
        d = n("741662"),
        c = n("577776"),
        f = n("324584"),
        _ = n("782340"),
        E = n("430594"),
        h = n("182893"),
        g = n("356410");
    let m = (0, o.v4)(),
        p = (0, o.v4)(),
        S = (0, o.v4)();
    class v extends s.Component {
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
            if (null == e) return null;
            let n = null != t ? t.length : 0;
            return e - n
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
            if (null == e) return !1;
            let n = null != t ? t.length : 0;
            return n < e
        }
        renderCharacterCount() {
            if (this.props.showCharacterCount) {
                var e;
                let {
                    value: t,
                    maxLength: n
                } = this.props;
                return (0, i.jsxs)("div", {
                    className: a(E.maxLength, {
                        [E.errorOverflow]: this.hasError()
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
            return null == e ? null : (0, i.jsx)("div", {
                className: a(E.maxLength, {
                    [E.errorOverflow]: e < 0
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
            } = this.props, i = this.getIsOverflowing() ? _.default.Messages.MAXIMUM_LENGTH_ERROR.format({
                maxLength: t
            }) : null, s = this.getIsUnderflowing() ? _.default.Messages.MINIMUM_LENGTH_ERROR.format({
                minLength: n
            }) : null;
            return null != e && e.length < 1 || null === e ? null : void 0 !== e ? e : !1 === this.state.dirty ? null : null != i ? i : s
        }
        renderErrorMessage() {
            let e = this.getErrorMessage();
            return null == e ? null : (0, i.jsx)(c.Text, {
                id: m,
                variant: "text-xs/normal",
                color: "text-danger",
                className: E.errorMessage,
                children: e
            })
        }
        render() {
            var e, t;
            let {
                disabled: n,
                value: s,
                placeholder: r,
                autoFocus: o,
                minLength: u,
                maxLength: c,
                allowOverflow: m,
                spellCheck: v,
                resizeable: T,
                className: I,
                id: A,
                rows: C,
                flex: y,
                autosize: N,
                required: R,
                onInvalid: O,
                inputRef: D
            } = this.props, P = N ? f.TextAreaAutosize : "textarea", L = this.hasError(), M = null !== (t = this.props["aria-labelledby"]) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId, b = this.getAriaDescribedBy();
            return (0, i.jsxs)("div", {
                className: a(h.inputWrapper, {
                    [E.flex]: y
                }),
                children: [(0, i.jsxs)("div", {
                    className: a(E.inputMaxLength, {
                        [E.flex]: y
                    }),
                    children: [(0, i.jsx)(l.FocusRing, {
                        children: (0, i.jsx)(P, {
                            type: "text",
                            className: a(h.inputDefault, E.textArea, g.scrollbarDefault, I, {
                                [h.error]: L,
                                [h.disabled]: n,
                                [E.resizeable]: T
                            }),
                            "aria-labelledby": M,
                            "aria-describedby": b,
                            "aria-invalid": L,
                            style: {
                                paddingRight: this.getPaddingRight()
                            },
                            id: A,
                            disabled: n,
                            placeholder: r,
                            value: s,
                            autoFocus: o,
                            minLength: u,
                            maxLength: m ? void 0 : c,
                            spellCheck: v,
                            required: R,
                            onChange: this.onChange,
                            onBlur: this.onBlur,
                            onFocus: this.onFocus,
                            onKeyDown: this.onKeyDown,
                            onInvalid: O,
                            rows: C,
                            ref: D
                        })
                    }), null != u && (0, i.jsx)(d.HiddenVisually, {
                        id: p,
                        children: _.default.Messages.MINIMUM_LENGTH.format({
                            minLength: u
                        })
                    }), null != c && (0, i.jsx)(d.HiddenVisually, {
                        id: S,
                        children: _.default.Messages.MAXIMUM_LENGTH.format({
                            maxLength: c
                        })
                    }), this.renderCharacterCount(), this.renderMaxLength()]
                }), this.renderErrorMessage()]
            })
        }
        constructor(e) {
            var t;
            super(e), this.getAriaDescribedBy = () => {
                var e;
                let {
                    maxLength: t,
                    minLength: n,
                    error: i
                } = this.props, s = [], r = null === (e = this.context) || void 0 === e ? void 0 : e.errorId;
                return null != r && s.push(r), null != i ? s.push(m) : (null != t && s.push(S), null != n && s.push(p)), s.length > 0 ? s.join(" ") : void 0
            }, this.onChange = e => {
                let {
                    onChange: t,
                    name: n
                } = this.props;
                null == t || t(e.currentTarget.value, n), this.setState({
                    dirty: !0
                })
            }, this.onFocus = e => {
                let {
                    onFocus: t,
                    name: n
                } = this.props;
                null == t || t(e, n)
            }, this.onBlur = e => {
                let {
                    onBlur: t,
                    name: n
                } = this.props;
                null == t || t(e, n)
            }, this.onKeyDown = e => {
                let {
                    onKeyDown: t
                } = this.props;
                null == t || t(e)
            }, this.state = {
                dirty: null !== (t = e.defaultDirty) && void 0 !== t && t
            }
        }
    }
    v.contextType = u.FormContext, v.defaultProps = {
        name: "",
        disabled: !1,
        placeholder: "",
        autoFocus: !1,
        resizeable: !1,
        flex: !1,
        autosize: !1,
        rows: 3,
        allowOverflow: !1
    }
}