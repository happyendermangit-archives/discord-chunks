function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        mergeProps: function() {
            return a
        },
        mergeRefs: function() {
            return c
        },
        filterDOMProps: function() {
            return f
        },
        useObjectRef: function() {
            return g
        },
        useLayoutEffect: function() {
            return o
        },
        useResizeObserver: function() {
            return b
        },
        useViewportSize: function() {
            return y
        },
        isIOS: function() {
            return k
        },
        isWebKit: function() {
            return E
        }
    }), n("222007"), n("424973");
    var r = n("884691"),
        i = n("38736");
    let o = "undefined" != typeof document ? r.useLayoutEffect : () => {},
        s = new Map;

    function a() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = {
            ...t[0]
        };
        for (let e = 1; e < t.length; e++) {
            let n = t[e];
            for (let e in n) {
                let t = r[e],
                    o = n[e];
                "function" == typeof t && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? r[e] = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function() {
                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        for (let e of t) "function" == typeof e && e(...n)
                    }
                }(t, o) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof t && "string" == typeof o ? r[e] = (0, i.default)(t, o) : "id" === e && t && o ? r.id = function(e, t) {
                    if (e === t) return e;
                    let n = s.get(e);
                    if (n) return n(t), t;
                    let r = s.get(t);
                    return r ? (r(e), e) : t
                }(t, o) : r[e] = void 0 !== o ? o : t
            }
        }
        return r
    }

    function c() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 1 === t.length ? t[0] : e => {
            for (let n of t) "function" == typeof n ? n(e) : null != n && (n.current = e)
        }
    }
    let u = new Set(["id"]),
        d = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        l = /^(data-.*)$/;

    function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                labelable: n,
                propNames: r
            } = t,
            i = {};
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (u.has(t) || n && d.has(t) || (null == r ? void 0 : r.has(t)) || l.test(t)) && (i[t] = e[t]);
        return i
    }
    let p = new Map,
        h = new Set;

    function v() {
        if ("undefined" == typeof window) return;
        let e = t => {
            let n = p.get(t.target);
            if (n && (n.delete(t.propertyName), 0 === n.size && (t.target.removeEventListener("transitioncancel", e), p.delete(t.target)), 0 === p.size)) {
                for (let e of h) e();
                h.clear()
            }
        };
        document.body.addEventListener("transitionrun", t => {
            let n = p.get(t.target);
            !n && (n = new Set, p.set(t.target, n), t.target.addEventListener("transitioncancel", e)), n.add(t.propertyName)
        }), document.body.addEventListener("transitionend", e)
    }

    function g(e) {
        let t = (0, r.useRef)();
        return (0, r.useMemo)(() => ({
            get current() {
                return t.current
            },
            set current(value) {
                t.current = value, "function" == typeof e ? e(value) : e && (e.current = value)
            }
        }), [e])
    }
    "undefined" != typeof document && ("loading" !== document.readyState ? v() : document.addEventListener("DOMContentLoaded", v));

    function b(e) {
        let {
            ref: t,
            onResize: n
        } = e;
        (0, r.useEffect)(() => {
            let e = null == t ? void 0 : t.current;
            if (e) {
                if (!(void 0 !== window.ResizeObserver)) return window.addEventListener("resize", n, !1), () => {
                    window.removeEventListener("resize", n, !1)
                };
                else {
                    let t = new window.ResizeObserver(e => {
                        e.length && n()
                    });
                    return t.observe(e), () => {
                        e && t.unobserve(e)
                    }
                }
            }
        }, [n, t])
    }
    let m = "undefined" != typeof document && window.visualViewport;

    function y() {
        let [e, t] = (0, r.useState)(() => x());
        return (0, r.useEffect)(() => {
            let e = () => {
                t(e => {
                    let t = x();
                    return t.width === e.width && t.height === e.height ? e : t
                })
            };
            return m ? m.addEventListener("resize", e) : window.addEventListener("resize", e), () => {
                m ? m.removeEventListener("resize", e) : window.removeEventListener("resize", e)
            }
        }, []), e
    }

    function x() {
        return {
            width: (null == m ? void 0 : m.width) || window.innerWidth,
            height: (null == m ? void 0 : m.height) || window.innerHeight
        }
    }

    function w(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
    }

    function S(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
    }

    function k() {
        return S(/^iPhone/i) || S(/^iPad/i) || S(/^Mac/i) && navigator.maxTouchPoints > 1
    }

    function E() {
        return w(/AppleWebKit/i) && ! function() {
            return w(/Chrome/i)
        }()
    }
}