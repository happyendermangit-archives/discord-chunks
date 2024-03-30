function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        BellZIcon: function() {
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
                d: "M22.07 3.29 18.68 7h2.82c.28 0 .5.23.5.5v1a.5.5 0 0 1-.5.5h-5.33a.5.5 0 0 1-.5-.5v-1a1 1 0 0 1 .21-.63l1.1-1.38 1.99-2.5H16.5a.5.5 0 0 1-.5-.5V1.5c0-.28.22-.5.5-.5h5.33c.28 0 .5.22.5.5v1.11a1 1 0 0 1-.26.68Z",
                className: f
            }), n.createElement("path", {
                fill: "string" == typeof u ? u : u.css,
                d: "M19 11.5a.5.5 0 0 0-.5-.5h-2.33a2.5 2.5 0 0 1-2.5-2.5v-1a3 3 0 0 1 .65-1.87l.48-.6c.18-.23.12-.57-.08-.78a2.5 2.5 0 0 1-.7-1.49.94.94 0 0 0-.07-.24 2 2 0 0 0-3.87-.07.62.62 0 0 1-.39.44A7 7 0 0 0 5 9.5v2.09a.5.5 0 0 1-.13.33l-1.1 1.22A3 3 0 0 0 3 15.15v.28c0 .67.34 1.29.95 1.56 1.31.6 4 1.51 8.05 1.51 4.05 0 6.74-.91 8.05-1.5.61-.28.95-.9.95-1.57v-.28a3 3 0 0 0-.77-2l-1.1-1.23a.5.5 0 0 1-.13-.33v-.09ZM9.18 19.84A.16.16 0 0 0 9 20a3 3 0 1 0 6 0c0-.1-.09-.17-.18-.16a24.84 24.84 0 0 1-5.64 0Z",
                className: f
            }))
        }
}