function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("124299"),
        s = n("538282"),
        r = n("45961"),
        o = n("95279");
    let u = l.forwardRef(function(e, t) {
        let {
            store: n,
            hasSearchResults: u,
            listPadding: d,
            renderRow: c,
            renderSection: f,
            renderSectionHeader: p,
            renderSectionFooter: m,
            renderInspector: h,
            renderEmptySearchState: x,
            rowCount: E,
            rowCountBySection: y,
            rowHeight: g,
            sectionHeaderHeight: S,
            sectionFooterHeight: C
        } = e, _ = l.useRef(!1), T = l.useRef(null), I = (0, s.useExpressionPickerStore)(e => e.searchQuery), v = n.useStore(e => e.activeCategoryIndex), A = (0, r.useSynchronizedActiveCategoryIndexForScrollPosition)({
            activeCategoryIndex: v,
            isScrolling: _,
            listRef: T,
            onActiveCategoryIndexChange: n.setActiveCategoryIndex,
            scrollOffset: 20,
            searchQuery: I
        });
        return (0, r.useSynchronizedScrollPositionForActiveCategoryIndex)({
            searchQuery: I,
            activeCategoryIndex: v,
            listRef: T
        }), l.useImperativeHandle(t, () => ({
            scrollTo: function() {
                for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return null === (e = T.current) || void 0 === e ? void 0 : e.scrollTo(...n)
            },
            getRowDescriptors: () => {
                var e, t;
                return null !== (t = null === (e = T.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
            },
            getSectionDescriptors: () => {
                var e, t;
                return null !== (t = null === (e = T.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
            },
            scrollToSectionTop: function() {
                for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return null === (e = T.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
            },
            scrollRowIntoView: function() {
                for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return null === (e = T.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
            },
            getScrollerNode: function() {
                for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return null === (e = T.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
            },
            scrollIntoViewNode: function() {
                for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return null === (e = T.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
            },
            getListDimensions: function() {
                for (var e, t, n = arguments.length, i = Array(n), l = 0; l < n; l++) i[l] = arguments[l];
                return null !== (t = null === (e = T.current) || void 0 === e ? void 0 : e.getListDimensions(...i)) && void 0 !== t ? t : {
                    height: -1,
                    totalHeight: -1
                }
            }
        }), []), (0, i.jsxs)("div", {
            className: o.wrapper,
            children: [I.length > 0 && !u && null != x ? x() : (0, i.jsx)(a.default, {
                role: "none presentation",
                listPadding: d,
                onScroll: A,
                renderRow: c,
                renderSection: f,
                renderSectionHeader: p,
                renderSectionFooter: m,
                rowCount: E,
                rowCountBySection: y,
                rowHeight: g,
                sectionHeaderHeight: S,
                sectionFooterHeight: C,
                stickyHeaders: !0,
                ref: T
            }), null == h ? void 0 : h()]
        })
    });
    var d = u
}