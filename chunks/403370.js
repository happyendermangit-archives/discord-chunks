function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        ClockWarningIcon: function() {
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
                d: "M12 23c.08 0 .14-.08.11-.16a2.88 2.88 0 0 1 .29-2.31l2.2-3.85c.18-.3-.06-.73-.3-.97l-3-3A1 1 0 0 1 11 12V5a1 1 0 1 1 2 0v6.38c0 .13.05.26.15.35l2.56 2.56c.08.08.22.08.28-.02l.36-.64a3.06 3.06 0 0 1 5.3 0l.3.54c.22.38.78.31.86-.12A11 11 0 1 0 12 23Z",
                className: f
            }), n.createElement("path", {
                fill: "string" == typeof u ? u : u.css,
                fillRule: "evenodd",
                d: "M18.09 14.63c.4-.7 1.43-.7 1.82 0l3.96 6.9c.38.66-.12 1.47-.91 1.47h-7.92c-.79 0-1.3-.81-.91-1.48l3.96-6.9Zm.46 1.87h.9c.3 0 .52.26.5.55l-.22 2.02c-.01.16-.17.26-.33.23a1.93 1.93 0 0 0-.8 0c-.16.03-.32-.07-.33-.23l-.21-2.02a.5.5 0 0 1 .5-.55ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                clipRule: "evenodd",
                className: f
            }))
        }
}