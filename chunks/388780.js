function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("114514"),
        a = n("994500");
    t.default = (0, o.replaceIcon)(function(e) {
        var t, n, o = e.width,
            i = e.height,
            u = e.color,
            s = e.className,
            l = e.foreground,
            c = function(e, t) {
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
            }(e, ["width", "height", "color", "className", "foreground"]);
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
        }({}, (0, a.default)(c)), n = (n = {
            className: s,
            width: void 0 === o ? 24 : o,
            height: void 0 === i ? 24 : i,
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
            className: l,
            fill: void 0 === u ? "currentColor" : u,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.278 3.00098H3C2.447 3.00098 2 3.44898 2 4.00098V8.00098C2 8.30498 2.139 8.59298 2.375 8.78198L7.304 12.724C8.206 13.86 9.51 14.659 11 14.911V16.001H9C8.447 16.001 8 16.449 8 17.001V20.001H7.5C7.22386 20.001 7 20.2248 7 20.501V21.501C7 21.7771 7.22386 22.001 7.5 22.001H16.5C16.7761 22.001 17 21.7771 17 21.501V20.501C17 20.2248 16.7761 20.001 16.5 20.001H16V17.001C16 16.449 15.553 16.001 15 16.001H13V14.911C14.49 14.659 15.794 13.86 16.696 12.724L21.625 8.78198C21.861 8.59298 22 8.30498 22 8.00098V4.00098C22 3.44898 21.553 3.00098 21 3.00098H17.722C17.375 2.40598 16.737 2.00098 16 2.00098H8C7.262 2.00098 6.625 2.40598 6.278 3.00098ZM20 5.00098V7.52098L17.994 9.12598C17.994 9.10435 17.9955 9.08348 17.997 9.06274C17.9985 9.04224 18 9.02185 18 9.00098V5.00098H20ZM6.006 9.12698L4 7.52098V5.00098H6V9.00098C6 9.02173 6.00147 9.042 6.00295 9.0625C6.00447 9.08349 6.006 9.10472 6.006 9.12698Z"
        }))
    }, i.TrophyIcon, void 0, {
        size: 24
    })
}