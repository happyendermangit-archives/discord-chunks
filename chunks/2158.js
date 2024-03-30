function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("351482"),
        i = n("516821"),
        a = n("994500");
    t.default = (0, o.replaceIcon)(function(e) {
        var t, n, o = e.width,
            i = e.height,
            u = e.color,
            s = e.foreground,
            l = function(e, t) {
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
        }({
            width: void 0 === o ? 24 : o,
            height: void 0 === i ? 24 : i
        }, (0, a.default)(l)), n = (n = {
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
            d: "m2 2c-1.1046 0-2 0.89543-2 2v16c0 1.1046 0.89543 2 2 2h20c1.1046 0 2-0.8954 2-2v-16c0-1.1046-0.8954-2-2-2h-20zm2.4846 13.931c0.55833 0.375 1.2 0.5625 1.925 0.5625 0.96667 0 1.6958-0.3333 2.1875-1l0.2375 0.825h1.475v-4.9h-3.7625v1.625h1.9875v1.075c-0.15833 0.225-0.38333 0.4042-0.675 0.5375-0.28333 0.125-0.59583 0.1875-0.9375 0.1875-0.76667 0-1.3542-0.2458-1.7625-0.7375-0.40833-0.4916-0.6125-1.1916-0.6125-2.1 0-0.9 0.20417-1.5958 0.6125-2.0874 0.40833-0.5 0.99583-0.75 1.7625-0.75 0.84167 0 1.475 0.39166 1.9 1.175l1.4125-1.0124c-0.30003-0.575-0.74586-1.0208-1.3375-1.3375-0.58333-0.31667-1.2458-0.475-1.9875-0.475-0.875 0-1.6292 0.19166-2.2625 0.575-0.625 0.38333-1.1042 0.9125-1.4375 1.5875-0.325 0.67495-0.4875 1.45-0.4875 2.325 0 0.8834 0.15417 1.6667 0.4625 2.35 0.30833 0.675 0.74167 1.2 1.3 1.575zm7.4509 0.3875h1.825v-8.625h-1.825v8.625zm3.5767 0h1.825v-3.275h3.2v-1.65h-3.2v-2.05h3.9375v-1.65h-5.7625v8.625z",
            clipRule: "evenodd",
            fillRule: "evenodd",
            fill: void 0 === u ? "currentColor" : u,
            className: s
        }))
    }, i.GifIcon, void 0, {
        size: 24
    })
}