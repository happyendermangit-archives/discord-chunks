function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuControlItem: function() {
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
            o = e.label,
            c = e.control,
            f = e.disabled,
            d = e.isFocused,
            _ = e.showDefaultFocus,
            E = void 0 !== _ && _,
            p = e.menuItemProps,
            m = e.onClose,
            y = r.useRef(null),
            I = r.useRef(null);
        r.useLayoutEffect(function() {
            var e, t, n;
            d ? ((0, a.ensureItemVisible)(y), null === (e = I.current) || void 0 === e || e.focus()) : null === (n = I.current) || void 0 === n || null === (t = n.blur) || void 0 === t || t.call(n)
        }, [d]);
        var h = r.useCallback(function() {
                var e, t;
                (null === (t = I.current) || void 0 === t ? void 0 : null === (e = t.activate) || void 0 === e ? void 0 : e.call(t)) && m()
            }, [m]),
            O = c({
                onClose: m,
                disabled: f,
                isFocused: d
            }, I);
        return r.createElement("div", function(e) {
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
            onClick: h,
            className: i()(s.item, u.MENU_ITEM_COLORS[void 0 === n ? "default" : n], (l(t = {}, s.disabled, f), l(t, s.focused, E && d), l(t, s.hideInteraction, !E), t)),
            "aria-disabled": f
        }, p), null != o ? r.createElement("div", {
            className: s.labelContainer
        }, r.createElement("div", {
            className: s.label
        }, o)) : null, O)
    }
}