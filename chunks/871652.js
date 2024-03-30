function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Slider: function() {
            return A
        }
    });
    var r, o, i, a = n("470079"),
        u = n("803997"),
        s = n.n(u),
        l = n("392711"),
        c = n.n(l),
        f = n("188104"),
        d = n("35628"),
        _ = n("582444"),
        E = n("622780"),
        p = n("465552");

    function m(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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

    function O(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                I(e, t, n[t])
            })
        }
        return e
    }

    function T(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
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

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function v(e, t) {
        for (var n = 0, r = 0; r < t.length; r++) {
            var o = t[r];
            if (e === o) return r;
            if (e < o) {
                if (0 === n || o - e < n) return r;
                return r - 1
            }
            n = e - o
        }
        return null
    }(r = o || (o = {}))[r.ABOVE = 0] = "ABOVE", r[r.BELOW = 1] = "BELOW";

    function g(e) {
        return O({
            value: Math.min(Math.max(e.initialValue, e.minValue), e.maxValue),
            initialValueProp: e.initialValue,
            newClosestIndex: null
        }, function(e) {
            var t = e.markers,
                n = e.initialValue,
                r = e.minValue,
                o = e.maxValue,
                i = e.equidistant,
                a = [],
                u = [];
            if (null == t) return {
                min: r,
                max: o,
                range: o - r,
                sortedMarkers: a,
                markerPositions: u
            };
            var s = v(n, a = t.sort(function(e, t) {
                    return e - t
                })),
                l = a[0],
                c = a[a.length - 1],
                f = c - l;
            if (i) {
                var d = 100 / (a.length - 1);
                u = a.map(function(e, t) {
                    return t * d
                })
            } else u = a.map(function(e) {
                return 100 * (e - l) / f
            });
            return {
                min: l,
                max: c,
                range: f,
                sortedMarkers: a,
                markerPositions: u,
                closestMarkerIndex: s
            }
        }(e))
    }
    var A = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && S(e, t)
        }(l, e);
        var t, n, r, o, i, u = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = h(t);
            if (n) {
                var a = h(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : m(e)
        });

        function l(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), I(m(t = u.call(this, e)), "containerRef", a.createRef()), I(m(t), "grabberRef", a.createRef()), I(m(t), "moveGrabber", function(e) {
                var n = t.state,
                    r = n.sortedMarkers,
                    o = n.value,
                    i = n.min,
                    a = n.max,
                    u = t.props,
                    s = u.asValueChanges,
                    l = u.onValueChange,
                    f = u.stickToMarkers,
                    d = {};
                if (f) {
                    var _ = r.indexOf(o);
                    if (_ < 0) return;
                    var E = _ + e,
                        p = r[E];
                    if (null == p) return;
                    d.value = p, d.closestMarkerIndex = E, d.newClosestIndex = E
                } else d.value = c().clamp(o + e, i, a);
                t.setState(d), d.value !== t.state.value && (null == s || s(d.value), null == l || l(d.value))
            }), I(m(t), "handleContainerMouseDown", function(e) {
                var n, r = t.props,
                    o = r.disabled,
                    i = r.maxValue,
                    a = r.minValue,
                    u = r.asValueChanges,
                    s = r.onValueChange,
                    l = r.stickToMarkers,
                    c = t.state,
                    d = c.sortedMarkers,
                    _ = c.markerPositions;
                if (!o) {
                    var E = e.clientX,
                        p = e.currentTarget;
                    if ((0, f.isElement)(p)) {
                        var m = p.getBoundingClientRect(),
                            y = (E - m.left) / m.width;
                        if (l) {
                            var I = _.reduce(function(e, t, n) {
                                var r = Math.abs(t / 100 - y);
                                return r <= e.smallestDelta ? {
                                    smallestDelta: r,
                                    nextClosestMarkerIndex: n
                                } : e
                            }, {
                                smallestDelta: 1,
                                nextClosestMarkerIndex: -1
                            }).nextClosestMarkerIndex;
                            if (-1 === I) return;
                            t.setState({
                                closestMarkerIndex: I
                            }), n = d[I]
                        } else n = a + (i - a) * y, t.setState({
                            value: n
                        }), t.handleMouseDown(e);
                        null != s && s(n), null != u && u(n)
                    }
                }
            }), I(m(t), "handleKeyDown", function(e) {
                var n = t.props,
                    r = n.disabled,
                    o = n.orientation,
                    i = n.keyboardStep,
                    a = void 0 === i ? 1 : i;
                if (!r) {
                    var u = e.key,
                        s = [],
                        l = [];
                    switch (o) {
                        case "horizontal":
                            s = ["ArrowRight"], l = ["ArrowLeft"];
                            break;
                        case "vertical":
                            s = ["ArrowUp"], l = ["ArrowDown"];
                            break;
                        default:
                            s = ["ArrowRight", "ArrowUp"], l = ["ArrowLeft", "ArrowDown"]
                    }
                    l.includes(u) ? (e.preventDefault(), e.stopPropagation(), t.moveGrabber(-a)) : s.includes(u) && (e.preventDefault(), e.stopPropagation(), t.moveGrabber(a))
                }
            }), I(m(t), "handleMouseDown", function(e) {
                if (!t.props.disabled) {
                    e.stopPropagation();
                    var n, r, o = t.containerRef.current;
                    if (null == o || null === (n = o.ownerDocument) || void 0 === n || n.addEventListener("mousemove", t.handleMouseMove, !0), null == o || null === (r = o.ownerDocument) || void 0 === r || r.addEventListener("mouseup", t.handleMouseUp, !0), !(0, f.isElement)(o)) throw Error("[UIKit]Slider.handleMouseDown(): assert failed: domNode nodeType !== Element");
                    t.setState({
                        x: e.clientX,
                        active: !0,
                        boundingRect: o.getBoundingClientRect(),
                        newClosestIndex: t.state.closestMarkerIndex
                    })
                }
            }), I(m(t), "handleMouseUp", function(e) {
                e.stopPropagation(), t.reset();
                var n = t.props,
                    r = n.onValueChange,
                    o = n.stickToMarkers,
                    i = t.state.newClosestIndex;
                o && null != i ? (null == r || r(t.state.sortedMarkers[i]), t.setState({
                    newClosestIndex: null,
                    closestMarkerIndex: i
                })) : null == r || r(t.state.value), t.setState({
                    active: !1
                })
            }), I(m(t), "handleMouseMove", function(e) {
                e.preventDefault(), t.props.stickToMarkers ? t.moveStaggered(e) : t.moveSmoothly(e)
            }), I(m(t), "onFocus", function() {
                t.setState({
                    focused: !0
                })
            }), I(m(t), "onBlur", function() {
                t.setState({
                    focused: !1
                })
            }), I(m(t), "moveSmoothly", function(e) {
                var n = t.props,
                    r = n.minValue,
                    o = n.maxValue,
                    i = n.asValueChanges,
                    a = t.state.boundingRect;
                if (null != a) {
                    var u = a.left,
                        s = a.right,
                        l = o - r,
                        c = Math.min(Math.max(r + (e.clientX - u) / (s - u) * l, r), o);
                    null == i || i(c), t.setState({
                        value: c
                    })
                }
            }), t.state = O({
                active: !1,
                focused: !1
            }, g(e)), t
        }
        return r = l, o = [{
            key: "componentWillUnmount",
            value: function() {
                this.reset()
            }
        }, {
            key: "renderMark",
            value: function(e) {
                var t = this.props.onMarkerRender;
                return null != t ? t(e) : e
            }
        }, {
            key: "render",
            value: function() {
                var e, t, n = this,
                    r = this.state,
                    o = r.value,
                    i = r.active,
                    u = r.focused,
                    l = r.sortedMarkers,
                    c = r.markerPositions,
                    f = r.closestMarkerIndex,
                    m = r.newClosestIndex,
                    y = r.min,
                    h = r.max,
                    S = this.props,
                    v = S.disabled,
                    g = S.stickToMarkers,
                    A = S.className,
                    b = S.children,
                    N = S.barStyles,
                    R = S.fillStyles,
                    C = S.mini,
                    P = S.hideBubble,
                    D = S.defaultValue,
                    L = S.orientation,
                    M = S.onValueRender,
                    U = S.renderMarker,
                    w = S.getAriaValueText,
                    k = S.barClassName,
                    G = S.grabberClassName,
                    B = S.grabberStyles,
                    j = void 0 === B ? {} : B,
                    F = S.markerPosition,
                    V = void 0 === F ? 0 : F,
                    H = S["aria-hidden"],
                    x = S["aria-label"],
                    Y = S["aria-labelledby"],
                    W = S["aria-describedby"],
                    K = 0;
                g ? null != c && (null != m ? K = c[m] : null != f && (K = c[f])) : K = this.scaleValue(o);
                var z = "".concat(K, "%"),
                    X = null != c && null != l ? c.map(function(e, t) {
                        var r, o = l[t],
                            i = null != D && D === o,
                            u = n.renderMark(o);
                        return a.createElement("div", {
                            key: t,
                            className: s()(p.mark, (I(r = {}, p.defaultValue, i), I(r, p.markAbove, 0 === V), I(r, p.markBelow, 1 === V), r)),
                            style: {
                                left: "".concat(e, "%")
                            }
                        }, null != U ? U(o) : a.createElement(a.Fragment, null, a.createElement("div", {
                            className: p.markValue
                        }, u), a.createElement("div", {
                            className: p["markDash".concat(null == u ? "simple" : "")]
                        })))
                    }) : null,
                    q = null != M ? M(o) : "".concat(K.toFixed(0), "%"),
                    Q = null !== (e = null == w ? void 0 : w(o)) && void 0 !== e ? e : void 0;
                return a.createElement(d.FocusRing, {
                    focusTarget: this.containerRef,
                    ringTarget: this.grabberRef
                }, a.createElement("div", {
                    className: s()(p.slider, A, (I(t = {}, p.disabled, v), I(t, p.mini, C), t)),
                    "aria-valuemin": y,
                    "aria-valuemax": h,
                    "aria-valuenow": o,
                    "aria-disabled": v,
                    "aria-orientation": L,
                    "aria-hidden": H,
                    "aria-label": x,
                    "aria-labelledby": Y,
                    "aria-describedby": W,
                    "aria-valuetext": Q,
                    role: "slider",
                    tabIndex: 0,
                    onKeyDown: this.handleKeyDown,
                    onMouseDown: this.handleContainerMouseDown,
                    onFocus: this.onFocus,
                    onBlur: this.onBlur,
                    ref: this.containerRef
                }, a.createElement("div", {
                    className: p.track
                }, X), a.createElement("div", {
                    className: s()(p.bar, k),
                    style: N
                }, a.createElement("div", {
                    className: p.barFill,
                    style: T(O({}, R), {
                        width: z
                    })
                })), b, a.createElement("div", {
                    className: p.track
                }, a.createElement(_.Tooltip, {
                    color: _.Tooltip.Colors.GREY,
                    hideOnClick: !1,
                    text: P || g ? null : q,
                    forceOpen: i || u && E.default.keyboardModeEnabled
                }, function(e) {
                    return a.createElement("div", T(O({}, e), {
                        className: s()(p.grabber, G),
                        style: T(O({}, j), {
                            left: z
                        }),
                        onMouseDown: n.handleMouseDown,
                        ref: n.grabberRef
                    }))
                }))))
            }
        }, {
            key: "reset",
            value: function() {
                var e, t, n, r;
                null === (t = this.containerRef.current) || void 0 === t || null === (e = t.ownerDocument) || void 0 === e || e.removeEventListener("mousemove", this.handleMouseMove, !0), null === (r = this.containerRef.current) || void 0 === r || null === (n = r.ownerDocument) || void 0 === n || n.removeEventListener("mouseup", this.handleMouseUp, !0)
            }
        }, {
            key: "scaleValue",
            value: function(e) {
                return 100 * (e - this.state.min) / this.state.range
            }
        }, {
            key: "unscaleValue",
            value: function(e) {
                return e * this.state.range / 100 + this.state.min
            }
        }, {
            key: "focus",
            value: function() {
                var e;
                null === (e = this.containerRef.current) || void 0 === e || e.focus()
            }
        }, {
            key: "blur",
            value: function() {
                var e;
                null === (e = this.containerRef.current) || void 0 === e || e.blur()
            }
        }, {
            key: "moveStaggered",
            value: function(e) {
                var t, n = this.state,
                    r = n.boundingRect,
                    o = n.x,
                    i = n.closestMarkerIndex,
                    a = n.markerPositions,
                    u = n.sortedMarkers,
                    s = this.props.asValueChanges;
                if (null != r) {
                    var l = r.left,
                        c = r.right;
                    if (!(e.clientX <= l) && !(e.clientX >= c)) {
                        var f = e.clientX - (void 0 === o ? 0 : o),
                            d = a[i] + f / (c - l) * 100;
                        null != (t = this.props.equidistant ? v(d, a) : v(this.unscaleValue(d), u)) && (null == s || s(u[t])), this.setState({
                            newClosestIndex: t
                        })
                    }
                }
            }
        }], i = [{
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                return e.initialValue !== t.initialValueProp ? T(O({}, g(e)), {
                    active: t.active
                }) : null
            }
        }], o && y(r.prototype, o), i && y(r, i), l
    }(a.PureComponent);
    I(A, "defaultProps", {
        initialValue: 10,
        minValue: 0,
        maxValue: 100,
        keyboardStep: 1,
        handleSize: 10,
        disabled: !1,
        stickToMarkers: !1,
        fillStyles: {}
    })
}