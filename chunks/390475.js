function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        LocationIcon: function() {
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
                fillRule: "evenodd",
                d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                clipRule: "evenodd",
                className: void 0 === s ? "" : s
            }))
        }
}