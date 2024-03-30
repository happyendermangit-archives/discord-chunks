function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BlobMask: function() {
            return M
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("96355"),
        l = n("47759"),
        c = n.n(l),
        f = n("718017"),
        d = n("153832"),
        _ = n("504523"),
        E = n("945816"),
        p = n("467645"),
        m = n("608675");

    function y(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function I(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function O(e, t, n) {
        return t && h(e.prototype, t), n && h(e, n), e
    }

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function S(e) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function v(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && g(e, t)
    }

    function g(e, t) {
        return (g = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function A(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = S(e);
            if (t) {
                var a = S(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : y(n)
        }
    }
    var b = {
            friction: 13,
            tension: 240,
            duration: 150
        },
        N = {
            duration: 150,
            friction: 3
        },
        R = {
            friction: 30,
            tension: 900,
            mass: 1
        },
        C = {
            duration: 150,
            friction: 10,
            tension: 100,
            mass: 1
        },
        P = (null === (r = window.SVGPathElement) || void 0 === r ? void 0 : r.prototype.getTotalLength) != null ? (0, s.interpolate)("M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z", "M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z", {
            maxSegmentLength: 1.5
        }) : function(e) {
            return "".concat(e)
        },
        D = function(e) {
            v(n, e);
            var t = A(n);

            function n() {
                var e;
                return I(this, n), e = t.apply(this, arguments), T(y(e), "timeoutId", void 0), e
            }
            return O(n, [{
                key: "componentDidMount",
                value: function() {
                    this.forceUpdate()
                }
            }, {
                key: "componentWillAppear",
                value: function(e) {
                    e()
                }
            }, {
                key: "componentWillEnter",
                value: function(e) {
                    e()
                }
            }, {
                key: "componentWillLeave",
                value: function(e) {
                    this.timeoutId = setTimeout(e, 300)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    clearTimeout(this.timeoutId)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        n = e.className,
                        r = e.animatedStyle;
                    return i.createElement(f.animated.div, {
                        className: n,
                        style: r
                    }, t)
                }
            }]), n
        }(i.Component);

    function L(e) {
        var t = e.selected,
            n = e.upperBadge,
            r = e.lowerBadge,
            o = e.highlight;
        return t || null != n || null != r || !!o
    }
    var M = function(e) {
        v(n, e);
        var t = A(n);

        function n() {
            var e;
            return I(this, n), e = t.apply(this, arguments), T(y(e), "timeout", new E.Timeout), T(y(e), "state", {
                renderComplex: !1,
                hasRenderedBadge: !1,
                maskId: (0, d.v4)(),
                focused: !1
            }), T(y(e), "handleTimeout", function() {
                e.timeout.stop(), e.setState({
                    renderComplex: !1
                })
            }), T(y(e), "handleFocus", function() {
                e.setState({
                    focused: !0
                })
            }), T(y(e), "handleBlur", function() {
                e.setState({
                    focused: !1
                })
            }), e
        }
        return O(n, [{
            key: "componentDidMount",
            value: function() {
                var e = this.props,
                    t = e.selected,
                    n = e.lowerBadge,
                    r = e.upperBadge,
                    o = this.state,
                    i = o.borderRadiusMask,
                    a = o.lowerBadgeMask,
                    u = o.upperBadgeMask;
                null == i || i.update({
                    spring: t ? 1 : 0,
                    immediate: !0
                }).start(), null == a || a.update({
                    spring: null != n ? 1 : 0,
                    immediate: !0
                }).start(), null == u || u.update({
                    spring: null != r ? 1 : 0,
                    immediate: !0
                }).start()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                var e = this.state,
                    t = e.borderRadiusMask,
                    n = e.lowerBadgeMask,
                    r = e.upperBadgeMask;
                this.timeout.stop(), null == t || t.dispose(), null == n || n.dispose(), null == r || r.dispose()
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                var t = this.props,
                    n = t.selected,
                    r = t.lowerBadge,
                    o = t.upperBadge,
                    i = this.state,
                    a = i.borderRadiusMask,
                    u = i.lowerBadgeMask,
                    s = i.upperBadgeMask,
                    l = i.renderComplex;
                n && !e.selected ? null == a || a.update({
                    spring: 1,
                    immediate: !1,
                    config: b
                }).start() : !n && e.selected && (null == a || a.update({
                    spring: 0,
                    immediate: !1,
                    config: N
                }).start()), null != r && null == e.lowerBadge ? null == u || u.update({
                    spring: 1,
                    immediate: !document.hasFocus(),
                    config: R
                }).start() : null == r && null != e.lowerBadge && (null == u || u.update({
                    spring: 0,
                    immediate: !document.hasFocus(),
                    config: C
                }).start()), null != o && null == e.upperBadge ? null == s || s.update({
                    spring: 1,
                    immediate: !document.hasFocus(),
                    config: R
                }).start() : null == o && null != e.upperBadge && (null == s || s.update({
                    spring: 0,
                    immediate: !document.hasFocus(),
                    config: C
                }).start()), !l || L(this.props) || this.timeout.isStarted() ? L(this.props) && this.timeout.isStarted() && this.timeout.stop() : this.timeout.start(c()(108e5, 18e6), this.handleTimeout)
            }
        }, {
            key: "getBadgePositionInterpolation",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                if (null != e) return e.springs.spring.to([0, 1], [20, 0]).to(function(e) {
                    return "translate(".concat(e, " ").concat(e * t, ")")
                })
            }
        }, {
            key: "getLowerBadgeStyles",
            value: function() {
                var e = this.state.lowerBadgeMask;
                if (null != e) {
                    var t = e.springs.spring;
                    return {
                        opacity: t.to([0, .5, 1], [0, 0, 1]),
                        transform: t.to(function(e) {
                            return "translate(".concat(16 - 16 * e, "px, ").concat(16 - 16 * e, "px)")
                        })
                    }
                }
            }
        }, {
            key: "getUpperBadgeStyles",
            value: function() {
                var e = this.state.upperBadgeMask;
                if (null != e) {
                    var t = e.springs.spring;
                    return {
                        opacity: t.to([0, .5, 1], [0, 0, 1]),
                        transform: t.to(function(e) {
                            return "translate(".concat(16 - 16 * e, "px, ").concat(-1 * (16 - 16 * e), "px)")
                        })
                    }
                }
            }
        }, {
            key: "getPathInterpolation",
            value: function() {
                var e;
                return null === (e = this.state.borderRadiusMask) || void 0 === e ? void 0 : e.springs.spring.to(P)
            }
        }, {
            key: "render",
            value: function() {
                var e, t = this.props,
                    n = t.children,
                    r = t.className,
                    o = t.innerClassName,
                    a = t.lowerBadge,
                    s = t.lowerBadgeWidth,
                    l = t.style,
                    c = t.upperBadge,
                    d = t.highlight,
                    E = this.state,
                    y = E.maskId,
                    I = E.lowerBadgeMask,
                    h = E.upperBadgeMask,
                    O = E.focused,
                    S = E.hasRenderedBadge;
                if (!E.renderComplex) return i.createElement("div", {
                    key: "wrapper",
                    className: u()(r, (T(e = {}, m.wrapperSimple, !0), T(e, m.simpleFocused, O), e)),
                    style: l,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur
                }, i.createElement("svg", {
                    key: "svg",
                    width: 48,
                    height: 48,
                    viewBox: "0 0 ".concat(48, " ").concat(48),
                    className: m.svg,
                    overflow: "visible"
                }, i.createElement("foreignObject", {
                    key: "foreign-object",
                    x: 0,
                    y: 0,
                    className: o,
                    width: 48,
                    height: 48
                }, n)));
                var v = "".concat(y, "-upper_badge_masks"),
                    g = "".concat(y, "-lower_badge_masks"),
                    A = "".concat(y, "-blob_mask"),
                    b = "".concat(y, "-stroke_mask"),
                    N = "".concat(y, "-highlight_mask");
                return i.createElement("div", {
                    key: "wrapper",
                    className: u()(r, m.wrapper),
                    style: l,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur
                }, i.createElement("svg", {
                    key: "svg",
                    width: 48,
                    height: 48,
                    viewBox: "0 0 ".concat(48, " ").concat(48),
                    className: u()(m.svg, T({}, m.noContain, d)),
                    overflow: "visible"
                }, i.createElement("defs", null, d && i.createElement(f.animated.path, {
                    d: this.getPathInterpolation(),
                    id: N
                }), i.createElement(f.animated.path, {
                    d: this.getPathInterpolation(),
                    id: A
                }), S ? i.createElement(f.animated.rect, {
                    id: v,
                    x: 28,
                    y: -4,
                    width: 24,
                    height: 24,
                    rx: 12,
                    ry: 12,
                    transform: this.getBadgePositionInterpolation(h, -1)
                }) : null, S ? i.createElement(f.animated.rect, {
                    id: g,
                    x: 48 - (s + 8) + 4,
                    y: 28,
                    width: s + 8,
                    height: 24,
                    rx: 12,
                    ry: 12,
                    transform: this.getBadgePositionInterpolation(I)
                }) : null), i.createElement("mask", {
                    id: y,
                    fill: "black",
                    x: 0,
                    y: 0,
                    width: 48,
                    height: 48
                }, d && i.createElement("use", {
                    href: "#".concat(N),
                    fill: "black"
                }), i.createElement("use", {
                    href: "#".concat(A),
                    fill: "white",
                    className: u()(T({}, m.isHighlighted, d))
                }), S ? i.createElement(i.Fragment, null, i.createElement("use", {
                    href: "#".concat(v),
                    fill: "black"
                }), i.createElement("use", {
                    href: "#".concat(g),
                    fill: "black"
                })) : null), S ? i.createElement("mask", {
                    id: b
                }, i.createElement("rect", {
                    width: "150%",
                    height: "150%",
                    x: "-25%",
                    y: "-25%",
                    fill: "white"
                }), i.createElement("use", {
                    href: "#".concat(v),
                    fill: "black"
                }), i.createElement("use", {
                    href: "#".concat(g),
                    fill: "black"
                })) : null, O ? i.createElement(i.Fragment, null, i.createElement("g", {
                    className: m.focusStroke,
                    mask: "url(#".concat(b, ")")
                }, i.createElement("use", {
                    href: "#".concat(A)
                })), i.createElement("g", {
                    className: m.focusFill
                }, null != c ? i.createElement("use", {
                    href: "#".concat(v)
                }) : null, null != a ? i.createElement("use", {
                    href: "#".concat(g)
                }) : null)) : null, d && i.createElement(f.animated.path, {
                    d: this.getPathInterpolation(),
                    stroke: _.default.BRAND_500,
                    "stroke-width": 2,
                    className: m.highlight,
                    mask: "url(#".concat(b, ")")
                }), i.createElement("foreignObject", {
                    key: "foreign-object",
                    mask: "url(#".concat(y, ")"),
                    x: 0,
                    y: 0,
                    className: o,
                    width: 48,
                    height: 48
                }, n)), i.createElement(p.TransitionGroup, {
                    component: i.Fragment
                }, null != a ? i.createElement(D, {
                    key: "lower-badge",
                    className: m.lowerBadge,
                    animatedStyle: this.getLowerBadgeStyles()
                }, a) : null, null != c ? i.createElement(D, {
                    key: "upper-badge",
                    className: m.upperBadge,
                    animatedStyle: this.getUpperBadgeStyles()
                }, c) : null))
            }
        }], [{
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                var n = t.hasRenderedBadge,
                    r = t.upperBadgeMask,
                    o = t.lowerBadgeMask,
                    i = t.borderRadiusMask,
                    a = t.renderComplex,
                    u = e.upperBadge,
                    s = e.lowerBadge,
                    l = !1;
                return (null != u && null == r || null != s && null == o) && (l = !0, n = !0, r = new f.Controller({
                    spring: 0
                }), o = new f.Controller({
                    spring: 0
                })), L(e) && null == i && (l = !0, i = new f.Controller({
                    spring: 0
                })), !a && L(e) && (l = !0, a = !0), l ? {
                    hasRenderedBadge: n,
                    lowerBadgeMask: o,
                    upperBadgeMask: r,
                    borderRadiusMask: i,
                    renderComplex: a
                } : null
            }
        }]), n
    }(i.Component);
    T(M, "defaultProps", {
        selected: !1,
        lowerBadgeWidth: 16,
        highlight: !1
    })
}