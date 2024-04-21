function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return C
        }
    }), s("47120");
    var n = s("735250"),
        o = s("470079"),
        l = s("120356"),
        a = s.n(l),
        r = s("718017"),
        i = s("442837"),
        u = s("481060"),
        c = s("607070"),
        d = s("144114"),
        h = s("317175"),
        f = s("5417");

    function C(e) {
        let {
            show: t,
            alpha2: s,
            countryCode: l
        } = e, C = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion), m = o.useRef(null), [p, x] = o.useState(0), [N, v] = o.useState(!1);
        o.useEffect(() => {
            function e() {
                var e, s;
                x(t && null !== (s = null === (e = m.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== s ? s : 0)
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, [t, s, l]);
        let A = (0, r.useSpring)({
                width: "".concat(p, "px"),
                immediate: C,
                onStart: () => {
                    v(!0)
                },
                onRest: () => {
                    v(!1)
                }
            }),
            g = e => {
                d.default.setCountryCode(e)
            };
        return (0, n.jsx)(u.Popout, {
            position: "top",
            renderPopout: e => (0, n.jsx)(h.default, {
                className: f.popout,
                onClick: t => {
                    g(t), e.closePopout()
                }
            }),
            children: e => (0, n.jsx)("div", {
                className: a()(f.outerContainer, {
                    [f.hidden]: !(t || N)
                }),
                children: (0, n.jsx)(r.animated.div, {
                    className: f.container,
                    style: A,
                    children: (0, n.jsxs)("div", {
                        className: f.innerContainer,
                        ref: m,
                        children: [(0, n.jsxs)(u.Clickable, {
                            ...e,
                            className: f.countryCode,
                            children: [s, " ", l]
                        }), (0, n.jsx)("div", {
                            className: f.separator
                        })]
                    })
                })
            })
        })
    }
}