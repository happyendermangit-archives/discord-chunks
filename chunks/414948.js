function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        filterDOMProps: function() {
            return f
        },
        isIOS: function() {
            return x
        },
        isWebKit: function() {
            return w
        },
        mergeProps: function() {
            return s
        },
        mergeRefs: function() {
            return u
        },
        useLayoutEffect: function() {
            return a
        },
        useObjectRef: function() {
            return g
        },
        useResizeObserver: function() {
            return _
        },
        useViewportSize: function() {
            return v
        }
    });
    var r = n("470079"),
        i = n("819841");
    let a = "undefined" != typeof document ? r.useLayoutEffect : () => {},
        o = new Map;

    function s(...e) {
        let t = {
            ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
            let r = e[n];
            for (let e in r) {
                let n = t[e],
                    a = r[e];
                "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = function(...e) {
                    return (...t) => {
                        for (let n of e) "function" == typeof n && n(...t)
                    }
                }(n, a) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof n && "string" == typeof a ? t[e] = (0, i.default)(n, a) : "id" === e && n && a ? t.id = function(e, t) {
                    if (e === t) return e;
                    let n = o.get(e);
                    if (n) return n(t), t;
                    let r = o.get(t);
                    return r ? (r(e), e) : t
                }(n, a) : t[e] = void 0 !== a ? a : n
            }
        }
        return t
    }

    function u(...e) {
        return 1 === e.length ? e[0] : t => {
            for (let n of e) "function" == typeof n ? n(t) : null != n && (n.current = t)
        }
    }
    let c = new Set(["id"]),
        l = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        d = /^(data-.*)$/;

    function f(e, t = {}) {
        let {
            labelable: n,
            propNames: r
        } = t, i = {};
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (c.has(t) || n && l.has(t) || (null == r ? void 0 : r.has(t)) || d.test(t)) && (i[t] = e[t]);
        return i
    }
    let p = new Map,
        h = new Set;

    function m() {
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
    "undefined" != typeof document && ("loading" !== document.readyState ? m() : document.addEventListener("DOMContentLoaded", m));

    function _(e) {
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
    let b = "undefined" != typeof document && window.visualViewport;

    function v() {
        let [e, t] = (0, r.useState)(() => y());
        return (0, r.useEffect)(() => {
            let e = () => {
                t(e => {
                    let t = y();
                    return t.width === e.width && t.height === e.height ? e : t
                })
            };
            return b ? b.addEventListener("resize", e) : window.addEventListener("resize", e), () => {
                b ? b.removeEventListener("resize", e) : window.removeEventListener("resize", e)
            }
        }, []), e
    }

    function y() {
        return {
            width: (null == b ? void 0 : b.width) || window.innerWidth,
            height: (null == b ? void 0 : b.height) || window.innerHeight
        }
    }

    function E(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
    }

    function S(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
    }

    function x() {
        return S(/^iPhone/i) || S(/^iPad/i) || S(/^Mac/i) && navigator.maxTouchPoints > 1
    }

    function w() {
        return E(/AppleWebKit/i) && ! function() {
            return E(/Chrome/i)
        }()
    }
}