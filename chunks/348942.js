function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("143927"),
        u = n("447261"),
        s = n("997485"),
        l = n("797056"),
        c = n("251384"),
        f = n("644037"),
        d = n("281767"),
        _ = n("941504"),
        E = n("776464");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var m = r.forwardRef(function(e, t) {
        var n, o, m, y, I, h = e.emojiListRef,
            O = e.gridNavigatorId,
            T = e.isFullRow,
            S = e.onKeyDown,
            v = e.onFocus,
            g = e.autoFocus,
            A = e.className,
            b = e.defaultSearchPlaceholder,
            N = r.useRef(null),
            R = (0, c.useExpressionPickerStore)(function(e) {
                return e.searchQuery
            });
        var C = (n = l.EmojiPickerStore.useStore(function(e) {
                return [e.inspectedExpressionPosition, e.searchPlaceholder]
            }, a.default), o = 2, function(e) {
                if (Array.isArray(e)) return e
            }(n) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(n, o) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }
            }(n, o) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            P = C[0],
            D = C[1],
            L = r.useCallback(function(e) {
                var t;
                l.EmojiPickerStore.setActiveCategoryIndex("" === e ? 0 : f.INACTIVE_CATEGORY_INDEX), l.EmojiPickerStore.setInspectedExpressionPosition(0, 0), l.EmojiPickerStore.setSearchPlaceholder(null), (0, c.setSearchQuery)(e), null === (t = h.current) || void 0 === t || t.scrollTo(0)
            }, [h]),
            M = r.useCallback(function() {
                (0, c.setSearchQuery)("")
            }, []);
        return r.useImperativeHandle(t, function() {
            return {
                focus: function() {
                    var e;
                    return null === (e = N.current) || void 0 === e ? void 0 : e.focus()
                }
            }
        }), r.createElement(s.default, {
            autoFocus: g,
            query: R,
            ref: N,
            size: s.default.Sizes.MEDIUM,
            placeholder: null != D ? D : b,
            onClear: M,
            onKeyDown: function(e) {
                switch (e.keyCode) {
                    case d.KeyboardKeys.ARROW_LEFT:
                    case d.KeyboardKeys.ARROW_RIGHT:
                    case d.KeyboardKeys.ARROW_UP:
                    case d.KeyboardKeys.ARROW_DOWN:
                        document.activeElement !== e.target && e.preventDefault()
                }
                S(e)
            },
            onFocus: v,
            onQueryChange: L,
            className: i()(A, (m = {}, y = E.searchBarFullRow, I = T, y in m ? Object.defineProperty(m, y, {
                value: I,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : m[y] = I, m)),
            preventEscapePropagation: !1,
            useKeyboardNavigation: !1,
            inputProps: {
                "aria-label": _.default.Messages.SEARCH_EMOJIS,
                "aria-haspopup": "grid",
                "aria-controls": O,
                "aria-expanded": !0,
                "aria-activedescendant": (0, u.makeGridId)(O, P.columnIndex, P.rowIndex)
            }
        })
    });
    t.default = r.memo(m)
}