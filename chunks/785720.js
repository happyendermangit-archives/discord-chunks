function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("681429"),
        u = n("527166");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var l = Object.freeze({
            STANDARD: a.colorStandard,
            MUTED: a.colorMuted,
            ERROR: a.colorError,
            BRAND: a.colorBrand,
            LINK: a.colorLink,
            HEADER_PRIMARY: a.colorHeaderPrimary,
            HEADER_SECONDARY: a.colorHeaderSecondary,
            STATUS_YELLOW: a.colorStatusYellow,
            STATUS_GREEN: a.colorStatusGreen,
            STATUS_RED: a.colorStatusRed,
            INTERACTIVE_ACTIVE: a.colorInteractiveActive,
            INTERACTIVE_NORMAL: a.colorInteractiveNormal,
            ALWAYS_WHITE: a.colorWhite,
            CUSTOM: null
        }),
        c = Object.freeze({
            SIZE_10: u.size10,
            SIZE_12: u.size12,
            SIZE_14: u.size14,
            SIZE_16: u.size16,
            SIZE_20: u.size20,
            SIZE_24: u.size24,
            SIZE_32: u.size32
        }),
        f = function(e) {
            var t, n = e.className,
                o = e.color,
                u = void 0 === o ? l.STANDARD : o,
                f = e.size,
                d = void 0 === f ? c.SIZE_14 : f,
                _ = e.tag,
                E = e.selectable,
                p = e.strong,
                m = e.children,
                y = e.style,
                I = e["aria-label"],
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
                }(e, ["className", "color", "size", "tag", "selectable", "strong", "children", "style", "aria-label"]);
            return r.createElement(void 0 === _ ? "div" : _, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        s(e, t, n[t])
                    })
                }
                return e
            }({
                "aria-label": I,
                className: i()(u, d, n, (s(t = {}, a.selectable, void 0 !== E && E), s(t, a.strong, void 0 !== p && p), t)),
                style: y
            }, h), m)
        };
    f.Colors = l, f.Sizes = c, t.default = f
}