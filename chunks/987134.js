function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_SELECT_STYLES: function() {
            return _
        },
        default: function() {
            return p
        }
    }), n("47120");
    var s, a, i, l = n("735250"),
        r = n("470079"),
        u = n("803997"),
        o = n.n(u),
        d = n("137093"),
        c = n("481060"),
        f = n("981631"),
        E = n("689938"),
        I = n("664989");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(i = s || (s = {})).TOP = "top", i.BOTTOM = "bottom";
    let _ = {
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
    class p extends(a = r.Component) {
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
                optionRenderer: i,
                multiValueRenderer: r,
                options: u,
                value: f,
                autofocus: h,
                disabled: p,
                clearable: T,
                searchable: m,
                styleOverrides: N,
                isMulti: g,
                placeholder: A,
                filterOption: S,
                closeMenuOnSelect: v = !0,
                ...O
            } = this.props, C = {
                ...O
            };
            null != h && (C.autoFocus = h), null != p && (C.isDisabled = p), null != T && (C.isClearable = T), null != m && (C.isSearchable = m);
            let R = {
                IndicatorSeparator: () => null
            };
            null != i && (R.Option = e => (0, l.jsx)(d.components.Option, {
                ...e,
                children: i(e.data)
            })), null != a && (R.SingleValue = e => (0, l.jsx)(d.components.SingleValue, {
                ...e,
                children: a(e.data)
            })), null != r && (R.MultiValue = e => r(e.data));
            if (g && Array.isArray(f)) {
                let t = {};
                u.forEach(e => {
                    t[String(e.value)] = e
                }), e = f.map(e => t[String(e)])
            } else e = null != f ? u.find(e => e.value === f) : null;
            return (0, l.jsx)(c.FocusRing, {
                focused: this.state.isFocused && !this.state.isOpen,
                ringTarget: this._containerRef,
                children: (0, l.jsxs)("div", {
                    className: o()(I.select, t, {
                        [I.error]: null != s
                    }),
                    ref: this._containerRef,
                    children: [(0, l.jsx)(d.default, {
                        ...C,
                        className: n,
                        ref: this._selectRef,
                        isMulti: g,
                        components: R,
                        options: u,
                        styles: null != N ? N : _,
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
                    }), null != s ? (0, l.jsx)("div", {
                        className: I.errorMessage,
                        children: s
                    }) : null]
                })
            })
        }
        constructor(...e) {
            super(...e), h(this, "_selectRef", r.createRef()), h(this, "_containerRef", r.createRef()), h(this, "state", {
                isFocused: !1,
                isOpen: !1
            }), h(this, "handleFocus", e => {
                var t, n;
                this.setState({
                    isFocused: !0
                }), null === (t = (n = this.props).onFocus) || void 0 === t || t.call(n, e)
            }), h(this, "handleBlur", e => {
                var t, n;
                this.setState({
                    isFocused: !1
                }), null === (t = (n = this.props).onBlur) || void 0 === t || t.call(n, e)
            }), h(this, "handleKeyDown", e => {
                e.which === f.KeyboardKeys.ESCAPE && this.state.isOpen && e.stopPropagation()
            }), h(this, "handleMenuOpen", () => {
                this.setState({
                    isOpen: !0
                })
            }), h(this, "handleMenuClose", () => {
                this.setState({
                    isOpen: !1
                })
            })
        }
    }
    h(p, "MenuPlacements", s)
}