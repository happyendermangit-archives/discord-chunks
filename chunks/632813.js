function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PollsIcon: function() {
            return i
        }
    });
    var r = n("470079"),
        a = n("447515"),
        o = n("722161"),
        i = function(e) {
            var t, n, i = e.width,
                l = e.height,
                s = e.color,
                c = void 0 === s ? a.default.colors.INTERACTIVE_NORMAL : s,
                u = e.colorClass,
                d = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = function(e, t) {
                        if (null == e) return {};
                        var n, r, a = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && (a[n] = e[n]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < o.length; r++) {
                            if (n = o[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                        }
                    }
                    return a
                }(e, ["width", "height", "color", "colorClass"]);
            return r.createElement("svg", (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, a, o;
                        r = e, a = t, o = n[t], a in r ? Object.defineProperty(r, a, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[a] = o
                    })
                }
                return e
            }({}, (0, o.default)(d)), n = (n = {
                xmlns: "http://www.w3.org/2000/svg",
                width: void 0 === i ? 24 : i,
                height: void 0 === l ? 24 : l,
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
                fill: "string" == typeof c ? c : c.css,
                d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 12c0-1.1.9-2 2-2h6a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM4 17a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z",
                className: void 0 === u ? "" : u
            }))
        }
}