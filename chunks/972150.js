function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ServerGridIcon: function() {
            return a
        }
    });
    var r = n("470079"),
        o = n("447515"),
        i = n("722161"),
        a = function(e) {
            var t, n, a = e.width,
                u = e.height,
                s = e.color,
                l = void 0 === s ? o.default.colors.INTERACTIVE_NORMAL : s,
                c = e.colorClass,
                f = function(e, t) {
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
                }(e, ["width", "height", "color", "colorClass"]);
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
            }({}, (0, i.default)(f)), n = (n = {
                xmlns: "http://www.w3.org/2000/svg",
                width: void 0 === a ? 24 : a,
                height: void 0 === u ? 24 : u,
                fill: "none",
                viewBox: "0 0 24 24"
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
                fill: "string" == typeof l ? l : l.css,
                d: "M5.25 2A3.25 3.25 0 0 0 2 5.25v2.5C2 9.55 3.46 11 5.25 11h2.5C9.55 11 11 9.54 11 7.75v-2.5C11 3.45 9.54 2 7.75 2h-2.5ZM5.25 13A3.25 3.25 0 0 0 2 16.25v2.5C2 20.55 3.46 22 5.25 22h2.5c1.8 0 3.25-1.46 3.25-3.25v-2.5C11 14.45 9.54 13 7.75 13h-2.5ZM13 5.25C13 3.45 14.46 2 16.25 2h2.5C20.55 2 22 3.46 22 5.25v2.5c0 1.8-1.46 3.25-3.25 3.25h-2.5A3.25 3.25 0 0 1 13 7.75v-2.5ZM16.25 13A3.25 3.25 0 0 0 13 16.25v2.5c0 1.8 1.46 3.25 3.25 3.25h2.5c1.8 0 3.25-1.46 3.25-3.25v-2.5c0-1.8-1.46-3.25-3.25-3.25h-2.5Z",
                className: void 0 === c ? "" : c
            }))
        }
}