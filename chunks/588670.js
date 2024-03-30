function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Sequencer: function() {
            return b
        }
    });
    var r, o, i, a, u, s, l = n("470079"),
        c = n("803997"),
        f = n.n(c),
        d = n("664183"),
        _ = n("467645"),
        E = n("676250"),
        p = n("657544");

    function m(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function y(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e, t, n) {
        return t && I(e.prototype, t), n && I(e, n), e
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function S(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && v(e, t)
    }

    function v(e, t) {
        return (v = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function g(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = T(e);
            if (t) {
                var a = T(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : m(n)
        }
    }(r = i || (i = {}))[r.ENTERING = 0] = "ENTERING", r[r.LEAVING = 1] = "LEAVING", r[r.APPEARING = 2] = "APPEARING", r[r.STATIC = 3] = "STATIC", (o = a || (a = {})).SLIDE = "slide", o.LIFT = "lift";
    var A = function(e) {
        S(n, e);
        var t = g(n);

        function n() {
            var e;
            return y(this, n), e = t.apply(this, arguments), O(m(e), "state", {
                animationProgress: new d.default.Value(0),
                targetHeight: 0,
                baseHeight: 0,
                animationState: null
            }), O(m(e), "direction", e.props.getDirection()), O(m(e), "_measureRef", l.createRef()), e
        }
        return h(n, [{
            key: "componentDidMount",
            value: function() {
                if (null != this._measureRef.current) {
                    var e = this._measureRef.current.getBoundingClientRect().height;
                    this.setState({
                        targetHeight: e,
                        baseHeight: this.props.getBaseHeight()
                    })
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function(e, t) {
                t.targetHeight !== this.state.targetHeight && this.props.setHeight(this.state.targetHeight)
            }
        }, {
            key: "componentWillAppear",
            value: function(e) {
                this.setState({
                    animationState: 2
                }), e()
            }
        }, {
            key: "componentDidAppear",
            value: function() {
                var e = this.state,
                    t = e.animationProgress,
                    n = e.targetHeight;
                t.setValue(2), this.setState({
                    animationState: 3,
                    baseHeight: n
                })
            }
        }, {
            key: "componentWillEnter",
            value: function(e) {
                var t = this.props.duration,
                    n = this.state.animationProgress;
                this.setState({
                    animationState: 0
                }), this.props.setHeight(this.state.targetHeight), d.default.timing(n, {
                    toValue: 2,
                    duration: t,
                    delay: t / 2
                }).start(e)
            }
        }, {
            key: "componentDidEnter",
            value: function() {
                this.setState({
                    animationState: 3
                })
            }
        }, {
            key: "componentWillLeave",
            value: function(e) {
                var t = this.state.animationProgress,
                    n = this.props,
                    r = n.duration,
                    o = n.getDirection;
                this.direction = o(), this.setState({
                    animationState: 1
                }), d.default.timing(t, {
                    toValue: 0,
                    duration: r
                }).start(e)
            }
        }, {
            key: "componentDidLeave",
            value: function() {
                this.setState({
                    animationState: 3
                })
            }
        }, {
            key: "getMotionAnimation",
            value: function() {
                if (this.context.reducedMotion.enabled) return null;
                var e = this.props.animationMotionType,
                    t = this.state,
                    n = t.animationProgress,
                    r = t.animationState,
                    o = (1 === r ? -1 : 1) * this.direction;
                switch (e) {
                    case "slide":
                        return {
                            transform: [{
                                translateX: n.interpolate({
                                    inputRange: [0, 2],
                                    outputRange: ["".concat(150 * o, "%"), "0%"],
                                    extrapolate: "clamp",
                                    easing: d.default.Easing.inOut(d.default.Easing.ease)
                                })
                            }]
                        };
                    case "lift":
                        return {
                            transform: [{
                                translateY: n.interpolate({
                                    inputRange: [0, 2],
                                    outputRange: ["".concat(10 * o, "%"), "0%"],
                                    extrapolate: "clamp",
                                    easing: d.default.Easing.inOut(d.default.Easing.ease)
                                })
                            }]
                        };
                    default:
                        return null
                }
            }
        }, {
            key: "getAnimatedStyle",
            value: function() {
                var e, t, n, r, o = this.props.fillParent,
                    i = this.state,
                    a = i.animationProgress,
                    u = i.animationState,
                    s = i.baseHeight,
                    l = i.targetHeight,
                    c = null !== (n = this.props.sideMargin) && void 0 !== n ? n : 0,
                    f = null !== (r = this.props.verticalMargin) && void 0 !== r ? r : 0,
                    _ = 1 === u,
                    E = 0 === u;
                return e = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            O(e, t, n[t])
                        })
                    }
                    return e
                }({}, {
                    overflow: E || _ ? "hidden" : "visible",
                    position: _ ? "absolute" : void 0,
                    top: _ ? f : void 0,
                    left: _ ? c : void 0,
                    right: _ ? c : void 0,
                    bottom: _ ? f : void 0
                }, this.getMotionAnimation()), t = (t = {
                    opacity: a.interpolate({
                        inputRange: [0, 2],
                        outputRange: [0, 1],
                        extrapolate: "clamp",
                        easing: d.default.Easing.inOut(d.default.Easing.ease)
                    }),
                    height: E ? a.interpolate({
                        inputRange: [0, 1],
                        outputRange: [s, l],
                        extrapolate: "clamp",
                        easing: d.default.Easing.inOut(d.default.Easing.ease)
                    }) : o ? "100%" : "auto"
                }, t), Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.fillParent,
                    n = e.className,
                    r = e.animatedNodeClassName,
                    o = e.staticClassName,
                    i = this.state.animationState;
                return t ? l.createElement("div", {
                    ref: this._measureRef,
                    className: f()(p.measurementFill, n, O({}, f()(p.measurementFillStatic, o), 3 === i))
                }, l.createElement(d.default.div, {
                    className: f()(p.animatedNode, r),
                    style: this.getAnimatedStyle()
                }, this.props.children)) : l.createElement("div", {
                    ref: this._measureRef,
                    className: f()(p.measurement, n)
                }, l.createElement(d.default.div, {
                    className: f()(p.animatedNode, r),
                    style: this.getAnimatedStyle()
                }, this.props.children))
            }
        }]), n
    }(l.PureComponent);
    O(A, "contextType", E.AccessibilityPreferencesContext), O(A, "defaultProps", {
        duration: 300
    });
    var b = function(e) {
        S(n, e);
        var t = g(n);

        function n() {
            var e;
            return y(this, n), e = t.apply(this, arguments), O(m(e), "stepHeights", {}), O(m(e), "prevStep", null), O(m(e), "prevSteps", []), O(m(e), "getBaseHeight", function() {
                return null != e.prevStep && null != e.stepHeights[e.prevStep] ? e.stepHeights[e.prevStep] : 0
            }), O(m(e), "getDirection", function() {
                var t = e.props,
                    n = t.steps,
                    r = t.step,
                    o = null != e.prevStep ? n.indexOf(e.prevStep) : -1,
                    i = -1 === o && null != e.prevStep ? e.prevSteps.indexOf(e.prevStep) : -1;
                return Math.max(o, i) > n.indexOf(r) ? -1 : 1
            }), O(m(e), "setHeight", function(t) {
                var n = e.props.step;
                e.stepHeights[n] = t
            }), e
        }
        return h(n, [{
            key: "componentDidMount",
            value: function() {
                this.setPrevSteps()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.setPrevSteps()
            }
        }, {
            key: "setPrevSteps",
            value: function() {
                var e = this.props,
                    t = e.step,
                    n = e.steps;
                this.prevStep = t, this.prevSteps = n
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.step,
                    n = e.className,
                    r = e.innerClassName,
                    o = e.animatedNodeClassName,
                    i = e.staticClassName,
                    a = e.sideMargin,
                    u = e.verticalMargin,
                    s = e.children,
                    c = e.fillParent,
                    d = e.animationMotionType;
                return l.createElement(_.TransitionGroup, {
                    component: "div",
                    className: f()(p.transitionGroup, n)
                }, l.createElement(A, {
                    key: "".concat(t),
                    fillParent: c,
                    sideMargin: a,
                    animationMotionType: null != d ? d : "slide",
                    verticalMargin: u,
                    getDirection: this.getDirection,
                    getBaseHeight: this.getBaseHeight,
                    className: r,
                    animatedNodeClassName: o,
                    staticClassName: i,
                    setHeight: this.setHeight
                }, s))
            }
        }]), n
    }(l.Component);
    O(b, "defaultProps", {
        fillParent: !1,
        animationMotionType: "slide"
    })
}