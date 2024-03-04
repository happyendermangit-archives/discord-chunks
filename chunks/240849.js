function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useId: function() {
            return l
        },
        useSlotId: function() {
            return f
        },
        chain: function() {
            return p
        },
        getOwnerDocument: function() {
            return h
        },
        getOwnerWindow: function() {
            return v
        },
        mergeProps: function() {
            return g
        },
        filterDOMProps: function() {
            return w
        },
        focusWithoutScrolling: function() {
            return S
        },
        openLink: function() {
            return j
        },
        getSyntheticLinkProps: function() {
            return N
        },
        shouldClientNavigate: function() {
            return L
        },
        useRouter: function() {
            return O
        },
        runAfterTransition: function() {
            return K
        },
        useGlobalListeners: function() {
            return V
        },
        useLabels: function() {
            return U
        },
        useObjectRef: function() {
            return H
        },
        useUpdateEffect: function() {
            return q
        },
        useLayoutEffect: function() {
            return a
        },
        useResizeObserver: function() {
            return G
        },
        useSyncRef: function() {
            return W
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
            return M
        },
        isIPhone: function() {
            return D
        },
        isIOS: function() {
            return P
        },
        isAppleDevice: function() {
            return T
        },
        isWebKit: function() {
            return A
        },
        isAndroid: function() {
            return R
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
            return ei
        },
        useEffectEvent: function() {
            return c
        },
        useDeepMemo: function() {
            return eo
        },
        useFormReset: function() {
            return es
        }
    }), n("222007"), n("424973");
    var r = n("708966"),
        i = n("884691"),
        o = n("638915"),
        s = n("493427");
    let a = "undefined" != typeof document ? i.useLayoutEffect : () => {};

    function c(e) {
        let t = (0, i.useRef)(null);
        return a(() => {
            t.current = e
        }, [e]), (0, i.useCallback)(function() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            let i = t.current;
            return i(...n)
        }, [])
    }
    let u = !!("undefined" != typeof window && window.document && window.document.createElement),
        d = new Map;

    function l(e) {
        let [t, n] = (0, i.useState)(e), r = (0, i.useRef)(null), s = (0, o.useSSRSafeId)(t), c = (0, i.useCallback)(e => {
            r.current = e
        }, []);
        return u && d.set(s, c), a(() => () => {
            d.delete(s)
        }, [s]), (0, i.useEffect)(() => {
            let e = r.current;
            e && (r.current = null, n(e))
        }), s
    }

    function f() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = l(),
            [n, r] = function(e) {
                let [t, n] = (0, i.useState)(e), r = (0, i.useRef)(null), o = c(() => {
                    let e = r.current.next();
                    if (e.done) {
                        r.current = null;
                        return
                    }
                    t === e.value ? o() : n(e.value)
                });
                a(() => {
                    r.current && o()
                });
                let s = c(e => {
                    r.current = e(t), o()
                });
                return [t, s]
            }(t),
            o = (0, i.useCallback)(() => {
                r(function*() {
                    yield t, yield document.getElementById(t) ? t : void 0
                })
            }, [t, r]);
        return a(o, [t, o, ...e]), n
    }

    function p() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            for (let e of t) "function" == typeof e && e(...n)
        }
    }
    let h = e => {
            var t;
            return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        v = e => {
            if (e && "window" in e && e.window === e) return e;
            let t = h(e);
            return t.defaultView || window
        };

    function g() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = {
            ...t[0]
        };
        for (let e = 1; e < t.length; e++) {
            let n = t[e];
            for (let e in n) {
                let t = r[e],
                    i = n[e];
                "function" == typeof t && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? r[e] = p(t, i) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof t && "string" == typeof i ? r[e] = (0, s.default)(t, i) : "id" === e && t && i ? r.id = function(e, t) {
                    if (e === t) return e;
                    let n = d.get(e);
                    if (n) return n(t), t;
                    let r = d.get(t);
                    return r ? (r(e), e) : t
                }(t, i) : r[e] = void 0 !== i ? i : t
            }
        }
        return r
    }
    let b = new Set(["id"]),
        m = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        y = new Set(["href", "target", "rel", "download", "ping", "referrerPolicy"]),
        x = /^(data-.*)$/;

    function w(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                labelable: n,
                isLink: r,
                propNames: i
            } = t,
            o = {};
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (b.has(t) || n && m.has(t) || r && y.has(t) || (null == i ? void 0 : i.has(t)) || x.test(t)) && (o[t] = e[t]);
        return o
    }

    function S(e) {
        if (function() {
                if (null == k) {
                    k = !1;
                    try {
                        document.createElement("div").focus({
                            get preventScroll() {
                                return k = !0, !0
                            }
                        })
                    } catch (e) {}
                }
                return k
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
    let k = null;

    function E(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some(t => e.test(t.brand))) || e.test(window.navigator.userAgent))
    }

    function _(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
    }

    function M() {
        return _(/^Mac/i)
    }

    function D() {
        return _(/^iPhone/i)
    }

    function C() {
        return _(/^iPad/i) || M() && navigator.maxTouchPoints > 1
    }

    function P() {
        return D() || C()
    }

    function T() {
        return M() || P()
    }

    function A() {
        return E(/AppleWebKit/i) && ! function() {
            return E(/Chrome/i)
        }()
    }

    function R() {
        return E(/Android/i)
    }
    let I = (0, i.createContext)({
        isNative: !0,
        open: function(e, t) {
            ! function(e, t) {
                if (e instanceof HTMLAnchorElement) t(e);
                else if (e.hasAttribute("data-href")) {
                    let n = document.createElement("a");
                    n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
                }
            }(e, e => j(e, t))
        }
    });

    function O() {
        return (0, i.useContext)(I)
    }

    function L(e, t) {
        let n = e.getAttribute("target");
        return (!n || "_self" === n) && e.origin === location.origin && !e.hasAttribute("download") && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey
    }

    function j(e, t) {
        var n, r;
        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            {
                metaKey: o,
                ctrlKey: s,
                altKey: a,
                shiftKey: c
            } = t;
        E(/Firefox/i) && (null === (r = window.event) || void 0 === r ? void 0 : null === (n = r.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (M() ? o = !0 : s = !0);
        let u = A() && M() && !C() ? new KeyboardEvent("keydown", {
            keyIdentifier: "Enter",
            metaKey: o,
            ctrlKey: s,
            altKey: a,
            shiftKey: c
        }) : new MouseEvent("click", {
            metaKey: o,
            ctrlKey: s,
            altKey: a,
            shiftKey: c,
            bubbles: !0,
            cancelable: !0
        });
        j.isOpening = i, S(e), e.dispatchEvent(u), j.isOpening = !1
    }
    j.isOpening = !1;

    function N(e) {
        return {
            "data-href": e.href,
            "data-target": e.target,
            "data-rel": e.rel,
            "data-download": e.download,
            "data-ping": e.ping,
            "data-referrer-policy": e.referrerPolicy
        }
    }
    let F = new Map,
        B = new Set;

    function z() {
        if ("undefined" == typeof window) return;
        let e = t => {
            let n = F.get(t.target);
            if (n && (n.delete(t.propertyName), 0 === n.size && (t.target.removeEventListener("transitioncancel", e), F.delete(t.target)), 0 === F.size)) {
                for (let e of B) e();
                B.clear()
            }
        };
        document.body.addEventListener("transitionrun", t => {
            let n = F.get(t.target);
            !n && (n = new Set, F.set(t.target, n), t.target.addEventListener("transitioncancel", e)), n.add(t.propertyName)
        }), document.body.addEventListener("transitionend", e)
    }

    function K(e) {
        requestAnimationFrame(() => {
            0 === F.size ? e() : B.add(e)
        })
    }

    function V() {
        let e = (0, i.useRef)(new Map),
            t = (0, i.useCallback)((t, n, r, i) => {
                let o = (null == i ? void 0 : i.once) ? function() {
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    e.current.delete(r), r(...n)
                } : r;
                e.current.set(r, {
                    type: n,
                    eventTarget: t,
                    fn: o,
                    options: i
                }), t.addEventListener(n, r, i)
            }, []),
            n = (0, i.useCallback)((t, n, r, i) => {
                var o;
                let s = (null === (o = e.current.get(r)) || void 0 === o ? void 0 : o.fn) || r;
                t.removeEventListener(n, s, i), e.current.delete(r)
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

    function U(e, t) {
        let {
            id: n,
            "aria-label": r,
            "aria-labelledby": i
        } = e;
        return n = l(n), i && r ? i = [...new Set([n, ...i.trim().split(/\s+/)])].join(" ") : i && (i = i.trim().split(/\s+/).join(" ")), !r && !i && t && (r = t), {
            id: n,
            "aria-label": r,
            "aria-labelledby": i
        }
    }

    function H(e) {
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

    function q(e, t) {
        let n = (0, i.useRef)(!0),
            r = (0, i.useRef)(null);
        (0, i.useEffect)(() => (n.current = !0, () => {
            n.current = !1
        }), []), (0, i.useEffect)(() => {
            n.current ? n.current = !1 : (!r.current || t.some((e, t) => !Object.is(e, r[t]))) && e(), r.current = t
        }, t)
    }
    "undefined" != typeof document && ("loading" !== document.readyState ? z() : document.addEventListener("DOMContentLoaded", z));

    function G(e) {
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
        a(() => {
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
        let [t, n] = (0, i.useState)(void 0);
        return a(() => {
            if (!e) return;
            let t = J.get(e);
            if (t) n(t.element.id);
            else {
                let r = "react-aria-description-".concat(X++);
                n(r);
                let i = document.createElement("div");
                i.id = r, i.style.display = "none", i.textContent = e, document.body.appendChild(i), t = {
                    refCount: 0,
                    element: i
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
        let o = c(n),
            s = null == n;
        (0, i.useEffect)(() => {
            if (s) return;
            let n = e.current;
            return n.addEventListener(t, o, r), () => {
                n.removeEventListener(t, o, r)
            }
        }, [e, t, r, s, o])
    }

    function ee(e, t) {
        let n = et(e, t, "left"),
            r = et(e, t, "top"),
            i = t.offsetWidth,
            o = t.offsetHeight,
            s = e.scrollLeft,
            a = e.scrollTop,
            {
                borderTopWidth: c,
                borderLeftWidth: u
            } = getComputedStyle(e),
            d = e.scrollLeft + parseInt(u, 10),
            l = e.scrollTop + parseInt(c, 10),
            f = d + e.clientWidth,
            p = l + e.clientHeight;
        n <= s ? s = n - parseInt(u, 10) : n + i > f && (s += n + i - f), r <= l ? a = r - parseInt(c, 10) : r + o > p && (a += r + o - p), e.scrollLeft = s, e.scrollTop = a
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
            let s = document.scrollingElement || document.documentElement;
            if ("hidden" === window.getComputedStyle(s).overflow) {
                let t = Z(e);
                for (; e && t && e !== s && t !== s;) ee(t, e), t = Z(e = t)
            } else {
                var n, r, i, o;
                let {
                    left: s,
                    top: a
                } = e.getBoundingClientRect();
                null == e || null === (n = e.scrollIntoView) || void 0 === n || n.call(e, {
                    block: "nearest"
                });
                let {
                    left: c,
                    top: u
                } = e.getBoundingClientRect();
                (Math.abs(s - c) > 1 || Math.abs(a - u) > 1) && (null == t || null === (i = t.containingElement) || void 0 === i || null === (r = i.scrollIntoView) || void 0 === r || r.call(i, {
                    block: "center",
                    inline: "center"
                }), null === (o = e.scrollIntoView) || void 0 === o || o.call(e, {
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

    function eo(e, t) {
        let n = (0, i.useRef)(null);
        return e && n.current && t(e, n.current) && (e = n.current), n.current = e, e
    }

    function es(e, t, n) {
        let r = (0, i.useRef)(t),
            o = c(() => {
                n && n(r.current)
            });
        (0, i.useEffect)(() => {
            var t;
            let n = null == e ? void 0 : null === (t = e.current) || void 0 === t ? void 0 : t.form;
            return null == n || n.addEventListener("reset", o), () => {
                null == n || n.removeEventListener("reset", o)
            }
        }, [e, o])
    }
}