function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createListScroller: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("952639"),
        u = n.n(a),
        s = n("35628"),
        l = n("573939"),
        c = n("592879");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                d(e, t, n[t])
            })
        }
        return e
    }

    function E(e, t, n, o) {
        var a = (0, l.getScrollbarSpecs)(e),
            E = new Map,
            p = new o(function(e) {
                e.forEach(function(e) {
                    var t, n = e.target;
                    null === (t = E.get(n)) || void 0 === t || t(e)
                })
            });
        return r.forwardRef(function(o, m) {
            var y, I, h, O, T, S, v, g = o.className,
                A = o.onScroll,
                b = o.onResize,
                N = void 0 === b ? null : b,
                R = o.onContentResize,
                C = void 0 === R ? null : R,
                P = o.dir,
                D = o.sections,
                L = o.sectionHeight,
                M = o.rowHeight,
                U = o.footerHeight,
                w = o.sidebarHeight,
                k = o.listHeaderHeight,
                G = o.renderSection,
                B = o.renderRow,
                j = o.renderFooter,
                F = o.renderSidebar,
                V = o.renderListHeader,
                H = o.wrapSection,
                x = o.getAnchorId,
                Y = o.paddingTop,
                W = o.paddingBottom,
                K = o.fade,
                z = o.customTheme,
                X = o.chunkSize,
                q = o.style,
                Q = o.innerId,
                J = o.innerRole,
                Z = o.innerAriaLabel,
                $ = o.innerAriaMultiselectable,
                ee = o.innerAriaOrientation,
                et = o.innerClassName,
                en = o.innerTag,
                er = void 0 === en ? "div" : en,
                eo = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                        return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) {
                            if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                    }
                    return o
                }(o, ["className", "onScroll", "onResize", "onContentResize", "dir", "sections", "sectionHeight", "rowHeight", "footerHeight", "sidebarHeight", "listHeaderHeight", "renderSection", "renderRow", "renderFooter", "renderSidebar", "renderListHeader", "wrapSection", "getAnchorId", "paddingTop", "paddingBottom", "fade", "customTheme", "chunkSize", "style", "innerId", "innerRole", "innerAriaLabel", "innerAriaMultiselectable", "innerAriaOrientation", "innerClassName", "innerTag"]),
                ei = r.useRef(null),
                ea = r.useRef(null);
            var eu = (y = r.useState(!1), I = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(y) || function(e, t) {
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
                }(y, I) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return f(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                    }
                }(y, I) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                es = eu[0],
                el = eu[1],
                ec = (0, l.useCachedScrollerState)(),
                ef = ec.scrollerRef,
                ed = ec.scrollerState,
                e_ = ec.getScrollerState;
            (0, l.usePaddingFixes)({
                scrollerRef: ef,
                className: g,
                specs: a,
                orientation: "vertical",
                dir: void 0 === P ? "ltr" : P
            });
            var eE = (0, l.useVirtualizedState)({
                    sections: D,
                    sectionHeight: L,
                    rowHeight: M,
                    footerHeight: void 0 === U ? 0 : U,
                    sidebarHeight: w,
                    listHeaderHeight: void 0 === k ? 0 : k,
                    paddingTop: Y,
                    paddingBottom: W,
                    chunkSize: X,
                    getScrollerState: e_,
                    getAnchorId: x
                }),
                ep = eE.spacerTop,
                em = eE.totalHeight,
                ey = eE.items,
                eI = eE.isSidebarVisible,
                eh = eE.listComputer,
                eO = eE.forceUpdateOnChunkChange,
                eT = eE.anchor,
                eS = (0, l.useScrollSpring)(ef),
                ev = r.useRef(N),
                eg = r.useRef(C);
            r.useLayoutEffect(function() {
                ev.current = N, eg.current = C
            });
            var eA = r.useCallback(function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    t > ed.current.dirty && (ed.current.dirty = t), 2 === t && (null === (e = ev.current) || void 0 === e || e.call(ev)), eO(t)
                }, [eO, ed]),
                eb = r.useCallback(function() {
                    return eA()
                }, [eA]);
            (0, l.useResizeObserverSubscription)({
                ref: ef,
                onUpdate: eb,
                key: "container",
                resizeObserver: p,
                listenerMap: E
            }), (0, l.useResizeObserverSubscription)({
                ref: ea,
                onUpdate: function() {
                    var e;
                    return null === (e = eg.current) || void 0 === e ? void 0 : e.call(eg)
                },
                key: "content",
                resizeObserver: p,
                listenerMap: E
            });
            var eN = (h = ey, O = r.useRef(h), r.useEffect(function() {
                O.current = h
            }, [h]), r.useCallback(function() {
                return O.current
            }, []));
            var eR = (T = D, S = r.useRef(T), r.useEffect(function() {
                S.current = T
            }, [T]), r.useCallback(function(e) {
                for (var t = S.current, n = 0, r = 0; r < t.length; r++) {
                    var o = t[r];
                    if (n <= e && n + o >= e) return [r, e - n];
                    n += o
                }
                return [0, 0]
            }, []));
            r.useImperativeHandle(m, function() {
                return _({
                    getScrollerNode: function() {
                        return ef.current
                    },
                    getScrollerState: e_,
                    getItems: eN,
                    getSectionRowFromIndex: eR
                }, (0, l.getAnimatedListScrollHelpers)(ef, e_, eh, eS))
            }, [ef, e_, eR, eN, eh, eS]);
            var eC = r.useCallback(function(e) {
                eA(1), null == ei.current ? el(!0) : clearTimeout(ei.current), ei.current = setTimeout(function() {
                    ei.current = null, el(!1)
                }, 200), null != A && A(e)
            }, [A, eA]);
            return r.useLayoutEffect(function() {
                2 !== ed.current.dirty && (ed.current.dirty = 2)
            }, [ey, G, B, j, H, em, ep, ed]), (0, l.useVirtualizedAnchor)({
                scrollerRef: ef,
                anchor: eT,
                getScrollerState: e_,
                listComputer: eh,
                getAnchorId: x,
                totalHeight: em
            }), r.createElement("div", _({
                ref: ef,
                onScroll: eC,
                className: i()(g, (d(v = {}, e, !0), d(v, t, void 0 !== K && K), d(v, n, void 0 !== z && z), d(v, c.scrolling, es), v)),
                style: (0, l.getMergedOrientationStyles)(q)
            }, eo), r.useMemo(function() {
                var e, t, n, o, a, l, f, d, _, E, p, m;
                return r.createElement(er, {
                    id: Q,
                    role: J,
                    "aria-label": Z,
                    "aria-multiselectable": $,
                    "aria-orientation": ee,
                    style: {
                        height: em
                    },
                    className: i()(c.content, et),
                    ref: ea
                }, r.createElement(s.FocusRingScope, {
                    containerRef: ea
                }, (n = (e = {
                    items: ey,
                    renderListHeader: V,
                    renderSection: G,
                    renderRow: B,
                    renderFooter: j,
                    wrapSection: H,
                    spacerTop: ep
                }).renderSection, o = e.renderRow, a = e.renderFooter, l = e.renderListHeader, f = e.wrapSection, d = e.items, _ = e.spacerTop, E = [r.createElement("div", {
                    "aria-hidden": !0,
                    style: {
                        height: _
                    },
                    key: "---list-spacer-top"
                })], p = [], m = 0, d.forEach(function(e) {
                    var t;
                    switch (e.section !== m && p.length > 0 && (E.push(null != f ? f(m, p) : p), p = []), m = null !== (t = e.section) && void 0 !== t ? t : 0, e.type) {
                        case "section":
                            null != n && p.push(n(e));
                            break;
                        case "row":
                            p.push(o(e));
                            break;
                        case "footer":
                            null != a && p.push(a(e));
                            break;
                        case "header":
                            null != l && p.push(l())
                    }
                }), p.length > 0 && E.push(null !== (t = null == f ? void 0 : f(m, p)) && void 0 !== t ? t : p), u()(E))))
            }, [Q, J, Z, $, ee, et, er, em, ey, G, B, j, V, H, ep]), r.useMemo(function() {
                var e, t, n, r, o;
                return t = (e = {
                    isSidebarVisible: eI,
                    renderSidebar: F,
                    sidebarHeight: w,
                    isListVisible: 0 !== ey.length
                }).renderSidebar, n = e.sidebarHeight, r = e.isSidebarVisible, o = e.isListVisible, null == n || null == t ? null : t(o, r)
            }, [eI, F, w, ey.length]))
        })
    }
}