function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("695464"),
        a = n("28546"),
        o = n("98528"),
        l = n("501014");
    let u = r.forwardRef(function(e, t) {
        let {
            store: n,
            hasSearchResults: u,
            listPadding: d,
            renderRow: _,
            renderSection: c,
            renderSectionHeader: E,
            renderSectionFooter: I,
            renderInspector: T,
            renderEmptySearchState: f,
            rowCount: S,
            rowCountBySection: h,
            rowHeight: A,
            sectionHeaderHeight: m,
            sectionFooterHeight: N
        } = e, O = r.useRef(!1), p = r.useRef(null), R = (0, a.useExpressionPickerStore)(e => e.searchQuery), C = n.useStore(e => e.activeCategoryIndex), g = (0, o.useSynchronizedActiveCategoryIndexForScrollPosition)({
            activeCategoryIndex: C,
            isScrolling: O,
            listRef: p,
            onActiveCategoryIndexChange: n.setActiveCategoryIndex,
            scrollOffset: 20,
            searchQuery: R
        });
        return (0, o.useSynchronizedScrollPositionForActiveCategoryIndex)({
            searchQuery: R,
            activeCategoryIndex: C,
            listRef: p
        }), r.useImperativeHandle(t, () => ({
            scrollTo: function() {
                for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return null === (e = p.current) || void 0 === e ? void 0 : e.scrollTo(...n)
            },
            getRowDescriptors: () => {
                var e, t;
                return null !== (t = null === (e = p.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
            },
            getSectionDescriptors: () => {
                var e, t;
                return null !== (t = null === (e = p.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
            },
            scrollToSectionTop: function() {
                for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return null === (e = p.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
            },
            scrollRowIntoView: function() {
                for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return null === (e = p.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
            },
            getScrollerNode: function() {
                for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return null === (e = p.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
            },
            scrollIntoViewNode: function() {
                for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return null === (e = p.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
            },
            getListDimensions: function() {
                for (var e, t, n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                return null !== (t = null === (e = p.current) || void 0 === e ? void 0 : e.getListDimensions(...i)) && void 0 !== t ? t : {
                    height: -1,
                    totalHeight: -1
                }
            }
        }), []), (0, i.jsxs)("div", {
            className: l.wrapper,
            children: [R.length > 0 && !u && null != f ? f() : (0, i.jsx)(s.default, {
                role: "none presentation",
                listPadding: d,
                onScroll: g,
                renderRow: _,
                renderSection: c,
                renderSectionHeader: E,
                renderSectionFooter: I,
                rowCount: S,
                rowCountBySection: h,
                rowHeight: A,
                sectionHeaderHeight: m,
                sectionFooterHeight: N,
                stickyHeaders: !0,
                ref: p
            }), null == T ? void 0 : T()]
        })
    });
    t.default = u
}