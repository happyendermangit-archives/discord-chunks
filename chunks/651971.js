function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        ProgressBarConfettiTrigger: function() {
            return _
        },
        default: function() {
            return T
        }
    }), s("222007");
    var i, r, a = s("37983"),
        l = s("884691"),
        o = s("907002"),
        n = s("446674"),
        u = s("77078"),
        d = s("206230"),
        c = s("526887"),
        E = s("95291");

    function _(e) {
        let {
            children: t,
            confettiTriggerRef: s,
            setConfettiCount: i,
            setShouldFireConfetti: r,
            tooltipProps: c
        } = e, [_, T] = l.useState(0), I = l.useRef(-1), N = l.useRef(!0), f = (0, n.useStateFromStores)([d.default], () => d.default.useReducedMotion), {
            scaleFactor: R
        } = (0, o.useSpring)({
            from: {
                scaleFactor: 1
            },
            to: {
                scaleFactor: 1 === _ ? .9 : 2 === _ ? 1.2 : 1
            },
            config: {
                tension: 380,
                friction: 7
            }
        });
        return (l.useEffect(() => () => {
            N.current = !1
        }, []), f) ? (0, a.jsx)(a.Fragment, {
            children: t
        }) : (0, a.jsx)(o.animated.div, {
            className: E.confettiTriggerWrapper,
            style: {
                transform: R.to(e => "scale(".concat(e, ")"))
            },
            children: (0, a.jsx)(u.Clickable, {
                className: E.confettiTrigger,
                onMouseDown: () => {
                    T(1), r(!0), i(e => Math.min(e + 2, 200)), window.clearTimeout(I.current), I.current = window.setTimeout(() => {
                        N.current && i(0)
                    }, 200)
                },
                onMouseUp: () => {
                    T(0), r(!1)
                },
                onMouseEnter: () => {
                    var e;
                    T(2), null == c || null === (e = c.onMouseEnter) || void 0 === e || e.call(c)
                },
                onMouseLeave: () => {
                    var e;
                    T(0), null == c || null === (e = c.onMouseLeave) || void 0 === e || e.call(c)
                },
                innerRef: s,
                children: t
            })
        })
    }(r = i || (i = {}))[r.INACTIVE = 0] = "INACTIVE", r[r.PRESSED = 1] = "PRESSED", r[r.HOVERED = 2] = "HOVERED";
    var T = function(e) {
        let {
            confettiCount: t,
            confettiTriggerRef: s,
            isFiring: i
        } = e, {
            cannon: r,
            createMultipleConfettiAt: a
        } = l.useContext(c.ConfettiCannonContext), o = (0, n.useStateFromStores)([d.default], () => d.default.useReducedMotion);
        return l.useEffect(() => () => {
            null == r || r.clearConfetti()
        }, [r]), l.useEffect(() => {
            if (!i || o || null == s.current) return;
            let e = s.current.getBoundingClientRect(),
                r = e.left + e.width / 2,
                l = e.top + e.height / 2;
            a(r, l, {
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
        }, [t, s, a, i, o]), null
    }
}