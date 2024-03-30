function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Checkbox: function() {
            return R
        }
    });
    var r, o, i, a, u, s, l = n("470079"),
        c = n("803997"),
        f = n.n(c),
        d = n("512722"),
        _ = n.n(d),
        E = n("194926"),
        p = n("447515"),
        m = n("35628"),
        y = n("843317"),
        I = n("281767"),
        h = n("532721");

    function O(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function g(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                S(e, t, n[t])
            })
        }
        return e
    }

    function A(e, t) {
        return (A = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = i || (i = {})).DEFAULT = "default", r.INVERTED = "inverted", r.GHOST = "ghost", r.ROW = "row", (o = a || (a = {})).TOP = "top", o.CENTER = "center";
    var b = {
            BOX: h.box,
            ROUND: h.round,
            SMALL_BOX: h.smallBox
        },
        N = (S(u = {}, "top", h.alignTop), S(u, "center", h.alignCenter), u),
        R = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && A(e, t)
            }(u, e);
            var t, n, r, o, i, a = (t = u, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = v(t);
                if (n) {
                    var a = v(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : O(e)
            });

            function u() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), e = a.apply(this, arguments), S(O(e), "handleChange", function(t) {
                    var n = e.props.onChange;
                    null == n || n(t, t.currentTarget.checked)
                }), e
            }
            return r = u, o = [{
                key: "getInputMode",
                value: function() {
                    return this.props.disabled ? "disabled" : this.props.readOnly ? "readonly" : "default"
                }
            }, {
                key: "getStyle",
                value: function() {
                    var e, t = this.props,
                        n = t.value,
                        r = t.type,
                        o = t.color,
                        i = null !== (e = this.props.style) && void 0 !== e ? e : {};
                    if (!1 === n) return i;
                    if (i = g({}, i), o === p.default.unsafe_rawColors.BRAND_500.css) switch (r) {
                        case "default":
                            i.borderColor = "var(--control-brand-foreground)";
                            break;
                        case "ghost":
                            i.borderColor = "var(--brand-experiment-15a)", i.backgroundColor = "var(--brand-experiment-15a)";
                            break;
                        case "row":
                        case "inverted":
                            i.borderColor = "var(--brand-experiment-400)", i.backgroundColor = "var(--brand-experiment-500)"
                    } else switch (r) {
                        case "default":
                            i.borderColor = o;
                            break;
                        case "ghost":
                            if (o.startsWith("var(--")) {
                                var a = "".concat(o.slice(0, -1), "-hsl)");
                                i.borderColor = "rgba(".concat(a, ", 0.15)"), i.backgroundColor = "rgba(".concat(a, ", 0.15)")
                            } else _()((0, E.isValidHex)(o), "Checkbox: ".concat(o, " is not a valid hex color")), i.borderColor = (0, E.hex2rgb)(o, .15), i.backgroundColor = (0, E.hex2rgb)(o, .15);
                            break;
                        case "row":
                        case "inverted":
                            i.backgroundColor = o, i.borderColor = o
                    }
                    return i
                }
            }, {
                key: "getColor",
                value: function() {
                    var e = this.props,
                        t = e.value,
                        n = e.type,
                        r = e.color;
                    return t ? "inverted" === n || "row" === n ? p.default.unsafe_rawColors.WHITE_500.css : r : p.default.unsafe_rawColors.TRANSPARENT.css
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props,
                        n = t.disabled,
                        r = t.readOnly,
                        o = t.value,
                        i = t.shape,
                        a = t.align,
                        u = t.className,
                        s = t.innerClassName,
                        c = t.children,
                        d = t.size,
                        _ = t.reverse,
                        E = t.checkboxColor,
                        p = t.displayOnly,
                        O = t.type,
                        T = t.onClick,
                        v = null != c ? l.createElement("div", {
                            className: f()(h.label, n ? h.labelDisabled : h.labelClickable, _ ? h.labelReversed : h.labelForward),
                            style: {
                                lineHeight: "".concat(d, "px")
                            }
                        }, c) : null,
                        A = this.props.disabled ? h.inputDisabled : this.props.readOnly ? h.inputReadonly : h.inputDefault;
                    return l.createElement(p ? "span" : "label", {
                        className: f()(n ? h.checkboxWrapperDisabled : h.checkboxWrapper, N[void 0 === a ? "center" : a], u, (S(e = {}, h.row, "row" === O), S(e, h.checked, o), e))
                    }, _ ? v : null, !p && l.createElement(m.FocusRing, null, l.createElement("input", {
                        className: f()(s, A),
                        type: "checkbox",
                        onClick: T,
                        onChange: n || r ? I.NOOP : this.handleChange,
                        checked: o,
                        style: {
                            width: d,
                            height: d
                        }
                    })), l.createElement("div", {
                        className: f()(h.checkbox, i, S({}, h.checked, o)),
                        style: g({
                            width: d,
                            height: d,
                            borderColor: E
                        }, this.getStyle())
                    }, l.createElement(y.default, {
                        width: 18,
                        height: 18,
                        color: this.getColor(),
                        "aria-hidden": !0
                    })), _ ? null : v)
                }
            }], T(r.prototype, o), i && T(r, i), u
        }(l.PureComponent);
    S(R, "Types", i), S(R, "Shapes", b), S(R, "Aligns", a), S(R, "defaultProps", {
        size: 24,
        disabled: !1,
        readOnly: !1,
        displayOnly: !1,
        value: !1,
        type: "default",
        color: p.default.unsafe_rawColors.BRAND_500.css,
        shape: b.BOX,
        align: "center",
        onChange: I.NOOP,
        reverse: !1
    })
}