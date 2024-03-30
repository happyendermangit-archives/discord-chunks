function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Shine: function() {
            return A
        },
        ShineSizes: function() {
            return o
        }
    });
    var r, o, i, a, u, s = n("470079"),
        l = n("803997"),
        c = n.n(l),
        f = n("664183"),
        d = n("784184"),
        _ = n("436208"),
        E = n("143953"),
        p = n("819869");

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                y(e, t, n[t])
            })
        }
        return e
    }

    function O(e, t) {
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

    function T(e, t) {
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

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = o || (o = {})).DEFAULT = "default", r.SMALL = "small";
    var v = (y(i = {}, "default", p.shineDefault), y(i, "small", p.shineSmall), i),
        g = (y(a = {}, "default", p.shineInnerDefault), y(a, "small", p.shineInnerSmall), a),
        A = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && S(e, t)
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
                var e, r, o, i = I(t);
                if (n) {
                    var a = I(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function u() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), a.apply(this, arguments)
            }
            return r = u, o = [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.className,
                        n = e.shineSize,
                        r = e.shinePaused,
                        o = T(e, ["className", "shineSize", "shinePaused"]);
                    return s.createElement(f.default.div, O(h({}, o), {
                        className: c()(p.shineContainer, t, y({}, p.shinePaused, r))
                    }), s.createElement(E.default, {
                        align: E.default.Align.CENTER,
                        justify: E.default.Justify.CENTER,
                        className: v[n]
                    }, s.createElement("div", {
                        className: g[n]
                    })))
                }
            }], m(r.prototype, o), i && m(r, i), u
        }(s.PureComponent);
    y(A, "defaultProps", {
        shineSize: "default"
    });
    var b = function(e) {
        var t = e.children,
            n = e.className,
            r = e.disabled,
            o = e.submitting,
            i = e.pauseAnimation,
            a = e.shineSize,
            u = e.shinePaused,
            l = e.buttonShineClassName,
            f = e.onlyShineOnHover,
            E = T(e, ["children", "className", "disabled", "submitting", "pauseAnimation", "shineSize", "shinePaused", "buttonShineClassName", "onlyShineOnHover"]),
            m = s.createRef(),
            y = (0, _.default)(m),
            I = !r && !o && !0 !== i && (!f || y);
        return s.createElement(d.Button, O(h({
            buttonRef: m
        }, E), {
            className: c()(p.shinyButton, n),
            disabled: r,
            submitting: o
        }), t, I ? s.createElement(A, {
            shinePaused: u,
            className: c()(p.buttonShine, f ? p.onlyShineOnHover : void 0, l),
            shineSize: void 0 === a ? "default" : a
        }) : null)
    };
    b.ShineSizes = o, t.default = b
}