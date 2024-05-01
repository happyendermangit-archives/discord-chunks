function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ProgressBarConfettiTrigger: function() {
            return E
        }
    }), n("47120");
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("718017"),
        l = n("442837"),
        u = n("481060"),
        d = n("607070"),
        _ = n("745510"),
        c = n("946283");

    function E(e) {
        let {
            children: t,
            confettiTriggerRef: n,
            setConfettiCount: i,
            setShouldFireConfetti: r,
            tooltipProps: _
        } = e, [E, I] = a.useState(0), T = a.useRef(-1), f = a.useRef(!0), S = (0, l.useStateFromStores)([d.default], () => d.default.useReducedMotion), {
            scaleFactor: h
        } = (0, o.useSpring)({
            from: {
                scaleFactor: 1
            },
            to: {
                scaleFactor: 1 === E ? .9 : 2 === E ? 1.2 : 1
            },
            config: {
                tension: 380,
                friction: 7
            }
        });
        return (a.useEffect(() => () => {
            f.current = !1
        }, []), S) ? (0, s.jsx)(s.Fragment, {
            children: t
        }) : (0, s.jsx)(o.animated.div, {
            className: c.confettiTriggerWrapper,
            style: {
                transform: h.to(e => "scale(".concat(e, ")"))
            },
            children: (0, s.jsx)(u.Clickable, {
                className: c.confettiTrigger,
                onMouseDown: () => {
                    I(1), r(!0), i(e => Math.min(e + 2, 200)), window.clearTimeout(T.current), T.current = window.setTimeout(() => {
                        f.current && i(0)
                    }, 200)
                },
                onMouseUp: () => {
                    I(0), r(!1)
                },
                onMouseEnter: () => {
                    var e;
                    I(2), null == _ || null === (e = _.onMouseEnter) || void 0 === e || e.call(_)
                },
                onMouseLeave: () => {
                    var e;
                    I(0), null == _ || null === (e = _.onMouseLeave) || void 0 === e || e.call(_)
                },
                innerRef: n,
                children: t
            })
        })
    }(r = i || (i = {}))[r.INACTIVE = 0] = "INACTIVE", r[r.PRESSED = 1] = "PRESSED", r[r.HOVERED = 2] = "HOVERED";
    t.default = function(e) {
        let {
            confettiCount: t,
            confettiTriggerRef: n,
            isFiring: i
        } = e, {
            cannon: r,
            createMultipleConfettiAt: s
        } = a.useContext(_.ConfettiCannonContext), o = (0, l.useStateFromStores)([d.default], () => d.default.useReducedMotion);
        return a.useEffect(() => () => {
            null == r || r.clearConfetti()
        }, [r]), a.useEffect(() => {
            if (!i || o || null == n.current) return;
            let e = n.current.getBoundingClientRect(),
                r = e.left + e.width / 2;
            s(r, e.top + e.height / 2, {
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
        }, [t, n, s, i, o]), null
    }
}