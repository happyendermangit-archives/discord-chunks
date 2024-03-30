function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Slide: function() {
            return m
        },
        Slides: function() {
            return y
        }
    });
    var r = n("470079"),
        o = n("718017"),
        i = n("383959"),
        a = n("56300"),
        u = n("676250"),
        s = n("675865"),
        l = n("356646"),
        c = n("396586"),
        f = n("451627"),
        d = n("62980");

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }
    var E = {
        mass: 1,
        tension: 300,
        friction: 28,
        clamp: !0
    };

    function p(e, t) {
        return function(n) {
            if (0 === n) return "auto";
            var r = "forwards" === t.current,
                o = n > 0,
                i = !1;
            return o && r && "left" === e && (i = !0), o && !r && "right" === e && (i = !0), !o && r && "right" === e && (i = !0), !o && !r && "left" === e && (i = !0), i ? "".concat(100 * Math.abs(n), "%") : "auto"
        }
    }

    function m(e) {
        return null
    }

    function y(e) {
        var t, n, m, y, I, h, O = e.contentDisplay,
            T = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["contentDisplay"]),
            S = {},
            v = (0, c.default)().analyticsLocations;
        r.Children.forEach(T.children, function(e, t) {
            S[e.props.id] = {
                children: e.props.children,
                impressionName: e.props.impressionName,
                impressionProperties: e.props.impressionProperties,
                index: t
            }
        });
        var g = T.activeSlide,
            A = (0, l.default)(T.activeSlide);
        var b = (t = null != A ? S[A] : null, n = S[g], null == t ? null : t.index > n.index ? "backwards" : t.index < n.index ? "forwards" : null),
            N = r.useContext(u.AccessibilityPreferencesContext).reducedMotion,
            R = r.useContext(f.default),
            C = S[g].impressionName;
        var P = (m = _({}, S[g].impressionProperties), y = (y = {
            location_stack: v
        }, y), Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(y)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(y)).forEach(function(e) {
            Object.defineProperty(m, e, Object.getOwnPropertyDescriptor(y, e))
        }), m);
        R({
            type: i.ImpressionTypes.MODAL,
            name: C,
            properties: P,
            _stackContext: {
                isSlide: !0
            }
        });
        var D = (0, s.default)(g),
            L = D.ref,
            M = D.width,
            U = D.height,
            w = _({}, E, T.springConfig, N.enabled ? {
                clamp: !0
            } : null),
            k = (0, o.useSpring)({
                immediate: null == A,
                width: null !== (I = T.width) && void 0 !== I ? I : void 0 === M ? 0 : M,
                height: void 0 === U ? 0 : U,
                config: w
            }),
            G = (0, o.useTransition)(g, {
                immediate: null == A,
                value: 0,
                from: {
                    value: 1
                },
                enter: {
                    value: 0
                },
                leave: {
                    value: -1
                },
                config: w,
                onRest: function(e, t) {
                    var n = t.item;
                    n === g && null != T.onSlideReady && T.onSlideReady(n)
                }
            }),
            B = (0, d.default)(b),
            j = T.width,
            F = T.centered,
            V = a.isMobile ? "100%" : k.width.to(function(e) {
                return Math.round(e)
            }),
            H = a.isMobile ? "100%" : k.height.to(function(e) {
                return Math.round(e)
            }),
            x = a.isMobile ? {} : void 0 === F || F ? {
                transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)",
                top: "50%"
            } : {
                transform: "scale(1.0, 1.0)"
            },
            Y = a.isMobile ? {} : {
                overflow: null !== (h = T.overflow) && void 0 !== h ? h : "hidden"
            };
        return r.createElement(o.animated.div, {
            style: _({
                position: "relative",
                width: V,
                height: H
            }, Y)
        }, G(function(e, t, n) {
            var i = n.key;
            return r.createElement(o.animated.div, {
                ref: t === g ? L : null,
                key: i,
                style: _({
                    position: "absolute",
                    display: O,
                    flexDirection: "column",
                    backfaceVisibility: "hidden",
                    width: a.isMobile ? "100%" : j
                }, x, N.enabled ? {
                    opacity: e.value.to(function(e) {
                        return 1 - Math.abs(e)
                    })
                } : {
                    left: e.value.to(p("left", B)),
                    right: e.value.to(p("right", B))
                })
            }, S[t].children)
        }))
    }
}