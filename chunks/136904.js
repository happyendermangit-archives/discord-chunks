function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ImageWarningIcon: function() {
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
                f = void 0 === c ? "" : c,
                d = function(e, t) {
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
            }({}, (0, i.default)(d)), n = (n = {
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
                fillRule: "evenodd",
                d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6.99c0-.48.12-.98.4-1.47l.88-1.53H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0l.73.98.27-.48a3.06 3.06 0 0 1 5.3 0l.35.62V5a3 3 0 0 0-3-3H5Zm3.65 3.08c.67-.65 1.78-.01 1.55.9-.12.49.17.98.65 1.12.9.26.9 1.54 0 1.8a.93.93 0 0 0-.65 1.12c.23.91-.88 1.55-1.55.9a.93.93 0 0 0-1.3 0c-.67.65-1.78.01-1.55-.9a.93.93 0 0 0-.65-1.12c-.9-.26-.9-1.54 0-1.8a.93.93 0 0 0 .65-1.12c-.23-.91.88-1.55 1.55-.9.36.35.94.35 1.3 0Z",
                clipRule: "evenodd",
                className: f
            }), r.createElement("path", {
                fill: "string" == typeof l ? l : l.css,
                fillRule: "evenodd",
                d: "M19.91 14.63a1.06 1.06 0 0 0-1.82 0l-3.96 6.9c-.38.66.12 1.47.91 1.47h7.92c.79 0 1.3-.81.91-1.48l-3.96-6.9Zm-.46 1.87h-.9a.5.5 0 0 0-.5.55l.22 2.02c.01.16.17.26.33.23a1.93 1.93 0 0 1 .8 0c.16.03.32-.07.33-.23l.21-2.02a.5.5 0 0 0-.5-.55ZM20 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
                clipRule: "evenodd",
                className: f
            }))
        }
}