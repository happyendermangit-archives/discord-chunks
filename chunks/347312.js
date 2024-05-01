function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    }), n("642549"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("692547"),
        l = n("481060"),
        u = n("393238"),
        d = n("206678"),
        _ = n("302221"),
        c = n("328187"),
        E = n("607889"),
        I = n("94432"),
        T = n("956772");
    let f = I.VOICE_RECORDING_MIN_DURATION_MILLIS / 1e3,
        S = 6,
        h = 2,
        A = [0, 0, 0, 0, 0];

    function m(e) {
        let {
            showAll: t,
            currentTime: n,
            duration: i,
            numSegments: r
        } = e;
        return t ? r : Math.max(0, Math.round(n / i * r))
    }

    function N(e) {
        var t, n, i, r, s;
        let {
            context: a,
            devicePixelRatio: o,
            canvasHeight: l,
            segmentValue: u,
            segmentIndex: d,
            constrainMin: _
        } = e, c = _ ? (24 - h) * u + h : 24 * u;
        if (0 !== c) t = a, n = 6 * d * o, i = (l / 2 - c / 2) * o, r = c * o, s = 1 * o, t.moveTo(n, i + s), t.lineTo(n, i + r - s), t.arc(n + s, i + r - s, s, Math.PI, 0, !0), t.lineTo(n + 2 * s, i + s), t.arc(n + s, i + s, s, 0, Math.PI, !0), t.closePath()
    }

    function p(e, t, n) {
        let [i, s] = r.useState(e), [a, o] = r.useState(e);
        return r.useLayoutEffect(() => {
            s(a), o(e)
        }, [e, t, n]), [i, a]
    }

    function O(e, t, n, i) {
        if (null == i) return [t, !1];
        let r = Math.min((n - i) / 200, 1);
        return 1 === r ? [t, !1] : [(0, _.interpolateColor)(e, t, r), !0]
    }

    function R(e) {
        let {
            className: t,
            waveform: n,
            currentTime: s,
            duration: _,
            played: h,
            playing: R,
            onDrag: C,
            onDragStart: g,
            onDragEnd: L
        } = e, {
            ref: v,
            width: D
        } = (0, u.default)(), M = r.useMemo(() => {
            var e;
            let t;
            return Math.floor(((t = (e = _) <= f ? 40 : e >= 45 ? 294 : (Math.min(e, 45) - f) / (45 - f) * 254 + 40) + 4) / S) * S - 4
        }, [_]), y = r.useRef(), P = function(e, t) {
            let n = r.useMemo(() => (function(e) {
                    let t;
                    if (null == e) return;
                    try {
                        t = window.atob(e)
                    } catch (e) {
                        return
                    }
                    let n = [];
                    for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / I.WAVEFORM_WAVE_MAX_VALUE;
                    return n
                })(e), [e]),
                i = r.useMemo(() => (function(e) {
                    if (null != e) return Math.floor((e + 4) / 6)
                })(t), [t]);
            return r.useMemo(() => {
                var e;
                return null !== (e = function(e, t) {
                    if (null != e && null != t) {
                        if (e.length < t) {
                            let n = t - e.length;
                            return e.concat(Array(n).fill(0))
                        }
                        return (0, c.default)(e, t)
                    }
                }(null != n ? n : [], i)) && void 0 !== e ? e : A
            }, [n, i])
        }(n, D), U = r.useRef(h), b = r.useRef(R), G = r.useRef(null), w = window.devicePixelRatio, {
            lastBackgroundFillColor: B,
            backgroundFillColor: k,
            lastActiveFillColor: V,
            activeFillColor: x,
            lastInactiveFillColor: F,
            inactiveFillColor: H
        } = function(e, t) {
            let n = (0, l.useToken)(o.default.colors.INTERACTIVE_MUTED).hex(),
                i = (0, l.useToken)(o.default.colors.INTERACTIVE_NORMAL).hex(),
                r = (0, l.useToken)(o.default.colors.INTERACTIVE_ACTIVE).hex(),
                s = (0, l.useToken)(o.default.unsafe_rawColors.BRAND_430).hex(),
                a = (0, l.useToken)(o.default.unsafe_rawColors.WHITE_500).hex(),
                u = t ? s : n,
                [d, _] = p(u, t, e),
                [c, E] = p(t ? a : e ? r : i, t, e),
                [I, T] = p(e ? u : i, t, e);
            return {
                lastBackgroundFillColor: d,
                backgroundFillColor: _,
                lastActiveFillColor: c,
                activeFillColor: E,
                lastInactiveFillColor: I,
                inactiveFillColor: T
            }
        }(h, R);
        r.useEffect(() => {
            let e = m({
                showAll: !h,
                currentTime: s,
                duration: _,
                numSegments: P.length
            });
            y.current = P.map((t, n) => new E.default(n < e ? t : 0))
        }, [P]), r.useEffect(() => {
            let e = y.current;
            if (null == e) return;
            let t = m({
                showAll: !h,
                currentTime: s,
                duration: _,
                numSegments: P.length
            });
            for (let n = 0; n < e.length; n++) {
                let i = e[n];
                if (n < t) {
                    i.animateTo(P[n]);
                    continue
                }
                i.reset()
            }
        }, [P, s, _, h]), r.useEffect(() => {
            let e = null;
            return e = requestAnimationFrame(function t(n) {
                let i = v.current,
                    r = null == i ? void 0 : i.getContext("2d"),
                    s = y.current;
                if (null == i || null == r || null == s) return;
                let a = !1;
                (U.current !== h || b.current !== R) && (U.current = h, b.current = R, G.current = n), null != G.current && n > G.current + 200 && (G.current = null);
                let o = i.height / w;
                r.clearRect(0, 0, i.width, i.height), r.beginPath();
                let [l, u] = O(B, k, n, G.current);
                a = a || u, r.fillStyle = l;
                for (let e = 0; e < P.length; e++) N({
                    context: r,
                    devicePixelRatio: w,
                    canvasHeight: o,
                    segmentValue: P[e],
                    segmentIndex: e,
                    constrainMin: !0
                });
                r.fill();
                let [d, _] = O(F, H, n, G.current);
                a = a || _;
                let [c, E] = O(V, x, n, G.current);
                a = a || E;
                for (let e = 0; e < s.length; e++) {
                    let t = s[e],
                        n = Math.max(t.getCurrentValue(), P[e] - .1);
                    r.beginPath(), r.fillStyle = t.isReset ? d : c, N({
                        context: r,
                        devicePixelRatio: w,
                        canvasHeight: o,
                        segmentValue: n,
                        segmentIndex: e,
                        constrainMin: !t.isReset
                    }), a = a || t.isAnimating(), r.fill()
                }
                a && (e = requestAnimationFrame(t))
            }), () => {
                null != e && cancelAnimationFrame(e)
            }
        }, [v, w, P, D, s, _, h, R, B, k, V, x, F, H]);
        let [, Y] = (0, d.default)({
            ref: v,
            onDrag: C,
            onDragStart: g,
            onDragEnd: L
        });
        return (0, i.jsx)("canvas", {
            onMouseDown: Y,
            className: a()(T.canvas, t),
            style: {
                width: M
            },
            ref: v,
            height: 32 * window.devicePixelRatio,
            width: (null != D ? D : 0) * window.devicePixelRatio
        })
    }
}