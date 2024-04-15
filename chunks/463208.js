function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InputError: function() {
            return S
        },
        TextInput: function() {
            return A
        }
    });
    var i, r = n("735250"),
        s = n("470079"),
        a = n("120356"),
        o = n.n(a),
        l = n("718017"),
        u = n("84735"),
        d = n("15127"),
        _ = n("993365"),
        c = n("699682"),
        E = n("689938"),
        I = n("717897");

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let f = {
        DEFAULT: I.inputDefault,
        MINI: I.inputMini
    };

    function S(e) {
        let {
            error: t
        } = e, n = (0, l.useTransition)(t, {
            config: {
                tension: 250,
                clamp: !0
            },
            from: {
                marginTop: 0,
                height: 0,
                opacity: 0,
                transform: "translate3d(0, -100%, 0)"
            },
            enter: {
                marginTop: 4,
                height: "auto",
                opacity: 1,
                transform: "translate3d(0, -0px, 0)"
            },
            leave: {
                marginTop: 0,
                height: 0,
                opacity: 0,
                transform: "translate3d(0, -100%, 0)"
            }
        }), i = (0, c.default)(t);
        return (0, r.jsx)(r.Fragment, {
            children: n((e, n, s) => {
                let {
                    key: a
                } = s, {
                    transform: o,
                    ...u
                } = e;
                return null != n && "" !== n ? (0, r.jsx)(l.animated.div, {
                    style: {
                        ...u,
                        overflow: "hidden"
                    },
                    children: (0, r.jsx)(l.animated.div, {
                        style: {
                            transform: o
                        },
                        children: (0, r.jsx)(_.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            children: null != t && "" !== t ? t : i
                        })
                    })
                }, a) : null
            })
        })
    }
    class A extends(i = s.Component) {
        render() {
            var e, t;
            let {
                className: n,
                inputClassName: i,
                inputPrefix: s,
                disabled: a,
                size: l,
                editable: d,
                inputRef: _,
                prefixElement: c,
                focusProps: E,
                ...T
            } = this.props, f = null !== (t = T["aria-labelledby"]) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId;
            return (0, r.jsxs)("div", {
                className: o()(I.inputWrapper, n),
                children: [null != c && c, null != s ? (0, r.jsx)("span", {
                    className: I.inputPrefix,
                    children: s
                }) : null, (0, r.jsx)(u.FocusRing, {
                    ...E,
                    children: (0, r.jsx)("input", {
                        className: o()(l, i, {
                            [I.error]: this.hasError(),
                            [I.disabled]: a,
                            [I.editable]: d
                        }),
                        disabled: a,
                        readOnly: !1 === d || void 0,
                        ...T,
                        "aria-labelledby": f,
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus,
                        ref: _
                    })
                }), (0, r.jsx)(S, {
                    error: this.getError()
                })]
            })
        }
        constructor(e) {
            var t;
            super(e), T(this, "hasError", () => null != this.props.error && !!(this.props.error.length > 0) || !1 !== this.state.dirty && (this.getIsUnderFlowing() || this.getIsOverFlowing())), T(this, "getError", () => {
                let {
                    error: e,
                    minLength: t,
                    maxLength: n
                } = this.props, i = this.getIsUnderFlowing() ? E.default.Messages.MINIMUM_LENGTH_ERROR.format({
                    minLength: t
                }) : null, r = this.getIsOverFlowing() ? E.default.Messages.MAXIMUM_LENGTH_ERROR.format({
                    maxLength: n
                }) : null;
                return null != e && e.length < 1 || null === e ? null : null != e ? e : !1 === this.state.dirty ? null : null != i ? i : r
            }), T(this, "getIsUnderFlowing", () => {
                var e;
                let {
                    value: t,
                    minLength: n
                } = this.props;
                return null != n && (null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0) < n
            }), T(this, "getIsOverFlowing", () => {
                var e;
                let {
                    value: t,
                    maxLength: n
                } = this.props;
                return null != n && (null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0) > n
            }), T(this, "onChange", e => {
                var t, n;
                null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, e.currentTarget.value, this.props.name), this.setState({
                    dirty: !0
                })
            }), T(this, "onFocus", e => {
                var t, n;
                null === (t = (n = this.props).onFocus) || void 0 === t || t.call(n, e, this.props.name)
            }), T(this, "onBlur", e => {
                var t, n;
                null === (t = (n = this.props).onBlur) || void 0 === t || t.call(n, e, this.props.name)
            }), this.state = {
                dirty: null !== (t = e.defaultDirty) && void 0 !== t && t
            }
        }
    }
    T(A, "Sizes", f), T(A, "contextType", d.FormContext), T(A, "defaultProps", {
        name: "",
        size: f.DEFAULT,
        disabled: !1,
        type: "text",
        placeholder: "",
        autoFocus: !1,
        maxLength: 999
    })
}