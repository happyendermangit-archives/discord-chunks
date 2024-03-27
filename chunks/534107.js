function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("101997"), n("222007");
    var i = n("37983"),
        l = n("884691"),
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
    let x = p.VOICE_RECORDING_MIN_DURATION_MILLIS / 1e3,
        E = 6,
        y = 2,
        g = [0, 0, 0, 0, 0];

    function S(e) {
        let {
            showAll: t,
            currentTime: n,
            duration: i,
            numSegments: l
        } = e;
        return t ? l : Math.max(0, Math.round(n / i * l))
    }

    function C(e) {
        var t, n, i, l, a;
        let {
            context: s,
            devicePixelRatio: r,
            canvasHeight: o,
            segmentValue: u,
            segmentIndex: d,
            constrainMin: c
        } = e, f = c ? (24 - y) * u + y : 24 * u;
        if (0 !== f) t = s, n = 6 * d * r, i = (o / 2 - f / 2) * r, l = f * r, a = 1 * r, t.moveTo(n, i + a), t.lineTo(n, i + l - a), t.arc(n + a, i + l - a, a, Math.PI, 0, !0), t.lineTo(n + 2 * a, i + a), t.arc(n + a, i + a, a, 0, Math.PI, !0), t.closePath()
    }

    function T(e, t, n) {
        let [i, a] = l.useState(e), [s, r] = l.useState(e);
        return l.useLayoutEffect(() => {
            a(s), r(e)
        }, [e, t, n]), [i, s]
    }

    function _(e, t, n, i) {
        if (null == i) return [t, !1];
        let l = Math.min((n - i) / 200, 1);
        if (1 === l) return [t, !1];
        let a = (0, c.interpolateColor)(e, t, l);
        return [a, !0]
    }

    function I(e) {
        let {
            className: t,
            waveform: n,
            currentTime: a,
            duration: c,
            played: y,
            playing: I,
            onDrag: v,
            onDragStart: A,
            onDragEnd: N
        } = e, {
            ref: R,
            width: O
        } = (0, u.default)(), M = l.useMemo(() => {
            var e;
            let t;
            return Math.floor(((t = (e = c) <= x ? 40 : e >= 45 ? 294 : (Math.min(e, 45) - x) / (45 - x) * 254 + 40) + 4) / E) * E - 4
        }, [c]), k = l.useRef(), L = function(e, t) {
            let n = l.useMemo(() => (function(e) {
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
                i = l.useMemo(() => (function(e) {
                    if (null != e) return Math.floor((e + 4) / 6)
                })(t), [t]),
                a = l.useMemo(() => {
                    var e;
                    return null !== (e = function(e, t) {
                        if (null != e && null != t) {
                            if (e.length < t) {
                                let n = t - e.length;
                                return e.concat(Array(n).fill(0))
                            }
                            return (0, f.default)(e, t)
                        }
                    }(null != n ? n : [], i)) && void 0 !== e ? e : g
                }, [n, i]);
            return a
        }(n, O), P = l.useRef(y), b = l.useRef(I), j = l.useRef(null), U = window.devicePixelRatio, {
            lastBackgroundFillColor: D,
            backgroundFillColor: w,
            lastActiveFillColor: F,
            activeFillColor: G,
            lastInactiveFillColor: H,
            inactiveFillColor: B
        } = function(e, t) {
            let n = (0, o.useToken)(r.default.colors.INTERACTIVE_MUTED).hex(),
                i = (0, o.useToken)(r.default.colors.INTERACTIVE_NORMAL).hex(),
                l = (0, o.useToken)(r.default.colors.INTERACTIVE_ACTIVE).hex(),
                a = (0, o.useToken)(r.default.unsafe_rawColors.BRAND_430).hex(),
                s = (0, o.useToken)(r.default.unsafe_rawColors.WHITE_500).hex(),
                u = t ? a : n,
                [d, c] = T(u, t, e),
                f = t ? s : e ? l : i,
                [m, p] = T(f, t, e),
                h = e ? u : i,
                [x, E] = T(h, t, e);
            return {
                lastBackgroundFillColor: d,
                backgroundFillColor: c,
                lastActiveFillColor: m,
                activeFillColor: p,
                lastInactiveFillColor: x,
                inactiveFillColor: E
            }
        }(y, I);
        l.useEffect(() => {
            let e = S({
                showAll: !y,
                currentTime: a,
                duration: c,
                numSegments: L.length
            });
            k.current = L.map((t, n) => new m.default(n < e ? t : 0))
        }, [L]), l.useEffect(() => {
            let e = k.current;
            if (null == e) return;
            let t = S({
                showAll: !y,
                currentTime: a,
                duration: c,
                numSegments: L.length
            });
            for (let n = 0; n < e.length; n++) {
                let i = e[n];
                if (n < t) {
                    i.animateTo(L[n]);
                    continue
                }
                i.reset()
            }
        }, [L, a, c, y]), l.useEffect(() => {
            let e = null;
            return e = requestAnimationFrame(function t(n) {
                let i = R.current,
                    l = null == i ? void 0 : i.getContext("2d"),
                    a = k.current;
                if (null == i || null == l || null == a) return;
                let s = !1;
                (P.current !== y || b.current !== I) && (P.current = y, b.current = I, j.current = n), null != j.current && n > j.current + 200 && (j.current = null);
                let r = i.height / U;
                l.clearRect(0, 0, i.width, i.height), l.beginPath();
                let [o, u] = _(D, w, n, j.current);
                s = s || u, l.fillStyle = o;
                for (let e = 0; e < L.length; e++) C({
                    context: l,
                    devicePixelRatio: U,
                    canvasHeight: r,
                    segmentValue: L[e],
                    segmentIndex: e,
                    constrainMin: !0
                });
                l.fill();
                let [d, c] = _(H, B, n, j.current);
                s = s || c;
                let [f, m] = _(F, G, n, j.current);
                s = s || m;
                for (let e = 0; e < a.length; e++) {
                    let t = a[e],
                        n = Math.max(t.getCurrentValue(), L[e] - .1);
                    l.beginPath(), l.fillStyle = t.isReset ? d : f, C({
                        context: l,
                        devicePixelRatio: U,
                        canvasHeight: r,
                        segmentValue: n,
                        segmentIndex: e,
                        constrainMin: !t.isReset
                    }), s = s || t.isAnimating(), l.fill()
                }
                s && (e = requestAnimationFrame(t))
            }), () => {
                null != e && cancelAnimationFrame(e)
            }
        }, [R, U, L, O, a, c, y, I, D, w, F, G, H, B]);
        let [, V] = (0, d.default)({
            ref: R,
            onDrag: v,
            onDragStart: A,
            onDragEnd: N
        });
        return (0, i.jsx)("canvas", {
            onMouseDown: V,
            className: s(h.canvas, t),
            style: {
                width: M
            },
            ref: R,
            height: 32 * window.devicePixelRatio,
            width: (null != O ? O : 0) * window.devicePixelRatio
        })
    }
}