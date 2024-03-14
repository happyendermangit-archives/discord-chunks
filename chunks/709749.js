function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnimatedDots: function() {
            return _
        },
        Dots: function() {
            return h
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("907002"),
        l = n("356167");

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
        c = {
            config: {
                duration: 2400
            },
            from: {
                dotCycle: 2.8
            },
            reset: !0
        };

    function f(e) {
        let t = e % 2;
        return t > 1 ? 1 - (t - 1) : t
    }
    let _ = s.memo(function(e) {
            let {
                dotRadius: t,
                dotPosition: n,
                fill: r = "currentColor",
                spacing: a = 2.5
            } = e, l = s.useRef(u()), d = s.useRef(!0);
            s.useEffect(() => () => void(d.current = !1), []);
            let [_] = (0, o.useSpring)(() => ({
                ...c,
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
            })), h = (6 * t + t / 4 * 2) / 2;
            return (0, i.jsx)(i.Fragment, {
                children: [0, 1, 2].map(e => {
                    let s = .25 * e,
                        u = t + e * (t * a);
                    return (0, i.jsx)(o.animated.circle, {
                        cx: n ? n.to([0, 1], [h, u]) : u,
                        cy: t,
                        r: _.dotCycle.to(e => f(e - s)).to([0, .4, .8, 1], [.8 * t, .8 * t, t, t]).to(e => l.current ? e : t),
                        fill: r,
                        style: {
                            opacity: _.dotCycle.to(e => f(e - s)).to([0, .4, .8, 1], [.3, .3, 1, 1]).to(e => l.current ? e : 1)
                        }
                    }, e)
                })
            })
        }),
        h = s.memo(s.forwardRef(function(e, t) {
            let {
                dotRadius: n,
                x: s,
                y: r,
                hide: c = !1,
                themed: f = !1,
                className: h
            } = e, E = (0, o.useTransition)(c, {
                ...d,
                key: e => e ? "true" : "false",
                immediate: !u()
            });
            return E((e, u, d) => {
                let {
                    dotPosition: c
                } = e, {
                    key: E
                } = d;
                return u ? null : (0, i.jsx)("svg", {
                    ref: t,
                    x: s,
                    y: r,
                    width: 6 * n + n / 2 * 2,
                    height: 2 * n,
                    className: a(h, l.dots, f ? l.themed : null),
                    children: (0, i.jsx)(o.animated.g, {
                        style: {
                            opacity: c.to(e => Math.min(1, Math.max(e, 0)))
                        },
                        children: (0, i.jsx)(_, {
                            dotRadius: n,
                            dotPosition: c
                        })
                    })
                }, E)
            })
        }))
}