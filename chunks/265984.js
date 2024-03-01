function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Slide: function() {
            return _
        },
        Slides: function() {
            return S
        }
    });
    var i = n("37983"),
        r = n("884691"),
        s = n("907002"),
        a = n("759843"),
        o = n("394846"),
        l = n("413197"),
        u = n("731898"),
        c = n("634634"),
        d = n("685665"),
        f = n("542489"),
        E = n("561744");
    let p = {
        mass: 1,
        tension: 300,
        friction: 28,
        clamp: !0
    };

    function h(e, t) {
        return n => {
            if (0 === n) return "auto";
            let i = "forwards" === t.current,
                r = n > 0,
                s = !1;
            return r && i && "left" === e && (s = !0), r && !i && "right" === e && (s = !0), !r && i && "right" === e && (s = !0), !r && !i && "left" === e && (s = !0), s ? "".concat(100 * Math.abs(n), "%") : "auto"
        }
    }

    function _(e) {
        return null
    }

    function S(e) {
        var t, n, _, S;
        let {
            contentDisplay: m,
            ...T
        } = e, g = {}, {
            analyticsLocations: I
        } = (0, d.default)();
        r.Children.forEach(T.children, (e, t) => {
            g[e.props.id] = {
                children: e.props.children,
                impressionName: e.props.impressionName,
                impressionProperties: e.props.impressionProperties,
                index: t
            }
        });
        let C = T.activeSlide,
            v = (0, c.default)(T.activeSlide);
        let A = (_ = null != v ? g[v] : null, S = g[C], null == _ ? null : _.index > S.index ? "backwards" : _.index < S.index ? "forwards" : null),
            {
                reducedMotion: R
            } = r.useContext(l.AccessibilityPreferencesContext),
            N = r.useContext(f.default),
            O = g[C].impressionName,
            D = {
                ...g[C].impressionProperties,
                location_stack: I
            };
        N({
            type: a.ImpressionTypes.MODAL,
            name: O,
            properties: D,
            _stackContext: {
                isSlide: !0
            }
        });
        let {
            ref: y,
            width: P = 0,
            height: L = 0
        } = (0, u.default)(C), b = {
            ...p,
            ...T.springConfig,
            ...R.enabled ? {
                clamp: !0
            } : null
        }, M = (0, s.useSpring)({
            immediate: null == v,
            width: null !== (t = T.width) && void 0 !== t ? t : P,
            height: L,
            config: b
        }), U = (0, s.useTransition)(C, {
            immediate: null == v,
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
            config: b,
            onRest: (e, t) => {
                let {
                    item: n
                } = t;
                n === C && null != T.onSlideReady && T.onSlideReady(n)
            }
        }), G = (0, E.default)(A), {
            width: w,
            centered: k = !0
        } = T, x = o.isMobile ? "100%" : M.width.to(e => Math.round(e)), F = o.isMobile ? "100%" : M.height.to(e => Math.round(e)), V = o.isMobile ? {} : k ? {
            transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)",
            top: "50%"
        } : {
            transform: "scale(1.0, 1.0)"
        }, B = o.isMobile ? {} : {
            overflow: null !== (n = T.overflow) && void 0 !== n ? n : "hidden"
        };
        return (0, i.jsx)(s.animated.div, {
            style: {
                position: "relative",
                width: x,
                height: F,
                ...B
            },
            children: U((e, t, n) => {
                let {
                    key: r
                } = n;
                return (0, i.jsx)(s.animated.div, {
                    ref: t === C ? y : null,
                    style: {
                        position: "absolute",
                        display: m,
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        width: o.isMobile ? "100%" : w,
                        ...V,
                        ...R.enabled ? {
                            opacity: e.value.to(e => 1 - Math.abs(e))
                        } : {
                            left: e.value.to(h("left", G)),
                            right: e.value.to(h("right", G))
                        }
                    },
                    children: g[t].children
                }, r)
            })
        })
    }
}