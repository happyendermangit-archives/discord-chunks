function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return I
        }
    }), r("222007");
    var n = r("37983"),
        o = r("884691"),
        u = r("414456"),
        l = r.n(u),
        i = r("446674"),
        a = r("206230"),
        s = r("471671"),
        c = r("76047"),
        f = r("859498"),
        d = r("687682"),
        E = r("525808"),
        T = r("465523"),
        A = r("417675"),
        m = r("188645"),
        p = r("484304");
    let R = e => {
            let {
                bannerAdjustment: t = 0,
                maxLoops: r,
                resetOnHover: u = !1,
                isHovering: i = !1,
                useOpacityOnHover: a = !0,
                autoPlay: s = !0,
                restartMethod: T,
                urlQueryString: m,
                profileEffectConfig: R,
                noBorderRadius: v = !1,
                introDelay: I = c.ENTRY_DELAY
            } = e, N = o.useRef(null), [h, S] = o.useState([]);
            (0, A.default)(R);
            let [O, _] = o.useState(0), [y, g] = o.useState(0), {
                accessibilityLabel: C
            } = R, [F, D] = o.useState(-I), {
                stop: L,
                reset: P,
                ticking: x
            } = (0, d.default)(e => {
                D(t => t + e)
            });
            o.useEffect(() => {
                D(-I), S((0, E.sortEffectLayers)(R.effects))
            }, [R]), o.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                h.forEach(r => {
                    let n = r.start + r.duration;
                    n > e && (e = n), r.loop && r.start < t && (t = r.start)
                }), _(t), g(e)
            }, [g, h]);
            let [M, b] = o.useState(!1);
            return o.useEffect(() => {
                !0 !== s && !i && (L(), D(0)), !i && M && x.current && (L(), D(0)), u && i && !x.current && (P(), R.animationType === f.AnimationTypes.PERSISTENT ? D(T === f.RestartMethod.FromStart ? 0 : O) : D(0))
            }, [i, M, O, u, L, P, x, R.animationType, s, T]), (0, n.jsx)("div", {
                ref: N,
                className: l(p.profileEffects, {
                    [p.hovered]: i && a
                }),
                children: (0, n.jsx)("div", {
                    className: v ? p.innerNoRadius : p.inner,
                    children: h.map((e, o) => {
                        var u, l, i, a, d, E, T, A;
                        if (!x.current) {
                            if (R.animationType === f.AnimationTypes.PERSISTENT && null != R.staticFrameSrc && 0 === o && !0 === s) {
                                let {
                                    staticFrameSrc: r
                                } = R;
                                return (0, n.jsx)("img", {
                                    className: p.effect,
                                    style: {
                                        top: null !== (d = null === (i = e.position) || void 0 === i ? void 0 : i.y) && void 0 !== d ? d : 0 - t,
                                        left: null !== (E = null === (a = e.position) || void 0 === a ? void 0 : a.x) && void 0 !== E ? E : 0
                                    },
                                    src: r,
                                    alt: C
                                }, e.src + o)
                            }
                            return (0, n.jsx)("img", {
                                src: c.RESET,
                                alt: C
                            }, e.src + o)
                        }
                        if (F < e.start || !e.loop && F > e.duration + e.start) return (0, n.jsx)("img", {
                            src: c.RESET,
                            alt: C
                        }, e.src + o);
                        if (R.animationType === f.AnimationTypes.PERSISTENT && !M && null != r && F >= y && b(!0), e.loop && void 0 !== e.loopDelay && e.loopDelay > 0) {
                            let t = e.duration + e.loopDelay,
                                u = Math.floor((F - e.start) / t);
                            if (F - e.start - u * t > e.duration) return R.animationType === f.AnimationTypes.INTERMITTENT && !M && null != r && u >= r && b(!0), (0, n.jsx)("img", {
                                src: c.RESET,
                                alt: C
                            }, e.src + o)
                        }
                        return (0, n.jsx)("img", {
                            src: null != m ? "".concat(e.src, "?query=").concat(m) : e.src,
                            className: p.effect,
                            style: {
                                top: (null !== (T = null === (u = e.position) || void 0 === u ? void 0 : u.y) && void 0 !== T ? T : 0) - t,
                                left: null !== (A = null === (l = e.position) || void 0 === l ? void 0 : l.x) && void 0 !== A ? A : 0
                            },
                            alt: C
                        }, e.src + o)
                    })
                })
            })
        },
        v = e => {
            let {
                config: t,
                useThumbnail: r,
                bannerAdjustment: o = 0,
                noBorderRadius: u,
                isHovering: i = !1,
                useOpacityOnHover: a = !0
            } = e, {
                reducedMotionSrc: s,
                thumbnailPreviewSrc: c,
                accessibilityLabel: f
            } = t;
            return (0, n.jsx)("div", {
                className: l(p.profileEffects, {
                    [p.hovered]: i && a
                }),
                children: (0, n.jsx)("div", {
                    className: u ? p.innerNoRadius : p.inner,
                    children: (0, n.jsx)("img", {
                        src: r && !i ? c : s,
                        className: p.effect,
                        style: {
                            top: 0 - o
                        },
                        alt: f
                    })
                })
            })
        };
    var I = e => {
        let t = (0, i.useStateFromStores)([s.default], () => s.default.isFocused()),
            r = (0, i.useStateFromStores)([a.default], () => a.default.useReducedMotion),
            [u, l] = o.useState(!1),
            {
                preset: c
            } = (0, m.default)(e.profileEffectId, () => l(!1));
        return null != c && (t || e.shopPreview || c.config.animationType !== f.AnimationTypes.INTERMITTENT) ? !t && e.shopPreview || !t && c.config.animationType === f.AnimationTypes.PERSISTENT || r || !1 === e.autoPlay && !1 === e.isHovering ? (0, n.jsx)(v, {
            useThumbnail: e.useThumbnail,
            config: c.config,
            bannerAdjustment: e.bannerAdjustment,
            noBorderRadius: e.noBorderRadius,
            isHovering: e.isHovering,
            useOpacityOnHover: e.useOpacityOnHover
        }) : u ? (0, n.jsx)(R, {
            profileEffectConfig: c.config,
            ...e
        }) : (0, n.jsx)(T.default, {
            profileEffectConfig: c.config,
            onReady: () => {
                l(!0)
            }
        }) : null
    }
}