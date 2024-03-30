function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("444455"),
        a = n("994500");
    t.default = (0, o.replaceIcon)(function(e) {
        var t, n, o = e.width,
            i = e.height,
            u = e.color,
            s = void 0 === u ? "currentColor" : u,
            l = e.foreground,
            c = function(e, t) {
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
        }, (0, a.default)(c)), n = (n = {
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
            fill: s,
            className: l,
            d: "M22.004 10.8906H2V13.1133H12.002C13.8401 13.1133 15.336 14.6091 15.336 16.4473C15.336 18.2854 13.8401 19.7813 12.002 19.7813H8.668V18.67H6.44533V20.8926C6.44533 21.5061 6.94321 22.004 7.55667 22.004H12.002C15.0659 22.004 17.5587 19.5112 17.5587 16.4473C17.5587 15.1915 17.1241 14.0446 16.4196 13.1133H22.004V10.8906Z"
        }), r.createElement("path", {
            fill: s,
            className: l,
            d: "M8.87358 8.668C8.748 8.31904 8.66798 7.94786 8.66798 7.55667C8.66798 5.71852 10.1638 4.22267 12.002 4.22267H14.2246V5.334H16.4473V3.11133C16.4473 2.49788 15.9494 2 15.336 2H12.002C8.93803 2 6.44531 4.49272 6.44531 7.55667C6.44531 7.93674 6.48421 8.30904 6.55756 8.668H8.87358Z"
        }))
    }, i.StrikethroughIcon, void 0, {
        size: 24
    })
}