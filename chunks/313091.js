function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LottieIcon: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("906280"),
        u = n.n(a),
        s = n("676250"),
        l = n("729486"),
        c = n("621384"),
        f = n("794597"),
        d = n("435638");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var E = r.forwardRef(function(e, t) {
        var o, a, E = e.color,
            p = e.src,
            m = e.size,
            y = void 0 === m ? "md" : m,
            I = e.width,
            h = e.height,
            O = e.className,
            T = e.initialAnimation,
            S = e.markers;
        var v = (o = r.useState(null), a = 2, function(e) {
                if (Array.isArray(e)) return e
            }(o) || function(e, t) {
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
            }(o, a) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }
            }(o, a) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            g = v[0],
            A = v[1],
            b = r.useRef(null),
            N = r.useRef(null),
            R = r.useRef(null),
            C = "custom" === y ? {
                width: I,
                height: h
            } : (0, l.getIconSize)(y),
            P = !(0, f.default)("lottie_hover_multiple_loop"),
            D = r.useContext(s.AccessibilityPreferencesContext).reducedMotion.enabled,
            L = c.default.useExperiment({
                location: "LottieIcon web entry point"
            }).enabled,
            M = D || !L;
        return r.useImperativeHandle(t, function() {
            return {
                play: function(e) {
                    if (null != R.current) {
                        if (N.current = e, M) {
                            var t = S[e];
                            R.current.setSegment(t.start, t.start + t.duration), R.current.goToAndStop(t.duration, !0)
                        } else R.current.setLoop(!P && e.includes("hover")), R.current.goToAndPlay(e)
                    }
                },
                stop: function() {
                    null != R.current && !M && R.current.goToAndStop(0, !0)
                },
                stopIfPlaying: function(e) {
                    null != R.current && !M && N.current === e && R.current.goToAndStop(0, !0)
                }
            }
        }, [M, P, S]), r.useEffect(function() {
            null == g && p().then(function(e) {
                return A(e.default)
            })
        }, [g, p]), r.useEffect(function() {
            return n.e("23755").then(n.t.bind(n, "500923", 23)).then(function(e) {
                    var t, n, r = e.default,
                        o = null !== (n = N.current) && void 0 !== n ? n : T;
                    if (null != o && null != S[o]) {
                        var i = S[o];
                        t = [i.start, i.start + i.duration]
                    }
                    null != b.current && (R.current = r.loadAnimation({
                        container: b.current,
                        renderer: "svg",
                        loop: !1,
                        autoplay: !1,
                        animationData: u()(g),
                        initialSegment: t
                    }))
                }),
                function() {
                    var e;
                    null === (e = R.current) || void 0 === e || e.destroy()
                }
        }, [g, T, S]), r.createElement("div", {
            style: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({
                "--__lottieIconColor": null != E && "string" == typeof E ? E : null == E ? void 0 : E.css,
                display: "flex"
            }, C),
            className: i()(d.lottieIcon, O),
            ref: b
        })
    })
}