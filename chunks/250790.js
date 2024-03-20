function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007");
    var s = n("37983"),
        a = n("884691"),
        l = n("483366"),
        r = n.n(l),
        i = n("458960"),
        o = n("394846"),
        u = n("769846"),
        d = n("77078"),
        c = n("159885"),
        E = n("26232");
    let f = (0, c.cssValueToNumber)(u.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
        _ = {
            START: 0,
            END: 1
        },
        h = {
            friction: 10,
            tension: 130
        };
    var g = function(e) {
        return class extends a.Component {
            componentDidMount() {
                !o.isMobile && (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize())
            }
            componentWillUnmount() {
                clearTimeout(this.timeout), window.removeEventListener("resize", this.handleResizeDebounced)
            }
            componentWillAppear(e) {
                this.state.shouldAnimate ? this.animateTo(_.END, e) : e()
            }
            componentWillEnter(e) {
                this.state.shouldAnimate ? (clearTimeout(this.timeout), this.timeout = setTimeout(() => this.animateTo(_.END, e), 40)) : e()
            }
            componentWillLeave(e) {
                this.state.shouldAnimate ? this.animateTo(_.START, e) : e()
            }
            animateTo(e, t) {
                i.default.spring(this.anim, {
                    toValue: e,
                    ...h
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
                    className: E.wrapper,
                    children: (0, s.jsx)(d.AccessibilityPreferencesContext.Consumer, {
                        children: t => {
                            let {
                                reducedMotion: n
                            } = t;
                            return (0, s.jsx)(i.default.div, {
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
                super(...e), this.anim = new i.default.Value(_.START), this.state = {
                    shouldAnimate: !o.isMobile
                }, this.handleResize = () => {
                    let e = window.innerWidth > f;
                    !this.state.shouldAnimate && e && this.anim.setValue(_.END), this.setState({
                        shouldAnimate: e
                    })
                }, this.handleResizeDebounced = r(this.handleResize, 60)
            }
        }
    }
}