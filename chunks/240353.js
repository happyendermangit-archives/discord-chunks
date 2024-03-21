function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InputError: function() {
            return h
        },
        TextInput: function() {
            return g
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("146606"),
        l = n("718776"),
        u = n("516826"),
        d = n("577776"),
        c = n("634634"),
        _ = n("782340"),
        f = n("182893");
    let E = {
        DEFAULT: f.inputDefault,
        MINI: f.inputMini
    };

    function h(e) {
        let {
            error: t
        } = e, n = (0, o.useTransition)(t, {
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
        }), s = (0, c.default)(t);
        return (0, i.jsx)(i.Fragment, {
            children: n((e, n, r) => {
                let {
                    key: a
                } = r, {
                    transform: l,
                    ...u
                } = e;
                return null != n && "" !== n ? (0, i.jsx)(o.animated.div, {
                    style: {
                        ...u,
                        overflow: "hidden"
                    },
                    children: (0, i.jsx)(o.animated.div, {
                        style: {
                            transform: l
                        },
                        children: (0, i.jsx)(d.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            children: null != t && "" !== t ? t : s
                        })
                    })
                }, a) : null
            })
        })
    }
    class g extends s.Component {
        render() {
            var e, t;
            let {
                className: n,
                inputClassName: s,
                inputPrefix: r,
                disabled: o,
                size: u,
                editable: d,
                inputRef: c,
                prefixElement: _,
                focusProps: E,
                ...g
            } = this.props, m = null !== (t = g["aria-labelledby"]) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId;
            return (0, i.jsxs)("div", {
                className: a(f.inputWrapper, n),
                children: [null != _ && _, null != r ? (0, i.jsx)("span", {
                    className: f.inputPrefix,
                    children: r
                }) : null, (0, i.jsx)(l.FocusRing, {
                    ...E,
                    children: (0, i.jsx)("input", {
                        className: a(u, s, {
                            [f.error]: this.hasError(),
                            [f.disabled]: o,
                            [f.editable]: d
                        }),
                        disabled: o,
                        readOnly: !1 === d || void 0,
                        ...g,
                        "aria-labelledby": m,
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus,
                        ref: c
                    })
                }), (0, i.jsx)(h, {
                    error: this.getError()
                })]
            })
        }
        constructor(e) {
            var t;
            super(e), this.hasError = () => null != this.props.error && !!(this.props.error.length > 0) || !1 !== this.state.dirty && (this.getIsUnderFlowing() || this.getIsOverFlowing()), this.getError = () => {
                let {
                    error: e,
                    minLength: t,
                    maxLength: n
                } = this.props, i = this.getIsUnderFlowing() ? _.default.Messages.MINIMUM_LENGTH_ERROR.format({
                    minLength: t
                }) : null, s = this.getIsOverFlowing() ? _.default.Messages.MAXIMUM_LENGTH_ERROR.format({
                    maxLength: n
                }) : null;
                return null != e && e.length < 1 || null === e ? null : null != e ? e : !1 === this.state.dirty ? null : null != i ? i : s
            }, this.getIsUnderFlowing = () => {
                var e;
                let {
                    value: t,
                    minLength: n
                } = this.props;
                return null != n && (null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0) < n
            }, this.getIsOverFlowing = () => {
                var e;
                let {
                    value: t,
                    maxLength: n
                } = this.props;
                return null != n && (null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0) > n
            }, this.onChange = e => {
                var t, n;
                null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, e.currentTarget.value, this.props.name), this.setState({
                    dirty: !0
                })
            }, this.onFocus = e => {
                var t, n;
                null === (t = (n = this.props).onFocus) || void 0 === t || t.call(n, e, this.props.name)
            }, this.onBlur = e => {
                var t, n;
                null === (t = (n = this.props).onBlur) || void 0 === t || t.call(n, e, this.props.name)
            }, this.state = {
                dirty: null !== (t = e.defaultDirty) && void 0 !== t && t
            }
        }
    }
    g.Sizes = E, g.contextType = u.FormContext, g.defaultProps = {
        name: "",
        size: E.DEFAULT,
        disabled: !1,
        type: "text",
        placeholder: "",
        autoFocus: !1,
        maxLength: 999
    }
}