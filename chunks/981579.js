function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Sequencer: function() {
            return g
        }
    }), n("222007");
    var i, s, r, a, o = n("37983"),
        l = n("884691"),
        u = n("414456"),
        d = n.n(u),
        c = n("458960"),
        _ = n("266491"),
        f = n("413197"),
        E = n("86337");
    (r = i || (i = {}))[r.ENTERING = 0] = "ENTERING", r[r.LEAVING = 1] = "LEAVING", r[r.APPEARING = 2] = "APPEARING", r[r.STATIC = 3] = "STATIC", (a = s || (s = {})).SLIDE = "slide", a.LIFT = "lift";
    class h extends l.PureComponent {
        componentDidMount() {
            if (null != this._measureRef.current) {
                let {
                    height: e
                } = this._measureRef.current.getBoundingClientRect();
                this.setState({
                    targetHeight: e,
                    baseHeight: this.props.getBaseHeight()
                })
            }
        }
        componentDidUpdate(e, t) {
            t.targetHeight !== this.state.targetHeight && this.props.setHeight(this.state.targetHeight)
        }
        componentWillAppear(e) {
            this.setState({
                animationState: 2
            }), e()
        }
        componentDidAppear() {
            let {
                animationProgress: e,
                targetHeight: t
            } = this.state;
            e.setValue(2), this.setState({
                animationState: 3,
                baseHeight: t
            })
        }
        componentWillEnter(e) {
            let {
                duration: t
            } = this.props, {
                animationProgress: n
            } = this.state;
            this.setState({
                animationState: 0
            }), this.props.setHeight(this.state.targetHeight), c.default.timing(n, {
                toValue: 2,
                duration: t,
                delay: t / 2
            }).start(e)
        }
        componentDidEnter() {
            this.setState({
                animationState: 3
            })
        }
        componentWillLeave(e) {
            let {
                animationProgress: t
            } = this.state, {
                duration: n,
                getDirection: i
            } = this.props;
            this.direction = i(), this.setState({
                animationState: 1
            }), c.default.timing(t, {
                toValue: 0,
                duration: n
            }).start(e)
        }
        componentDidLeave() {
            this.setState({
                animationState: 3
            })
        }
        getMotionAnimation() {
            let {
                reducedMotion: e
            } = this.context;
            if (e.enabled) return null;
            let {
                animationMotionType: t
            } = this.props, {
                animationProgress: n,
                animationState: i
            } = this.state, s = (1 === i ? -1 : 1) * this.direction;
            switch (t) {
                case "slide":
                    return {
                        transform: [{
                            translateX: n.interpolate({
                                inputRange: [0, 2],
                                outputRange: ["".concat(150 * s, "%"), "0%"],
                                extrapolate: "clamp",
                                easing: c.default.Easing.inOut(c.default.Easing.ease)
                            })
                        }]
                    };
                case "lift":
                    return {
                        transform: [{
                            translateY: n.interpolate({
                                inputRange: [0, 2],
                                outputRange: ["".concat(10 * s, "%"), "0%"],
                                extrapolate: "clamp",
                                easing: c.default.Easing.inOut(c.default.Easing.ease)
                            })
                        }]
                    };
                default:
                    return null
            }
        }
        getAnimatedStyle() {
            var e, t;
            let {
                fillParent: n
            } = this.props, {
                animationProgress: i,
                animationState: s,
                baseHeight: r,
                targetHeight: a
            } = this.state, o = null !== (e = this.props.sideMargin) && void 0 !== e ? e : 0, l = null !== (t = this.props.verticalMargin) && void 0 !== t ? t : 0, u = 1 === s, d = 0 === s;
            return {
                overflow: d || u ? "hidden" : "visible",
                position: u ? "absolute" : void 0,
                top: u ? l : void 0,
                left: u ? o : void 0,
                right: u ? o : void 0,
                bottom: u ? l : void 0,
                ...this.getMotionAnimation(),
                opacity: i.interpolate({
                    inputRange: [0, 2],
                    outputRange: [0, 1],
                    extrapolate: "clamp",
                    easing: c.default.Easing.inOut(c.default.Easing.ease)
                }),
                height: d ? i.interpolate({
                    inputRange: [0, 1],
                    outputRange: [r, a],
                    extrapolate: "clamp",
                    easing: c.default.Easing.inOut(c.default.Easing.ease)
                }) : n ? "100%" : "auto"
            }
        }
        render() {
            let {
                fillParent: e,
                className: t,
                animatedNodeClassName: n,
                staticClassName: i
            } = this.props, {
                animationState: s
            } = this.state;
            return e ? (0, o.jsx)("div", {
                ref: this._measureRef,
                className: d(E.measurementFill, t, {
                    [d(E.measurementFillStatic, i)]: 3 === s
                }),
                children: (0, o.jsx)(c.default.div, {
                    className: d(E.animatedNode, n),
                    style: this.getAnimatedStyle(),
                    children: this.props.children
                })
            }) : (0, o.jsx)("div", {
                ref: this._measureRef,
                className: d(E.measurement, t),
                children: (0, o.jsx)(c.default.div, {
                    className: d(E.animatedNode, n),
                    style: this.getAnimatedStyle(),
                    children: this.props.children
                })
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                animationProgress: new c.default.Value(0),
                targetHeight: 0,
                baseHeight: 0,
                animationState: null
            }, this.direction = this.props.getDirection(), this._measureRef = l.createRef()
        }
    }
    h.contextType = f.AccessibilityPreferencesContext, h.defaultProps = {
        duration: 300
    };
    class g extends l.Component {
        componentDidMount() {
            this.setPrevSteps()
        }
        componentDidUpdate() {
            this.setPrevSteps()
        }
        setPrevSteps() {
            let {
                step: e,
                steps: t
            } = this.props;
            this.prevStep = e, this.prevSteps = t
        }
        render() {
            let {
                step: e,
                className: t,
                innerClassName: n,
                animatedNodeClassName: i,
                staticClassName: s,
                sideMargin: r,
                verticalMargin: a,
                children: l,
                fillParent: u,
                animationMotionType: c
            } = this.props;
            return (0, o.jsx)(_.TransitionGroup, {
                component: "div",
                className: d(E.transitionGroup, t),
                children: (0, o.jsx)(h, {
                    fillParent: u,
                    sideMargin: r,
                    animationMotionType: null != c ? c : "slide",
                    verticalMargin: a,
                    getDirection: this.getDirection,
                    getBaseHeight: this.getBaseHeight,
                    className: n,
                    animatedNodeClassName: i,
                    staticClassName: s,
                    setHeight: this.setHeight,
                    children: l
                }, "".concat(e))
            })
        }
        constructor(...e) {
            super(...e), this.stepHeights = {}, this.prevStep = null, this.prevSteps = [], this.getBaseHeight = () => null != this.prevStep && null != this.stepHeights[this.prevStep] ? this.stepHeights[this.prevStep] : 0, this.getDirection = () => {
                let {
                    steps: e,
                    step: t
                } = this.props, n = null != this.prevStep ? e.indexOf(this.prevStep) : -1, i = -1 === n && null != this.prevStep ? this.prevSteps.indexOf(this.prevStep) : -1, s = e.indexOf(t);
                return Math.max(n, i) > s ? -1 : 1
            }, this.setHeight = e => {
                let {
                    step: t
                } = this.props;
                this.stepHeights[t] = e
            }
        }
    }
    g.defaultProps = {
        fillParent: !1,
        animationMotionType: "slide"
    }
}