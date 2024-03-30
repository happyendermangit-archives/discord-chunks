function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("664183"),
        s = n("314254");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = {
            friction: 14,
            tension: 200
        },
        m = {
            DURATION: "DURATION",
            VOLUME: "VOLUME"
        };

    function y(e) {
        var t = 0 | e,
            n = t % 60;
        return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
    }
    var I = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(O, e);
        var t, n, r, i, I, h = (t = O, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : c(e)
        });

        function O() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, O), e = h.apply(this, arguments), d(c(e), "state", {
                animatedProgress: new u.default.Value(0),
                dragging: !1,
                offsetLeft: 0,
                offsetWidth: 0,
                previewWidth: new u.default.Value(0)
            }), d(c(e), "wrapper", void 0), d(c(e), "bubble", void 0), d(c(e), "_previewId", void 0), d(c(e), "_progressId", void 0), d(c(e), "handlePreviewChange", function() {
                var t = c(e),
                    n = t.bubble,
                    r = t.state,
                    o = r.dragging,
                    i = r.previewWidth,
                    a = t.props.value;
                !o && null != n && (n.innerText = y(i._value * a))
            }), d(c(e), "handleAnimatedChange", function() {
                var t = c(e),
                    n = t.bubble,
                    r = t.state,
                    o = r.dragging,
                    i = r.animatedProgress,
                    a = t.props.value;
                o && null != n && (n.innerText = y(i._value * a))
            }), d(c(e), "handleMouseMove", function(t) {
                var n = e.state,
                    r = n.dragging,
                    o = n.previewWidth;
                if (!r) {
                    var i = t.clientX,
                        a = t.clientY;
                    o.setValue(e.calculatePercentage(i, a))
                }
            }), d(c(e), "handleDragMove", function(t) {
                var n = e.props,
                    r = n.onDrag,
                    o = n.type,
                    i = t.clientX,
                    a = t.clientY;
                r(e.calculatePercentage(i, a), o)
            }), d(c(e), "handleDragStart", function(t) {
                var n = e.props,
                    r = n.onDragStart,
                    o = n.onDrag,
                    i = n.type,
                    a = n.currentWindow,
                    u = t.clientX,
                    s = t.clientY;
                if (t.preventDefault(), null != e.wrapper) {
                    var l = e.wrapper.getBoundingClientRect(),
                        c = l.left,
                        f = l.width;
                    e.setState({
                        dragging: !0,
                        offsetLeft: c,
                        offsetWidth: f
                    }, function() {
                        r(i), o(e.calculatePercentage(u, s), i), a.removeEventListener("mouseup", e.handleDragEnd, !1), a.removeEventListener("mousemove", e.handleDragMove, !1), a.addEventListener("mouseup", e.handleDragEnd, !1), a.addEventListener("mousemove", e.handleDragMove, !1)
                    })
                }
            }), d(c(e), "handleDragEnd", function() {
                var t = e.props,
                    n = t.onDragEnd,
                    r = t.currentWindow;
                n(), r.removeEventListener("mouseup", e.handleDragEnd, !1), r.removeEventListener("mousemove", e.handleDragMove, !1), e.setState({
                    dragging: !1
                })
            }), d(c(e), "setBubbleRef", function(t) {
                null == t ? e.bubble = null : null != t.componentRef ? e.bubble = t.componentRef : null != t.refs && (e.bubble = t.refs.node)
            }), e
        }
        return r = O, i = [{
            key: "componentDidMount",
            value: function() {
                var e = this.state,
                    t = e.previewWidth,
                    n = e.animatedProgress;
                this._previewId = t.addListener(this.handlePreviewChange), this._progressId = n.addListener(this.handleAnimatedChange)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                var e = this.state,
                    t = e.previewWidth,
                    n = e.animatedProgress;
                t.removeListener(this._previewId), n.removeListener(this._progressId), window.removeEventListener("mouseup", this.handleDragEnd, !1), window.removeEventListener("mousemove", this.handleDragMove, !1)
            }
        }, {
            key: "componentDidUpdate",
            value: function(e, t) {
                var n = this.state,
                    r = n.dragging,
                    o = n.previewWidth,
                    i = n.animatedProgress;
                !r && t.dragging && o.setValue(i._value)
            }
        }, {
            key: "setGrabber",
            value: function(e) {
                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = this.state.animatedProgress;
                t ? u.default.spring(n, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            d(e, t, n[t])
                        })
                    }
                    return e
                }({
                    toValue: e
                }, p)).start() : n.setValue(e)
            }
        }, {
            key: "calculatePercentage",
            value: function(e, t) {
                var n = this.wrapper,
                    r = this.props.type;
                if (null == n) return 0;
                var o = n.getBoundingClientRect(),
                    i = o.left,
                    a = o.width,
                    u = o.bottom,
                    s = o.height;
                return Math.min(1, Math.max(0, r === m.VOLUME ? (u - t) / s : (e - i) / a))
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props,
                    n = t.buffers,
                    r = t.type,
                    i = t.className,
                    c = t.sliderClassName,
                    f = this.state,
                    d = f.dragging,
                    _ = f.previewWidth,
                    E = f.animatedProgress;
                return o.createElement("div", {
                    className: a()(i, r === m.VOLUME ? s.vertical : s.horizontal)
                }, o.createElement("div", {
                    className: a()(c, d ? s.mediaBarInteractionDragging : s.mediaBarInteraction, r === m.VOLUME ? s.mediaBarInteractionVolume : null),
                    onMouseDown: this.handleDragStart,
                    onMouseMove: this.handleMouseMove,
                    ref: function(t) {
                        return e.wrapper = t
                    }
                }, o.createElement("div", {
                    className: a()(s.mediaBarWrapper, r === m.VOLUME ? s.mediaBarWrapperVolume : null)
                }, null != n ? n.map(function(e, t) {
                    var n, r, i = (r = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(n = e) || function(e, t) {
                            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    u = !0, r = e
                                } finally {
                                    try {
                                        !a && null != o.return && o.return()
                                    } finally {
                                        if (u) throw r
                                    }
                                }
                                return i
                            }
                        }(n, r) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return l(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                            }
                        }(n, r) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        a = i[0],
                        u = i[1];
                    return o.createElement("div", {
                        className: s.buffer,
                        key: t,
                        style: {
                            width: "".concat(100 * u, "%"),
                            left: "".concat(100 * a, "%")
                        }
                    })
                }) : null, r === m.DURATION ? o.createElement(u.default.div, {
                    className: s.mediaBarPreview,
                    style: {
                        width: _.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0%", "100%"]
                        })
                    }
                }) : null, o.createElement(u.default.div, {
                    className: s.mediaBarProgress,
                    style: {
                        width: E.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0%", "100%"]
                        })
                    }
                }, o.createElement("span", {
                    className: s.mediaBarGrabber
                })), r === m.DURATION ? o.createElement(u.default.div, {
                    ref: this.setBubbleRef,
                    className: s.bubble,
                    style: {
                        left: (d ? E : _).interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0%", "100%"]
                        })
                    }
                }) : null)))
            }
        }], f(r.prototype, i), I && f(r, I), O
    }(o.Component);
    d(I, "Types", m), d(I, "defaultProps", {
        currentWindow: window
    }), t.default = I
}