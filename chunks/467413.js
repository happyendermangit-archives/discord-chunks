function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return f
        }
    }), s("222007");
    var n = s("37983"),
        o = s("884691"),
        a = s("414456"),
        l = s.n(a),
        r = s("146606"),
        i = s("446674"),
        u = s("77078"),
        c = s("206230"),
        d = s("878720"),
        h = s("189613"),
        C = s("765702");

    function f(e) {
        let {
            show: t,
            alpha2: s,
            countryCode: a
        } = e, f = (0, i.useStateFromStores)([c.default], () => c.default.useReducedMotion), m = o.useRef(null), [p, x] = o.useState(0), [N, v] = o.useState(!1);
        o.useEffect(() => {
            function e() {
                var e, s;
                x(t && null !== (s = null === (e = m.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== s ? s : 0)
            }
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, [t, s, a]);
        let A = (0, r.useSpring)({
                width: "".concat(p, "px"),
                immediate: f,
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
                className: C.popout,
                onClick: t => {
                    g(t), e.closePopout()
                }
            }),
            children: e => (0, n.jsx)("div", {
                className: l(C.outerContainer, {
                    [C.hidden]: !(t || N)
                }),
                children: (0, n.jsx)(r.animated.div, {
                    className: C.container,
                    style: A,
                    children: (0, n.jsxs)("div", {
                        className: C.innerContainer,
                        ref: m,
                        children: [(0, n.jsxs)(u.Clickable, {
                            ...e,
                            className: C.countryCode,
                            children: [s, " ", a]
                        }), (0, n.jsx)("div", {
                            className: C.separator
                        })]
                    })
                })
            })
        })
    }
}