function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createListScroller: function() {
            return c
        }
    }), n("653041"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("952639"),
        l = n.n(o),
        u = n("84735"),
        d = n("562701"),
        _ = n("592879");

    function c(e, t, n, s) {
        let o = (0, d.getScrollbarSpecs)(e),
            c = new Map,
            E = new s(e => {
                e.forEach(e => {
                    var t;
                    let {
                        target: n
                    } = e;
                    null === (t = c.get(n)) || void 0 === t || t(e)
                })
            });
        return r.forwardRef(function(s, I) {
            let {
                className: T,
                onScroll: f,
                onResize: S = null,
                onContentResize: A = null,
                dir: h = "ltr",
                sections: m,
                sectionHeight: N,
                rowHeight: O,
                footerHeight: p = 0,
                sidebarHeight: R,
                listHeaderHeight: C = 0,
                renderSection: g,
                renderRow: L,
                renderFooter: D,
                renderSidebar: v,
                renderListHeader: M,
                wrapSection: y,
                getAnchorId: P,
                paddingTop: U,
                paddingBottom: b,
                fade: G = !1,
                customTheme: w = !1,
                chunkSize: B,
                style: k,
                innerId: F,
                innerRole: V,
                innerAriaLabel: x,
                innerAriaMultiselectable: H,
                innerAriaOrientation: Y,
                innerClassName: j,
                innerTag: W = "div",
                ...K
            } = s, z = r.useRef(null), X = r.useRef(null), [Q, q] = r.useState(!1), {
                scrollerRef: Z,
                scrollerState: J,
                getScrollerState: $
            } = (0, d.useCachedScrollerState)();
            (0, d.usePaddingFixes)({
                scrollerRef: Z,
                className: T,
                specs: o,
                orientation: "vertical",
                dir: h
            });
            let {
                spacerTop: ee,
                totalHeight: et,
                items: en,
                isSidebarVisible: ei,
                listComputer: er,
                forceUpdateOnChunkChange: es,
                anchor: ea
            } = (0, d.useVirtualizedState)({
                sections: m,
                sectionHeight: N,
                rowHeight: O,
                footerHeight: p,
                sidebarHeight: R,
                listHeaderHeight: C,
                paddingTop: U,
                paddingBottom: b,
                chunkSize: B,
                getScrollerState: $,
                getAnchorId: P
            }), eo = (0, d.useScrollSpring)(Z), el = r.useRef(S), eu = r.useRef(A);
            r.useLayoutEffect(() => {
                el.current = S, eu.current = A
            });
            let ed = r.useCallback(function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    if (e > J.current.dirty && (J.current.dirty = e), 2 === e) {
                        var t;
                        null === (t = el.current) || void 0 === t || t.call(el)
                    }
                    es(e)
                }, [es, J]),
                e_ = r.useCallback(() => ed(), [ed]);
            (0, d.useResizeObserverSubscription)({
                ref: Z,
                onUpdate: e_,
                key: "container",
                resizeObserver: E,
                listenerMap: c
            }), (0, d.useResizeObserverSubscription)({
                ref: X,
                onUpdate: () => {
                    var e;
                    return null === (e = eu.current) || void 0 === e ? void 0 : e.call(eu)
                },
                key: "content",
                resizeObserver: E,
                listenerMap: c
            });
            let ec = function(e) {
                    let t = r.useRef(e);
                    return r.useEffect(() => void(t.current = e), [e]), r.useCallback(() => t.current, [])
                }(en),
                eE = function(e) {
                    let t = r.useRef(e);
                    return r.useEffect(() => void(t.current = e), [e]), r.useCallback(e => {
                        let {
                            current: n
                        } = t, i = 0;
                        for (let t = 0; t < n.length; t++) {
                            let r = n[t];
                            if (i <= e && i + r >= e) return [t, e - i];
                            i += r
                        }
                        return [0, 0]
                    }, [])
                }(m);
            r.useImperativeHandle(I, () => ({
                getScrollerNode: () => Z.current,
                getScrollerState: $,
                getItems: ec,
                getSectionRowFromIndex: eE,
                ...(0, d.getAnimatedListScrollHelpers)(Z, $, er, eo)
            }), [Z, $, eE, ec, er, eo]);
            let eI = r.useCallback(e => {
                ed(1), null == z.current ? q(!0) : clearTimeout(z.current), z.current = setTimeout(() => {
                    z.current = null, q(!1)
                }, 200), null != f && f(e)
            }, [f, ed]);
            return r.useLayoutEffect(() => {
                2 !== J.current.dirty && (J.current.dirty = 2)
            }, [en, g, L, D, y, et, ee, J]), (0, d.useVirtualizedAnchor)({
                scrollerRef: Z,
                anchor: ea,
                getScrollerState: $,
                listComputer: er,
                getAnchorId: P,
                totalHeight: et
            }), (0, i.jsxs)("div", {
                ref: Z,
                onScroll: eI,
                className: a()(T, {
                    [e]: !0,
                    [t]: G,
                    [n]: w,
                    [_.scrolling]: Q
                }),
                style: (0, d.getMergedOrientationStyles)(k),
                ...K,
                children: [r.useMemo(() => (0, i.jsx)(W, {
                    id: F,
                    role: V,
                    "aria-label": x,
                    "aria-multiselectable": H,
                    "aria-orientation": Y,
                    style: {
                        height: et
                    },
                    className: a()(_.content, j),
                    ref: X,
                    children: (0, i.jsx)(u.FocusRingScope, {
                        containerRef: X,
                        children: function(e) {
                            let {
                                renderSection: t,
                                renderRow: n,
                                renderFooter: r,
                                renderListHeader: s,
                                wrapSection: a,
                                items: o,
                                spacerTop: u
                            } = e, d = [(0, i.jsx)("div", {
                                "aria-hidden": !0,
                                style: {
                                    height: u
                                }
                            }, "---list-spacer-top")], _ = [], c = 0;
                            if (o.forEach(e => {
                                    var i;
                                    switch (e.section !== c && _.length > 0 && (d.push(null != a ? a(c, _) : _), _ = []), c = null !== (i = e.section) && void 0 !== i ? i : 0, e.type) {
                                        case "section":
                                            null != t && _.push(t(e));
                                            break;
                                        case "row":
                                            _.push(n(e));
                                            break;
                                        case "footer":
                                            null != r && _.push(r(e));
                                            break;
                                        case "header":
                                            null != s && _.push(s())
                                    }
                                }), _.length > 0) {
                                var E;
                                d.push(null !== (E = null == a ? void 0 : a(c, _)) && void 0 !== E ? E : _)
                            }
                            return l()(d)
                        }({
                            items: en,
                            renderListHeader: M,
                            renderSection: g,
                            renderRow: L,
                            renderFooter: D,
                            wrapSection: y,
                            spacerTop: ee
                        })
                    })
                }), [F, V, x, H, Y, j, W, et, en, g, L, D, M, y, ee]), r.useMemo(() => (function(e) {
                    let {
                        renderSidebar: t,
                        sidebarHeight: n,
                        isSidebarVisible: i,
                        isListVisible: r
                    } = e;
                    return null == n || null == t ? null : t(r, i)
                })({
                    isSidebarVisible: ei,
                    renderSidebar: v,
                    sidebarHeight: R,
                    isListVisible: 0 !== en.length
                }), [ei, v, R, en.length])]
            })
        })
    }
}