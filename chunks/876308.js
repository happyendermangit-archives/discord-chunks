function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("206230"),
        d = n("806135"),
        c = n("170113"),
        f = n("316680"),
        p = n("830837"),
        m = n("132755"),
        h = n("659500"),
        x = n("718517"),
        E = n("829536"),
        y = n("534107"),
        g = n("49111"),
        S = n("782340"),
        C = n("722552");
    let _ = l.lazy(() => n.el("403130").then(n.bind(n, "403130")));

    function T(e) {
        let {
            played: t,
            duration: n,
            currentTime: l
        } = e, a = null == n ? "--:--" : t ? (0, c.convertSecondsToClockFormat)(Math.ceil(n - l)) : (0, c.convertSecondsToClockFormat)(Math.ceil(n));
        return (0, i.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: C.duration,
            tabularNumbers: !0,
            children: a
        })
    }
    var I = l.memo(function(e) {
        var t, n, a, c, I, v;
        let N, {
                src: A,
                volume: O = 1,
                onVolumeChange: R,
                onMute: M,
                waveform: k,
                durationSecs: L,
                onVolumeShow: P,
                onVolumeHide: b,
                onPlay: j,
                onPause: U,
                onError: D
            } = e,
            w = l.useRef(null),
            [F, G] = l.useState(0),
            [H, B] = l.useState(L),
            [V, K] = l.useState(!1),
            [W, Y] = l.useState(!1),
            [z, Z] = l.useState(!1),
            [J, Q] = l.useState(!1),
            [q, X] = l.useState("none"),
            [$, ee] = l.useState(() => "function" == typeof O ? O() : O),
            et = l.useRef(void 0),
            en = l.useCallback(() => {
                Y(e => !e)
            }, []),
            ei = l.useCallback(() => {
                X("metadata")
            }, []),
            el = l.useCallback(e => {
                let t = e.currentTarget.duration;
                !isNaN(t) && B(t)
            }, []),
            ea = l.useCallback(() => {
                Y(!1), null == et.current && (et.current = setTimeout(() => {
                    Q(!1), et.current = void 0
                }, 500))
            }, []),
            es = l.useCallback(() => {
                !z && ea()
            }, [ea, z]),
            er = l.useCallback(() => {
                let e = w.current;
                if (null == e) return;
                let t = e.error;
                null == D || D(t)
            }, [D]),
            eo = l.useCallback(e => {
                let t = (0, E.perceptualToAmplitude)(e, 1);
                K(0 === t), ee(t), null == R || R(t)
            }, [R]),
            eu = l.useCallback(() => {
                K(!V), null == M || M(!V)
            }, [V, M]),
            ed = l.useCallback(() => {
                Z(!0)
            }, []),
            ec = l.useCallback(() => {
                Z(!1), F === H && ea()
            }, [F, H, ea]),
            ef = l.useCallback(e => {
                let t = w.current;
                if (null == H || null == t) return;
                let n = e * H;
                G(n), t.currentTime = n, Q(!0), clearTimeout(et.current), et.current = void 0
            }, [H]);
        l.useEffect(() => {
            !J && W && Q(!0)
        }, [W, J]);
        let ep = l.useRef(null);
        l.useEffect(() => {
            if (J || W) {
                if (W) {
                    var e, t;
                    ep.current = performance.now(), null == j || j(!1, F, (null !== (t = null === (e = w.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0) * x.default.Millis.SECOND)
                } else {
                    let e = performance.now(),
                        t = ep.current;
                    null == U || U(F, null != t ? (e - t) / 1e3 : 0), ep.current = null
                }
            }
        }, [W]), t = w, n = W, a = G, l.useEffect(() => {
            let e;
            return ! function i() {
                let l = t.current;
                if (null != l) a(l.currentTime), n && (e = requestAnimationFrame(i))
            }(), () => {
                null != e && cancelAnimationFrame(e)
            }
        }, [t, n, a]), c = A, I = W, v = Y, l.useEffect(() => {
            if (I) return h.ComponentDispatch.dispatch(g.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, {
                src: c
            }), h.ComponentDispatch.subscribe(g.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e), () => {
                h.ComponentDispatch.unsubscribe(g.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e)
            };

            function e(e) {
                let {
                    src: t
                } = e;
                c !== t && v(!1)
            }
        }, [c, I, v]);
        let em = W ? p.default : m.default,
            eh = W ? S.default.Messages.PAUSE : S.default.Messages.PLAY;
        N = "Safari" === platform.name ? (0, i.jsx)(l.Suspense, {
            children: (0, i.jsx)(_, {
                ref: w,
                className: C.audioElement,
                src: A,
                preload: q,
                playing: W && !z,
                onEnded: es,
                onLoadedMetadata: el,
                onError: er,
                muted: V,
                volume: $
            })
        }) : (0, i.jsx)(d.default, {
            ref: w,
            className: C.audioElement,
            controls: !1,
            preload: q,
            onEnded: es,
            onLoadedMetadata: el,
            onError: er,
            muted: V,
            volume: $,
            playing: W && !z,
            children: (0, i.jsx)("source", {
                src: A
            })
        });
        let ex = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion),
            {
                enabled: eE
            } = (0, o.useRedesignIconContext)();
        return (0, i.jsxs)("div", {
            className: s(C.container, {
                [C.playing]: W
            }),
            onMouseEnter: ei,
            children: [(0, i.jsx)("div", {
                className: C.rippleContainer,
                children: (0, i.jsx)("div", {
                    className: s(C.ripple, {
                        [C.reducedMotion]: ex
                    })
                })
            }), (0, i.jsx)(o.Clickable, {
                className: C.playButtonContainer,
                onClick: en,
                "aria-label": eh,
                children: (0, i.jsx)(em, {
                    className: s(C.playIcon, {
                        [C.oldPlayIconSpacing]: !eE && !W
                    }),
                    width: 18,
                    height: 18
                })
            }), (0, i.jsx)(y.default, {
                className: C.waveform,
                waveform: k,
                currentTime: F,
                duration: null != H ? H : 1,
                playing: W,
                played: J,
                onDrag: ef,
                onDragStart: ed,
                onDragEnd: ec
            }), (0, i.jsx)(T, {
                played: J,
                currentTime: F,
                duration: H
            }), (0, i.jsx)(f.default, {
                className: C.volumeButton,
                iconClassName: C.volumeButtonIcon,
                sliderWrapperClassName: C.volumeSlider,
                muted: V,
                value: (0, E.amplitudeToPerceptual)($, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: eo,
                onToggleMute: eu,
                onVolumeShow: P,
                onVolumeHide: b
            }), N]
        })
    })
}