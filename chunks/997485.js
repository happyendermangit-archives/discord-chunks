function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RichTagTypes: function() {
            return o
        },
        SearchBarIcon: function() {
            return v
        }
    });
    var r, o, i, a = n("470079"),
        u = n("803997"),
        s = n.n(u),
        l = n("784184"),
        c = n("372844"),
        f = n("247164"),
        d = n("486541"),
        _ = n("153732"),
        E = n("281767"),
        p = n("941504"),
        m = n("757746");

    function y(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function O(e) {
        return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var S = Object.freeze({
        SMALL: m.small,
        MEDIUM: m.medium,
        LARGE: m.large
    });
    (r = o || (o = {})).MEMBER = "MEMBER", r.ROLE = "ROLE", r.CHANNEL = "CHANNEL", r.GUILD = "GUILD", r.USER = "USER";
    var v = function(e) {
            var t, n, r = e.hasContent,
                o = e.onClear,
                i = e.className,
                u = e.themeOverride,
                c = e.size,
                E = void 0 === c ? S.SMALL : c;
            return a.createElement(l.Clickable, {
                className: s()(i, m.iconLayout, E, (0, _.getThemeClass)(u), h({}, m.clear, r)),
                onClick: function(e) {
                    e.stopPropagation(), null != o && o(e)
                },
                onMouseDown: function(e) {
                    e.preventDefault(), e.stopPropagation()
                },
                tabIndex: r ? 0 : -1,
                "aria-hidden": !r,
                "aria-label": p.default.Messages.SEARCH_CLEAR,
                focusProps: {
                    offset: 4
                }
            }, a.createElement("div", {
                className: m.iconContainer
            }, a.createElement(d.default, {
                className: s()((h(t = {}, m.icon, !0), h(t, m.visible, !r), t))
            }), a.createElement(f.default, {
                className: s()((h(n = {}, m.icon, !0), h(n, m.visible, r), n))
            })))
        },
        g = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && T(e, t)
            }(d, e);
            var t, n, r, o, i, u = (t = d, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = O(t);
                if (n) {
                    var a = O(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : y(e)
            });

            function d() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, d), e = u.apply(this, arguments), h(y(e), "defaultInputProps", {
                    role: "combobox",
                    "aria-haspopup": "listbox",
                    "aria-autocomplete": "list"
                }), h(y(e), "ref", a.createRef()), h(y(e), "containerRef", a.createRef()), h(y(e), "handleKeyDown", function(t) {
                    var n = e.props,
                        r = n.onActivate,
                        o = n.onKeyDown,
                        i = n.onQueryChange,
                        a = n.useKeyboardNavigation;
                    null != o && o(t);
                    var u = e.ref.current;
                    if (null == u || null != r) {
                        t.keyCode !== E.KeyboardKeys.TAB && null != r && r(t);
                        return
                    }
                    if (t.keyCode === E.KeyboardKeys.ESCAPE && null != u.value && "" !== u.value && u.value.length > 0) {
                        u.value = "", null != i && i("");
                        return
                    }
                    a && (e.props.gridResults ? e.handleKeyDownGrid(t) : e.handleKeyDownList(t))
                }), h(y(e), "handleChange", function(t) {
                    var n = e.props.onQueryChange;
                    null != n && n(t.currentTarget.value)
                }), h(y(e), "handleFocus", function(t) {
                    var n = e.props.onFocus;
                    null != n && n(t)
                }), h(y(e), "handleClear", function() {
                    var t = e.props.onClear,
                        n = e.ref.current;
                    null != t && t(), null != n && n.focus()
                }), h(y(e), "handleRemoveTag", function(t) {
                    var n = e.props.onRemoveTag;
                    null == n || n(t)
                }), h(y(e), "focus", function() {
                    var t = e.ref.current;
                    null != t && t.focus()
                }), e
            }
            return r = d, o = [{
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props,
                        n = t.focusAfterReady,
                        r = t.isReady;
                    n && !e.isReady && r && this.focus()
                }
            }, {
                key: "handleKeyDownGrid",
                value: function(e) {
                    var t = this.props,
                        n = t.selectedRow,
                        r = t.selectedColumn,
                        o = t.sections,
                        i = t.query,
                        a = t.tags,
                        u = t.onSelectionChange,
                        s = t.onSelect,
                        l = t.onRemoveTag,
                        c = t.preventEscapePropagation;
                    if (0 !== o.length) {
                        switch (e.keyCode) {
                            case E.KeyboardKeys.BACKSPACE:
                                (null == i || 0 === i.length) && null != a && a.length > 0 && (e.preventDefault(), e.stopPropagation(), null == l || l(a.length - 1));
                                break;
                            case E.KeyboardKeys.ARROW_DOWN:
                                e.preventDefault(), e.stopPropagation(), -1 === n ? (n = 0, r = 0) : ((n += 1) >= o.length && (n = o.length - 1), r >= o[n] && (r = o[n] - 1));
                                break;
                            case E.KeyboardKeys.ARROW_UP:
                                e.preventDefault(), e.stopPropagation(), (n -= 1) < 0 ? (n = 0, r = 0) : r >= o[n] && (r = o[n] - 1);
                                break;
                            case E.KeyboardKeys.ARROW_LEFT:
                                e.preventDefault(), e.stopPropagation(), -1 === n && (n = 0), (r -= 1) < 0 && ((n -= 1) >= 0 ? r = o[n] - 1 : n < 0 && (n = 0, r = 0));
                                break;
                            case E.KeyboardKeys.ARROW_RIGHT:
                                e.preventDefault(), e.stopPropagation(), -1 === n && (n = 0), (r += 1) >= o[n] && (r = 0, (n += 1) >= o.length && (n = o.length - 1, r = o[n] - 1));
                                break;
                            case E.KeyboardKeys.ENTER:
                                if (e.preventDefault(), e.stopPropagation(), -1 === n && (n = 0), -1 === r && (r = 0), n >= o.length || r >= o[n]) return;
                                null != s && s(n, r, e);
                                return;
                            case E.KeyboardKeys.ESCAPE:
                                e.preventDefault(), c && e.stopPropagation(), null != s && s(null, null, e);
                                return;
                            default:
                                return
                        }
                        null != u && u(n, r)
                    }
                }
            }, {
                key: "handleKeyDownList",
                value: function(e) {
                    var t, n, r = this.props,
                        o = r.sections,
                        i = r.selectedSection,
                        a = r.selectedRow,
                        u = r.onSelect,
                        s = r.onSelectionChange,
                        l = r.query,
                        c = r.tags,
                        f = r.preventEscapePropagation,
                        d = this.ref.current;
                    if (null != d) switch (e.keyCode) {
                        case E.KeyboardKeys.BACKSPACE:
                            (null == l || 0 === l.length) && null != c && c.length > 0 && (e.preventDefault(), e.stopPropagation(), null === (t = (n = this.props).onRemoveTag) || void 0 === t || t.call(n, c.length - 1));
                            break;
                        case E.KeyboardKeys.ARROW_DOWN:
                            e.preventDefault(), e.stopPropagation(), o.length > i && ++a >= o[i] && (++i >= o.length && (i = 0), a = 0), null == s || s(i, a);
                            break;
                        case E.KeyboardKeys.ARROW_UP:
                            e.preventDefault(), e.stopPropagation(), --a < 0 && (--i < 0 && (i = o.length - 1), a = o[i] - 1), null == s || s(i, a);
                            break;
                        case E.KeyboardKeys.ENTER:
                            e.preventDefault(), e.stopPropagation(), o.length > i && o[i] > a && (null == u || u(i, a, e));
                            break;
                        case E.KeyboardKeys.ESCAPE:
                            e.preventDefault(), f && e.stopPropagation(), null == u || u(null, null, e), d.blur()
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.autoFocus,
                        r = t.query,
                        o = t.placeholder,
                        i = void 0 === o ? p.default.Messages.DM_SEARCH_PLACEHOLDER : o,
                        u = t.themeOverride,
                        d = t.disabled,
                        E = t.onClear,
                        y = t.size,
                        I = t.maxHeight,
                        O = t.tags,
                        T = t.onActivate,
                        S = t.className,
                        g = t.inputProps,
                        A = t.focusAfterReady,
                        b = null != r && r.length > 0,
                        N = !1,
                        R = [];
                    return null != O && O.length > 0 && ("string" == typeof O[0] ? O.forEach(function(t, n) {
                        return R.push(a.createElement(l.Anchor, {
                            focusProps: {
                                offset: 4
                            },
                            key: n,
                            className: m.tag,
                            onClick: e.handleRemoveTag.bind(e, n)
                        }, t, a.createElement(f.default, {
                            className: m.close,
                            "aria-label": p.default.Messages.REMOVE
                        })))
                    }) : (N = !0, O.forEach(function(t, n) {
                        return R.push(a.createElement(l.Anchor, {
                            key: n,
                            className: s()(m.tag, m.richTag),
                            onClick: e.handleRemoveTag.bind(e, n)
                        }, ("MEMBER" === t.type || "USER" === t.type) && null != t.avatar && a.createElement(l.Avatar, {
                            src: t.avatar,
                            "aria-hidden": !0,
                            size: l.AvatarSizes.SIZE_16
                        }), "ROLE" === t.type && null != t.color && a.createElement("span", {
                            className: m.tagRoleColor,
                            style: {
                                backgroundColor: t.color
                            }
                        }), "GUILD" === t.type && null != t.guild && a.createElement(c.default, {
                            guild: t.guild,
                            active: !0,
                            size: c.default.Sizes.SMOL
                        }), a.createElement("span", {
                            className: m.tagLabel
                        }, t.label), a.createElement(f.default, {
                            className: m.close,
                            "aria-label": p.default.Messages.REMOVE
                        })))
                    }))), a.createElement(l.FocusRing, {
                        focusTarget: this.ref,
                        ringTarget: this.containerRef
                    }, a.createElement("div", {
                        ref: this.containerRef,
                        className: s()(S, m.container, y, (0, _.getThemeClass)(u), h({}, m.disabled, d))
                    }, a.createElement(l.ScrollerThin, {
                        className: m.inner,
                        style: {
                            maxHeight: I
                        }
                    }, R, a.createElement("input", function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                h(e, t, n[t])
                            })
                        }
                        return e
                    }({
                        className: s()(m.input, h({}, m.richTagInput, N)),
                        type: "text",
                        ref: this.ref,
                        spellCheck: "false",
                        placeholder: i,
                        value: r,
                        onChange: this.handleChange,
                        onKeyDown: this.handleKeyDown,
                        onFocus: this.handleFocus,
                        disabled: d,
                        "aria-disabled": d,
                        autoFocus: !A && n,
                        onMouseDown: T
                    }, this.defaultInputProps, g)), null != E ? a.createElement(v, {
                        size: y,
                        themeOverride: u,
                        hasContent: b,
                        onClear: this.handleClear
                    }) : null)))
                }
            }], I(r.prototype, o), i && I(r, i), d
        }(a.Component);
    h(g, "Sizes", S), h(g, "defaultProps", {
        size: S.SMALL,
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
    }), t.default = g
}