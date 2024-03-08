function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("16470"),
        o = n("74139"),
        u = n("137223"),
        d = n("986632"),
        c = n("538282"),
        f = n("115279"),
        p = n("49111"),
        m = n("782340"),
        h = n("296323");
    let x = l.forwardRef(function(e, t) {
        let {
            emojiListRef: n,
            gridNavigatorId: a,
            isFullRow: x,
            onKeyDown: E,
            onFocus: y,
            autoFocus: g,
            className: S,
            defaultSearchPlaceholder: C
        } = e, I = l.useRef(null), T = (0, c.useExpressionPickerStore)(e => e.searchQuery), [_, v] = d.EmojiPickerStore.useStore(e => [e.inspectedExpressionPosition, e.searchPlaceholder], r.default), N = l.useCallback(e => {
            var t;
            d.EmojiPickerStore.setActiveCategoryIndex("" === e ? 0 : f.INACTIVE_CATEGORY_INDEX), d.EmojiPickerStore.setInspectedExpressionPosition(0, 0), d.EmojiPickerStore.setSearchPlaceholder(null), (0, c.setSearchQuery)(e), null === (t = n.current) || void 0 === t || t.scrollTo(0)
        }, [n]), A = l.useCallback(() => {
            (0, c.setSearchQuery)("")
        }, []);
        return l.useImperativeHandle(t, () => ({
            focus: () => {
                var e;
                return null === (e = I.current) || void 0 === e ? void 0 : e.focus()
            }
        })), (0, i.jsx)(u.default, {
            autoFocus: g,
            query: T,
            ref: I,
            size: u.default.Sizes.MEDIUM,
            placeholder: null != v ? v : C,
            onClear: A,
            onKeyDown: e => {
                switch (e.keyCode) {
                    case p.KeyboardKeys.ARROW_LEFT:
                    case p.KeyboardKeys.ARROW_RIGHT:
                    case p.KeyboardKeys.ARROW_UP:
                    case p.KeyboardKeys.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault()
                }
                E(e)
            },
            onFocus: y,
            onQueryChange: N,
            className: s(S, {
                [h.searchBarFullRow]: x
            }),
            preventEscapePropagation: !1,
            useKeyboardNavigation: !1,
            inputProps: {
                "aria-label": m.default.Messages.SEARCH_EMOJIS,
                "aria-haspopup": "grid",
                "aria-controls": a,
                "aria-expanded": !0,
                "aria-activedescendant": (0, o.makeGridId)(a, _.columnIndex, _.rowIndex)
            }
        })
    });
    var E = l.memo(x)
}