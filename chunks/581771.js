function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        StickerSmallIcon: function() {
            return l
        }
    });
    var n = r("470079"),
        o = r("447515"),
        a = r("722161"),
        l = function(e) {
            var t, r, l = e.width,
                c = e.height,
                s = e.color,
                i = void 0 === s ? o.default.colors.INTERACTIVE_NORMAL : s,
                u = e.colorClass,
                f = void 0 === u ? "" : u,
                d = function(e, t) {
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
                }(e, ["width", "height", "color", "colorClass"]);
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
            }({}, (0, a.default)(d)), r = (r = {
                xmlns: "http://www.w3.org/2000/svg",
                width: void 0 === l ? 24 : l,
                height: void 0 === c ? 24 : c,
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
                fill: "string" == typeof i ? i : i.css,
                fillRule: "evenodd",
                d: "M7 3h10a4 4 0 0 1 4 4v6.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v1.5a.5.5 0 0 1-.5.5H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm-.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
                clipRule: "evenodd",
                className: f
            }), n.createElement("path", {
                fill: "string" == typeof i ? i : i.css,
                d: "M19 16h1.73a3 3 0 0 1-.6.88l-3.25 3.24a3 3 0 0 1-.88.61V19a3 3 0 0 1 3-3Z",
                className: f
            }))
        }
}