function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007");
    var s = n("37983"),
        a = n("884691"),
        r = n("483366"),
        l = n.n(r),
        i = n("458960"),
        o = n("394846"),
        u = n("769846"),
        d = n("77078"),
        c = n("159885"),
        f = n("26232");
    let E = (0, c.cssValueToNumber)(u.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
        h = {
            START: 0,
            END: 1
        },
        _ = {
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
                this.state.shouldAnimate ? this.animateTo(h.END, e) : e()
            }
            componentWillEnter(e) {
                this.state.shouldAnimate ? (clearTimeout(this.timeout), this.timeout = setTimeout(() => this.animateTo(h.END, e), 40)) : e()
            }
            componentWillLeave(e) {
                this.state.shouldAnimate ? this.animateTo(h.START, e) : e()
            }
            animateTo(e, t) {
                i.default.spring(this.anim, {
                    toValue: e,
                    ..._
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
                super(...e), this.anim = new i.default.Value(h.START), this.state = {
                    shouldAnimate: !o.isMobile
                }, this.handleResize = () => {
                    let e = window.innerWidth > E;
                    !this.state.shouldAnimate && e && this.anim.setValue(h.END), this.setState({
                        shouldAnimate: e
                    })
                }, this.handleResizeDebounced = l(this.handleResize, 60)
            }
        }
    }
}