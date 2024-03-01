function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("101997"), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("669491"),
        o = n("77078"),
        u = n("731898"),
        d = n("554743"),
        c = n("284679"),
        f = n("293246"),
        m = n("247883"),
        p = n("525864"),
        h = n("290819");
    let E = p.VOICE_RECORDING_MIN_DURATION_MILLIS / 1e3,
        g = 6,
        C = 2,
        S = [0, 0, 0, 0, 0];

    function T(e) {
        let {
            showAll: t,
            currentTime: n,
            duration: l,
            numSegments: i
        } = e;
        return t ? i : Math.max(0, Math.round(n / l * i))
    }

    function v(e) {
        var t, n, l, i, a;
        let {
            context: s,
            devicePixelRatio: r,
            canvasHeight: o,
            segmentValue: u,
            segmentIndex: d,
            constrainMin: c
        } = e, f = c ? (24 - C) * u + C : 24 * u;
        if (0 !== f) t = s, n = 6 * d * r, l = (o / 2 - f / 2) * r, i = f * r, a = 1 * r, t.moveTo(n, l + a), t.lineTo(n, l + i - a), t.arc(n + a, l + i - a, a, Math.PI, 0, !0), t.lineTo(n + 2 * a, l + a), t.arc(n + a, l + a, a, 0, Math.PI, !0), t.closePath()
    }

    function I(e, t, n) {
        let [l, a] = i.useState(e), [s, r] = i.useState(e);
        return i.useLayoutEffect(() => {
            a(s), r(e)
        }, [e, t, n]), [l, s]
    }

    function _(e, t, n, l) {
        if (null == l) return [t, !1];
        let i = Math.min((n - l) / 200, 1);
        if (1 === i) return [t, !1];
        let a = (0, c.interpolateColor)(e, t, i);
        return [a, !0]
    }

    function N(e) {
        let {
            className: t,
            waveform: n,
            currentTime: a,
            duration: c,
            played: C,
            playing: N,
            onDrag: A,
            onDragStart: x,
            onDragEnd: y
        } = e, {
            ref: O,
            width: R
        } = (0, u.default)(), M = i.useMemo(() => {
            var e;
            let t;
            return Math.floor(((t = (e = c) <= E ? 40 : e >= 45 ? 294 : (Math.min(e, 45) - E) / (45 - E) * 254 + 40) + 4) / g) * g - 4
        }, [c]), L = i.useRef(), P = function(e, t) {
            let n = i.useMemo(() => (function(e) {
                    let t;
                    if (null == e) return;
                    try {
                        t = window.atob(e)
                    } catch (e) {
                        return
                    }
                    let n = [];
                    for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / p.WAVEFORM_WAVE_MAX_VALUE;
                    return n
                })(e), [e]),
                l = i.useMemo(() => (function(e) {
                    if (null != e) return Math.floor((e + 4) / 6)
                })(t), [t]),
                a = i.useMemo(() => {
                    var e;
                    return null !== (e = function(e, t) {
                        if (null != e && null != t) {
                            if (e.length < t) {
                                let n = t - e.length;
                                return e.concat(Array(n).fill(0))
                            }
                            return (0, f.default)(e, t)
                        }
                    }(null != n ? n : [], l)) && void 0 !== e ? e : S
                }, [n, l]);
            return a
        }(n, R), b = i.useRef(C), j = i.useRef(N), U = i.useRef(null), D = window.devicePixelRatio, {
            lastBackgroundFillColor: k,
            backgroundFillColor: w,
            lastActiveFillColor: F,
            activeFillColor: G,
            lastInactiveFillColor: B,
            inactiveFillColor: H
        } = function(e, t) {
            let n = (0, o.useToken)(r.default.colors.INTERACTIVE_MUTED).hex(),
                l = (0, o.useToken)(r.default.colors.INTERACTIVE_NORMAL).hex(),
                i = (0, o.useToken)(r.default.colors.INTERACTIVE_ACTIVE).hex(),
                a = (0, o.useToken)(r.default.unsafe_rawColors.BRAND_430).hex(),
                s = (0, o.useToken)(r.default.unsafe_rawColors.WHITE_500).hex(),
                u = t ? a : n,
                [d, c] = I(u, t, e),
                f = t ? s : e ? i : l,
                [m, p] = I(f, t, e),
                h = e ? u : l,
                [E, g] = I(h, t, e);
            return {
                lastBackgroundFillColor: d,
                backgroundFillColor: c,
                lastActiveFillColor: m,
                activeFillColor: p,
                lastInactiveFillColor: E,
                inactiveFillColor: g
            }
        }(C, N);
        i.useEffect(() => {
            let e = T({
                showAll: !C,
                currentTime: a,
                duration: c,
                numSegments: P.length
            });
            L.current = P.map((t, n) => new m.default(n < e ? t : 0))
        }, [P]), i.useEffect(() => {
            let e = L.current;
            if (null == e) return;
            let t = T({
                showAll: !C,
                currentTime: a,
                duration: c,
                numSegments: P.length
            });
            for (let n = 0; n < e.length; n++) {
                let l = e[n];
                if (n < t) {
                    l.animateTo(P[n]);
                    continue
                }
                l.reset()
            }
        }, [P, a, c, C]), i.useEffect(() => {
            let e = null;
            return e = requestAnimationFrame(function t(n) {
                let l = O.current,
                    i = null == l ? void 0 : l.getContext("2d"),
                    a = L.current;
                if (null == l || null == i || null == a) return;
                let s = !1;
                (b.current !== C || j.current !== N) && (b.current = C, j.current = N, U.current = n), null != U.current && n > U.current + 200 && (U.current = null);
                let r = l.height / D;
                i.clearRect(0, 0, l.width, l.height), i.beginPath();
                let [o, u] = _(k, w, n, U.current);
                s = s || u, i.fillStyle = o;
                for (let e = 0; e < P.length; e++) v({
                    context: i,
                    devicePixelRatio: D,
                    canvasHeight: r,
                    segmentValue: P[e],
                    segmentIndex: e,
                    constrainMin: !0
                });
                i.fill();
                let [d, c] = _(B, H, n, U.current);
                s = s || c;
                let [f, m] = _(F, G, n, U.current);
                s = s || m;
                for (let e = 0; e < a.length; e++) {
                    let t = a[e],
                        n = Math.max(t.getCurrentValue(), P[e] - .1);
                    i.beginPath(), i.fillStyle = t.isReset ? d : f, v({
                        context: i,
                        devicePixelRatio: D,
                        canvasHeight: r,
                        segmentValue: n,
                        segmentIndex: e,
                        constrainMin: !t.isReset
                    }), s = s || t.isAnimating(), i.fill()
                }
                s && (e = requestAnimationFrame(t))
            }), () => {
                null != e && cancelAnimationFrame(e)
            }
        }, [O, D, P, R, a, c, C, N, k, w, F, G, B, H]);
        let [, V] = (0, d.default)({
            ref: O,
            onDrag: A,
            onDragStart: x,
            onDragEnd: y
        });
        return (0, l.jsx)("canvas", {
            onMouseDown: V,
            className: s(h.canvas, t),
            style: {
                width: M
            },
            ref: O,
            height: 32 * window.devicePixelRatio,
            width: (null != R ? R : 0) * window.devicePixelRatio
        })
    }
}