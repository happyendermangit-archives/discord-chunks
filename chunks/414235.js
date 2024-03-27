function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LottieIcon: function() {
            return p
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
        m = n("103487");
    let p = l.forwardRef(function(e, t) {
        let {
            color: a,
            src: r,
            size: p = "md",
            width: h,
            height: x,
            className: E,
            initialAnimation: y,
            markers: g
        } = e, [S, C] = l.useState(null), T = l.useRef(null), _ = l.useRef(null), I = l.useRef(null), v = "custom" === p ? {
            width: h,
            height: x
        } : (0, d.getIconSize)(p), A = !(0, f.default)("lottie_hover_multiple_loop"), N = l.useContext(u.AccessibilityPreferencesContext).reducedMotion.enabled, {
            enabled: R
        } = c.default.useExperiment({
            location: "LottieIcon web entry point"
        }), O = N || !R;
        return l.useImperativeHandle(t, () => ({
            play: e => {
                if (null != I.current) {
                    if (_.current = e, O) {
                        let t = g[e];
                        I.current.setSegment(t.start, t.start + t.duration), I.current.goToAndStop(t.duration, !0)
                    } else I.current.setLoop(!A && e.includes("hover")), I.current.goToAndPlay(e)
                }
            },
            stop: () => {
                null != I.current && !O && I.current.goToAndStop(0, !0)
            },
            stopIfPlaying: e => {
                null != I.current && !O && _.current === e && I.current.goToAndStop(0, !0)
            }
        }), [O, A, g]), l.useEffect(() => {
            null == S && r().then(e => C(e.default))
        }, [S, r]), l.useEffect(() => (n.el("865981").then(n.t.bind(n, "865981", 23)).then(e => {
            var t;
            let n, {
                    default: i
                } = e,
                l = null !== (t = _.current) && void 0 !== t ? t : y;
            if (null != l && null != g[l]) {
                let e = g[l];
                n = [e.start, e.start + e.duration]
            }
            null != T.current && (I.current = i.loadAnimation({
                container: T.current,
                renderer: "svg",
                loop: !1,
                autoplay: !1,
                animationData: o(S),
                initialSegment: n
            }))
        }), () => {
            var e;
            null === (e = I.current) || void 0 === e || e.destroy()
        }), [S, y, g]), (0, i.jsx)("div", {
            style: {
                "--__lottieIconColor": null != a && "string" == typeof a ? a : null == a ? void 0 : a.css,
                display: "flex",
                ...v
            },
            className: s(m.lottieIcon, E),
            ref: T
        })
    })
}