function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("695464"),
        l = n("28546"),
        u = n("981631"),
        d = n("479877");
    let _ = e => {
        let {
            activeIndex: t,
            categoryListRef: n,
            getScrollOffsetForIndex: i
        } = e, s = r.useRef(u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), a = r.useRef(t);
        return r.useEffect(() => {
            null != t && t !== a.current && (s.current !== u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(s.current), s.current = window.requestAnimationFrame(() => {
                var e;
                if (null == n.current) return;
                let r = t > (null !== (e = a.current) && void 0 !== e ? e : -1),
                    o = null != i ? i(t, r) : 0;
                n.current.scrollRowIntoView(t, {
                    animate: !0,
                    offset: o
                }), s.current = u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID, a.current = t
            }))
        }, [t, n, i]), {
            categoryListRef: n
        }
    };
    t.default = function(e) {
        let {
            categoryListRef: t,
            expressionsListRef: n,
            categories: s,
            store: u,
            children: c,
            className: E,
            listPadding: I,
            rowCount: T,
            getScrollOffsetForIndex: f,
            categoryHeight: S,
            onScroll: A,
            renderCategoryListItem: h,
            rowCountBySection: m,
            renderSection: N
        } = e, O = u.useStore(e => e.activeCategoryIndex);
        _({
            activeIndex: O,
            categoryListRef: t,
            getScrollOffsetForIndex: f
        });
        let p = r.useCallback(e => {
                let {
                    searchQuery: t
                } = l.useExpressionPickerStore.getState();
                if (u.setActiveCategoryIndex(e), "" !== t)(0, l.setSearchQuery)("");
                else {
                    var i;
                    null === (i = n.current) || void 0 === i || i.scrollToSectionTop(e)
                }
            }, [n, u]),
            R = r.useCallback(e => h(s[e], e, () => p(e), O === e), [O, s, p, h]),
            C = r.useMemo(() => "function" == typeof S ? e => S(s[e], e) : S, [s, S]);
        return (0, i.jsxs)("div", {
            className: a()(d.wrapper, E),
            children: [(0, i.jsx)(o.default, {
                listPadding: I,
                onScroll: A,
                ref: t,
                renderRow: R,
                rowCount: T,
                rowHeight: C,
                hideScrollbar: !0,
                rowCountBySection: m,
                renderSection: N
            }), null == c ? void 0 : c(p)]
        })
    }
}