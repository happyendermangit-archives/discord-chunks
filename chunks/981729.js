function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Tooltip: function() {
            return v
        },
        TooltipColors: function() {
            return i
        },
        TooltipContainer: function() {
            return M
        },
        TooltipLayer: function() {
            return R
        }
    }), n("411104"), n("47120");
    var i, r, s, a = n("735250"),
        o = n("470079"),
        l = n("120356"),
        u = n.n(l),
        d = n("699581"),
        _ = n.n(d),
        c = n("513715"),
        E = n("873546"),
        I = n("374470"),
        T = n("846519"),
        f = n("186325"),
        S = n("426945"),
        h = n("607070"),
        A = n("153850"),
        m = n("816809");

    function N(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(s = i || (i = {})).PRIMARY = "primary", s.BLACK = "black", s.GREY = "grey", s.BRAND = "brand", s.GREEN = "green", s.YELLOW = "yellow", s.RED = "red", s.CUSTOM = "custom", s.PREMIUM = "premium";
    let p = Object.freeze({}),
        O = Object.freeze({
            top: m.tooltipTop,
            bottom: m.tooltipBottom,
            left: m.tooltipLeft,
            right: m.tooltipRight,
            center: m.tooltipCenter,
            window_center: m.tooltipCenter,
            primary: m.tooltipPrimary,
            black: m.tooltipBlack,
            grey: m.tooltipGrey,
            brand: m.tooltipBrand,
            green: m.tooltipGreen,
            yellow: m.tooltipYellow,
            red: m.tooltipRed,
            custom: null,
            premium: m.tooltipPremium
        }),
        R = e => {
            let {
                targetElementRef: t,
                align: n = "center",
                position: i,
                color: r,
                children: s,
                onNonAccessibleClick: o,
                tooltipClassName: l,
                tooltipContentClassName: d,
                spacing: _ = 8,
                animationStyle: E,
                disableTooltipPointerEvents: I = !1,
                allowOverflow: T = !1
            } = e, f = "".concat("string" == typeof s ? s : "", ":").concat(i);
            return (0, a.jsx)(A.AppReferencePositionLayer, {
                disablePointerEvents: I,
                targetRef: t,
                position: i,
                autoInvert: !0,
                align: n,
                positionKey: f,
                spacing: _,
                nudgeAlignIntoViewport: !0,
                children: e => {
                    let {
                        position: t,
                        nudge: _
                    } = e;
                    return (0, a.jsxs)(c.animated.div, {
                        onClick: o,
                        className: u()(m.tooltip, O[null != t ? t : i], O[r], {
                            [m.tooltipDisablePointerEvents]: I
                        }, l),
                        style: E,
                        children: [(0, a.jsx)("div", {
                            className: m.tooltipPointer,
                            style: function(e, t, n) {
                                let i = "left" === e || "right" === e,
                                    r = "50%",
                                    s = n;
                                return t === (i ? "top" : "left") ? (r = "0%", s += 16) : t === (i ? "bottom" : "right") && (r = "100%", s -= 20), {
                                    [i ? "top" : "left"]: "calc(".concat(r, " + ").concat(s, "px)")
                                }
                            }(null != t ? t : i, n, _)
                        }), (0, a.jsx)("div", {
                            className: u()(m.tooltipContent, {
                                [m.tooltipContentAllowOverflow]: T
                            }, d),
                            children: s
                        })]
                    })
                }
            })
        },
        C = {
            scale: .95,
            opacity: 0
        },
        g = {
            scale: 1,
            opacity: 0
        },
        L = {
            scale: 1,
            opacity: 1
        },
        D = e => {
            let {
                isVisible: t,
                onAnimationRest: n,
                targetElementRef: i,
                ...r
            } = e, {
                reducedMotion: s
            } = o.useContext(f.AccessibilityPreferencesContext);
            return (0, c.useTransition)(t, {
                keys: e => e ? "tooltip" : "empty",
                config: S.TOOLTIP_SPRING_CONFIG,
                from: s.enabled ? g : C,
                enter: L,
                leave: s.enabled ? g : C,
                onRest: n
            })((e, t) => t ? (0, a.jsx)(R, {
                animationStyle: e,
                targetElementRef: i,
                ...r
            }) : null)
        };
    class v extends(r = o.Component) {
        static getDerivedStateFromProps(e, t) {
            return t.shouldShowTooltip && null == e.text ? {
                shouldShowTooltip: !1
            } : null
        }
        componentDidMount() {
            this.shouldShowTooltip(this.props, this.state) && this.setDomElement()
        }
        componentDidUpdate(e, t) {
            let n = this.shouldShowTooltip(this.props, this.state);
            n !== this.shouldShowTooltip(e, t) && (n ? this.setDomElement() : this.hasDomElement = !1)
        }
        setDomElement() {
            let e = _().findDOMNode(this);
            if (!(0, I.isElement)(e)) throw Error("Tooltip cannot find DOM node");
            this.domElementRef.current = e, this.hasDomElement = !0, this.forceUpdate()
        }
        componentWillUnmount() {
            this.showTimeout.stop(), this.domElementRef.current = null
        }
        render() {
            let e;
            let {
                children: t,
                text: n,
                "aria-label": i
            } = this.props;
            if (null == n) return t(p);
            "string" == typeof i ? e = i : "string" == typeof n && !1 !== i && (e = n);
            let r = {
                onClick: this.handleClick,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                onContextMenu: this.handleContextMenu,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur
            };
            return null != e && (r["aria-label"] = e), (0, a.jsxs)(o.Fragment, {
                children: [t(r), this.renderTooltip()]
            })
        }
        shouldShowTooltip(e, t) {
            return e.shouldShow && (t.shouldShowTooltip || e.forceOpen)
        }
        renderTooltip() {
            let {
                text: e,
                align: t,
                position: n,
                color: i,
                spacing: r,
                tooltipClassName: s,
                tooltipContentClassName: o,
                disableTooltipPointerEvents: l,
                onAnimationRest: u,
                allowOverflow: d,
                clickableOnMobile: _,
                hideOnClick: c
            } = this.props, I = (E.isMobile || E.isTablet) && !0 === _ && c, T = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement, f = null;
            return f = e instanceof Function ? T ? e() : null : e, (0, a.jsx)(D, {
                disableTooltipPointerEvents: !1 !== l && !I || !0 === l,
                targetElementRef: this.domElementRef,
                tooltipClassName: s,
                tooltipContentClassName: o,
                align: t,
                position: n,
                color: i,
                spacing: r,
                isVisible: T,
                onAnimationRest: u,
                onNonAccessibleClick: I ? this.handleClick : void 0,
                allowOverflow: d,
                children: f
            })
        }
        show() {
            let {
                delay: e,
                overflowOnly: t
            } = this.props;
            if (t) {
                let e = _().findDOMNode(this);
                if (null == e || (0, I.isElement)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return
            }
            null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0)
        }
        hide() {
            this.showTimeout.stop(), this.toggleShow(!1)
        }
        toggleShow(e) {
            if (this.state.shouldShowTooltip !== e) {
                var t, n, i, r;
                e ? null === (t = (n = this.props).onTooltipShow) || void 0 === t || t.call(n) : null === (i = (r = this.props).onTooltipHide) || void 0 === i || i.call(r), _().flushSync(() => {
                    this.setState({
                        shouldShowTooltip: e
                    })
                })
            }
        }
        constructor(...e) {
            super(...e), N(this, "showTimeout", new T.Timeout), N(this, "domElementRef", o.createRef()), N(this, "hasDomElement", !1), N(this, "state", {
                shouldShowTooltip: !1
            }), N(this, "handleMouseEnter", () => {
                !((E.isMobile || E.isTablet) && !0 === this.props.clickableOnMobile) && this.show()
            }), N(this, "handleMouseLeave", () => {
                !((E.isMobile || E.isTablet) && !0 === this.props.clickableOnMobile) && this.hide()
            }), N(this, "handleFocus", () => {
                h.default.keyboardModeEnabled && this.show()
            }), N(this, "handleBlur", () => {
                this.hide()
            }), N(this, "handleClick", () => {
                let e = this.hasDomElement;
                e && this.props.hideOnClick ? this.hide() : !e && (E.isMobile || E.isTablet) && !0 === this.props.clickableOnMobile && this.show()
            }), N(this, "handleContextMenu", () => {
                this.hide()
            })
        }
    }
    N(v, "Colors", i), N(v, "defaultProps", {
        hideOnClick: !0,
        position: "top",
        color: "primary",
        forceOpen: !1,
        spacing: 8,
        shouldShow: !0,
        allowOverflow: !1,
        overflowOnly: !1
    });
    let M = e => {
        let {
            children: t,
            className: n,
            element: i = "div",
            ...r
        } = e;
        return (0, a.jsx)(v, {
            ...r,
            children: e => o.createElement(i, null != n ? {
                ...e,
                className: n
            } : e, t)
        })
    }
}