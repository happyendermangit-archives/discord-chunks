function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReferencePositionLayer: function() {
            return R
        },
        referencePortalAwareContains: function() {
            return m
        }
    }), n("47120"), n("411104");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("803997"),
        o = n.n(a),
        l = n("512722"),
        u = n.n(l),
        d = n("84735"),
        _ = n("801787"),
        c = n("585483"),
        E = n("792125"),
        I = n("872801"),
        T = n("302901"),
        f = n("981631"),
        S = n("260064");

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

    function O(e, t, n, i) {
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

    function p(e, t, n) {
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
    class R extends(i = s.Component) {
        nudgeLeftAlignment(e, t, n) {
            let {
                nudgeAlignIntoViewport: i
            } = this.props;
            if (!i) return e;
            let r = n.offsetWidth,
                s = e + t.offsetWidth - r + 12;
            return s > 0 ? Math.max(12, e - s) : e
        }
        getHorizontalAlignmentStyle(e, t, n, i) {
            let {
                align: r
            } = this.props;
            switch (r) {
                case "left": {
                    let r = Math.ceil(this.nudgeLeftAlignment(e.left, t, n)),
                        s = Math.ceil(e.left) - r;
                    return {
                        style: {
                            ...i,
                            left: r
                        },
                        nudge: s
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
                    let r = e.left + (e.width - t.offsetWidth) / 2,
                        s = Math.ceil(this.nudgeLeftAlignment(r, t, n)),
                        a = Math.ceil(r) - s;
                    return {
                        style: {
                            ...i,
                            left: s
                        },
                        nudge: a
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
                s = n.offsetHeight,
                a = e + r - s + 12;
            return a > 0 ? Math.max(12, e - a) : e
        }
        nudgeBottomAlignment(e, t, n) {
            let {
                nudgeAlignIntoViewport: i
            } = this.props, r = n.offsetHeight, s = r - e;
            if (!i) return s;
            let a = s + t.offsetHeight - r + 12;
            return a > 0 ? Math.max(12, s - a) : s
        }
        getVerticalAlignmentStyle(e, t, n, i) {
            let {
                align: r
            } = this.props;
            switch (r) {
                case "top": {
                    let r = Math.ceil(this.nudgeTopAlignment(e.top, t, n)),
                        s = Math.ceil(e.top) - r;
                    return {
                        style: {
                            ...i,
                            top: r
                        },
                        nudge: s
                    }
                }
                case "bottom": {
                    let r = Math.ceil(this.nudgeBottomAlignment(e.bottom, t, n)),
                        s = Math.ceil(e.bottom) - r;
                    return {
                        style: {
                            ...i,
                            bottom: r
                        },
                        nudge: s
                    }
                }
                case "center": {
                    let r = e.top + (e.height - t.offsetHeight) / 2,
                        s = Math.ceil(this.nudgeTopAlignment(r, t, n)),
                        a = Math.ceil(r) - s;
                    return {
                        style: {
                            ...i,
                            top: s
                        },
                        nudge: a
                    }
                }
                default:
                    throw Error("Unsupported align: ".concat(r))
            }
        }
        calculatePositionStyle(e, t, n) {
            var i, r, s, a;
            let {
                reference: o,
                spacing: l = 0
            } = this.props;
            let d = "function" == typeof(i = o) ? i() : (u()(null != i.current, "Invalid ref"), i.current.getBoundingClientRect()),
                _ = n.getBoundingClientRect();
            let c = (r = d, s = _.left, a = _.top, {
                top: r.top - a,
                left: r.left - s,
                bottom: r.bottom - a,
                right: r.right - s,
                width: r.width,
                height: r.height
            });
            switch (e) {
                case "top":
                    return this.getHorizontalAlignmentStyle(c, t, n, {
                        bottom: n.offsetHeight - c.top + l
                    });
                case "bottom":
                    return this.getHorizontalAlignmentStyle(c, t, n, {
                        top: c.bottom + l
                    });
                case "left":
                    return this.getVerticalAlignmentStyle(c, t, n, {
                        right: n.offsetWidth - c.left + l
                    });
                case "right":
                    return this.getVerticalAlignmentStyle(c, t, n, {
                        left: c.right + l
                    });
                case "center":
                    return this.getVerticalAlignmentStyle(c, t, n, {
                        left: c.left + c.width / 2 - t.offsetWidth / 2 + l
                    });
                case "window_center":
                    return this.getVerticalAlignmentStyle(c, t, n, {
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
                    nudge: s
                } = this.calculatePositionStyle(e, n, i),
                a = null,
                o = null;
            if (t && (a = O(e, r, n, i)) < 0) {
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
                        nudge: s
                    } = this.calculatePositionStyle(t, n, i);
                if ((o = O(t, r, n, i)) > a) return p(o, n, {
                    position: t,
                    nudge: s,
                    style: r
                })
            }
            return p(a, n, {
                position: e,
                nudge: s,
                style: r
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
            let r = this.elementRef.current;
            u()(null != r, "Missing elementRef"), "function" != typeof n && null != n.current && A.set(r, n.current), c.ComponentDispatch.subscribe(f.ComponentActions.LAYER_POP_START, this.handleLayerPopStart), c.ComponentDispatch.subscribe(f.ComponentActions.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == r || null === (t = r.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.addEventListener("resize", this.handleLayerPopComplete), null == i || i()
        }
        componentDidUpdate(e, t) {
            if (N(e) !== N(this.props) ? this.updatePosition() : ! function(e, t) {
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
            let r = this.elementRef.current;
            u()(null != r, "Missing elementRef"), A.delete(r), c.ComponentDispatch.unsubscribe(f.ComponentActions.LAYER_POP_START, this.handleLayerPopStart), c.ComponentDispatch.unsubscribe(f.ComponentActions.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == r || null === (t = r.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.removeEventListener("resize", this.handleLayerPopComplete), null === (n = (i = this.props).onUnmount) || void 0 === n || n.call(i)
        }
        render() {
            let {
                id: e,
                className: t,
                children: n,
                fixed: i,
                disablePointerEvents: s
            } = this.props, {
                position: a,
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
                            [S.disabledPointerEvents]: s
                        }),
                        style: {
                            position: i ? "fixed" : "absolute",
                            ...this.state.style
                        },
                        ref: this.elementRef,
                        children: (0, r.jsx)(d.FocusRingScope, {
                            containerRef: this.elementRef,
                            children: n({
                                position: a,
                                nudge: c,
                                isPositioned: l
                            }, this.updatePosition)
                        })
                    })
                }
            })
        }
        constructor(...e) {
            super(...e), h(this, "elementRef", s.createRef()), h(this, "state", {
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
    h(R, "defaultProps", {
        nudgeAlignIntoViewport: !1,
        spacing: 0,
        autoInvert: !1,
        disablePointerEvents: !1
    })
}