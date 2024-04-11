function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BlobMask: function() {
            return g
        }
    }), n("47120");
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("803997"),
        l = n.n(o),
        u = n("96355"),
        d = n("47759"),
        _ = n.n(d),
        c = n("718017"),
        E = n("153832"),
        I = n("722770"),
        T = n("846519"),
        f = n("215569"),
        S = n("608675");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let A = {
            friction: 13,
            tension: 240,
            duration: 150
        },
        m = {
            duration: 150,
            friction: 3
        },
        N = {
            friction: 30,
            tension: 900,
            mass: 1
        },
        O = {
            duration: 150,
            friction: 10,
            tension: 100,
            mass: 1
        },
        p = (null === (i = window.SVGPathElement) || void 0 === i ? void 0 : i.prototype.getTotalLength) != null ? (0, u.interpolate)("M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z", "M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z", {
            maxSegmentLength: 1.5
        }) : e => "".concat(e);
    class R extends a.Component {
        componentDidMount() {
            this.forceUpdate()
        }
        componentWillAppear(e) {
            e()
        }
        componentWillEnter(e) {
            e()
        }
        componentWillLeave(e) {
            this.timeoutId = setTimeout(e, 300)
        }
        componentWillUnmount() {
            clearTimeout(this.timeoutId)
        }
        render() {
            let {
                children: e,
                className: t,
                animatedStyle: n
            } = this.props;
            return (0, s.jsx)(c.animated.div, {
                className: t,
                style: n,
                children: e
            })
        }
        constructor(...e) {
            super(...e), h(this, "timeoutId", void 0)
        }
    }

    function C(e) {
        let {
            selected: t,
            upperBadge: n,
            lowerBadge: i,
            highlight: r
        } = e;
        return t || null != n || null != i || !!r
    }
    class g extends(r = a.Component) {
        static getDerivedStateFromProps(e, t) {
            let {
                hasRenderedBadge: n,
                upperBadgeMask: i,
                lowerBadgeMask: r,
                borderRadiusMask: s,
                renderComplex: a
            } = t, {
                upperBadge: o,
                lowerBadge: l
            } = e, u = !1;
            return (null != o && null == i || null != l && null == r) && (u = !0, n = !0, i = new c.Controller({
                spring: 0
            }), r = new c.Controller({
                spring: 0
            })), C(e) && null == s && (u = !0, s = new c.Controller({
                spring: 0
            })), !a && C(e) && (u = !0, a = !0), u ? {
                hasRenderedBadge: n,
                lowerBadgeMask: r,
                upperBadgeMask: i,
                borderRadiusMask: s,
                renderComplex: a
            } : null
        }
        componentDidMount() {
            let {
                selected: e,
                lowerBadge: t,
                upperBadge: n
            } = this.props, {
                borderRadiusMask: i,
                lowerBadgeMask: r,
                upperBadgeMask: s
            } = this.state;
            null == i || i.update({
                spring: e ? 1 : 0,
                immediate: !0
            }).start(), null == r || r.update({
                spring: null != t ? 1 : 0,
                immediate: !0
            }).start(), null == s || s.update({
                spring: null != n ? 1 : 0,
                immediate: !0
            }).start()
        }
        componentWillUnmount() {
            let {
                borderRadiusMask: e,
                lowerBadgeMask: t,
                upperBadgeMask: n
            } = this.state;
            this.timeout.stop(), null == e || e.dispose(), null == t || t.dispose(), null == n || n.dispose()
        }
        componentDidUpdate(e) {
            let {
                selected: t,
                lowerBadge: n,
                upperBadge: i
            } = this.props, {
                borderRadiusMask: r,
                lowerBadgeMask: s,
                upperBadgeMask: a,
                renderComplex: o
            } = this.state;
            t && !e.selected ? null == r || r.update({
                spring: 1,
                immediate: !1,
                config: A
            }).start() : !t && e.selected && (null == r || r.update({
                spring: 0,
                immediate: !1,
                config: m
            }).start()), null != n && null == e.lowerBadge ? null == s || s.update({
                spring: 1,
                immediate: !document.hasFocus(),
                config: N
            }).start() : null == n && null != e.lowerBadge && (null == s || s.update({
                spring: 0,
                immediate: !document.hasFocus(),
                config: O
            }).start()), null != i && null == e.upperBadge ? null == a || a.update({
                spring: 1,
                immediate: !document.hasFocus(),
                config: N
            }).start() : null == i && null != e.upperBadge && (null == a || a.update({
                spring: 0,
                immediate: !document.hasFocus(),
                config: O
            }).start()), !o || C(this.props) || this.timeout.isStarted() ? C(this.props) && this.timeout.isStarted() && this.timeout.stop() : this.timeout.start(_()(108e5, 18e6), this.handleTimeout)
        }
        getBadgePositionInterpolation(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            if (null == e) return;
            let {
                spring: n
            } = e.springs;
            return n.to([0, 1], [20, 0]).to(e => "translate(".concat(e, " ").concat(e * t, ")"))
        }
        getLowerBadgeStyles() {
            let {
                lowerBadgeMask: e
            } = this.state;
            if (null == e) return;
            let {
                spring: t
            } = e.springs;
            return {
                opacity: t.to([0, .5, 1], [0, 0, 1]),
                transform: t.to(e => "translate(".concat(16 - 16 * e, "px, ").concat(16 - 16 * e, "px)"))
            }
        }
        getUpperBadgeStyles() {
            let {
                upperBadgeMask: e
            } = this.state;
            if (null == e) return;
            let {
                spring: t
            } = e.springs;
            return {
                opacity: t.to([0, .5, 1], [0, 0, 1]),
                transform: t.to(e => "translate(".concat(16 - 16 * e, "px, ").concat(-1 * (16 - 16 * e), "px)"))
            }
        }
        getPathInterpolation() {
            var e;
            return null === (e = this.state.borderRadiusMask) || void 0 === e ? void 0 : e.springs.spring.to(p)
        }
        render() {
            let {
                children: e,
                className: t,
                innerClassName: n,
                lowerBadge: i,
                lowerBadgeWidth: r,
                style: o,
                upperBadge: u,
                highlight: d
            } = this.props, {
                maskId: _,
                lowerBadgeMask: E,
                upperBadgeMask: T,
                focused: h,
                hasRenderedBadge: A,
                renderComplex: m
            } = this.state;
            if (!m) return (0, s.jsx)("div", {
                className: l()(t, {
                    [S.wrapperSimple]: !0,
                    [S.simpleFocused]: h
                }),
                style: o,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                children: (0, s.jsx)("svg", {
                    width: 48,
                    height: 48,
                    viewBox: "0 0 ".concat(48, " ").concat(48),
                    className: S.svg,
                    overflow: "visible",
                    children: (0, s.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        className: n,
                        width: 48,
                        height: 48,
                        children: e
                    }, "foreign-object")
                }, "svg")
            }, "wrapper");
            let N = "".concat(_, "-upper_badge_masks"),
                O = "".concat(_, "-lower_badge_masks"),
                p = "".concat(_, "-blob_mask"),
                C = "".concat(_, "-stroke_mask"),
                g = "".concat(_, "-highlight_mask");
            return (0, s.jsxs)("div", {
                className: l()(t, S.wrapper),
                style: o,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                children: [(0, s.jsxs)("svg", {
                    width: 48,
                    height: 48,
                    viewBox: "0 0 ".concat(48, " ").concat(48),
                    className: l()(S.svg, {
                        [S.noContain]: d
                    }),
                    overflow: "visible",
                    children: [(0, s.jsxs)("defs", {
                        children: [d && (0, s.jsx)(c.animated.path, {
                            d: this.getPathInterpolation(),
                            id: g
                        }), (0, s.jsx)(c.animated.path, {
                            d: this.getPathInterpolation(),
                            id: p
                        }), A ? (0, s.jsx)(c.animated.rect, {
                            id: N,
                            x: 28,
                            y: -4,
                            width: 24,
                            height: 24,
                            rx: 12,
                            ry: 12,
                            transform: this.getBadgePositionInterpolation(T, -1)
                        }) : null, A ? (0, s.jsx)(c.animated.rect, {
                            id: O,
                            x: 48 - (r + 8) + 4,
                            y: 28,
                            width: r + 8,
                            height: 24,
                            rx: 12,
                            ry: 12,
                            transform: this.getBadgePositionInterpolation(E)
                        }) : null]
                    }), (0, s.jsxs)("mask", {
                        id: _,
                        fill: "black",
                        x: 0,
                        y: 0,
                        width: 48,
                        height: 48,
                        children: [d && (0, s.jsx)("use", {
                            href: "#".concat(g),
                            fill: "black"
                        }), (0, s.jsx)("use", {
                            href: "#".concat(p),
                            fill: "white",
                            className: l()({
                                [S.isHighlighted]: d
                            })
                        }), A ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("use", {
                                href: "#".concat(N),
                                fill: "black"
                            }), (0, s.jsx)("use", {
                                href: "#".concat(O),
                                fill: "black"
                            })]
                        }) : null]
                    }), A ? (0, s.jsxs)("mask", {
                        id: C,
                        children: [(0, s.jsx)("rect", {
                            width: "150%",
                            height: "150%",
                            x: "-25%",
                            y: "-25%",
                            fill: "white"
                        }), (0, s.jsx)("use", {
                            href: "#".concat(N),
                            fill: "black"
                        }), (0, s.jsx)("use", {
                            href: "#".concat(O),
                            fill: "black"
                        })]
                    }) : null, h ? (0, s.jsxs)(a.Fragment, {
                        children: [(0, s.jsx)("g", {
                            className: S.focusStroke,
                            mask: "url(#".concat(C, ")"),
                            children: (0, s.jsx)("use", {
                                href: "#".concat(p)
                            })
                        }), (0, s.jsxs)("g", {
                            className: S.focusFill,
                            children: [null != u ? (0, s.jsx)("use", {
                                href: "#".concat(N)
                            }) : null, null != i ? (0, s.jsx)("use", {
                                href: "#".concat(O)
                            }) : null]
                        })]
                    }) : null, d && (0, s.jsx)(c.animated.path, {
                        d: this.getPathInterpolation(),
                        stroke: I.default.BRAND_500,
                        "stroke-width": 2,
                        className: S.highlight,
                        mask: "url(#".concat(C, ")")
                    }), (0, s.jsx)("foreignObject", {
                        mask: "url(#".concat(_, ")"),
                        x: 0,
                        y: 0,
                        className: n,
                        width: 48,
                        height: 48,
                        children: e
                    }, "foreign-object")]
                }, "svg"), (0, s.jsxs)(f.TransitionGroup, {
                    component: a.Fragment,
                    children: [null != i ? (0, s.jsx)(R, {
                        className: S.lowerBadge,
                        animatedStyle: this.getLowerBadgeStyles(),
                        children: i
                    }, "lower-badge") : null, null != u ? (0, s.jsx)(R, {
                        className: S.upperBadge,
                        animatedStyle: this.getUpperBadgeStyles(),
                        children: u
                    }, "upper-badge") : null]
                })]
            }, "wrapper")
        }
        constructor(...e) {
            super(...e), h(this, "timeout", new T.Timeout), h(this, "state", {
                renderComplex: !1,
                hasRenderedBadge: !1,
                maskId: (0, E.v4)(),
                focused: !1
            }), h(this, "handleTimeout", () => {
                this.timeout.stop(), this.setState({
                    renderComplex: !1
                })
            }), h(this, "handleFocus", () => {
                this.setState({
                    focused: !0
                })
            }), h(this, "handleBlur", () => {
                this.setState({
                    focused: !1
                })
            })
        }
    }
    h(g, "defaultProps", {
        selected: !1,
        lowerBadgeWidth: 16,
        highlight: !1
    })
}