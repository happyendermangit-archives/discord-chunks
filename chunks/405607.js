function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("37983"),
        l = n("884691"),
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
            getScrollOffsetForIndex: i
        } = e, a = l.useRef(u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), s = l.useRef(t);
        return l.useEffect(() => {
            null != t && t !== s.current && (a.current !== u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID && window.cancelAnimationFrame(a.current), a.current = window.requestAnimationFrame(() => {
                var e;
                if (null == n.current) return;
                let l = t > (null !== (e = s.current) && void 0 !== e ? e : -1),
                    r = null != i ? i(t, l) : 0;
                n.current.scrollRowIntoView(t, {
                    animate: !0,
                    offset: r
                }), a.current = u.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID, s.current = t
            }))
        }, [t, n, i]), {
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
            className: p,
            listPadding: m,
            rowCount: h,
            getScrollOffsetForIndex: x,
            categoryHeight: E,
            onScroll: y,
            renderCategoryListItem: g,
            rowCountBySection: S,
            renderSection: C
        } = e, I = u.useStore(e => e.activeCategoryIndex);
        c({
            activeIndex: I,
            categoryListRef: t,
            getScrollOffsetForIndex: x
        });
        let T = l.useCallback(e => {
                let {
                    searchQuery: t
                } = o.useExpressionPickerStore.getState();
                if (u.setActiveCategoryIndex(e), "" !== t)(0, o.setSearchQuery)("");
                else {
                    var i;
                    null === (i = n.current) || void 0 === i || i.scrollToSectionTop(e)
                }
            }, [n, u]),
            _ = l.useCallback(e => g(a[e], e, () => T(e), I === e), [I, a, T, g]),
            v = l.useMemo(() => "function" == typeof E ? e => E(a[e], e) : E, [a, E]);
        return (0, i.jsxs)("div", {
            className: s(d.wrapper, p),
            children: [(0, i.jsx)(r.default, {
                listPadding: m,
                onScroll: y,
                ref: t,
                renderRow: _,
                rowCount: h,
                rowHeight: v,
                hideScrollbar: !0,
                rowCountBySection: S,
                renderSection: C
            }), null == f ? void 0 : f(T)]
        })
    }
}