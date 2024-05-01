function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    }), n("642549"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
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
        var t, n, i, r, a;
        let {
            context: s,
            devicePixelRatio: o,
            canvasHeight: l,
            segmentValue: u,
            segmentIndex: d,
            constrainMin: _
        } = e, c = _ ? (24 - h) * u + h : 24 * u;
        if (0 !== c) t = s, n = 6 * d * o, i = (l / 2 - c / 2) * o, r = c * o, a = 1 * o, t.moveTo(n, i + a), t.lineTo(n, i + r - a), t.arc(n + a, i + r - a, a, Math.PI, 0, !0), t.lineTo(n + 2 * a, i + a), t.arc(n + a, i + a, a, 0, Math.PI, !0), t.closePath()
    }

    function p(e, t, n) {
        let [i, a] = r.useState(e), [s, o] = r.useState(e);
        return r.useLayoutEffect(() => {
            a(s), o(e)
        }, [e, t, n]), [i, s]
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
            currentTime: a,
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
                a = (0, l.useToken)(o.default.unsafe_rawColors.BRAND_430).hex(),
                s = (0, l.useToken)(o.default.unsafe_rawColors.WHITE_500).hex(),
                u = t ? a : n,
                [d, _] = p(u, t, e),
                [c, E] = p(t ? s : e ? r : i, t, e),
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
                currentTime: a,
                duration: _,
                numSegments: P.length
            });
            y.current = P.map((t, n) => new E.default(n < e ? t : 0))
        }, [P]), r.useEffect(() => {
            let e = y.current;
            if (null == e) return;
            let t = m({
                showAll: !h,
                currentTime: a,
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
        }, [P, a, _, h]), r.useEffect(() => {
            let e = null;
            return e = requestAnimationFrame(function t(n) {
                let i = v.current,
                    r = null == i ? void 0 : i.getContext("2d"),
                    a = y.current;
                if (null == i || null == r || null == a) return;
                let s = !1;
                (U.current !== h || b.current !== R) && (U.current = h, b.current = R, G.current = n), null != G.current && n > G.current + 200 && (G.current = null);
                let o = i.height / w;
                r.clearRect(0, 0, i.width, i.height), r.beginPath();
                let [l, u] = O(B, k, n, G.current);
                s = s || u, r.fillStyle = l;
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
                s = s || _;
                let [c, E] = O(V, x, n, G.current);
                s = s || E;
                for (let e = 0; e < a.length; e++) {
                    let t = a[e],
                        n = Math.max(t.getCurrentValue(), P[e] - .1);
                    r.beginPath(), r.fillStyle = t.isReset ? d : c, N({
                        context: r,
                        devicePixelRatio: w,
                        canvasHeight: o,
                        segmentValue: n,
                        segmentIndex: e,
                        constrainMin: !t.isReset
                    }), s = s || t.isAnimating(), r.fill()
                }
                s && (e = requestAnimationFrame(t))
            }), () => {
                null != e && cancelAnimationFrame(e)
            }
        }, [v, w, P, D, a, _, h, R, B, k, V, x, F, H]);
        let [, Y] = (0, d.default)({
            ref: v,
            onDrag: C,
            onDragStart: g,
            onDragEnd: L
        });
        return (0, i.jsx)("canvas", {
            onMouseDown: Y,
            className: s()(T.canvas, t),
            style: {
                width: M
            },
            ref: v,
            height: 32 * window.devicePixelRatio,
            width: (null != D ? D : 0) * window.devicePixelRatio
        })
    }
}