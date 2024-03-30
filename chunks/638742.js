function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuSubmenuListItem: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("527310"),
        i = n("131248"),
        a = n("222961"),
        u = n("989608");

    function s(e) {
        var t = e.parentItem,
            n = e.isFocused,
            s = e.menuSubmenuProps,
            l = e.rows,
            c = e.rowHeight,
            f = e.onScroll,
            d = e.listClassName,
            _ = r.useRef(null),
            E = r.useRef(null),
            p = r.useRef(null),
            m = r.useRef(null),
            y = s.isUsingKeyboardNavigation,
            I = s.focusIndex,
            h = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(s, ["isUsingKeyboardNavigation", "focusIndex"]);
        r.useLayoutEffect(function() {
            var e;
            n && ((0, i.ensureItemVisible)(_), null === (e = p.current) || void 0 === e || e.focus())
        }, [n]), r.useEffect(function() {
            if (n && I >= 0 && y) {
                var e;
                null === (e = m.current) || void 0 === e || e.scrollRowIntoView(I)
            }
        }, [n, y, I]);
        var O = r.useCallback(function(e) {
            return l[e]
        }, [l]);
        return r.createElement("div", {
            ref: _,
            className: u.__invalid_submenuContainer
        }, r.createElement("div", {
            ref: E
        }), t, n ? r.createElement(o.ReferencePositionLayer, {
            reference: E,
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            fixed: !0,
            spacing: 4,
            position: "right",
            align: "top"
        }, function() {
            var e, t;
            return l.length > 0 && r.createElement("div", {
                className: u.submenuPaddingContainer
            }, r.createElement("div", (e = function(e) {
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
                className: u.submenu
            }, h), t = (t = {
                ref: p
            }, t), Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e), r.createElement(a.default, {
                ref: m,
                className: d,
                listPadding: [6, 0, 6, 8],
                onScroll: f,
                renderRow: O,
                rowCount: l.length,
                rowHeight: c
            })))
        }) : null)
    }
}