function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("124299"),
        o = n("538282"),
        u = n("49111"),
        d = n("956117");
    let c = e => {
        let {
            activeIndex: t,
            categoryListRef: n,
            getScrollOffsetForIndex: l
        } = e, a = i.useRef(u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), s = i.useRef(t);
        return i.useEffect(() => {
            null != t && t !== s.current && (a.current !== u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(a.current), a.current = window.requestAnimationFrame(() => {
                var e;
                if (null == n.current) return;
                let i = t > (null !== (e = s.current) && void 0 !== e ? e : -1),
                    r = null != l ? l(t, i) : 0;
                n.current.scrollRowIntoView(t, {
                    animate: !0,
                    offset: r
                }), a.current = u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID, s.current = t
            }))
        }, [t, n, l]), {
            categoryListRef: n
        }
    };
    var f = function(e) {
        let {
            categoryListRef: t,
            expressionsListRef: n,
            categories: a,
            store: u,
            children: f,
            className: m,
            listPadding: p,
            rowCount: h,
            getScrollOffsetForIndex: E,
            categoryHeight: g,
            onScroll: C,
            renderCategoryListItem: S,
            rowCountBySection: T,
            renderSection: I
        } = e, v = u.useStore(e => e.activeCategoryIndex);
        c({
            activeIndex: v,
            categoryListRef: t,
            getScrollOffsetForIndex: E
        });
        let _ = i.useCallback(e => {
                let {
                    searchQuery: t
                } = o.useExpressionPickerStore.getState();
                if (u.setActiveCategoryIndex(e), "" !== t)(0, o.setSearchQuery)("");
                else {
                    var l;
                    null === (l = n.current) || void 0 === l || l.scrollToSectionTop(e)
                }
            }, [n, u]),
            N = i.useCallback(e => S(a[e], e, () => _(e), v === e), [v, a, _, S]),
            A = i.useMemo(() => "function" == typeof g ? e => g(a[e], e) : g, [a, g]);
        return (0, l.jsxs)("div", {
            className: s(d.wrapper, m),
            children: [(0, l.jsx)(r.default, {
                listPadding: p,
                onScroll: C,
                ref: t,
                renderRow: N,
                rowCount: h,
                rowHeight: A,
                hideScrollbar: !0,
                rowCountBySection: T,
                renderSection: I
            }), null == f ? void 0 : f(_)]
        })
    }
}