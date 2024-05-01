function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RichTagTypes: function() {
            return i
        },
        SearchBarIcon: function() {
            return m
        }
    }), n("653041"), n("47120");
    var i, r, a, s = n("735250"),
        o = n("470079"),
        l = n("120356"),
        u = n.n(l),
        d = n("481060"),
        _ = n("346656"),
        c = n("465670"),
        E = n("664800"),
        I = n("792125"),
        T = n("981631"),
        f = n("689938"),
        S = n("466780");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let A = Object.freeze({
        SMALL: S.small,
        MEDIUM: S.medium,
        LARGE: S.large
    });
    (a = i || (i = {})).MEMBER = "MEMBER", a.ROLE = "ROLE", a.CHANNEL = "CHANNEL", a.GUILD = "GUILD", a.USER = "USER";
    let m = e => {
        let {
            hasContent: t,
            onClear: n,
            className: i,
            themeOverride: r,
            size: a = A.SMALL
        } = e;
        return (0, s.jsx)(d.Clickable, {
            className: u()(i, S.iconLayout, a, (0, I.getThemeClass)(r), {
                [S.clear]: t
            }),
            onClick: e => {
                e.stopPropagation(), null != n && n(e)
            },
            onMouseDown: e => {
                e.preventDefault(), e.stopPropagation()
            },
            tabIndex: t ? 0 : -1,
            "aria-hidden": !t,
            "aria-label": f.default.Messages.SEARCH_CLEAR,
            focusProps: {
                offset: 4
            },
            children: (0, s.jsxs)("div", {
                className: S.iconContainer,
                children: [(0, s.jsx)(E.default, {
                    className: u()({
                        [S.icon]: !0,
                        [S.visible]: !t
                    })
                }), (0, s.jsx)(c.default, {
                    className: u()({
                        [S.icon]: !0,
                        [S.visible]: t
                    })
                })]
            })
        })
    };
    class N extends(r = o.Component) {
        componentDidUpdate(e) {
            let {
                focusAfterReady: t,
                isReady: n
            } = this.props;
            t && !e.isReady && n && this.focus()
        }
        handleKeyDownGrid(e) {
            let {
                selectedRow: t,
                selectedColumn: n,
                sections: i,
                query: r,
                tags: a,
                onSelectionChange: s,
                onSelect: o,
                onRemoveTag: l,
                preventEscapePropagation: u
            } = this.props;
            if (0 !== i.length) {
                switch (e.keyCode) {
                    case T.KeyboardKeys.BACKSPACE:
                        (null == r || 0 === r.length) && null != a && a.length > 0 && (e.preventDefault(), e.stopPropagation(), null == l || l(a.length - 1));
                        break;
                    case T.KeyboardKeys.ARROW_DOWN:
                        e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, n = 0) : ((t += 1) >= i.length && (t = i.length - 1), n >= i[t] && (n = i[t] - 1));
                        break;
                    case T.KeyboardKeys.ARROW_UP:
                        e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, n = 0) : n >= i[t] && (n = i[t] - 1);
                        break;
                    case T.KeyboardKeys.ARROW_LEFT:
                        e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? n = i[t] - 1 : t < 0 && (t = 0, n = 0));
                        break;
                    case T.KeyboardKeys.ARROW_RIGHT:
                        e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1) >= i[t] && (n = 0, (t += 1) >= i.length && (t = i.length - 1, n = i[t] - 1));
                        break;
                    case T.KeyboardKeys.ENTER:
                        if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= i.length || n >= i[t]) return;
                        null != o && o(t, n, e);
                        return;
                    case T.KeyboardKeys.ESCAPE:
                        e.preventDefault(), u && e.stopPropagation(), null != o && o(null, null, e);
                        return;
                    default:
                        return
                }
                null != s && s(t, n)
            }
        }
        handleKeyDownList(e) {
            let {
                sections: t,
                selectedSection: n,
                selectedRow: i,
                onSelect: r,
                onSelectionChange: a,
                query: s,
                tags: o,
                preventEscapePropagation: l
            } = this.props, {
                current: u
            } = this.ref;
            if (null != u) switch (e.keyCode) {
                case T.KeyboardKeys.BACKSPACE:
                    if ((null == s || 0 === s.length) && null != o && o.length > 0) {
                        var d, _;
                        e.preventDefault(), e.stopPropagation(), null === (d = (_ = this.props).onRemoveTag) || void 0 === d || d.call(_, o.length - 1)
                    }
                    break;
                case T.KeyboardKeys.ARROW_DOWN:
                    e.preventDefault(), e.stopPropagation(), t.length > n && ++i >= t[n] && (++n >= t.length && (n = 0), i = 0), null == a || a(n, i);
                    break;
                case T.KeyboardKeys.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), --i < 0 && (--n < 0 && (n = t.length - 1), i = t[n] - 1), null == a || a(n, i);
                    break;
                case T.KeyboardKeys.ENTER:
                    e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > i && (null == r || r(n, i, e));
                    break;
                case T.KeyboardKeys.ESCAPE:
                    e.preventDefault(), l && e.stopPropagation(), null == r || r(null, null, e), u.blur()
            }
        }
        render() {
            let {
                autoFocus: e,
                query: t,
                placeholder: n = f.default.Messages.DM_SEARCH_PLACEHOLDER,
                themeOverride: i,
                disabled: r,
                onClear: a,
                size: o,
                maxHeight: l,
                tags: E,
                onActivate: T,
                className: h,
                inputProps: A,
                focusAfterReady: N
            } = this.props, p = null != t && t.length > 0, O = !1, R = [];
            return null != E && E.length > 0 && ("string" == typeof E[0] ? E.forEach((e, t) => R.push((0, s.jsxs)(d.Anchor, {
                focusProps: {
                    offset: 4
                },
                className: S.tag,
                onClick: this.handleRemoveTag.bind(this, t),
                children: [e, (0, s.jsx)(c.default, {
                    className: S.close,
                    "aria-label": f.default.Messages.REMOVE
                })]
            }, t))) : (O = !0, E.forEach((e, t) => R.push((0, s.jsxs)(d.Anchor, {
                className: u()(S.tag, S.richTag),
                onClick: this.handleRemoveTag.bind(this, t),
                children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, s.jsx)(d.Avatar, {
                    src: e.avatar,
                    "aria-hidden": !0,
                    size: d.AvatarSizes.SIZE_16
                }), "ROLE" === e.type && null != e.color && (0, s.jsx)("span", {
                    className: S.tagRoleColor,
                    style: {
                        backgroundColor: e.color
                    }
                }), "GUILD" === e.type && null != e.guild && (0, s.jsx)(_.default, {
                    guild: e.guild,
                    active: !0,
                    size: _.default.Sizes.SMOL
                }), (0, s.jsx)("span", {
                    className: S.tagLabel,
                    children: e.label
                }), (0, s.jsx)(c.default, {
                    className: S.close,
                    "aria-label": f.default.Messages.REMOVE
                })]
            }, t))))), (0, s.jsx)(d.FocusRing, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, s.jsx)("div", {
                    ref: this.containerRef,
                    className: u()(h, S.container, o, (0, I.getThemeClass)(i), {
                        [S.disabled]: r
                    }),
                    children: (0, s.jsxs)(d.ScrollerThin, {
                        className: S.inner,
                        style: {
                            maxHeight: l
                        },
                        children: [R, (0, s.jsx)("input", {
                            className: u()(S.input, {
                                [S.richTagInput]: O
                            }),
                            type: "text",
                            ref: this.ref,
                            spellCheck: "false",
                            placeholder: n,
                            value: t,
                            onChange: this.handleChange,
                            onKeyDown: this.handleKeyDown,
                            onFocus: this.handleFocus,
                            disabled: r,
                            "aria-disabled": r,
                            autoFocus: !N && e,
                            onMouseDown: T,
                            ...this.defaultInputProps,
                            ...A
                        }), null != a ? (0, s.jsx)(m, {
                            size: o,
                            themeOverride: i,
                            hasContent: p,
                            onClear: this.handleClear
                        }) : null]
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), h(this, "defaultInputProps", {
                role: "combobox",
                "aria-haspopup": "listbox",
                "aria-autocomplete": "list"
            }), h(this, "ref", o.createRef()), h(this, "containerRef", o.createRef()), h(this, "handleKeyDown", e => {
                let {
                    onActivate: t,
                    onKeyDown: n,
                    onQueryChange: i,
                    useKeyboardNavigation: r
                } = this.props;
                null != n && n(e);
                let {
                    current: a
                } = this.ref;
                if (null == a || null != t) {
                    e.keyCode !== T.KeyboardKeys.TAB && null != t && t(e);
                    return
                }
                if (e.keyCode === T.KeyboardKeys.ESCAPE && null != a.value && "" !== a.value && a.value.length > 0) {
                    a.value = "", null != i && i("");
                    return
                }
                r && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
            }), h(this, "handleChange", e => {
                let {
                    onQueryChange: t
                } = this.props;
                null != t && t(e.currentTarget.value)
            }), h(this, "handleFocus", e => {
                let {
                    onFocus: t
                } = this.props;
                null != t && t(e)
            }), h(this, "handleClear", () => {
                let {
                    onClear: e
                } = this.props, {
                    current: t
                } = this.ref;
                null != e && e(), null != t && t.focus()
            }), h(this, "handleRemoveTag", e => {
                let {
                    onRemoveTag: t
                } = this.props;
                null == t || t(e)
            }), h(this, "focus", () => {
                let {
                    current: e
                } = this.ref;
                null != e && e.focus()
            })
        }
    }
    h(N, "Sizes", A), h(N, "defaultProps", {
        size: A.SMALL,
        query: "",
        sections: [],
        selectedSection: 0,
        selectedRow: -1,
        selectedColumn: -1,
        gridResults: !1,
        disabled: !1,
        autoFocus: !1,
        preventEscapePropagation: !0,
        useKeyboardNavigation: !0
    }), t.default = N
}