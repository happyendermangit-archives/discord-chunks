function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r("470079"),
        l = r("351482"),
        i = r("169661"),
        a = r("994500");
    t.default = (0, l.replaceIcon)(function(e) {
        var t, r, l = e.color,
            i = void 0 === l ? "currentColor" : l,
            o = e.height,
            c = e.width,
            u = function(e, t) {
                if (null == e) return {};
                var r, n, l = function(e, t) {
                    if (null == e) return {};
                    var r, n, l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && (l[r] = e[r]);
                    return l
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        if (r = i[n], !(t.indexOf(r) >= 0)) Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
                    }
                }
                return l
            }(e, ["color", "height", "width"]);
        return n.createElement("svg", (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    var n, l, i;
                    n = e, l = t, i = r[t], l in n ? Object.defineProperty(n, l, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[l] = i
                })
            }
            return e
        }({}, (0, a.default)(u)), r = (r = {
            width: void 0 === c ? 24 : c,
            height: void 0 === o ? 24 : o,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
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
            d: "M12.83 14.24L9.29006 10.71C9.19737 10.6165 9.124 10.5057 9.07424 10.3839C9.02447 10.2621 8.99926 10.1316 9.00002 10V4H11V9.58997L14.24 12.83L12.83 14.24Z",
            fill: i
        }), n.createElement("path", {
            d: "M13.3101 2L18 6.69V13.3101L13.3101 18H6.68994L2 13.3101V6.69L6.68994 2H13.3101V2ZM13.73 0H6.27002C6.00525 0.00368349 5.75169 0.107244 5.56006 0.289978L0.290039 5.56C0.107305 5.75163 0.00368349 6.00525 0 6.27002V13.73C0.00368349 13.9947 0.107305 14.2483 0.290039 14.4399L5.56006 19.71C5.75169 19.8927 6.00525 19.9963 6.27002 20H13.73C13.9947 19.9963 14.2483 19.8927 14.4399 19.71L19.71 14.4399C19.8927 14.2483 19.9963 13.9947 20 13.73V6.27002C19.9963 6.00525 19.8927 5.75163 19.71 5.56L14.4399 0.289978C14.2483 0.107244 13.9947 0.00368349 13.73 0V0Z",
            fill: i
        }))
    }, i.ClockWarningIcon, void 0, {
        size: 24
    })
}