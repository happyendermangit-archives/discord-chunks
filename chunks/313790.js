function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("16470"),
        s = n("74139"),
        r = n("137223"),
        o = n("986632"),
        u = n("538282"),
        d = n("256860"),
        c = n("560241"),
        f = n("782340"),
        m = n("750116");
    let p = i.forwardRef(function(e, t) {
        let {
            onKeyDown: n,
            stickersListRef: p,
            channel: h
        } = e, E = (0, d.useHasSendableSticker)(h), g = i.useRef(null), {
            searchQuery: S,
            isSearchSuggestion: C
        } = (0, u.useExpressionPickerStore)(e => ({
            searchQuery: e.searchQuery,
            isSearchSuggestion: e.isSearchSuggestion
        }), a.default), T = o.StickerPickerStore.useStore(e => e.searchPlaceholder), v = o.StickerPickerStore.useStore(e => e.inspectedExpressionPosition, a.default), I = i.useCallback(e => {
            var t;
            o.StickerPickerStore.setActiveCategoryIndex("" === e ? 0 : c.INACTIVE_CATEGORY_INDEX), o.StickerPickerStore.setInspectedExpressionPosition(0, 0), o.StickerPickerStore.setSearchPlaceholder(null), (0, u.setSearchQuery)(e), null === (t = p.current) || void 0 === t || t.scrollTo(0)
        }, [p]), _ = i.useCallback(() => {
            (0, u.setSearchQuery)("")
        }, []);
        return i.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                return null === (e = g.current) || void 0 === e ? void 0 : e.focus()
            }
        })), i.useLayoutEffect(() => {
            if (C) {
                var e;
                null === (e = g.current) || void 0 === e || e.focus()
            }
        }, [C]), (0, l.jsx)("div", {
            className: m.wrapper,
            children: (0, l.jsx)(r.default, {
                autoFocus: E,
                disabled: !E,
                query: S,
                ref: g,
                size: r.default.Sizes.MEDIUM,
                placeholder: null != T ? T : E ? f.default.Messages.SEARCH_FOR_STICKERS : f.default.Messages.NO_STICKERS_TO_SEARCH_THROUGH,
                onClear: _,
                onKeyDown: n,
                onQueryChange: I,
                className: m.searchBar,
                preventEscapePropagation: !1,
                useKeyboardNavigation: !1,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": c.GRID_NAVIGATOR_ID,
                    "aria-expanded": !0,
                    "aria-activedescendant": (0, s.makeGridId)(c.GRID_NAVIGATOR_ID, v.columnIndex, v.rowIndex)
                }
            })
        })
    });
    var h = p
}