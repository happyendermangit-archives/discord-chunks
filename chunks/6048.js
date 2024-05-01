function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("735250"),
        a = n("470079"),
        s = n("120356"),
        o = n.n(s),
        l = n("1561"),
        u = n("84735"),
        d = n("922770"),
        _ = n("465670"),
        c = n("664800"),
        E = n("689938"),
        I = n("67205");

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let f = Object.freeze({
            SMALL: I.small,
            MEDIUM: I.medium,
            LARGE: I.large
        }),
        S = e => {
            let {
                hasContent: t,
                onClear: n,
                className: i,
                isLoading: s,
                size: u = f.SMALL
            } = e;
            return (0, r.jsx)(l.Clickable, {
                className: o()(i, I.iconLayout, u, {
                    [I.pointer]: t
                }),
                onClick: e => {
                    e.stopPropagation(), null != n && n(e)
                },
                tabIndex: t ? 0 : -1,
                "aria-hidden": !t,
                onMouseDown: e => {
                    e.preventDefault(), e.stopPropagation()
                },
                children: (0, r.jsx)("div", {
                    className: I.iconContainer,
                    children: s ? (0, r.jsx)(d.Spinner, {
                        type: d.Spinner.Type.SPINNING_CIRCLE,
                        className: o()(I.icon, I.visible)
                    }) : (0, r.jsxs)(a.Fragment, {
                        children: [(0, r.jsx)(c.default, {
                            className: o()(I.icon, {
                                [I.visible]: !t
                            }),
                            "aria-label": E.default.Messages.SEARCH
                        }), (0, r.jsx)(_.default, {
                            className: o()(I.clear, {
                                [I.visible]: t
                            }),
                            "aria-label": E.default.Messages.CLEAR
                        })]
                    })
                })
            })
        };
    S.Sizes = f;
    class h extends(i = a.PureComponent) {
        focus() {
            let {
                current: e
            } = this.inputRef;
            null == e || e.focus()
        }
        blur() {
            let {
                current: e
            } = this.inputRef;
            null == e || e.blur()
        }
        render() {
            let {
                query: e,
                autoFocus: t,
                onClear: n,
                className: i,
                placeholder: a = E.default.Messages.SEARCH,
                iconClassName: s,
                onKeyDown: l,
                onKeyUp: d,
                onKeyPress: _,
                isLoading: c,
                size: T,
                disabled: f,
                onChange: h,
                onBlur: A,
                onFocus: m,
                autoComplete: N,
                inputProps: p,
                hideSearchIcon: O,
                "aria-label": R = E.default.Messages.SEARCH,
                ...C
            } = this.props;
            return (0, r.jsx)(u.FocusRing, {
                focusTarget: this.inputRef,
                ringTarget: this.containerRef,
                children: (0, r.jsx)("div", {
                    className: o()(i, I.container, T, {
                        [I.disabled]: f
                    }),
                    ref: this.containerRef,
                    ...C,
                    children: (0, r.jsxs)("div", {
                        className: I.inner,
                        children: [(0, r.jsx)("input", {
                            ...p,
                            onFocus: m,
                            onBlur: A,
                            className: I.input,
                            value: e,
                            onChange: this.handleOnChange,
                            onKeyDown: l,
                            onKeyUp: d,
                            onKeyPress: _,
                            placeholder: a,
                            disabled: f,
                            autoFocus: t,
                            autoComplete: N,
                            "aria-label": R,
                            ref: this.inputRef
                        }), !O && (0, r.jsx)(S, {
                            size: T,
                            hasContent: e.length > 0,
                            onClear: n,
                            className: s,
                            isLoading: c
                        })]
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), T(this, "inputRef", a.createRef()), T(this, "containerRef", a.createRef()), T(this, "handleOnChange", e => {
                let {
                    onChange: t
                } = this.props;
                null == t || t(e.currentTarget.value)
            })
        }
    }
    T(h, "Sizes", f), T(h, "defaultProps", {
        size: f.SMALL,
        isLoading: !1,
        disabled: !1
    }), t.default = h
}