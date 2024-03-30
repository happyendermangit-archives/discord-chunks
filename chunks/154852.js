function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        NewUserIcon: function() {
            return a
        }
    });
    var n = r("470079"),
        l = r("447515"),
        i = r("722161"),
        a = function(e) {
            var t, r, a = e.width,
                o = e.height,
                c = e.color,
                u = void 0 === c ? l.default.colors.INTERACTIVE_NORMAL : c,
                s = e.colorClass,
                f = void 0 === s ? "" : s,
                d = function(e, t) {
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
                }(e, ["width", "height", "color", "colorClass"]);
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
            }({}, (0, i.default)(d)), r = (r = {
                xmlns: "http://www.w3.org/2000/svg",
                width: void 0 === a ? 24 : a,
                height: void 0 === o ? 24 : o,
                fill: "none",
                viewBox: "0 0 24 24"
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
                fill: "string" == typeof u ? u : u.css,
                d: "M11.55 14.4c.28.17.62.17.9 0 1.6-.96 6.88-4.46 6.88-8.57A3.83 3.83 0 0 0 15.5 2c-1.56 0-2.58.6-3.5 1.5A4.66 4.66 0 0 0 8.5 2a3.83 3.83 0 0 0-3.83 3.83c0 4.1 5.29 7.61 6.88 8.57Z",
                className: f
            }), n.createElement("path", {
                fill: "string" == typeof u ? u : u.css,
                d: "M3.11 14.86a1 1 0 0 0-.83 1.24l.23.89a6 6 0 0 0 6.46 4.45l2.03-.22V22a1 1 0 1 0 2 0v-.78l2.03.22A6 6 0 0 0 21.5 17l.23-.89a1 1 0 0 0-.83-1.24l-2.05-.29a6 6 0 0 0-6.1 3.07L12 19l-.74-1.36a6 6 0 0 0-6.1-3.07l-2.05.29ZM2.93 9.4a.6.6 0 0 1 1.14 0l.1.25a2 2 0 0 0 1.18 1.19l.25.1a.6.6 0 0 1 0 1.13l-.25.1a2 2 0 0 0-1.19 1.18l-.1.25a.6.6 0 0 1-1.13 0l-.1-.25a2 2 0 0 0-1.18-1.19l-.25-.1a.6.6 0 0 1 0-1.13l.25-.1a2 2 0 0 0 1.19-1.18l.1-.25ZM21.46 9.82a.49.49 0 0 0-.92 0v.03a2 2 0 0 1-1.19 1.18l-.03.01a.49.49 0 0 0 0 .92h.03a2 2 0 0 1 1.18 1.19l.01.03c.16.43.76.43.92 0v-.03a2 2 0 0 1 1.19-1.18l.03-.01a.49.49 0 0 0 0-.92h-.03a2 2 0 0 1-1.18-1.19l-.01-.03Z",
                className: f
            }))
        }
}