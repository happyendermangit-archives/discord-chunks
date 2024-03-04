function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("227645"),
        l = n("718776"),
        u = n("242670"),
        d = n("945330"),
        c = n("229915"),
        f = n("782340"),
        _ = n("706381");
    let h = Object.freeze({
            SMALL: _.small,
            MEDIUM: _.medium,
            LARGE: _.large
        }),
        E = e => {
            let {
                hasContent: t,
                onClear: n,
                className: r,
                isLoading: l,
                size: E = h.SMALL
            } = e;
            return (0, i.jsx)(o.Clickable, {
                className: a(r, _.iconLayout, E, {
                    [_.pointer]: t
                }),
                onClick: e => {
                    e.stopPropagation(), null != n && n(e)
                },
                tabIndex: t ? 0 : -1,
                "aria-hidden": !t,
                onMouseDown: e => {
                    e.preventDefault(), e.stopPropagation()
                },
                children: (0, i.jsx)("div", {
                    className: _.iconContainer,
                    children: l ? (0, i.jsx)(u.Spinner, {
                        type: u.Spinner.Type.SPINNING_CIRCLE,
                        className: a(_.icon, _.visible)
                    }) : (0, i.jsxs)(s.Fragment, {
                        children: [(0, i.jsx)(c.default, {
                            className: a(_.icon, {
                                [_.visible]: !t
                            }),
                            "aria-label": f.default.Messages.SEARCH
                        }), (0, i.jsx)(d.default, {
                            className: a(_.clear, {
                                [_.visible]: t
                            }),
                            "aria-label": f.default.Messages.CLEAR
                        })]
                    })
                })
            })
        };
    E.Sizes = h;
    class g extends s.PureComponent {
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
                className: s,
                placeholder: r = f.default.Messages.SEARCH,
                iconClassName: o,
                onKeyDown: u,
                onKeyUp: d,
                onKeyPress: c,
                isLoading: h,
                size: g,
                disabled: m,
                onChange: p,
                onBlur: S,
                onFocus: v,
                autoComplete: T,
                inputProps: I,
                hideSearchIcon: C,
                "aria-label": A = f.default.Messages.SEARCH,
                ...y
            } = this.props;
            return (0, i.jsx)(l.FocusRing, {
                focusTarget: this.inputRef,
                ringTarget: this.containerRef,
                children: (0, i.jsx)("div", {
                    className: a(s, _.container, g, {
                        [_.disabled]: m
                    }),
                    ref: this.containerRef,
                    ...y,
                    children: (0, i.jsxs)("div", {
                        className: _.inner,
                        children: [(0, i.jsx)("input", {
                            ...I,
                            onFocus: v,
                            onBlur: S,
                            className: _.input,
                            value: e,
                            onChange: this.handleOnChange,
                            onKeyDown: u,
                            onKeyUp: d,
                            onKeyPress: c,
                            placeholder: r,
                            disabled: m,
                            autoFocus: t,
                            autoComplete: T,
                            "aria-label": A,
                            ref: this.inputRef
                        }), !C && (0, i.jsx)(E, {
                            size: g,
                            hasContent: e.length > 0,
                            onClear: n,
                            className: o,
                            isLoading: h
                        })]
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), this.inputRef = s.createRef(), this.containerRef = s.createRef(), this.handleOnChange = e => {
                let {
                    onChange: t
                } = this.props;
                null == t || t(e.currentTarget.value)
            }
        }
    }
    g.Sizes = h, g.defaultProps = {
        size: h.SMALL,
        isLoading: !1,
        disabled: !1
    };
    var m = g
}