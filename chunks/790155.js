function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r("470079"),
        o = r("351482"),
        c = r("596350"),
        i = r("994500");
    t.default = (0, o.replaceIcon)(function(e) {
        var t, r, o = e.width,
            c = e.height,
            l = e.color,
            u = void 0 === l ? "currentColor" : l,
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
            }(e, ["width", "height", "color"]);
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
            d: "M17 15.54V17.44C18.828 17.807 20 18.368 20 19C20 20.106 16.419 21 12 21C7.581 21 4 20.106 4 19C4 18.368 5.173 17.807 7 17.44V15.54C4.014 16.231 2 17.52 2 19C2 21.21 6.477 23 12 23C17.523 23 22 21.21 22 19C22 17.52 19.986 16.231 17 15.54Z",
            fill: u
        }), n.createElement("path", {
            d: "M18 9C18 5.687 15.314 3 12 3C8.686 3 6 5.687 6 9C6 13 12 20 12 20C12 20 18 13 18 9ZM10 9C10 7.896 10.896 7 12 7C13.104 7 14 7.896 14 9C14 10.104 13.104 11 12 11C10.896 11 10 10.104 10 9Z",
            fill: u
        }))
    }, c.LocationIcon, void 0, {
        size: 24
    })
}