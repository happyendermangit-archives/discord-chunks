function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_SELECT_STYLES: function() {
            return p
        },
        default: function() {
            return h
        }
    }), n("47120");
    var s, a, l, i = n("735250"),
        r = n("470079"),
        u = n("120356"),
        o = n.n(u),
        d = n("137093"),
        c = n("481060"),
        f = n("981631"),
        E = n("689938"),
        _ = n("209280");

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(l = s || (s = {})).TOP = "top", l.BOTTOM = "bottom";
    let p = {
        container: (e, t) => {
            let {
                isDisabled: n
            } = t;
            return {
                ...e,
                cursor: n ? "not-allowed" : void 0,
                pointerEvents: void 0,
                fontSize: 16,
                fontWeight: 500,
                width: "100%"
            }
        },
        control: (e, t) => {
            let {
                isDisabled: n,
                menuIsOpen: s
            } = t;
            return {
                ...e,
                backgroundColor: "var(--input-background)",
                borderColor: "var(--input-background)",
                opacity: n ? .6 : 1,
                boxShadow: void 0,
                borderRadius: s ? "4px 4px 0 0" : "4px",
                minHeight: 40,
                transition: "border 0.15s ease",
                cursor: n ? "not-allowed" : void 0,
                pointerEvents: n ? "none" : void 0,
                "&:hover": {
                    borderColor: "var(--input-background)"
                }
            }
        },
        singleValue: (e, t) => {
            let {
                isDisabled: n
            } = t;
            return {
                ...e,
                color: "var(--interactive-normal)",
                opacity: n ? .5 : 1
            }
        },
        input: e => ({
            ...e,
            color: "var(--interactive-normal)"
        }),
        menu: e => ({
            ...e,
            backgroundColor: "var(--background-secondary)",
            border: "1px solid var(--background-tertiary)",
            borderRadius: "0 0 4px 4px",
            color: "var(--interactive-normal)",
            marginTop: -1,
            marginBottom: -1
        }),
        clearIndicator: (e, t) => {
            let {
                isDisabled: n
            } = t;
            return {
                ...e,
                color: "var(--interactive-normal)",
                cursor: n ? void 0 : "pointer",
                opacity: .3,
                padding: "8px 0",
                transform: "scale(0.8)",
                ":hover": {
                    color: "var(--text-danger)",
                    opacity: 1
                }
            }
        },
        indicatorsContainer: e => ({
            ...e,
            alignItems: "flex-start"
        }),
        dropdownIndicator: (e, t) => {
            let {
                isDisabled: n
            } = t;
            return {
                ...e,
                color: "var(--interactive-normal)",
                cursor: n ? void 0 : "pointer",
                opacity: n ? .3 : 1,
                padding: "8px 8px 8px 0",
                ":hover": {
                    color: "var(--interactive-hover)",
                    opacity: n ? .3 : 1
                }
            }
        },
        menuList: e => ({
            ...e,
            padding: 0,
            "&::-webkit-scrollbar": {
                width: 8,
                padding: "0px 2px"
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: "var(--scrollbar-thin-thumb)",
                border: "2px solid transparent",
                backgroundClip: "padding-box",
                borderRadius: 4
            },
            "&::-webkit-scrollbar-track-piece": {
                backgroundColor: "transparent",
                borderColor: "transparent"
            }
        }),
        option: (e, t) => {
            let {
                isSelected: n,
                isFocused: s
            } = t;
            return {
                ...e,
                ...n ? {
                    backgroundColor: "var(--background-modifier-selected)",
                    color: "var(--interactive-active)"
                } : s ? {
                    backgroundColor: "var(--background-modifier-hover)",
                    color: "var(--interactive-hover)"
                } : {
                    backgroundColor: "transparent",
                    color: "var(--interactive-normal)"
                },
                cursor: "pointer",
                display: "flex",
                padding: 12,
                alignItems: "center",
                minHeight: 40,
                "&:active": {
                    backgroundColor: "var(--background-modifier-selected)",
                    color: "var(--interactive-active)"
                }
            }
        },
        placeholder: e => ({
            ...e,
            color: "var(--text-muted)"
        })
    };
    class h extends(a = r.Component) {
        focus() {
            var e;
            null === (e = this._selectRef.current) || void 0 === e || e.focus()
        }
        render() {
            let e;
            let {
                className: t,
                selectClassName: n,
                error: s,
                valueRenderer: a,
                optionRenderer: l,
                multiValueRenderer: r,
                options: u,
                value: f,
                autofocus: I,
                disabled: h,
                clearable: T,
                searchable: N,
                styleOverrides: g,
                isMulti: m,
                placeholder: A,
                filterOption: S,
                closeMenuOnSelect: v = !0,
                ...C
            } = this.props, O = {
                ...C
            };
            null != I && (O.autoFocus = I), null != h && (O.isDisabled = h), null != T && (O.isClearable = T), null != N && (O.isSearchable = N);
            let R = {
                IndicatorSeparator: () => null
            };
            null != l && (R.Option = e => (0, i.jsx)(d.components.Option, {
                ...e,
                children: l(e.data)
            })), null != a && (R.SingleValue = e => (0, i.jsx)(d.components.SingleValue, {
                ...e,
                children: a(e.data)
            })), null != r && (R.MultiValue = e => r(e.data));
            if (m && Array.isArray(f)) {
                let t = {};
                u.forEach(e => {
                    t[String(e.value)] = e
                }), e = f.map(e => t[String(e)])
            } else e = null != f ? u.find(e => e.value === f) : null;
            return (0, i.jsx)(c.FocusRing, {
                focused: this.state.isFocused && !this.state.isOpen,
                ringTarget: this._containerRef,
                children: (0, i.jsxs)("div", {
                    className: o()(_.select, t, {
                        [_.error]: null != s
                    }),
                    ref: this._containerRef,
                    children: [(0, i.jsx)(d.default, {
                        ...O,
                        className: n,
                        ref: this._selectRef,
                        isMulti: m,
                        components: R,
                        options: u,
                        styles: null != g ? g : p,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onMenuOpen: this.handleMenuOpen,
                        onMenuClose: this.handleMenuClose,
                        closeMenuOnSelect: v,
                        value: e,
                        onKeyDown: this.handleKeyDown,
                        placeholder: null != A ? A : E.default.Messages.SELECT,
                        noOptionsMessage: () => E.default.Messages.NO_RESULTS_FOUND,
                        filterOption: S
                    }), null != s ? (0, i.jsx)("div", {
                        className: _.errorMessage,
                        children: s
                    }) : null]
                })
            })
        }
        constructor(...e) {
            super(...e), I(this, "_selectRef", r.createRef()), I(this, "_containerRef", r.createRef()), I(this, "state", {
                isFocused: !1,
                isOpen: !1
            }), I(this, "handleFocus", e => {
                var t, n;
                this.setState({
                    isFocused: !0
                }), null === (t = (n = this.props).onFocus) || void 0 === t || t.call(n, e)
            }), I(this, "handleBlur", e => {
                var t, n;
                this.setState({
                    isFocused: !1
                }), null === (t = (n = this.props).onBlur) || void 0 === t || t.call(n, e)
            }), I(this, "handleKeyDown", e => {
                e.which === f.KeyboardKeys.ESCAPE && this.state.isOpen && e.stopPropagation()
            }), I(this, "handleMenuOpen", () => {
                this.setState({
                    isOpen: !0
                })
            }), I(this, "handleMenuClose", () => {
                this.setState({
                    isOpen: !1
                })
            })
        }
    }
    I(h, "MenuPlacements", s)
}