function(e, t, n) {
    "use strict";
    let r;
    n.r(t), n.d(t, {
        useOverlayPosition: function() {
            return eu
        },
        useOverlayTrigger: function() {
            return ef
        },
        OverlayContainer: function() {
            return e_
        },
        DismissButton: function() {
            return eD
        },
        ariaHideOutside: function() {
            return eT
        },
        usePopover: function() {
            return eA
        },
        useModalOverlay: function() {
            return eL
        },
        Overlay: function() {
            return eI
        },
        useOverlayFocusContain: function() {
            return eO
        }
    }), n("222007"), n("781738"), n("424973"), n("70102");
    var i = n("273493"),
        o = n("983220"),
        s = n("530067"),
        a = n("998132"),
        c = n("891983"),
        u = n("835032"),
        d = n("965560"),
        l = n("180569"),
        f = n("767290"),
        p = n("795848"),
        h = n("494017"),
        v = n("402096"),
        g = n("921094"),
        b = n("26553"),
        m = n("700484"),
        y = n("229152"),
        x = n("983080"),
        w = n("965845"),
        S = n("332538"),
        k = n("674430"),
        E = n("889173"),
        _ = n("243469"),
        M = n("869505"),
        D = n("380445"),
        C = n("990973"),
        P = n("274031"),
        T = n("243342"),
        A = n("983322"),
        R = n("484273"),
        I = n("725681"),
        O = n("473662"),
        L = n("433809"),
        j = n("156551"),
        N = n("147336"),
        F = n("884691"),
        B = n("240849"),
        z = n("564341"),
        K = n("447259"),
        V = n("388032"),
        U = n("817736"),
        H = n("638915"),
        q = n("828551");
    let G = {
            top: "top",
            bottom: "top",
            left: "left",
            right: "left"
        },
        W = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        },
        Z = {
            top: "left",
            left: "top"
        },
        Y = {
            top: "height",
            left: "width"
        },
        X = {
            width: "totalWidth",
            height: "totalHeight"
        },
        J = {},
        $ = "undefined" != typeof document && window.visualViewport;

    function Q(e) {
        let t = 0,
            n = 0,
            r = 0,
            i = 0,
            o = 0,
            s = 0,
            a = {};
        if ("BODY" === e.tagName) {
            var c, u;
            let o = document.documentElement;
            r = o.clientWidth, i = o.clientHeight, t = null !== (c = null == $ ? void 0 : $.width) && void 0 !== c ? c : r, n = null !== (u = null == $ ? void 0 : $.height) && void 0 !== u ? u : i, a.top = o.scrollTop || e.scrollTop, a.left = o.scrollLeft || e.scrollLeft
        } else({
            width: t,
            height: n,
            top: o,
            left: s
        } = ei(e)), a.top = e.scrollTop, a.left = e.scrollLeft, r = t, i = n;
        return {
            width: t,
            height: n,
            totalWidth: r,
            totalHeight: i,
            scroll: a,
            top: o,
            left: s
        }
    }

    function ee(e, t, n, r, i, o) {
        let s = i.scroll[e],
            a = r[Y[e]],
            c = t - o - s,
            u = t + o - s + n;
        return c < 0 ? -c : u > a ? Math.max(a - u, -c) : 0
    }

    function et(e) {
        if (J[e]) return J[e];
        let [t, n] = e.split(" "), r = G[t] || "right", i = Z[r];
        !G[n] && (n = "center");
        let o = Y[r],
            s = Y[i];
        return J[e] = {
            placement: t,
            crossPlacement: n,
            axis: r,
            crossAxis: i,
            size: o,
            crossSize: s
        }, J[e]
    }

    function en(e, t, n, r, i, o, s, a, c, u) {
        let {
            placement: d,
            crossPlacement: l,
            axis: f,
            crossAxis: p,
            size: h,
            crossSize: v
        } = r, g = {};
        g[p] = e[p], "center" === l ? g[p] += (e[v] - n[v]) / 2 : l !== p && (g[p] += e[v] - n[v]), g[p] += o;
        let b = e[p] - n[v] + c + u,
            m = e[p] + e[v] - c - u;
        if (g[p] = (0, B.clamp)(g[p], b, m), d === f) {
            let n = a ? s[h] : t[X[h]];
            g[W[f]] = Math.floor(n - e[f] + i)
        } else g[f] = Math.floor(e[f] + e[h] + i);
        return g
    }

    function er(e, t, n, r, i, o) {
        let {
            placement: s,
            axis: a,
            size: c
        } = o;
        return s === a ? Math.max(0, n[a] - e[a] - e.scroll[a] + t[a] - r[a] - r[W[a]] - i) : Math.max(0, e[c] + e[a] + e.scroll[a] - t[a] - n[a] - n[c] - r[a] - r[W[a]] - i)
    }

    function ei(e) {
        let {
            top: t,
            left: n,
            width: r,
            height: i
        } = e.getBoundingClientRect(), {
            scrollTop: o,
            scrollLeft: s,
            clientTop: a,
            clientLeft: c
        } = document.documentElement;
        return {
            top: t + o - a,
            left: n + s - c,
            width: r,
            height: i
        }
    }

    function eo(e, t) {
        let n, r = window.getComputedStyle(e);
        if ("fixed" === r.position) {
            let {
                top: t,
                left: r,
                width: i,
                height: o
            } = e.getBoundingClientRect();
            n = {
                top: t,
                left: r,
                width: i,
                height: o
            }
        } else {
            n = ei(e);
            let r = ei(t),
                i = window.getComputedStyle(t);
            r.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop, r.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft, n.top -= r.top, n.left -= r.left
        }
        return n.top -= parseInt(r.marginTop, 10) || 0, n.left -= parseInt(r.marginLeft, 10) || 0, n
    }

    function es(e) {
        let t = window.getComputedStyle(e);
        return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter" in t && "none" !== t.backdropFilter || "WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter
    }
    let ea = new WeakMap,
        ec = "undefined" != typeof document && window.visualViewport;

    function eu(e) {
        let {
            direction: t
        } = (0, z.useLocale)(), {
            arrowSize: n = 0,
            targetRef: r,
            overlayRef: i,
            scrollRef: o = i,
            placement: s = "bottom",
            containerPadding: a = 12,
            shouldFlip: c = !0,
            boundaryElement: u = "undefined" != typeof document ? document.body : null,
            offset: d = 0,
            crossOffset: l = 0,
            shouldUpdatePosition: f = !0,
            isOpen: p = !0,
            onClose: h,
            maxHeight: v,
            arrowBoundaryOffset: g = 0
        } = e, [b, m] = (0, F.useState)({
            position: {},
            arrowOffsetLeft: void 0,
            arrowOffsetTop: void 0,
            maxHeight: void 0,
            placement: void 0
        }), y = [f, s, i.current, r.current, o.current, a, c, u, d, l, p, t, v, g, n], x = (0, F.useCallback)(() => {
            if (!1 === f || !p || !i.current || !r.current || !o.current || !u) return;
            let e = function(e) {
                var t, n;
                let r, {
                        placement: i,
                        targetNode: o,
                        overlayNode: s,
                        scrollNode: a,
                        padding: c,
                        shouldFlip: u,
                        boundaryElement: d,
                        offset: l,
                        crossOffset: f,
                        maxHeight: p,
                        arrowSize: h = 0,
                        arrowBoundaryOffset: v = 0
                    } = e,
                    g = s instanceof HTMLElement ? function(e) {
                        let t = e.offsetParent;
                        if (t && t === document.body && "static" === window.getComputedStyle(t).position && !es(t) && (t = document.documentElement), null == t)
                            for (t = e.parentElement; t && !es(t);) t = t.parentElement;
                        return t || document.documentElement
                    }(s) : document.documentElement,
                    b = g === document.documentElement,
                    m = window.getComputedStyle(g).position,
                    y = b ? ei(o) : eo(o, g);
                if (!b) {
                    let {
                        marginTop: e,
                        marginLeft: t
                    } = window.getComputedStyle(o);
                    y.top += parseInt(e, 10) || 0, y.left += parseInt(t, 10) || 0
                }
                let x = ei(s);
                let w = (t = s, {
                    top: parseInt((r = window.getComputedStyle(t)).marginTop, 10) || 0,
                    bottom: parseInt(r.marginBottom, 10) || 0,
                    left: parseInt(r.marginLeft, 10) || 0,
                    right: parseInt(r.marginRight, 10) || 0
                });
                return x.width += w.left + w.right, x.height += w.top + w.bottom,
                    function(e, t, n, r, i, o, s, a, c, u, d, l, f, p, h, v) {
                        var g, b, m, y, x, w;
                        let S = et(e),
                            {
                                size: k,
                                crossAxis: E,
                                crossSize: _,
                                placement: M,
                                crossPlacement: D
                            } = S,
                            C = en(t, a, n, S, d, l, u, f, h, v),
                            P = d,
                            T = er(a, u, t, i, o + d, S);
                        if (s && r[k] > T) {
                            let e = et("".concat(W[M], " ").concat(D)),
                                r = en(t, a, n, e, d, l, u, f, h, v);
                            er(a, u, t, i, o + d, e) > T && (S = e, C = r, P = d)
                        }
                        let A = ee(E, C[E], n[_], a, c, o);
                        C[E] += A;
                        let R = (g = C, b = a, m = u, y = t, x = i, w = o, null != g.top ? Math.max(0, b.height + b.top + b.scroll.top - (m.top + g.top) - (x.top + x.bottom + w)) : Math.max(0, y.top + m.top - (b.top + b.scroll.top) - (x.top + x.bottom + w)));
                        p && p < R && (R = p), n.height = Math.min(n.height, R), A = ee(E, (C = en(t, a, n, S, P, l, u, f, h, v))[E], n[_], a, c, o), C[E] += A;
                        let I = {},
                            O = t[E] + .5 * t[_] - n[E],
                            L = h / 2 + v,
                            j = n[_] - h / 2 - v,
                            N = t[E] - n[E] + h / 2,
                            F = t[E] + t[_] - n[E] - h / 2,
                            z = (0, B.clamp)(O, N, F);
                        return I[E] = (0, B.clamp)(z, L, j), {
                            position: C,
                            maxHeight: R,
                            arrowOffsetLeft: I.left,
                            arrowOffsetTop: I.top,
                            placement: S.placement
                        }
                    }(i, y, x, {
                        top: (n = a).scrollTop,
                        left: n.scrollLeft,
                        width: n.scrollWidth,
                        height: n.scrollHeight
                    }, w, c, u, Q(d), Q(g), "BODY" === d.tagName ? ei(g) : eo(g, d), l, f, !!m && "static" !== m, p, h, v)
            }({
                placement: function(e, t) {
                    return "rtl" === t ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right")
                }(s, t),
                overlayNode: i.current,
                targetNode: r.current,
                scrollNode: o.current,
                padding: a,
                shouldFlip: c,
                boundaryElement: u,
                offset: d,
                crossOffset: l,
                maxHeight: v,
                arrowSize: n,
                arrowBoundaryOffset: g
            });
            Object.keys(e.position).forEach(t => i.current.style[t] = e.position[t] + "px"), i.current.style.maxHeight = null != e.maxHeight ? e.maxHeight + "px" : void 0, m(e)
        }, y);
        (0, B.useLayoutEffect)(x, y),
        function(e) {
            (0, B.useLayoutEffect)(() => (window.addEventListener("resize", e, !1), () => {
                window.removeEventListener("resize", e, !1)
            }), [e])
        }(x), (0, B.useResizeObserver)({
            ref: i,
            onResize: x
        });
        let w = (0, F.useRef)(!1);
        (0, B.useLayoutEffect)(() => {
            let e;
            let t = () => {
                w.current = !0, clearTimeout(e), e = setTimeout(() => {
                    w.current = !1
                }, 500), x()
            };
            return null == ec || ec.addEventListener("resize", t), null == ec || ec.addEventListener("scroll", t), () => {
                null == ec || ec.removeEventListener("resize", t), null == ec || ec.removeEventListener("scroll", t)
            }
        }, [x]);
        let S = (0, F.useCallback)(() => {
            !w.current && h()
        }, [h, w]);
        return ! function(e) {
            let {
                triggerRef: t,
                isOpen: n,
                onClose: r
            } = e;
            (0, F.useEffect)(() => {
                if (!n || null === r) return;
                let e = e => {
                    let n = e.target;
                    if (!t.current || n instanceof Node && !n.contains(t.current)) return;
                    let i = r || ea.get(t.current);
                    i && i()
                };
                return window.addEventListener("scroll", e, !0), () => {
                    window.removeEventListener("scroll", e, !0)
                }
            }, [n, r, t])
        }({
            triggerRef: r,
            isOpen: p,
            onClose: h && S
        }), {
            overlayProps: {
                style: {
                    position: "absolute",
                    zIndex: 1e5,
                    ...b.position,
                    maxHeight: b.maxHeight
                }
            },
            placement: b.placement,
            arrowProps: {
                "aria-hidden": "true",
                role: "presentation",
                style: {
                    left: b.arrowOffsetLeft,
                    top: b.arrowOffsetTop
                }
            },
            updatePosition: x
        }
    }
    let ed = [];

    function el(e, t) {
        let {
            onClose: n,
            shouldCloseOnBlur: r,
            isOpen: i,
            isDismissable: o = !1,
            isKeyboardDismissDisabled: s = !1,
            shouldCloseOnInteractOutside: a
        } = e;
        (0, F.useEffect)(() => (i && ed.push(t), () => {
            let e = ed.indexOf(t);
            e >= 0 && ed.splice(e, 1)
        }), [i, t]);
        let c = () => {
            ed[ed.length - 1] === t && n && n()
        };
        (0, V.useInteractOutside)({
            ref: t,
            onInteractOutside: o && i ? e => {
                (!a || a(e.target)) && (ed[ed.length - 1] === t && (e.stopPropagation(), e.preventDefault()), c())
            } : null,
            onInteractOutsideStart: e => {
                (!a || a(e.target)) && ed[ed.length - 1] === t && (e.stopPropagation(), e.preventDefault())
            }
        });
        let {
            focusWithinProps: u
        } = (0, V.useFocusWithin)({
            isDisabled: !r,
            onBlurWithin: e => {
                !(!e.relatedTarget || (0, K.isElementInChildOfActiveScope)(e.relatedTarget)) && (!a || a(e.relatedTarget)) && n()
            }
        });
        return {
            overlayProps: {
                onKeyDown: e => {
                    "Escape" === e.key && !s && (e.stopPropagation(), e.preventDefault(), c())
                },
                ...u
            },
            underlayProps: {
                onPointerDown: e => {
                    e.target === e.currentTarget && e.preventDefault()
                }
            }
        }
    }

    function ef(e, t, n) {
        let r, {
                type: i
            } = e,
            {
                isOpen: o
            } = t;
        (0, F.useEffect)(() => {
            n && n.current && ea.set(n.current, t.close)
        });
        "menu" === i ? r = !0 : "listbox" === i && (r = "listbox");
        let s = (0, B.useId)();
        return {
            triggerProps: {
                "aria-haspopup": r,
                "aria-expanded": o,
                "aria-controls": o ? s : null,
                onPress: t.toggle
            },
            overlayProps: {
                id: s
            }
        }
    }
    let ep = "undefined" != typeof document && window.visualViewport,
        eh = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
        ev = 0;

    function eg() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                isDisabled: t
            } = e;
        (0, B.useLayoutEffect)(() => {
            if (!t) return 1 == ++ev && (r = (0, B.isIOS)() ? function() {
                let e, t;
                let n = null,
                    r = () => {
                        if (n) return;
                        let e = window.pageXOffset,
                            t = window.pageYOffset;
                        n = (0, B.chain)(em(window, "scroll", () => {
                            window.scrollTo(0, 0)
                        }), eb(document.documentElement, "paddingRight", "".concat(window.innerWidth - document.documentElement.clientWidth, "px")), eb(document.documentElement, "overflow", "hidden"), eb(document.body, "marginTop", "-".concat(t, "px")), () => {
                            window.scrollTo(e, t)
                        }), window.scrollTo(0, 0)
                    },
                    i = (0, B.chain)(em(document, "touchstart", n => {
                        ((e = (0, B.getScrollParent)(n.target, !0)) !== document.documentElement || e !== document.body) && e instanceof HTMLElement && "auto" === window.getComputedStyle(e).overscrollBehavior && (t = eb(e, "overscrollBehavior", "contain"))
                    }, {
                        passive: !1,
                        capture: !0
                    }), em(document, "touchmove", t => {
                        if (!e || e === document.documentElement || e === document.body) {
                            t.preventDefault();
                            return
                        }
                        e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault()
                    }, {
                        passive: !1,
                        capture: !0
                    }), em(document, "touchend", e => {
                        let n = e.target;
                        ex(n) && n !== document.activeElement && (e.preventDefault(), r(), n.style.transform = "translateY(-2000px)", n.focus(), requestAnimationFrame(() => {
                            n.style.transform = ""
                        })), t && t()
                    }, {
                        passive: !1,
                        capture: !0
                    }), em(document, "focus", e => {
                        let t = e.target;
                        ex(t) && (r(), t.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
                            t.style.transform = "", ep && (ep.height < window.innerHeight ? requestAnimationFrame(() => {
                                ey(t)
                            }) : ep.addEventListener("resize", () => ey(t), {
                                once: !0
                            }))
                        }))
                    }, !0));
                return () => {
                    null == t || t(), null == n || n(), i()
                }
            }() : function() {
                return (0, B.chain)(eb(document.documentElement, "paddingRight", "".concat(window.innerWidth - document.documentElement.clientWidth, "px")), eb(document.documentElement, "overflow", "hidden"))
            }()), () => {
                0 == --ev && r()
            }
        }, [t])
    }

    function eb(e, t, n) {
        let r = e.style[t];
        return e.style[t] = n, () => {
            e.style[t] = r
        }
    }

    function em(e, t, n, r) {
        return e.addEventListener(t, n, r), () => {
            e.removeEventListener(t, n, r)
        }
    }

    function ey(e) {
        let t = document.scrollingElement || document.documentElement;
        for (; e && e !== t;) {
            let t = (0, B.getScrollParent)(e);
            if (t !== document.documentElement && t !== document.body && t !== e) {
                let n = t.getBoundingClientRect().top,
                    r = e.getBoundingClientRect().top;
                r > n + e.clientHeight && (t.scrollTop += r - n)
            }
            e = t.parentElement
        }
    }

    function ex(e) {
        return e instanceof HTMLInputElement && !eh.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
    }
    let ew = F.createContext(null);

    function eS(e) {
        let {
            children: t
        } = e, n = (0, F.useContext)(ew), [r, i] = (0, F.useState)(0), o = (0, F.useMemo)(() => ({
            parent: n,
            modalCount: r,
            addModal() {
                i(e => e + 1), n && n.addModal()
            },
            removeModal() {
                i(e => e - 1), n && n.removeModal()
            }
        }), [n, r]);
        return F.createElement(ew.Provider, {
            value: o
        }, t)
    }

    function ek(e) {
        let t;
        let {
            modalProviderProps: n
        } = {
            modalProviderProps: {
                "aria-hidden": !!(t = (0, F.useContext)(ew)) && t.modalCount > 0 || null
            }
        };
        return F.createElement("div", {
            "data-overlay-container": !0,
            ...e,
            ...n
        })
    }

    function eE(e) {
        return F.createElement(eS, null, F.createElement(ek, e))
    }

    function e_(e) {
        let t = (0, H.useIsSSR)(),
            {
                portalContainer: n = t ? null : document.body,
                ...r
            } = e;
        if (F.useEffect(() => {
                if (null == n ? void 0 : n.closest("[data-overlay-container]")) throw Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")
            }, [n]), !n) return null;
        let i = F.createElement(eE, r);
        return U.createPortal(i, n)
    }
    var eM = {};

    function eD(e) {
        var t;
        let {
            onDismiss: n,
            ...r
        } = e;
        let i = (0, z.useLocalizedStringFormatter)((t = eM) && t.__esModule ? t.default : t, "@react-aria/overlays"),
            o = (0, B.useLabels)(r, i.format("dismiss"));
        return F.createElement(q.VisuallyHidden, null, F.createElement("button", {
            ...o,
            tabIndex: -1,
            onClick: () => {
                n && n()
            },
            style: {
                width: 1,
                height: 1
            }
        }))
    }
    eM = {
        "ar-AE": i.default,
        "bg-BG": o.default,
        "cs-CZ": s.default,
        "da-DK": a.default,
        "de-DE": c.default,
        "el-GR": u.default,
        "en-US": d.default,
        "es-ES": l.default,
        "et-EE": f.default,
        "fi-FI": p.default,
        "fr-FR": h.default,
        "he-IL": v.default,
        "hr-HR": g.default,
        "hu-HU": b.default,
        "it-IT": m.default,
        "ja-JP": y.default,
        "ko-KR": x.default,
        "lt-LT": w.default,
        "lv-LV": S.default,
        "nb-NO": k.default,
        "nl-NL": E.default,
        "pl-PL": _.default,
        "pt-BR": M.default,
        "pt-PT": D.default,
        "ro-RO": C.default,
        "ru-RU": P.default,
        "sk-SK": T.default,
        "sl-SI": A.default,
        "sr-SP": R.default,
        "sv-SE": I.default,
        "tr-TR": O.default,
        "uk-UA": L.default,
        "zh-CN": j.default,
        "zh-TW": N.default
    };
    let eC = new WeakMap,
        eP = [];

    function eT(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body,
            n = new Set(e),
            r = new Set,
            i = e => {
                for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) n.add(t);
                let t = e => {
                        if (n.has(e) || r.has(e.parentElement) && "row" !== e.parentElement.getAttribute("role")) return NodeFilter.FILTER_REJECT;
                        for (let t of n)
                            if (e.contains(t)) return NodeFilter.FILTER_SKIP;
                        return NodeFilter.FILTER_ACCEPT
                    },
                    i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: t
                    }),
                    s = t(e);
                if (s === NodeFilter.FILTER_ACCEPT && o(e), s !== NodeFilter.FILTER_REJECT) {
                    let e = i.nextNode();
                    for (; null != e;) o(e), e = i.nextNode()
                }
            },
            o = e => {
                var t;
                let n = null !== (t = eC.get(e)) && void 0 !== t ? t : 0;
                ("true" !== e.getAttribute("aria-hidden") || 0 !== n) && (0 === n && e.setAttribute("aria-hidden", "true"), r.add(e), eC.set(e, n + 1))
            };
        eP.length && eP[eP.length - 1].disconnect(), i(t);
        let s = new MutationObserver(e => {
            for (let t of e)
                if ("childList" === t.type && 0 !== t.addedNodes.length && ![...n, ...r].some(e => e.contains(t.target))) {
                    for (let e of t.removedNodes) e instanceof Element && (n.delete(e), r.delete(e));
                    for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && ("true" === e.dataset.liveAnnouncer || "true" === e.dataset.reactAriaTopLayer) ? n.add(e) : e instanceof Element && i(e)
                }
        });
        s.observe(t, {
            childList: !0,
            subtree: !0
        });
        let a = {
            observe() {
                s.observe(t, {
                    childList: !0,
                    subtree: !0
                })
            },
            disconnect() {
                s.disconnect()
            }
        };
        return eP.push(a), () => {
            for (let e of (s.disconnect(), r)) {
                let t = eC.get(e);
                1 === t ? (e.removeAttribute("aria-hidden"), eC.delete(e)) : eC.set(e, t - 1)
            }
            a === eP[eP.length - 1] ? (eP.pop(), eP.length && eP[eP.length - 1].observe()) : eP.splice(eP.indexOf(a), 1)
        }
    }

    function eA(e, t) {
        let {
            triggerRef: n,
            popoverRef: r,
            isNonModal: i,
            isKeyboardDismissDisabled: o,
            shouldCloseOnInteractOutside: s,
            ...a
        } = e, {
            overlayProps: c,
            underlayProps: u
        } = el({
            isOpen: t.isOpen,
            onClose: t.close,
            shouldCloseOnBlur: !0,
            isDismissable: !i,
            isKeyboardDismissDisabled: o,
            shouldCloseOnInteractOutside: s
        }, r), {
            overlayProps: d,
            arrowProps: l,
            placement: f
        } = eu({
            ...a,
            targetRef: n,
            overlayRef: r,
            isOpen: t.isOpen,
            onClose: i ? t.close : null
        });
        return eg({
            isDisabled: i || !t.isOpen
        }), (0, B.useLayoutEffect)(() => {
            if (t.isOpen && !i && r.current) return eT([r.current])
        }, [i, t.isOpen, r]), {
            popoverProps: (0, B.mergeProps)(c, d),
            arrowProps: l,
            underlayProps: u,
            placement: f
        }
    }
    let eR = F.createContext(null);

    function eI(e) {
        let t = (0, H.useIsSSR)(),
            {
                portalContainer: n = t ? null : document.body,
                isExiting: r
            } = e,
            [i, o] = (0, F.useState)(!1),
            s = (0, F.useMemo)(() => ({
                contain: i,
                setContain: o
            }), [i, o]);
        if (!n) return null;
        let a = e.children;
        return !e.disableFocusManagement && (a = F.createElement(K.FocusScope, {
            restoreFocus: !0,
            contain: i && !r
        }, a)), a = F.createElement(eR.Provider, {
            value: s
        }, F.createElement(V.ClearPressResponder, null, a)), U.createPortal(a, n)
    }

    function eO() {
        let e = (0, F.useContext)(eR),
            t = null == e ? void 0 : e.setContain;
        (0, B.useLayoutEffect)(() => {
            null == t || t(!0)
        }, [t])
    }

    function eL(e, t, n) {
        let {
            overlayProps: r,
            underlayProps: i
        } = el({
            ...e,
            isOpen: t.isOpen,
            onClose: t.close
        }, n);
        return eg({
            isDisabled: !t.isOpen
        }), eO(), (0, F.useEffect)(() => {
            if (t.isOpen) return eT([n.current])
        }, [t.isOpen, n]), {
            modalProps: (0, B.mergeProps)(r),
            underlayProps: i
        }
    }
}