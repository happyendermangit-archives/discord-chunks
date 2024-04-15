function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Sequencer: function() {
            return A
        }
    }), n("47120");
    var i, r, s, a, o, l, u = n("735250"),
        d = n("470079"),
        _ = n("120356"),
        c = n.n(_),
        E = n("748780"),
        I = n("215569"),
        T = n("186325"),
        f = n("657544");

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(o = i || (i = {}))[o.ENTERING = 0] = "ENTERING", o[o.LEAVING = 1] = "LEAVING", o[o.APPEARING = 2] = "APPEARING", o[o.STATIC = 3] = "STATIC", (l = r || (r = {})).SLIDE = "slide", l.LIFT = "lift";
    class h extends(s = d.PureComponent) {
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
            }), this.props.setHeight(this.state.targetHeight), E.default.timing(n, {
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
            }), E.default.timing(t, {
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
            } = this.state, r = (1 === i ? -1 : 1) * this.direction;
            switch (t) {
                case "slide":
                    return {
                        transform: [{
                            translateX: n.interpolate({
                                inputRange: [0, 2],
                                outputRange: ["".concat(150 * r, "%"), "0%"],
                                extrapolate: "clamp",
                                easing: E.default.Easing.inOut(E.default.Easing.ease)
                            })
                        }]
                    };
                case "lift":
                    return {
                        transform: [{
                            translateY: n.interpolate({
                                inputRange: [0, 2],
                                outputRange: ["".concat(10 * r, "%"), "0%"],
                                extrapolate: "clamp",
                                easing: E.default.Easing.inOut(E.default.Easing.ease)
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
                animationState: r,
                baseHeight: s,
                targetHeight: a
            } = this.state, o = null !== (e = this.props.sideMargin) && void 0 !== e ? e : 0, l = null !== (t = this.props.verticalMargin) && void 0 !== t ? t : 0, u = 1 === r, d = 0 === r;
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
                    easing: E.default.Easing.inOut(E.default.Easing.ease)
                }),
                height: d ? i.interpolate({
                    inputRange: [0, 1],
                    outputRange: [s, a],
                    extrapolate: "clamp",
                    easing: E.default.Easing.inOut(E.default.Easing.ease)
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
                animationState: r
            } = this.state;
            return e ? (0, u.jsx)("div", {
                ref: this._measureRef,
                className: c()(f.measurementFill, t, {
                    [c()(f.measurementFillStatic, i)]: 3 === r
                }),
                children: (0, u.jsx)(E.default.div, {
                    className: c()(f.animatedNode, n),
                    style: this.getAnimatedStyle(),
                    children: this.props.children
                })
            }) : (0, u.jsx)("div", {
                ref: this._measureRef,
                className: c()(f.measurement, t),
                children: (0, u.jsx)(E.default.div, {
                    className: c()(f.animatedNode, n),
                    style: this.getAnimatedStyle(),
                    children: this.props.children
                })
            })
        }
        constructor(...e) {
            super(...e), S(this, "state", {
                animationProgress: new E.default.Value(0),
                targetHeight: 0,
                baseHeight: 0,
                animationState: null
            }), S(this, "direction", this.props.getDirection()), S(this, "_measureRef", d.createRef())
        }
    }
    S(h, "contextType", T.AccessibilityPreferencesContext), S(h, "defaultProps", {
        duration: 300
    });
    class A extends(a = d.Component) {
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
                staticClassName: r,
                sideMargin: s,
                verticalMargin: a,
                children: o,
                fillParent: l,
                animationMotionType: d
            } = this.props;
            return (0, u.jsx)(I.TransitionGroup, {
                component: "div",
                className: c()(f.transitionGroup, t),
                children: (0, u.jsx)(h, {
                    fillParent: l,
                    sideMargin: s,
                    animationMotionType: null != d ? d : "slide",
                    verticalMargin: a,
                    getDirection: this.getDirection,
                    getBaseHeight: this.getBaseHeight,
                    className: n,
                    animatedNodeClassName: i,
                    staticClassName: r,
                    setHeight: this.setHeight,
                    children: o
                }, "".concat(e))
            })
        }
        constructor(...e) {
            super(...e), S(this, "stepHeights", {}), S(this, "prevStep", null), S(this, "prevSteps", []), S(this, "getBaseHeight", () => null != this.prevStep && null != this.stepHeights[this.prevStep] ? this.stepHeights[this.prevStep] : 0), S(this, "getDirection", () => {
                let {
                    steps: e,
                    step: t
                } = this.props, n = null != this.prevStep ? e.indexOf(this.prevStep) : -1, i = -1 === n && null != this.prevStep ? this.prevSteps.indexOf(this.prevStep) : -1;
                return Math.max(n, i) > e.indexOf(t) ? -1 : 1
            }), S(this, "setHeight", e => {
                let {
                    step: t
                } = this.props;
                this.stepHeights[t] = e
            })
        }
    }
    S(A, "defaultProps", {
        fillParent: !1,
        animationMotionType: "slide"
    })
}