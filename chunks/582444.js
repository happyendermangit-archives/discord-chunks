function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Tooltip: function() {
            return w
        },
        TooltipColors: function() {
            return o
        },
        TooltipContainer: function() {
            return k
        },
        TooltipLayer: function() {
            return P
        }
    });
    var r, o, i, a, u = n("470079"),
        s = n("803997"),
        l = n.n(s),
        c = n("699581"),
        f = n.n(c),
        d = n("718017"),
        _ = n("56300"),
        E = n("188104"),
        p = n("945816"),
        m = n("676250"),
        y = n("382764"),
        I = n("622780"),
        h = n("244749"),
        O = n("904478");

    function T(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function A(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                v(e, t, n[t])
            })
        }
        return e
    }

    function b(e, t) {
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

    function N(e, t) {
        return (N = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = o || (o = {})).PRIMARY = "primary", r.BLACK = "black", r.GREY = "grey", r.BRAND = "brand", r.GREEN = "green", r.YELLOW = "yellow", r.RED = "red", r.CUSTOM = "custom", r.PREMIUM = "premium";
    var R = Object.freeze({}),
        C = Object.freeze((v(i = {
            top: O.tooltipTop,
            bottom: O.tooltipBottom,
            left: O.tooltipLeft,
            right: O.tooltipRight,
            center: O.tooltipCenter,
            window_center: O.tooltipCenter
        }, "primary", O.tooltipPrimary), v(i, "black", O.tooltipBlack), v(i, "grey", O.tooltipGrey), v(i, "brand", O.tooltipBrand), v(i, "green", O.tooltipGreen), v(i, "yellow", O.tooltipYellow), v(i, "red", O.tooltipRed), v(i, "custom", null), v(i, "premium", O.tooltipPremium), i)),
        P = function(e) {
            var t = e.targetElementRef,
                n = e.align,
                r = void 0 === n ? "center" : n,
                o = e.position,
                i = e.color,
                a = e.children,
                s = e.onNonAccessibleClick,
                c = e.tooltipClassName,
                f = e.tooltipContentClassName,
                _ = e.spacing,
                E = e.animationStyle,
                p = e.disableTooltipPointerEvents,
                m = void 0 !== p && p,
                y = e.allowOverflow,
                I = void 0 !== y && y,
                T = "".concat("string" == typeof a ? a : "", ":").concat(o);
            return u.createElement(h.AppReferencePositionLayer, {
                disablePointerEvents: m,
                reference: t,
                position: o,
                autoInvert: !0,
                align: r,
                positionKey: T,
                spacing: void 0 === _ ? 8 : _,
                nudgeAlignIntoViewport: !0
            }, function(e) {
                var t, n, _, p, y, h, T = e.position,
                    S = e.nudge;
                return u.createElement(d.animated.div, {
                    onClick: s,
                    className: l()(O.tooltip, C[null != T ? T : o], C[i], v({}, O.tooltipDisablePointerEvents, m), c),
                    style: E
                }, u.createElement("div", {
                    className: O.tooltipPointer,
                    style: (t = null != T ? T : o, n = r, _ = S, p = "left" === t || "right" === t, y = "50%", h = _, n === (p ? "top" : "left") ? (y = "0%", h += 16) : n === (p ? "bottom" : "right") && (y = "100%", h -= 20), v({}, p ? "top" : "left", "calc(".concat(y, " + ").concat(h, "px)")))
                }), u.createElement("div", {
                    className: l()(O.tooltipContent, v({}, O.tooltipContentAllowOverflow, I), f)
                }, a))
            })
        },
        D = {
            scale: .95,
            opacity: 0
        },
        L = {
            scale: 1,
            opacity: 0
        },
        M = {
            scale: 1,
            opacity: 1
        },
        U = function(e) {
            var t = e.isVisible,
                n = e.onAnimationRest,
                r = e.targetElementRef,
                o = b(e, ["isVisible", "onAnimationRest", "targetElementRef"]),
                i = u.useContext(m.AccessibilityPreferencesContext).reducedMotion;
            return (0, d.useTransition)(t, {
                keys: function(e) {
                    return e ? "tooltip" : "empty"
                },
                config: y.TOOLTIP_SPRING_CONFIG,
                from: i.enabled ? L : D,
                enter: M,
                leave: i.enabled ? L : D,
                onRest: n
            })(function(e, t) {
                return t ? u.createElement(P, A({
                    animationStyle: e,
                    targetElementRef: r
                }, o)) : null
            })
        },
        w = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && N(e, t)
            }(s, e);
            var t, n, r, o, i, a = (t = s, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = g(t);
                if (n) {
                    var a = g(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : T(e)
            });

            function s() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), e = a.apply(this, arguments), v(T(e), "showTimeout", new p.Timeout), v(T(e), "domElementRef", u.createRef()), v(T(e), "hasDomElement", !1), v(T(e), "state", {
                    shouldShowTooltip: !1
                }), v(T(e), "handleMouseEnter", function() {
                    !((_.isMobile || _.isTablet) && !0 === e.props.clickableOnMobile) && e.show()
                }), v(T(e), "handleMouseLeave", function() {
                    !((_.isMobile || _.isTablet) && !0 === e.props.clickableOnMobile) && e.hide()
                }), v(T(e), "handleFocus", function() {
                    I.default.keyboardModeEnabled && e.show()
                }), v(T(e), "handleBlur", function() {
                    e.hide()
                }), v(T(e), "handleClick", function() {
                    var t = e.hasDomElement;
                    t && e.props.hideOnClick ? e.hide() : !t && (_.isMobile || _.isTablet) && !0 === e.props.clickableOnMobile && e.show()
                }), v(T(e), "handleContextMenu", function() {
                    e.hide()
                }), e
            }
            return r = s, o = [{
                key: "componentDidMount",
                value: function() {
                    this.shouldShowTooltip(this.props, this.state) && this.setDomElement()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    var n = this.shouldShowTooltip(this.props, this.state);
                    n !== this.shouldShowTooltip(e, t) && (n ? this.setDomElement() : this.hasDomElement = !1)
                }
            }, {
                key: "setDomElement",
                value: function() {
                    var e = f().findDOMNode(this);
                    if (!(0, E.isElement)(e)) throw Error("Tooltip cannot find DOM node");
                    this.domElementRef.current = e, this.hasDomElement = !0, this.forceUpdate()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.showTimeout.stop(), this.domElementRef.current = null
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props,
                        n = t.children,
                        r = t.text,
                        o = t["aria-label"];
                    if (null == r) return n(R);
                    "string" == typeof o ? e = o : "string" == typeof r && !1 !== o && (e = r);
                    var i = {
                        onClick: this.handleClick,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        onContextMenu: this.handleContextMenu,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur
                    };
                    return null != e && (i["aria-label"] = e), u.createElement(u.Fragment, null, n(i), this.renderTooltip())
                }
            }, {
                key: "shouldShowTooltip",
                value: function(e, t) {
                    return e.shouldShow && (t.shouldShowTooltip || e.forceOpen)
                }
            }, {
                key: "renderTooltip",
                value: function() {
                    var e, t, n = this.props,
                        r = n.text,
                        o = n.align,
                        i = n.position,
                        a = n.color,
                        s = n.spacing,
                        l = n.tooltipClassName,
                        c = n.tooltipContentClassName,
                        f = n.disableTooltipPointerEvents,
                        d = n.onAnimationRest,
                        E = n.allowOverflow,
                        p = n.clickableOnMobile,
                        m = n.hideOnClick,
                        y = (_.isMobile || _.isTablet) && !0 === p && m,
                        I = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement,
                        h = null;
                    if (e = r, null != (t = Function) && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t) h = I ? r() : null;
                    else h = r;
                    return u.createElement(U, {
                        disableTooltipPointerEvents: !1 !== f && !y || !0 === f,
                        targetElementRef: this.domElementRef,
                        tooltipClassName: l,
                        tooltipContentClassName: c,
                        align: o,
                        position: i,
                        color: a,
                        spacing: s,
                        isVisible: I,
                        onAnimationRest: d,
                        onNonAccessibleClick: y ? this.handleClick : void 0,
                        allowOverflow: E
                    }, h)
                }
            }, {
                key: "show",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.delay;
                    if (t.overflowOnly) {
                        var r = f().findDOMNode(this);
                        if (null == r || (0, E.isElement)(r, HTMLElement) && r.offsetWidth >= r.scrollWidth) return
                    }
                    null != n ? this.showTimeout.start(n, function() {
                        return e.toggleShow(!0)
                    }, !1) : this.toggleShow(!0)
                }
            }, {
                key: "hide",
                value: function() {
                    this.showTimeout.stop(), this.toggleShow(!1)
                }
            }, {
                key: "toggleShow",
                value: function(e) {
                    var t, n, r, o, i = this;
                    this.state.shouldShowTooltip !== e && (e ? null === (t = (n = this.props).onTooltipShow) || void 0 === t || t.call(n) : null === (r = (o = this.props).onTooltipHide) || void 0 === r || r.call(o), f().flushSync(function() {
                        i.setState({
                            shouldShowTooltip: e
                        })
                    }))
                }
            }], i = [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return t.shouldShowTooltip && null == e.text ? {
                        shouldShowTooltip: !1
                    } : null
                }
            }], o && S(r.prototype, o), i && S(r, i), s
        }(u.Component);
    v(w, "Colors", o), v(w, "defaultProps", {
        hideOnClick: !0,
        position: "top",
        color: "primary",
        forceOpen: !1,
        spacing: 8,
        shouldShow: !0,
        allowOverflow: !1,
        overflowOnly: !1
    });
    var k = function(e) {
        var t = e.children,
            n = e.className,
            r = e.element,
            o = void 0 === r ? "div" : r,
            i = b(e, ["children", "className", "element"]);
        return u.createElement(w, i, function(e) {
            var r, i;
            return u.createElement(o, null != n ? (r = A({}, e), i = (i = {
                className: n
            }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(i)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
            }), r) : e, t)
        })
    }
}