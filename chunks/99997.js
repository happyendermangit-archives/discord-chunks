function(e, t, n) {
    "use strict";
    let r;
    n.r(t), n.d(t, {
        DismissButton: function() {
            return eD
        },
        Overlay: function() {
            return eN
        },
        OverlayContainer: function() {
            return eT
        },
        ariaHideOutside: function() {
            return eA
        },
        useModalOverlay: function() {
            return eL
        },
        useOverlayFocusContain: function() {
            return eI
        },
        useOverlayPosition: function() {
            return ec
        },
        useOverlayTrigger: function() {
            return ef
        },
        usePopover: function() {
            return ek
        }
    });
    var i = n("582917"),
        a = n("339497"),
        o = n("952490"),
        s = n("204431"),
        u = n("101463"),
        c = n("747912"),
        l = n("296375"),
        d = n("296696"),
        f = n("899751"),
        p = n("63277"),
        h = n("402118"),
        m = n("833635"),
        g = n("887384"),
        _ = n("822986"),
        b = n("555768"),
        v = n("444187"),
        y = n("970287"),
        E = n("320459"),
        S = n("175121"),
        x = n("311411"),
        w = n("60513"),
        T = n("648109"),
        C = n("956910"),
        D = n("830256"),
        O = n("10399"),
        M = n("63716"),
        A = n("963000"),
        k = n("101247"),
        R = n("847344"),
        N = n("62550"),
        I = n("252176"),
        L = n("468957"),
        P = n("460217"),
        F = n("341308"),
        B = n("470079"),
        U = n("182823"),
        Y = n("602607"),
        j = n("706682"),
        z = n("612001"),
        H = n("699581"),
        G = n("230012"),
        V = n("297821");
    let $ = {
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
        K = {
            top: "left",
            left: "top"
        },
        q = {
            top: "height",
            left: "width"
        },
        Q = {
            width: "totalWidth",
            height: "totalHeight"
        },
        Z = {},
        X = "undefined" != typeof document && window.visualViewport;

    function J(e) {
        let t = 0,
            n = 0,
            r = 0,
            i = 0,
            a = 0,
            o = 0,
            s = {};
        if ("BODY" === e.tagName) {
            var u, c;
            let a = document.documentElement;
            r = a.clientWidth, i = a.clientHeight, t = null !== (u = null == X ? void 0 : X.width) && void 0 !== u ? u : r, n = null !== (c = null == X ? void 0 : X.height) && void 0 !== c ? c : i, s.top = a.scrollTop || e.scrollTop, s.left = a.scrollLeft || e.scrollLeft
        } else({
            width: t,
            height: n,
            top: a,
            left: o
        } = ei(e)), s.top = e.scrollTop, s.left = e.scrollLeft, r = t, i = n;
        return {
            width: t,
            height: n,
            totalWidth: r,
            totalHeight: i,
            scroll: s,
            top: a,
            left: o
        }
    }

    function ee(e, t, n, r, i, a) {
        let o = i.scroll[e],
            s = r[q[e]],
            u = t - a - o,
            c = t + a - o + n;
        return u < 0 ? -u : c > s ? Math.max(s - c, -u) : 0
    }

    function et(e) {
        if (Z[e]) return Z[e];
        let [t, n] = e.split(" "), r = $[t] || "right", i = K[r];
        !$[n] && (n = "center");
        let a = q[r],
            o = q[i];
        return Z[e] = {
            placement: t,
            crossPlacement: n,
            axis: r,
            crossAxis: i,
            size: a,
            crossSize: o
        }, Z[e]
    }

    function en(e, t, n, r, i, a, o, s, u, c) {
        let {
            placement: l,
            crossPlacement: d,
            axis: f,
            crossAxis: p,
            size: h,
            crossSize: m
        } = r, g = {};
        g[p] = e[p], "center" === d ? g[p] += (e[m] - n[m]) / 2 : d !== p && (g[p] += e[m] - n[m]), g[p] += a;
        let _ = e[p] - n[m] + u + c,
            b = e[p] + e[m] - u - c;
        if (g[p] = (0, U.clamp)(g[p], _, b), l === f) {
            let n = s ? o[h] : t[Q[h]];
            g[W[f]] = Math.floor(n - e[f] + i)
        } else g[f] = Math.floor(e[f] + e[h] + i);
        return g
    }

    function er(e, t, n, r, i, a) {
        let {
            placement: o,
            axis: s,
            size: u
        } = a;
        return o === s ? Math.max(0, n[s] - e[s] - e.scroll[s] + t[s] - r[s] - r[W[s]] - i) : Math.max(0, e[u] + e[s] + e.scroll[s] - t[s] - n[s] - n[u] - r[s] - r[W[s]] - i)
    }

    function ei(e) {
        let {
            top: t,
            left: n,
            width: r,
            height: i
        } = e.getBoundingClientRect(), {
            scrollTop: a,
            scrollLeft: o,
            clientTop: s,
            clientLeft: u
        } = document.documentElement;
        return {
            top: t + a - s,
            left: n + o - u,
            width: r,
            height: i
        }
    }

    function ea(e, t) {
        let n, r = window.getComputedStyle(e);
        if ("fixed" === r.position) {
            let {
                top: t,
                left: r,
                width: i,
                height: a
            } = e.getBoundingClientRect();
            n = {
                top: t,
                left: r,
                width: i,
                height: a
            }
        } else {
            n = ei(e);
            let r = ei(t),
                i = window.getComputedStyle(t);
            r.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop, r.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft, n.top -= r.top, n.left -= r.left
        }
        return n.top -= parseInt(r.marginTop, 10) || 0, n.left -= parseInt(r.marginLeft, 10) || 0, n
    }

    function eo(e) {
        let t = window.getComputedStyle(e);
        return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter" in t && "none" !== t.backdropFilter || "WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter
    }
    let es = new WeakMap,
        eu = "undefined" != typeof document && window.visualViewport;

    function ec(e) {
        let {
            direction: t
        } = (0, Y.useLocale)(), {
            arrowSize: n = 0,
            targetRef: r,
            overlayRef: i,
            scrollRef: a = i,
            placement: o = "bottom",
            containerPadding: s = 12,
            shouldFlip: u = !0,
            boundaryElement: c = "undefined" != typeof document ? document.body : null,
            offset: l = 0,
            crossOffset: d = 0,
            shouldUpdatePosition: f = !0,
            isOpen: p = !0,
            onClose: h,
            maxHeight: m,
            arrowBoundaryOffset: g = 0
        } = e, [_, b] = (0, B.useState)({
            position: {},
            arrowOffsetLeft: void 0,
            arrowOffsetTop: void 0,
            maxHeight: void 0,
            placement: void 0
        }), v = [f, o, i.current, r.current, a.current, s, u, c, l, d, p, t, m, g, n], y = (0, B.useCallback)(() => {
            if (!1 === f || !p || !i.current || !r.current || !a.current || !c) return;
            let e = function(e) {
                var t, n;
                let r, {
                        placement: i,
                        targetNode: a,
                        overlayNode: o,
                        scrollNode: s,
                        padding: u,
                        shouldFlip: c,
                        boundaryElement: l,
                        offset: d,
                        crossOffset: f,
                        maxHeight: p,
                        arrowSize: h = 0,
                        arrowBoundaryOffset: m = 0
                    } = e,
                    g = o instanceof HTMLElement ? function(e) {
                        let t = e.offsetParent;
                        if (t && t === document.body && "static" === window.getComputedStyle(t).position && !eo(t) && (t = document.documentElement), null == t)
                            for (t = e.parentElement; t && !eo(t);) t = t.parentElement;
                        return t || document.documentElement
                    }(o) : document.documentElement,
                    _ = g === document.documentElement,
                    b = window.getComputedStyle(g).position,
                    v = _ ? ei(a) : ea(a, g);
                if (!_) {
                    let {
                        marginTop: e,
                        marginLeft: t
                    } = window.getComputedStyle(a);
                    v.top += parseInt(e, 10) || 0, v.left += parseInt(t, 10) || 0
                }
                let y = ei(o);
                let E = (t = o, {
                    top: parseInt((r = window.getComputedStyle(t)).marginTop, 10) || 0,
                    bottom: parseInt(r.marginBottom, 10) || 0,
                    left: parseInt(r.marginLeft, 10) || 0,
                    right: parseInt(r.marginRight, 10) || 0
                });
                return y.width += E.left + E.right, y.height += E.top + E.bottom,
                    function(e, t, n, r, i, a, o, s, u, c, l, d, f, p, h, m) {
                        var g, _, b, v, y, E;
                        let S = et(e),
                            {
                                size: x,
                                crossAxis: w,
                                crossSize: T,
                                placement: C,
                                crossPlacement: D
                            } = S,
                            O = en(t, s, n, S, l, d, c, f, h, m),
                            M = l,
                            A = er(s, c, t, i, a + l, S);
                        if (o && r[x] > A) {
                            let e = et(`${W[C]} ${D}`),
                                r = en(t, s, n, e, l, d, c, f, h, m);
                            er(s, c, t, i, a + l, e) > A && (S = e, O = r, M = l)
                        }
                        let k = ee(w, O[w], n[T], s, u, a);
                        O[w] += k;
                        let R = (g = O, _ = s, b = c, v = t, y = i, E = a, null != g.top ? Math.max(0, _.height + _.top + _.scroll.top - (b.top + g.top) - (y.top + y.bottom + E)) : Math.max(0, v.top + b.top - (_.top + _.scroll.top) - (y.top + y.bottom + E)));
                        p && p < R && (R = p), n.height = Math.min(n.height, R), k = ee(w, (O = en(t, s, n, S, M, d, c, f, h, m))[w], n[T], s, u, a), O[w] += k;
                        let N = {},
                            I = t[w] + .5 * t[T] - n[w],
                            L = h / 2 + m,
                            P = n[T] - h / 2 - m,
                            F = t[w] - n[w] + h / 2,
                            B = t[w] + t[T] - n[w] - h / 2,
                            Y = (0, U.clamp)(I, F, B);
                        return N[w] = (0, U.clamp)(Y, L, P), {
                            position: O,
                            maxHeight: R,
                            arrowOffsetLeft: N.left,
                            arrowOffsetTop: N.top,
                            placement: S.placement
                        }
                    }(i, v, y, {
                        top: (n = s).scrollTop,
                        left: n.scrollLeft,
                        width: n.scrollWidth,
                        height: n.scrollHeight
                    }, E, u, c, J(l), J(g), "BODY" === l.tagName ? ei(g) : ea(g, l), d, f, !!b && "static" !== b, p, h, m)
            }({
                placement: function(e, t) {
                    return "rtl" === t ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right")
                }(o, t),
                overlayNode: i.current,
                targetNode: r.current,
                scrollNode: a.current,
                padding: s,
                shouldFlip: u,
                boundaryElement: c,
                offset: l,
                crossOffset: d,
                maxHeight: m,
                arrowSize: n,
                arrowBoundaryOffset: g
            });
            Object.keys(e.position).forEach(t => i.current.style[t] = e.position[t] + "px"), i.current.style.maxHeight = null != e.maxHeight ? e.maxHeight + "px" : void 0, b(e)
        }, v);
        (0, U.useLayoutEffect)(y, v),
        function(e) {
            (0, U.useLayoutEffect)(() => (window.addEventListener("resize", e, !1), () => {
                window.removeEventListener("resize", e, !1)
            }), [e])
        }(y), (0, U.useResizeObserver)({
            ref: i,
            onResize: y
        });
        let E = (0, B.useRef)(!1);
        (0, U.useLayoutEffect)(() => {
            let e;
            let t = () => {
                E.current = !0, clearTimeout(e), e = setTimeout(() => {
                    E.current = !1
                }, 500), y()
            };
            return null == eu || eu.addEventListener("resize", t), null == eu || eu.addEventListener("scroll", t), () => {
                null == eu || eu.removeEventListener("resize", t), null == eu || eu.removeEventListener("scroll", t)
            }
        }, [y]);
        let S = (0, B.useCallback)(() => {
            !E.current && h()
        }, [h, E]);
        return ! function(e) {
            let {
                triggerRef: t,
                isOpen: n,
                onClose: r
            } = e;
            (0, B.useEffect)(() => {
                if (!n || null === r) return;
                let e = e => {
                    let n = e.target;
                    if (!t.current || n instanceof Node && !n.contains(t.current)) return;
                    let i = r || es.get(t.current);
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
                    ..._.position,
                    maxHeight: _.maxHeight
                }
            },
            placement: _.placement,
            arrowProps: {
                "aria-hidden": "true",
                role: "presentation",
                style: {
                    left: _.arrowOffsetLeft,
                    top: _.arrowOffsetTop
                }
            },
            updatePosition: y
        }
    }
    let el = [];

    function ed(e, t) {
        let {
            onClose: n,
            shouldCloseOnBlur: r,
            isOpen: i,
            isDismissable: a = !1,
            isKeyboardDismissDisabled: o = !1,
            shouldCloseOnInteractOutside: s
        } = e;
        (0, B.useEffect)(() => (i && el.push(t), () => {
            let e = el.indexOf(t);
            e >= 0 && el.splice(e, 1)
        }), [i, t]);
        let u = () => {
            el[el.length - 1] === t && n && n()
        };
        (0, z.useInteractOutside)({
            ref: t,
            onInteractOutside: a && i ? e => {
                (!s || s(e.target)) && (el[el.length - 1] === t && (e.stopPropagation(), e.preventDefault()), u())
            } : null,
            onInteractOutsideStart: e => {
                (!s || s(e.target)) && el[el.length - 1] === t && (e.stopPropagation(), e.preventDefault())
            }
        });
        let {
            focusWithinProps: c
        } = (0, z.useFocusWithin)({
            isDisabled: !r,
            onBlurWithin: e => {
                !(!e.relatedTarget || (0, j.isElementInChildOfActiveScope)(e.relatedTarget)) && (!s || s(e.relatedTarget)) && n()
            }
        });
        return {
            overlayProps: {
                onKeyDown: e => {
                    "Escape" === e.key && !o && (e.stopPropagation(), e.preventDefault(), u())
                },
                ...c
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
                isOpen: a
            } = t;
        (0, B.useEffect)(() => {
            n && n.current && es.set(n.current, t.close)
        });
        "menu" === i ? r = !0 : "listbox" === i && (r = "listbox");
        let o = (0, U.useId)();
        return {
            triggerProps: {
                "aria-haspopup": r,
                "aria-expanded": a,
                "aria-controls": a ? o : null,
                onPress: t.toggle
            },
            overlayProps: {
                id: o
            }
        }
    }
    let ep = "undefined" != typeof document && window.visualViewport,
        eh = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]),
        em = 0;

    function eg(e = {}) {
        let {
            isDisabled: t
        } = e;
        (0, U.useLayoutEffect)(() => {
            if (!t) return 1 == ++em && (r = (0, U.isIOS)() ? function() {
                let e, t;
                let n = null,
                    r = () => {
                        if (n) return;
                        let e = window.pageXOffset,
                            t = window.pageYOffset;
                        n = (0, U.chain)(eb(window, "scroll", () => {
                            window.scrollTo(0, 0)
                        }), e_(document.documentElement, "paddingRight", `${window.innerWidth-document.documentElement.clientWidth}px`), e_(document.documentElement, "overflow", "hidden"), e_(document.body, "marginTop", `-${t}px`), () => {
                            window.scrollTo(e, t)
                        }), window.scrollTo(0, 0)
                    },
                    i = (0, U.chain)(eb(document, "touchstart", n => {
                        ((e = (0, U.getScrollParent)(n.target, !0)) !== document.documentElement || e !== document.body) && e instanceof HTMLElement && "auto" === window.getComputedStyle(e).overscrollBehavior && (t = e_(e, "overscrollBehavior", "contain"))
                    }, {
                        passive: !1,
                        capture: !0
                    }), eb(document, "touchmove", t => {
                        if (!e || e === document.documentElement || e === document.body) {
                            t.preventDefault();
                            return
                        }
                        e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault()
                    }, {
                        passive: !1,
                        capture: !0
                    }), eb(document, "touchend", e => {
                        let n = e.target;
                        ey(n) && n !== document.activeElement && (e.preventDefault(), r(), n.style.transform = "translateY(-2000px)", n.focus(), requestAnimationFrame(() => {
                            n.style.transform = ""
                        })), t && t()
                    }, {
                        passive: !1,
                        capture: !0
                    }), eb(document, "focus", e => {
                        let t = e.target;
                        ey(t) && (r(), t.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
                            t.style.transform = "", ep && (ep.height < window.innerHeight ? requestAnimationFrame(() => {
                                ev(t)
                            }) : ep.addEventListener("resize", () => ev(t), {
                                once: !0
                            }))
                        }))
                    }, !0));
                return () => {
                    null == t || t(), null == n || n(), i()
                }
            }() : function() {
                return (0, U.chain)(e_(document.documentElement, "paddingRight", `${window.innerWidth-document.documentElement.clientWidth}px`), e_(document.documentElement, "overflow", "hidden"))
            }()), () => {
                0 == --em && r()
            }
        }, [t])
    }

    function e_(e, t, n) {
        let r = e.style[t];
        return e.style[t] = n, () => {
            e.style[t] = r
        }
    }

    function eb(e, t, n, r) {
        return e.addEventListener(t, n, r), () => {
            e.removeEventListener(t, n, r)
        }
    }

    function ev(e) {
        let t = document.scrollingElement || document.documentElement;
        for (; e && e !== t;) {
            let t = (0, U.getScrollParent)(e);
            if (t !== document.documentElement && t !== document.body && t !== e) {
                let n = t.getBoundingClientRect().top,
                    r = e.getBoundingClientRect().top;
                r > n + e.clientHeight && (t.scrollTop += r - n)
            }
            e = t.parentElement
        }
    }

    function ey(e) {
        return e instanceof HTMLInputElement && !eh.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
    }
    let eE = B.createContext(null);

    function eS(e) {
        let {
            children: t
        } = e, n = (0, B.useContext)(eE), [r, i] = (0, B.useState)(0), a = (0, B.useMemo)(() => ({
            parent: n,
            modalCount: r,
            addModal() {
                i(e => e + 1), n && n.addModal()
            },
            removeModal() {
                i(e => e - 1), n && n.removeModal()
            }
        }), [n, r]);
        return B.createElement(eE.Provider, {
            value: a
        }, t)
    }

    function ex(e) {
        let t;
        let {
            modalProviderProps: n
        } = {
            modalProviderProps: {
                "aria-hidden": !!(t = (0, B.useContext)(eE)) && t.modalCount > 0 || null
            }
        };
        return B.createElement("div", {
            "data-overlay-container": !0,
            ...e,
            ...n
        })
    }

    function ew(e) {
        return B.createElement(eS, null, B.createElement(ex, e))
    }

    function eT(e) {
        let t = (0, G.useIsSSR)(),
            {
                portalContainer: n = t ? null : document.body,
                ...r
            } = e;
        if (B.useEffect(() => {
                if (null == n ? void 0 : n.closest("[data-overlay-container]")) throw Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")
            }, [n]), !n) return null;
        let i = B.createElement(ew, r);
        return H.createPortal(i, n)
    }
    var eC = {};

    function eD(e) {
        var t;
        let {
            onDismiss: n,
            ...r
        } = e;
        let i = (0, Y.useLocalizedStringFormatter)((t = eC) && t.__esModule ? t.default : t, "@react-aria/overlays"),
            a = (0, U.useLabels)(r, i.format("dismiss"));
        return B.createElement(V.VisuallyHidden, null, B.createElement("button", {
            ...a,
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
    eC = {
        "ar-AE": i.default,
        "bg-BG": a.default,
        "cs-CZ": o.default,
        "da-DK": s.default,
        "de-DE": u.default,
        "el-GR": c.default,
        "en-US": l.default,
        "es-ES": d.default,
        "et-EE": f.default,
        "fi-FI": p.default,
        "fr-FR": h.default,
        "he-IL": m.default,
        "hr-HR": g.default,
        "hu-HU": _.default,
        "it-IT": b.default,
        "ja-JP": v.default,
        "ko-KR": y.default,
        "lt-LT": E.default,
        "lv-LV": S.default,
        "nb-NO": x.default,
        "nl-NL": w.default,
        "pl-PL": T.default,
        "pt-BR": C.default,
        "pt-PT": D.default,
        "ro-RO": O.default,
        "ru-RU": M.default,
        "sk-SK": A.default,
        "sl-SI": k.default,
        "sr-SP": R.default,
        "sv-SE": N.default,
        "tr-TR": I.default,
        "uk-UA": L.default,
        "zh-CN": P.default,
        "zh-TW": F.default
    };
    let eO = new WeakMap,
        eM = [];

    function eA(e, t = document.body) {
        let n = new Set(e),
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
                    o = t(e);
                if (o === NodeFilter.FILTER_ACCEPT && a(e), o !== NodeFilter.FILTER_REJECT) {
                    let e = i.nextNode();
                    for (; null != e;) a(e), e = i.nextNode()
                }
            },
            a = e => {
                var t;
                let n = null !== (t = eO.get(e)) && void 0 !== t ? t : 0;
                ("true" !== e.getAttribute("aria-hidden") || 0 !== n) && (0 === n && e.setAttribute("aria-hidden", "true"), r.add(e), eO.set(e, n + 1))
            };
        eM.length && eM[eM.length - 1].disconnect(), i(t);
        let o = new MutationObserver(e => {
            for (let t of e)
                if ("childList" === t.type && 0 !== t.addedNodes.length && ![...n, ...r].some(e => e.contains(t.target))) {
                    for (let e of t.removedNodes) e instanceof Element && (n.delete(e), r.delete(e));
                    for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && ("true" === e.dataset.liveAnnouncer || "true" === e.dataset.reactAriaTopLayer) ? n.add(e) : e instanceof Element && i(e)
                }
        });
        o.observe(t, {
            childList: !0,
            subtree: !0
        });
        let s = {
            observe() {
                o.observe(t, {
                    childList: !0,
                    subtree: !0
                })
            },
            disconnect() {
                o.disconnect()
            }
        };
        return eM.push(s), () => {
            for (let e of (o.disconnect(), r)) {
                let t = eO.get(e);
                1 === t ? (e.removeAttribute("aria-hidden"), eO.delete(e)) : eO.set(e, t - 1)
            }
            s === eM[eM.length - 1] ? (eM.pop(), eM.length && eM[eM.length - 1].observe()) : eM.splice(eM.indexOf(s), 1)
        }
    }

    function ek(e, t) {
        let {
            triggerRef: n,
            popoverRef: r,
            isNonModal: i,
            isKeyboardDismissDisabled: a,
            shouldCloseOnInteractOutside: o,
            ...s
        } = e, {
            overlayProps: u,
            underlayProps: c
        } = ed({
            isOpen: t.isOpen,
            onClose: t.close,
            shouldCloseOnBlur: !0,
            isDismissable: !i,
            isKeyboardDismissDisabled: a,
            shouldCloseOnInteractOutside: o
        }, r), {
            overlayProps: l,
            arrowProps: d,
            placement: f
        } = ec({
            ...s,
            targetRef: n,
            overlayRef: r,
            isOpen: t.isOpen,
            onClose: i ? t.close : null
        });
        return eg({
            isDisabled: i || !t.isOpen
        }), (0, U.useLayoutEffect)(() => {
            if (t.isOpen && !i && r.current) return eA([r.current])
        }, [i, t.isOpen, r]), {
            popoverProps: (0, U.mergeProps)(u, l),
            arrowProps: d,
            underlayProps: c,
            placement: f
        }
    }
    let eR = B.createContext(null);

    function eN(e) {
        let t = (0, G.useIsSSR)(),
            {
                portalContainer: n = t ? null : document.body,
                isExiting: r
            } = e,
            [i, a] = (0, B.useState)(!1),
            o = (0, B.useMemo)(() => ({
                contain: i,
                setContain: a
            }), [i, a]);
        if (!n) return null;
        let s = e.children;
        return !e.disableFocusManagement && (s = B.createElement(j.FocusScope, {
            restoreFocus: !0,
            contain: i && !r
        }, s)), s = B.createElement(eR.Provider, {
            value: o
        }, B.createElement(z.ClearPressResponder, null, s)), H.createPortal(s, n)
    }

    function eI() {
        let e = (0, B.useContext)(eR),
            t = null == e ? void 0 : e.setContain;
        (0, U.useLayoutEffect)(() => {
            null == t || t(!0)
        }, [t])
    }

    function eL(e, t, n) {
        let {
            overlayProps: r,
            underlayProps: i
        } = ed({
            ...e,
            isOpen: t.isOpen,
            onClose: t.close
        }, n);
        return eg({
            isDisabled: !t.isOpen
        }), eI(), (0, B.useEffect)(() => {
            if (t.isOpen) return eA([n.current])
        }, [t.isOpen, n]), {
            modalProps: (0, U.mergeProps)(r),
            underlayProps: i
        }
    }
}