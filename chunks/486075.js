function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("251384"),
        i = n("61546"),
        a = n("686796"),
        u = n("55816"),
        s = n("339917");

    function l(e) {
        var t = e.categories,
            n = e.collapsedCategories,
            l = e.containerWidth,
            c = e.store,
            f = e.onSelectItem,
            d = e.onSearchExpressions,
            _ = e.hasSearchResults,
            E = e.defaultSearchPlaceholder,
            p = e.emptySearchPlaceholder,
            m = e.renderEmptyState,
            y = e.renderRow,
            I = e.renderSection,
            h = e.renderSectionHeader,
            O = e.renderSectionFooter,
            T = e.renderInspector,
            S = e.renderEmptySearchState,
            v = e.renderCategoryList,
            g = e.renderHeaderAccessories,
            A = e.rowHeight,
            b = e.sectionHeaderHeight,
            N = e.sectionFooterHeight,
            R = e.itemNodeWidth,
            C = e.listPaddingRight,
            P = e.itemNodeMargin,
            D = e.listPadding,
            L = e.gridNavigatorId,
            M = e.gridNotice,
            U = e.renderHeader,
            w = r.useRef(null),
            k = r.useRef(null),
            G = r.useRef(null),
            B = 0 === t.length,
            j = (0, o.useExpressionPickerStore)(function(e) {
                return e.searchQuery
            }),
            F = c.useStore(function(e) {
                return e.inspectedExpressionPosition
            }),
            V = (0, i.useExpressionPickerGridWidth)({
                gridWrapperRef: w,
                containerWidth: l,
                showingEmptyState: B
            }),
            H = (0, i.useExpressionGrid)({
                categories: t,
                collapsedCategories: n,
                gridWidth: V,
                listPaddingRight: C,
                itemNodeWidth: R,
                itemNodeMargin: P
            }),
            x = H.expressionsGrid,
            Y = H.rowCount,
            W = H.rowCountBySection,
            K = H.columnCounts,
            z = H.gutterWidth,
            X = (0, i.useKeyboardNavigation)({
                columnCounts: K,
                expressionsListRef: k,
                expressionsGrid: x,
                onSelectItem: f,
                store: c,
                gridNavigatorId: L
            }),
            q = X.getItemProps,
            Q = X.getRowProps,
            J = X.gridContainerProps,
            Z = X.handleGridContainerKeyDown,
            $ = X.isUsingKeyboardNavigation,
            ee = r.useCallback(function(e) {
                return y(x[e], Q(e), {
                    isUsingKeyboardNavigation: $.current,
                    gutterWidth: z,
                    rowIndex: e
                }, function(t) {
                    return q(e, t)
                }, function(t) {
                    return c.setInspectedExpressionPosition(t, e)
                })
            }, [x, q, Q, z, $, y, c]),
            et = r.useCallback(function(e) {
                return null == I ? void 0 : I(t[e])
            }, [t, I]),
            en = r.useCallback(function(e) {
                return null == h ? void 0 : h(t[e], e)
            }, [t, h]),
            er = r.useCallback(function(e) {
                return null == O ? void 0 : O(t[e])
            }, [t, O]),
            eo = r.useCallback(function() {
                var e;
                return null == T ? void 0 : T(null == x ? void 0 : null === (e = x[F.rowIndex]) || void 0 === e ? void 0 : e[F.columnIndex])
            }, [x, F.columnIndex, F.rowIndex, T]);
        r.useEffect(function() {
            d(j)
        }, [d, j]), r.useEffect(function() {
            return c.resetStoreState
        }, [c.resetStoreState]), r.useLayoutEffect(function() {
            var e;
            null === (e = G.current) || void 0 === e || e.focus()
        }, []);
        var ei = r.createElement(r.Fragment, null, r.createElement(u.default, {
            ref: G,
            store: c,
            hasSendableExpressions: !0,
            onKeyDown: Z,
            expressionsListRef: k,
            gridNavigatorId: L,
            defaultSearchPlaceholder: E,
            emptySearchPlaceholder: p
        }), null == g ? void 0 : g());
        return r.createElement(r.Fragment, null, null != U ? U(ei) : r.createElement("div", {
            className: s.header
        }, " ", ei, " "), B && null != m ? m(s.emptyState) : r.createElement(r.Fragment, null, v(k), null != M && r.createElement("div", {
            className: s.gridNoticeWrapper
        }, M), r.createElement("div", function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({
            ref: w,
            className: s.listWrapper,
            id: L
        }, J), null != V ? r.createElement(a.default, {
            ref: k,
            store: c,
            hasSearchResults: _,
            listPadding: D,
            renderRow: ee,
            renderSection: null != I ? et : void 0,
            renderSectionHeader: null != h ? en : void 0,
            renderSectionFooter: null != O ? er : void 0,
            renderInspector: null != T ? eo : void 0,
            renderEmptySearchState: S,
            rowCount: Y,
            rowCountBySection: W,
            rowHeight: A,
            sectionHeaderHeight: b,
            sectionFooterHeight: N
        }) : null)))
    }
}