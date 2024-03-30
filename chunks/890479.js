function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("621292"),
        s = n("527166");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = Object.freeze({
            SIZE_10: s.size10,
            SIZE_12: s.size12,
            SIZE_14: s.size14,
            SIZE_16: s.size16,
            SIZE_20: s.size20,
            SIZE_24: s.size24,
            SIZE_32: s.size32
        }),
        f = function(e) {
            var t, n, o, s = e.id,
                f = e.muted,
                d = e.className,
                _ = void 0 === d ? u.wrapper : d,
                E = e.size,
                p = void 0 === E ? c.SIZE_14 : E,
                m = e.selectable,
                y = e.children,
                I = e.color,
                h = e.onClick,
                O = e.onContextMenu,
                T = e.style,
                S = e.title,
                v = e.uppercase;
            return r.createElement(a.H, {
                role: null != h ? "button" : void 0,
                onClick: h,
                onContextMenu: O,
                id: s,
                className: i()(_, (l(o = {}, u.base, !0), l(o, p, !0), l(o, u.selectable, void 0 !== m && m), l(o, u.muted, void 0 !== f && f), l(o, u.uppercase, v), o)),
                title: S,
                style: null != I ? (t = function(e) {
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
                }({}, T), n = (n = {
                    color: I
                }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t) : T
            }, y)
        };
    f.Sizes = c, t.default = f
}