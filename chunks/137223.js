function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RichTagTypes: function() {
            return l
        },
        SearchBarIcon: function() {
            return C
        },
        default: function() {
            return T
        }
    }), n("424973"), n("222007");
    var l, i, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("77078"),
        d = n("476263"),
        c = n("945330"),
        f = n("229915"),
        m = n("439932"),
        p = n("49111"),
        h = n("782340"),
        E = n("701588");
    let g = Object.freeze({
        SMALL: E.small,
        MEDIUM: E.medium,
        LARGE: E.large
    });
    (i = l || (l = {})).MEMBER = "MEMBER", i.ROLE = "ROLE", i.CHANNEL = "CHANNEL", i.GUILD = "GUILD", i.USER = "USER";
    let C = e => {
        let {
            hasContent: t,
            onClear: n,
            className: l,
            themeOverride: i,
            size: s = g.SMALL
        } = e;
        return (0, a.jsx)(u.Clickable, {
            className: o(l, E.iconLayout, s, (0, m.getThemeClass)(i), {
                [E.clear]: t
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
                className: E.iconContainer,
                children: [(0, a.jsx)(f.default, {
                    className: o({
                        [E.icon]: !0,
                        [E.visible]: !t
                    })
                }), (0, a.jsx)(c.default, {
                    className: o({
                        [E.icon]: !0,
                        [E.visible]: t
                    })
                })]
            })
        })
    };
    class S extends s.Component {
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
                sections: l,
                query: i,
                tags: a,
                onSelectionChange: s,
                onSelect: r,
                onRemoveTag: o,
                preventEscapePropagation: u
            } = this.props;
            if (0 !== l.length) {
                switch (e.keyCode) {
                    case p.KeyboardKeys.BACKSPACE:
                        (null == i || 0 === i.length) && null != a && a.length > 0 && (e.preventDefault(), e.stopPropagation(), null == o || o(a.length - 1));
                        break;
                    case p.KeyboardKeys.ARROW_DOWN:
                        e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, n = 0) : ((t += 1) >= l.length && (t = l.length - 1), n >= l[t] && (n = l[t] - 1));
                        break;
                    case p.KeyboardKeys.ARROW_UP:
                        e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, n = 0) : n >= l[t] && (n = l[t] - 1);
                        break;
                    case p.KeyboardKeys.ARROW_LEFT:
                        e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? n = l[t] - 1 : t < 0 && (t = 0, n = 0));
                        break;
                    case p.KeyboardKeys.ARROW_RIGHT:
                        e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1) >= l[t] && (n = 0, (t += 1) >= l.length && (t = l.length - 1, n = l[t] - 1));
                        break;
                    case p.KeyboardKeys.ENTER:
                        if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= l.length || n >= l[t]) return;
                        null != r && r(t, n, e);
                        return;
                    case p.KeyboardKeys.ESCAPE:
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
                selectedRow: l,
                onSelect: i,
                onSelectionChange: a,
                query: s,
                tags: r,
                preventEscapePropagation: o
            } = this.props, {
                current: u
            } = this.ref;
            if (null != u) switch (e.keyCode) {
                case p.KeyboardKeys.BACKSPACE:
                    if ((null == s || 0 === s.length) && null != r && r.length > 0) {
                        var d, c;
                        e.preventDefault(), e.stopPropagation(), null === (d = (c = this.props).onRemoveTag) || void 0 === d || d.call(c, r.length - 1)
                    }
                    break;
                case p.KeyboardKeys.ARROW_DOWN:
                    e.preventDefault(), e.stopPropagation(), t.length > n && ++l >= t[n] && (++n >= t.length && (n = 0), l = 0), null == a || a(n, l);
                    break;
                case p.KeyboardKeys.ARROW_UP:
                    e.preventDefault(), e.stopPropagation(), --l < 0 && (--n < 0 && (n = t.length - 1), l = t[n] - 1), null == a || a(n, l);
                    break;
                case p.KeyboardKeys.ENTER:
                    e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > l && (null == i || i(n, l, e));
                    break;
                case p.KeyboardKeys.ESCAPE:
                    e.preventDefault(), o && e.stopPropagation(), null == i || i(null, null, e), u.blur()
            }
        }
        render() {
            let {
                autoFocus: e,
                query: t,
                placeholder: n = h.default.Messages.DM_SEARCH_PLACEHOLDER,
                themeOverride: l,
                disabled: i,
                onClear: s,
                size: r,
                maxHeight: f,
                tags: p,
                onActivate: g,
                className: S,
                inputProps: T,
                focusAfterReady: I
            } = this.props, v = null != t && t.length > 0, _ = !1, N = [];
            return null != p && p.length > 0 && ("string" == typeof p[0] ? p.forEach((e, t) => N.push((0, a.jsxs)(u.Anchor, {
                focusProps: {
                    offset: 4
                },
                className: E.tag,
                onClick: this.handleRemoveTag.bind(this, t),
                children: [e, (0, a.jsx)(c.default, {
                    className: E.close,
                    "aria-label": h.default.Messages.REMOVE
                })]
            }, t))) : (_ = !0, p.forEach((e, t) => N.push((0, a.jsxs)(u.Anchor, {
                className: o(E.tag, E.richTag),
                onClick: this.handleRemoveTag.bind(this, t),
                children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, a.jsx)(u.Avatar, {
                    src: e.avatar,
                    "aria-hidden": !0,
                    size: u.AvatarSizes.SIZE_16
                }), "ROLE" === e.type && null != e.color && (0, a.jsx)("span", {
                    className: E.tagRoleColor,
                    style: {
                        backgroundColor: e.color
                    }
                }), "GUILD" === e.type && null != e.guild && (0, a.jsx)(d.default, {
                    guild: e.guild,
                    active: !0,
                    size: d.default.Sizes.SMOL
                }), (0, a.jsx)("span", {
                    className: E.tagLabel,
                    children: e.label
                }), (0, a.jsx)(c.default, {
                    className: E.close,
                    "aria-label": h.default.Messages.REMOVE
                })]
            }, t))))), (0, a.jsx)(u.FocusRing, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, a.jsx)("div", {
                    ref: this.containerRef,
                    className: o(S, E.container, r, (0, m.getThemeClass)(l), {
                        [E.disabled]: i
                    }),
                    children: (0, a.jsxs)(u.ScrollerThin, {
                        className: E.inner,
                        style: {
                            maxHeight: f
                        },
                        children: [N, (0, a.jsx)("input", {
                            className: o(E.input, {
                                [E.richTagInput]: _
                            }),
                            type: "text",
                            ref: this.ref,
                            spellCheck: "false",
                            placeholder: n,
                            value: t,
                            onChange: this.handleChange,
                            onKeyDown: this.handleKeyDown,
                            onFocus: this.handleFocus,
                            disabled: i,
                            "aria-disabled": i,
                            autoFocus: !I && e,
                            onMouseDown: g,
                            ...this.defaultInputProps,
                            ...T
                        }), null != s ? (0, a.jsx)(C, {
                            size: r,
                            themeOverride: l,
                            hasContent: v,
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
                    onQueryChange: l,
                    useKeyboardNavigation: i
                } = this.props;
                null != n && n(e);
                let {
                    current: a
                } = this.ref;
                if (null == a || null != t) {
                    e.keyCode !== p.KeyboardKeys.TAB && null != t && t(e);
                    return
                }
                if (e.keyCode === p.KeyboardKeys.ESCAPE && null != a.value && "" !== a.value && a.value.length > 0) {
                    a.value = "", null != l && l("");
                    return
                }
                i && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
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
    S.Sizes = g, S.defaultProps = {
        size: g.SMALL,
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
    var T = S
}