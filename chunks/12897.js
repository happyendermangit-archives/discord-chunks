function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("602233"),
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
            width: void 0 === o ? 24 : o,
            height: void 0 === i ? 24 : i,
            viewBox: "0 0 24 24",
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
            d: "M12.3345 2.71469L21.0315 10.542C21.3721 10.8486 21.1553 11.4137 20.697 11.4137H19V18.4137C19 18.9659 18.5523 19.4137 18 19.4137H15C14.4477 19.4137 14 18.9659 14 18.4137V13.4137H10V18.4137C10 18.9659 9.55228 19.4137 9 19.4137H6C5.44771 19.4137 5 18.9659 5 18.4137V11.4137H3.30298C2.84473 11.4137 2.62789 10.8486 2.96849 10.542L11.6655 2.71469C11.8557 2.54356 12.1443 2.54356 12.3345 2.71469Z",
            fill: void 0 === u ? "currentColor" : u
        }))
    }, i.HomeIcon, void 0, {
        size: 24
    })
}