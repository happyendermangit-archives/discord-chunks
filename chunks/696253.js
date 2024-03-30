function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("356146"),
        a = n("994500");
    t.default = (0, o.replaceIcon)(function(e) {
        var t, n, o = e.width,
            i = void 0 === o ? 24 : o,
            u = e.height,
            s = void 0 === u ? 24 : u,
            l = e.color,
            c = void 0 === l ? "currentColor" : l,
            f = e.foreground,
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
            }(e, ["width", "height", "color", "foreground"]);
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
        }({}, (0, a.default)(d)), n = (n = {
            width: i,
            height: s,
            viewBox: "0 0 20 20",
            fill: "none"
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), r.createElement("g", {
            clipPath: "url(#clip0_1139_61304)"
        }, r.createElement("path", {
            transform: "translate(2, 1.5)",
            d: "M15.2 3.27273V5.72727C15.2 6.17727 14.84 6.54545 14.4 6.54545H11.2C10.76 6.54545 10.4 6.17727 10.4 5.72727V3.27273C10.4 2.82273 10.76 2.45455 11.2 2.45455V1.63636C11.2 0.736364 11.92 0 12.8 0C13.68 0 14.4 0.736364 14.4 1.63636V2.45455C14.84 2.45455 15.2 2.82273 15.2 3.27273ZM12 2.45455H13.6V1.63636C13.6 1.18636 13.24 0.818182 12.8 0.818182C12.36 0.818182 12 1.18636 12 1.63636V2.45455Z",
            fill: c,
            className: f
        }), r.createElement("path", {
            transform: "translate(2, 1.5)",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.8 1.63636H3.2C1.43269 1.63636 0 3.06905 0 4.83636V14.4364C0 16.2036 1.43269 17.6364 3.2 17.6364H12.8C14.5673 17.6364 16 16.2036 16 14.4364V8.03636H10.4C9.51632 8.03636 8.8 7.32002 8.8 6.43636V1.63636ZM4.8 4.83636C5.68256 4.83636 6.4 5.55252 6.4 6.43636C6.4 7.32084 5.68256 8.03636 4.8 8.03636C3.91552 8.03636 3.2 7.32084 3.2 6.43636C3.2 5.55252 3.91552 4.83636 4.8 4.83636ZM3.2 14.4364L5.6 11.2364L7.2 12.8364L10.4 8.83636L12.8 14.4364H3.2Z",
            fill: c,
            className: f
        })), r.createElement("defs", null, r.createElement("clipPath", {
            id: "clip0_1139_61304"
        }, r.createElement("rect", {
            width: i,
            height: s,
            fill: c
        }))))
    }, i.ImageLockIcon, void 0, {
        size: 24
    })
}