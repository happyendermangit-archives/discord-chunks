function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("400524"),
        a = n("994500");
    t.default = (0, o.replaceIcon)(function(e) {
        var t, n, o = e.width,
            i = e.height,
            u = e.color,
            s = e.foreground,
            l = function(e, t) {
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
            }(e, ["width", "height", "color", "foreground"]);
        return r.createElement("svg", (t = function(e) {
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
        }({}, (0, a.default)(l)), n = (n = {
            width: void 0 === o ? 16 : o,
            height: void 0 === i ? 16 : i,
            viewBox: "0 0 26 28",
            fill: "none"
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), r.createElement("path", {
            className: s,
            fill: void 0 === u ? "currentColor" : u,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M25.4655 8.13686L24.0851 2.98525C23.5134 0.851387 21.32 -0.414947 19.1862 0.156821L3.73134 4.29792C1.59748 4.86969 0.331147 7.06304 0.902914 9.19691L2.01124 13.3332L1.9999 15.9999L1.9999 23.3332C1.9999 25.5424 3.79077 27.3332 5.99991 27.3332L21.9999 27.3332C24.209 27.3332 25.9999 25.5424 25.9999 23.3332V15.3333H5.99991L6.07237 13.3332L25.4655 8.13686ZM14.609 8.28512L10.8245 9.29916L10.7552 5.17663L14.5396 4.1626L14.609 8.28512ZM17.264 7.5737L22.1995 6.25124L21.5093 3.67543C21.3187 2.96415 20.5876 2.54204 19.8763 2.73263L17.1947 3.45117L17.264 7.5737ZM8.10009 5.88806L8.16944 10.0106L4.1689 11.0825L3.47872 8.50672C3.28813 7.79543 3.71024 7.06432 4.42153 6.87373L8.10009 5.88806Z"
        }))
    }, i.ClipsIcon, void 0, {
        size: 16
    })
}