function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BackgroundTransition: function() {
            return g
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("664183"),
        l = n("945816"),
        c = n("467645"),
        f = n("143953"),
        d = n("281767"),
        _ = n("684929");

    function E(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function p(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t && m(e.prototype, t), n && m(e, n), e
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && T(e, t)
    }

    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function S(e) {
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
            var n, r, o, i = h(e);
            if (t) {
                var a = h(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : E(n)
        }
    }
    var v = (I(r = {}, d.ChannelLayouts.NORMAL, _.normal), I(r, d.ChannelLayouts.MINIMUM, _.minimum), I(r, d.ChannelLayouts.NO_CHAT, _.noChat), I(r, d.ChannelLayouts.FULL_SCREEN, _.fullScreen), r),
        g = function(e) {
            O(n, e);
            var t = S(n);

            function n(e) {
                var r;
                return p(this, n), (r = t.call(this, e)).state = {
                    animation: new s.default.Value(0)
                }, r
            }
            return y(n, [{
                key: "componentDidAppear",
                value: function() {
                    this.state.animation.setValue(1)
                }
            }, {
                key: "componentWillEnter",
                value: function(e) {
                    var t = this.state.animation;
                    t.setValue(0), s.default.spring(t, {
                        toValue: 1,
                        overshootClamping: !0
                    }).start(e)
                }
            }, {
                key: "componentWillLeave",
                value: function(e) {
                    s.default.spring(this.state.animation, {
                        toValue: 0,
                        overshootClamping: !0
                    }).start(e)
                }
            }, {
                key: "render",
                value: function() {
                    return i.createElement(s.default.div, {
                        className: u()(_.videoBackgroundTransition, this.props.className),
                        style: {
                            opacity: this.state.animation
                        }
                    }, this.props.children)
                }
            }]), n
        }(i.PureComponent),
        A = function(e) {
            O(n, e);
            var t = S(n);

            function n(e) {
                var r;
                return p(this, n), I(E(r = t.call(this, e)), "_timeout", new l.Timeout), I(E(r), "handleMouseEvent", function() {
                    var e = r.props.layout;
                    (e === d.ChannelLayouts.FULL_SCREEN || e === d.ChannelLayouts.NO_CHAT) && (r._timeout.start(3e3, function() {
                        return r.setState({
                            idle: !0
                        })
                    }), r.state.idle && r.setState({
                        idle: !1
                    }))
                }), r.state = {
                    idle: !1,
                    backgroundAnimation: new s.default.Value(0),
                    layoutProp: e.layout
                }, r
            }
            return y(n, [{
                key: "componentDidMount",
                value: function() {
                    document.addEventListener("mousedown", this.handleMouseEvent, !0), document.addEventListener("mousemove", this.handleMouseEvent, !0)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.removeEventListener("mousedown", this.handleMouseEvent, !0), document.removeEventListener("mousemove", this.handleMouseEvent, !0), this._timeout.stop()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.layout !== e.layout && this._timeout.stop()
                }
            }, {
                key: "renderBackground",
                value: function() {
                    var e = this.props,
                        t = e.background,
                        n = e.backgroundKey,
                        r = e.layout,
                        o = "".concat(r, "-").concat(null != n ? n : "");
                    return i.createElement(c.TransitionGroup, {
                        className: _.videoBackground,
                        component: "div"
                    }, i.createElement(g, {
                        key: o
                    }, t))
                }
            }, {
                key: "renderContents",
                value: function() {
                    var e = this.props,
                        t = e.top,
                        n = e.center,
                        r = e.bottom,
                        o = e.layout,
                        a = e.focused,
                        s = this.state.idle;
                    return i.createElement(f.default, {
                        className: u()(_.video, v[o], I({}, _.idle, s)),
                        direction: f.default.Direction.VERTICAL,
                        justify: f.default.Justify.CENTER
                    }, i.createElement(f.default, {
                        className: _.videoWrapper,
                        direction: f.default.Direction.VERTICAL
                    }, this.renderBackground(), i.createElement(f.default, {
                        className: u()(_.videoInner, I({}, _.focused, a)),
                        direction: f.default.Direction.VERTICAL,
                        justify: f.default.Justify.BETWEEN
                    }, i.createElement(f.default, {
                        className: _.videoTop,
                        grow: 0
                    }, t), i.createElement(f.default, {
                        className: _.videoCenter
                    }, n), i.createElement(f.default, {
                        className: _.videoBottom,
                        grow: 0
                    }, r))))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.layout,
                        n = e.className,
                        r = e.animated;
                    return i.createElement("div", {
                        className: u()(_.videoHeight, v[t], n, I({}, _.animated, r))
                    }, this.renderContents())
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    if (e.layout !== t.layoutProp) return t.idle ? {
                        idle: !1,
                        layoutProp: e.layout
                    } : {
                        layoutProp: e.layout
                    };
                    return null
                }
            }]), n
        }(i.PureComponent);
    I(A, "defaultProps", {
        layout: d.ChannelLayouts.MINIMUM,
        animated: !0
    })
}