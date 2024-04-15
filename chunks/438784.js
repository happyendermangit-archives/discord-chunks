function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnimatedDots: function() {
            return E
        },
        Dots: function() {
            return I
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("718017"),
        l = n("597981");

    function u() {
        return document.hasFocus()
    }
    let d = {
            config: {
                friction: 50,
                tension: 900,
                mass: 1
            },
            unique: !0,
            initial: {
                dotPosition: 1
            },
            from: {
                dotPosition: 0
            },
            enter: {
                dotPosition: 1
            },
            leave: {
                dotPosition: 0
            }
        },
        _ = {
            config: {
                duration: 2400
            },
            from: {
                dotCycle: 2.8
            },
            reset: !0
        };

    function c(e) {
        let t = e % 2;
        return t > 1 ? 1 - (t - 1) : t
    }
    let E = r.memo(function(e) {
            let {
                dotRadius: t,
                dotPosition: n,
                fill: s = "currentColor",
                spacing: a = 2.5
            } = e, l = r.useRef(u()), d = r.useRef(!0);
            r.useEffect(() => () => void(d.current = !1), []);
            let [E] = (0, o.useSpring)(() => ({
                ..._,
                to: async e => {
                    let t = 2.8;
                    for (; d.current;) {
                        ;
                        l.current = u(), l.current ? (t += 4, await e({
                            dotCycle: t,
                            immediate: !1
                        })) : 2.8 !== t ? (t = 2.8, await e({
                            dotCycle: t,
                            immediate: !0
                        })) : await new Promise(e => setTimeout(e, 1e3))
                    }
                }
            })), I = (6 * t + t / 4 * 2) / 2;
            return (0, i.jsx)(i.Fragment, {
                children: [0, 1, 2].map(e => {
                    let r = .25 * e,
                        u = t + t * a * e;
                    return (0, i.jsx)(o.animated.circle, {
                        cx: n ? n.to([0, 1], [I, u]) : u,
                        cy: t,
                        r: E.dotCycle.to(e => c(e - r)).to([0, .4, .8, 1], [.8 * t, .8 * t, t, t]).to(e => l.current ? e : t),
                        fill: s,
                        style: {
                            opacity: E.dotCycle.to(e => c(e - r)).to([0, .4, .8, 1], [.3, .3, 1, 1]).to(e => l.current ? e : 1)
                        }
                    }, e)
                })
            })
        }),
        I = r.memo(r.forwardRef(function(e, t) {
            let {
                dotRadius: n,
                x: r,
                y: s,
                hide: _ = !1,
                themed: c = !1,
                className: I
            } = e;
            return (0, o.useTransition)(_, {
                ...d,
                key: e => e ? "true" : "false",
                immediate: !u()
            })((e, u, d) => {
                let {
                    dotPosition: _
                } = e, {
                    key: T
                } = d;
                return u ? null : (0, i.jsx)("svg", {
                    ref: t,
                    x: r,
                    y: s,
                    width: 6 * n + n / 2 * 2,
                    height: 2 * n,
                    className: a()(I, l.dots, c ? l.themed : null),
                    children: (0, i.jsx)(o.animated.g, {
                        style: {
                            opacity: _.to(e => Math.min(1, Math.max(e, 0)))
                        },
                        children: (0, i.jsx)(E, {
                            dotRadius: n,
                            dotPosition: _
                        })
                    })
                }, T)
            })
        }))
}