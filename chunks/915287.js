function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createListScroller: function() {
            return c
        }
    }), n("653041"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("952639"),
        l = n.n(o),
        u = n("84735"),
        d = n("562701"),
        _ = n("643333");

    function c(e, t, n, a) {
        let o = (0, d.getScrollbarSpecs)(e),
            c = new Map,
            E = new a(e => {
                e.forEach(e => {
                    var t;
                    let {
                        target: n
                    } = e;
                    null === (t = c.get(n)) || void 0 === t || t(e)
                })
            });
        return r.forwardRef(function(a, I) {
            let {
                className: T,
                onScroll: f,
                onResize: S = null,
                onContentResize: h = null,
                dir: A = "ltr",
                sections: m,
                sectionHeight: N,
                rowHeight: p,
                footerHeight: O = 0,
                sidebarHeight: R,
                listHeaderHeight: C = 0,
                renderSection: g,
                renderRow: L,
                renderFooter: v,
                renderSidebar: D,
                renderListHeader: M,
                wrapSection: y,
                getAnchorId: P,
                paddingTop: U,
                paddingBottom: b,
                fade: G = !1,
                customTheme: w = !1,
                chunkSize: B,
                style: k,
                innerId: V,
                innerRole: x,
                innerAriaLabel: F,
                innerAriaMultiselectable: H,
                innerAriaOrientation: Y,
                innerClassName: j,
                innerTag: W = "div",
                ...K
            } = a, z = r.useRef(null), Z = r.useRef(null), [X, Q] = r.useState(!1), {
                scrollerRef: q,
                scrollerState: J,
                getScrollerState: $
            } = (0, d.useCachedScrollerState)();
            (0, d.usePaddingFixes)({
                scrollerRef: q,
                className: T,
                specs: o,
                orientation: "vertical",
                dir: A
            });
            let {
                spacerTop: ee,
                totalHeight: et,
                items: en,
                isSidebarVisible: ei,
                listComputer: er,
                forceUpdateOnChunkChange: ea,
                anchor: es
            } = (0, d.useVirtualizedState)({
                sections: m,
                sectionHeight: N,
                rowHeight: p,
                footerHeight: O,
                sidebarHeight: R,
                listHeaderHeight: C,
                paddingTop: U,
                paddingBottom: b,
                chunkSize: B,
                getScrollerState: $,
                getAnchorId: P
            }), eo = (0, d.useScrollSpring)(q), el = r.useRef(S), eu = r.useRef(h);
            r.useLayoutEffect(() => {
                el.current = S, eu.current = h
            });
            let ed = r.useCallback(function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    if (e > J.current.dirty && (J.current.dirty = e), 2 === e) {
                        var t;
                        null === (t = el.current) || void 0 === t || t.call(el)
                    }
                    ea(e)
                }, [ea, J]),
                e_ = r.useCallback(() => ed(), [ed]);
            (0, d.useResizeObserverSubscription)({
                ref: q,
                onUpdate: e_,
                key: "container",
                resizeObserver: E,
                listenerMap: c
            }), (0, d.useResizeObserverSubscription)({
                ref: Z,
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
                getScrollerNode: () => q.current,
                getScrollerState: $,
                getItems: ec,
                getSectionRowFromIndex: eE,
                ...(0, d.getAnimatedListScrollHelpers)(q, $, er, eo)
            }), [q, $, eE, ec, er, eo]);
            let eI = r.useCallback(e => {
                ed(1), null == z.current ? Q(!0) : clearTimeout(z.current), z.current = setTimeout(() => {
                    z.current = null, Q(!1)
                }, 200), null != f && f(e)
            }, [f, ed]);
            return r.useLayoutEffect(() => {
                2 !== J.current.dirty && (J.current.dirty = 2)
            }, [en, g, L, v, y, et, ee, J]), (0, d.useVirtualizedAnchor)({
                scrollerRef: q,
                anchor: es,
                getScrollerState: $,
                listComputer: er,
                getAnchorId: P,
                totalHeight: et
            }), (0, i.jsxs)("div", {
                ref: q,
                onScroll: eI,
                className: s()(T, {
                    [e]: !0,
                    [t]: G,
                    [n]: w,
                    [_.scrolling]: X
                }),
                style: (0, d.getMergedOrientationStyles)(k),
                ...K,
                children: [r.useMemo(() => (0, i.jsx)(W, {
                    id: V,
                    role: x,
                    "aria-label": F,
                    "aria-multiselectable": H,
                    "aria-orientation": Y,
                    style: {
                        height: et
                    },
                    className: s()(_.content, j),
                    ref: Z,
                    children: (0, i.jsx)(u.FocusRingScope, {
                        containerRef: Z,
                        children: function(e) {
                            let {
                                renderSection: t,
                                renderRow: n,
                                renderFooter: r,
                                renderListHeader: a,
                                wrapSection: s,
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
                                    switch (e.section !== c && _.length > 0 && (d.push(null != s ? s(c, _) : _), _ = []), c = null !== (i = e.section) && void 0 !== i ? i : 0, e.type) {
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
                                            null != a && _.push(a())
                                    }
                                }), _.length > 0) {
                                var E;
                                d.push(null !== (E = null == s ? void 0 : s(c, _)) && void 0 !== E ? E : _)
                            }
                            return l()(d)
                        }({
                            items: en,
                            renderListHeader: M,
                            renderSection: g,
                            renderRow: L,
                            renderFooter: v,
                            wrapSection: y,
                            spacerTop: ee
                        })
                    })
                }), [V, x, F, H, Y, j, W, et, en, g, L, v, M, y, ee]), r.useMemo(() => (function(e) {
                    let {
                        renderSidebar: t,
                        sidebarHeight: n,
                        isSidebarVisible: i,
                        isListVisible: r
                    } = e;
                    return null == n || null == t ? null : t(r, i)
                })({
                    isSidebarVisible: ei,
                    renderSidebar: D,
                    sidebarHeight: R,
                    isListVisible: 0 !== en.length
                }), [ei, D, R, en.length])]
            })
        })
    }
}