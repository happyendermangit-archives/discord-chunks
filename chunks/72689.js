function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuCustomItem: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("324377"),
        u = n("131248"),
        s = n("367628"),
        l = n("989608");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        var t = e.children,
            n = e.color,
            o = void 0 === n ? "default" : n,
            f = e.isFocused,
            d = void 0 !== f && f,
            _ = e.disabled,
            E = void 0 !== _ && _,
            p = e.keepItemStyles,
            m = e.menuItemProps,
            y = e.action,
            I = e.dontCloseOnActionIfHoldingShiftKey,
            h = e.dontCloseOnAction,
            O = e.onClose,
            T = r.useRef(null);
        r.useEffect(function() {
            d && (0, u.ensureItemVisible)(T)
        }, [d]);
        var S = r.useCallback(function(e) {
                if (null == y) return !1;
                !(e.shiftKey && I) && !h && O(), e.persist(), requestAnimationFrame(function() {
                    return y(e)
                })
            }, [y, O, I, h]),
            v = void 0 !== p && p ? i()(l.item, s.MENU_ITEM_COLORS[o], c({}, l.focused, d)) : l.customItem;
        return r.createElement(a.Clickable, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    c(e, t, n[t])
                })
            }
            return e
        }({
            innerRef: T,
            className: v,
            onClick: E ? void 0 : S,
            "aria-disabled": E
        }, m), t({
            color: o,
            disabled: E,
            isFocused: d
        }))
    }
}