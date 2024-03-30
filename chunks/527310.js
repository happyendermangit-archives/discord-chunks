function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReferencePositionLayer: function() {
            return C
        },
        referencePortalAwareContains: function() {
            return A
        }
    });
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("512722"),
        s = n.n(u),
        l = n("35628"),
        c = n("123229"),
        f = n("120447"),
        d = n("153732"),
        _ = n("716936"),
        E = n("508625"),
        p = n("281767"),
        m = n("260064");

    function y(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function O(e) {
        return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function T(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                h(e, t, n[t])
            })
        }
        return e
    }

    function S(e, t) {
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

    function v(e, t) {
        return (v = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var g = new WeakMap;

    function A(e, t) {
        if (e.contains(t)) return !0;
        for (var n = (0, _.default)(t, m.layer); null != n;) {
            var r = g.get(n);
            if (null == r) break;
            if (e.contains(r)) return !0;
            n = (0, _.default)(r, m.layer)
        }
        return !1
    }

    function b(e) {
        var t = e.positionKey,
            n = e.position,
            r = e.align;
        return null != t ? t : "".concat(n, ":").concat(r)
    }

    function N(e, t, n, r) {
        switch (e) {
            case "top":
                return s()(null != t.bottom, "Missing bottom"), r.offsetHeight - (t.bottom + n.offsetHeight);
            case "bottom":
                return s()(null != t.top, "Missing top"), r.offsetHeight - (t.top + n.offsetHeight);
            case "left":
                return s()(null != t.right, "Missing right"), r.offsetWidth - (t.right + n.offsetWidth);
            case "right":
                return s()(null != t.left, "Missing left"), r.offsetWidth - (t.left + n.offsetWidth);
            case "center":
            case "window_center":
                return s()(null != t.left, "Missing left"), r.offsetWidth - (t.left + n.offsetWidth / 2);
            default:
                throw Error("Unexpected position: ".concat(e))
        }
    }

    function R(e, t, n) {
        if (null != e && e < 0 && ("top" === n.position || "bottom" === n.position) && null != t && Math.abs(e) < (null == t ? void 0 : t.offsetHeight) && null != n.style) {
            var r = "top" === n.position ? "bottom" : "top",
                o = n.style[r];
            return S(T({}, n), {
                style: S(T({}, n.style), h({}, r, (null == o ? 0 : o) + e))
            })
        }
        return n
    }
    var C = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && v(e, t)
        }(A, e);
        var t, n, r, i, u, _ = (t = A, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = O(t);
            if (n) {
                var a = O(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : y(e)
        });

        function A() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, A), e = _.apply(this, arguments), h(y(e), "elementRef", o.createRef()), h(y(e), "state", {
                style: Object.freeze({}),
                position: e.props.autoInvert ? null : e.props.position,
                nudge: 0,
                isPositioned: !1,
                isSettingsLayerTransitioning: !1
            }), h(y(e), "handleLayerPopStart", function() {
                e.setState({
                    isSettingsLayerTransitioning: !0
                })
            }), h(y(e), "handleLayerPopComplete", function() {
                var t = e.calculateState();
                e.setState(S(T({}, t), {
                    isSettingsLayerTransitioning: !1
                }))
            }), h(y(e), "updatePosition", function() {
                e.setState(e.calculateState())
            }), e
        }
        return r = A, i = [{
            key: "nudgeLeftAlignment",
            value: function(e, t, n) {
                if (!this.props.nudgeAlignIntoViewport) return e;
                var r = n.offsetWidth,
                    o = e + t.offsetWidth - r + 12;
                return o > 0 ? Math.max(12, e - o) : e
            }
        }, {
            key: "getHorizontalAlignmentStyle",
            value: function(e, t, n, r) {
                var o = this.props.align;
                switch (o) {
                    case "left":
                        var i = Math.ceil(this.nudgeLeftAlignment(e.left, t, n)),
                            a = Math.ceil(e.left) - i;
                        return {
                            style: S(T({}, r), {
                                left: i
                            }), nudge: a
                        };
                    case "right":
                        var u = Math.ceil(n.offsetWidth - e.right);
                        return {
                            style: S(T({}, r), {
                                right: u
                            }), nudge: 0
                        };
                    case "center":
                        var s = e.left + (e.width - t.offsetWidth) / 2,
                            l = Math.ceil(this.nudgeLeftAlignment(s, t, n)),
                            c = Math.ceil(s) - l;
                        return {
                            style: S(T({}, r), {
                                left: l
                            }), nudge: c
                        };
                    default:
                        throw Error("Unsupported align: ".concat(o))
                }
            }
        }, {
            key: "nudgeTopAlignment",
            value: function(e, t, n) {
                if (!this.props.nudgeAlignIntoViewport) return e;
                if (e < 0) return 0;
                var r = t.getBoundingClientRect().height,
                    o = n.offsetHeight,
                    i = e + r - o + 12;
                return i > 0 ? Math.max(12, e - i) : e
            }
        }, {
            key: "nudgeBottomAlignment",
            value: function(e, t, n) {
                var r = this.props.nudgeAlignIntoViewport,
                    o = n.offsetHeight,
                    i = o - e;
                if (!r) return i;
                var a = i + t.offsetHeight - o + 12;
                return a > 0 ? Math.max(12, i - a) : i
            }
        }, {
            key: "getVerticalAlignmentStyle",
            value: function(e, t, n, r) {
                var o = this.props.align;
                switch (o) {
                    case "top":
                        var i = Math.ceil(this.nudgeTopAlignment(e.top, t, n)),
                            a = Math.ceil(e.top) - i;
                        return {
                            style: S(T({}, r), {
                                top: i
                            }), nudge: a
                        };
                    case "bottom":
                        var u = Math.ceil(this.nudgeBottomAlignment(e.bottom, t, n)),
                            s = Math.ceil(e.bottom) - u;
                        return {
                            style: S(T({}, r), {
                                bottom: u
                            }), nudge: s
                        };
                    case "center":
                        var l = e.top + (e.height - t.offsetHeight) / 2,
                            c = Math.ceil(this.nudgeTopAlignment(l, t, n)),
                            f = Math.ceil(l) - c;
                        return {
                            style: S(T({}, r), {
                                top: c
                            }), nudge: f
                        };
                    default:
                        throw Error("Unsupported align: ".concat(o))
                }
            }
        }, {
            key: "calculatePositionStyle",
            value: function(e, t, n) {
                var r, o, i, a, u = this.props,
                    l = u.reference,
                    c = u.spacing,
                    f = void 0 === c ? 0 : c;
                var d = "function" == typeof(r = l) ? r() : (s()(null != r.current, "Invalid ref"), r.current.getBoundingClientRect()),
                    _ = n.getBoundingClientRect();
                var E = (o = d, i = _.left, a = _.top, {
                    top: o.top - a,
                    left: o.left - i,
                    bottom: o.bottom - a,
                    right: o.right - i,
                    width: o.width,
                    height: o.height
                });
                switch (e) {
                    case "top":
                        return this.getHorizontalAlignmentStyle(E, t, n, {
                            bottom: n.offsetHeight - E.top + f
                        });
                    case "bottom":
                        return this.getHorizontalAlignmentStyle(E, t, n, {
                            top: E.bottom + f
                        });
                    case "left":
                        return this.getVerticalAlignmentStyle(E, t, n, {
                            right: n.offsetWidth - E.left + f
                        });
                    case "right":
                        return this.getVerticalAlignmentStyle(E, t, n, {
                            left: E.right + f
                        });
                    case "center":
                        return this.getVerticalAlignmentStyle(E, t, n, {
                            left: E.left + E.width / 2 - t.offsetWidth / 2 + f
                        });
                    case "window_center":
                        return this.getVerticalAlignmentStyle(E, t, n, {
                            left: Math.max((window.innerWidth - t.offsetWidth) / 2, 0)
                        });
                    default:
                        throw Error("Unexpected position: ".concat(e))
                }
            }
        }, {
            key: "calculateState",
            value: function() {
                var e = this.props,
                    t = e.position,
                    n = e.autoInvert,
                    r = this.elementRef.current;
                s()(null != r, "Unexpected null element");
                var o = (0, E.getParentLayerContainer)(r),
                    i = this.calculatePositionStyle(t, r, o),
                    a = i.style,
                    u = i.nudge,
                    l = null,
                    c = null;
                if (n && (l = N(t, a, r, o)) < 0) {
                    var f = function(e) {
                            switch (e) {
                                case "top":
                                    return "bottom";
                                case "bottom":
                                    return "top";
                                case "left":
                                    return "right";
                                case "right":
                                    return "left";
                                case "center":
                                    return "center";
                                case "window_center":
                                    return "window_center";
                                default:
                                    throw Error()
                            }
                        }(t),
                        d = this.calculatePositionStyle(f, r, o),
                        _ = d.style,
                        p = d.nudge;
                    if ((c = N(f, _, r, o)) > l) return R(c, r, {
                        position: f,
                        nudge: p,
                        style: _
                    })
                }
                return R(l, r, {
                    position: t,
                    nudge: u,
                    style: a
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var e, t, n = this.props,
                    r = n.reference,
                    o = n.onMount;
                this.setState(T({
                    isPositioned: !0
                }, this.calculateState()));
                var i = this.elementRef.current;
                s()(null != i, "Missing elementRef"), "function" != typeof r && null != r.current && g.set(i, r.current), f.ComponentDispatch.subscribe(p.ComponentActions.LAYER_POP_START, this.handleLayerPopStart), f.ComponentDispatch.subscribe(p.ComponentActions.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == i || null === (t = i.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.addEventListener("resize", this.handleLayerPopComplete), null == o || o()
            }
        }, {
            key: "componentDidUpdate",
            value: function(e, t) {
                if (b(e) !== b(this.props) ? this.updatePosition() : ! function(e, t) {
                        if ("function" == typeof e && "function" == typeof t) {
                            var n = e(),
                                r = t();
                            return n.top === r.top && n.left === r.left
                        }
                        return e === t
                    }(e.reference, this.props.reference) && this.updatePosition(), t.position !== this.state.position) {
                    var n, r;
                    null === (n = (r = this.props).onPositionChange) || void 0 === n || n.call(r, this.state.position)
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                var e, t, n, r, o = this.elementRef.current;
                s()(null != o, "Missing elementRef"), g.delete(o), f.ComponentDispatch.unsubscribe(p.ComponentActions.LAYER_POP_START, this.handleLayerPopStart), f.ComponentDispatch.unsubscribe(p.ComponentActions.LAYER_POP_COMPLETE, this.handleLayerPopComplete), null == o || null === (t = o.ownerDocument) || void 0 === t || null === (e = t.defaultView) || void 0 === e || e.removeEventListener("resize", this.handleLayerPopComplete), null === (n = (r = this.props).onUnmount) || void 0 === n || n.call(r)
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props,
                    n = t.id,
                    r = t.className,
                    i = t.children,
                    u = t.fixed,
                    s = t.disablePointerEvents,
                    f = this.state,
                    _ = f.position,
                    E = f.isPositioned,
                    p = f.isSettingsLayerTransitioning,
                    y = f.nudge;
                return o.createElement(c.UseThemeContext, null, function(t) {
                    var c, f = t.theme;
                    return o.createElement("div", {
                        id: n,
                        className: a()(r, (0, d.getThemeClass)(f), m.layer, (h(c = {}, m.emptyError, !1), h(c, m.layerHidden, p), h(c, m.disabledPointerEvents, s), c)),
                        style: T({
                            position: u ? "fixed" : "absolute"
                        }, e.state.style),
                        ref: e.elementRef
                    }, o.createElement(l.FocusRingScope, {
                        containerRef: e.elementRef
                    }, i({
                        position: _,
                        nudge: y,
                        isPositioned: E
                    }, e.updatePosition)))
                })
            }
        }], I(r.prototype, i), u && I(r, u), A
    }(o.Component);
    h(C, "defaultProps", {
        nudgeAlignIntoViewport: !1,
        spacing: 0,
        autoInvert: !1,
        disablePointerEvents: !1
    })
}