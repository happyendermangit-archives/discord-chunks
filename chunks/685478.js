function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("470079"),
        i = n("699581"),
        a = n("664183"),
        u = n("188104"),
        s = n("281767");

    function l(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = function(e, t) {
            var n = e.x,
                r = e.y;
            return Math.pow(n - t.x, 2) + Math.pow(r - t.y, 2)
        },
        m = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && E(e, t)
            }(h, e);
            var t, n, r, m, y, I = (t = h, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = d(t);
                if (n) {
                    var a = d(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : l(e)
            });

            function h(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, h), f(l(t = I.call(this, e)), "_ref", void 0), f(l(t), "_height", 0), f(l(t), "_width", 0), f(l(t), "_dragStart", {
                    x: 0,
                    y: 0
                }), f(l(t), "_offsetX", 0), f(l(t), "_offsetY", 0), f(l(t), "_removeListeners", function() {}), f(l(t), "handleSetRef", function(e) {
                    t._ref = e
                }), f(l(t), "handleMouseDown", function(e) {
                    var n = t.props,
                        r = n.dragAnywhere,
                        o = n.disabled,
                        i = n.selector;
                    if (!o) {
                        var a = t.state.position,
                            u = e.target;
                        if (e.button === s.MouseButtons.PRIMARY && (r || null != i && u.matches(i))) {
                            t.grabDimensions(), t._dragStart = {
                                x: e.clientX,
                                y: e.clientY
                            }, t._offsetX = e.clientX - a.x._value, t._offsetY = e.clientY - a.y._value;
                            var l = e.nativeEvent.view;
                            t._removeListeners(), l.addEventListener("mousemove", t.handleMouseMove), l.addEventListener("mouseup", t.handleMouseUp), t._removeListeners = function() {
                                l.removeEventListener("mousemove", t.handleMouseMove), l.removeEventListener("mouseup", t.handleMouseUp)
                            }
                        }
                    }
                }), f(l(t), "handleMouseMove", function(e) {
                    e.preventDefault();
                    var n = t.props,
                        r = n.onDragStart,
                        o = n.onDrag;
                    if (!n.disabled) {
                        var i = t.state,
                            a = i.dragging,
                            u = i.dragging;
                        !a && p(t._dragStart, {
                            x: e.clientX,
                            y: e.clientY
                        }) > 9 && (a = !0), a && (t.animateToPosition(e.clientX - t._offsetX, e.clientY - t._offsetY, {
                            tension: 80,
                            friction: 8
                        }, null, !1), t.setState({
                            dragging: a
                        }, function() {
                            !u && (null == r || r(e.clientX, e.clientY)), null == o || o(e.clientX, e.clientY)
                        }))
                    }
                }), f(l(t), "handleMouseUp", function(e) {
                    t._removeListeners(), t.state.dragging && t.setState({
                        dragging: !1
                    }, function() {
                        var n = t.props.onDragEnd;
                        null == n || n(e.clientX, e.clientY)
                    })
                });
                var t, n = new a.default.Value(e.initialX),
                    r = new a.default.Value(e.initialY);
                return t.state = {
                    dragging: !1,
                    position: new a.default.ValueXY({
                        x: n,
                        y: r
                    })
                }, t
            }
            return r = h, m = [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props,
                        t = e.initialX,
                        n = e.initialY;
                    this.setPosition(t, n)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._removeListeners()
                }
            }, {
                key: "animateToPosition",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        o = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                    o && this.grabDimensions();
                    var i = this.translate(e, t);
                    a.default.spring(this.state.position, _({
                        toValue: {
                            x: i.x,
                            y: i.y
                        }
                    }, n)).start(r)
                }
            }, {
                key: "setPosition",
                value: function(e, t) {
                    var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    n && this.grabDimensions();
                    var r = this.translate(e, t);
                    this.state.position.setValue({
                        x: r.x,
                        y: r.y
                    })
                }
            }, {
                key: "grabDimensions",
                value: function() {
                    var e = (0, i.findDOMNode)(this._ref);
                    (0, u.isElement)(e) && (this._height = e.clientHeight, this._width = e.clientWidth)
                }
            }, {
                key: "translate",
                value: function(e, t) {
                    var n = this.props,
                        r = n.maxX,
                        o = n.maxY;
                    return e < 0 ? e = 0 : e > r - this._width && (e = r - this._width), t < 0 ? t = 0 : t > o - this._height && (t = o - this._height), {
                        x: e,
                        y: t
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state,
                        t = e.dragging,
                        n = e.position,
                        r = this.props,
                        i = r.className,
                        u = r.children,
                        s = [0, 1],
                        l = ["0px", "1px"],
                        c = a.default.accelerate(_({
                            pointerEvents: t ? "none" : "auto",
                            transform: [{
                                translateX: n.x.interpolate({
                                    inputRange: s,
                                    outputRange: l
                                })
                            }, {
                                translateY: n.y.interpolate({
                                    inputRange: s,
                                    outputRange: l
                                })
                            }]
                        }, this.props.style));
                    return o.createElement(a.default.div, {
                        ref: this.handleSetRef,
                        className: i,
                        onMouseDown: this.handleMouseDown,
                        style: c
                    }, u)
                }
            }], c(r.prototype, m), y && c(r, y), h
        }(o.PureComponent);
    f(m, "defaultProps", {
        maxX: 0,
        maxY: 0,
        initialX: 0,
        initialY: 0,
        disabled: !1,
        dragAnywhere: !1
    }), t.default = m
}