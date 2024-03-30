function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InputError: function() {
            return v
        },
        TextInput: function() {
            return g
        }
    });
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("718017"),
        s = n("35628"),
        l = n("512341"),
        c = n("135983"),
        f = n("356646"),
        d = n("941504"),
        _ = n("717897");

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
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function O(e, t) {
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
    }

    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var S = {
        DEFAULT: _.inputDefault,
        MINI: _.inputMini
    };

    function v(e) {
        var t = e.error,
            n = (0, u.useTransition)(t, {
                config: {
                    tension: 250,
                    clamp: !0
                },
                from: {
                    marginTop: 0,
                    height: 0,
                    opacity: 0,
                    transform: "translate3d(0, -100%, 0)"
                },
                enter: {
                    marginTop: 4,
                    height: "auto",
                    opacity: 1,
                    transform: "translate3d(0, -0px, 0)"
                },
                leave: {
                    marginTop: 0,
                    height: 0,
                    opacity: 0,
                    transform: "translate3d(0, -100%, 0)"
                }
            }),
            r = (0, f.default)(t);
        return o.createElement(o.Fragment, null, n(function(e, n, i) {
            var a = i.key,
                s = e.transform,
                l = O(e, ["transform"]);
            return null != n && "" !== n ? o.createElement(u.animated.div, {
                key: a,
                style: h(I({}, l), {
                    overflow: "hidden"
                })
            }, o.createElement(u.animated.div, {
                style: {
                    transform: s
                }
            }, o.createElement(c.Text, {
                color: "text-danger",
                variant: "text-xs/normal"
            }, null != t && "" !== t ? t : r))) : null
        }))
    }
    var g = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && T(e, t)
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

        function c(e) {
            var t, n;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), m(E(t = l.call(this, e)), "hasError", function() {
                return null != t.props.error && !!(t.props.error.length > 0) || !1 !== t.state.dirty && (t.getIsUnderFlowing() || t.getIsOverFlowing())
            }), m(E(t), "getError", function() {
                var e = t.props,
                    n = e.error,
                    r = e.minLength,
                    o = e.maxLength,
                    i = t.getIsUnderFlowing() ? d.default.Messages.MINIMUM_LENGTH_ERROR.format({
                        minLength: r
                    }) : null,
                    a = t.getIsOverFlowing() ? d.default.Messages.MAXIMUM_LENGTH_ERROR.format({
                        maxLength: o
                    }) : null;
                return null != n && n.length < 1 || null === n ? null : null != n ? n : !1 === t.state.dirty ? null : null != i ? i : a
            }), m(E(t), "getIsUnderFlowing", function() {
                var e, n = t.props,
                    r = n.value,
                    o = n.minLength;
                return null != o && (null !== (e = null == r ? void 0 : r.length) && void 0 !== e ? e : 0) < o
            }), m(E(t), "getIsOverFlowing", function() {
                var e, n = t.props,
                    r = n.value,
                    o = n.maxLength;
                return null != o && (null !== (e = null == r ? void 0 : r.length) && void 0 !== e ? e : 0) > o
            }), m(E(t), "onChange", function(e) {
                var n, r;
                null === (n = (r = t.props).onChange) || void 0 === n || n.call(r, e.currentTarget.value, t.props.name), t.setState({
                    dirty: !0
                })
            }), m(E(t), "onFocus", function(e) {
                var n, r;
                null === (n = (r = t.props).onFocus) || void 0 === n || n.call(r, e, t.props.name)
            }), m(E(t), "onBlur", function(e) {
                var n, r;
                null === (n = (r = t.props).onBlur) || void 0 === n || n.call(r, e, t.props.name)
            }), t.state = {
                dirty: null !== (n = e.defaultDirty) && void 0 !== n && n
            }, t
        }
        return r = c, i = [{
            key: "render",
            value: function() {
                var e, t, n, r = this.props,
                    i = r.className,
                    u = r.inputClassName,
                    l = r.inputPrefix,
                    c = r.disabled,
                    f = r.size,
                    d = r.editable,
                    E = r.inputRef,
                    p = r.prefixElement,
                    y = r.focusProps,
                    T = O(r, ["className", "inputClassName", "inputPrefix", "disabled", "size", "editable", "inputRef", "prefixElement", "focusProps"]),
                    S = null !== (t = T["aria-labelledby"]) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId;
                return o.createElement("div", {
                    className: a()(_.inputWrapper, i)
                }, null != p && p, null != l ? o.createElement("span", {
                    className: _.inputPrefix
                }, l) : null, o.createElement(s.FocusRing, y, o.createElement("input", h(I({
                    className: a()(f, u, (m(n = {}, _.error, this.hasError()), m(n, _.disabled, c), m(n, _.editable, d), n)),
                    disabled: c,
                    readOnly: !1 === d || void 0
                }, T), {
                    "aria-labelledby": S,
                    onChange: this.onChange,
                    onBlur: this.onBlur,
                    onFocus: this.onFocus,
                    ref: E
                }))), o.createElement(v, {
                    error: this.getError()
                }))
            }
        }], p(r.prototype, i), u && p(r, u), c
    }(o.Component);
    m(g, "Sizes", S), m(g, "contextType", l.FormContext), m(g, "defaultProps", {
        name: "",
        size: S.DEFAULT,
        disabled: !1,
        type: "text",
        placeholder: "",
        autoFocus: !1,
        maxLength: 999
    })
}