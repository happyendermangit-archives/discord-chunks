function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StrikethroughIcon: function() {
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
                d: "M12.1 22.5c-1.8 0-3.3-.37-4.53-1.11A7.95 7.95 0 0 1 4.9 18.8a.46.46 0 0 1 .1-.6l1.38-1.16a.5.5 0 0 1 .73.12 7.44 7.44 0 0 0 1.92 2.04 5.8 5.8 0 0 0 3.22.81c1.36 0 2.42-.3 3.16-.9a3.13 3.13 0 0 0 1.14-2.6c0-1.02-.42-1.79-1.26-2.32a9.65 9.65 0 0 0-2.15-.94H2.5a.5.5 0 0 1-.5-.5v-1.5c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5h-3.16l.1.15c.57.76.86 1.75.86 2.96a5.6 5.6 0 0 1-1.93 4.5c-1.29 1.1-3.04 1.64-5.27 1.64ZM5.7 8.36c.09.39.45.64.85.64h2.1c.18 0 .28-.25.15-.4a2.46 2.46 0 0 1-.56-1.66c0-.96.36-1.69 1.08-2.2a4.94 4.94 0 0 1 2.93-.78c1.11 0 2.03.22 2.75.67.62.38 1.24 1 1.86 1.82.17.23.49.28.7.1l1.22-1.02a.46.46 0 0 0 .1-.6 7.76 7.76 0 0 0-6.63-3.43c-1.23 0-2.35.22-3.36.67a5.03 5.03 0 0 0-3.3 4.86c-.01.47.03.92.12 1.33Z",
                className: void 0 === c ? "" : c
            }))
        }
}