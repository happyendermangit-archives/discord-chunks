function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("538282"),
        s = n("45961"),
        r = n("794707"),
        o = n("195638"),
        u = n("890832");

    function d(e) {
        let {
            categories: t,
            collapsedCategories: n,
            containerWidth: d,
            store: c,
            onSelectItem: f,
            onSearchExpressions: p,
            hasSearchResults: m,
            defaultSearchPlaceholder: h,
            emptySearchPlaceholder: x,
            renderEmptyState: E,
            renderRow: y,
            renderSection: g,
            renderSectionHeader: S,
            renderSectionFooter: C,
            renderInspector: T,
            renderEmptySearchState: _,
            renderCategoryList: I,
            renderHeaderAccessories: v,
            rowHeight: N,
            sectionHeaderHeight: A,
            sectionFooterHeight: O,
            itemNodeWidth: R,
            listPaddingRight: M,
            itemNodeMargin: k,
            listPadding: L,
            gridNavigatorId: P,
            gridNotice: b,
            renderHeader: j
        } = e, U = l.useRef(null), D = l.useRef(null), w = l.useRef(null), F = 0 === t.length, G = (0, a.useExpressionPickerStore)(e => e.searchQuery), H = c.useStore(e => e.inspectedExpressionPosition), B = (0, s.useExpressionPickerGridWidth)({
            gridWrapperRef: U,
            containerWidth: d,
            showingEmptyState: F
        }), {
            expressionsGrid: V,
            rowCount: K,
            rowCountBySection: W,
            columnCounts: Y,
            gutterWidth: z
        } = (0, s.useExpressionGrid)({
            categories: t,
            collapsedCategories: n,
            gridWidth: B,
            listPaddingRight: M,
            itemNodeWidth: R,
            itemNodeMargin: k
        }), {
            getItemProps: J,
            getRowProps: Z,
            gridContainerProps: q,
            handleGridContainerKeyDown: X,
            isUsingKeyboardNavigation: Q
        } = (0, s.useKeyboardNavigation)({
            columnCounts: Y,
            expressionsListRef: D,
            expressionsGrid: V,
            onSelectItem: f,
            store: c,
            gridNavigatorId: P
        }), $ = l.useCallback(e => {
            let t = V[e];
            return y(t, Z(e), {
                isUsingKeyboardNavigation: Q.current,
                gutterWidth: z,
                rowIndex: e
            }, t => J(e, t), t => c.setInspectedExpressionPosition(t, e))
        }, [V, J, Z, z, Q, y, c]), ee = l.useCallback(e => null == g ? void 0 : g(t[e]), [t, g]), et = l.useCallback(e => null == S ? void 0 : S(t[e], e), [t, S]), en = l.useCallback(e => null == C ? void 0 : C(t[e]), [t, C]), ei = l.useCallback(() => {
            var e;
            return null == T ? void 0 : T(null == V ? void 0 : null === (e = V[H.rowIndex]) || void 0 === e ? void 0 : e[H.columnIndex])
        }, [V, H.columnIndex, H.rowIndex, T]);
        l.useEffect(() => {
            p(G)
        }, [p, G]), l.useEffect(() => c.resetStoreState, [c.resetStoreState]), l.useLayoutEffect(() => {
            var e;
            null === (e = w.current) || void 0 === e || e.focus()
        }, []);
        let el = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.default, {
                ref: w,
                store: c,
                hasSendableExpressions: !0,
                onKeyDown: X,
                expressionsListRef: D,
                gridNavigatorId: P,
                defaultSearchPlaceholder: h,
                emptySearchPlaceholder: x
            }), null == v ? void 0 : v()]
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [null != j ? j(el) : (0, i.jsxs)("div", {
                className: u.header,
                children: [" ", el, " "]
            }), F && null != E ? E(u.emptyState) : (0, i.jsxs)(i.Fragment, {
                children: [I(D), null != b && (0, i.jsx)("div", {
                    className: u.gridNoticeWrapper,
                    children: b
                }), (0, i.jsx)("div", {
                    ref: U,
                    className: u.listWrapper,
                    id: P,
                    ...q,
                    children: null != B ? (0, i.jsx)(r.default, {
                        ref: D,
                        store: c,
                        hasSearchResults: m,
                        listPadding: L,
                        renderRow: $,
                        renderSection: null != g ? ee : void 0,
                        renderSectionHeader: null != S ? et : void 0,
                        renderSectionFooter: null != C ? en : void 0,
                        renderInspector: null != T ? ei : void 0,
                        renderEmptySearchState: _,
                        rowCount: K,
                        rowCountBySection: W,
                        rowHeight: N,
                        sectionHeaderHeight: A,
                        sectionFooterHeight: O
                    }) : null
                })]
            })]
        })
    }
}