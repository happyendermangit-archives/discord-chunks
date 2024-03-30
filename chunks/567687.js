function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("324377"),
        s = n("35628"),
        l = n("680799"),
        c = n("247164"),
        f = n("486541"),
        d = n("941504"),
        _ = n("372858");

    function E(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                m(e, t, n[t])
            })
        }
        return e
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var O = Object.freeze({
            SMALL: _.small,
            MEDIUM: _.medium,
            LARGE: _.large
        }),
        T = function(e) {
            var t = e.hasContent,
                n = e.onClear,
                r = e.className,
                i = e.isLoading,
                s = e.size,
                E = void 0 === s ? O.SMALL : s;
            return o.createElement(u.Clickable, {
                className: a()(r, _.iconLayout, E, m({}, _.pointer, t)),
                onClick: function(e) {
                    e.stopPropagation(), null != n && n(e)
                },
                tabIndex: t ? 0 : -1,
                "aria-hidden": !t,
                onMouseDown: function(e) {
                    e.preventDefault(), e.stopPropagation()
                }
            }, o.createElement("div", {
                className: _.iconContainer
            }, i ? o.createElement(l.Spinner, {
                type: l.Spinner.Type.SPINNING_CIRCLE,
                className: a()(_.icon, _.visible)
            }) : o.createElement(o.Fragment, null, o.createElement(f.default, {
                className: a()(_.icon, m({}, _.visible, !t)),
                "aria-label": d.default.Messages.SEARCH
            }), o.createElement(c.default, {
                className: a()(_.clear, m({}, _.visible, t)),
                "aria-label": d.default.Messages.CLEAR
            }))))
        };
    T.Sizes = O;
    var S = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
        }(c, e);
        var t, n, r, i, u, l = (t = c, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = y(t);
            if (n) {
                var a = y(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : E(e)
        });

        function c() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), e = l.apply(this, arguments), m(E(e), "inputRef", o.createRef()), m(E(e), "containerRef", o.createRef()), m(E(e), "handleOnChange", function(t) {
                var n = e.props.onChange;
                null == n || n(t.currentTarget.value)
            }), e
        }
        return r = c, i = [{
            key: "focus",
            value: function() {
                var e = this.inputRef.current;
                null == e || e.focus()
            }
        }, {
            key: "blur",
            value: function() {
                var e = this.inputRef.current;
                null == e || e.blur()
            }
        }, {
            key: "render",
            value: function() {
                var e, t, n = this.props,
                    r = n.query,
                    i = n.autoFocus,
                    u = n.onClear,
                    l = n.className,
                    c = n.placeholder,
                    f = void 0 === c ? d.default.Messages.SEARCH : c,
                    E = n.iconClassName,
                    p = n.onKeyDown,
                    y = n.onKeyUp,
                    h = n.onKeyPress,
                    O = n.isLoading,
                    S = n.size,
                    v = n.disabled,
                    g = (n.onChange, n.onBlur),
                    A = n.onFocus,
                    b = n.autoComplete,
                    N = n.inputProps,
                    R = n.hideSearchIcon,
                    C = n["aria-label"],
                    P = void 0 === C ? d.default.Messages.SEARCH : C,
                    D = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) {
                                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                            }
                        }
                        return o
                    }(n, ["query", "autoFocus", "onClear", "className", "placeholder", "iconClassName", "onKeyDown", "onKeyUp", "onKeyPress", "isLoading", "size", "disabled", "onChange", "onBlur", "onFocus", "autoComplete", "inputProps", "hideSearchIcon", "aria-label"]);
                return o.createElement(s.FocusRing, {
                    focusTarget: this.inputRef,
                    ringTarget: this.containerRef
                }, o.createElement("div", I({
                    className: a()(l, _.container, S, m({}, _.disabled, v)),
                    ref: this.containerRef
                }, D), o.createElement("div", {
                    className: _.inner
                }, o.createElement("input", (e = I({}, N), t = (t = {
                    onFocus: A,
                    onBlur: g,
                    className: _.input,
                    value: r,
                    onChange: this.handleOnChange,
                    onKeyDown: p,
                    onKeyUp: y,
                    onKeyPress: h,
                    placeholder: f,
                    disabled: v,
                    autoFocus: i,
                    autoComplete: b,
                    "aria-label": P,
                    ref: this.inputRef
                }, t), Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e)), !R && o.createElement(T, {
                    size: S,
                    hasContent: r.length > 0,
                    onClear: u,
                    className: E,
                    isLoading: O
                }))))
            }
        }], p(r.prototype, i), u && p(r, u), c
    }(o.PureComponent);
    m(S, "Sizes", O), m(S, "defaultProps", {
        size: O.SMALL,
        isLoading: !1,
        disabled: !1
    }), t.default = S
}