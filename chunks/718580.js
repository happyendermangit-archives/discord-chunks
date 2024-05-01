function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Slide: function() {
            return f
        },
        Slides: function() {
            return S
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("718017"),
        s = n("990547"),
        o = n("873546"),
        l = n("186325"),
        u = n("393238"),
        d = n("699682"),
        _ = n("906732"),
        c = n("812663"),
        E = n("863840");
    let I = {
        mass: 1,
        tension: 300,
        friction: 28,
        clamp: !0
    };

    function T(e, t) {
        return n => {
            if (0 === n) return "auto";
            let i = "forwards" === t.current,
                r = n > 0,
                a = !1;
            return r && i && "left" === e && (a = !0), r && !i && "right" === e && (a = !0), !r && i && "right" === e && (a = !0), !r && !i && "left" === e && (a = !0), a ? "".concat(100 * Math.abs(n), "%") : "auto"
        }
    }

    function f(e) {
        return null
    }

    function S(e) {
        var t, n, f, S;
        let {
            contentDisplay: h,
            ...A
        } = e, m = {}, {
            analyticsLocations: N
        } = (0, _.default)();
        r.Children.forEach(A.children, (e, t) => {
            m[e.props.id] = {
                children: e.props.children,
                impressionName: e.props.impressionName,
                impressionProperties: e.props.impressionProperties,
                index: t
            }
        });
        let p = A.activeSlide,
            O = (0, d.default)(A.activeSlide);
        let R = (f = null != O ? m[O] : null, S = m[p], null == f ? null : f.index > S.index ? "backwards" : f.index < S.index ? "forwards" : null),
            {
                reducedMotion: C
            } = r.useContext(l.AccessibilityPreferencesContext),
            g = r.useContext(c.default),
            L = m[p].impressionName,
            v = {
                ...m[p].impressionProperties,
                location_stack: N
            };
        g({
            type: s.ImpressionTypes.MODAL,
            name: L,
            properties: v,
            _stackContext: {
                isSlide: !0
            }
        });
        let {
            ref: D,
            width: M = 0,
            height: y = 0
        } = (0, u.default)(p), P = {
            ...I,
            ...A.springConfig,
            ...C.enabled ? {
                clamp: !0
            } : null
        }, U = (0, a.useSpring)({
            immediate: null == O,
            width: null !== (t = A.width) && void 0 !== t ? t : M,
            height: y,
            config: P
        }), b = (0, a.useTransition)(p, {
            immediate: null == O,
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
            config: P,
            onRest: (e, t) => {
                let {
                    item: n
                } = t;
                n === p && null != A.onSlideReady && A.onSlideReady(n)
            }
        }), G = (0, E.default)(R), {
            width: w,
            centered: B = !0
        } = A, k = o.isMobile ? "100%" : U.width.to(e => Math.round(e)), V = o.isMobile ? "100%" : U.height.to(e => Math.round(e)), x = o.isMobile ? {} : B ? {
            transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)",
            top: "50%"
        } : {
            transform: "scale(1.0, 1.0)"
        }, F = o.isMobile ? {} : {
            overflow: null !== (n = A.overflow) && void 0 !== n ? n : "hidden"
        };
        return (0, i.jsx)(a.animated.div, {
            style: {
                position: "relative",
                width: k,
                height: V,
                ...F
            },
            children: b((e, t, n) => {
                let {
                    key: r
                } = n;
                return (0, i.jsx)(a.animated.div, {
                    ref: t === p ? D : null,
                    style: {
                        position: "absolute",
                        display: h,
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        width: o.isMobile ? "100%" : w,
                        ...x,
                        ...C.enabled ? {
                            opacity: e.value.to(e => 1 - Math.abs(e))
                        } : {
                            left: e.value.to(T("left", G)),
                            right: e.value.to(T("right", G))
                        }
                    },
                    children: m[t].children
                }, r)
            })
        })
    }
}