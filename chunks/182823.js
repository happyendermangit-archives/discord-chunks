function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        chain: function() {
            return p
        },
        clamp: function() {
            return r.clamp
        },
        filterDOMProps: function() {
            return E
        },
        focusWithoutScrolling: function() {
            return S
        },
        getOwnerDocument: function() {
            return h
        },
        getOwnerWindow: function() {
            return m
        },
        getScrollParent: function() {
            return K
        },
        getSyntheticLinkProps: function() {
            return F
        },
        isAndroid: function() {
            return R
        },
        isAppleDevice: function() {
            return A
        },
        isIOS: function() {
            return M
        },
        isIPhone: function() {
            return D
        },
        isMac: function() {
            return C
        },
        isScrollable: function() {
            return q
        },
        isVirtualClick: function() {
            return er
        },
        isVirtualPointerEvent: function() {
            return ei
        },
        isWebKit: function() {
            return k
        },
        mergeProps: function() {
            return g
        },
        openLink: function() {
            return P
        },
        runAfterTransition: function() {
            return j
        },
        scrollIntoView: function() {
            return ee
        },
        scrollIntoViewport: function() {
            return en
        },
        shouldClientNavigate: function() {
            return L
        },
        snapValueToStep: function() {
            return r.snapValueToStep
        },
        useDeepMemo: function() {
            return ea
        },
        useDescription: function() {
            return X
        },
        useEffectEvent: function() {
            return u
        },
        useEvent: function() {
            return J
        },
        useFormReset: function() {
            return eo
        },
        useGlobalListeners: function() {
            return z
        },
        useId: function() {
            return d
        },
        useLabels: function() {
            return H
        },
        useLayoutEffect: function() {
            return s
        },
        useObjectRef: function() {
            return G
        },
        useResizeObserver: function() {
            return $
        },
        useRouter: function() {
            return I
        },
        useSlotId: function() {
            return f
        },
        useSyncRef: function() {
            return W
        },
        useUpdateEffect: function() {
            return V
        }
    });
    var r = n("882932"),
        i = n("470079"),
        a = n("230012"),
        o = n("867330");
    let s = "undefined" != typeof document ? i.useLayoutEffect : () => {};

    function u(e) {
        let t = (0, i.useRef)(null);
        return s(() => {
            t.current = e
        }, [e]), (0, i.useCallback)((...e) => (0, t.current)(...e), [])
    }
    let c = !!("undefined" != typeof window && window.document && window.document.createElement),
        l = new Map;

    function d(e) {
        let [t, n] = (0, i.useState)(e), r = (0, i.useRef)(null), o = (0, a.useSSRSafeId)(t), u = (0, i.useCallback)(e => {
            r.current = e
        }, []);
        return c && l.set(o, u), s(() => () => {
            l.delete(o)
        }, [o]), (0, i.useEffect)(() => {
            let e = r.current;
            e && (r.current = null, n(e))
        }), o
    }

    function f(e = []) {
        let t = d(),
            [n, r] = function(e) {
                let [t, n] = (0, i.useState)(e), r = (0, i.useRef)(null), a = u(() => {
                    let e = r.current.next();
                    if (e.done) {
                        r.current = null;
                        return
                    }
                    t === e.value ? a() : n(e.value)
                });
                s(() => {
                    r.current && a()
                });
                let o = u(e => {
                    r.current = e(t), a()
                });
                return [t, o]
            }(t),
            a = (0, i.useCallback)(() => {
                r(function*() {
                    yield t, yield document.getElementById(t) ? t : void 0
                })
            }, [t, r]);
        return s(a, [t, a, ...e]), n
    }

    function p(...e) {
        return (...t) => {
            for (let n of e) "function" == typeof n && n(...t)
        }
    }
    let h = e => {
            var t;
            return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        m = e => e && "window" in e && e.window === e ? e : h(e).defaultView || window;

    function g(...e) {
        let t = {
            ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
            let r = e[n];
            for (let e in r) {
                let n = t[e],
                    i = r[e];
                "function" == typeof n && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = p(n, i) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof n && "string" == typeof i ? t[e] = (0, o.default)(n, i) : "id" === e && n && i ? t.id = function(e, t) {
                    if (e === t) return e;
                    let n = l.get(e);
                    if (n) return n(t), t;
                    let r = l.get(t);
                    return r ? (r(e), e) : t
                }(n, i) : t[e] = void 0 !== i ? i : n
            }
        }
        return t
    }
    let _ = new Set(["id"]),
        b = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        v = new Set(["href", "target", "rel", "download", "ping", "referrerPolicy"]),
        y = /^(data-.*)$/;

    function E(e, t = {}) {
        let {
            labelable: n,
            isLink: r,
            propNames: i
        } = t, a = {};
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (_.has(t) || n && b.has(t) || r && v.has(t) || (null == i ? void 0 : i.has(t)) || y.test(t)) && (a[t] = e[t]);
        return a
    }

    function S(e) {
        if (function() {
                if (null == x) {
                    x = !1;
                    try {
                        document.createElement("div").focus({
                            get preventScroll() {
                                return x = !0, !0
                            }
                        })
                    } catch (e) {}
                }
                return x
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
    let x = null;

    function w(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
    }

    function T(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
    }

    function C() {
        return T(/^Mac/i)
    }

    function D() {
        return T(/^iPhone/i)
    }

    function O() {
        return T(/^iPad/i) || C() && navigator.maxTouchPoints > 1
    }

    function M() {
        return D() || O()
    }

    function A() {
        return C() || M()
    }

    function k() {
        return w(/AppleWebKit/i) && ! function() {
            return w(/Chrome/i)
        }()
    }

    function R() {
        return w(/Android/i)
    }
    let N = (0, i.createContext)({
        isNative: !0,
        open: function(e, t) {
            ! function(e, t) {
                if (e instanceof HTMLAnchorElement) t(e);
                else if (e.hasAttribute("data-href")) {
                    let n = document.createElement("a");
                    n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
                }
            }(e, e => P(e, t))
        }
    });

    function I() {
        return (0, i.useContext)(N)
    }

    function L(e, t) {
        let n = e.getAttribute("target");
        return (!n || "_self" === n) && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey
    }

    function P(e, t, n = !0) {
        var r, i;
        let {
            metaKey: a,
            ctrlKey: o,
            altKey: s,
            shiftKey: u
        } = t;
        w(/Firefox/i) && (null === (i = window.event) || void 0 === i ? void 0 : null === (r = i.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (C() ? a = !0 : o = !0);
        let c = k() && C() && !O() ? new KeyboardEvent("keydown", {
            keyIdentifier: "Enter",
            metaKey: a,
            ctrlKey: o,
            altKey: s,
            shiftKey: u
        }) : new MouseEvent("click", {
            metaKey: a,
            ctrlKey: o,
            altKey: s,
            shiftKey: u,
            bubbles: !0,
            cancelable: !0
        });
        P.isOpening = n, S(e), e.dispatchEvent(c), P.isOpening = !1
    }
    P.isOpening = !1;

    function F(e) {
        return {
            "data-href": e.href,
            "data-target": e.target,
            "data-rel": e.rel,
            "data-download": e.download,
            "data-ping": e.ping,
            "data-referrer-policy": e.referrerPolicy
        }
    }
    let B = new Map,
        U = new Set;

    function Y() {
        if ("undefined" == typeof window) return;
        let e = t => {
            let n = B.get(t.target);
            if (n && (n.delete(t.propertyName), 0 === n.size && (t.target.removeEventListener("transitioncancel", e), B.delete(t.target)), 0 === B.size)) {
                for (let e of U) e();
                U.clear()
            }
        };
        document.body.addEventListener("transitionrun", t => {
            let n = B.get(t.target);
            !n && (n = new Set, B.set(t.target, n), t.target.addEventListener("transitioncancel", e)), n.add(t.propertyName)
        }), document.body.addEventListener("transitionend", e)
    }

    function j(e) {
        requestAnimationFrame(() => {
            0 === B.size ? e() : U.add(e)
        })
    }

    function z() {
        let e = (0, i.useRef)(new Map),
            t = (0, i.useCallback)((t, n, r, i) => {
                let a = (null == i ? void 0 : i.once) ? (...t) => {
                    e.current.delete(r), r(...t)
                } : r;
                e.current.set(r, {
                    type: n,
                    eventTarget: t,
                    fn: a,
                    options: i
                }), t.addEventListener(n, r, i)
            }, []),
            n = (0, i.useCallback)((t, n, r, i) => {
                var a;
                let o = (null === (a = e.current.get(r)) || void 0 === a ? void 0 : a.fn) || r;
                t.removeEventListener(n, o, i), e.current.delete(r)
            }, []),
            r = (0, i.useCallback)(() => {
                e.current.forEach((e, t) => {
                    n(e.eventTarget, e.type, t, e.options)
                })
            }, [n]);
        return (0, i.useEffect)(() => r, [r]), {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
        }
    }

    function H(e, t) {
        let {
            id: n,
            "aria-label": r,
            "aria-labelledby": i
        } = e;
        return n = d(n), i && r ? i = [...new Set([n, ...i.trim().split(/\s+/)])].join(" ") : i && (i = i.trim().split(/\s+/).join(" ")), !r && !i && t && (r = t), {
            id: n,
            "aria-label": r,
            "aria-labelledby": i
        }
    }

    function G(e) {
        let t = (0, i.useRef)();
        return (0, i.useMemo)(() => ({
            get current() {
                return t.current
            },
            set current(value) {
                t.current = value, "function" == typeof e ? e(value) : e && (e.current = value)
            }
        }), [e])
    }

    function V(e, t) {
        let n = (0, i.useRef)(!0),
            r = (0, i.useRef)(null);
        (0, i.useEffect)(() => (n.current = !0, () => {
            n.current = !1
        }), []), (0, i.useEffect)(() => {
            n.current ? n.current = !1 : (!r.current || t.some((e, t) => !Object.is(e, r[t]))) && e(), r.current = t
        }, t)
    }
    "undefined" != typeof document && ("loading" !== document.readyState ? Y() : document.addEventListener("DOMContentLoaded", Y));

    function $(e) {
        let {
            ref: t,
            onResize: n
        } = e;
        (0, i.useEffect)(() => {
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

    function W(e, t) {
        s(() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
                e.ref.current = null
            }
        })
    }

    function K(e, t) {
        for (q(e, t) && (e = e.parentElement); e && !q(e, t);) e = e.parentElement;
        return e || document.scrollingElement || document.documentElement
    }

    function q(e, t) {
        let n = window.getComputedStyle(e),
            r = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
        return r && t && (r = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), r
    }
    "undefined" != typeof document && window.visualViewport;
    let Q = 0,
        Z = new Map;

    function X(e) {
        let [t, n] = (0, i.useState)(void 0);
        return s(() => {
            if (!e) return;
            let t = Z.get(e);
            if (t) n(t.element.id);
            else {
                let r = `react-aria-description-${Q++}`;
                n(r);
                let i = document.createElement("div");
                i.id = r, i.style.display = "none", i.textContent = e, document.body.appendChild(i), t = {
                    refCount: 0,
                    element: i
                }, Z.set(e, t)
            }
            return t.refCount++, () => {
                0 == --t.refCount && (t.element.remove(), Z.delete(e))
            }
        }, [e]), {
            "aria-describedby": e ? t : void 0
        }
    }

    function J(e, t, n, r) {
        let a = u(n),
            o = null == n;
        (0, i.useEffect)(() => {
            if (o) return;
            let n = e.current;
            return n.addEventListener(t, a, r), () => {
                n.removeEventListener(t, a, r)
            }
        }, [e, t, r, o, a])
    }

    function ee(e, t) {
        let n = et(e, t, "left"),
            r = et(e, t, "top"),
            i = t.offsetWidth,
            a = t.offsetHeight,
            o = e.scrollLeft,
            s = e.scrollTop,
            {
                borderTopWidth: u,
                borderLeftWidth: c
            } = getComputedStyle(e),
            l = e.scrollLeft + parseInt(c, 10),
            d = e.scrollTop + parseInt(u, 10),
            f = l + e.clientWidth,
            p = d + e.clientHeight;
        n <= o ? o = n - parseInt(c, 10) : n + i > f && (o += n + i - f), r <= d ? s = r - parseInt(u, 10) : r + a > p && (s += r + a - p), e.scrollLeft = o, e.scrollTop = s
    }

    function et(e, t, n) {
        let r = "left" === n ? "offsetLeft" : "offsetTop",
            i = 0;
        for (; t.offsetParent && (i += t[r], t.offsetParent !== e);) {
            ;
            if (t.offsetParent.contains(e)) {
                i -= e[r];
                break
            }
            t = t.offsetParent
        }
        return i
    }

    function en(e, t) {
        if (document.contains(e)) {
            let o = document.scrollingElement || document.documentElement;
            if ("hidden" === window.getComputedStyle(o).overflow) {
                let t = K(e);
                for (; e && t && e !== o && t !== o;) ee(t, e), t = K(e = t)
            } else {
                var n, r, i, a;
                let {
                    left: o,
                    top: s
                } = e.getBoundingClientRect();
                null == e || null === (n = e.scrollIntoView) || void 0 === n || n.call(e, {
                    block: "nearest"
                });
                let {
                    left: u,
                    top: c
                } = e.getBoundingClientRect();
                (Math.abs(o - u) > 1 || Math.abs(s - c) > 1) && (null == t || null === (i = t.containingElement) || void 0 === i || null === (r = i.scrollIntoView) || void 0 === r || r.call(i, {
                    block: "center",
                    inline: "center"
                }), null === (a = e.scrollIntoView) || void 0 === a || a.call(e, {
                    block: "nearest"
                }))
            }
        }
    }

    function er(e) {
        return 0 === e.mozInputSource && !!e.isTrusted || (R() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
    }

    function ei(e) {
        return !R() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
    }

    function ea(e, t) {
        let n = (0, i.useRef)(null);
        return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e
    }

    function eo(e, t, n) {
        let r = (0, i.useRef)(t),
            a = u(() => {
                n && n(r.current)
            });
        (0, i.useEffect)(() => {
            var t;
            let n = null == e ? void 0 : null === (t = e.current) || void 0 === t ? void 0 : t.form;
            return null == n || n.addEventListener("reset", a), () => {
                null == n || n.removeEventListener("reset", a)
            }
        }, [e, a])
    }
}