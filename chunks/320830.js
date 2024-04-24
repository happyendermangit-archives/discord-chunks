function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var s = n("735250"),
        a = n("470079"),
        i = n("954955"),
        r = n.n(i),
        l = n("748780"),
        o = n("873546"),
        u = n("477690"),
        d = n("481060"),
        c = n("624138"),
        f = n("991171");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let g = (0, c.cssValueToNumber)(u.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
        E = {
            START: 0,
            END: 1
        },
        m = {
            friction: 10,
            tension: 130
        };
    t.default = function(e) {
        return class extends a.Component {
            componentDidMount() {
                !o.isMobile && (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize())
            }
            componentWillUnmount() {
                clearTimeout(this.timeout), window.removeEventListener("resize", this.handleResizeDebounced)
            }
            componentWillAppear(e) {
                this.state.shouldAnimate ? this.animateTo(E.END, e) : e()
            }
            componentWillEnter(e) {
                this.state.shouldAnimate ? (clearTimeout(this.timeout), this.timeout = setTimeout(() => this.animateTo(E.END, e), 40)) : e()
            }
            componentWillLeave(e) {
                this.state.shouldAnimate ? this.animateTo(E.START, e) : e()
            }
            animateTo(e, t) {
                l.default.spring(this.anim, {
                    toValue: e,
                    ...m
                }).start(t)
            }
            getAnimatedStyle(e) {
                return this.state.shouldAnimate ? {
                    opacity: this.anim,
                    transform: e ? void 0 : [{
                        scale: this.anim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1.05, 1]
                        })
                    }, {
                        translateY: this.anim.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["-70px", "0px"]
                        })
                    }, {
                        translateZ: 0
                    }]
                } : null
            }
            render() {
                return (0, s.jsx)("div", {
                    className: f.wrapper,
                    children: (0, s.jsx)(d.AccessibilityPreferencesContext.Consumer, {
                        children: t => {
                            let {
                                reducedMotion: n
                            } = t;
                            return (0, s.jsx)(l.default.div, {
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, s.jsx)(e, {
                                    ...this.props
                                })
                            })
                        }
                    })
                })
            }
            constructor(...e) {
                super(...e), h(this, "timeout", void 0), h(this, "anim", new l.default.Value(E.START)), h(this, "state", {
                    shouldAnimate: !o.isMobile
                }), h(this, "handleResize", () => {
                    let e = window.innerWidth > g;
                    !this.state.shouldAnimate && e && this.anim.setValue(E.END), this.setState({
                        shouldAnimate: e
                    })
                }), h(this, "handleResizeDebounced", r()(this.handleResize, 60))
            }
        }
    }
}