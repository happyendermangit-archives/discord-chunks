function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("622780"),
        l = n("414381"),
        c = n("275373"),
        f = n("994087"),
        d = n("639649"),
        _ = n("328545"),
        E = n("120447"),
        p = n("388990"),
        m = n("605855"),
        y = n("137144"),
        I = n("281767"),
        h = n("941504"),
        O = n("505810");

    function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function v(e, t) {
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
                if ("string" == typeof e) return T(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var g = r.lazy(function() {
        return Promise.all([n.e("26460"), n.e("75365")]).then(n.bind(n, "167745"))
    });

    function A(e) {
        var t = e.played,
            n = e.duration,
            o = e.currentTime,
            i = null == n ? "--:--" : t ? (0, c.convertSecondsToClockFormat)(Math.ceil(n - o)) : (0, c.convertSecondsToClockFormat)(Math.ceil(n));
        return r.createElement(u.Text, {
            variant: "text-sm/normal",
            className: O.duration,
            tabularNumbers: !0
        }, i)
    }
    t.default = r.memo(function(e) {
        var t, n, o, c, T, b, N, R = e.src,
            C = e.volume,
            P = void 0 === C ? 1 : C,
            D = e.onVolumeChange,
            L = e.onMute,
            M = e.waveform,
            U = e.durationSecs,
            w = e.onVolumeShow,
            k = e.onVolumeHide,
            G = e.onPlay,
            B = e.onPause,
            j = e.onError,
            F = r.useRef(null),
            V = v(r.useState(0), 2),
            H = V[0],
            x = V[1],
            Y = v(r.useState(U), 2),
            W = Y[0],
            K = Y[1],
            z = v(r.useState(!1), 2),
            X = z[0],
            q = z[1],
            Q = v(r.useState(!1), 2),
            J = Q[0],
            Z = Q[1],
            $ = v(r.useState(!1), 2),
            ee = $[0],
            et = $[1],
            en = v(r.useState(!1), 2),
            er = en[0],
            eo = en[1],
            ei = v(r.useState("none"), 2),
            ea = ei[0],
            eu = ei[1],
            es = v(r.useState(function() {
                return "function" == typeof P ? P() : P
            }), 2),
            el = es[0],
            ec = es[1],
            ef = r.useRef(void 0),
            ed = r.useCallback(function() {
                Z(function(e) {
                    return !e
                })
            }, []),
            e_ = r.useCallback(function() {
                eu("metadata")
            }, []),
            eE = r.useCallback(function(e) {
                var t = e.currentTarget.duration;
                !isNaN(t) && K(t)
            }, []),
            ep = r.useCallback(function() {
                Z(!1), null == ef.current && (ef.current = setTimeout(function() {
                    eo(!1), ef.current = void 0
                }, 500))
            }, []),
            em = r.useCallback(function() {
                !ee && ep()
            }, [ep, ee]),
            ey = r.useCallback(function() {
                var e = F.current;
                if (null != e) {
                    var t = e.error;
                    null == j || j(t)
                }
            }, [j]),
            eI = r.useCallback(function(e) {
                var t = (0, m.perceptualToAmplitude)(e, 1);
                q(0 === t), ec(t), null == D || D(t)
            }, [D]),
            eh = r.useCallback(function() {
                q(!X), null == L || L(!X)
            }, [X, L]),
            eO = r.useCallback(function() {
                et(!0)
            }, []),
            eT = r.useCallback(function() {
                et(!1), H === W && ep()
            }, [H, W, ep]),
            eS = r.useCallback(function(e) {
                var t = F.current;
                if (null != W && null != t) {
                    var n = e * W;
                    x(n), t.currentTime = n, eo(!0), clearTimeout(ef.current), ef.current = void 0
                }
            }, [W]);
        r.useEffect(function() {
            !er && J && eo(!0)
        }, [J, er]);
        var ev = r.useRef(null);
        r.useEffect(function() {
            if (er || J) {
                if (J) {
                    var e, t;
                    ev.current = performance.now(), null == G || G(!1, H, (null !== (t = null === (e = F.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0) * p.default.Millis.SECOND)
                } else {
                    var n = performance.now(),
                        r = ev.current;
                    null == B || B(H, null != r ? (n - r) / 1e3 : 0), ev.current = null
                }
            }
        }, [J]), t = F, n = J, o = x, r.useEffect(function() {
            var e = void 0;
            return ! function r() {
                    var i = t.current;
                    if (null != i) o(i.currentTime), n && (e = requestAnimationFrame(r))
                }(),
                function() {
                    null != e && cancelAnimationFrame(e)
                }
        }, [t, n, o]), c = R, T = J, b = Z, r.useEffect(function() {
            var e = function(e) {
                c !== e.src && b(!1)
            };
            if (T) return E.ComponentDispatch.dispatch(I.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, {
                    src: c
                }), E.ComponentDispatch.subscribe(I.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                function() {
                    E.ComponentDispatch.unsubscribe(I.ComponentActions.VOICE_MESSAGE_PLAYBACK_STARTED, e)
                }
        }, [c, T, b]);
        var eg = J ? d.default : _.default,
            eA = J ? h.default.Messages.PAUSE : h.default.Messages.PLAY;
        N = "Safari" === platform.name ? r.createElement(r.Suspense, null, r.createElement(g, {
            ref: F,
            className: O.audioElement,
            src: R,
            preload: ea,
            playing: J && !ee,
            onEnded: em,
            onLoadedMetadata: eE,
            onError: ey,
            muted: X,
            volume: el
        })) : r.createElement(l.default, {
            ref: F,
            className: O.audioElement,
            controls: !1,
            preload: ea,
            onEnded: em,
            onLoadedMetadata: eE,
            onError: ey,
            muted: X,
            volume: el,
            playing: J && !ee
        }, r.createElement("source", {
            src: R
        }));
        var eb = (0, a.useStateFromStores)([s.default], function() {
                return s.default.useReducedMotion
            }),
            eN = (0, u.useRedesignIconContext)().enabled;
        return r.createElement("div", {
            className: i()(O.container, S({}, O.playing, J)),
            onMouseEnter: e_
        }, r.createElement("div", {
            className: O.rippleContainer
        }, r.createElement("div", {
            className: i()(O.ripple, S({}, O.reducedMotion, eb))
        })), r.createElement(u.Clickable, {
            className: O.playButtonContainer,
            onClick: ed,
            "aria-label": eA
        }, r.createElement(eg, {
            className: i()(O.playIcon, S({}, O.oldPlayIconSpacing, !eN && !J)),
            width: 18,
            height: 18
        })), r.createElement(y.default, {
            className: O.waveform,
            waveform: M,
            currentTime: H,
            duration: null != W ? W : 1,
            playing: J,
            played: er,
            onDrag: eS,
            onDragStart: eO,
            onDragEnd: eT
        }), r.createElement(A, {
            played: er,
            currentTime: H,
            duration: W
        }), r.createElement(f.default, {
            className: O.volumeButton,
            iconClassName: O.volumeButtonIcon,
            sliderWrapperClassName: O.volumeSlider,
            muted: X,
            value: (0, m.amplitudeToPerceptual)(el, 1),
            minValue: 0,
            maxValue: 1,
            currentWindow: window,
            onValueChange: eI,
            onToggleMute: eh,
            onVolumeShow: w,
            onVolumeHide: k
        }), N)
    })
}