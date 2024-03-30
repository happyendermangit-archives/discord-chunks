function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        BellIcon: function() {
            return i
        }
    });
    var n = r("470079"),
        o = r("447515"),
        c = r("722161"),
        i = function(e) {
            var t, r, i = e.width,
                l = e.height,
                u = e.color,
                a = void 0 === u ? o.default.colors.INTERACTIVE_NORMAL : u,
                s = e.colorClass,
                f = function(e, t) {
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
                }(e, ["width", "height", "color", "colorClass"]);
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
            }({}, (0, c.default)(f)), r = (r = {
                xmlns: "http://www.w3.org/2000/svg",
                width: void 0 === i ? 24 : i,
                height: void 0 === l ? 24 : l,
                fill: "none",
                viewBox: "0 0 24 24"
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
                fill: "string" == typeof a ? a : a.css,
                d: "M9.7 2.89c.18-.07.32-.24.37-.43a2 2 0 0 1 3.86 0c.05.2.19.36.38.43A7 7 0 0 1 19 9.5v2.09c0 .12.05.24.13.33l1.1 1.22a3 3 0 0 1 .77 2.01v.28c0 .67-.34 1.29-.95 1.56-1.31.6-4 1.51-8.05 1.51-4.05 0-6.74-.91-8.05-1.5-.61-.28-.95-.9-.95-1.57v-.28a3 3 0 0 1 .77-2l1.1-1.23a.5.5 0 0 0 .13-.33V9.5a7 7 0 0 1 4.7-6.61ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.86 24.86 0 0 1-5.64 0Z",
                className: void 0 === s ? "" : s
            }))
        }
}