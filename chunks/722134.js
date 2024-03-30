function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("194926"),
        l = n("447515"),
        c = n("35628"),
        f = n("143953"),
        d = n("843317"),
        _ = n("281767"),
        E = n("476565"),
        p = n("794711");

    function m(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
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
    var S = u().memoize(function(e) {
            var t = !1;
            if (null != e && (0, s.isValidHex)(e)) {
                var n = (0, s.hex2int)(e);
                null != n && (t = .2 > (0, s.getDarkness)(n))
            }
            return t ? l.default.unsafe_rawColors.BLACK_500.css : l.default.unsafe_rawColors.WHITE_500.css
        }),
        v = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && T(e, t)
            }(v, e);
            var t, n, o, a, u, s = (t = v, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = h(t);
                if (n) {
                    var a = h(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : m(e)
            });

            function v() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, v), e = s.apply(this, arguments), I(m(e), "state", {
                    color: S(e.props.color)
                }), I(m(e), "handleKeyUp", function(t) {
                    if (t.which === _.KeyboardKeys.ENTER || t.which === _.KeyboardKeys.SPACE) {
                        var n = e.props;
                        (0, n.onClick)(O(n, ["onClick"]))
                    }
                }), I(m(e), "handleClick", function() {
                    var t = e.props;
                    (0, t.onClick)(O(t, ["onClick"]))
                }), e
            }
            return o = v, a = [{
                key: "render",
                value: function() {
                    var e, t = this.props,
                        n = t.selected,
                        o = t.color,
                        a = t.className,
                        u = t.children,
                        s = S(o);
                    return n ? e = {
                        color: s,
                        background: null != o ? o : l.default.unsafe_rawColors.BRAND_500.css
                    } : null != o && (e = {
                        color: o
                    }), r.createElement(c.FocusRing, {
                        offset: {
                            left: 4
                        }
                    }, r.createElement(f.default, {
                        className: i()(E.selectableItem, a, I({}, E.selected, n)),
                        onClick: this.handleClick,
                        onKeyUp: this.handleKeyUp,
                        align: f.default.Align.CENTER,
                        style: function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    I(e, t, n[t])
                                })
                            }
                            return e
                        }({}, e, this.props.style),
                        role: "button",
                        tabIndex: 0
                    }, r.createElement(f.default, {
                        align: f.default.Align.CENTER,
                        className: E.selectableItemLabel,
                        shrink: 1
                    }, u), n && r.createElement(f.default, {
                        wrap: f.default.Wrap.WRAP,
                        className: p.marginReset,
                        grow: 0,
                        shrink: 0
                    }, r.createElement(d.default, {
                        color: s
                    }))))
                }
            }], y(o.prototype, a), u && y(o, u), v
        }(r.PureComponent);
    t.default = v
}