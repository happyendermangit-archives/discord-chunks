function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        DEFAULT_SELECT_STYLES: function() {
            return h
        },
        default: function() {
            return p
        }
    }), s("47120");
    var n, a, l, i = s("735250"),
        r = s("470079"),
        u = s("803997"),
        o = s.n(u),
        d = s("137093"),
        c = s("481060"),
        f = s("981631"),
        E = s("689938"),
        I = s("664989");

    function _(e, t, s) {
        return t in e ? Object.defineProperty(e, t, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = s, e
    }(l = n || (n = {})).TOP = "top", l.BOTTOM = "bottom";
    let h = {
        container: (e, t) => {
            let {
                isDisabled: s
            } = t;
            return {
                ...e,
                cursor: s ? "not-allowed" : void 0,
                pointerEvents: void 0,
                fontSize: 16,
                fontWeight: 500,
                width: "100%"
            }
        },
        control: (e, t) => {
            let {
                isDisabled: s,
                menuIsOpen: n
            } = t;
            return {
                ...e,
                backgroundColor: "var(--input-background)",
                borderColor: "var(--input-background)",
                opacity: s ? .6 : 1,
                boxShadow: void 0,
                borderRadius: n ? "4px 4px 0 0" : "4px",
                minHeight: 40,
                transition: "border 0.15s ease",
                cursor: s ? "not-allowed" : void 0,
                pointerEvents: s ? "none" : void 0,
                "&:hover": {
                    borderColor: "var(--input-background)"
                }
            }
        },
        singleValue: (e, t) => {
            let {
                isDisabled: s
            } = t;
            return {
                ...e,
                color: "var(--interactive-normal)",
                opacity: s ? .5 : 1
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
                isDisabled: s
            } = t;
            return {
                ...e,
                color: "var(--interactive-normal)",
                cursor: s ? void 0 : "pointer",
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
                isDisabled: s
            } = t;
            return {
                ...e,
                color: "var(--interactive-normal)",
                cursor: s ? void 0 : "pointer",
                opacity: s ? .3 : 1,
                padding: "8px 8px 8px 0",
                ":hover": {
                    color: "var(--interactive-hover)",
                    opacity: s ? .3 : 1
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
                isSelected: s,
                isFocused: n
            } = t;
            return {
                ...e,
                ...s ? {
                    backgroundColor: "var(--background-modifier-selected)",
                    color: "var(--interactive-active)"
                } : n ? {
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
    class p extends(a = r.Component) {
        focus() {
            var e;
            null === (e = this._selectRef.current) || void 0 === e || e.focus()
        }
        render() {
            let e;
            let {
                className: t,
                selectClassName: s,
                error: n,
                valueRenderer: a,
                optionRenderer: l,
                multiValueRenderer: r,
                options: u,
                value: f,
                autofocus: _,
                disabled: p,
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
            null != _ && (O.autoFocus = _), null != p && (O.isDisabled = p), null != T && (O.isClearable = T), null != N && (O.isSearchable = N);
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
                    className: o()(I.select, t, {
                        [I.error]: null != n
                    }),
                    ref: this._containerRef,
                    children: [(0, i.jsx)(d.default, {
                        ...O,
                        className: s,
                        ref: this._selectRef,
                        isMulti: m,
                        components: R,
                        options: u,
                        styles: null != g ? g : h,
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
                    }), null != n ? (0, i.jsx)("div", {
                        className: I.errorMessage,
                        children: n
                    }) : null]
                })
            })
        }
        constructor(...e) {
            super(...e), _(this, "_selectRef", r.createRef()), _(this, "_containerRef", r.createRef()), _(this, "state", {
                isFocused: !1,
                isOpen: !1
            }), _(this, "handleFocus", e => {
                var t, s;
                this.setState({
                    isFocused: !0
                }), null === (t = (s = this.props).onFocus) || void 0 === t || t.call(s, e)
            }), _(this, "handleBlur", e => {
                var t, s;
                this.setState({
                    isFocused: !1
                }), null === (t = (s = this.props).onBlur) || void 0 === t || t.call(s, e)
            }), _(this, "handleKeyDown", e => {
                e.which === f.KeyboardKeys.ESCAPE && this.state.isOpen && e.stopPropagation()
            }), _(this, "handleMenuOpen", () => {
                this.setState({
                    isOpen: !0
                })
            }), _(this, "handleMenuClose", () => {
                this.setState({
                    isOpen: !1
                })
            })
        }
    }
    _(p, "MenuPlacements", n)
}