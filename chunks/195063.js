function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("622780"),
        s = n("290976"),
        l = n("465475"),
        c = n("660473"),
        f = n("860180"),
        d = n("973033"),
        _ = n("174795"),
        E = n("917929"),
        p = n("324299"),
        m = n("330192");

    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return y(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var O = function(e) {
            var t = e.bannerAdjustment,
                n = void 0 === t ? 0 : t,
                o = e.maxLoops,
                a = e.resetOnHover,
                u = void 0 !== a && a,
                s = e.isHovering,
                _ = void 0 !== s && s,
                p = e.useOpacityOnHover,
                y = e.autoPlay,
                O = void 0 === y || y,
                T = e.restartMethod,
                S = e.urlQueryString,
                v = e.profileEffectConfig,
                g = e.noBorderRadius,
                A = e.introDelay,
                b = void 0 === A ? l.ENTRY_DELAY : A,
                N = r.useRef(null),
                R = h(r.useState([]), 2),
                C = R[0],
                P = R[1];
            (0, E.default)(v);
            var D = h(r.useState(0), 2),
                L = D[0],
                M = D[1],
                U = h(r.useState(0), 2),
                w = U[0],
                k = U[1],
                G = v.accessibilityLabel,
                B = h(r.useState(-b), 2),
                j = B[0],
                F = B[1],
                V = (0, f.default)(function(e) {
                    F(function(t) {
                        return t + e
                    })
                }),
                H = V.stop,
                x = V.reset,
                Y = V.ticking;
            r.useEffect(function() {
                F(-b), P((0, d.sortEffectLayers)(v.effects))
            }, [v]), r.useEffect(function() {
                var e = 0,
                    t = 1 / 0;
                C.forEach(function(n) {
                    var r = n.start + n.duration;
                    r > e && (e = r), n.loop && n.start < t && (t = n.start)
                }), M(t), k(e)
            }, [k, C]);
            var W = h(r.useState(!1), 2),
                K = W[0],
                z = W[1];
            return r.useEffect(function() {
                !0 !== O && !_ && (H(), F(0)), !_ && K && Y.current && (H(), F(0)), u && _ && !Y.current && (x(), v.animationType === c.AnimationTypes.PERSISTENT ? F(T === c.RestartMethod.FromStart ? 0 : L) : F(0))
            }, [_, K, L, u, H, x, Y, v.animationType, O, T]), r.createElement("div", {
                ref: N,
                className: i()(m.profileEffects, I({}, m.hovered, _ && (void 0 === p || p)))
            }, r.createElement("div", {
                className: void 0 !== g && g ? m.innerNoRadius : m.inner
            }, C.map(function(e, t) {
                if (!Y.current) {
                    if (v.animationType === c.AnimationTypes.PERSISTENT && null != v.staticFrameSrc && 0 === t && !0 === O) {
                        var i, a, u, s, f, d, _, E, p = v.staticFrameSrc;
                        return r.createElement("img", {
                            className: m.effect,
                            style: {
                                top: null !== (_ = null === (f = e.position) || void 0 === f ? void 0 : f.y) && void 0 !== _ ? _ : 0 - n,
                                left: null !== (E = null === (d = e.position) || void 0 === d ? void 0 : d.x) && void 0 !== E ? E : 0
                            },
                            key: e.src + t,
                            src: p,
                            alt: G
                        })
                    }
                    return r.createElement("img", {
                        key: e.src + t,
                        src: l.RESET,
                        alt: G
                    })
                }
                if (j < e.start || !e.loop && j > e.duration + e.start) return r.createElement("img", {
                    key: e.src + t,
                    src: l.RESET,
                    alt: G
                });
                if (v.animationType === c.AnimationTypes.PERSISTENT && !K && null != o && j >= w && z(!0), e.loop && void 0 !== e.loopDelay && e.loopDelay > 0) {
                    var y = e.duration + e.loopDelay,
                        I = Math.floor((j - e.start) / y);
                    if (j - e.start - I * y > e.duration) return v.animationType === c.AnimationTypes.INTERMITTENT && !K && null != o && I >= o && z(!0), r.createElement("img", {
                        key: e.src + t,
                        src: l.RESET,
                        alt: G
                    })
                }
                return r.createElement("img", {
                    key: e.src + t,
                    src: null != S ? "".concat(e.src, "?query=").concat(S) : e.src,
                    className: m.effect,
                    style: {
                        top: (null !== (i = null === (u = e.position) || void 0 === u ? void 0 : u.y) && void 0 !== i ? i : 0) - n,
                        left: null !== (a = null === (s = e.position) || void 0 === s ? void 0 : s.x) && void 0 !== a ? a : 0
                    },
                    alt: G
                })
            })))
        },
        T = function(e) {
            var t = e.config,
                n = e.useThumbnail,
                o = e.bannerAdjustment,
                a = e.noBorderRadius,
                u = e.isHovering,
                s = void 0 !== u && u,
                l = e.useOpacityOnHover,
                c = t.reducedMotionSrc,
                f = t.thumbnailPreviewSrc,
                d = t.accessibilityLabel;
            return r.createElement("div", {
                className: i()(m.profileEffects, I({}, m.hovered, s && (void 0 === l || l)))
            }, r.createElement("div", {
                className: a ? m.innerNoRadius : m.inner
            }, r.createElement("img", {
                src: n && !s ? f : c,
                className: m.effect,
                style: {
                    top: 0 - (void 0 === o ? 0 : o)
                },
                alt: d
            })))
        };
    t.default = function(e) {
        var t = (0, a.useStateFromStores)([s.default], function() {
                return s.default.isFocused()
            }),
            n = (0, a.useStateFromStores)([u.default], function() {
                return u.default.useReducedMotion
            }),
            o = h(r.useState(!1), 2),
            i = o[0],
            l = o[1],
            f = (0, p.default)(e.profileEffectId, function() {
                return l(!1)
            }).preset;
        return null != f && (t || e.shopPreview || f.config.animationType !== c.AnimationTypes.INTERMITTENT) ? !t && e.shopPreview || !t && f.config.animationType === c.AnimationTypes.PERSISTENT || n || !1 === e.autoPlay && !1 === e.isHovering ? r.createElement(T, {
            useThumbnail: e.useThumbnail,
            config: f.config,
            bannerAdjustment: e.bannerAdjustment,
            noBorderRadius: e.noBorderRadius,
            isHovering: e.isHovering,
            useOpacityOnHover: e.useOpacityOnHover
        }) : i ? r.createElement(O, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    I(e, t, n[t])
                })
            }
            return e
        }({
            profileEffectConfig: f.config
        }, e)) : r.createElement(_.default, {
            profileEffectConfig: f.config,
            onReady: function() {
                l(!0)
            }
        }) : null
    }
}