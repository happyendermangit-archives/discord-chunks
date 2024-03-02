function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        a: function() {
            return l
        }
    }), r("222007");
    var n = r("454607"),
        i = r("144734"),
        o = r("884691"),
        a = r("37983"),
        u = (e, t, r) => {
            let [n] = (0, o.useState)(() => new i.DotLottieCommonPlayer(e, t.current, r)), a = (0, o.useRef)(!1);
            return (0, o.useLayoutEffect)(() => ((async function e() {
                !a.current && t.current && (a.current = !0, n.setContainer(t.current), await n.load())
            })(), () => {
                a.current && n.destroy()
            }), [n]), n
        };

    function s(e, t) {
        let r = (0, o.useCallback)(() => t(e.getState()), [t, e]),
            a = (0, o.useCallback)(t => e.state.subscribe(t), [e]);
        return (0, n.d)(a, r, () => t(i.DEFAULT_STATE))
    }
    var l = o.forwardRef((e, t) => {
        let {
            onEvent: r,
            activeAnimationId: l,
            autoplay: c,
            background: d = "transparent",
            direction: f,
            intermission: h,
            loop: p,
            playMode: v,
            hover: D,
            speed: g,
            renderer: C = "svg",
            rendererSettings: m = {},
            src: y,
            className: E = "",
            testId: B,
            children: b,
            defaultTheme: A,
            light: w = !1,
            worker: F = !1,
            activeStateId: _,
            lottieRef: O,
            ...x
        } = e, k = (0, o.useRef)(null), P = u(y, k, {
            renderer: C,
            activeAnimationId: l,
            rendererSettings: {
                clearCanvas: !0,
                progressiveLoad: !1,
                hideOnTransparent: !0,
                ...m
            },
            hover: D,
            loop: p,
            direction: f,
            speed: g,
            intermission: h,
            background: d,
            playMode: v,
            autoplay: !D && c,
            testId: B,
            defaultTheme: A,
            light: w,
            worker: F,
            activeStateId: _
        }), S = (0, o.useRef)(P);
        S.current = P, o.useImperativeHandle(t, () => P, [P]), o.useImperativeHandle(O, () => P, [P]);
        let T = s(P, e => e.currentState),
            j = s(P, e => e.frame),
            M = s(P, e => e.seeker),
            R = s(P, e => e.currentAnimationId);
        return (0, n.a)(() => {
            typeof p > "u" ? S.current.revertToManifestValues(["loop"]) : S.current.setLoop(p)
        }, [p]), (0, n.a)(() => {
            typeof c > "u" ? S.current.revertToManifestValues(["autoplay"]) : S.current.setAutoplay(c)
        }, [c]), (0, n.a)(() => {
            typeof f > "u" ? S.current.revertToManifestValues(["direction"]) : S.current.setDirection(f)
        }, [f]), (0, n.a)(() => {
            typeof g > "u" ? S.current.revertToManifestValues(["speed"]) : S.current.setSpeed(g)
        }, [g]), (0, n.a)(() => {
            typeof v > "u" ? S.current.revertToManifestValues(["playMode"]) : S.current.setMode(v)
        }, [v]), (0, n.a)(() => {
            typeof D > "u" ? S.current.revertToManifestValues(["hover"]) : S.current.setHover(D)
        }, [D]), (0, n.a)(() => {
            typeof d > "u" ? S.current.setBackground("transparent") : S.current.setBackground(d)
        }, [d]), (0, n.a)(() => {
            typeof h > "u" ? S.current.revertToManifestValues(["intermission"]) : S.current.setIntermission(h)
        }, [h]), (0, n.a)(() => {
            typeof A > "u" || !A ? S.current.revertToManifestValues(["defaultTheme"]) : S.current.setDefaultTheme(A)
        }, [A]), (0, n.a)(() => {
            l && S.current.play(l)
        }, [l]), (0, n.a)(() => ("u" > typeof _ && S.current.enterInteractiveMode(_), () => {
            S.current.exitInteractiveMode()
        }), [_]), (0, n.a)(() => {
            "u" > typeof y && S.current.updateSrc(y)
        }, [y]), (0, o.useEffect)(() => {
            let e = () => {
                    null == r || r(i.PlayerEvents.Ready)
                },
                t = () => {
                    null == r || r(i.PlayerEvents.DataReady)
                },
                n = () => {
                    null == r || r(i.PlayerEvents.DataFail)
                },
                o = () => {
                    S.current.currentState !== i.PlayerState.Playing && (null == r || r(i.PlayerEvents.Complete))
                },
                a = () => {
                    null == r || r(i.PlayerEvents.LoopComplete)
                };
            return S.current.addEventListener("DOMLoaded", e), S.current.addEventListener("data_ready", t), S.current.addEventListener("data_failed", n), S.current.addEventListener("complete", o), S.current.addEventListener("loopComplete", a), () => {
                S.current.removeEventListener("DOMLoaded", e), S.current.removeEventListener("data_ready", t), S.current.removeEventListener("data_failed", n), S.current.removeEventListener("complete", o), S.current.removeEventListener("loopComplete", a)
            }
        }, []), (0, o.useEffect)(() => {
            switch (T) {
                case i.PlayerState.Stopped:
                    null == r || r(i.PlayerEvents.Stop);
                    break;
                case i.PlayerState.Paused:
                    null == r || r(i.PlayerEvents.Pause);
                    break;
                case i.PlayerState.Playing:
                    null == r || r(i.PlayerEvents.Play);
                    break;
                case i.PlayerState.Frozen:
                    null == r || r(i.PlayerEvents.Freeze);
                    break;
                case i.PlayerState.Error:
                    null == r || r(i.PlayerEvents.Error)
            }
        }, [T]), (0, o.useEffect)(() => {
            null == r || r(i.PlayerEvents.Frame, {
                frame: j,
                seeker: M
            })
        }, [j]), (0, a.jsx)(n.e, {
            value: P,
            children: (0, a.jsxs)("div", {
                className: "dotlottie-container main ".concat(b ? "controls" : "", " ").concat(E),
                lang: "en",
                ...B && {
                    "data-testid": B
                },
                ...x,
                children: [(0, a.jsx)("div", {
                    ref: k,
                    "data-name": "".concat(R),
                    role: "figure",
                    className: "animation ".concat(b ? "controls" : ""),
                    style: {
                        position: "relative"
                    },
                    ...B && {
                        "data-testid": "animation"
                    },
                    children: T === i.PlayerState.Error && (0, a.jsx)("div", {
                        ...B && {
                            "data-testid": "error"
                        },
                        className: "error",
                        children: "⚠️"
                    })
                }), b]
            })
        })
    })
}