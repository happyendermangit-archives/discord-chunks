function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("631235"),
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
        }({
            viewBox: "0 0 24 24"
        }, (0, a.default)(l)), n = (n = {
            width: void 0 === o ? 24 : o,
            height: void 0 === i ? 24 : i
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
            fill: void 0 === u ? "currentColor" : u,
            className: s,
            d: "M5.13525 22.0002V1.99023H13.5743C15.1596 1.99023 16.4356 2.45423 17.4023 3.38224C18.3883 4.31024 18.8813 5.5379 18.8813 7.06523C18.8813 8.2639 18.6009 9.23057 18.0403 9.96524C17.4989 10.6806 16.7933 11.2026 15.9233 11.5312C18.4173 12.1306 19.6643 13.7739 19.6643 16.4612C19.6643 18.3366 19.1036 19.7286 17.9823 20.6372C16.8803 21.5459 15.3143 22.0002 13.2843 22.0002H5.13525ZM12.4143 10.2842C14.4829 10.2842 15.5173 9.3949 15.5173 7.61624C15.5173 6.70757 15.2466 6.0309 14.7053 5.58623C14.1639 5.14157 13.4003 4.91923 12.4143 4.91923H8.49925V10.2842H12.4143ZM12.8493 19.0712C13.8933 19.0712 14.7246 18.8392 15.3433 18.3752C15.9813 17.9112 16.3003 17.1669 16.3003 16.1422C16.3003 15.1176 15.9813 14.3732 15.3433 13.9092C14.7246 13.4452 13.8933 13.2132 12.8493 13.2132H8.49925V19.0712H12.8493Z"
        }))
    }, i.BoldIcon, void 0, {
        size: 24
    })
}