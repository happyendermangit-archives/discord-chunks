function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("143927"),
        a = n("260866"),
        o = n("461745"),
        l = n("806966"),
        u = n("28546"),
        d = n("453070"),
        _ = n("611480"),
        c = n("689938"),
        E = n("311240");
    let I = r.forwardRef(function(e, t) {
        let {
            onKeyDown: n,
            stickersListRef: I,
            channel: T
        } = e, f = (0, d.useHasSendableSticker)(T), S = r.useRef(null), {
            searchQuery: h,
            isSearchSuggestion: A
        } = (0, u.useExpressionPickerStore)(e => ({
            searchQuery: e.searchQuery,
            isSearchSuggestion: e.isSearchSuggestion
        }), s.default), m = l.StickerPickerStore.useStore(e => e.searchPlaceholder), N = l.StickerPickerStore.useStore(e => e.inspectedExpressionPosition, s.default), p = r.useCallback(e => {
            var t;
            l.StickerPickerStore.setActiveCategoryIndex("" === e ? 0 : _.INACTIVE_CATEGORY_INDEX), l.StickerPickerStore.setInspectedExpressionPosition(0, 0), l.StickerPickerStore.setSearchPlaceholder(null), (0, u.setSearchQuery)(e), null === (t = I.current) || void 0 === t || t.scrollTo(0)
        }, [I]), O = r.useCallback(() => {
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
            className: E.wrapper,
            children: (0, i.jsx)(o.default, {
                autoFocus: f,
                disabled: !f,
                query: h,
                ref: S,
                size: o.default.Sizes.MEDIUM,
                placeholder: null != m ? m : f ? c.default.Messages.SEARCH_FOR_STICKERS : c.default.Messages.NO_STICKERS_TO_SEARCH_THROUGH,
                onClear: O,
                onKeyDown: n,
                onQueryChange: p,
                className: E.__invalid_searchBar,
                preventEscapePropagation: !1,
                useKeyboardNavigation: !1,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": _.GRID_NAVIGATOR_ID,
                    "aria-expanded": !0,
                    "aria-activedescendant": (0, a.makeGridId)(_.GRID_NAVIGATOR_ID, N.columnIndex, N.rowIndex)
                }
            })
        })
    });
    t.default = I
}