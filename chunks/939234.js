function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r("470079"),
        o = r("351482"),
        a = r("251240"),
        l = r("994500");
    t.default = (0, o.replaceIcon)(function(e) {
        var t, r, o = e.width,
            a = e.height,
            c = e.color,
            s = e.foreground,
            i = function(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && (o[r] = e[r]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        if (r = a[n], !(t.indexOf(r) >= 0)) Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
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
                    var n, o, a;
                    n = e, o = t, a = r[t], o in n ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = a
                })
            }
            return e
        }({}, (0, l.default)(i)), r = (r = {
            width: void 0 === o ? 19 : o,
            height: void 0 === a ? 24 : a,
            viewBox: "0 0 19 24",
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
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.7036 11C12.7036 12.66 11.2786 14 9.5 14C7.72143 14 6.28571 12.66 6.28571 11V5C6.28571 3.34 7.72143 2 9.5 2C11.2786 2 12.7143 3.34 12.7143 5L12.7036 11ZM9.5 16.1C12.4571 16.1 15.1786 14 15.1786 11H17C17 14.42 14.0857 17.24 10.5714 17.72V22H8.42857V17.72C4.91429 17.23 2 14.41 2 11H3.82143C3.82143 14 6.54286 16.1 9.5 16.1Z",
            fill: void 0 === c ? "currentColor" : c,
            className: s
        }))
    }, a.MicrophoneIcon, void 0, {
        size: 24
    })
}