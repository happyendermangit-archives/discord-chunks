function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("722161"),
        i = n("447515");

    function a(e) {
        var t, n, a = e.width,
            u = e.height,
            s = e.color,
            l = void 0 === s ? i.default.colors.INTERACTIVE_NORMAL : s,
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
        }({}, (0, o.default)(d)), n = (n = {
            width: void 0 === a ? 24 : a,
            height: void 0 === u ? 24 : u,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
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
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3 8C3 5.79086 4.79086 4 7 4C9.20914 4 11 5.79086 11 8V13C11 13.5523 10.5523 14 10 14H4C3.44772 14 3 13.5523 3 13V8ZM5 10C4.44772 10 4 9.55228 4 9C4 8.44772 4.44772 8 5 8H6V7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7V8H9.14286C9.61624 8 10 8.38376 10 8.85714V9.14286C10 9.61624 9.61624 10 9.14286 10H7.42857H6.57143H5Z",
            fill: "string" == typeof l ? l : l.css,
            className: f
        }), r.createElement("path", {
            d: "M10 16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V21C14 21.5523 13.5523 22 13 22H11C10.4477 22 10 21.5523 10 21V16Z",
            fill: "string" == typeof l ? l : l.css,
            className: f
        }), r.createElement("path", {
            d: "M10.6178 4.29252C10.4697 4.22237 10.5197 4 10.6836 4H17C19.2092 4 21 5.79087 21 8.00001L21 13C21 13.5523 20.5523 14 20 14H12.8774C12.4548 14 12.1121 13.6574 12.1121 13.2347V6.65331C12.1121 5.64373 11.5303 4.72454 10.6178 4.29252V4.29252Z",
            fill: "string" == typeof l ? l : l.css,
            className: f
        }), r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14 4C14 3.44772 14.4477 3 15 3V3C15.5523 3 16 2.55228 16 2V2C16 1.44772 15.5523 1 15 1H13C12.4477 1 12 1.44772 12 2V2V3V4C12 4.55228 12.4477 5 13 5V5C13.5523 5 14 4.55228 14 4V4Z",
            fill: "string" == typeof l ? l : l.css,
            className: f
        }))
    }

    function u(e) {
        return r.createElement(a, e)
    }
}