function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("695464"),
        l = n("28546"),
        u = n("981631"),
        d = n("986308");
    let _ = e => {
        let {
            activeIndex: t,
            categoryListRef: n,
            getScrollOffsetForIndex: i
        } = e, a = r.useRef(u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), s = r.useRef(t);
        return r.useEffect(() => {
            null != t && t !== s.current && (a.current !== u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(a.current), a.current = window.requestAnimationFrame(() => {
                var e;
                if (null == n.current) return;
                let r = t > (null !== (e = s.current) && void 0 !== e ? e : -1),
                    o = null != i ? i(t, r) : 0;
                n.current.scrollRowIntoView(t, {
                    animate: !0,
                    offset: o
                }), a.current = u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID, s.current = t
            }))
        }, [t, n, i]), {
            categoryListRef: n
        }
    };
    t.default = function(e) {
        let {
            categoryListRef: t,
            expressionsListRef: n,
            categories: a,
            store: u,
            children: c,
            className: E,
            listPadding: I,
            rowCount: T,
            getScrollOffsetForIndex: f,
            categoryHeight: S,
            onScroll: h,
            renderCategoryListItem: A,
            rowCountBySection: m,
            renderSection: N
        } = e, p = u.useStore(e => e.activeCategoryIndex);
        _({
            activeIndex: p,
            categoryListRef: t,
            getScrollOffsetForIndex: f
        });
        let O = r.useCallback(e => {
                let {
                    searchQuery: t
                } = l.useExpressionPickerStore.getState();
                if (u.setActiveCategoryIndex(e), "" !== t)(0, l.setSearchQuery)("");
                else {
                    var i;
                    null === (i = n.current) || void 0 === i || i.scrollToSectionTop(e)
                }
            }, [n, u]),
            R = r.useCallback(e => A(a[e], e, () => O(e), p === e), [p, a, O, A]),
            C = r.useMemo(() => "function" == typeof S ? e => S(a[e], e) : S, [a, S]);
        return (0, i.jsxs)("div", {
            className: s()(d.wrapper, E),
            children: [(0, i.jsx)(o.default, {
                listPadding: I,
                onScroll: h,
                ref: t,
                renderRow: R,
                rowCount: T,
                rowHeight: C,
                hideScrollbar: !0,
                rowCountBySection: m,
                renderSection: N
            }), null == c ? void 0 : c(O)]
        })
    }
}