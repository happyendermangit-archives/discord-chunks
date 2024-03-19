function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LottieIcon: function() {
            return m
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("445468"),
        o = n.n(r),
        u = n("413197"),
        d = n("228470"),
        c = n("526441"),
        f = n("890503"),
        p = n("103487");
    let m = l.forwardRef(function(e, t) {
        let {
            color: a,
            src: r,
            size: m = "md",
            width: h,
            height: x,
            className: E,
            initialAnimation: y,
            markers: g
        } = e, [S, C] = l.useState(null), _ = l.useRef(null), I = l.useRef(null), T = l.useRef(null), v = "custom" === m ? {
            width: h,
            height: x
        } : (0, d.getIconSize)(m), N = !(0, f.default)("lottie_hover_multiple_loop"), A = l.useContext(u.AccessibilityPreferencesContext).reducedMotion.enabled, {
            enabled: O
        } = c.default.useExperiment({
            location: "LottieIcon web entry point"
        }), R = A || !O;
        return l.useImperativeHandle(t, () => ({
            play: e => {
                if (null != T.current) {
                    if (I.current = e, R) {
                        let t = g[e];
                        T.current.setSegment(t.start, t.start + t.duration), T.current.goToAndStop(t.duration, !0)
                    } else T.current.setLoop(!N && e.includes("hover")), T.current.goToAndPlay(e)
                }
            },
            stop: () => {
                null != T.current && !R && T.current.goToAndStop(0, !0)
            },
            stopIfPlaying: e => {
                null != T.current && !R && I.current === e && T.current.goToAndStop(0, !0)
            }
        }), [R, N, g]), l.useEffect(() => {
            null == S && r().then(e => C(e.default))
        }, [S, r]), l.useEffect(() => (n.el("865981").then(n.t.bind(n, "865981", 23)).then(e => {
            var t;
            let n, {
                    default: i
                } = e,
                l = null !== (t = I.current) && void 0 !== t ? t : y;
            if (null != l && null != g[l]) {
                let e = g[l];
                n = [e.start, e.start + e.duration]
            }
            null != _.current && (T.current = i.loadAnimation({
                container: _.current,
                renderer: "svg",
                loop: !1,
                autoplay: !1,
                animationData: o(S),
                initialSegment: n
            }))
        }), () => {
            var e;
            null === (e = T.current) || void 0 === e || e.destroy()
        }), [S, y, g]), (0, i.jsx)("div", {
            style: {
                "--__lottieIconColor": null != a && "string" == typeof a ? a : null == a ? void 0 : a.css,
                display: "flex",
                ...v
            },
            className: s(p.lottieIcon, E),
            ref: _
        })
    })
}