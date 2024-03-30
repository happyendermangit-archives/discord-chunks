function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createMasonryListScroller: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n.n(r),
        i = n("803997"),
        a = n.n(i),
        u = n("35628"),
        s = n("573939"),
        l = n("592879");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
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

    function E(e, t, n) {
        var i = (0, s.getScrollbarSpecs)(e),
            c = new Map,
            E = new n(function(e) {
                e.forEach(function(e) {
                    var t, n = e.target;
                    null === (t = c.get(n)) || void 0 === t || t(e)
                })
            });
        return (0, r.forwardRef)(function(n, p) {
            var m, y = n.onScroll,
                I = n.dir,
                h = void 0 === I ? "ltr" : I,
                O = n.sections,
                T = n.columns,
                S = n.getItemKey,
                v = n.getItemHeight,
                g = n.getSectionHeight,
                A = n.chunkSize,
                b = n.renderSection,
                N = n.renderItem,
                R = n.getSectionProps,
                C = n.itemGutter,
                P = n.removeEdgeItemGutters,
                D = n.sectionGutter,
                L = n.padding,
                M = n.paddingVertical,
                U = n.paddingHorizontal,
                w = n.fade,
                k = n.className,
                G = n.style,
                B = function(e, t) {
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
                }(n, ["onScroll", "dir", "sections", "columns", "getItemKey", "getItemHeight", "getSectionHeight", "chunkSize", "renderSection", "renderItem", "getSectionProps", "itemGutter", "removeEdgeItemGutters", "sectionGutter", "padding", "paddingVertical", "paddingHorizontal", "fade", "className", "style"]),
                j = o().useRef(null),
                F = o().useRef(null),
                V = _(o().useState(!1), 2),
                H = V[0],
                x = V[1],
                Y = (0, s.useCachedScrollerState)(),
                W = Y.scrollerRef,
                K = Y.scrollerState,
                z = Y.getScrollerState;
            (0, s.usePaddingFixes)({
                scrollerRef: W,
                className: k,
                specs: i,
                orientation: "vertical",
                dir: h
            });
            var X = (0, s.useVirtualizedMasonryState)({
                    sections: O,
                    columns: T,
                    getItemKey: S,
                    getItemHeight: v,
                    getSectionHeight: g,
                    chunkSize: A,
                    itemGutter: C,
                    removeEdgeItemGutters: P,
                    sectionGutter: D,
                    padding: L,
                    paddingVertical: M,
                    paddingHorizontal: U,
                    getScrollerState: z,
                    dir: h
                }),
                q = X.forceUpdateOnChunkChange,
                Q = X.coordsMap,
                J = X.gridData,
                Z = X.visibleSections,
                $ = X.totalHeight,
                ee = X.forceUpdate,
                et = X.masonryComputer,
                en = (0, r.useCallback)(function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    e > K.current.dirty && (K.current.dirty = e, 2 === e ? ee() : q(1))
                }, [q, K, ee]),
                er = (0, s.useScrollSpring)(W),
                eo = (0, r.useCallback)(function() {
                    return et.itemGrid
                }, [et]),
                ei = (0, r.useCallback)(function() {
                    return et.coordsMap
                }, [et]),
                ea = o().useCallback(function() {
                    return en()
                }, [en]);
            (0, s.useResizeObserverSubscription)({
                ref: W,
                key: "container",
                onUpdate: ea,
                resizeObserver: E,
                listenerMap: c
            }), (0, r.useImperativeHandle)(p, function() {
                return d({
                    getScrollerNode: function() {
                        return W.current
                    },
                    getItemGrid: eo,
                    getCoordsMap: ei,
                    getScrollerState: z
                }, (0, s.getAnimatedScrollHelpers)(W, z, er))
            }, [W, z, eo, er, ei]);
            var eu = (0, r.useCallback)(function(e) {
                en(1), null == j.current ? x(!0) : clearTimeout(j.current), j.current = setTimeout(function() {
                    j.current = null, x(!1)
                }, 200), null != y && y(e)
            }, [y, en]);
            return o().createElement("div", d({
                ref: W,
                onScroll: eu,
                className: a()(k, (f(m = {}, e, !0), f(m, t, void 0 !== w && w), f(m, l.scrolling, H), m)),
                style: (0, s.getMergedOrientationStyles)(G)
            }, B), (0, r.useMemo)(function() {
                return o().createElement(u.FocusRingScope, {
                    containerRef: F
                }, o().createElement("div", {
                    style: {
                        height: $
                    },
                    className: l.content,
                    ref: F
                }, Object.keys(Z).map(function(e) {
                    var t = (0, s.getMasonryListSectionIndex)(e),
                        n = Q[e],
                        r = Z[e],
                        i = Q[(0, s.getMasonryListSectionHeaderKey)(t)],
                        a = null == R ? void 0 : R(t);
                    return null != n && null != r ? o().createElement("div", d({
                        style: n,
                        key: e
                    }, a), null != b && null != i && b(t, i, e), r.map(function(e) {
                        var t = _(e, 3),
                            n = t[0],
                            r = t[1],
                            o = t[2],
                            i = Q[n];
                        return null != i ? N(r, o, i, n, J) : null
                    })) : null
                })))
            }, [Z, N, b, Q, $, R, J]))
        })
    }
}