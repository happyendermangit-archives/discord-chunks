function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BlobMask: function() {
            return R
        }
    }), n("222007");
    var i, r = n("37983"),
        s = n("884691"),
        a = n("414456"),
        o = n.n(a),
        l = n("32183"),
        u = n("272214"),
        c = n.n(u),
        d = n("907002"),
        f = n("748820"),
        E = n("733724"),
        p = n("862337"),
        h = n("266491"),
        _ = n("328139");
    let S = {
            friction: 13,
            tension: 240,
            duration: 150
        },
        m = {
            duration: 150,
            friction: 3
        },
        T = {
            friction: 30,
            tension: 900,
            mass: 1
        },
        g = {
            duration: 150,
            friction: 10,
            tension: 100,
            mass: 1
        },
        I = (null === (i = window.SVGPathElement) || void 0 === i ? void 0 : i.prototype.getTotalLength) != null,
        C = I ? (0, l.interpolate)("M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z", "M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z", {
            maxSegmentLength: 1.5
        }) : e => "".concat(e);
    class v extends s.Component {
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
            return (0, r.jsx)(d.animated.div, {
                className: t,
                style: n,
                children: e
            })
        }
    }

    function A(e) {
        let {
            selected: t,
            upperBadge: n,
            lowerBadge: i,
            highlight: r
        } = e;
        return t || null != n || null != i || !!r
    }
    class R extends s.Component {
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
            return (null != o && null == i || null != l && null == r) && (u = !0, n = !0, i = new d.Controller({
                spring: 0
            }), r = new d.Controller({
                spring: 0
            })), A(e) && null == s && (u = !0, s = new d.Controller({
                spring: 0
            })), !a && A(e) && (u = !0, a = !0), u ? {
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
                config: S
            }).start() : !t && e.selected && (null == r || r.update({
                spring: 0,
                immediate: !1,
                config: m
            }).start()), null != n && null == e.lowerBadge ? null == s || s.update({
                spring: 1,
                immediate: !document.hasFocus(),
                config: T
            }).start() : null == n && null != e.lowerBadge && (null == s || s.update({
                spring: 0,
                immediate: !document.hasFocus(),
                config: g
            }).start()), null != i && null == e.upperBadge ? null == a || a.update({
                spring: 1,
                immediate: !document.hasFocus(),
                config: T
            }).start() : null == i && null != e.upperBadge && (null == a || a.update({
                spring: 0,
                immediate: !document.hasFocus(),
                config: g
            }).start()), !o || A(this.props) || this.timeout.isStarted() ? A(this.props) && this.timeout.isStarted() && this.timeout.stop() : this.timeout.start(c(108e5, 18e6), this.handleTimeout)
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
            return null === (e = this.state.borderRadiusMask) || void 0 === e ? void 0 : e.springs.spring.to(C)
        }
        render() {
            let {
                children: e,
                className: t,
                innerClassName: n,
                lowerBadge: i,
                lowerBadgeWidth: a,
                style: l,
                upperBadge: u,
                highlight: c
            } = this.props, {
                maskId: f,
                lowerBadgeMask: p,
                upperBadgeMask: S,
                focused: m,
                hasRenderedBadge: T,
                renderComplex: g
            } = this.state;
            if (!g) return (0, r.jsx)("div", {
                className: o(t, {
                    [_.wrapperSimple]: !0,
                    [_.simpleFocused]: m
                }),
                style: l,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                children: (0, r.jsx)("svg", {
                    width: 48,
                    height: 48,
                    viewBox: "0 0 ".concat(48, " ").concat(48),
                    className: _.svg,
                    overflow: "visible",
                    children: (0, r.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        className: n,
                        width: 48,
                        height: 48,
                        children: e
                    }, "foreign-object")
                }, "svg")
            }, "wrapper");
            let I = "".concat(f, "-upper_badge_masks"),
                C = "".concat(f, "-lower_badge_masks"),
                A = "".concat(f, "-blob_mask"),
                R = "".concat(f, "-stroke_mask"),
                N = "".concat(f, "-highlight_mask");
            return (0, r.jsxs)("div", {
                className: o(t, _.wrapper),
                style: l,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                children: [(0, r.jsxs)("svg", {
                    width: 48,
                    height: 48,
                    viewBox: "0 0 ".concat(48, " ").concat(48),
                    className: o(_.svg, {
                        [_.noContain]: c
                    }),
                    overflow: "visible",
                    children: [(0, r.jsxs)("defs", {
                        children: [c && (0, r.jsx)(d.animated.path, {
                            d: this.getPathInterpolation(),
                            id: N
                        }), (0, r.jsx)(d.animated.path, {
                            d: this.getPathInterpolation(),
                            id: A
                        }), T ? (0, r.jsx)(d.animated.rect, {
                            id: I,
                            x: 28,
                            y: -4,
                            width: 24,
                            height: 24,
                            rx: 12,
                            ry: 12,
                            transform: this.getBadgePositionInterpolation(S, -1)
                        }) : null, T ? (0, r.jsx)(d.animated.rect, {
                            id: C,
                            x: 48 - (a + 8) + 4,
                            y: 28,
                            width: a + 8,
                            height: 24,
                            rx: 12,
                            ry: 12,
                            transform: this.getBadgePositionInterpolation(p)
                        }) : null]
                    }), (0, r.jsxs)("mask", {
                        id: f,
                        fill: "black",
                        x: 0,
                        y: 0,
                        width: 48,
                        height: 48,
                        children: [c && (0, r.jsx)("use", {
                            href: "#".concat(N),
                            fill: "black"
                        }), (0, r.jsx)("use", {
                            href: "#".concat(A),
                            fill: "white",
                            className: o({
                                [_.isHighlighted]: c
                            })
                        }), T ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("use", {
                                href: "#".concat(I),
                                fill: "black"
                            }), (0, r.jsx)("use", {
                                href: "#".concat(C),
                                fill: "black"
                            })]
                        }) : null]
                    }), T ? (0, r.jsxs)("mask", {
                        id: R,
                        children: [(0, r.jsx)("rect", {
                            width: "150%",
                            height: "150%",
                            x: "-25%",
                            y: "-25%",
                            fill: "white"
                        }), (0, r.jsx)("use", {
                            href: "#".concat(I),
                            fill: "black"
                        }), (0, r.jsx)("use", {
                            href: "#".concat(C),
                            fill: "black"
                        })]
                    }) : null, m ? (0, r.jsxs)(s.Fragment, {
                        children: [(0, r.jsx)("g", {
                            className: _.focusStroke,
                            mask: "url(#".concat(R, ")"),
                            children: (0, r.jsx)("use", {
                                href: "#".concat(A)
                            })
                        }), (0, r.jsxs)("g", {
                            className: _.focusFill,
                            children: [null != u ? (0, r.jsx)("use", {
                                href: "#".concat(I)
                            }) : null, null != i ? (0, r.jsx)("use", {
                                href: "#".concat(C)
                            }) : null]
                        })]
                    }) : null, c && (0, r.jsx)(d.animated.path, {
                        d: this.getPathInterpolation(),
                        stroke: E.default.BRAND_500,
                        "stroke-width": 2,
                        className: _.highlight,
                        mask: "url(#".concat(R, ")")
                    }), (0, r.jsx)("foreignObject", {
                        mask: "url(#".concat(f, ")"),
                        x: 0,
                        y: 0,
                        className: n,
                        width: 48,
                        height: 48,
                        children: e
                    }, "foreign-object")]
                }, "svg"), (0, r.jsxs)(h.default, {
                    component: s.Fragment,
                    children: [null != i ? (0, r.jsx)(v, {
                        className: _.lowerBadge,
                        animatedStyle: this.getLowerBadgeStyles(),
                        children: i
                    }, "lower-badge") : null, null != u ? (0, r.jsx)(v, {
                        className: _.upperBadge,
                        animatedStyle: this.getUpperBadgeStyles(),
                        children: u
                    }, "upper-badge") : null]
                })]
            }, "wrapper")
        }
        constructor(...e) {
            super(...e), this.timeout = new p.Timeout, this.state = {
                renderComplex: !1,
                hasRenderedBadge: !1,
                maskId: (0, f.v4)(),
                focused: !1
            }, this.handleTimeout = () => {
                this.timeout.stop(), this.setState({
                    renderComplex: !1
                })
            }, this.handleFocus = () => {
                this.setState({
                    focused: !0
                })
            }, this.handleBlur = () => {
                this.setState({
                    focused: !1
                })
            }
        }
    }
    R.defaultProps = {
        selected: !1,
        lowerBadgeWidth: 16,
        highlight: !1
    }
}