function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuCompositeControlItem: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("131248"),
        u = n("367628"),
        s = n("989608");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        var t, n = e.color,
            o = e.disabled,
            c = e.isFocused,
            f = e.showDefaultFocus,
            d = void 0 !== f && f,
            _ = e.menuItemProps,
            E = e.children,
            p = r.useRef(null);
        return r.useLayoutEffect(function() {
            if (!!c) {
                var e = p.current;
                if (null != e) {
                    (0, a.ensureItemVisible)(p);
                    var t = e.querySelector('[tabindex="0"]');
                    null == t || t.focus()
                }
            }
        }, [c]), r.createElement("div", function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    l(e, t, n[t])
                })
            }
            return e
        }({
            ref: p,
            className: i()(s.item, u.MENU_ITEM_COLORS[void 0 === n ? "default" : n], (l(t = {}, s.disabled, o), l(t, s.focused, d && c), l(t, s.hideInteraction, !d), t)),
            "aria-disabled": o
        }, _), E)
    }
}