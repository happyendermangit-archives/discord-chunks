function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("124299"),
        s = n("538282"),
        r = n("45961"),
        o = n("95279");
    let u = i.forwardRef(function(e, t) {
        let {
            store: n,
            hasSearchResults: u,
            listPadding: d,
            renderRow: c,
            renderSection: f,
            renderSectionHeader: m,
            renderSectionFooter: p,
            renderInspector: h,
            renderEmptySearchState: E,
            rowCount: g,
            rowCountBySection: C,
            rowHeight: S,
            sectionHeaderHeight: T,
            sectionFooterHeight: I
        } = e, v = i.useRef(!1), _ = i.useRef(null), N = (0, s.useExpressionPickerStore)(e => e.searchQuery), A = n.useStore(e => e.activeCategoryIndex), x = (0, r.useSynchronizedActiveCategoryIndexForScrollPosition)({
            activeCategoryIndex: A,
            isScrolling: v,
            listRef: _,
            onActiveCategoryIndexChange: n.setActiveCategoryIndex,
            scrollOffset: 20,
            searchQuery: N
        });
        return (0, r.useSynchronizedScrollPositionForActiveCategoryIndex)({
            searchQuery: N,
            activeCategoryIndex: A,
            listRef: _
        }), i.useImperativeHandle(t, () => ({
            scrollTo: function() {
                for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                return null === (e = _.current) || void 0 === e ? void 0 : e.scrollTo(...n)
            },
            getRowDescriptors: () => {
                var e, t;
                return null !== (t = null === (e = _.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
            },
            getSectionDescriptors: () => {
                var e, t;
                return null !== (t = null === (e = _.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
            },
            scrollToSectionTop: function() {
                for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                return null === (e = _.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
            },
            scrollRowIntoView: function() {
                for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                return null === (e = _.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
            },
            getScrollerNode: function() {
                for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                return null === (e = _.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
            },
            scrollIntoViewNode: function() {
                for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                return null === (e = _.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
            },
            getListDimensions: function() {
                for (var e, t, n = arguments.length, l = Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                return null !== (t = null === (e = _.current) || void 0 === e ? void 0 : e.getListDimensions(...l)) && void 0 !== t ? t : {
                    height: -1,
                    totalHeight: -1
                }
            }
        }), []), (0, l.jsxs)("div", {
            className: o.wrapper,
            children: [N.length > 0 && !u && null != E ? E() : (0, l.jsx)(a.default, {
                role: "none presentation",
                listPadding: d,
                onScroll: x,
                renderRow: c,
                renderSection: f,
                renderSectionHeader: m,
                renderSectionFooter: p,
                rowCount: g,
                rowCountBySection: C,
                rowHeight: S,
                sectionHeaderHeight: T,
                sectionFooterHeight: I,
                stickyHeaders: !0,
                ref: _
            }), null == h ? void 0 : h()]
        })
    });
    var d = u
}