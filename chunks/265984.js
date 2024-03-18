function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Slide: function() {
            return g
        },
        Slides: function() {
            return m
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("146606"),
        a = n("759843"),
        o = n("394846"),
        l = n("413197"),
        u = n("731898"),
        d = n("634634"),
        c = n("685665"),
        f = n("542489"),
        _ = n("561744");
    let E = {
        mass: 1,
        tension: 300,
        friction: 28,
        clamp: !0
    };

    function h(e, t) {
        return n => {
            if (0 === n) return "auto";
            let i = "forwards" === t.current,
                s = n > 0,
                r = !1;
            return s && i && "left" === e && (r = !0), s && !i && "right" === e && (r = !0), !s && i && "right" === e && (r = !0), !s && !i && "left" === e && (r = !0), r ? "".concat(100 * Math.abs(n), "%") : "auto"
        }
    }

    function g(e) {
        return null
    }

    function m(e) {
        var t, n, g, m;
        let {
            contentDisplay: p,
            ...S
        } = e, v = {}, {
            analyticsLocations: T
        } = (0, c.default)();
        s.Children.forEach(S.children, (e, t) => {
            v[e.props.id] = {
                children: e.props.children,
                impressionName: e.props.impressionName,
                impressionProperties: e.props.impressionProperties,
                index: t
            }
        });
        let I = S.activeSlide,
            A = (0, d.default)(S.activeSlide);
        let C = (g = null != A ? v[A] : null, m = v[I], null == g ? null : g.index > m.index ? "backwards" : g.index < m.index ? "forwards" : null),
            {
                reducedMotion: y
            } = s.useContext(l.AccessibilityPreferencesContext),
            N = s.useContext(f.default),
            R = v[I].impressionName,
            O = {
                ...v[I].impressionProperties,
                location_stack: T
            };
        N({
            type: a.ImpressionTypes.MODAL,
            name: R,
            properties: O,
            _stackContext: {
                isSlide: !0
            }
        });
        let {
            ref: D,
            width: P = 0,
            height: L = 0
        } = (0, u.default)(I), M = {
            ...E,
            ...S.springConfig,
            ...y.enabled ? {
                clamp: !0
            } : null
        }, b = (0, r.useSpring)({
            immediate: null == A,
            width: null !== (t = S.width) && void 0 !== t ? t : P,
            height: L,
            config: M
        }), U = (0, r.useTransition)(I, {
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
            config: M,
            onRest: (e, t) => {
                let {
                    item: n
                } = t;
                n === I && null != S.onSlideReady && S.onSlideReady(n)
            }
        }), w = (0, _.default)(C), {
            width: k,
            centered: V = !0
        } = S, G = o.isMobile ? "100%" : b.width.to(e => Math.round(e)), F = o.isMobile ? "100%" : b.height.to(e => Math.round(e)), x = o.isMobile ? {} : V ? {
            transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)",
            top: "50%"
        } : {
            transform: "scale(1.0, 1.0)"
        }, B = o.isMobile ? {} : {
            overflow: null !== (n = S.overflow) && void 0 !== n ? n : "hidden"
        };
        return (0, i.jsx)(r.animated.div, {
            style: {
                position: "relative",
                width: G,
                height: F,
                ...B
            },
            children: U((e, t, n) => {
                let {
                    key: s
                } = n;
                return (0, i.jsx)(r.animated.div, {
                    ref: t === I ? D : null,
                    style: {
                        position: "absolute",
                        display: p,
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        width: o.isMobile ? "100%" : k,
                        ...x,
                        ...y.enabled ? {
                            opacity: e.value.to(e => 1 - Math.abs(e))
                        } : {
                            left: e.value.to(h("left", w)),
                            right: e.value.to(h("right", w))
                        }
                    },
                    children: v[t].children
                }, s)
            })
        })
    }
}