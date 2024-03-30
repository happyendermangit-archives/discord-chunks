function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("153832"),
        i = n("351482"),
        a = n("647942"),
        u = n("994500");
    t.default = (0, i.replaceIcon)(function(e) {
        var t, n, i = e.width,
            a = e.height,
            s = e.color,
            l = void 0 === s ? "currentColor" : s,
            c = e.foreground,
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
            }(e, ["width", "height", "color", "foreground"]),
            d = r.useRef((0, o.v4)());
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
        }({}, (0, u.default)(f)), n = (n = {
            width: void 0 === i ? 24 : i,
            height: void 0 === a ? 24 : a,
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
        }), t), r.createElement("g", {
            clipPath: "url(#".concat(d.current, ")")
        }, r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.92871 13.4149L10.5857 19.0709L18.3639 11.2927C19.7781 9.87859 22.6066 6.48376 21.1923 2.80748C17.5153 1.3932 14.1213 4.22173 12.7074 5.63625L4.92871 13.4149ZM16.064 9.93309C17.1686 9.93309 18.064 9.03766 18.064 7.93309C18.064 6.82852 17.1686 5.93309 16.064 5.93309C14.9594 5.93309 14.064 6.82852 14.064 7.93309C14.064 9.03766 14.9594 9.93309 16.064 9.93309Z",
            fill: l,
            className: c
        }), r.createElement("path", {
            d: "M3.41357 16.7844C2.34946 17.8496 2.00004 22 2.00004 22C2.00004 22 6.15125 21.6521 7.21627 20.5869C7.71243 20.0915 7.96638 19.4494 8 18.8004L5.21285 18.7866L5.19829 16C4.54947 16.0336 3.90973 16.2881 3.41357 16.7844Z",
            fill: l,
            className: c
        }), r.createElement("path", {
            d: "M9.17144 9.17151H3.51459L1.74684 10.9393L6.34302 11.9999L9.17144 9.17151Z",
            fill: l,
            className: c
        }), r.createElement("path", {
            d: "M14.8283 14.8283V20.4852L13.0606 22.2529L11.9999 17.6568L14.8283 14.8283Z",
            fill: l,
            className: c
        })), r.createElement("defs", null, r.createElement("clipPath", {
            id: d.current
        }, r.createElement("rect", {
            width: "24",
            height: "24",
            fill: c
        }))))
    }, a.ActivitiesIcon, void 0, {
        size: 24
    })
}