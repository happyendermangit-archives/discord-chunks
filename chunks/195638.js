function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("16470"),
        s = n("74139"),
        r = n("137223"),
        o = n("986632"),
        u = n("538282"),
        d = n("535260");
    let c = l.forwardRef(function(e, t) {
        let {
            store: n,
            hasSendableExpressions: c,
            onKeyDown: f,
            gridNavigatorId: p,
            expressionsListRef: m,
            defaultSearchPlaceholder: h,
            emptySearchPlaceholder: x
        } = e, E = l.useRef(null), [y, g] = (0, u.useExpressionPickerStore)(e => [e.searchQuery, e.isSearchSuggestion], a.default), S = n.useStore(e => e.searchPlaceholder), C = n.useStore(e => e.inspectedExpressionPosition, a.default), _ = l.useCallback(e => {
            var t;
            n.setActiveCategoryIndex("" === e ? 0 : o.INACTIVE_CATEGORY_INDEX), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, u.setSearchQuery)(e), null === (t = m.current) || void 0 === t || t.scrollTo(0)
        }, [m, n]), I = l.useCallback(() => {
            (0, u.setSearchQuery)("")
        }, []);
        return l.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                return null === (e = E.current) || void 0 === e ? void 0 : e.focus()
            }
        })), l.useLayoutEffect(() => {
            if (g) {
                var e;
                null === (e = E.current) || void 0 === e || e.focus()
            }
        }, [g]), (0, i.jsx)("div", {
            className: d.wrapper,
            children: (0, i.jsx)(r.default, {
                autoFocus: c,
                disabled: !c,
                query: y,
                ref: E,
                size: r.default.Sizes.MEDIUM,
                placeholder: null != S ? S : c || null == x ? h : x,
                onClear: I,
                onKeyDown: f,
                onQueryChange: _,
                className: d.searchBar,
                preventEscapePropagation: !1,
                useKeyboardNavigation: !1,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": p,
                    "aria-expanded": !0,
                    "aria-activedescendant": (0, s.makeGridId)(p, C.columnIndex, C.rowIndex)
                }
            })
        })
    });
    var f = c
}