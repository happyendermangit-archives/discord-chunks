function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("143927"),
        a = n("260866"),
        o = n("461745"),
        l = n("806966"),
        u = n("28546"),
        d = n("494064");
    let _ = r.forwardRef(function(e, t) {
        let {
            store: n,
            hasSendableExpressions: _,
            onKeyDown: c,
            gridNavigatorId: E,
            expressionsListRef: I,
            defaultSearchPlaceholder: T,
            emptySearchPlaceholder: f
        } = e, S = r.useRef(null), [h, A] = (0, u.useExpressionPickerStore)(e => [e.searchQuery, e.isSearchSuggestion], s.default), m = n.useStore(e => e.searchPlaceholder), N = n.useStore(e => e.inspectedExpressionPosition, s.default), p = r.useCallback(e => {
            var t;
            n.setActiveCategoryIndex("" === e ? 0 : l.INACTIVE_CATEGORY_INDEX), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, u.setSearchQuery)(e), null === (t = I.current) || void 0 === t || t.scrollTo(0)
        }, [I, n]), O = r.useCallback(() => {
            (0, u.setSearchQuery)("")
        }, []);
        return r.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                return null === (e = S.current) || void 0 === e ? void 0 : e.focus()
            }
        })), r.useLayoutEffect(() => {
            if (A) {
                var e;
                null === (e = S.current) || void 0 === e || e.focus()
            }
        }, [A]), (0, i.jsx)("div", {
            className: d.wrapper,
            children: (0, i.jsx)(o.default, {
                autoFocus: _,
                disabled: !_,
                query: h,
                ref: S,
                size: o.default.Sizes.MEDIUM,
                placeholder: null != m ? m : _ || null == f ? T : f,
                onClear: O,
                onKeyDown: c,
                onQueryChange: p,
                className: d.__invalid_searchBar,
                preventEscapePropagation: !1,
                useKeyboardNavigation: !1,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": E,
                    "aria-expanded": !0,
                    "aria-activedescendant": (0, a.makeGridId)(E, N.columnIndex, N.rowIndex)
                }
            })
        })
    });
    t.default = _
}