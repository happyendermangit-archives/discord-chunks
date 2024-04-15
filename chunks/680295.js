function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("607070"),
        u = n("451478"),
        d = n("119837"),
        _ = n("802433"),
        c = n("658312"),
        E = n("729436"),
        I = n("710867"),
        T = n("312904"),
        f = n("186917"),
        S = n("330192");
    let h = e => {
            let {
                bannerAdjustment: t = 0,
                maxLoops: n,
                resetOnHover: s = !1,
                isHovering: o = !1,
                useOpacityOnHover: l = !0,
                autoPlay: u = !0,
                restartMethod: I,
                urlQueryString: f,
                profileEffectConfig: h,
                noBorderRadius: A = !1,
                introDelay: m = d.ENTRY_DELAY
            } = e, N = r.useRef(null), [p, O] = r.useState([]);
            (0, T.default)(h);
            let [R, C] = r.useState(0), [g, L] = r.useState(0), {
                accessibilityLabel: D
            } = h, [v, M] = r.useState(-m), {
                stop: y,
                reset: P,
                ticking: U
            } = (0, c.default)(e => {
                M(t => t + e)
            });
            r.useEffect(() => {
                M(-m), O((0, E.sortEffectLayers)(h.effects))
            }, [h]), r.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                p.forEach(n => {
                    let i = n.start + n.duration;
                    i > e && (e = i), n.loop && n.start < t && (t = n.start)
                }), C(t), L(e)
            }, [L, p]);
            let [b, G] = r.useState(!1);
            return r.useEffect(() => {
                !0 !== u && !o && (y(), M(0)), !o && b && U.current && (y(), M(0)), s && o && !U.current && (P(), h.animationType === _.AnimationTypes.PERSISTENT ? M(I === _.RestartMethod.FromStart ? 0 : R) : M(0))
            }, [o, b, R, s, y, P, U, h.animationType, u, I]), (0, i.jsx)("div", {
                ref: N,
                className: a()(S.profileEffects, {
                    [S.hovered]: o && l
                }),
                children: (0, i.jsx)("div", {
                    className: A ? S.innerNoRadius : S.inner,
                    children: p.map((e, r) => {
                        var s, a, o, l, c, E, I, T;
                        if (!U.current) {
                            if (h.animationType === _.AnimationTypes.PERSISTENT && null != h.staticFrameSrc && 0 === r && !0 === u) {
                                let {
                                    staticFrameSrc: n
                                } = h;
                                return (0, i.jsx)("img", {
                                    className: S.effect,
                                    style: {
                                        top: null !== (c = null === (o = e.position) || void 0 === o ? void 0 : o.y) && void 0 !== c ? c : 0 - t,
                                        left: null !== (E = null === (l = e.position) || void 0 === l ? void 0 : l.x) && void 0 !== E ? E : 0
                                    },
                                    src: n,
                                    alt: D
                                }, e.src + r)
                            }
                            return (0, i.jsx)("img", {
                                src: d.RESET,
                                alt: D
                            }, e.src + r)
                        }
                        if (v < e.start || !e.loop && v > e.duration + e.start) return (0, i.jsx)("img", {
                            src: d.RESET,
                            alt: D
                        }, e.src + r);
                        if (h.animationType === _.AnimationTypes.PERSISTENT && !b && null != n && v >= g && G(!0), e.loop && void 0 !== e.loopDelay && e.loopDelay > 0) {
                            let t = e.duration + e.loopDelay,
                                s = Math.floor((v - e.start) / t);
                            if (v - e.start - s * t > e.duration) return h.animationType === _.AnimationTypes.INTERMITTENT && !b && null != n && s >= n && G(!0), (0, i.jsx)("img", {
                                src: d.RESET,
                                alt: D
                            }, e.src + r)
                        }
                        return (0, i.jsx)("img", {
                            src: null != f ? "".concat(e.src, "?query=").concat(f) : e.src,
                            className: S.effect,
                            style: {
                                top: (null !== (I = null === (s = e.position) || void 0 === s ? void 0 : s.y) && void 0 !== I ? I : 0) - t,
                                left: null !== (T = null === (a = e.position) || void 0 === a ? void 0 : a.x) && void 0 !== T ? T : 0
                            },
                            alt: D
                        }, e.src + r)
                    })
                })
            })
        },
        A = e => {
            let {
                config: t,
                useThumbnail: n,
                bannerAdjustment: r = 0,
                noBorderRadius: s,
                isHovering: o = !1,
                useOpacityOnHover: l = !0
            } = e, {
                reducedMotionSrc: u,
                thumbnailPreviewSrc: d,
                accessibilityLabel: _
            } = t;
            return (0, i.jsx)("div", {
                className: a()(S.profileEffects, {
                    [S.hovered]: o && l
                }),
                children: (0, i.jsx)("div", {
                    className: s ? S.innerNoRadius : S.inner,
                    children: (0, i.jsx)("img", {
                        src: n && !o ? d : u,
                        className: S.effect,
                        style: {
                            top: 0 - r
                        },
                        alt: _
                    })
                })
            })
        };
    t.default = e => {
        let t = (0, o.useStateFromStores)([u.default], () => u.default.isFocused()),
            n = (0, o.useStateFromStores)([l.default], () => l.default.useReducedMotion),
            [s, a] = r.useState(!1),
            {
                preset: d
            } = (0, f.default)(e.profileEffectId, () => a(!1));
        return null != d && (t || e.shopPreview || d.config.animationType !== _.AnimationTypes.INTERMITTENT) ? !t && e.shopPreview || !t && d.config.animationType === _.AnimationTypes.PERSISTENT || n || !1 === e.autoPlay && !1 === e.isHovering ? (0, i.jsx)(A, {
            useThumbnail: e.useThumbnail,
            config: d.config,
            bannerAdjustment: e.bannerAdjustment,
            noBorderRadius: e.noBorderRadius,
            isHovering: e.isHovering,
            useOpacityOnHover: e.useOpacityOnHover
        }) : s ? (0, i.jsx)(h, {
            profileEffectConfig: d.config,
            ...e
        }) : (0, i.jsx)(I.default, {
            profileEffectConfig: d.config,
            onReady: () => {
                a(!0)
            }
        }) : null
    }
}