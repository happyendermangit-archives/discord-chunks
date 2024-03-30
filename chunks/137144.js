function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("447515"),
        u = n("784184"),
        s = n("675865"),
        l = n("358732"),
        c = n("689952"),
        f = n("966490"),
        d = n("680720"),
        _ = n("970856"),
        E = n("618656");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t) {
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
                if ("string" == typeof e) return p(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var y = _.VOICE_RECORDING_MIN_DURATION_MILLIS / 1e3,
        I = 6,
        h = 2,
        O = [0, 0, 0, 0, 0];

    function T(e) {
        var t = e.showAll,
            n = e.currentTime,
            r = e.duration,
            o = e.numSegments;
        return t ? o : Math.max(0, Math.round(n / r * o))
    }

    function S(e) {
        var t, n, r, o, i, a = e.context,
            u = e.devicePixelRatio,
            s = e.canvasHeight,
            l = e.segmentValue,
            c = e.segmentIndex,
            f = e.constrainMin ? (24 - h) * l + h : 24 * l;
        if (0 !== f) {
            ;
            t = a, n = 6 * c * u, r = (s / 2 - f / 2) * u, o = f * u, i = 1 * u, t.moveTo(n, r + i), t.lineTo(n, r + o - i), t.arc(n + i, r + o - i, i, Math.PI, 0, !0), t.lineTo(n + 2 * i, r + i), t.arc(n + i, r + i, i, 0, Math.PI, !0), t.closePath()
        }
    }

    function v(e, t, n) {
        var o = m(r.useState(e), 2),
            i = o[0],
            a = o[1],
            u = m(r.useState(e), 2),
            s = u[0],
            l = u[1];
        return r.useLayoutEffect(function() {
            a(s), l(e)
        }, [e, t, n]), [i, s]
    }

    function g(e, t, n, r) {
        if (null == r) return [t, !1];
        var o = Math.min((n - r) / 200, 1);
        return 1 === o ? [t, !1] : [(0, c.interpolateColor)(e, t, o), !0]
    }

    function A(e) {
        var t, n, o, c, p, h, A, b, N, R, C, P, D, L, M, U, w, k, G, B = e.className,
            j = e.waveform,
            F = e.currentTime,
            V = e.duration,
            H = e.played,
            x = e.playing,
            Y = e.onDrag,
            W = e.onDragStart,
            K = e.onDragEnd,
            z = (0, s.default)(),
            X = z.ref,
            q = z.width,
            Q = r.useMemo(function() {
                var e, t;
                return Math.floor(((t = (e = V) <= y ? 40 : e >= 45 ? 294 : (Math.min(e, 45) - y) / (45 - y) * 254 + 40) + 4) / I) * I - 4
            }, [V]),
            J = r.useRef();
        var Z = (t = j, n = q, o = r.useMemo(function() {
                return function(e) {
                    if (null != e) {
                        try {
                            t = window.atob(e)
                        } catch (e) {
                            return
                        }
                        for (var t, n = [], r = 0; r < t.length; r++) n[r] = t.charCodeAt(r) / _.WAVEFORM_WAVE_MAX_VALUE;
                        return n
                    }
                }(t)
            }, [t]), c = r.useMemo(function() {
                return function(e) {
                    if (null != e) return Math.floor((e + 4) / 6)
                }(n)
            }, [n]), r.useMemo(function() {
                var e;
                return null !== (e = function(e, t) {
                    if (null != e && null != t) {
                        if (e.length < t) {
                            var n = t - e.length;
                            return e.concat(Array(n).fill(0))
                        }
                        return (0, f.default)(e, t)
                    }
                }(null != o ? o : [], c)) && void 0 !== e ? e : O
            }, [o, c])),
            $ = r.useRef(H),
            ee = r.useRef(x),
            et = r.useRef(null),
            en = window.devicePixelRatio;
        var er = (p = H, h = x, A = (0, u.useToken)(a.default.colors.INTERACTIVE_MUTED).hex(), b = (0, u.useToken)(a.default.colors.INTERACTIVE_NORMAL).hex(), N = (0, u.useToken)(a.default.colors.INTERACTIVE_ACTIVE).hex(), R = (0, u.useToken)(a.default.unsafe_rawColors.BRAND_430).hex(), C = (0, u.useToken)(a.default.unsafe_rawColors.WHITE_500).hex(), L = (D = m(v(P = h ? R : A, h, p), 2))[0], M = D[1], w = (U = m(v(h ? C : p ? N : b, h, p), 2))[0], k = U[1], {
                lastBackgroundFillColor: L,
                backgroundFillColor: M,
                lastActiveFillColor: w,
                activeFillColor: k,
                lastInactiveFillColor: (G = m(v(p ? P : b, h, p), 2))[0],
                inactiveFillColor: G[1]
            }),
            eo = er.lastBackgroundFillColor,
            ei = er.backgroundFillColor,
            ea = er.lastActiveFillColor,
            eu = er.activeFillColor,
            es = er.lastInactiveFillColor,
            el = er.inactiveFillColor;
        r.useEffect(function() {
            var e = T({
                showAll: !H,
                currentTime: F,
                duration: V,
                numSegments: Z.length
            });
            J.current = Z.map(function(t, n) {
                return new d.default(n < e ? t : 0)
            })
        }, [Z]), r.useEffect(function() {
            var e = J.current;
            if (null != e) {
                for (var t = T({
                        showAll: !H,
                        currentTime: F,
                        duration: V,
                        numSegments: Z.length
                    }), n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (n < t) {
                        r.animateTo(Z[n]);
                        continue
                    }
                    r.reset()
                }
            }
        }, [Z, F, V, H]), r.useEffect(function() {
            var e = null;
            return e = requestAnimationFrame(function t(n) {
                    var r = X.current,
                        o = null == r ? void 0 : r.getContext("2d"),
                        i = J.current;
                    if (null != r && null != o && null != i) {
                        var a = !1;
                        ($.current !== H || ee.current !== x) && ($.current = H, ee.current = x, et.current = n), null != et.current && n > et.current + 200 && (et.current = null);
                        var u = r.height / en;
                        o.clearRect(0, 0, r.width, r.height), o.beginPath();
                        var s = m(g(eo, ei, n, et.current), 2),
                            l = s[0],
                            c = s[1];
                        a = a || c, o.fillStyle = l;
                        for (var f = 0; f < Z.length; f++) S({
                            context: o,
                            devicePixelRatio: en,
                            canvasHeight: u,
                            segmentValue: Z[f],
                            segmentIndex: f,
                            constrainMin: !0
                        });
                        o.fill();
                        var d = m(g(es, el, n, et.current), 2),
                            _ = d[0],
                            E = d[1];
                        a = a || E;
                        var p = m(g(ea, eu, n, et.current), 2),
                            y = p[0],
                            I = p[1];
                        a = a || I;
                        for (var h = 0; h < i.length; h++) {
                            var O = i[h],
                                T = Math.max(O.getCurrentValue(), Z[h] - .1);
                            o.beginPath(), o.fillStyle = O.isReset ? _ : y, S({
                                context: o,
                                devicePixelRatio: en,
                                canvasHeight: u,
                                segmentValue: T,
                                segmentIndex: h,
                                constrainMin: !O.isReset
                            }), a = a || O.isAnimating(), o.fill()
                        }
                        a && (e = requestAnimationFrame(t))
                    }
                }),
                function() {
                    null != e && cancelAnimationFrame(e)
                }
        }, [X, en, Z, q, F, V, H, x, eo, ei, ea, eu, es, el]);
        var ec = m((0, l.default)({
            ref: X,
            onDrag: Y,
            onDragStart: W,
            onDragEnd: K
        }), 2)[1];
        return r.createElement("canvas", {
            onMouseDown: ec,
            className: i()(E.canvas, B),
            style: {
                width: Q
            },
            ref: X,
            height: 32 * window.devicePixelRatio,
            width: (null != q ? q : 0) * window.devicePixelRatio
        })
    }
}