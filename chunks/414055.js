function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TooltipColors: function() {
            return i
        },
        TooltipLayer: function() {
            return I
        },
        Tooltip: function() {
            return R
        },
        TooltipContainer: function() {
            return O
        }
    }), n("70102"), n("222007");
    var i, s, r = n("37983"),
        a = n("884691"),
        o = n("414456"),
        l = n.n(o),
        u = n("817736"),
        d = n.n(u),
        c = n("907002"),
        f = n("394846"),
        _ = n("118810"),
        E = n("862337"),
        h = n("413197"),
        g = n("120590"),
        m = n("206230"),
        p = n("983782"),
        S = n("207758");
    (s = i || (i = {})).PRIMARY = "primary", s.BLACK = "black", s.GREY = "grey", s.BRAND = "brand", s.GREEN = "green", s.YELLOW = "yellow", s.RED = "red", s.CUSTOM = "custom", s.PREMIUM = "premium";
    let v = Object.freeze({}),
        T = Object.freeze({
            top: S.tooltipTop,
            bottom: S.tooltipBottom,
            left: S.tooltipLeft,
            right: S.tooltipRight,
            center: S.tooltipCenter,
            window_center: S.tooltipCenter,
            primary: S.tooltipPrimary,
            black: S.tooltipBlack,
            grey: S.tooltipGrey,
            brand: S.tooltipBrand,
            green: S.tooltipGreen,
            yellow: S.tooltipYellow,
            red: S.tooltipRed,
            custom: null,
            premium: S.tooltipPremium
        }),
        I = e => {
            let {
                targetElementRef: t,
                align: n = "center",
                position: i,
                color: s,
                children: a,
                onNonAccessibleClick: o,
                tooltipClassName: u,
                tooltipContentClassName: d,
                spacing: f = 8,
                animationStyle: _,
                disableTooltipPointerEvents: E = !1,
                allowOverflow: h = !1
            } = e, g = "".concat("string" == typeof a ? a : "", ":").concat(i);
            return (0, r.jsx)(p.AppReferencePositionLayer, {
                disablePointerEvents: E,
                reference: t,
                position: i,
                autoInvert: !0,
                align: n,
                positionKey: g,
                spacing: f,
                nudgeAlignIntoViewport: !0,
                children: e => {
                    let {
                        position: t,
                        nudge: f
                    } = e;
                    return (0, r.jsxs)(c.animated.div, {
                        onClick: o,
                        className: l(S.tooltip, T[null != t ? t : i], T[s], {
                            [S.tooltipDisablePointerEvents]: E
                        }, u),
                        style: _,
                        children: [(0, r.jsx)("div", {
                            className: S.tooltipPointer,
                            style: function(e, t, n) {
                                let i = "left" === e || "right" === e,
                                    s = "50%",
                                    r = n;
                                return t === (i ? "top" : "left") ? (s = "0%", r += 16) : t === (i ? "bottom" : "right") && (s = "100%", r -= 20), {
                                    [i ? "top" : "left"]: "calc(".concat(s, " + ").concat(r, "px)")
                                }
                            }(null != t ? t : i, n, f)
                        }), (0, r.jsx)("div", {
                            className: l(S.tooltipContent, {
                                [S.tooltipContentAllowOverflow]: h
                            }, d),
                            children: a
                        })]
                    })
                }
            })
        },
        C = {
            scale: .95,
            opacity: 0
        },
        A = {
            scale: 1,
            opacity: 0
        },
        y = {
            scale: 1,
            opacity: 1
        },
        N = e => {
            let {
                isVisible: t,
                onAnimationRest: n,
                targetElementRef: i,
                ...s
            } = e, {
                reducedMotion: o
            } = a.useContext(h.AccessibilityPreferencesContext), l = (0, c.useTransition)(t, {
                keys: e => e ? "tooltip" : "empty",
                config: g.TOOLTIP_SPRING_CONFIG,
                from: o.enabled ? A : C,
                enter: y,
                leave: o.enabled ? A : C,
                onRest: n
            });
            return l((e, t) => t ? (0, r.jsx)(I, {
                animationStyle: e,
                targetElementRef: i,
                ...s
            }) : null)
        };
    class R extends a.Component {
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
            let e = d.findDOMNode(this);
            if (!(0, _.isElement)(e)) throw Error("Tooltip cannot find DOM node");
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
            if (null == n) return t(v);
            "string" == typeof i ? e = i : "string" == typeof n && !1 !== i && (e = n);
            let s = {
                onClick: this.handleClick,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                onContextMenu: this.handleContextMenu,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur
            };
            return null != e && (s["aria-label"] = e), (0, r.jsxs)(a.Fragment, {
                children: [t(s), this.renderTooltip()]
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
                spacing: s,
                tooltipClassName: a,
                tooltipContentClassName: o,
                disableTooltipPointerEvents: l,
                onAnimationRest: u,
                allowOverflow: d,
                clickableOnMobile: c,
                hideOnClick: _
            } = this.props, E = (f.isMobile || f.isTablet) && !0 === c && _, h = this.shouldShowTooltip(this.props, this.state) && this.hasDomElement, g = null;
            return g = e instanceof Function ? h ? e() : null : e, (0, r.jsx)(N, {
                disableTooltipPointerEvents: !1 !== l && !E || !0 === l,
                targetElementRef: this.domElementRef,
                tooltipClassName: a,
                tooltipContentClassName: o,
                align: t,
                position: n,
                color: i,
                spacing: s,
                isVisible: h,
                onAnimationRest: u,
                onNonAccessibleClick: E ? this.handleClick : void 0,
                allowOverflow: d,
                children: g
            })
        }
        show() {
            let {
                delay: e,
                overflowOnly: t
            } = this.props;
            if (t) {
                let e = d.findDOMNode(this);
                if (null == e || (0, _.isElement)(e, HTMLElement) && e.offsetWidth >= e.scrollWidth) return
            }
            null != e ? this.showTimeout.start(e, () => this.toggleShow(!0), !1) : this.toggleShow(!0)
        }
        hide() {
            this.showTimeout.stop(), this.toggleShow(!1)
        }
        toggleShow(e) {
            if (this.state.shouldShowTooltip !== e) {
                if (e) {
                    var t, n;
                    null === (t = (n = this.props).onTooltipShow) || void 0 === t || t.call(n)
                }
                d.flushSync(() => {
                    this.setState({
                        shouldShowTooltip: e
                    })
                })
            }
        }
        constructor(...e) {
            super(...e), this.showTimeout = new E.Timeout, this.domElementRef = a.createRef(), this.hasDomElement = !1, this.state = {
                shouldShowTooltip: !1
            }, this.handleMouseEnter = () => {
                !((f.isMobile || f.isTablet) && !0 === this.props.clickableOnMobile) && this.show()
            }, this.handleMouseLeave = () => {
                !((f.isMobile || f.isTablet) && !0 === this.props.clickableOnMobile) && this.hide()
            }, this.handleFocus = () => {
                m.default.keyboardModeEnabled && this.show()
            }, this.handleBlur = () => {
                this.hide()
            }, this.handleClick = () => {
                let e = this.hasDomElement;
                e && this.props.hideOnClick ? this.hide() : !e && (f.isMobile || f.isTablet) && !0 === this.props.clickableOnMobile && this.show()
            }, this.handleContextMenu = () => {
                this.hide()
            }
        }
    }
    R.Colors = i, R.defaultProps = {
        hideOnClick: !0,
        position: "top",
        color: "primary",
        forceOpen: !1,
        spacing: 8,
        shouldShow: !0,
        allowOverflow: !1,
        overflowOnly: !1
    };
    let O = e => {
        let {
            children: t,
            className: n,
            element: i = "div",
            ...s
        } = e;
        return (0, r.jsx)(R, {
            ...s,
            children: e => a.createElement(i, null != n ? {
                ...e,
                className: n
            } : e, t)
        })
    }
}