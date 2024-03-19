function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RichTagTypes: function() {
            return i
        },
        SearchBarIcon: function() {
            return y
        },
        default: function() {
            return S
        }
    }), n("424973"), n("222007");
    var i, l, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("77078"),
        d = n("476263"),
        c = n("945330"),
        f = n("229915"),
        p = n("439932"),
        m = n("49111"),
        h = n("782340"),
        x = n("701588");
    let E = Object.freeze({
        SMALL: x.small,
        MEDIUM: x.medium,
        LARGE: x.large
    });
    (l = i || (i = {})).MEMBER = "MEMBER", l.ROLE = "ROLE", l.CHANNEL = "CHANNEL", l.GUILD = "GUILD", l.USER = "USER";
    let y = e => {
        let {
            hasContent: t,
            onClear: n,
            className: i,
            themeOverride: l,
            size: s = E.SMALL
        } = e;
        return (0, a.jsx)(u.Clickable, {
            className: o(i, x.iconLayout, s, (0, p.getThemeClass)(l), {
                [x.clear]: t
            }),
            onClick: e => {
                e.stopPropagation(), null != n && n(e)
            },
            onMouseDown: e => {
                e.preventDefault(), e.stopPropagation()
            },
            tabIndex: t ? 0 : -1,
            "aria-hidden": !t,
            "aria-label": h.default.Messages.SEARCH_CLEAR,
            focusProps: {
                offset: 4
            },
            children: (0, a.jsxs)("div", {
                className: x.iconContainer,
                children: [(0, a.jsx)(f.default, {
                    className: o({
                        [x.icon]: !0,
                        [x.visible]: !t
                    })
                }), (0, a.jsx)(c.default, {
                    className: o({
                        [x.icon]: !0,
                        [x.visible]: t
                    })
                })]
            })
        })
    };
    class g extends s.Component {
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
                query: l,
                tags: a,
                onSelectionChange: s,
                onSelect: r,
                onRemoveTag: o,
                preventEscapePropagation: u
            } = this.props;
            if (0 !== i.length) {
                switch (e.keyCode) {
                    case m.KeyboardKeys.BACKSPACE:
                        (null == l || 0 === l.length) && null != a && a.length > 0 && (e.preventDefault(), e.stopPropagation(), null == o || o(a.length - 1));
                        break;
                    case m.KeyboardKeys.ARROW_DOWN:
                        e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, n = 0) : ((t += 1) >= i.length && (t = i.length - 1), n >= i[t] && (n = i[t] - 1));
                        break;
                    case m.KeyboardKeys.ARROW_UP:
                        e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, n = 0) : n >= i[t] && (n = i[t] - 1);
                        break;
                    case m.KeyboardKeys.ARROW_LEFT:
                        e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? n = i[t] - 1 : t < 0 && (t = 0, n = 0));
                        break;
                    case m.KeyboardKeys.ARROW_RIGHT:
                        e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1) >= i[t] && (n = 0, (t += 1) >= i.length && (t = i.length - 1, n = i[t] - 1));
                        break;
                    case m.KeyboardKeys.ENTER:
                        if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= i.length || n >= i[t]) return;
                        null != r && r(t, n, e);
                        return;
                    case m.KeyboardKeys.ESCAPE:
                        e.preventDefault(), u && e.stopPropagation(), null != r && r(null, null, e);
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
                onSelect: l,
                onSelectionChange: a,
                query: s,
                tags: r,
                preventEscapePropagation: o
            } = this.props, {
                current: u
            } = this.ref;
            if (null != u) switch (e.keyCode) {
                case m.KeyboardKeys.BACKSPACE:
                    if ((null == s || 0 === s.length) && null != r && r.length > 0) {
                        var d, c;
                        e.preventDefault(), e.stopPropagation(), null === (d = (c = this.props).onRemoveTag) || void 0 === d || d.call(c, r.length - 1)
                    }
                    break;
                case m.KeyboardKeys.ARROW_DOWN:
                    e.preventDefault(), e.stopPropagation(), t.length > n && ++i >= t[n] && (++n >= t.length && (n = 0), i = 0), null == a || a(n, i);
                    break;
                case m.KeyboardKeys.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), --i < 0 && (--n < 0 && (n = t.length - 1), i = t[n] - 1), null == a || a(n, i);
                    break;
                case m.KeyboardKeys.ENTER:
                    e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > i && (null == l || l(n, i, e));
                    break;
                case m.KeyboardKeys.ESCAPE:
                    e.preventDefault(), o && e.stopPropagation(), null == l || l(null, null, e), u.blur()
            }
        }
        render() {
            let {
                autoFocus: e,
                query: t,
                placeholder: n = h.default.Messages.DM_SEARCH_PLACEHOLDER,
                themeOverride: i,
                disabled: l,
                onClear: s,
                size: r,
                maxHeight: f,
                tags: m,
                onActivate: E,
                className: g,
                inputProps: S,
                focusAfterReady: C
            } = this.props, _ = null != t && t.length > 0, I = !1, T = [];
            return null != m && m.length > 0 && ("string" == typeof m[0] ? m.forEach((e, t) => T.push((0, a.jsxs)(u.Anchor, {
                focusProps: {
                    offset: 4
                },
                className: x.tag,
                onClick: this.handleRemoveTag.bind(this, t),
                children: [e, (0, a.jsx)(c.default, {
                    className: x.close,
                    "aria-label": h.default.Messages.REMOVE
                })]
            }, t))) : (I = !0, m.forEach((e, t) => T.push((0, a.jsxs)(u.Anchor, {
                className: o(x.tag, x.richTag),
                onClick: this.handleRemoveTag.bind(this, t),
                children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, a.jsx)(u.Avatar, {
                    src: e.avatar,
                    "aria-hidden": !0,
                    size: u.AvatarSizes.SIZE_16
                }), "ROLE" === e.type && null != e.color && (0, a.jsx)("span", {
                    className: x.tagRoleColor,
                    style: {
                        backgroundColor: e.color
                    }
                }), "GUILD" === e.type && null != e.guild && (0, a.jsx)(d.default, {
                    guild: e.guild,
                    active: !0,
                    size: d.default.Sizes.SMOL
                }), (0, a.jsx)("span", {
                    className: x.tagLabel,
                    children: e.label
                }), (0, a.jsx)(c.default, {
                    className: x.close,
                    "aria-label": h.default.Messages.REMOVE
                })]
            }, t))))), (0, a.jsx)(u.FocusRing, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, a.jsx)("div", {
                    ref: this.containerRef,
                    className: o(g, x.container, r, (0, p.getThemeClass)(i), {
                        [x.disabled]: l
                    }),
                    children: (0, a.jsxs)(u.ScrollerThin, {
                        className: x.inner,
                        style: {
                            maxHeight: f
                        },
                        children: [T, (0, a.jsx)("input", {
                            className: o(x.input, {
                                [x.richTagInput]: I
                            }),
                            type: "text",
                            ref: this.ref,
                            spellCheck: "false",
                            placeholder: n,
                            value: t,
                            onChange: this.handleChange,
                            onKeyDown: this.handleKeyDown,
                            onFocus: this.handleFocus,
                            disabled: l,
                            "aria-disabled": l,
                            autoFocus: !C && e,
                            onMouseDown: E,
                            ...this.defaultInputProps,
                            ...S
                        }), null != s ? (0, a.jsx)(y, {
                            size: r,
                            themeOverride: i,
                            hasContent: _,
                            onClear: this.handleClear
                        }) : null]
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), this.defaultInputProps = {
                role: "combobox",
                "aria-haspopup": "listbox",
                "aria-autocomplete": "list"
            }, this.ref = s.createRef(), this.containerRef = s.createRef(), this.handleKeyDown = e => {
                let {
                    onActivate: t,
                    onKeyDown: n,
                    onQueryChange: i,
                    useKeyboardNavigation: l
                } = this.props;
                null != n && n(e);
                let {
                    current: a
                } = this.ref;
                if (null == a || null != t) {
                    e.keyCode !== m.KeyboardKeys.TAB && null != t && t(e);
                    return
                }
                if (e.keyCode === m.KeyboardKeys.ESCAPE && null != a.value && "" !== a.value && a.value.length > 0) {
                    a.value = "", null != i && i("");
                    return
                }
                l && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
            }, this.handleChange = e => {
                let {
                    onQueryChange: t
                } = this.props;
                null != t && t(e.currentTarget.value)
            }, this.handleFocus = e => {
                let {
                    onFocus: t
                } = this.props;
                null != t && t(e)
            }, this.handleClear = () => {
                let {
                    onClear: e
                } = this.props, {
                    current: t
                } = this.ref;
                null != e && e(), null != t && t.focus()
            }, this.handleRemoveTag = e => {
                let {
                    onRemoveTag: t
                } = this.props;
                null == t || t(e)
            }, this.focus = () => {
                let {
                    current: e
                } = this.ref;
                null != e && e.focus()
            }
        }
    }
    g.Sizes = E, g.defaultProps = {
        size: E.SMALL,
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
    };
    var S = g
}