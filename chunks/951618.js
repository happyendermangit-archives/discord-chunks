function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("143927"),
        i = n("447261"),
        a = n("997485"),
        u = n("797056"),
        s = n("251384"),
        l = n("295030"),
        c = n("271172"),
        f = n("941504"),
        d = n("965797"),
        _ = r.forwardRef(function(e, t) {
            var n = e.onKeyDown,
                _ = e.stickersListRef,
                E = e.channel,
                p = (0, l.useHasSendableSticker)(E),
                m = r.useRef(null),
                y = (0, s.useExpressionPickerStore)(function(e) {
                    return {
                        searchQuery: e.searchQuery,
                        isSearchSuggestion: e.isSearchSuggestion
                    }
                }, o.default),
                I = y.searchQuery,
                h = y.isSearchSuggestion,
                O = u.StickerPickerStore.useStore(function(e) {
                    return e.searchPlaceholder
                }),
                T = u.StickerPickerStore.useStore(function(e) {
                    return e.inspectedExpressionPosition
                }, o.default),
                S = r.useCallback(function(e) {
                    var t;
                    u.StickerPickerStore.setActiveCategoryIndex("" === e ? 0 : c.INACTIVE_CATEGORY_INDEX), u.StickerPickerStore.setInspectedExpressionPosition(0, 0), u.StickerPickerStore.setSearchPlaceholder(null), (0, s.setSearchQuery)(e), null === (t = _.current) || void 0 === t || t.scrollTo(0)
                }, [_]),
                v = r.useCallback(function() {
                    (0, s.setSearchQuery)("")
                }, []);
            return r.useImperativeHandle(t, function() {
                return {
                    focus: function() {
                        var e;
                        return null === (e = m.current) || void 0 === e ? void 0 : e.focus()
                    }
                }
            }), r.useLayoutEffect(function() {
                if (h) {
                    var e;
                    null === (e = m.current) || void 0 === e || e.focus()
                }
            }, [h]), r.createElement("div", {
                className: d.wrapper
            }, r.createElement(a.default, {
                autoFocus: p,
                disabled: !p,
                query: I,
                ref: m,
                size: a.default.Sizes.MEDIUM,
                placeholder: null != O ? O : p ? f.default.Messages.SEARCH_FOR_STICKERS : f.default.Messages.NO_STICKERS_TO_SEARCH_THROUGH,
                onClear: v,
                onKeyDown: n,
                onQueryChange: S,
                className: d.__invalid_searchBar,
                preventEscapePropagation: !1,
                useKeyboardNavigation: !1,
                inputProps: {
                    "aria-haspopup": "grid",
                    "aria-controls": c.GRID_NAVIGATOR_ID,
                    "aria-expanded": !0,
                    "aria-activedescendant": (0, i.makeGridId)(c.GRID_NAVIGATOR_ID, T.columnIndex, T.rowIndex)
                }
            }))
        });
    t.default = _
}