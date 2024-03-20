function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createListScroller: function() {
            return _
        }
    }), n("424973"), n("222007");
    var i = n("37983"),
        r = n("884691"),
        o = n("414456"),
        s = n.n(o),
        l = n("345570"),
        a = n.n(l),
        u = n("718776"),
        c = n("462977"),
        d = n("38879");

    function _(e, t, n, o) {
        let l = (0, c.getScrollbarSpecs)(e),
            _ = new Map,
            f = new o(e => {
                e.forEach(e => {
                    var t;
                    let {
                        target: n
                    } = e;
                    null === (t = _.get(n)) || void 0 === t || t(e)
                })
            });
        return r.forwardRef(function(o, E) {
            let {
                className: S,
                onScroll: g,
                onResize: m = null,
                onContentResize: h = null,
                dir: p = "ltr",
                sections: I,
                sectionHeight: T,
                rowHeight: v,
                footerHeight: A = 0,
                sidebarHeight: N,
                listHeaderHeight: C = 0,
                renderSection: R,
                renderRow: O,
                renderFooter: L,
                renderSidebar: y,
                renderListHeader: D,
                wrapSection: P,
                getAnchorId: M,
                paddingTop: U,
                paddingBottom: b,
                fade: w = !1,
                customTheme: G = !1,
                chunkSize: F,
                style: k,
                innerId: B,
                innerRole: x,
                innerAriaLabel: V,
                innerAriaMultiselectable: H,
                innerAriaOrientation: W,
                innerClassName: Y,
                innerTag: z = "div",
                ...j
            } = o, K = r.useRef(null), Z = r.useRef(null), [X, q] = r.useState(!1), {
                scrollerRef: J,
                scrollerState: Q,
                getScrollerState: $
            } = (0, c.useCachedScrollerState)();
            (0, c.usePaddingFixes)({
                scrollerRef: J,
                className: S,
                specs: l,
                orientation: "vertical",
                dir: p
            });
            let {
                spacerTop: ee,
                totalHeight: et,
                items: en,
                isSidebarVisible: ei,
                listComputer: er,
                forceUpdateOnChunkChange: eo,
                anchor: es
            } = (0, c.useVirtualizedState)({
                sections: I,
                sectionHeight: T,
                rowHeight: v,
                footerHeight: A,
                sidebarHeight: N,
                listHeaderHeight: C,
                paddingTop: U,
                paddingBottom: b,
                chunkSize: F,
                getScrollerState: $,
                getAnchorId: M
            }), el = (0, c.useScrollSpring)(J), ea = r.useRef(m), eu = r.useRef(h);
            r.useLayoutEffect(() => {
                ea.current = m, eu.current = h
            });
            let ec = r.useCallback(function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    if (e > Q.current.dirty && (Q.current.dirty = e), 2 === e) {
                        var t;
                        null === (t = ea.current) || void 0 === t || t.call(ea)
                    }
                    eo(e)
                }, [eo, Q]),
                ed = r.useCallback(() => ec(), [ec]);
            (0, c.useResizeObserverSubscription)({
                ref: J,
                onUpdate: ed,
                key: "container",
                resizeObserver: f,
                listenerMap: _
            }), (0, c.useResizeObserverSubscription)({
                ref: Z,
                onUpdate: () => {
                    var e;
                    return null === (e = eu.current) || void 0 === e ? void 0 : e.call(eu)
                },
                key: "content",
                resizeObserver: f,
                listenerMap: _
            });
            let e_ = function(e) {
                    let t = r.useRef(e);
                    return r.useEffect(() => void(t.current = e), [e]), r.useCallback(() => t.current, [])
                }(en),
                ef = function(e) {
                    let t = r.useRef(e);
                    return r.useEffect(() => void(t.current = e), [e]), r.useCallback(e => {
                        let {
                            current: n
                        } = t, i = 0;
                        for (let t = 0; t < n.length; t++) {
                            let r = n[t];
                            if (i <= e && i + r >= e) {
                                let n = e - i;
                                return [t, n]
                            }
                            i += r
                        }
                        return [0, 0]
                    }, [])
                }(I);
            r.useImperativeHandle(E, () => ({
                getScrollerNode: () => J.current,
                getScrollerState: $,
                getItems: e_,
                getSectionRowFromIndex: ef,
                ...(0, c.getAnimatedListScrollHelpers)(J, $, er, el)
            }), [J, $, ef, e_, er, el]);
            let eE = r.useCallback(e => {
                ec(1), null == K.current ? q(!0) : clearTimeout(K.current), K.current = setTimeout(() => {
                    K.current = null, q(!1)
                }, 200), null != g && g(e)
            }, [g, ec]);
            return r.useLayoutEffect(() => {
                2 !== Q.current.dirty && (Q.current.dirty = 2)
            }, [en, R, O, L, P, et, ee, Q]), (0, c.useVirtualizedAnchor)({
                scrollerRef: J,
                anchor: es,
                getScrollerState: $,
                listComputer: er,
                getAnchorId: M,
                totalHeight: et
            }), (0, i.jsxs)("div", {
                ref: J,
                onScroll: eE,
                className: s(S, {
                    [e]: !0,
                    [t]: w,
                    [n]: G,
                    [d.scrolling]: X
                }),
                style: (0, c.getMergedOrientationStyles)(k),
                ...j,
                children: [r.useMemo(() => (0, i.jsx)(z, {
                    id: B,
                    role: x,
                    "aria-label": V,
                    "aria-multiselectable": H,
                    "aria-orientation": W,
                    style: {
                        height: et
                    },
                    className: s(d.content, Y),
                    ref: Z,
                    children: (0, i.jsx)(u.FocusRingScope, {
                        containerRef: Z,
                        children: function(e) {
                            let {
                                renderSection: t,
                                renderRow: n,
                                renderFooter: r,
                                renderListHeader: o,
                                wrapSection: s,
                                items: l,
                                spacerTop: u
                            } = e, c = [(0, i.jsx)("div", {
                                "aria-hidden": !0,
                                style: {
                                    height: u
                                }
                            }, "---list-spacer-top")], d = [], _ = 0;
                            if (l.forEach(e => {
                                    var i;
                                    switch (e.section !== _ && d.length > 0 && (c.push(null != s ? s(_, d) : d), d = []), _ = null !== (i = e.section) && void 0 !== i ? i : 0, e.type) {
                                        case "section":
                                            null != t && d.push(t(e));
                                            break;
                                        case "row":
                                            d.push(n(e));
                                            break;
                                        case "footer":
                                            null != r && d.push(r(e));
                                            break;
                                        case "header":
                                            null != o && d.push(o())
                                    }
                                }), d.length > 0) {
                                var f;
                                c.push(null !== (f = null == s ? void 0 : s(_, d)) && void 0 !== f ? f : d)
                            }
                            return a(c)
                        }({
                            items: en,
                            renderListHeader: D,
                            renderSection: R,
                            renderRow: O,
                            renderFooter: L,
                            wrapSection: P,
                            spacerTop: ee
                        })
                    })
                }), [B, x, V, H, W, Y, z, et, en, R, O, L, D, P, ee]), r.useMemo(() => (function(e) {
                    let {
                        renderSidebar: t,
                        sidebarHeight: n,
                        isSidebarVisible: i,
                        isListVisible: r
                    } = e;
                    return null == n || null == t ? null : t(r, i)
                })({
                    isSidebarVisible: ei,
                    renderSidebar: y,
                    sidebarHeight: N,
                    isListVisible: 0 !== en.length
                }), [ei, y, N, en.length])]
            })
        })
    }
}