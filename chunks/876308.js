function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("206230"),
        d = n("806135"),
        c = n("170113"),
        f = n("316680"),
        m = n("830837"),
        p = n("132755"),
        h = n("659500"),
        E = n("718517"),
        g = n("829536"),
        C = n("534107"),
        S = n("49111"),
        T = n("782340"),
        I = n("722552");
    let v = i.lazy(() => n.el("403130").then(n.bind(n, "403130")));

    function _(e) {
        let {
            played: t,
            duration: n,
            currentTime: i
        } = e, a = null == n ? "--:--" : t ? (0, c.convertSecondsToClockFormat)(Math.ceil(n - i)) : (0, c.convertSecondsToClockFormat)(Math.ceil(n));
        return (0, l.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: I.duration,
            tabularNumbers: !0,
            children: a
        })
    }
    var N = i.memo(function(e) {
        var t, n, a, c, N, A;
        let x, {
                src: y,
                volume: O = 1,
                onVolumeChange: R,
                onMute: M,
                waveform: L,
                durationSecs: P,
                onVolumeShow: b,
                onVolumeHide: j,
                onPlay: U,
                onPause: D,
                onError: k
            } = e,
            w = i.useRef(null),
            [F, G] = i.useState(0),
            [B, H] = i.useState(P),
            [V, K] = i.useState(!1),
            [W, Y] = i.useState(!1),
            [z, Z] = i.useState(!1),
            [J, q] = i.useState(!1),
            [X, Q] = i.useState("none"),
            [$, ee] = i.useState(() => "function" == typeof O ? O() : O),
            et = i.useRef(void 0),
            en = i.useCallback(() => {
                Y(e => !e)
            }, []),
            el = i.useCallback(() => {
                Q("metadata")
            }, []),
            ei = i.useCallback(e => {
                let t = e.currentTarget.duration;
                !isNaN(t) && H(t)
            }, []),
            ea = i.useCallback(() => {
                Y(!1), null == et.current && (et.current = setTimeout(() => {
                    q(!1), et.current = void 0
                }, 500))
            }, []),
            es = i.useCallback(() => {
                !z && ea()
            }, [ea, z]),
            er = i.useCallback(() => {
                let e = w.current;
                if (null == e) return;
                let t = e.error;
                null == k || k(t)
            }, [k]),
            eo = i.useCallback(e => {
                let t = (0, g.perceptualToAmplitude)(e, 1);
                K(0 === t), ee(t), null == R || R(t)
            }, [R]),
            eu = i.useCallback(() => {
                K(!V), null == M || M(!V)
            }, [V, M]),
            ed = i.useCallback(() => {
                Z(!0)
            }, []),
            ec = i.useCallback(() => {
                Z(!1), F === B && ea()
            }, [F, B, ea]),
            ef = i.useCallback(e => {
                let t = w.current;
                if (null == B || null == t) return;
                let n = e * B;
                G(n), t.currentTime = n, q(!0), clearTimeout(et.current), et.current = void 0
            }, [B]);
        i.useEffect(() => {
            !J && W && q(!0)
        }, [W, J]);
        let em = i.useRef(null);
        i.useEffect(() => {
            if (J || W) {
                if (W) {
                    var e, t;
                    em.current = performance.now(), null == U || U(!1, F, (null !== (t = null === (e = w.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0) * E.default.Millis.SECOND)
                } else {
                    let e = performance.now(),
                        t = em.current;
                    null == D || D(F, null != t ? (e - t) / 1e3 : 0), em.current = null
                }
            }
        }, [W]), t = w, n = W, a = G, i.useEffect(() => {
            let e;
            return ! function l() {
                let i = t.current;
                if (null != i) a(i.currentTime), n && (e = requestAnimationFrame(l))
            }(), () => {
                null != e && cancelAnimationFrame(e)
            }
        }, [t, n, a]), c = y, N = W, A = Y, i.useEffect(() => {
            if (N) return h.ComponentDispatch.dispatch(S.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, {
                src: c
            }), h.ComponentDispatch.subscribe(S.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e), () => {
                h.ComponentDispatch.unsubscribe(S.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e)
            };

            function e(e) {
                let {
                    src: t
                } = e;
                c !== t && A(!1)
            }
        }, [c, N, A]);
        let ep = W ? m.default : p.default,
            eh = W ? T.default.Messages.PAUSE : T.default.Messages.PLAY;
        x = "Safari" === platform.name ? (0, l.jsx)(i.Suspense, {
            children: (0, l.jsx)(v, {
                ref: w,
                className: I.audioElement,
                src: y,
                preload: X,
                playing: W && !z,
                onEnded: es,
                onLoadedMetadata: ei,
                onError: er,
                muted: V,
                volume: $
            })
        }) : (0, l.jsx)(d.default, {
            ref: w,
            className: I.audioElement,
            controls: !1,
            preload: X,
            onEnded: es,
            onLoadedMetadata: ei,
            onError: er,
            muted: V,
            volume: $,
            playing: W && !z,
            children: (0, l.jsx)("source", {
                src: y
            })
        });
        let eE = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion),
            {
                enabled: eg
            } = (0, o.useRedesignIconContext)();
        return (0, l.jsxs)("div", {
            className: s(I.container, {
                [I.playing]: W
            }),
            onMouseEnter: el,
            children: [(0, l.jsx)("div", {
                className: I.rippleContainer,
                children: (0, l.jsx)("div", {
                    className: s(I.ripple, {
                        [I.reducedMotion]: eE
                    })
                })
            }), (0, l.jsx)(o.Clickable, {
                className: I.playButtonContainer,
                onClick: en,
                "aria-label": eh,
                children: (0, l.jsx)(ep, {
                    className: s(I.playIcon, {
                        [I.oldPlayIconSpacing]: !eg && !W
                    }),
                    width: 18,
                    height: 18
                })
            }), (0, l.jsx)(C.default, {
                className: I.waveform,
                waveform: L,
                currentTime: F,
                duration: null != B ? B : 1,
                playing: W,
                played: J,
                onDrag: ef,
                onDragStart: ed,
                onDragEnd: ec
            }), (0, l.jsx)(_, {
                played: J,
                currentTime: F,
                duration: B
            }), (0, l.jsx)(f.default, {
                className: I.volumeButton,
                iconClassName: I.volumeButtonIcon,
                sliderWrapperClassName: I.volumeSlider,
                muted: V,
                value: (0, g.amplitudeToPerceptual)($, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: eo,
                onToggleMute: eu,
                onVolumeShow: b,
                onVolumeHide: j
            }), x]
        })
    })
}