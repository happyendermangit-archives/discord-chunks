function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("143927"),
        i = n("447261"),
        a = n("997485"),
        u = n("797056"),
        s = n("251384"),
        l = n("275558");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var f = r.forwardRef(function(e, t) {
        var n, f, d = e.store,
            _ = e.hasSendableExpressions,
            E = e.onKeyDown,
            p = e.gridNavigatorId,
            m = e.expressionsListRef,
            y = e.defaultSearchPlaceholder,
            I = e.emptySearchPlaceholder,
            h = r.useRef(null);
        var O = (n = (0, s.useExpressionPickerStore)(function(e) {
                return [e.searchQuery, e.isSearchSuggestion]
            }, o.default), f = 2, function(e) {
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
            }(n, f) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }
            }(n, f) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            T = O[0],
            S = O[1],
            v = d.useStore(function(e) {
                return e.searchPlaceholder
            }),
            g = d.useStore(function(e) {
                return e.inspectedExpressionPosition
            }, o.default),
            A = r.useCallback(function(e) {
                var t;
                d.setActiveCategoryIndex("" === e ? 0 : u.INACTIVE_CATEGORY_INDEX), d.setInspectedExpressionPosition(0, 0), d.setSearchPlaceholder(null), (0, s.setSearchQuery)(e), null === (t = m.current) || void 0 === t || t.scrollTo(0)
            }, [m, d]),
            b = r.useCallback(function() {
                (0, s.setSearchQuery)("")
            }, []);
        return r.useImperativeHandle(t, function() {
            return {
                focus: function() {
                    var e;
                    return null === (e = h.current) || void 0 === e ? void 0 : e.focus()
                }
            }
        }), r.useLayoutEffect(function() {
            if (S) {
                var e;
                null === (e = h.current) || void 0 === e || e.focus()
            }
        }, [S]), r.createElement("div", {
            className: l.wrapper
        }, r.createElement(a.default, {
            autoFocus: _,
            disabled: !_,
            query: T,
            ref: h,
            size: a.default.Sizes.MEDIUM,
            placeholder: null != v ? v : _ || null == I ? y : I,
            onClear: b,
            onKeyDown: E,
            onQueryChange: A,
            className: l.__invalid_searchBar,
            preventEscapePropagation: !1,
            useKeyboardNavigation: !1,
            inputProps: {
                "aria-haspopup": "grid",
                "aria-controls": p,
                "aria-expanded": !0,
                "aria-activedescendant": (0, i.makeGridId)(p, g.columnIndex, g.rowIndex)
            }
        }))
    });
    t.default = f
}