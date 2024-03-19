function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("16470"),
        s = n("74139"),
        r = n("137223"),
        o = n("986632"),
        u = n("538282"),
        d = n("256860"),
        c = n("560241"),
        f = n("782340"),
        p = n("750116");
    let m = l.forwardRef(function(e, t) {
        let {
            onKeyDown: n,
            stickersListRef: m,
            channel: h
        } = e, x = (0, d.useHasSendableSticker)(h), E = l.useRef(null), {
            searchQuery: y,
            isSearchSuggestion: g
        } = (0, u.useExpressionPickerStore)(e => ({
            searchQuery: e.searchQuery,
            isSearchSuggestion: e.isSearchSuggestion
        }), a.default), S = o.StickerPickerStore.useStore(e => e.searchPlaceholder), C = o.StickerPickerStore.useStore(e => e.inspectedExpressionPosition, a.default), _ = l.useCallback(e => {
            var t;
            o.StickerPickerStore.setActiveCategoryIndex("" === e ? 0 : c.INACTIVE_CATEGORY_INDEX), o.StickerPickerStore.setInspectedExpressionPosition(0, 0), o.StickerPickerStore.setSearchPlaceholder(null), (0, u.setSearchQuery)(e), null === (t = m.current) || void 0 === t || t.scrollTo(0)
        }, [m]), I = l.useCallback(() => {
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
            className: p.wrapper,
            children: (0, i.jsx)(r.default, {
                autoFocus: x,
                disabled: !x,
                query: y,
                ref: E,
                size: r.default.Sizes.MEDIUM,
                placeholder: null != S ? S : x ? f.default.Messages.SEARCH_FOR_STICKERS : f.default.Messages.NO_STICKERS_TO_SEARCH_THROUGH,
                onClear: I,
                onKeyDown: n,
                onQueryChange: _,
                className: p.searchBar,
                preventEscapePropagation: !1,
                useKeyboardNavigation: !1,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": c.GRID_NAVIGATOR_ID,
                    "aria-expanded": !0,
                    "aria-activedescendant": (0, s.makeGridId)(c.GRID_NAVIGATOR_ID, C.columnIndex, C.rowIndex)
                }
            })
        })
    });
    var h = m
}