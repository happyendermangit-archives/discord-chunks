function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Switch: function() {
            return m
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("718017"),
        u = n("447515"),
        s = n("676250"),
        l = n("35628"),
        c = n("338684"),
        f = n("961356");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var E = {
            mass: 1,
            tension: 250
        },
        p = {
            X: {
                TOP: "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",
                BOTTOM: "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z"
            },
            BAR: {
                TOP: "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",
                BOTTOM: "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z"
            },
            CHECK: {
                TOP: "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
                BOTTOM: "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z"
            }
        },
        m = function(e) {
            var t, n, o, m, y, I, h, O, T, S, v, g, A = e.id,
                b = e.onChange,
                N = e.checked,
                R = e.disabled,
                C = e.className,
                P = e.focusProps,
                D = e.innerRef,
                L = r.useContext(s.AccessibilityPreferencesContext).reducedMotion,
                M = r.useRef(null);
            var U = (t = r.useState(!1), n = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(t) || function(e, t) {
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
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return d(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                w = U[0],
                k = U[1],
                G = (0, c.useToken)(u.default.unsafe_rawColors.PRIMARY_400).spring(),
                B = (0, c.useToken)(u.default.unsafe_rawColors.GREEN_360).spring(),
                j = (0, a.useSpring)({
                    config: E,
                    opacity: R ? .3 : 1,
                    state: w ? N ? .7 : .3 : N ? 1 : 0
                }),
                F = j.state,
                V = j.opacity;
            return r.createElement(l.FocusRing, (o = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        _(e, t, n[t])
                    })
                }
                return e
            }({}, P), m = (m = {
                within: !0,
                offset: -2
            }, m), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(m)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(m)).forEach(function(e) {
                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(m, e))
            }), o), r.createElement(a.animated.div, {
                className: i()(f.container, C, (_(g = {}, f.checked, N), _(g, f.disabled, R), g)),
                onMouseDown: function() {
                    return !R && k(!0)
                },
                onMouseUp: function() {
                    return k(!1)
                },
                onMouseLeave: function() {
                    return k(!1)
                },
                style: {
                    opacity: V,
                    backgroundColor: F.to({
                        output: [G, B]
                    })
                }
            }, r.createElement(a.animated.svg, {
                className: f.slider,
                viewBox: "0 0 28 20",
                preserveAspectRatio: "xMinYMid meet",
                style: {
                    left: F.to({
                        range: [0, .3, .7, 1],
                        output: [-3, 1, 8, 12]
                    })
                },
                "aria-hidden": !0
            }, r.createElement(a.animated.rect, {
                fill: "white",
                x: F.to({
                    range: [0, .3, .7, 1],
                    output: [4, 0, 0, 4]
                }),
                y: F.to({
                    range: [0, .3, .7, 1],
                    output: [0, 1, 1, 0]
                }),
                height: F.to({
                    range: [0, .3, .7, 1],
                    output: [20, 18, 18, 20]
                }),
                width: F.to({
                    range: [0, .3, .7, 1],
                    output: [20, 28, 28, 20]
                }),
                rx: "10"
            }), (y = F, I = G, h = B, O = L.enabled, T = y.to({
                output: [I, h]
            }), S = O ? [p.X.TOP, p.X.TOP, p.CHECK.TOP, p.CHECK.TOP] : [p.X.TOP, p.BAR.TOP, p.BAR.TOP, p.CHECK.TOP], v = O ? [p.X.BOTTOM, p.X.BOTTOM, p.CHECK.BOTTOM, p.CHECK.BOTTOM] : [p.X.BOTTOM, p.BAR.BOTTOM, p.BAR.BOTTOM, p.CHECK.BOTTOM], r.createElement("svg", {
                viewBox: "0 0 20 20",
                fill: "none"
            }, r.createElement(a.animated.path, {
                fill: T,
                d: y.to({
                    range: [0, .3, .7, 1],
                    output: S
                })
            }), r.createElement(a.animated.path, {
                fill: T,
                d: y.to({
                    range: [0, .3, .7, 1],
                    output: v
                })
            })))), r.createElement("input", {
                id: A,
                type: "checkbox",
                ref: function(e) {
                    M.current = e, null != D && (D.current = e)
                },
                className: f.input,
                tabIndex: R ? -1 : 0,
                onKeyDown: function(e) {
                    if (!R && !e.repeat)(" " === e.key || "Enter" === e.key) && k(!0)
                },
                onKeyUp: function(e) {
                    var t;
                    if (!R && !!w && !e.repeat) k(!1), "Enter" === e.key && (null === (t = M.current) || void 0 === t || t.click())
                },
                onChange: function(e) {
                    k(!1), null == b || b(e.currentTarget.checked, e)
                },
                checked: N,
                disabled: R
            })))
        }
}