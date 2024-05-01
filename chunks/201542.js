function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("442837"),
        l = n("481060"),
        u = n("607070"),
        d = n("62170"),
        _ = n("715246"),
        c = n("80618"),
        E = n("786048"),
        I = n("897353"),
        T = n("585483"),
        f = n("70956"),
        S = n("36703"),
        h = n("347312"),
        A = n("981631"),
        m = n("689938"),
        N = n("977744");
    let p = r.lazy(() => Promise.all([n.e("26460"), n.e("89792")]).then(n.bind(n, "711635")));

    function O(e) {
        let {
            played: t,
            duration: n,
            currentTime: r
        } = e, a = null == n ? "--:--" : t ? (0, _.convertSecondsToClockFormat)(Math.ceil(n - r)) : (0, _.convertSecondsToClockFormat)(Math.ceil(n));
        return (0, i.jsx)(l.Text, {
            variant: "text-sm/normal",
            className: N.duration,
            tabularNumbers: !0,
            children: a
        })
    }
    t.default = r.memo(function(e) {
        var t, n, a, _, R, C;
        let g, {
                src: L,
                volume: v = 1,
                onVolumeChange: D,
                onMute: M,
                waveform: y,
                durationSecs: P,
                onVolumeShow: U,
                onVolumeHide: b,
                onPlay: G,
                onPause: w,
                onError: B
            } = e,
            k = r.useRef(null),
            [V, x] = r.useState(0),
            [F, H] = r.useState(P),
            [Y, j] = r.useState(!1),
            [W, K] = r.useState(!1),
            [z, Z] = r.useState(!1),
            [X, Q] = r.useState(!1),
            [q, J] = r.useState("none"),
            [$, ee] = r.useState(() => "function" == typeof v ? v() : v),
            et = r.useRef(void 0),
            en = r.useCallback(() => {
                K(e => !e)
            }, []),
            ei = r.useCallback(() => {
                J("metadata")
            }, []),
            er = r.useCallback(e => {
                let t = e.currentTarget.duration;
                !isNaN(t) && H(t)
            }, []),
            ea = r.useCallback(() => {
                K(!1), null == et.current && (et.current = setTimeout(() => {
                    Q(!1), et.current = void 0
                }, 500))
            }, []),
            es = r.useCallback(() => {
                !z && ea()
            }, [ea, z]),
            eo = r.useCallback(() => {
                let e = k.current;
                if (null == e) return;
                let t = e.error;
                null == B || B(t)
            }, [B]),
            el = r.useCallback(e => {
                let t = (0, S.perceptualToAmplitude)(e, 1);
                j(0 === t), ee(t), null == D || D(t)
            }, [D]),
            eu = r.useCallback(() => {
                j(!Y), null == M || M(!Y)
            }, [Y, M]),
            ed = r.useCallback(() => {
                Z(!0)
            }, []),
            e_ = r.useCallback(() => {
                Z(!1), V === F && ea()
            }, [V, F, ea]),
            ec = r.useCallback(e => {
                let t = k.current;
                if (null == F || null == t) return;
                let n = e * F;
                x(n), t.currentTime = n, Q(!0), clearTimeout(et.current), et.current = void 0
            }, [F]);
        r.useEffect(() => {
            !X && W && Q(!0)
        }, [W, X]);
        let eE = r.useRef(null);
        r.useEffect(() => {
            if (X || W) {
                if (W) {
                    var e, t;
                    eE.current = performance.now(), null == G || G(!1, V, (null !== (t = null === (e = k.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0) * f.default.Millis.SECOND)
                } else {
                    let e = performance.now(),
                        t = eE.current;
                    null == w || w(V, null != t ? (e - t) / 1e3 : 0), eE.current = null
                }
            }
        }, [W]), t = k, n = W, a = x, r.useEffect(() => {
            let e;
            return ! function i() {
                let r = t.current;
                if (null != r) a(r.currentTime), n && (e = requestAnimationFrame(i))
            }(), () => {
                null != e && cancelAnimationFrame(e)
            }
        }, [t, n, a]), _ = L, R = W, C = K, r.useEffect(() => {
            if (R) return T.ComponentDispatch.dispatch(A.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, {
                src: _
            }), T.ComponentDispatch.subscribe(A.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e), () => {
                T.ComponentDispatch.unsubscribe(A.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e)
            };

            function e(e) {
                let {
                    src: t
                } = e;
                _ !== t && C(!1)
            }
        }, [_, R, C]);
        let eI = W ? E.default : I.default,
            eT = W ? m.default.Messages.PAUSE : m.default.Messages.PLAY;
        g = "Safari" === platform.name ? (0, i.jsx)(r.Suspense, {
            children: (0, i.jsx)(p, {
                ref: k,
                className: N.audioElement,
                src: L,
                preload: q,
                playing: W && !z,
                onEnded: es,
                onLoadedMetadata: er,
                onError: eo,
                muted: Y,
                volume: $
            })
        }) : (0, i.jsx)(d.default, {
            ref: k,
            className: N.audioElement,
            controls: !1,
            preload: q,
            onEnded: es,
            onLoadedMetadata: er,
            onError: eo,
            muted: Y,
            volume: $,
            playing: W && !z,
            children: (0, i.jsx)("source", {
                src: L
            })
        });
        let ef = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion),
            {
                enabled: eS
            } = (0, l.useRedesignIconContext)();
        return (0, i.jsxs)("div", {
            className: s()(N.container, {
                [N.playing]: W
            }),
            onMouseEnter: ei,
            children: [(0, i.jsx)("div", {
                className: N.rippleContainer,
                children: (0, i.jsx)("div", {
                    className: s()(N.ripple, {
                        [N.reducedMotion]: ef
                    })
                })
            }), (0, i.jsx)(l.Clickable, {
                className: N.playButtonContainer,
                onClick: en,
                "aria-label": eT,
                children: (0, i.jsx)(eI, {
                    className: s()(N.playIcon, {
                        [N.oldPlayIconSpacing]: !eS && !W
                    }),
                    width: 18,
                    height: 18
                })
            }), (0, i.jsx)(h.default, {
                className: N.waveform,
                waveform: y,
                currentTime: V,
                duration: null != F ? F : 1,
                playing: W,
                played: X,
                onDrag: ec,
                onDragStart: ed,
                onDragEnd: e_
            }), (0, i.jsx)(O, {
                played: X,
                currentTime: V,
                duration: F
            }), (0, i.jsx)(c.default, {
                className: N.volumeButton,
                iconClassName: N.volumeButtonIcon,
                sliderWrapperClassName: N.volumeSlider,
                muted: Y,
                value: (0, S.amplitudeToPerceptual)($, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: el,
                onToggleMute: eu,
                onVolumeShow: U,
                onVolumeHide: b
            }), g]
        })
    })
}