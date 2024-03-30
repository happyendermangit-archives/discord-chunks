function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ProgressBarConfettiTrigger: function() {
            return _
        }
    });
    var r, o, i = n("470079"),
        a = n("718017"),
        u = n("898511"),
        s = n("784184"),
        l = n("622780"),
        c = n("18486"),
        f = n("24509");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e) {
        var t, n, r = e.children,
            o = e.confettiTriggerRef,
            c = e.setConfettiCount,
            _ = e.setShouldFireConfetti,
            E = e.tooltipProps;
        var p = (t = i.useState(0), n = 2, function(e) {
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
            m = p[0],
            y = p[1],
            I = i.useRef(-1),
            h = i.useRef(!0),
            O = (0, u.useStateFromStores)([l.default], function() {
                return l.default.useReducedMotion
            }),
            T = (0, a.useSpring)({
                from: {
                    scaleFactor: 1
                },
                to: {
                    scaleFactor: 1 === m ? .9 : 2 === m ? 1.2 : 1
                },
                config: {
                    tension: 380,
                    friction: 7
                }
            }).scaleFactor;
        return (i.useEffect(function() {
            return function() {
                h.current = !1
            }
        }, []), O) ? i.createElement(i.Fragment, null, r) : i.createElement(a.animated.div, {
            className: f.confettiTriggerWrapper,
            style: {
                transform: T.to(function(e) {
                    return "scale(".concat(e, ")")
                })
            }
        }, i.createElement(s.Clickable, {
            className: f.confettiTrigger,
            onMouseDown: function() {
                y(1), _(!0), c(function(e) {
                    return Math.min(e + 2, 200)
                }), window.clearTimeout(I.current), I.current = window.setTimeout(function() {
                    h.current && c(0)
                }, 200)
            },
            onMouseUp: function() {
                y(0), _(!1)
            },
            onMouseEnter: function() {
                var e;
                y(2), null == E || null === (e = E.onMouseEnter) || void 0 === e || e.call(E)
            },
            onMouseLeave: function() {
                var e;
                y(0), null == E || null === (e = E.onMouseLeave) || void 0 === e || e.call(E)
            },
            innerRef: o
        }, r))
    }(r = o || (o = {}))[r.INACTIVE = 0] = "INACTIVE", r[r.PRESSED = 1] = "PRESSED", r[r.HOVERED = 2] = "HOVERED";
    t.default = function(e) {
        var t = e.confettiCount,
            n = e.confettiTriggerRef,
            r = e.isFiring,
            o = i.useContext(c.ConfettiCannonContext),
            a = o.cannon,
            s = o.createMultipleConfettiAt,
            f = (0, u.useStateFromStores)([l.default], function() {
                return l.default.useReducedMotion
            });
        return i.useEffect(function() {
            return function() {
                null == a || a.clearConfetti()
            }
        }, [a]), i.useEffect(function() {
            if (r && !f && null != n.current) {
                var e = n.current.getBoundingClientRect();
                s(e.left + e.width / 2, e.top + e.height / 2, {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: -180,
                            y: -180
                        },
                        maxValue: {
                            x: 180,
                            y: 180
                        }
                    }
                }, Math.max(t, 20))
            }
        }, [t, n, s, r, f]), null
    }
}