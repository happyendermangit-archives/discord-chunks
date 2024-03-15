function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        referencePortalAwareContains: function() {
            return p
        },
        ReferencePositionLayer: function() {
            return I
        }
    }), n("222007"), n("70102");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("627445"),
        l = n.n(o),
        u = n("718776"),
        d = n("36763"),
        c = n("659500"),
        f = n("439932"),
        _ = n("411093"),
        E = n("228256"),
        h = n("49111"),
        g = n("855265");
    let m = new WeakMap;

    function p(e, t) {
        if (e.contains(t)) return !0;
        let n = (0, _.default)(t, g.layer);
        for (; null != n;) {
            let t = m.get(n);
            if (null == t) break;
            if (e.contains(t)) return !0;
            n = (0, _.default)(t, g.layer)
        }
        return !1
    }

    function S(e) {
        let {
            positionKey: t,
            position: n,
            align: i
        } = e;
        return null != t ? t : "".concat(n, ":").concat(i)
    }

    function v(e, t, n, i) {
        switch (e) {
            case "top":
                return l(null != t.bottom, "Missing bottom"), i.offsetHeight - (t.bottom + n.offsetHeight);
            case "bottom":
                return l(null != t.top, "Missing top"), i.offsetHeight - (t.top + n.offsetHeight);
            case "left":
                return l(null != t.right, "Missing right"), i.offsetWidth - (t.right + n.offsetWidth);
            case "right":
                return l(null != t.left, "Missing left"), i.offsetWidth - (t.left + n.offsetWidth);
            case "center":
            case "window_center":
                return l(null != t.left, "Missing left"), i.offsetWidth - (t.left + n.offsetWidth / 2);
            default:
                throw Error("Unexpected position: ".concat(e))
        }
    }

    function T(e, t, n) {
        if (null != e && e < 0 && ("top" === n.position || "bottom" === n.position)) {
            let i = null != t && Math.abs(e) < (null == t ? void 0 : t.offsetHeight);
            if (i && null != n.style) {
                let t = "top" === n.position ? "bottom" : "top",
                    i = n.style[t];
                return {
                    ...n,
                    style: {
                        ...n.style,
                        [t]: (null == i ? 0 : i) + e
                    }
                }
            }
        }
        return n
    }
    class I extends s.Component {
        nudgeLeftAlignment(e, t, n) {
            let {
                nudgeAlignIntoViewport: i
            } = this.props;
            if (!i) return e;
            let s = n.offsetWidth,
                r = e + t.offsetWidth,
                a = r - s + 12;
            return a > 0 ? Math.max(12, e - a) : e
        }
        getHorizontalAlignmentStyle(e, t, n, i) {
            let {
                align: s
            } = this.props;
            switch (s) {
                case "left": {
                    let s = Math.ceil(this.nudgeLeftAlignment(e.left, t, n)),
                        r = Math.ceil(e.left) - s;
                    return {
                        style: {
                            ...i,
                            left: s
                        },
                        nudge: r
                    }
                }
                case "right": {
                    let t = Math.ceil(n.offsetWidth - e.right);
                    return {
                        style: {
                            ...i,
                            right: t
                        },
                        nudge: 0
                    }
                }
                case "center": {
                    let s = e.left + (e.width - t.offsetWidth) / 2,
                        r = Math.ceil(this.nudgeLeftAlignment(s, t, n)),
                        a = Math.ceil(s) - r;
                    return {
                        style: {
                            ...i,
                            left: r
                        },
                        nudge: a
                    }
                }
                default:
                    throw Error("Unsupported align: ".concat(s))
            }
        }
        nudgeTopAlignment(e, t, n) {
            let {
                nudgeAlignIntoViewport: i
            } = this.props;
            if (!i) return e;
            if (e < 0) return 0;
            let s = t.getBoundingClientRect().height,
                r = n.offsetHeight,
                a = e + s - r + 12;
            return a > 0 ? Math.max(12, e - a) : e
        }
        nudgeBottomAlignment(e, t, n) {
            let {
                nudgeAlignIntoViewport: i
            } = this.props, s = n.offsetHeight, r = s - e;
            if (!i) return r;
            let a = r + t.offsetHeight - s + 12;
            return a > 0 ? Math.max(12, r - a) : r
        }
        getVerticalAlignmentStyle(e, t, n, i) {
            let {
                align: s
            } = this.props;
            switch (s) {
                case "top": {
                    let s = Math.ceil(this.nudgeTopAlignment(e.top, t, n)),
                        r = Math.ceil(e.top) - s;
                    return {
                        style: {
                            ...i,
                            top: s
                        },
                        nudge: r
                    }
                }
                case "bottom": {
                    let s = Math.ceil(this.nudgeBottomAlignment(e.bottom, t, n)),
                        r = Math.ceil(e.bottom) - s;
                    return {
                        style: {
                            ...i,
                            bottom: s
                        },
                        nudge: r
                    }
                }
                case "center": {
                    let s = e.top + (e.height - t.offsetHeight) / 2,
                        r = Math.ceil(this.nudgeTopAlignment(s, t, n)),
                        a = Math.ceil(s) - r;
                    return {
                        style: {
                            ...i,
                            top: r
                        },
                        nudge: a
                    }
                }
                default:
                    throw Error("Unsupported align: ".concat(s))
            }
        }
        calculatePositionStyle(e, t, n) {
            var i, s, r, a;
            let {
                reference: o,
                spacing: u = 0
            } = this.props;
            let d = "function" == typeof(i = o) ? i() : (l(null != i.current, "Invalid ref"), i.current.getBoundingClientRect()),
                c = n.getBoundingClientRect();
            let f = (s = d, r = c.left, a = c.top, {
                top: s.top - a,
                left: s.left - r,
                bottom: s.bottom - a,
                right: s.right - r,
                width: s.width,
                height: s.height
            });
            switch (e) {
                case "top":
                    return this.getHorizontalAlignmentStyle(f, t, n, {
                        bottom: n.offsetHeight - f.top + u
                    });
                case "bottom":
                    return this.getHorizontalAlignmentStyle(f, t, n, {
                        top: f.bottom + u
                    });
                case "left":
                    return this.getVerticalAlignmentStyle(f, t, n, {
                        right: n.offsetWidth - f.left + u
                    });
                case "right":
                    return this.getVerticalAlignmentStyle(f, t, n, {
                        left: f.right + u
                    });
                case "center":
                    return this.getVerticalAlignmentStyle(f, t, n, {
                        left: f.left + f.width / 2 - t.offsetWidth / 2 + u
                    });
                case "window_center":
                    return this.getVerticalAlignmentStyle(f, t, n, {
                        left: Math.max((window.innerWidth - t.offsetWidth) / 2, 0)
                    });
                default:
                    throw Error("Unexpected position: ".concat(e))
            }
        }
        calculateState() {
            let {
                position: e,
                autoInvert: t
            } = this.props, n = this.elementRef.current;
            l(null != n, "Unexpected null element");
            let i = (0, E.getParentLayerContainer)(n),
                {
                    style: s,
                    nudge: r
                } = this.calculatePositionStyle(e, n, i),
                a = null,
                o = null;
            if (t && (a = v(e, s, n, i)) < 0) {
                let t = function(e) {
                        switch (e) {
                            case "top":
                                return "bottom";
                            case "bottom":
                                return "top";
                            case "left":
                                return "right";
                            case "right":
                                return "left";
                            case "center":
                                return "center";
                            case "window_center":
                                return "window_center";
                            default:
                                throw Error()
                        }
                    }(e),
                    {
                        style: s,
                        nudge: r
                    } = this.calculatePositionStyle(t, n, i);
                if ((o = v(t, s, n, i)) > a) return T(o, n, {
                    position: t,
                    nudge: r,
                    style: s
                })
            }
            return T(a, n, {
                position: e,
                nudge: r,
                style: s
            })
        }
        componentDidMount() {
            var e, t;
            let {
                reference: n,
                onMount: i
            } = this.props;
            this.setState({
                isPositioned: !0,
                ...this.calculateState()
            });
            let s = this.elementRef.current;
            l(null != s, "Missing elementRef"), "function" != typeof n && null != n.current && m.set(s, n.current), c.ComponentDispatch.subscribe(h.ComponentActions.LAYER_POP_START, this.handleLayerPopStart), c.ComponentDispatch.subscribe(h.ComponentActions.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == s || null === (t = s.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.addEventListener("resize", this.handleLayerPopComplete), null == i || i()
        }
        componentDidUpdate(e, t) {
            if (S(e) !== S(this.props) ? this.updatePosition() : ! function(e, t) {
                    if ("function" == typeof e && "function" == typeof t) {
                        let n = e(),
                            i = t();
                        return n.top === i.top && n.left === i.left
                    }
                    return e === t
                }(e.reference, this.props.reference) && this.updatePosition(), t.position !== this.state.position) {
                var n, i;
                null === (n = (i = this.props).onPositionChange) || void 0 === n || n.call(i, this.state.position)
            }
        }
        componentWillUnmount() {
            var e, t, n, i;
            let s = this.elementRef.current;
            l(null != s, "Missing elementRef"), m.delete(s), c.ComponentDispatch.unsubscribe(h.ComponentActions.LAYER_POP_START, this.handleLayerPopStart), c.ComponentDispatch.unsubscribe(h.ComponentActions.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == s || null === (t = s.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.removeEventListener("resize", this.handleLayerPopComplete), null === (n = (i = this.props).onUnmount) || void 0 === n || n.call(i)
        }
        render() {
            let {
                id: e,
                className: t,
                children: n,
                fixed: s,
                disablePointerEvents: r
            } = this.props, {
                position: o,
                isPositioned: l,
                isSettingsLayerTransitioning: c,
                nudge: _
            } = this.state;
            return (0, i.jsx)(d.UseThemeContext, {
                children: d => {
                    let {
                        theme: E
                    } = d;
                    return (0, i.jsx)("div", {
                        id: e,
                        className: a(t, (0, f.getThemeClass)(E), g.layer, {
                            [g.emptyError]: !1,
                            [g.layerHidden]: c,
                            [g.disabledPointerEvents]: r
                        }),
                        style: {
                            position: s ? "fixed" : "absolute",
                            ...this.state.style
                        },
                        ref: this.elementRef,
                        children: (0, i.jsx)(u.FocusRingScope, {
                            containerRef: this.elementRef,
                            children: n({
                                position: o,
                                nudge: _,
                                isPositioned: l
                            }, this.updatePosition)
                        })
                    })
                }
            })
        }
        constructor(...e) {
            super(...e), this.elementRef = s.createRef(), this.state = {
                style: Object.freeze({}),
                position: this.props.autoInvert ? null : this.props.position,
                nudge: 0,
                isPositioned: !1,
                isSettingsLayerTransitioning: !1
            }, this.handleLayerPopStart = () => {
                this.setState({
                    isSettingsLayerTransitioning: !0
                })
            }, this.handleLayerPopComplete = () => {
                let e = this.calculateState();
                this.setState({
                    ...e,
                    isSettingsLayerTransitioning: !1
                })
            }, this.updatePosition = () => {
                this.setState(this.calculateState())
            }
        }
    }
    I.defaultProps = {
        nudgeAlignIntoViewport: !1,
        spacing: 0,
        autoInvert: !1,
        disablePointerEvents: !1
    }
}