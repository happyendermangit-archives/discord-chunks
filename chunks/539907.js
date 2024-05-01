function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReferencePositionLayer: function() {
            return C
        },
        referencePortalAwareContains: function() {
            return m
        }
    }), n("47120"), n("411104");
    var i, r = n("735250"),
        a = n("470079"),
        s = n("120356"),
        o = n.n(s),
        l = n("512722"),
        u = n.n(l),
        d = n("84735"),
        _ = n("801787"),
        c = n("585483"),
        E = n("792125"),
        I = n("872801"),
        T = n("302901"),
        f = n("981631"),
        S = n("344535");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let A = new WeakMap;

    function m(e, t) {
        if (e.contains(t)) return !0;
        let n = (0, I.default)(t, S.layer);
        for (; null != n;) {
            let t = A.get(n);
            if (null == t) break;
            if (e.contains(t)) return !0;
            n = (0, I.default)(t, S.layer)
        }
        return !1
    }

    function N(e) {
        let {
            positionKey: t,
            position: n,
            align: i
        } = e;
        return null != t ? t : "".concat(n, ":").concat(i)
    }

    function p(e, t, n, i) {
        switch (e) {
            case "top":
                return u()(null != t.bottom, "Missing bottom"), i.offsetHeight - (t.bottom + n.offsetHeight);
            case "bottom":
                return u()(null != t.top, "Missing top"), i.offsetHeight - (t.top + n.offsetHeight);
            case "left":
                return u()(null != t.right, "Missing right"), i.offsetWidth - (t.right + n.offsetWidth);
            case "right":
                return u()(null != t.left, "Missing left"), i.offsetWidth - (t.left + n.offsetWidth);
            case "center":
            case "window_center":
                return u()(null != t.left, "Missing left"), i.offsetWidth - (t.left + n.offsetWidth / 2);
            default:
                throw Error("Unexpected position: ".concat(e))
        }
    }

    function O(e, t, n) {
        if (null != e && e < 0 && ("top" === n.position || "bottom" === n.position) && null != t && Math.abs(e) < (null == t ? void 0 : t.offsetHeight) && null != n.style) {
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
        return n
    }

    function R(e) {
        let {
            targetRef: t,
            overrideTargetRect: n
        } = e;
        return null != n ? n : (u()(null != t.current, "Invalid ref"), t.current.getBoundingClientRect())
    }
    class C extends(i = a.Component) {
        formatDimension(e) {
            return this.props.useRawTargetDimensions ? e : Math.ceil(e)
        }
        nudgeLeftAlignment(e, t, n) {
            let {
                nudgeAlignIntoViewport: i
            } = this.props;
            if (!i) return e;
            let r = n.offsetWidth,
                a = e + t.offsetWidth - r + 12;
            return a > 0 ? Math.max(12, e - a) : e
        }
        getHorizontalAlignmentStyle(e, t, n, i) {
            let {
                align: r
            } = this.props;
            switch (r) {
                case "left": {
                    let r = this.formatDimension(this.nudgeLeftAlignment(e.left, t, n)),
                        a = this.formatDimension(e.left) - r;
                    return {
                        style: {
                            ...i,
                            left: r
                        },
                        nudge: a
                    }
                }
                case "right": {
                    let t = this.formatDimension(n.offsetWidth - e.right);
                    return {
                        style: {
                            ...i,
                            right: t
                        },
                        nudge: 0
                    }
                }
                case "center": {
                    let r = e.left + (e.width - t.offsetWidth) / 2,
                        a = this.formatDimension(this.nudgeLeftAlignment(r, t, n)),
                        s = this.formatDimension(r) - a;
                    return {
                        style: {
                            ...i,
                            left: a
                        },
                        nudge: s
                    }
                }
                default:
                    throw Error("Unsupported align: ".concat(r))
            }
        }
        nudgeTopAlignment(e, t, n) {
            let {
                nudgeAlignIntoViewport: i
            } = this.props;
            if (!i) return e;
            if (e < 0) return 0;
            let r = t.getBoundingClientRect().height,
                a = n.offsetHeight,
                s = e + r - a + 12;
            return s > 0 ? Math.max(12, e - s) : e
        }
        nudgeBottomAlignment(e, t, n) {
            let {
                nudgeAlignIntoViewport: i
            } = this.props, r = n.offsetHeight, a = r - e;
            if (!i) return a;
            let s = a + t.offsetHeight - r + 12;
            return s > 0 ? Math.max(12, a - s) : a
        }
        getVerticalAlignmentStyle(e, t, n, i) {
            let {
                align: r
            } = this.props;
            switch (r) {
                case "top": {
                    let r = this.formatDimension(this.nudgeTopAlignment(e.top, t, n)),
                        a = this.formatDimension(e.top) - r;
                    return {
                        style: {
                            ...i,
                            top: r
                        },
                        nudge: a
                    }
                }
                case "bottom": {
                    let r = this.formatDimension(this.nudgeBottomAlignment(e.bottom, t, n)),
                        a = this.formatDimension(e.bottom) - r;
                    return {
                        style: {
                            ...i,
                            bottom: r
                        },
                        nudge: a
                    }
                }
                case "center": {
                    let r = e.top + (e.height - t.offsetHeight) / 2,
                        a = this.formatDimension(this.nudgeTopAlignment(r, t, n)),
                        s = this.formatDimension(r) - a;
                    return {
                        style: {
                            ...i,
                            top: a
                        },
                        nudge: s
                    }
                }
                default:
                    throw Error("Unsupported align: ".concat(r))
            }
        }
        calculatePositionStyle(e, t, n) {
            var i, r, a;
            let {
                spacing: s = 0
            } = this.props, o = R(this.props), l = n.getBoundingClientRect();
            let u = (i = o, r = l.left, a = l.top, {
                top: i.top - a,
                left: i.left - r,
                bottom: i.bottom - a,
                right: i.right - r,
                width: i.width,
                height: i.height
            });
            switch (e) {
                case "top":
                    return this.getHorizontalAlignmentStyle(u, t, n, {
                        bottom: n.offsetHeight - u.top + s
                    });
                case "bottom":
                    return this.getHorizontalAlignmentStyle(u, t, n, {
                        top: u.bottom + s
                    });
                case "left":
                    return this.getVerticalAlignmentStyle(u, t, n, {
                        right: n.offsetWidth - u.left + s
                    });
                case "right":
                    return this.getVerticalAlignmentStyle(u, t, n, {
                        left: u.right + s
                    });
                case "center":
                    return this.getVerticalAlignmentStyle(u, t, n, {
                        left: u.left + u.width / 2 - t.offsetWidth / 2 + s
                    });
                case "window_center":
                    return this.getVerticalAlignmentStyle(u, t, n, {
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
            u()(null != n, "Unexpected null element");
            let i = (0, T.getParentLayerContainer)(n),
                {
                    style: r,
                    nudge: a
                } = this.calculatePositionStyle(e, n, i),
                s = null,
                o = null;
            if (t && (s = p(e, r, n, i)) < 0) {
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
                        style: r,
                        nudge: a
                    } = this.calculatePositionStyle(t, n, i);
                if ((o = p(t, r, n, i)) > s) return O(o, n, {
                    position: t,
                    nudge: a,
                    style: r
                })
            }
            return O(s, n, {
                position: e,
                nudge: a,
                style: r
            })
        }
        componentDidMount() {
            var e, t;
            let {
                targetRef: n,
                onMount: i
            } = this.props;
            this.setState({
                isPositioned: !0,
                ...this.calculateState()
            });
            let r = this.elementRef.current;
            u()(null != r, "Missing elementRef"), null != n.current && A.set(r, n.current), c.ComponentDispatch.subscribe(f.ComponentActions.LAYER_POP_START, this.handleLayerPopStart), c.ComponentDispatch.subscribe(f.ComponentActions.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == r || null === (t = r.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.addEventListener("resize", this.handleLayerPopComplete), null == i || i()
        }
        componentDidUpdate(e, t) {
            if ((N(e) !== N(this.props) || ! function(e, t) {
                    let n = R(e),
                        i = R(t);
                    return n.top === i.top && n.left === i.left
                }(e, this.props)) && this.updatePosition(), t.position !== this.state.position) {
                var n, i;
                null === (n = (i = this.props).onPositionChange) || void 0 === n || n.call(i, this.state.position)
            }
        }
        componentWillUnmount() {
            var e, t, n, i;
            let r = this.elementRef.current;
            u()(null != r, "Missing elementRef"), A.delete(r), c.ComponentDispatch.unsubscribe(f.ComponentActions.LAYER_POP_START, this.handleLayerPopStart), c.ComponentDispatch.unsubscribe(f.ComponentActions.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == r || null === (t = r.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.removeEventListener("resize", this.handleLayerPopComplete), null === (n = (i = this.props).onUnmount) || void 0 === n || n.call(i)
        }
        render() {
            let {
                id: e,
                className: t,
                children: n,
                fixed: i,
                disablePointerEvents: a
            } = this.props, {
                position: s,
                isPositioned: l,
                isSettingsLayerTransitioning: u,
                nudge: c
            } = this.state;
            return (0, r.jsx)(_.UseThemeContext, {
                children: _ => {
                    let {
                        theme: I
                    } = _;
                    return (0, r.jsx)("div", {
                        id: e,
                        className: o()(t, (0, E.getThemeClass)(I), S.layer, {
                            [S.emptyError]: !1,
                            [S.layerHidden]: u,
                            [S.disabledPointerEvents]: a
                        }),
                        style: {
                            position: i ? "fixed" : "absolute",
                            ...this.state.style
                        },
                        ref: this.elementRef,
                        children: (0, r.jsx)(d.FocusRingScope, {
                            containerRef: this.elementRef,
                            children: n({
                                position: s,
                                nudge: c,
                                isPositioned: l
                            }, this.updatePosition)
                        })
                    })
                }
            })
        }
        constructor(...e) {
            super(...e), h(this, "elementRef", a.createRef()), h(this, "state", {
                style: Object.freeze({}),
                position: this.props.autoInvert ? null : this.props.position,
                nudge: 0,
                isPositioned: !1,
                isSettingsLayerTransitioning: !1
            }), h(this, "handleLayerPopStart", () => {
                this.setState({
                    isSettingsLayerTransitioning: !0
                })
            }), h(this, "handleLayerPopComplete", () => {
                let e = this.calculateState();
                this.setState({
                    ...e,
                    isSettingsLayerTransitioning: !1
                })
            }), h(this, "updatePosition", () => {
                this.setState(this.calculateState())
            })
        }
    }
    h(C, "defaultProps", {
        nudgeAlignIntoViewport: !1,
        spacing: 0,
        autoInvert: !1,
        disablePointerEvents: !1
    })
}