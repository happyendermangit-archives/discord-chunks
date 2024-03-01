function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useId: function() {
            return d
        },
        useSlotId: function() {
            return p
        },
        chain: function() {
            return f
        },
        getOwnerDocument: function() {
            return m
        },
        getOwnerWindow: function() {
            return h
        },
        mergeProps: function() {
            return v
        },
        filterDOMProps: function() {
            return S
        },
        focusWithoutScrolling: function() {
            return w
        },
        openLink: function() {
            return F
        },
        getSyntheticLinkProps: function() {
            return j
        },
        shouldClientNavigate: function() {
            return N
        },
        useRouter: function() {
            return L
        },
        runAfterTransition: function() {
            return z
        },
        useGlobalListeners: function() {
            return B
        },
        useLabels: function() {
            return U
        },
        useObjectRef: function() {
            return H
        },
        useUpdateEffect: function() {
            return G
        },
        useLayoutEffect: function() {
            return s
        },
        useResizeObserver: function() {
            return W
        },
        useSyncRef: function() {
            return q
        },
        getScrollParent: function() {
            return Z
        },
        isScrollable: function() {
            return Y
        },
        useDescription: function() {
            return $
        },
        isMac: function() {
            return P
        },
        isIPhone: function() {
            return E
        },
        isIOS: function() {
            return M
        },
        isAppleDevice: function() {
            return R
        },
        isWebKit: function() {
            return I
        },
        isAndroid: function() {
            return O
        },
        useEvent: function() {
            return Q
        },
        scrollIntoView: function() {
            return ee
        },
        scrollIntoViewport: function() {
            return en
        },
        clamp: function() {
            return r.clamp
        },
        snapValueToStep: function() {
            return r.snapValueToStep
        },
        isVirtualClick: function() {
            return er
        },
        isVirtualPointerEvent: function() {
            return ea
        },
        useEffectEvent: function() {
            return c
        },
        useDeepMemo: function() {
            return ei
        },
        useFormReset: function() {
            return eo
        }
    }), n("222007"), n("424973");
    var r = n("708966"),
        a = n("884691"),
        i = n("638915"),
        o = n("493427");
    let s = "undefined" != typeof document ? a.useLayoutEffect : () => {};

    function c(e) {
        let t = (0, a.useRef)(null);
        return s(() => {
            t.current = e
        }, [e]), (0, a.useCallback)(function() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            let a = t.current;
            return a(...n)
        }, [])
    }
    let l = !!("undefined" != typeof window && window.document && window.document.createElement),
        u = new Map;

    function d(e) {
        let [t, n] = (0, a.useState)(e), r = (0, a.useRef)(null), o = (0, i.useSSRSafeId)(t), c = (0, a.useCallback)(e => {
            r.current = e
        }, []);
        return l && u.set(o, c), s(() => () => {
            u.delete(o)
        }, [o]), (0, a.useEffect)(() => {
            let e = r.current;
            e && (r.current = null, n(e))
        }), o
    }

    function p() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = d(),
            [n, r] = function(e) {
                let [t, n] = (0, a.useState)(e), r = (0, a.useRef)(null), i = c(() => {
                    let e = r.current.next();
                    if (e.done) {
                        r.current = null;
                        return
                    }
                    t === e.value ? i() : n(e.value)
                });
                s(() => {
                    r.current && i()
                });
                let o = c(e => {
                    r.current = e(t), i()
                });
                return [t, o]
            }(t),
            i = (0, a.useCallback)(() => {
                r(function*() {
                    yield t, yield document.getElementById(t) ? t : void 0
                })
            }, [t, r]);
        return s(i, [t, i, ...e]), n
    }

    function f() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            for (let e of t) "function" == typeof e && e(...n)
        }
    }
    let m = e => {
            var t;
            return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        h = e => {
            if (e && "window" in e && e.window === e) return e;
            let t = m(e);
            return t.defaultView || window
        };

    function v() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = {
            ...t[0]
        };
        for (let e = 1; e < t.length; e++) {
            let n = t[e];
            for (let e in n) {
                let t = r[e],
                    a = n[e];
                "function" == typeof t && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? r[e] = f(t, a) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof t && "string" == typeof a ? r[e] = (0, o.default)(t, a) : "id" === e && t && a ? r.id = function(e, t) {
                    if (e === t) return e;
                    let n = u.get(e);
                    if (n) return n(t), t;
                    let r = u.get(t);
                    return r ? (r(e), e) : t
                }(t, a) : r[e] = void 0 !== a ? a : t
            }
        }
        return r
    }
    let g = new Set(["id"]),
        y = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        b = new Set(["href", "target", "rel", "download", "ping", "referrerPolicy"]),
        x = /^(data-.*)$/;

    function S(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                labelable: n,
                isLink: r,
                propNames: a
            } = t,
            i = {};
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (g.has(t) || n && y.has(t) || r && b.has(t) || (null == a ? void 0 : a.has(t)) || x.test(t)) && (i[t] = e[t]);
        return i
    }

    function w(e) {
        if (function() {
                if (null == D) {
                    D = !1;
                    try {
                        document.createElement("div").focus({
                            get preventScroll() {
                                return D = !0, !0
                            }
                        })
                    } catch (e) {}
                }
                return D
            }()) e.focus({
            preventScroll: !0
        });
        else {
            let t = function(e) {
                for (var t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
                    element: t,
                    scrollTop: t.scrollTop,
                    scrollLeft: t.scrollLeft
                }), t = t.parentNode;
                return r instanceof HTMLElement && n.push({
                    element: r,
                    scrollTop: r.scrollTop,
                    scrollLeft: r.scrollLeft
                }), n
            }(e);
            e.focus(),
                function(e) {
                    for (let {
                            element: t,
                            scrollTop: n,
                            scrollLeft: r
                        }
                        of e) t.scrollTop = n, t.scrollLeft = r
                }(t)
        }
    }
    let D = null;

    function C(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
    }

    function k(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
    }

    function P() {
        return k(/^Mac/i)
    }

    function E() {
        return k(/^iPhone/i)
    }

    function T() {
        return k(/^iPad/i) || P() && navigator.maxTouchPoints > 1
    }

    function M() {
        return E() || T()
    }

    function R() {
        return P() || M()
    }

    function I() {
        return C(/AppleWebKit/i) && ! function() {
            return C(/Chrome/i)
        }()
    }

    function O() {
        return C(/Android/i)
    }
    let A = (0, a.createContext)({
        isNative: !0,
        open: function(e, t) {
            ! function(e, t) {
                if (e instanceof HTMLAnchorElement) t(e);
                else if (e.hasAttribute("data-href")) {
                    let n = document.createElement("a");
                    n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
                }
            }(e, e => F(e, t))
        }
    });

    function L() {
        return (0, a.useContext)(A)
    }

    function N(e, t) {
        let n = e.getAttribute("target");
        return (!n || "_self" === n) && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey
    }

    function F(e, t) {
        var n, r;
        let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            {
                metaKey: i,
                ctrlKey: o,
                altKey: s,
                shiftKey: c
            } = t;
        C(/Firefox/i) && (null === (r = window.event) || void 0 === r ? void 0 : null === (n = r.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (P() ? i = !0 : o = !0);
        let l = I() && P() && !T() ? new KeyboardEvent("keydown", {
            keyIdentifier: "Enter",
            metaKey: i,
            ctrlKey: o,
            altKey: s,
            shiftKey: c
        }) : new MouseEvent("click", {
            metaKey: i,
            ctrlKey: o,
            altKey: s,
            shiftKey: c,
            bubbles: !0,
            cancelable: !0
        });
        F.isOpening = a, w(e), e.dispatchEvent(l), F.isOpening = !1
    }
    F.isOpening = !1;

    function j(e) {
        return {
            "data-href": e.href,
            "data-target": e.target,
            "data-rel": e.rel,
            "data-download": e.download,
            "data-ping": e.ping,
            "data-referrer-policy": e.referrerPolicy
        }
    }
    let K = new Map,
        _ = new Set;

    function V() {
        if ("undefined" == typeof window) return;
        let e = t => {
            let n = K.get(t.target);
            if (n && (n.delete(t.propertyName), 0 === n.size && (t.target.removeEventListener("transitioncancel", e), K.delete(t.target)), 0 === K.size)) {
                for (let e of _) e();
                _.clear()
            }
        };
        document.body.addEventListener("transitionrun", t => {
            let n = K.get(t.target);
            !n && (n = new Set, K.set(t.target, n), t.target.addEventListener("transitioncancel", e)), n.add(t.propertyName)
        }), document.body.addEventListener("transitionend", e)
    }

    function z(e) {
        requestAnimationFrame(() => {
            0 === K.size ? e() : _.add(e)
        })
    }

    function B() {
        let e = (0, a.useRef)(new Map),
            t = (0, a.useCallback)((t, n, r, a) => {
                let i = (null == a ? void 0 : a.once) ? function() {
                    for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                    e.current.delete(r), r(...n)
                } : r;
                e.current.set(r, {
                    type: n,
                    eventTarget: t,
                    fn: i,
                    options: a
                }), t.addEventListener(n, r, a)
            }, []),
            n = (0, a.useCallback)((t, n, r, a) => {
                var i;
                let o = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
                t.removeEventListener(n, o, a), e.current.delete(r)
            }, []),
            r = (0, a.useCallback)(() => {
                e.current.forEach((e, t) => {
                    n(e.eventTarget, e.type, t, e.options)
                })
            }, [n]);
        return (0, a.useEffect)(() => r, [r]), {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
        }
    }

    function U(e, t) {
        let {
            id: n,
            "aria-label": r,
            "aria-labelledby": a
        } = e;
        return n = d(n), a && r ? a = [...new Set([n, ...a.trim().split(/\s+/)])].join(" ") : a && (a = a.trim().split(/\s+/).join(" ")), !r && !a && t && (r = t), {
            id: n,
            "aria-label": r,
            "aria-labelledby": a
        }
    }

    function H(e) {
        let t = (0, a.useRef)();
        return (0, a.useMemo)(() => ({
            get current() {
                return t.current
            },
            set current(value) {
                t.current = value, "function" == typeof e ? e(value) : e && (e.current = value)
            }
        }), [e])
    }

    function G(e, t) {
        let n = (0, a.useRef)(!0),
            r = (0, a.useRef)(null);
        (0, a.useEffect)(() => (n.current = !0, () => {
            n.current = !1
        }), []), (0, a.useEffect)(() => {
            n.current ? n.current = !1 : (!r.current || t.some((e, t) => !Object.is(e, r[t]))) && e(), r.current = t
        }, t)
    }
    "undefined" != typeof document && ("loading" !== document.readyState ? V() : document.addEventListener("DOMContentLoaded", V));

    function W(e) {
        let {
            ref: t,
            onResize: n
        } = e;
        (0, a.useEffect)(() => {
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

    function q(e, t) {
        s(() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
                e.ref.current = null
            }
        })
    }

    function Z(e, t) {
        for (Y(e, t) && (e = e.parentElement); e && !Y(e, t);) e = e.parentElement;
        return e || document.scrollingElement || document.documentElement
    }

    function Y(e, t) {
        let n = window.getComputedStyle(e),
            r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
        return r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r
    }
    "undefined" != typeof document && window.visualViewport;
    let X = 0,
        J = new Map;

    function $(e) {
        let [t, n] = (0, a.useState)(void 0);
        return s(() => {
            if (!e) return;
            let t = J.get(e);
            if (t) n(t.element.id);
            else {
                let r = "react-aria-description-".concat(X++);
                n(r);
                let a = document.createElement("div");
                a.id = r, a.style.display = "none", a.textContent = e, document.body.appendChild(a), t = {
                    refCount: 0,
                    element: a
                }, J.set(e, t)
            }
            return t.refCount++, () => {
                0 == --t.refCount && (t.element.remove(), J.delete(e))
            }
        }, [e]), {
            "aria-describedby": e ? t : void 0
        }
    }

    function Q(e, t, n, r) {
        let i = c(n),
            o = null == n;
        (0, a.useEffect)(() => {
            if (o) return;
            let n = e.current;
            return n.addEventListener(t, i, r), () => {
                n.removeEventListener(t, i, r)
            }
        }, [e, t, r, o, i])
    }

    function ee(e, t) {
        let n = et(e, t, "left"),
            r = et(e, t, "top"),
            a = t.offsetWidth,
            i = t.offsetHeight,
            o = e.scrollLeft,
            s = e.scrollTop,
            {
                borderTopWidth: c,
                borderLeftWidth: l
            } = getComputedStyle(e),
            u = e.scrollLeft + parseInt(l, 10),
            d = e.scrollTop + parseInt(c, 10),
            p = u + e.clientWidth,
            f = d + e.clientHeight;
        n <= o ? o = n - parseInt(l, 10) : n + a > p && (o += n + a - p), r <= d ? s = r - parseInt(c, 10) : r + i > f && (s += r + i - f), e.scrollLeft = o, e.scrollTop = s
    }

    function et(e, t, n) {
        let r = "left" === n ? "offsetLeft" : "offsetTop",
            a = 0;
        for (; t.offsetParent && (a += t[r], t.offsetParent !== e);) {
            ;
            if (t.offsetParent.contains(e)) {
                a -= e[r];
                break
            }
            t = t.offsetParent
        }
        return a
    }

    function en(e, t) {
        if (document.contains(e)) {
            let o = document.scrollingElement || document.documentElement;
            if ("hidden" === window.getComputedStyle(o).overflow) {
                let t = Z(e);
                for (; e && t && e !== o && t !== o;) ee(t, e), t = Z(e = t)
            } else {
                var n, r, a, i;
                let {
                    left: o,
                    top: s
                } = e.getBoundingClientRect();
                null == e || null === (n = e.scrollIntoView) || void 0 === n || n.call(e, {
                    block: "nearest"
                });
                let {
                    left: c,
                    top: l
                } = e.getBoundingClientRect();
                (Math.abs(o - c) > 1 || Math.abs(s - l) > 1) && (null == t || null === (a = t.containingElement) || void 0 === a || null === (r = a.scrollIntoView) || void 0 === r || r.call(a, {
                    block: "center",
                    inline: "center"
                }), null === (i = e.scrollIntoView) || void 0 === i || i.call(e, {
                    block: "nearest"
                }))
            }
        }
    }

    function er(e) {
        return 0 === e.mozInputSource && !!e.isTrusted || (O() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
    }

    function ea(e) {
        return !O() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
    }

    function ei(e, t) {
        let n = (0, a.useRef)(null);
        return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e
    }

    function eo(e, t, n) {
        let r = (0, a.useRef)(t),
            i = c(() => {
                n && n(r.current)
            });
        (0, a.useEffect)(() => {
            var t;
            let n = null == e ? void 0 : null === (t = e.current) || void 0 === t ? void 0 : t.form;
            return null == n || n.addEventListener("reset", i), () => {
                null == n || n.removeEventListener("reset", i)
            }
        }, [e, i])
    }
}