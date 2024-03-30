function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ImageLoadingOverlay: function() {
            return y
        }
    });
    var r = n("470079"),
        o = n("718017"),
        i = n("788900"),
        a = n("784184"),
        u = n("76768"),
        s = n("281767"),
        l = n("457731");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e) {
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
    }

    function d(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function _(e, t) {
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
                if ("string" == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var E = {
            from: {
                opacity: 1
            },
            enter: {
                opacity: 1
            },
            leave: {
                opacity: 0
            },
            config: {
                duration: 200
            }
        },
        p = d(f({}, E), {
            config: {
                duration: 50
            }
        }),
        m = d(f({}, E), {
            config: function(e, t) {
                return t ? {
                    duration: 800
                } : {
                    duration: 200
                }
            }
        });

    function y(e) {
        var t = e.readyState,
            n = e.aspectRatio,
            c = e.placeholder,
            d = e.placeholderVersion,
            y = e.placeholderStyle,
            I = e.children,
            h = t === s.ImageReadyStates.LOADING,
            O = _(r.useState(function() {
                return Date.now()
            }), 1)[0],
            T = _(r.useState(h), 1)[0],
            S = _(r.useState(!1), 2),
            v = S[0],
            g = S[1],
            A = r.useMemo(function() {
                if (T && 1 === d && null != c) {
                    var e = Uint8Array.from(atob(c), function(e) {
                            return e.charCodeAt(0)
                        }),
                        t = (0, u.thumbHashToRGBA)(e, {
                            detail: 1,
                            pop: 1.1
                        });
                    return (0, i.rgbaToDataURL)(t.w, t.h, t.rgba)
                }
            }, [T, c, d]);
        r.useEffect(function() {
            var e = setTimeout(function() {
                g(!0)
            }, 2e3);
            return function() {
                clearTimeout(e)
            }
        }, [T]);
        var b = t === s.ImageReadyStates.READY && Date.now() - O < 200,
            N = (0, o.useTransition)(h && null != A, b ? p : E),
            R = (0, o.useTransition)(h && v, m);
        return r.createElement("div", {
            className: l.loadingOverlay,
            style: {
                aspectRatio: n
            }
        }, I, N(function(e, t) {
            return t && r.createElement(o.animated.img, {
                style: f({}, y, e),
                className: l.imagePlaceholder,
                src: A,
                alt: ""
            })
        }), R(function(e, t) {
            return t && r.createElement(o.animated.div, {
                style: e,
                className: l.imageLoadingOverlay
            }, r.createElement(a.Spinner, {
                type: a.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
                className: l.cornerLoadingSpinner
            }))
        }))
    }
}