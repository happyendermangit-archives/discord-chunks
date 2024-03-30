function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Text: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("696689"),
        u = n.n(a),
        s = n("447515"),
        l = n("832764"),
        c = n("487466");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
    }
    var _ = Object.fromEntries(Object.keys(s.default.colors).map(function(e) {
            return [u()(e), e]
        })),
        E = function(e) {
            var t, n, o, a, u, E = e.variant,
                p = e.tag,
                m = e.selectable,
                y = e.className,
                I = e.lineClamp,
                h = e.color,
                O = e.tabularNumbers,
                T = e.scaleFontToUserSetting,
                S = function(e, t) {
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
                }(e, ["variant", "tag", "selectable", "className", "lineClamp", "color", "tabularNumbers", "scaleFontToUserSetting"]),
                v = "",
                g = {};
            if (null != I && (1 === I ? v = l.lineClamp1 : (v = l.lineClamp2Plus, g = {
                    lineClamp: I,
                    WebkitLineClamp: I
                })), void 0 !== h) switch (h) {
                case "none":
                    o = void 0;
                    break;
                case "always-white":
                    o = "white";
                    break;
                default:
                    o = null === (a = s.default.colors[_[h]]) || void 0 === a ? void 0 : a.css
            }
            var A = d({
                color: o
            }, g, S.style);
            return r.createElement(void 0 === p ? "div" : p, (t = d({
                className: i()((f(u = {}, l.defaultColor, void 0 === h), f(u, l.selectable, void 0 !== m && m), f(u, l.tabularNumbers, void 0 !== O && O), f(u, c.fontScaling, void 0 !== T && T), u), v, c[E], y)
            }, S), n = (n = {
                style: Object.values(A).filter(Boolean).length > 0 ? A : void 0,
                "data-text-variant": E
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
        }
}