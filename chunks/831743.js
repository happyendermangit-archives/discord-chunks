function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("530813"),
        a = n("994500");
    t.default = (0, o.replaceIcon)(function(e) {
        var t = e.width,
            n = e.height,
            o = e.className,
            i = function(e, t) {
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
            }(e, ["width", "height", "className"]);
        return r.createElement("svg", function(e) {
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
            className: o,
            width: void 0 === t ? 24 : t,
            height: void 0 === n ? 24 : n,
            viewBox: "0 0 24 24",
            fill: "none"
        }, (0, a.default)(i)), r.createElement("path", {
            fill: "#3BA55C",
            d: "M9.00043 14.0492L19.5904 3.46924L23.1212 7.00006L8.99993 21.1214L1.28485 13.4063L4.83367 9.88248L9.00043 14.0492Z"
        }))
    }, i.CheckmarkLargeIcon, void 0, {
        size: 24
    })
}