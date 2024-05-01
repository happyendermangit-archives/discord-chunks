function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("28546"),
        s = n("98528"),
        o = n("429155"),
        l = n("810462"),
        u = n("182898");

    function d(e) {
        let {
            categories: t,
            collapsedCategories: n,
            containerWidth: d,
            store: _,
            onSelectItem: c,
            onSearchExpressions: E,
            hasSearchResults: I,
            defaultSearchPlaceholder: T,
            emptySearchPlaceholder: f,
            renderEmptyState: S,
            renderRow: h,
            renderSection: A,
            renderSectionHeader: m,
            renderSectionFooter: N,
            renderInspector: p,
            renderEmptySearchState: O,
            renderCategoryList: R,
            renderHeaderAccessories: C,
            rowHeight: g,
            sectionHeaderHeight: L,
            sectionFooterHeight: v,
            itemNodeWidth: D,
            listPaddingRight: M,
            itemNodeMargin: y,
            listPadding: P,
            gridNavigatorId: U,
            gridNotice: b,
            renderHeader: G
        } = e, w = r.useRef(null), B = r.useRef(null), k = r.useRef(null), V = 0 === t.length, x = (0, a.useExpressionPickerStore)(e => e.searchQuery), F = _.useStore(e => e.inspectedExpressionPosition), H = (0, s.useExpressionPickerGridWidth)({
            gridWrapperRef: w,
            containerWidth: d,
            showingEmptyState: V
        }), {
            expressionsGrid: Y,
            rowCount: j,
            rowCountBySection: W,
            columnCounts: K,
            gutterWidth: z
        } = (0, s.useExpressionGrid)({
            categories: t,
            collapsedCategories: n,
            gridWidth: H,
            listPaddingRight: M,
            itemNodeWidth: D,
            itemNodeMargin: y
        }), {
            getItemProps: Z,
            getRowProps: X,
            gridContainerProps: Q,
            handleGridContainerKeyDown: q,
            isUsingKeyboardNavigation: J
        } = (0, s.useKeyboardNavigation)({
            columnCounts: K,
            expressionsListRef: B,
            expressionsGrid: Y,
            onSelectItem: c,
            store: _,
            gridNavigatorId: U
        }), $ = r.useCallback(e => h(Y[e], X(e), {
            isUsingKeyboardNavigation: J.current,
            gutterWidth: z,
            rowIndex: e
        }, t => Z(e, t), t => _.setInspectedExpressionPosition(t, e)), [Y, Z, X, z, J, h, _]), ee = r.useCallback(e => null == A ? void 0 : A(t[e]), [t, A]), et = r.useCallback(e => null == m ? void 0 : m(t[e], e), [t, m]), en = r.useCallback(e => null == N ? void 0 : N(t[e]), [t, N]), ei = r.useCallback(() => {
            var e;
            return null == p ? void 0 : p(null == Y ? void 0 : null === (e = Y[F.rowIndex]) || void 0 === e ? void 0 : e[F.columnIndex])
        }, [Y, F.columnIndex, F.rowIndex, p]);
        r.useEffect(() => {
            E(x)
        }, [E, x]), r.useEffect(() => _.resetStoreState, [_.resetStoreState]), r.useLayoutEffect(() => {
            var e;
            null === (e = k.current) || void 0 === e || e.focus()
        }, []);
        let er = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.default, {
                ref: k,
                store: _,
                hasSendableExpressions: !0,
                onKeyDown: q,
                expressionsListRef: B,
                gridNavigatorId: U,
                defaultSearchPlaceholder: T,
                emptySearchPlaceholder: f
            }), null == C ? void 0 : C()]
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [null != G ? G(er) : (0, i.jsxs)("div", {
                className: u.header,
                children: [" ", er, " "]
            }), V && null != S ? S(u.emptyState) : (0, i.jsxs)(i.Fragment, {
                children: [R(B), null != b && (0, i.jsx)("div", {
                    className: u.gridNoticeWrapper,
                    children: b
                }), (0, i.jsx)("div", {
                    ref: w,
                    className: u.listWrapper,
                    id: U,
                    ...Q,
                    children: null != H ? (0, i.jsx)(o.default, {
                        ref: B,
                        store: _,
                        hasSearchResults: I,
                        listPadding: P,
                        renderRow: $,
                        renderSection: null != A ? ee : void 0,
                        renderSectionHeader: null != m ? et : void 0,
                        renderSectionFooter: null != N ? en : void 0,
                        renderInspector: null != p ? ei : void 0,
                        renderEmptySearchState: O,
                        rowCount: j,
                        rowCountBySection: W,
                        rowHeight: g,
                        sectionHeaderHeight: L,
                        sectionFooterHeight: v
                    }) : null
                })]
            })]
        })
    }
}