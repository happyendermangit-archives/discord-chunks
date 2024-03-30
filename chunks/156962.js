function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r("470079"),
        o = r("351482"),
        c = r("613892"),
        i = r("994500");
    t.default = (0, o.replaceIcon)(function(e) {
        var t, r, o = e.width,
            c = e.height,
            l = e.color,
            u = e.foreground,
            a = function(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && (o[r] = e[r]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        if (r = c[n], !(t.indexOf(r) >= 0)) Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }(e, ["width", "height", "color", "foreground"]);
        return n.createElement("svg", (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    var n, o, c;
                    n = e, o = t, c = r[t], o in n ? Object.defineProperty(n, o, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = c
                })
            }
            return e
        }({}, (0, i.default)(a)), r = (r = {
            width: void 0 === o ? 24 : o,
            height: void 0 === c ? 24 : c,
            viewBox: "0 0 24 24",
            fill: "none"
        }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
            }
            return r
        })(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t), n.createElement("path", {
            className: u,
            fill: void 0 === l ? "currentColor" : l,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
        }))
    }, c.BellIcon, void 0, {
        size: 24
    })
}