function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_SELECT_STYLES: function() {
            return h
        },
        default: function() {
            return l
        }
    }), n("222007");
    var s, a, l, r, i = n("37983"),
        u = n("884691"),
        o = n("414456"),
        d = n.n(o),
        c = n("773392"),
        f = n("77078"),
        E = n("49111"),
        _ = n("782340"),
        I = n("852968");
    (r = a || (a = {})).TOP = "top", r.BOTTOM = "bottom";
    let h = {
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
    (s = class extends u.Component {
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
                value: o,
                autofocus: E,
                disabled: p,
                clearable: m,
                searchable: T,
                styleOverrides: N,
                isMulti: g,
                placeholder: A,
                filterOption: S,
                closeMenuOnSelect: C = !0,
                ...v
            } = this.props, O = {
                ...v
            };
            null != E && (O.autoFocus = E), null != p && (O.isDisabled = p), null != m && (O.isClearable = m), null != T && (O.isSearchable = T);
            let R = {
                IndicatorSeparator: () => null
            };
            null != l && (R.Option = e => (0, i.jsx)(c.components.Option, {
                ...e,
                children: l(e.data)
            })), null != a && (R.SingleValue = e => (0, i.jsx)(c.components.SingleValue, {
                ...e,
                children: a(e.data)
            })), null != r && (R.MultiValue = e => r(e.data));
            let L = null != N ? N : h;
            if (g && Array.isArray(o)) {
                let t = {};
                u.forEach(e => {
                    t[String(e.value)] = e
                }), e = o.map(e => t[String(e)])
            } else e = null != o ? u.find(e => e.value === o) : null;
            return (0, i.jsx)(f.FocusRing, {
                focused: this.state.isFocused && !this.state.isOpen,
                ringTarget: this._containerRef,
                children: (0, i.jsxs)("div", {
                    className: d(I.select, t, {
                        [I.error]: null != s
                    }),
                    ref: this._containerRef,
                    children: [(0, i.jsx)(c.default, {
                        ...O,
                        className: n,
                        ref: this._selectRef,
                        isMulti: g,
                        components: R,
                        options: u,
                        styles: L,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onMenuOpen: this.handleMenuOpen,
                        onMenuClose: this.handleMenuClose,
                        closeMenuOnSelect: C,
                        value: e,
                        onKeyDown: this.handleKeyDown,
                        placeholder: null != A ? A : _.default.Messages.SELECT,
                        noOptionsMessage: () => _.default.Messages.NO_RESULTS_FOUND,
                        filterOption: S
                    }), null != s ? (0, i.jsx)("div", {
                        className: I.errorMessage,
                        children: s
                    }) : null]
                })
            })
        }
        constructor(...e) {
            super(...e), this._selectRef = u.createRef(), this._containerRef = u.createRef(), this.state = {
                isFocused: !1,
                isOpen: !1
            }, this.handleFocus = e => {
                var t, n;
                this.setState({
                    isFocused: !0
                }), null === (t = (n = this.props).onFocus) || void 0 === t || t.call(n, e)
            }, this.handleBlur = e => {
                var t, n;
                this.setState({
                    isFocused: !1
                }), null === (t = (n = this.props).onBlur) || void 0 === t || t.call(n, e)
            }, this.handleKeyDown = e => {
                e.which === E.KeyboardKeys.ESCAPE && this.state.isOpen && e.stopPropagation()
            }, this.handleMenuOpen = () => {
                this.setState({
                    isOpen: !0
                })
            }, this.handleMenuClose = () => {
                this.setState({
                    isOpen: !1
                })
            }
        }
    }).MenuPlacements = a, l = s
}