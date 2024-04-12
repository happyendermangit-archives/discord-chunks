function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createMasonryListScroller: function() {
            return _
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n.n(r),
        a = n("803997"),
        o = n.n(a),
        l = n("84735"),
        u = n("562701"),
        d = n("592879");

    function _(e, t, n) {
        let a = (0, u.getScrollbarSpecs)(e),
            _ = new Map,
            c = new n(e => {
                e.forEach(e => {
                    var t;
                    let {
                        target: n
                    } = e;
                    null === (t = _.get(n)) || void 0 === t || t(e)
                })
            });
        return (0, r.forwardRef)(function(n, E) {
            let {
                onScroll: I,
                dir: T = "ltr",
                sections: f,
                columns: S,
                getItemKey: A,
                getItemHeight: h,
                getSectionHeight: m,
                chunkSize: N,
                renderSection: O,
                renderItem: p,
                getSectionProps: R,
                itemGutter: C,
                removeEdgeItemGutters: g,
                sectionGutter: L,
                padding: D,
                paddingVertical: v,
                paddingHorizontal: M,
                fade: y = !1,
                className: P,
                style: U,
                ...b
            } = n, G = s().useRef(null), w = s().useRef(null), [k, B] = s().useState(!1), {
                scrollerRef: V,
                scrollerState: F,
                getScrollerState: x
            } = (0, u.useCachedScrollerState)();
            (0, u.usePaddingFixes)({
                scrollerRef: V,
                className: P,
                specs: a,
                orientation: "vertical",
                dir: T
            });
            let {
                forceUpdateOnChunkChange: H,
                coordsMap: Y,
                gridData: j,
                visibleSections: W,
                totalHeight: K,
                forceUpdate: z,
                masonryComputer: X
            } = (0, u.useVirtualizedMasonryState)({
                sections: f,
                columns: S,
                getItemKey: A,
                getItemHeight: h,
                getSectionHeight: m,
                chunkSize: N,
                itemGutter: C,
                removeEdgeItemGutters: g,
                sectionGutter: L,
                padding: D,
                paddingVertical: v,
                paddingHorizontal: M,
                getScrollerState: x,
                dir: T
            }), Q = (0, r.useCallback)(function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                e > F.current.dirty && (F.current.dirty = e, 2 === e ? z() : H(1))
            }, [H, F, z]), q = (0, u.useScrollSpring)(V), Z = (0, r.useCallback)(() => X.itemGrid, [X]), J = (0, r.useCallback)(() => X.coordsMap, [X]), $ = s().useCallback(() => Q(), [Q]);
            (0, u.useResizeObserverSubscription)({
                ref: V,
                key: "container",
                onUpdate: $,
                resizeObserver: c,
                listenerMap: _
            }), (0, r.useImperativeHandle)(E, () => ({
                getScrollerNode: () => V.current,
                getItemGrid: Z,
                getCoordsMap: J,
                getScrollerState: x,
                ...(0, u.getAnimatedScrollHelpers)(V, x, q)
            }), [V, x, Z, q, J]);
            let ee = (0, r.useCallback)(e => {
                Q(1), null == G.current ? B(!0) : clearTimeout(G.current), G.current = setTimeout(() => {
                    G.current = null, B(!1)
                }, 200), null != I && I(e)
            }, [I, Q]);
            return (0, i.jsx)("div", {
                ref: V,
                onScroll: ee,
                className: o()(P, {
                    [e]: !0,
                    [t]: y,
                    [d.scrolling]: k
                }),
                style: (0, u.getMergedOrientationStyles)(U),
                ...b,
                children: (0, r.useMemo)(() => (0, i.jsx)(l.FocusRingScope, {
                    containerRef: w,
                    children: (0, i.jsx)("div", {
                        style: {
                            height: K
                        },
                        className: d.content,
                        ref: w,
                        children: Object.keys(W).map(e => {
                            let t = (0, u.getMasonryListSectionIndex)(e),
                                n = Y[e],
                                r = W[e],
                                s = Y[(0, u.getMasonryListSectionHeaderKey)(t)],
                                a = null == R ? void 0 : R(t);
                            return null != n && null != r ? (0, i.jsxs)("div", {
                                style: n,
                                ...a,
                                children: [null != O && null != s && O(t, s, e), r.map(e => {
                                    let [t, n, i] = e, r = Y[t];
                                    return null != r ? p(n, i, r, t, j) : null
                                })]
                            }, e) : null
                        })
                    })
                }), [W, p, O, Y, K, R, j])
            })
        })
    }
}