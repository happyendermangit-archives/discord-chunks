function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LottieIcon: function() {
            return I
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("906280"),
        l = n.n(o),
        u = n("186325"),
        d = n("390507"),
        _ = n("679400"),
        c = n("580747"),
        E = n("435638");
    let I = r.forwardRef(function(e, t) {
        let {
            color: s,
            src: o,
            size: I = "md",
            width: T,
            height: f,
            className: S,
            initialAnimation: A,
            markers: h
        } = e, [m, N] = r.useState(null), O = r.useRef(null), p = r.useRef(null), R = r.useRef(null), C = "custom" === I ? {
            width: T,
            height: f
        } : (0, d.getIconSize)(I), g = !(0, c.default)("lottie_hover_multiple_loop"), L = r.useContext(u.AccessibilityPreferencesContext).reducedMotion.enabled, {
            enabled: D
        } = _.default.useExperiment({
            location: "LottieIcon web entry point"
        }), v = L || !D;
        return r.useImperativeHandle(t, () => ({
            play: e => {
                if (null != R.current) {
                    if (p.current = e, v) {
                        let t = h[e];
                        R.current.setSegment(t.start, t.start + t.duration), R.current.goToAndStop(t.duration, !0)
                    } else R.current.setLoop(!g && e.includes("hover")), R.current.goToAndPlay(e)
                }
            },
            stop: () => {
                null != R.current && !v && R.current.goToAndStop(0, !0)
            },
            stopIfPlaying: e => {
                null != R.current && !v && p.current === e && R.current.goToAndStop(0, !0)
            }
        }), [v, g, h]), r.useEffect(() => {
            null == m && o().then(e => N(e.default))
        }, [m, o]), r.useEffect(() => (n.e("23755").then(n.t.bind(n, "500923", 23)).then(e => {
            var t;
            let n, {
                    default: i
                } = e,
                r = null !== (t = p.current) && void 0 !== t ? t : A;
            if (null != r && null != h[r]) {
                let e = h[r];
                n = [e.start, e.start + e.duration]
            }
            null != O.current && (R.current = i.loadAnimation({
                container: O.current,
                renderer: "svg",
                loop: !1,
                autoplay: !1,
                animationData: l()(m),
                initialSegment: n
            }))
        }), () => {
            var e;
            null === (e = R.current) || void 0 === e || e.destroy()
        }), [m, A, h]), (0, i.jsx)("div", {
            style: {
                "--__lottieIconColor": null != s && "string" == typeof s ? s : null == s ? void 0 : s.css,
                display: "flex",
                ...C
            },
            className: a()(E.lottieIcon, S),
            ref: O
        })
    })
}