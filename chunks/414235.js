function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LottieIcon: function() {
            return p
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("946147"),
        s = n("414456"),
        r = n.n(s),
        o = n("413197"),
        u = n("228470"),
        d = n("526441"),
        c = n("890503"),
        f = n("103487");

    function m(e, t) {
        let n = e.getAnimationInstance();
        if (null == n) return;
        let l = n.markers,
            i = l.find(e => e.payload.name === t);
        if (null != i) return i
    }
    let p = i.forwardRef(function(e, t) {
        let {
            color: n,
            src: s,
            size: p = "md",
            width: h,
            height: E,
            className: g,
            initialAnimation: C
        } = e, S = i.useRef(null), T = i.useRef(null), v = i.useId(), I = i.useContext(o.AccessibilityPreferencesContext).reducedMotion.enabled, _ = i.useRef(C), {
            enabled: N
        } = d.default.useExperiment({
            location: "LottieIcon web entry point"
        }), A = I || !N, x = i.useCallback(e => {
            if (null != S.current && e === a.PlayerEvents.Ready) {
                let e = 0;
                if (null != T.current) {
                    let t = m(S.current, T.current);
                    e = null != t ? t.time + t.duration : 0
                } else if (null != _.current) {
                    var t, n;
                    e = null !== (n = null === (t = m(S.current, _.current)) || void 0 === t ? void 0 : t.time) && void 0 !== n ? n : 0
                }
                S.current.seek(e)
            }
        }, []), y = !(0, c.default)("lottie_hover_multiple_loop");
        i.useImperativeHandle(t, () => ({
            play: e => {
                if (null != S.current) {
                    if (T.current = e, S.current.setLoop(!y && e.includes("hover")), S.current.stop(), A) {
                        let t = m(S.current, e);
                        null != t && S.current.seek(t.time + t.duration)
                    } else S.current.goToAndPlay(e, !0)
                }
            },
            stop: () => {
                null != S.current && !A && (S.current.stop(), S.current.setLoop(!1))
            },
            stopIfPlaying: e => {
                null != S.current && !A && T.current === e && (S.current.stop(), S.current.setLoop(!1))
            }
        }), [y, A]);
        let O = "custom" === p ? {
            width: h,
            height: E
        } : (0, u.getIconSize)(p);
        return (0, l.jsx)(a.DotLottiePlayer, {
            id: v,
            className: r(f.lottieIcon, g),
            style: {
                "--__lottieIconColor": null != n && "string" == typeof n ? n : null == n ? void 0 : n.css,
                display: "flex",
                ...O
            },
            src: s,
            ref: S,
            autoplay: !1,
            loop: !1,
            keepLastFrame: !0,
            onEvent: x
        }, A ? "".concat(v, "-disabled") : "".concat(v, "-enabled"))
    })
}